# 🎯 Accessibility Carousel Assignment

This project implements an **Accessible Carousel** using **React Slick**, built according to the **W3C ARIA Carousel Authoring Practices**.  
It supports full **keyboard navigation** and has been verified using the **NVDA screen reader** for accessibility compliance.

---

## 🚀 Run the project locally

```bash
git clone https://github.com/imcodekhan/carousel-assignment.git
cd carousel-assignment
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.


## 🧩 Accessibility Testing Summary

**Screen Reader Used:** NVDA (Windows 11)  
**Testing Mode:** Keyboard only (no mouse)

| Area | Expected Behavior | Result |
|------|--------------------|--------|
| **Prev / Next Buttons** | Announced as “Previous slide, button” and “Next slide, button” | ✅ |
| **Activation (Space / Enter)** | Triggers slide change correctly | ✅ |
| **Dots (Slide Selectors)** | Announced as “Go to slide X” and activate via Enter / Space | ✅ |
| **Slide Announcement** | “Slide 2 of 5: Grave of the Fireflies” (and others) read aloud | ✅ |
| **Auto-Rotation** | Pauses automatically on focus or hover; resumes on blur | ✅ |
| **Play / Pause Toggle** | Works via Enter / Space; updates `aria-pressed` and SR announcement | ✅ |
| **Focus Indicators** | All controls show a red outline on focus | ✅ |
| **Contrast** | Left/right arrow buttons use dark background for visibility | ✅ |
| **Captions** | Slight darker background, readable, and announced by SR | ✅ |
| **Slide Pause on Move / Hover / Focus** | Carousel pauses when hovered or focused, resumes on blur | ✅ |


live demo at : moonlit-puppy-e2f9ad.netlify.app