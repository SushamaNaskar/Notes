# What is Lighthouse/ Google Lighthouse?
- Lighthouse is an automated auditing tool that measures performance, SEO, accessibility, and best practices. It helps identify optimization opportunities like large images or unused JavaScript.

- It’s an automated tool that audits:
1. Performance
2. Accessibility
3. Best Practices
4. SEO
5. Progressive Web App (PWA)

It generates a score from 0–100.

# How to Run Lighthouse
1. Open Chrome
2. Right Click → Inspect
3. Go to Lighthouse tab
4. Click “Analyze page”

OR use CLI:
npx lighthouse https://example.com

# 5 Main Categories
| Category       | What It Checks      |
| -------------- | ------------------- |
| Performance    | Speed & rendering   |
| Accessibility  | ARIA, contrast      |
| Best Practices | Security, HTTPS     |
| SEO            | Meta tags, indexing |
| PWA            | Offline support     |

# Important Metrics (Core Web Vitals)
| Metric | Meaning                           |
| ------ | --------------------------------- |
| LCP    | Largest visible content load time |
| CLS    | Layout shift                      |
| FCP    | First content paint               |
| TBT    | Total blocking time               |
| TTI    | Time to interactive               |
