module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 150],
    "subject-case": [
      2,
      "always",
      ["sentence-case", "pascal-case", "upper-case"],
    ],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "improvement",
        "enhancement",
        "revert",
        "style",
        "test",
        "release",
        "deps",
      ],
    ],
  },
};
