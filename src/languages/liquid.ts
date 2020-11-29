import { LIQUID } from '../config/syntax-variables';

export default [
  [
    'tags/keywords',
    [
      'entity.name.tag.liquid'
    ],
    LIQUID.tag
  ],
  [
    'Object/Class',
    [
      'support.class.liquid'
    ],
    LIQUID.object
  ],
  [
    'Variable & fix: overwrite punctuation target',
    [
      'support.variable.liquid',
      'variable.other.liquid'
    ],
    LIQUID.variable
  ]
];