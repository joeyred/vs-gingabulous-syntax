import { GENERAL } from '../config/syntax-variables';

// console.log(GENERAL);

export default [
  [
    'Text',
    [
      'text',
      'text source'
    ],
    GENERAL.text
  ],
  [
    'Comment',
    [
      'comment'
    ],
    GENERAL.comment
  ],
  [
    'Comment Punctuation',
    [
      'punctuation.definition.comment'
    ],
    GENERAL.commentPunctuation
  ],
  // ====================== //
  // Punctuation
  // ====================== //
  [
    'Punctuation',
    [
      // TODO Add more scopes
      'punctuation'
    ],
    GENERAL.punctuation
  ],
  [
    'Definition',
    [
      'punctuation.definition.variable'
    ],
    GENERAL.definition
  ],
  [
    'Braces',
    [
      'meta.brace',
      'punctuation.definition.parameters',
      'punctuation.definition.block',
      'punctuation.definition.begin.bracket',
      'punctuation.definition.end.bracket',
      'punctuation.definition.arguments.begin.bracket',
      'punctuation.definition.arguments.end.bracket',
      'punctuation.definition.entity.begin.bracket',
      'punctuation.definition.entity.end.bracket',
      'punctuation.section.property-list.begin.bracket',
      'punctuation.section.property-list.end.bracket',
      'punctuation.section.array'
    ],
    GENERAL.braces
  ],
  
  // ====================== //
  // Strings
  // ====================== //
  [
    'Strings',
    [
      'string'
    ],
    GENERAL.string
  ],
  [
    'String Quotes',
    [
      'punctuation.definition.string.begin',
      'punctuation.definition.string.end'
    ],
    GENERAL.stringQuotes
  ],
  // ====================== //
  // Keywords
  // ====================== //
  [
    'Keywords (return, switch, case, while, if, for, etc...)',
    [
      'keyword'
    ],
    GENERAL.keyword
  ],
  [
    'Keyword Control',
    [
      'keyword.control'
    ],
    GENERAL.keywordControl
  ],
  [
    'Operator',
    [
      // 'keyword.operator.comparison',
      'keyword.operator'
    ],
    GENERAL.operator
  ],
  [
    'Interpolation',
    [
      'punctuation.quasi.element',
      'entity.quasi.element',
      'punctuation.section.embedded.begin',
      'punctuation.section.embedded.end'
    ],
    GENERAL.interpolation
  ],
  // ====================== //
  // Storage
  // ====================== //
  [
    'Storage',
    [
      'storage'
    ],
    GENERAL.storage
  ],
  [
    'Storage: Function',
    [
      'storage.type.function'
    ],
    GENERAL.storageFunction
  ],
  // ====================== //
  // Constants
  // ====================== //
  [
    'Constant',
    [
      'constant'
    ],
    GENERAL.constant
  ],
  [
    'Constant: Numeric',
    [
      'constant.numeric'
    ],
    GENERAL.numeric
  ],
  [
    'boolean, null, undefined',
    [
      'constant.language'
    ],
    GENERAL.constantLang
  ],
  // ====================== //
  // Variables
  // ====================== //
  [
    'Variable',
    [
      'variable',
      'support.variable.property'
    ],
    GENERAL.variable
  ],
  [
    'Variable: Constant',
    // TODO Revisit this. Weird scope/token issue??
    [
      'variable.other.constant'
    ],
    GENERAL.constant
  ],
  [
    'Variable: param',
    [
      'variable.parameter',
      'variable.parameter.function.js'
    ],
    GENERAL.functionParameter
  ],
  [
    'Variable: Object',
    [
      'variable.other.object',
      'variable.other.constant.object',
      'meta.objectliteral'
    ],
    GENERAL.object
  ],
  [
    'Variable: Object - Buitin',
    [
      'support.class.builtin',
      'support.type.object'
    ],
    GENERAL.objectBuiltIn
  ],
  [
    'Object: Key',
    [
      // 'string.unquoted',
      // 'constant.other.object.key.js'
      'meta.object-literal.key'
    ],
    GENERAL.objectKey
  ],
  // ====================== //
  // Functions
  // ====================== //
  [
    'Function: Call',
    [
      'entity.name.function'
    ],
    GENERAL.functionCall
  ],
  [
    'Function: Built-in',
    [
      'support.function'
    ],
    GENERAL.functionBuiltIn
  ],
  // ====================== //
  // Class
  // ====================== //
  [
    'Class',
    [
      'entity.name.class', // Is This needed?
      'entity.name.type.class'
    ],
    GENERAL.class
  ],
  [
    'Class: Inherited',
    [
      'entity.other.inherited-class'
    ],
    GENERAL.classInherited
  ],
  [
    'this',
    [
      'variable.language.this'
    ],
    GENERAL.this
  ],  
];