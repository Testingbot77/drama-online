const crypto = require('crypto');
const db = require('./db');

// In-memory active tokens (persists per server run, token expires in 7 days)
const activeTokens = new Map();

function hashPassword(password) {
  return crypto.createHash('sha256').update(String(password)).digest('hex');
}

function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

function verifyAdminCredentials(inputPassword) {
  const input = String(inputPassword || '').trim();
  const settings = db.getSettings();
  const configuredPass = String(settings.adminPasswordHash || '1234').trim();

  // Support standard master PIN '1234', '993355', or custom configured PIN
  if (input === '1234' || input === '993355' || configuredPass === input || hashPassword(input) === configuredPass) {
    const token = generateToken();
    activeTokens.set(token, {
      createdAt: Date.now(),
      expiresAt: Date.now() + (7 * 24 * 60 * 60 * 1000)
    });
    return { success: true, token };
  }
  return { success: false, error: 'Invalid admin PIN. Please enter 1234.' };
}

function requireAdminAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.slice(7) : req.query.admin_token;

  if (!token) {
    return res.status(401).json({ success: false, error: 'Unauthorized: Admin authentication required' });
  }

  const session = activeTokens.get(token);
  if (!session || session.expiresAt < Date.now()) {
    if (session) activeTokens.delete(token);
    return res.status(403).json({ success: false, error: 'Forbidden: Session expired or invalid' });
  }

  next();
}

module.exports = {
  verifyAdminCredentials,
  requireAdminAuth,
  hashPassword
};
