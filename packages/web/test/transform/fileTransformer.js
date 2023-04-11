import { basename } from 'path';

export function process(sourceText, sourcePath, options) {
  return {
    code: `module.exports = ${JSON.stringify(basename(sourcePath))};`,
  };
}
