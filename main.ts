import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review, written by a house cat about its human.
const LINE =
  "One star. The food bowl was empty for four whole minutes. I have filed this under crimes and will be bringing it up at 3am.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
mkdirSync(outDir, { recursive: true });
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error("review line must be a single line of 1-200 characters");
}
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
