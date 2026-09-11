import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const output = new URL("src/assets/social/", root);
await mkdir(output, { recursive: true });

// Keep social previews compatible with LinkedIn's documented JPG/PNG/GIF formats.
// Next's static imports give each generated JPEG a content-hashed public URL.
const sources = {
  hunch: "src/assets/images/hunch/hero.webp",
  temukerja: "src/assets/images/temukerja/hero.webp",
  "multi-b2c": "src/assets/images/multi_b2c/hero.webp",
  "multi-b2b": "src/assets/images/multi_b2b/hero.webp",
  makmur: "src/assets/images/makmur/hero.webp",
  cpm: "src/assets/images/cpm/hero.webp",
  kjp: "src/assets/images/kjp.webp",
  home: "public/preview.webp",
};

for (const [name, source] of Object.entries(sources)) {
  await sharp(fileURLToPath(new URL(source, root)))
    .rotate()
    .resize(1200, 630, { fit: "contain", background: "#ffffff" })
    .flatten({ background: "#ffffff" })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(fileURLToPath(new URL(`${name}.jpg`, output)));
}

console.log(`Generated ${Object.keys(sources).length} social previews (1200 × 630 JPEG).`);
