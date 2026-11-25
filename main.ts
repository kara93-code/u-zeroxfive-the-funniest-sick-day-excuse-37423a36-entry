// SPDX-License-Identifier: MIT
// The Funniest Sick-Day Excuse — one line, written to /output/entry.txt.
// Chosen line: an optician visit gone blurry. Concrete, half-believable
// (dilated pupils really do wreck your vision for a day), fresh (no fever,
// no dog, no dead grandmother), and the laugh lands at the end.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const excuse =
  "My optician dilated my eyes yesterday and I still can't tell my boss from a lamppost, so I'm staying home until the world stops glowing.";

const limit = 200;
const trimmed = excuse.trim();
if (trimmed.length < 1 || excuse.length > limit) {
  throw new Error(`entry must be 1-${limit} characters, got ${excuse.length}`);
}
if (excuse.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, excuse, "utf8");
chmodSync(outPath, 0o644);
