// NOTE
// This file is just a test of what the final method might look like
import make from '../utils/color';
export const Colors = {
  white: '#fdfdfd',
  veryLightGray: '#c5c8c6',
  lightGray: '#969896',
  gray: '#373b41',
  darkGray: '#282a2e',
  // ====== //
  red: '#F07D8E',
  orange: '#F89575',
  fadedYellow: '#D6D16F',
  yellow: '#FCDB77',
  gold: '#FCB96A',
  green: '#6FD683',
  lightGreen: '#8DF7A2',
  seaGreen: '#7ad6c0',
  turquois: '#21C49E',
  blue: '#7A8AD6',
  lightBlue: '#7AB9D6',
  cyan: '#51CAFC',
  lavender: '#A385D6',
  purple: '#D090D6',
  // pink: '#F7687C',
  pink: '#D966B1',
  // ====== //
  brown: '#B58B72',
  clay: '#D6BA9A',
  
  greyBrick: '#99857E'
};

const variables = make(Colors.lightGreen, [
  'constant',
  'param',
  'object',
  'objectKey'
]);

const functions = make(Colors.cyan, [
  'builtin',
  'method'
]);

const keywords = make(Colors.pink, [
  'control',
  'modifier',
  'interpolation',
  'operator'
]);

const storage = make(Colors.lavender, [
  'type',
  'modifier',
  'setter'
]);

const classes = make(Colors.yellow, [
  'this',
  'inherited',
  'component'
]);

const keywordValues = make(Colors.cyan, [
  'operator',
  'null',
  'boolean',
  'undefined',
]);

const constants = make(Colors.turquois, [
  'numeric',
  'boolean',
  'null',
  'undefined'
]);

const builtin = make(Colors.green, [
  'object',
  'method'
]);

export default {
  Colors,
  variables,
  functions,
  keywords,
  storage,
  classes,
  constants,
  keywordValues,
  builtin
};