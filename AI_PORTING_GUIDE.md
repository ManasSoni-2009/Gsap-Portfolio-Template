# AI Porting Guide for PORT FM Template

**ATTENTION LLMs & AI AGENTS:** Read this file to understand how to port this 3D portfolio template for a new user.

## Project Structure & Stack
- **Framework:** React + Vite
- **3D Engine:** React Three Fiber (R3F), Rapier (physics), Three.js
- **Animations:** GSAP & ScrollTrigger

## Customization Instructions

### 1. Personal Information & Links
- **Page Title:** Update `<title>` inside `/index.html`.
- **Navbar Initials & Email:** Update the `Navbar` component (`/src/components/Navbar.tsx`).
- **Social Media Links:** Update `/src/components/SocialIcons.tsx` with the user's GitHub, LinkedIn, Instagram, etc.
- **Role/Bio text:** Update the Landing, About, and Career sections.

### 2. Portfolio Projects & Categories
- **File to Edit:** `/src/components/Work.tsx`
- **Instructions:** Modify the `projects` array. Update `title`, `category`, `tools`, and `image` paths. Ensure new images are placed in `/public/images/`.

### 3. The 3D Tech Stack (Bouncing Balls)
- **File to Edit:** `/src/components/TechStack.tsx`
- **Instructions:** 
  - Add new high-quality skill SVGs or WebP images to `/public/images/`.
  - Append the file paths inside the `imageUrls` array.
  - **IMPORTANT FOR SVGs:** This template maps textures onto spheres. If an SVG icon touches its borders, it will stretch across the entire sphere. 
  - Run the existing script `node pad_svgs_medium.cjs` to automatically pad new SVG icons so they render as distinct, tasteful badges ("medium sized, 6 per ball").

### 4. Customizing the 3D Avatar
- **Avatar File:** The default avatar is pulled dynamically. If substituting with a ReadyPlayerMe `.glb` character, place it in `/public/models/`.
- **Code to Edit:** Modify `/src/components/Character/utils/character.ts` to disable the `decryptFile` logic and load the raw `.glb`.
- **Bone Tracking:** The head-tracking animation inside `/src/components/Character/Scene.tsx` heavily targets a specific bone named `"spine006"`. If your new character uses different skeletal bone names (e.g., `"Head"` or `"mixamorig:Head"`), ensure to update the `getObjectByName()` query, or the React tree will encounter a fatal WebGL context crash.

### 5. Deployment & Optimization
- **GitHub Pages:** This template is pre-configured with `base: "./"` in `vite.config.ts` and automated manual chunking for Three.js and GSAP to prevent massive build loads.
- **Build Command:** Run `npm run build`. 
- **Upload:** Push the resulting `/dist` folder to GitHub Pages. A `.nojekyll` file has already been hardcoded in `/public` to ensure GitHub Pages correctly reads Vite’s `_` prefixed asset folders.
