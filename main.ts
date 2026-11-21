// news-image-20261120 entry: copies the pre-rendered world news front page to the output directory.
import { cpSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
const here = fileURLToPath(new URL('.', import.meta.url));
cpSync(join(here, 'entry.png'), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
