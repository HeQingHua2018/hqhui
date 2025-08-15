/**
 * 组件栏目
 */
export { default as AvatarGenerator } from './components/AvatarGenerator';
export { default as Button } from './components/Button';
export { default as DynamicNode } from './components/DynamicNode';
export type {
  DynamicFormProps,
  Field,
  Option,
  Schema,
} from './components/DynamicNode/type';
export { default as LineChart } from './components/LineChart';
export { default as OrganizationChart } from './components/OrganizationChart';
export { default as PrimaryButton } from './components/PrimaryButton';
export { default as SpriteAnimation } from './components/SpriteAnimation';
export { default as TextForBg } from './components/TextForBg';
export { default as WangEditor } from './components/WangEditor';
/**
 * 工具库
 */

export { generateRandomString, getUUID } from './utils/chart';
export { default as formatTime } from './utils/formatTime';
export {
  findNode,
  findNodeByValue,
  flatTreeData,
  getParent,
  getParentByValue,
  list2Tree,
  loopData,
} from './utils/tree';
export {
  isEmail,
  isFalse,
  isGeneral,
  isIdNumber,
  isIncludeHtml,
  isMatchRegex,
  isNumber,
  isPhone,
  isPositiveInteger,
  isPositiveIntegerAndZero,
  isTrue,
  isUrl,
} from './utils/validation';

export {
  getInjector,
  getNodeSchemas,
  getNodeTypes,
  getWidgets,
  initializeInjector,
  injectNodeSchema,
  injectNodeType,
  injectWidget,
} from './utils/nodeInjector';

export { default as groupBy } from './utils/groupBy';
