import { CSS } from '../config/syntax-variables';

export default [
  [
    'ID',
    [
      'entity.other.attribute-name.id.css'
    ],
    CSS.id
  ],
  [
    'Class',
    [
      'entity.other.attribute-name.class.css'
    ],
    CSS.class
  ],
  [
    'Property Name',
    [
      'support.type.property-name.css'
    ],
    CSS.propertyName
  ],
  [
    'Psuedo',
    [
      'entity.other.attribute-name.pseudo-class.css'
    ],
    CSS.psuedo
  ],
  [
    'Values',
    [
      'support.constant.property-value.css',
    ],
    CSS.keyword
  ],
  [
    'Combinator',
    [
      'keyword.operator.combinator.css'
    ],
    CSS.combinator
  ]
];