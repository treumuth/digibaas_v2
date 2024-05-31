const fs = require('fs');

const homepage = process.env.NODE_ENV === 'production'
  ? 'https://digibaas.ee/web2/digibaas/web-v2/build'
  : 'https://digibaas.ee';

const packageJsonPath = './package.json';

fs.readFile(packageJsonPath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading package.json:', err);
    process.exit(1);
  }

  const packageJson = JSON.parse(data);
  packageJson.homepage = homepage;

  fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing package.json:', writeErr);
      process.exit(1);
    }

    console.log(`Homepage in package.json set to: ${homepage}`);
  });
});