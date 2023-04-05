module.exports = {
  '*.ts': [
    'eslint --fix',
    'tsc-files --noEmit',
    "git add"
  ],
};
