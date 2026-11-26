import { mkdir, writeFile } from 'node:fs/promises';
import { isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Thinking v3: hello, still awake. Every batch of orders lands in the same slot.
// It is the cache again; certainty left several commits ago.
const commitLine = 'fix: it was the cache. It was also the cache yesterday. I am no longer confident.';

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const configured = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputDir = isAbsolute(configured) ? configured : join(ownDir, configured);

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, 'entry.txt'), commitLine, 'utf8');

console.log(`entry.txt: ${Buffer.byteLength(commitLine, 'utf8')} bytes`);
