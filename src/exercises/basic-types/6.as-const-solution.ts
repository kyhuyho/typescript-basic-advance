export const programingLanguages = {
  JAVASCRIPT: "javascript",
  REACTJS: "reactjs",
  PHP: "php",
  PYTHON: "python",
  VUE: "vue",
  RUBY: "ruby",
} as const;
// programingLanguages.JAVASCRIPT = "abc"; error
export type JavascriptLanguage = (typeof programingLanguages)["JAVASCRIPT"];
