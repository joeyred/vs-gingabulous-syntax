import * as fs from 'fs';

export function writeThemeFile(path: string, themeData: any) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(themeData, null, 2), (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}