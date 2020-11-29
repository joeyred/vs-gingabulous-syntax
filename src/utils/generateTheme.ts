import editorVariables from '../config/editor-variables';
import { parseTokenSettings } from './token-factory';
import * as languages from '../languages'; 
import semanticTokens from '../semantic/tokens';
// import { DebugConsoleMode } from 'vscode';

function buildLanguageArray(languageObject: any) {
  const output: [] = [];
  for (let key in languageObject) {
    // TODO This is where config checks will happen to dynamically include
    //      or exclude languages.
    let language: [] = languageObject[key].default;
    output.push(...language);
  }
  return output;
}

function generateTokenColors(languageArrays: any) {
  const tokenColors = [];
  for ( let i = 0; languageArrays.length > i; i++) {
    let languageArray = languageArrays[i];
    tokenColors.push({
      name: languageArray[0],
      scope: languageArray[1],
      settings: parseTokenSettings(languageArray[2])
    });
  }
  // console.log(tokenColors);
  return tokenColors;
}

// function generateSemanticTokenColors(semanticTokenArray: []) {
//   const semanticColors = {};

//   for (let i = 0; semanticTokenArray.length > i; i++) {
//     let semanticToken = semanticTokenArray[i];
//     semanticColors[semanticToken[0]] = 
//   }
// }

// function generateEditorColors() {}

export function generateTheme(config?: object) {
  // console.log(languages);
  // console.log({
  //   name: "Gingabulous",
  //   type: "dark",
  //   colors: editorVariables,
  //   tokenColors: generateTokenColors(languages)
  // });
  // console.log(languages);
  const languageArray: [] = buildLanguageArray(languages);

  return {
    name: "Gingabulous",
    type: "dark",
    colors: editorVariables,
    semanticHighlighting: true,
    tokenColors: generateTokenColors(languageArray),
    semanticTokenColors: semanticTokens
  };
}