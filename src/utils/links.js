/** True if URL is a real http(s) link (not empty / # / placeholder). */
export function isLiveUrl(url) {
  if (!url || typeof url !== "string") return false;
  const trimmed = url.trim();
  if (!trimmed || trimmed === "#" || trimmed.startsWith("#")) return false;
  return /^https?:\/\//i.test(trimmed) || trimmed.startsWith("/");
}
