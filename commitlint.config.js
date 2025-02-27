/**
 * type-enum
 *    build: 影响构建系统或外部依赖的更改（例如 npm 包的更新）。
 *    chore: 其他更新（例如构建过程或辅助工具的变更），通常不涉及源代码的变更。
 *    ci: 与持续集成相关的变更，例如 CI 配置文件的修改或添加。
 *    docs: 文档变更（documentation），例如 README 或其他文档的更新。
 *    feat: 新功能（feature）的添加，表示引入了新的特性或功能。
 *    fix: 修复缺陷（bug fix），表示修复了代码中的错误。
 *    perf: 性能优化，表示对代码进行了改进以提高性能。
 *    refactor: 代码重构，表示对代码进行了改动，但没有修复 bug 或添加功能。
 *    revert: 撤销之前的提交，表示回滚到某个之前的状态。
 *    style: 格式变更（不影响代码运行的变动），例如空格、格式化、缺少分号等。
 *    test: 添加缺失的测试或修正已有测试，表示与测试相关的更改。
 */
module.exports = {
  extends: ["@commitlint/config-conventional"],
};
