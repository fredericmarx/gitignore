import assert from "node:assert";
import { describe, it, before, after } from "node:test";

import fs from "fs";
import mock from "mock-fs";

import copyGitignore from "./copyGitignore.js";

describe("copyGitignore module", async () => {
  let workingDirectory, sourcePath, targetPath;

  before(() => {
    mock({
      "source.txt": "Test",
    });

    workingDirectory = process.cwd();
    sourcePath = workingDirectory + "/source.txt";
    targetPath = workingDirectory + "/.gitignore";
  });

  it("runs without errors", () => {
    copyGitignore(false, sourcePath);
  });

  it("creates a .gitignore file", () => {
    assert.strictEqual(fs.existsSync(targetPath), true);
  });

  it("writes source content to target file", () => {
    const sourceData = fs.readFileSync(sourcePath, "utf8");
    const targetData = fs.readFileSync(targetPath, "utf8");

    assert.strictEqual(sourceData, targetData);
  });

  after(() => mock.restore());
});
