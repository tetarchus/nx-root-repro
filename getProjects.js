import { getProjects } from "nx/src/devkit-exports.js";
import { FsTree } from "nx/src/generators/tree.js";

console.log(getProjects(new FsTree(process.cwd())));
