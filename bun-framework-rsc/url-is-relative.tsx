export const urlIsRelative = (url: string | null) => {
  if (!url) return false
  if (url.startsWith("/")) return true

  return (
    !url.startsWith("http") &&
    !url.startsWith("//") &&
    !url.startsWith("mailto:") &&
    !url.startsWith("#") &&
    !url.startsWith("tel:") &&
    !url.startsWith("javascript:") &&
    !url.startsWith("data:") &&
    !url.startsWith("ftp:") &&
    !url.startsWith("file:") &&
    !url.startsWith("chrome-extension:") &&
    !url.startsWith("chrome-search:") &&
    !url.startsWith("chrome-extension-resource:") &&
    !url.startsWith("chrome-devtools:") &&
    !url.startsWith("view-source:") &&
    !url.startsWith("about:")
  )
}