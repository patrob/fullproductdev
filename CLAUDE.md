# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Astro development server
- **Build**: `npm run build` - Builds the site for production  
- **Preview**: `npm run preview` - Preview the built site locally
- **Lint**: `npm run lint` - Run ESLint (uses legacy flat config disabled)
- **Install**: `npm install` - Install dependencies

Note: No test framework is configured - the test script just echoes a message.

## Architecture Overview

This is an Astro-based static blog site with the following key architectural patterns:

### Content Management
- **Blog posts**: Written in Markdown, stored in `src/content/blog/`
- **Content collections**: Defined in `src/content/config.ts` with Zod schema validation
- **Blog schema**: Includes title, description, pubDate, author, tags, featured flag, draft flag, and optional image
- **Default author**: "Full Product Dev Team"

### Security Implementation
The site implements comprehensive security headers through two mechanisms:
- **Middleware**: `src/middleware.ts` sets security headers dynamically
- **Static headers**: `public/_headers` for Cloudflare Pages hosting

Both implement strict CSP, HSTS, frame options, and other security best practices. The static headers allow YouTube embeds while the middleware is more restrictive.

### Site Configuration
- **Base URL**: Currently set to `https://fullproductdev.example.com` in `astro.config.mjs`
- **Integrations**: Uses `@astrojs/sitemap` for XML sitemap generation
- **Hosting**: Optimized for Cloudflare Pages deployment

### Development Guidelines
From `.github/copilot-instructions.md`:
- Follow Astro best practices and component patterns
- Ensure clean, modern, responsive design
- Use Astro's built-in SEO and metadata features
- Maintain accessibility and web standards compliance
- Optimize for Cloudflare Pages performance
- Avoid build errors and warnings

### File Structure
- `src/pages/`: Route-based pages including blog listing and individual post pages
- `src/layouts/`: Shared layout components
- `src/content/`: Markdown content with type-safe collections
- `public/`: Static assets including security headers and media files
- `context/`: Additional documentation (design principles)

## Visual Development

### Design Principles
- Comprehensive design checklist in `/context/design-principles.md`
- Brand style guide in `/context/style-guide.md`
- When making visual (front-end, UI/UX) changes, always refer to these files for guidance

### Quick Visual Check
IMMEDIATELY after implementing any front-end change:
1. **Identify what changed** - Review the modified components/pages
2. **Navigate to affected pages** - Use `mcp__playwright__browser_navigate` to visit each changed view
3. **Verify design compliance** - Compare against `/context/design-principles.md` and `/context/style-guide.md`
4. **Validate feature implementation** - Ensure the change fulfills the user's specific request
5. **Check acceptance criteria** - Review any provided context files or requirements
6. **Capture evidence** - Take full page screenshot at desktop viewport (1440px) of each changed view
7. **Check for errors** - Run `mcp__playwright__browser_console_messages`

This verification ensures changes meet design standards and user requirements.

### Comprehensive Design Review
Invoke the `@agent-design-review` subagent for thorough design validation when:
- Completing significant UI/UX features
- Before finalizing PRs with visual changes
- Needing comprehensive accessibility and responsiveness testing