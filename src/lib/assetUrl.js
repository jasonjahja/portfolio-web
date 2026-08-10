export function assetUrl(asset) {
  return typeof asset === "string" ? asset : asset?.src;
}
