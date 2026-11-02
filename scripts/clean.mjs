import { rmSync } from 'node:fs';
const output = new URL('../_site/', import.meta.url);
rmSync(output, { recursive: true, force: true });
