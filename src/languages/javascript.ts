import { JS } from '../config/syntax-variables';

export default [
  // Braces
  [
    'Brace: Square',
    [
      'meta.brace.square.js'
    ],
    JS.braceSquare
  ],
  [
    'Brace: Round',
    [
      'meta.brace.round.js'
    ],
    JS.braceRound
  ],
  // Class
  [
    'Class: called/object',
    [
      'meta.class.js variable.other.object.js',
      'meta.class.js'
    ],
    JS.classCall
  ],
  // Functions
  [
    'Function Calls',
    [
      'meta.function.js meta.function-call.js',
      'meta.function-call.js'
    ],
    JS.functionCall
  ],

  // Template Literals
  [
    'Template Literal: Interpolation',
    [
      'punctuation.definition.template-expression'
    ],
    JS.interpolation
  ],

  // Built Ins
  // ========= //
  // // Console
  [
    'Builtin: Console',
    [
      'support.class.console'
    ],
    JS.console
  ],
  // // JSON
  [
    'Builtin: JSON',
    [
      'support.constant.json'
    ],
    JS.console
  ],
  [
    'Builtin Math',
    [
      'support.constant.math'
    ],
    JS.console
  ]
];