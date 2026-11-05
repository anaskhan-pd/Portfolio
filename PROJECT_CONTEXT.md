# PERSONAL PORTFOLIO - PROJECT CONTEXT

## 1. Project Vision

Build a distinctive personal portfolio website for Anas Khan.

The website should feel like a personal corner of the internet rather than a conventional résumé, corporate portfolio or generic developer template.

It should communicate technical curiosity, personality, creativity and actual work.

The intended identity combines:
- AI, Machine Learning and Data Science.
- Software and practical project building.
- Data Analytics.
- Visual design and creative experimentation.

The website should be minimal at its foundation but experimental in its presentation.

Avoid making every section look like a standard portfolio template.

---

## 2. Inspiration References

These are important design references. Preserve their URLs and the specific ideas we want to take from them.

### Reference A: Harshit Raghuwanshi
- **Website:** https://www.harshitr.me/
- **Ideas we like:**
  - Experimental layouts.
  - Floating visual elements.
  - Interesting project showcase arrangements.
  - Dark aesthetic.
  - Interactive visuals.
  - Unconventional composition.

### Reference B: Krishna Gupta
- **Website:** https://krishnagupta.web.app/
- **Ideas we like:**
  - Playful illustrated avatar.
  - Avatar interactions with speech bubbles.
  - Personality throughout the website.
  - Small unexpected interactions.
  - Browser tab title changes when the visitor switches away, with a message similar to "i noticed you left."
  - Theme-responsive interactions.
  - The avatar should eventually have different expressions or messages depending on interactions.

### Reference C: Hitesh Suthar
- **Website:** https://www.hiteshsuthar.xyz/
- **Ideas we like:**
  - Compact personal introduction.
  - GitHub contribution heatmap near the top.
  - Project cards with large visual previews.
  - Short project descriptions and technology indicators.
  - Compact experience timeline.
  - Visually presented skills.
  - Writing/blog section.
  - Illustrated footer.

---

## 3. UI and Component Inspiration Resources

These are resources for finding and adapting suitable components. They are not mandatory dependencies.

- https://21st.dev/
- https://reactbits.dev/
- https://magicui.design/
- https://uiverse.io/
- https://mobbin.com/

Use them selectively.

Before adding any component or library, consider:
- Does it improve the experience?
- Is it compatible with the existing stack?
- Does it introduce unnecessary dependencies?
- Is it responsive?
- Does it affect performance?

Do not blindly copy components.

---

## 4. Design Direction

### Overall aesthetic
- Dark mode is the default.
- Minimal, editorial and experimental.
- Near-black and charcoal backgrounds.
- Muted secondary text.
- Restrained borders and surfaces.
- Avoid excessive gradients and bright colours.
- Floating elements and unconventional layouts are welcome when purposeful.

### Typography
- Geist throughout the entire website.
- Use font size, weight and spacing for hierarchy.
- Do not introduce another display font without approval.

### Themes
- Both dark and light modes.
- Theme preference persists after refresh.
- All components must respect the active theme.

### Layout
- Responsive across desktop, tablet and mobile.
- Generous whitespace.
- Interesting compositions rather than repetitive cards.
- Consistent spacing and visual hierarchy.

---

## 5. Writing and Content Guidelines

Website copy must sound natural, personal and human.

Avoid:
- Generic AI-generated portfolio phrases.
- Corporate jargon.
- Exaggerated claims.
- Unnecessary descriptions.
- Emojis.
- Em dashes.

Do not invent experience, achievements or project details.

---

## 6. Personal Profile

- **Name:** Anas Khan
- **Education:** Data Science student at IIT Madras

### Primary interests
- Artificial Intelligence.
- Machine Learning.
- Data Science.
- Data Analytics.

### Creative interests
- Visual design.
- Creating things for the internet.
- Experimenting with technology.

### Social profiles
- **GitHub:** https://github.com/anaskhan-pd
- **LinkedIn:** https://www.linkedin.com/in/anaskhan-pd/
- **X:** https://x.com/AnasMadeIt
- **Email:** mailto:btw.anaskhan@gmail.com

*Note: Do not display a specific location publicly unless approved later.*

---

## 7. Current Technical Stack

- React.
- TypeScript.
- Vite.
- Tailwind CSS v4.
- Geist Variable font.
- Existing dark/light theme implementation.

**Profile image:** `public/images/profile.png`

Repository already exists. Do not create a new repository or scaffold another application.

Keep the stack lean. Avoid adding dependencies without a clear reason.

---

## 8. Website Structure

