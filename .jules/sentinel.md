## 2024-05-18 - [Add rel="noopener noreferrer" to external links]
**Vulnerability:** Found `target="_blank"` on external links without `rel="noopener noreferrer"` in `_includes/cv-template.html`.
**Learning:** In a static HTML generated site, missing `rel="noopener noreferrer"` is an easy trap. We must secure all target="_blank" links to prevent Reverse Tabnabbing.
**Prevention:** Make sure `rel="noopener noreferrer"` is included in the template whenever `target="_blank"` is added to `<a>` tags.
