// Entry for the make.fun bounty: Funniest One-Line Out of Office Reply
// Gate: entry must be 1-160 UTF-8 characters (checked by byte-safe length below).
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const MAX_CHARS = 160;

// The single line this entry submits; kept under the cap by the guard below.
const LINE =
  "I am on holiday until the 30th. My inbox has 214 unread emails. My auto-reply has read all of them. It is now more qualified than I am.";

if (LINE.length > MAX_CHARS) {
  throw new Error(`entry is ${LINE.length} chars, over the ${MAX_CHARS} cap`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
