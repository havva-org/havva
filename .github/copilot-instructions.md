# AI Agent Instructions for Havva.org

## Project Overview
Havva.org is a GitHub Pages + Cloudflare-hosted NGO website focusing on global impact metrics, insights, and stories across multiple countries (currently India, Egypt, and Kenya). The site features impact visualization, blog content, and data-driven insights.

## Key Architecture Components

### Data Structure
- Global metrics data in `/data/global_metrics.json` follows schema in `/data/schema/global_metrics.schema.json`
- Country-specific data stored in `/data/countries/{IND|EGY|KEN}.json`
- Blog content stored as static HTML in `/blog/posts/`
- Impact visualizations for each country in `/impact/{IND|EGY|KEN}/index.html`

### JavaScript Architecture
- Core visualization logic in `/assets/js/impact-charts.js` using custom charts library
- Client-side blog indexing via `/assets/js/blog-index.js` sourced from sitemap.xml
- Configuration managed through `/assets/js/config.js` (sample in config.sample.js)

## Development Workflows

### Data Validation
```bash
npm run validate
```
This runs two checks:
1. JSON schema validation for global metrics data
2. Internal link checker for HTML files (allows directory routes with index.html)

### Page Structure Convention
- Each major section (insights, impact, etc.) uses consistent layout patterns
- SEO: JSON-LD NGO schema injection on all pages
- 404 handling via custom 404.html

### Key Integration Points
1. Cloudflare:
   - Analytics integration
   - Turnstile protection
2. Charts:
   - Self-hosted vendor library (`/assets/vendor/charts.min.js`)
   - CSV + PNG export capabilities

## Common Tasks
- Adding new country data: Create corresponding files in `/data/countries/` and `/impact/`
- Adding blog posts: Create HTML file in `/blog/posts/` following existing naming pattern
- Updating metrics: Modify `/data/global_metrics.json` (must validate against schema)

## File Location Patterns
- All page content: Root directory HTML files
- Static assets: `/assets/{css|js|img|vendor}/`
- Data files: `/data/` directory
- Blog posts: `/blog/posts/`
- Country microsites: `/impact/{COUNTRY_CODE}/`