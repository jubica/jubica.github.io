## 2025-03-23 - Lazy loading images
**Learning:** Adding lazy loading to images that appear below the fold or inside loops (archives) significantly improves performance by not loading all images upfront. This applies widely to Jekyll themes using `img` tags.
**Action:** Add `loading="lazy"` to images in archive loops, gallery includes, and comments to defer loading until they come into viewport.