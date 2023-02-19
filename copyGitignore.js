import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workingDirectory = process.cwd();
const filename = ".gitignore";
const defaultSourcePath = __dirname + "/" + filename;
const defaultTargetPath = workingDirectory + "/" + filename;

const highlight = (string) => {
  const FgMagenta = "\x1b[35m";
  const Reset = "\x1b[0m";

  return FgMagenta + string + Reset;
};

const copyGitignore = (
  printSuccessMessage = false,
  sourcePath = defaultSourcePath,
  targetPath = defaultTargetPath
) => {
  fs.copyFile(sourcePath, targetPath, (err) => {
    if (err) {
      console.error(err);
    } else {
      if (printSuccessMessage) {
        console.log(
          `👯 Successfully copied ${highlight(filename)} to ${highlight(
            workingDirectory
          )}.`
        );
      }
    }
  });
};

export default copyGitignore;
