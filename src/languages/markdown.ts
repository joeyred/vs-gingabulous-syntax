import { MD } from '../config/syntax-variables';

export default [
  [
    'Puncuation',
    [
      'text.html.markdown punctuation'
    ],
    MD.punctuation
  ],
  [
    'Headings',
    [
      'punctuation.definition.heading.markdown',
      'heading.1.markdown',
      'heading.2.markdown',
      'heading.3.markdown',
      'heading.4.markdown',
      'heading.5.markdown',
      'heading.6.markdown'
    ],
    MD.heading
  ],
  [
    'italic',
    [
      'punctuation.definition.italic.markdown',
      'markup.italic.markdown'
    ],
    MD.italic
  ],
  [
    'Bold',
    [
      'punctuation.definition.bold.markdown',
      'markup.bold.markdown'
    ],
    MD.bold
  ],
  [
    'List: bullets',
    [
      'punctuation.definition.list.begin.markdown'
    ],
    MD.list
  ],
  [
    'Links',
    [
      'constant.other.reference.link.markdown'
    ],
    MD.link
  ],
  [
    'markup.inline.raw',
    [
      'markup.inline.raw'
    ],
    MD.raw
  ],
  [
    'Quote',
    [
      'punctuation.definition.quote.begin.markdown'
    ],
    MD.quote
  ],
  [
    'Strikethrough',
    [],
    MD.strike
  ],
  // [
  //   'Seperator',
  //   [
  //     'meta.separator.markdown'
  //   ],
  //   MD.seperator
  // ],

];