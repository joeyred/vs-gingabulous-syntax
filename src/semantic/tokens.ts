import { SEMANTIC } from '../config/syntax-variables';

export default {
  namespace: SEMANTIC.namespace,
  type: SEMANTIC.type,
  'type.defaultLibrary': SEMANTIC.defaultLibrary.type,
  struct: SEMANTIC.struct,
  class: SEMANTIC.class,
  'class.defaultLibrary': SEMANTIC.defaultLibrary.class,
  interface: SEMANTIC.interface,
  enum: SEMANTIC.enum,
  function: SEMANTIC.function,
  'function.defaultLibrary': SEMANTIC.defaultLibrary.function,
  member: SEMANTIC.member,
  'member.defaultLibrary': SEMANTIC.defaultLibrary.function,
  macro: SEMANTIC.macro,
  variable: SEMANTIC.variable,
  'variable.defaultLibrary': SEMANTIC.defaultLibrary.variable,
  'variable.readonly': SEMANTIC.constant,
  'variable.readonly.defaultLibrary': SEMANTIC.defaultLibrary.variable,
  parameter: SEMANTIC.param,
  property: SEMANTIC.property,
  'property.declaration': SEMANTIC.propertyDeclaration,
  'property.readonly': SEMANTIC.propertyReadOnly,
  'property.readonly.defaultLibrary': SEMANTIC.defaultLibrary.variable,
  enumMember: SEMANTIC.enumMember,
  event: SEMANTIC.event
};
