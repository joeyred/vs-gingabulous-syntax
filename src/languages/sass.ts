import { SASS } from '../config/syntax-variables';

export default [
  [
    'Fix: propety names used as values',
    [
      'meta.property-value.scss support.type.property-name.css',
      'meta.property-value.sass support.type.property-name.css'
    ],
    SASS.propertyNameAsValue
  ],
  [
    'Function',
    [
      'support.function.misc.scss',
      'support.function.misc.sass'
    ],
    SASS.function
  ],
  [
    'interpolation',
    [
      'source.css.scss punctuation.definition.interpolation',
      'source.css.sass punctuation.definition.interpolation'
    ],
    SASS.interpolation
  ],
  [
    'String',
    [
      'meta.attribute-selector.scss',
      'meta.attribute-selector.sass'
    ],
    SASS.string
  ]
];