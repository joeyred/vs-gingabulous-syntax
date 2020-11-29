import { HTML } from '../config/syntax-variables';

export default [
  [
    'XML: Tag',
    [
      'entity.name.tag'
    ],
    HTML.tag
  ],
  [
    'XML: Attribute Name',
    [
      'entity.other.attribute-name'
    ],
    HTML.attribute
  ],
  [
    'XML: Tag punctuation',
    [
      'punctuation.definition.tag'
    ],
    HTML.tagBraces
  ]
];