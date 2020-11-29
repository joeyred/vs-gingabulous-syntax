import { PUG } from '../config/syntax-variables';

export default [
  [
    'Class',
    [
      'entity.other.attribute-name.class.pug'
    ],
    PUG.class
  ],
  [
    'Attribute',
    [
      'entity.other.attribute-name.tag.pug'
    ],
    PUG.attribute
  ],
  [
    'Keywords',
    [
      'meta.control.flow.pug storage.type.function.pug',
      'storage.type.import.include.pug'
    ],
    PUG.keyword
  ],
  [
    'String: unquoted',
    [
      'variable.control.import.include.pug'
    ],
    PUG.string
  ],
  [
    'Filter',
    [
      'constant.language.name.generic.filter.pug'
    ],
    PUG.filter
  ]
];