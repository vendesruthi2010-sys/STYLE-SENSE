# StyleSense — BMI + Skin Tone Style Guide

**StyleSense** is an elegant, editorial fashion and styling web application that generates personalized color palettes, Indian ethnic and contemporary outfit ideas, jewelry recommendations, footwear pairings, and hairstyles based on BMI screening, skin tone, undertone, and personal comfort.

The entire application runs **100% locally in your browser** with zero accounts, zero tracking, zero external APIs, and zero data uploads.

---

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Privacy Guarantee](#privacy-guarantee)
- [How to Run Locally](#how-to-run-locally)
- [How to Use](#how-to-use)
- [How BMI Is Calculated](#how-bmi-is-calculated)
- [How Recommendations Work](#how-recommendations-work)
- [How to Edit Recommendation Data](#how-to-edit-recommendation-data)
- [Deployment Instructions](#deployment-instructions)
  - [GitHub Pages](#github-pages)
  - [Netlify](#netlify)
- [Progressive Web App (PWA)](#progressive-web-app-pwa)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Harmonious Color Palettes:**
  - 6–8 **Best Colors** tailored to your skin tone and undertone.
  - 2–4 **Accent Colors** for festive statements, dupattas, and accessories.
  - 2–4 **Thoughtful Colors** with guidance on pairing with neutrals.
  - One-click copy for all HEX codes with instant toast feedback.
- **Indian Ethnic & Contemporary Wardrobe:**
  - Occasion tabs for **Casual**, **Formal**, **Party**, and **Traditional / Indian Ethnic**.
  - Respectful coverage of sarees, lehengas, anarkalis, kurta-palazzos, salwar suits, Bandhgalas, Nehru jackets, sherwanis, and modern androgynous fusion garments.
  - Fabric notes (Chanderi, Khadi, Mulberry Silk, Linen, Mulmul cotton) and silhouette guides.
- **Body-Positive Styling Philosophy:**
  - Focuses on comfortable silhouettes, relaxed proportions, and joyful self-expression.
  - Explicit non-judgmental language: no body-rating or slimming claims.
  - Thoughtful handling for users under 18 with age-appropriate youth references.
- **Skin Tone & Undertone Precision:**
  - 7 curated skin tones: *Fair, Light, Medium, Olive, Tan, Brown, Deep*.
  - 3 undertones: *Warm (☀️), Cool (❄️), Neutral (◐)*.
  - Collapsible interactive undertone guide with vein, jewelry, and fabric tests.
- **Editorial Grooming & Accessories:**
  - Hairstyle ideas filtered by length (*Short, Medium, Long*) and personal expression.
  - Hair color shades tuned to warm, cool, or neutral undertones.
  - Jewelry recommendations (Yellow Gold, Antique Temple Gold, Oxidised Silver, White Gold, Mixed Metals).
  - Toned bags & potlis and handcrafted Indian footwear (Juttis, Mojaris, Kolhapuris).
- **Downloadable Printable Style Card:**
  - One-click "Download My Style Card" using native `window.print()`.
  - Bespoke `@media print` layout turning your guide into a clean, luxury fashion dossier.
- **Dark Mode Support:**
  - Seamless toggle between light cream/ivory and dark charcoal/plum palettes.
  - Only stores theme preference locally—no body data is ever saved.
- **Progressive Web App (PWA):**
  - Installable on desktop and mobile devices.
  - Fully functional offline via Service Worker cache.

---

## Technology Stack

StyleSense is deliberately crafted with pure web fundamentals:

- **HTML5:** Semantic, accessible markup with ARIA roles and keyboard navigability.
- **CSS3:** Custom properties (CSS variables), fluid typography, responsive flex/grid layouts, and printable styling.
- **Vanilla JavaScript (ES Modules):** Lightweight, reactive client-side state with zero runtime dependencies.
- **Service Worker API:** Native offline caching and resource management.

**No backend, no database, no frameworks, and no external AI API keys are required.**

---

## Privacy Guarantee

Your personal privacy is our foundational promise:

> *"Your information stays in your browser. StyleSense does not upload your data."*

- **No login or registration** is required.
- **No analytics, pixels, or trackers** are loaded.
- **No data leaves your computer or phone.**
- Only your UI theme preference (`light` / `dark`) is stored in `localStorage`.

---

## How to Run Locally

You can run StyleSense using any local web server:

### Option 1: Using Python 3 (built-in)
```bash
# Navigate to the project directory
cd StyleSense

# Start a local HTTP server
python3 -m http.server 3000
```
Open your browser and visit: `http://localhost:3000`

### Option 2: Using Node.js / npx
```bash
npx serve . -p 3000
```

### Option 3: Using Vite (if developing in this repository)
```bash
npm run dev
```

---

## How to Use

1. **Launch StyleSense:** Click **Start My Style Guide** on the home screen.
2. **Step 1 — Basics:** Enter your age, select your preferred styling aesthetic (*Feminine*, *Masculine*, or *Androgynous*), and enter your height and weight. Use the unit toggles (cm/ft and kg/lb) as desired.
3. **Step 2 — Skin Tone & Undertone:** Choose the swatch closest to your natural tone and select your undertone (*Warm*, *Cool*, or *Neutral*). If unsure, open the collapsible accordion helper.
4. **Step 3 — Results Dashboard:** Explore your personalized color palette, outfit ideas, color themes, hairstyle notes, and accessories.
5. **Download Style Card:** Click **Download My Style Card** to save or print your personalized guide as a PDF.

---

## How BMI Is Calculated

BMI (Body Mass Index) is calculated strictly on the client using the standard formula:

$$\text{BMI} = \frac{\text{weight in kilograms}}{(\text{height in meters})^2}$$

### Adult Categories (Ages 18+)
- **Underweight:** BMI < 18.5
- **Normal range:** 18.5 – 24.9
- **Overweight:** 25.0 – 29.9
- **Obesity:** 30.0+

### Important Youth Handling (Under 18)
Adult BMI categories are not applied to individuals under 18. Instead, the application displays an educational youth reference note:

> *"Because you're under 18, adult BMI categories aren't appropriate here. BMI for children and teenagers is interpreted using age- and sex-specific growth references by healthcare professionals."*

### Body-Positive Statement
> *"BMI is only a general screening measure. It does not define your body, health, beauty or personal style."*

---

## How Recommendations Work

All recommendations follow an intuitive, deterministic logic pipeline:

```
[User Input] 
     │
     ├── Age & Proportions ──────► Silhouette balance & fit notes
     ├── Styling Preference ────► Curates Feminine / Masculine / Androgynous wardrobe
     ├── Skin Tone Depth ───────► Calibrates contrast & saturation
     └── Undertone (Warm/Cool/Neutral) ──► Dictates best palettes, hair colors & jewelry metals
```

The app references `STYLE_DATA` in `data.js` to match the exact intersection of tone, undertone, occasion, and styling preference.

---

## How to Edit Recommendation Data

All styling rules are stored cleanly in `data.js`:

```javascript
export const STYLE_DATA = {
  palettes: {
    warm: {
      fair: { bestColors: [...], accentColors: [...] },
      medium: { ... },
      // ...
    },
    cool: { ... },
    neutral: { ... }
  },
  outfitRecommendations: { ... },
  accessories: { ... }
};
```

To add new colors, modify fabric notes, or introduce additional traditional garments:
1. Open `data.js` in your favorite code editor.
2. Locate the corresponding undertone or occasion section.
3. Add or edit items using the standard object structure:
   ```javascript
   { name: 'Kashmiri Saffron', hex: '#F4A261', desc: 'Warm glowing accent for festive dupattas' }
   ```
4. Save the file. Changes take effect immediately upon page reload.

---

## Deployment Instructions

### GitHub Pages

1. Push the repository to GitHub.
2. Navigate to your repository's **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4. Choose the `main` (or `gh-pages`) branch and `/root` folder.
5. Click **Save**. Your site will be published at `https://<username>.github.io/<repo-name>/`.

### Netlify

1. Drag and drop the `StyleSense` folder into the [Netlify Drop](https://app.netlify.com/drop) dashboard.
2. Alternatively, connect your Git repository and leave the build command blank and publish directory as `.`.
3. Your app will deploy instantly with HTTPS and PWA capabilities.

---

## Progressive Web App (PWA)

StyleSense includes a valid `manifest.json` and `sw.js` (Service Worker).

- **Installable:** Visit the app in Chrome, Edge, or Safari on iOS, and select **Install App** or **Add to Home Screen**.
- **Offline Capable:** All assets (`index.html`, `style.css`, `script.js`, `data.js`, icons) are automatically precached on first visit.

---

## Contributing

Contributions, styling suggestions, and inclusive regional fashion additions are welcome!

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AddAssameseMekhela`).
3. Commit your Changes (`git commit -m 'Add Mekhela Sador styling notes'`).
4. Push to the Branch (`git push origin feature/AddAssameseMekhela`).
5. Open a Pull Request.

---

## License

Distributed under the **MIT License**. See `LICENSE` for more information.
