import { TS } from "../config/syntax-variables";

export default [
  [
    'Type Annotation Punctuation',
    [
      'keyword.operator.type.annotation.ts'
    ],
    TS.typeAnnotationPunctuation
  ],
  [
    'Interface',
    [
      'entity.name.type.interface.ts'
    ],
    TS.interface
  ],
  [
    'Type Declaration',
    [
      'meta.type.annotation.ts',
      'entity.name.type.ts'
    ],
    TS.typeDeclaration
  ],
  [
    'Type Annotation Params lvl 1',
    [
      'meta.type.parameters.ts entity.name.type.ts'
    ],
    TS.typeAnnotation
  ],
  [
    'Type Annotation Params lvl 2',
    [
      'meta.type.parameters.ts meta.type.parameters.ts entity.name.type.ts'
    ],
    TS.typeAnnotation
  ]
  // [
  //   'Definition Properties',
  //   [
  //     'meta.definition.property.ts variable'
  //   ],
  //   TS.definitionProperties
  // ]

];