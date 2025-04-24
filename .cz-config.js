module.exports = {
  // 定义提交时可选的类型
  types: [
    { value: '✨ feat', name: '✨ feat:\tA new feature | 新功能' }, // 新增功能
    { value: '🐛 fix', name: '🐛 fix:\tA bug fix | Bug 修复' }, // 修复bug
    { value: '📝 docs', name: '📝 docs:\tDocumentation only changes | 文档' }, // 文档更新
    {
      value: '🎨 style',
      name: '🎨 style:\tMarkup, white-space, formatting, missing semi-colons... | 风格',
    }, // 代码风格调整
    {
      value: '♻️ refactor',
      name: '♻️  refactor:\tA code change that neither fixes a bug or adds a feature | 代码重构',
    }, // 代码重构
    {
      value: '⚡️ perf',
      name: '⚡️ perf:\tA code change that improves performance | 性能优化',
    }, // 性能提升
    { value: '✅ test', name: '✅ test:\tAdding tests | 测试' }, // 测试用例增加
    {
      value: '🧱 chore',
      name: '🧱 chore:\tBuild process or auxiliary tool changes | 构建/工程依赖/工具',
    }, // 构建或工具变更
    { value: '⏪ revert', name: '⏪ revert:\tRevert | 回退' }, // 代码回退
    { value: '📦 build', name: '📦 build:\tBuild System | 打包构建' }, // 打包配置更新
    {
      value: '🔖 release',
      name: '🔖 release:\tCreate a release commit | 发行版',
    }, // 版本发布
  ],
  // 提交时的消息步骤配置
  messages: {
    type: '请选择提交类型(必填):', // 提示用户选择提交类型
    // scope: '请输入修改范围(可选):', // 提示用户输入修改范围（可选）
    subject: '请简要描述提交(必填):', // 提示用户输入提交描述（必填）
    body: '请输入详细描述(可选):', // 提示用户输入详细描述（可选）
    footer: '请输入要关闭的issue(可选):', // 提示用户输入要关闭的issue（可选）
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)', // 确认提交信息
  },
  // 跳过的问题配置
  skipQuestions: ['scope', 'body', 'footer'], // 跳过修改范围、详细描述和关闭issue的提问
  // 提交描述的文字长度限制，默认为72字符
  subjectLimit: 72,
};
