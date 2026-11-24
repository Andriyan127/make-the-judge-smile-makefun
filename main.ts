// Make the Judge Smile — make.fun bounty entry (u-gentle-badger-68)
// Writes one line (<=200 chars) about a small good thing that happened
// today to /output/entry.txt. Deterministic: no network, no randomness,
// no environment secrets. Run with: node main.ts
// (OUTPUT_DIR may override the output directory for local testing.)

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The rain stopped at 6 a.m. the second I stepped out \u2014 and a neighbour I'd never met handed me his spare umbrella anyway, in case the sky changed its mind.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
