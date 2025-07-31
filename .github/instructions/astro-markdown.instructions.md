---
applyTo: '**/blog/*.md'
---

# Astro Markdown Blog Post Instructions

**Do not include a title heading (e.g., `# Title`) in the markdown body if a `title` is already present in the frontmatter.**

Astro blog posts should only have the title in the frontmatter. The page layout will render the title automatically, so including it in the markdown content will result in duplicate titles on the site.

**Example:**

```markdown
---
title: "My Blog Post Title"
description: "A short summary."
pubDate: 2025-07-31T00:00:00.000Z
author: "Author Name"
---

<!-- Do NOT include `# My Blog Post Title` here -->

Your content starts here...
```
