import { YAML } from '../config/syntax-variables';

export default [
  [
    'Array/List Dash',
    [
      'punctuation.definition.block.sequence.item.yaml'
    ],
    YAML.arrayDash
  ],
  [
    'Tags/Keys',
    [
      'entity.name.tag.yaml'
    ],
    YAML.key
  ]
];