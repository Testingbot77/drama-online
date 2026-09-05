const fs = require('fs');
const vm = require('vm');

const EXT_DIRS = [
  'C:/Users/HP/OneDrive/Desktop/Extension/extension',
  'C:/Users/HP/Downloads/Extension/extension'
];

EXT_DIRS.forEach(extDir => {
  const popupPath = `${extDir}/popup.js`;
  if (!fs.existsSync(popupPath)) return;

  let code = fs.readFileSync(popupPath, 'utf8');

  // Replace exact broken section
  const target = `  async function getVault() {
    return new Promise(resolve => {
      chrome.storage.local.get(['vault', 'preAnalyzedVault'], (res) => {
        const v = (res && res.vault && res.vault.length > 0) ? res.vault : ((res && res.preAnalyzedVault) || []);
        resolve(v);
      });
    });
  });
  }`;

  const replacement = `  async function getVault() {
    return new Promise(resolve => {
      chrome.storage.local.get(['vault', 'preAnalyzedVault'], (res) => {
        const v = (res && res.vault && res.vault.length > 0) ? res.vault : ((res && res.preAnalyzedVault) || []);
        resolve(v);
      });
    });
  }`;

  if (code.includes(target)) {
    code = code.replace(target, replacement);
  } else {
    // Regex replace
    code = code.replace(/async function getVault\(\)[\s\S]*?saveVault/m, `${replacement}\n\n  async function saveVault`);
  }

  fs.writeFileSync(popupPath, code, 'utf8');

  try {
    new vm.Script(code, { filename: popupPath });
    console.log(`✅ [SYNTAX 100% VALID] ${popupPath}`);
  } catch (err) {
    console.error(`❌ Still has error in ${popupPath}:`, err.message);
  }
});
