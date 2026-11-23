// One Letter: Coffee or Tea — entry program.
// The gate requires /output/entry.txt to be exactly 1 character:
// "A" for coffee, "B" for tea, with nothing else — no word, no
// explanation, no punctuation, no trailing newline.
// Choice: A — coffee. Not the polite drink. The one that shows up
// black, bitter and honest at 6 a.m. and dares the day to keep up:
// tea asks how you feel, coffee tells you to get on with it.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(OUT, "A", "utf8");

// Self-check: the gate is 1 character, no whitespace — refuse to
// leave a bad file behind if anything ever changes the letter.
const written = readFileSync(OUT, "utf8");
if (written.length !== 1 || written !== "A") {
  throw new Error(`entry must be exactly one letter, got ${JSON.stringify(written)}`);
}
