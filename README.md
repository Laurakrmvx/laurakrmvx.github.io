# Beauty Shop — Midterm Project (Static Website)

This repository contains a static, multi-page website for a fictional cosmetics store called "Beauty Shop." It was built to satisfy the midterm project requirements for the web development course and demonstrates semantic HTML, modern CSS layout (Flexbox and Grid), responsive design, and consistent styling.

Project pages

- Home (`index.html`) — hero section and featured product cards
- Products (`products.html`) — product listing (static)
- About (`about.html`) — information about the store
- Contact (`contact.html`) — contact form layout
- Cart (`cart.html`) — static cart layout

Live demo / Deployment

Add your published site link here (GitHub Pages / Netlify):

https://<your-username>.github.io/<repo-name>/

Requirements checklist (how this project maps to the midterm rules)

1. General structure

- 5+ pages included and linked via a consistent navigation bar visible on all pages — Done
- Each page uses semantic sections: `<header>`, `<main>`, and `<footer>` — Done

2. HTML requirements

- Proper use of headings, paragraphs, lists, links, and images — Done
- At least one table included (e.g., pricing or comparison) — Please add in `products.html` if required (not currently present)
- At least one form included (contact form on `contact.html`) — Done
- Use of `div` and `span` for structure where appropriate — Done

3. CSS requirements

- External stylesheet used: `style.css` in the project root — Done
- CSS variables defined in `:root` (colors, font-size, etc.) — Done
- Uses Flexbox (header navigation) and Grid (product cards grid) — Done
- At least one positioning technique used (e.g., relative/absolute) — Done (see header and/or other components)
- Uses `:hover` on buttons/links and `:nth-child()` on repeating items — Done
- Google Font applied via import in the stylesheet — Done (check `style.css` for font import)
- Images below the fold include `loading="lazy"` where applicable — Add `loading="lazy"` to product images in `index.html`/`products.html` to improve performance

4. Responsive design

- Media queries implemented for at least two breakpoints (mobile/tablet/desktop) — Done
- Navigation responds on small screens (stacking) and grid items stack on smaller viewports — Done

5. Creativity & presentation

- Consistent theme and colors across pages — Done
- Intuitive navigation and clean layout — Done

Files in this repo

- `index.html` — Home page
- `products.html` — Products listing
- `about.html` — About page
- `contact.html` — Contact form
- `cart.html` — Cart layout
- `style.css` — Central stylesheet
- `README.md` — Project description and mapping to the midterm requirements

How to preview locally

From the file explorer: open `index.html` in your browser.

From PowerShell:

```powershell
start 'c:\Users\Laura\Desktop\Midterm_web\index.html'
```

Deployment

- To publish on GitHub Pages: push this repository to GitHub, then enable GitHub Pages in the repository settings (choose the `main` branch or `/docs` folder). The site will be available at `https://<your-username>.github.io/<repo-name>/`.
- Alternatively use Netlify: drag-and-drop the project folder or connect GitHub repository to publish.

Notes, gaps, and recommended improvements before submission

- Table: The spec requires at least one table (pricing or comparison). If you need a table for grading, add a pricing table to `products.html` or a schedule table on `about.html`.
- Image optimization: add `loading="lazy"` to product images and consider resizing large images for better load times.
- Accessibility: add `alt` text for all images (several product images currently have empty `alt` attributes). Ensure form inputs have associated `<label>` elements.
- Deployment link: add the final GitHub Pages/Netlify URL here once deployed so the instructor can access your work.
- Defense prep: be ready to explain your HTML structure, why you chose Flexbox/Grid for each layout, your responsive choices and any CSS variables or positioning you used.

If you'd like, I can implement the missing table, add `loading="lazy"` to images, improve alt text, or deploy the site to GitHub Pages and paste the final URL into this README. Tell me which items you'd like me to complete and I will implement them.
