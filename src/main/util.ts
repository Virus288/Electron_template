import path from 'path';
import { URL } from 'url';

export let resolveMainPath: (htmlFileName: string, target?: string) => string;

if (process.env.NODE_ENV === 'development') {
  const port = process.env.PORT || 1212;
  resolveMainPath = (htmlFileName: string, target?: string): string => {
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    if (target) url.search = `target=${target}`;
    return url.href;
  };
} else {
  resolveMainPath = (htmlFileName: string, target?: string): string => {
    if (target) {
      return `file://${path.resolve(
        __dirname,
        '../renderer/',
        htmlFileName
      )}?target=${target}`;
    }
    return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
  };
}
