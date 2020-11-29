import { join } from 'path';
import * as fs from 'fs';
import { workspace, ConfigurationTarget } from 'vscode';
import { generateTheme } from './utils/generateTheme';

const THEME_PATH = join(__dirname, 'themes', 'Gingabulous.json');

function writeThemeFile(path: string, themeData: any) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(themeData), (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

// export async function activate() {
//   try {
//     // get config
//   // build theme
//   // add listeners
//   // add updater

//   // build the theme
//   const theme = generateTheme();
//   // write the file
//   writeThemeFile(THEME_PATH, theme);
//   } catch(error) {
//     console.log(error);
//   }
  
// }

export async function activate() {
  
  // const theme = generateTheme();
  // console.log(theme);
  // write the file
  writeThemeFile(THEME_PATH, generateTheme());

}