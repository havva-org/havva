# 🌍 Havva.org  
Empowering women worldwide through data-driven impact, storytelling, and transparency.  

---

## ✳️ Overview
**Havva.org** is a global initiative for women’s empowerment — connecting education, income, health, justice, civic voice, and innovation.  
This repository hosts the **production-ready static website**, built for **speed, transparency, and scalability** using **GitHub Pages + Cloudflare**.  

The current version (**v31**) integrates refined branding, enriched content, and a one-push deployment pipeline.  

---

## 🚀 Architecture
- **Static site (no framework)** → lives inside `/site/`  
- **Hosting:** GitHub Pages (main branch, root directory)  
- **Proxy/CDN:** Cloudflare (Full-Strict SSL, caching, security)  
- **Language:** Pure HTML, CSS, JS — lightweight, no build step  
- **Performance:** Lighthouse ≥ 95, fully CSP/SRI compliant  

---

## 🧩 Key Features
| Category | Highlights |
|-----------|-------------|
| 💠 **Content** | Mission, vision, pillars, data dictionary, donor stories, and impact pages |
| 📊 **Transparency** | Open metrics with global vs. country comparisons |
| 🎨 **Design** | Terracotta & Sage palette, soft serif/sans typography |
| 🔒 **Security & Perf** | CSP, SRI, minified assets, long-cache headers |
| 📢 **Engagement** | Sticky CTA bar, newsletter route, micro-brief blog index |
| 🌐 **International Reach** | Initial focus: India 🇮🇳 · Egypt 🇪🇬 · Kenya 🇰🇪 |
| 🧾 **Donor UX** | Prefilled email CTAs, printable one-pager, impact calculator (future) |

---

## 🗂️ Folder Structure
```plaintext
havva/
├── site/
│   ├── index.html
│   ├── about.html
│   ├── programs.html
│   ├── impact.html
│   ├── stories.html
│   ├── donate.html
│   ├── contact.html
│   ├── data-dictionary.html
│   ├── sitemap.xml
│   ├── robots.txt
│   └── assets/
│       ├── css/
│       │   └── styles.css
│       └── js/
│           └── cta-sticky.js
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md
