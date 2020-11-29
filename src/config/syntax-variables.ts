import Scheme, { Colors } from '../color-concept/color-scheme';
import { Color } from 'vscode';
// import { Color } from 'vscode';

const testColor = '#222222';

export const SEMANTIC = {
  namespace: Colors.turquois,
  type: Colors.turquois,
  struct: Colors.red,
  class: Colors.green,
  interface: Colors.brown,
  enum: Colors.brown,
  enumMember: Colors.turquois,
  function: Colors.cyan,
  member: Colors.cyan,
  macro: Colors.turquois,
  variable: Colors.white,
  constant: Colors.purple,
  param: {
    foreground: Colors.white,
    fontStyle: 'italic',
    // color: '#FC6A7F'
  },
  property: Colors.lavender,
  propertyDeclaration: Colors.orange,
  propertyReadOnly: Colors.turquois,
  event: Colors.turquois,
  defaultLibrary: {
    type: '#7BE8ED',
    class: '#7BE8ED',
    function: Colors.seaGreen,
    variable: '#7BE8ED'
  }
}

export const GENERAL = {
  // Text
  text: Colors.veryLightGray,
  // Comments
  comment: Colors.lightGray, //
  commentPunctuation: Colors.lightGray, //
  // Punctuation
  punctuation: Colors.clay, //
  braces: Colors.greyBrick,
  // Strings
  string: '#B9FC83', //
  stringQuotes: Colors.greyBrick, //
  // Numeric
  numeric: Colors.pink, //
  // Keyword - ex: return switch case while for import export default
  keyword: Colors.gold, //
  keywordControl: Colors.gold, //
  keywordModifier: Colors.blue,
  // Operator - ex: === !== => <= > < !
  operator: '#e5c07b', //
  // Interpolation - ex: ${} {{}}
  interpolation: Colors.red, //
  // Storage
  storage: Colors.red, //
  storageType: Colors.red, // ?
  storageModifier: Colors.red, // ?
  storageFunction: Colors.red,
  // Definition - ex: @ $ #
  definition: Colors.red,
  
  // Variable
  variable: Colors.white, //
  // Constant
  // TODO Switch to `variableConstant` and use this for real consatnt stuff.
  constant: Colors.purple, //
  constantLang: Colors.pink,
  // Param
  // param: Scheme.variables.param,
  undefined: Scheme.keywordValues.undefined,
  null: Scheme.keywordValues.null,
  // Boolean
  boolean: Scheme.keywordValues.boolean,
  // Object
  object: Colors.lavender, //
  objectBuiltIn: '#7BE8ED', //
  // Object Key
  // objectKey: '#AB6C78', //
  objectKey: Colors.orange, //
  // Function
  functionCall: Colors.cyan, //
  functionParameter: {
    color: Colors.white,
    style: 'italic',
    // color: '#FC6A7F'
  }, //
  functionBuiltIn: Colors.seaGreen,
  method: testColor,
  // Class
  class: Colors.green, //
  classInherited: Colors.green,
  // This
  this: Colors.green,
  // Getter & Setter
  accessor: testColor,
  setter: testColor,
  // tag & id
  tag: Colors.orange,
  attribute: Colors.veryLightGray,
  id: testColor,
};

export const HTML = {
  tag: Colors.yellow,
  attribute: GENERAL.objectKey,
  id: testColor,
  tagBraces: GENERAL.braces,
};
export const CSS = {
  id: Colors.purple,
  class: Colors.pink,
  propertyName: GENERAL.objectKey,
  keyword: Colors.lightGreen,
  psuedo: Colors.cyan,
  combinator: Colors.greyBrick,
  braces: Colors.greyBrick
};

export const SASS = {
  propertyNameAsValue: {
    style: 'italic',
    color: CSS.propertyName
  },
  function: GENERAL.functionCall,
  interpolation: GENERAL.interpolation,
  string: GENERAL.string,
};

export const LESS = {};
export const JS = {
  // Braces
  braceSquare: GENERAL.braces,
  braceCurly: GENERAL.braces,
  braceRound: GENERAL.braces,
  // Class
  classCall: GENERAL.class,
  // Functions
  functionCall: GENERAL.functionCall,
  // Builtins
  console: GENERAL.objectBuiltIn,
  // template literals
  interpolation: GENERAL.interpolation
};
export const JSX = {
  component: GENERAL.class,
  object: GENERAL.object

};
export const TS = {
  typeAnnotationPunctuation: GENERAL.punctuation,
  interface: Colors.brown,
  // typeDeclaration: '#FF9A78',
  typeDeclaration: {
    color: Colors.brown,
    style: 'italic'
  },
  typeAnnotation: '#AB6C78',
  definitionProperties: GENERAL.objectKey

};
export const VUE = {};
// Support for the Babel JavaScript extension.
// https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel
export const BABEL = {};

export const JSON = {
  key: GENERAL.objectKey
};
// Support for YAML extension.
// https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml
export const YAML = {
  arrayDash: GENERAL.punctuation,
  key: GENERAL.objectKey
};
export const PHP = {};

export const MD = {
  punctuation: Colors.greyBrick,
  heading: Colors.orange,
  italic: {
    style: 'italic',
    color: Colors.pink
  },
  bold: {
    style: 'bold',
    color: Colors.lavender
  },
  strike: Colors.lavender, // TODO REVISIT
  quote: Colors.cyan,
  link: Colors.cyan,
  linkText: Colors.cyan,
  list: Colors.purple,
  raw: Colors.red,
  seperator: Colors.yellow,
  table: Colors.greyBrick,
  tableAlignment: Colors.blue


};

export const PUG = {
  class: CSS.class, // TODO Change later to match css
  attribute: HTML.attribute,
  keyword: GENERAL.keyword,
  string: GENERAL.string,
  filter: Colors.lightBlue
};

// Support for Liquid extension
// https://marketplace.visualstudio.com/items?itemName=sissel.shopify-liquid
export const LIQUID = {
  tag: Colors.red,
  object: GENERAL.object,
  variable: GENERAL.variable
};

export const DOCBLOCK = {};
// Support for DotENV extension.
// https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv
export const DOTENV = {};
export const TODOS = {};


// export default {
//   GENERAL,
// };