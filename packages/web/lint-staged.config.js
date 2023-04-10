module.exports = {
  '**/*.ts?(x)': [
    'yarn lint:fix',
    () => 'tsc -p tsconfig.json --pretty --noEmit',
    'yarn test --findRelatedTests --passWithNoTests --bail',
  ],
};