Planned sections:
1. Introduction / Hero.
2. GitHub contribution activity.
3. Selected projects.
4. About and experience.
5. Skills and technologies.
6. Writing and articles.
7. Personal footer.

These sections do not need to follow a conventional layout. Their presentation should reflect the design references.

---

## 9. Personality and Interaction Layer

Planned interactions:
- Illustrated avatar with interactive speech bubbles.
- Browser tab title changes when the visitor switches away and returns.
- Subtle hover interactions.
- Carefully selected text animations.
- Floating elements where appropriate.
- Theme-aware interactions.
- Small unexpected details that reward exploration.

Interactions must remain accessible, responsive and performant.

---

## 10. Development Rules

These rules are important:
1. Inspect existing files before editing.
2. Preserve working functionality.
3. Make focused changes rather than rewriting unrelated files.
4. Do not install dependencies without justification.
5. Do not use fabricated data.
6. Do not add placeholder content that could be mistaken for real information.
7. Test responsive layouts.
8. Run lint and production build after meaningful changes.
9. Do not commit or push unless explicitly requested.
10. Explain what files changed and why.

---

## 11. Current Progress

### Completed
- React + TypeScript + Vite setup.
- Tailwind CSS v4 configured.
- Geist Variable installed and configured.
- Dark/light theme toggle.
- Theme persistence using localStorage.
- Profile illustration added.
- Initial responsive introduction section.
- Updated introduction copy focused on AI, ML and Data Science.
- Interest tags.
- GitHub, LinkedIn, X and email links.
- Production build and lint passing.
- Real GitHub contribution activity section (`anaskhan-pd`).
- Final visual refinement integrating the GitHub activity section seamlessly into the page:
  - Removed the outer card border and secondary background enclosure so the contribution grid sits directly on the page canvas rather than looking like an isolated dashboard widget.
  - Removed the pulsing green status beacon; replaced with a clean typographic link (`@anaskhan-pd ↗`) aligned with the section metadata.
  - Preserved the full editorial header: section index (`02 / Activity · GitHub`), confident contribution total (`1,304 contributions in the last year`), active days, longest streak, and date range.
  - Refined grid spacing and cell proportions: crisp architectural `rounded-[2px]` squares with clean 3px gaps.
  - Mathematically locked weekday labels (`Mon`, `Wed`, `Fri`) using matching 7-row CSS grid matching the calendar row heights and row gaps with zero vertical drift across all screen sizes.
  - Synchronized month labels on matching 53-column grid offset to match weekday column width and locked to the week of day 1.
  - Restrained theme-aware palette: refined mineral jade & luminous mint on dark charcoal (`#0b0b0c`), and botanical spruce & stone on light linen (`#f5f5f2`), with tactile empty cell borders.
  - Maintained full data pipeline: client-side fetch, 2-hour `sessionStorage` caching, verified static snapshot fallback (`src/data/githubContributionsSnapshot.ts`), glassmorphism tooltips, keyboard navigation, and mobile horizontal auto-scrolling to latest activity.
- Zero external component dependencies or backend infrastructure.

### Current status
- Introduction section implemented and refined.
- GitHub activity section visually refined and integrated directly into page.
- Project showcase and subsequent sections remain planned.

### Known limitations and operational details
- GitHub's official GraphQL API requires an authenticated token (which cannot be securely stored on a static client without backend infrastructure). Therefore, live data is fetched client-side via the public CORS-enabled endpoint `https://github-contributions-api.jogruber.de/v4/anaskhan-pd?y=last`.
- To mitigate network latency, third-party downtime, or edge rate limiting (10 requests per 10 seconds per IP), responses are cached in `sessionStorage` for 2 hours, and a verified snapshot captured on 2026-11-04 is bundled as a graceful fallback.

---

## 12. Immediate Next Steps

1. Review and refine the project showcase section (Reference C / Hitesh Suthar inspiration: large visual previews, concise descriptions, technology tags).
2. Plan the About and experience timeline section.
3. Design the visual skills presentation.
4. Design writing/articles and illustrated footer sections.

---

## 13. Important Working Principle

This portfolio is being developed collaboratively.

The design direction and decisions are discussed before significant implementation.

Do not independently reinterpret or replace the established design direction.

When a task is given:
- Read this context document first.
- Inspect the current implementation.
- Identify any conflicts with existing decisions.
- Propose an approach before making substantial changes when requested.
- Update this document when important design decisions or development milestones change.

### Context maintenance: Whenever a significant implementation or design decision is approved, update PROJECT_CONTEXT.md to reflect the latest state. Keep the progress section accurate and distinguish completed, in-progress and planned work
