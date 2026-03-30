# Elevate (ElevateBrand CiC) — Next.js Project Handoff

## Stack
- Next.js 15, TypeScript, Tailwind CSS
- Fonts: Poppins (`--font-poppins`), DM Sans (`--font-dm-sans`), Sora (`--font-sora`)
- Brand colors: Navy `#0C1660`, Purple `#4229C9`, Teal `#4ECDC4`, Blue `#178BDD`

---

## File Structure
```
elevate/
├── app/
│   ├── layout.tsx              — Root layout, fonts, overflow-x-hidden
│   ├── globals.css             — Global styles
│   ├── page.tsx                — Homepage
│   ├── products/
│   │   └── page.tsx            — Digital Products page ✅
│   └── programmes/
│       ├── leadership-training/
│       │   └── page.tsx        — Leadership Training (LUD) ✅
│       └── leadership-coaching/
│           └── page.tsx        — Leadership Coaching ✅
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          — Sticky navbar, mobile drawer ✅
│   │   └── Footer.tsx          — Black footer, 4 columns ✅
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── ImpactSection.tsx
│   │   ├── WhatWeDoSection.tsx
│   │   └── StayConnectedSection.tsx
│   └── icons/
│       └── Icons.tsx           — Full SVG icon library ✅
├── public/                     — All images and SVGs
├── tailwind.config.ts
└── package.json
```

---

## Pages Built ✅
| Page | Route | Status |
|---|---|---|
| Homepage | `/` | ✅ Built |
| Leadership Training | `/programmes/leadership-training` | ✅ Built |
| Leadership Coaching | `/programmes/leadership-coaching` | ✅ Built |
| Digital Products | `/products` | ✅ Built |

## Pages Still To Build ❌
| Page | Route |
|---|---|
| Programmes listing | `/programmes` |
| Events | `/events` |
| Metrics & Impact | `/metrics` |
| About | `/about` |
| Free Resources | `/free-resources` |

---

## Icons Library (`components/icons/Icons.tsx`)
All icons accept `size`, `color`, `className` props.

| Export | Description | Default color |
|---|---|---|
| `IconParticipants` | People silhouette | white |
| `IconHybrid` | Book/hybrid | white |
| `IconTrauma` | Target circles | white |
| `IconProven` | Medal | white |
| `IconSkill` | People group | white |
| `IconLeadership` | Brain + cloud | white |
| `IconCoaching` | Person + badge | white |
| `IconWorkshops` | Building | white |
| `IconCohort` | Two people (cohort) | #4229C9 |
| `IconClock` | Clock face | #4229C9 |
| `IconBadge` | Star badge | #4229C9 |
| `IconTarget` | Concentric circles | #4229C9 |
| `IconLightbulb` | Lightbulb | #4229C9 |
| `IconUser` | Single person | #4229C9 |
| `IconUsers` | Group (3 people) | #1E72AB |
| `IconDirectionClarity` | Target/aim | #4229C9 |
| `IconAccountability` | Chat bubble | #4229C9 |
| `IconGrowthAction` | Calendar | #4229C9 |

---

## Design Tokens

### Colors
```
Purple:   #4229C9  (primary CTA, buttons)
Blue:     #178BDD  (group coaching, gradients)
Navy:     #2a1898  (hero gradient start)
Teal bg:  rgba(71, 235, 224, 0.05)   (section alternating bg)
Gray bg:  rgba(121, 121, 121, 0.05)  (coaching areas bg)
Black:    #000000  (footer)
```

### Typography
```
Headings:    Poppins 600, letter-spacing -0.25px or -1% or -2%
Body large:  Poppins 400, 20px, 32px lh
Body small:  Poppins 400, 14px, 20px lh
Hero subtitle: Roboto/DM Sans 400, 24px, 36px lh, -2% ls
```

### Spacing (Desktop)
```
Page horizontal padding:  96px or 85px
Section vertical padding: 60px top/bottom
Hero height:              346px
CTA banner height:        350px, padding 103px 432px
```

### Gradients
```
Leadership Training hero:  180deg, #2a1898 → #4229C9 → #4a90d9 → #6ab4f5
Leadership Coaching hero:  180deg, #4229C9 → #178BDD
Products hero:             180deg, #4229C9 → #178BDD
CTA banners:               135deg, #2a1898 → #4229C9 → #1a7fc4
```

---

## Mobile Responsiveness Rules
- `overflow-x-hidden` set on `<body>` in layout.tsx
- Use Tailwind responsive prefixes: `px-4 sm:px-6 lg:px-[85px]`
- Font sizes: `text-xl sm:text-2xl lg:text-[32px]`
- Grids: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- NEVER use `width: "Xpx"` in inline styles for containers — use `maxWidth` instead
- Fixed pixel widths on text elements (352px, 550px etc.) should be removed
- CTA buttons: `flex-col sm:flex-row` with `w-full sm:w-auto`

---

## Figma
URL: `https://figma.com/design/fK0db90m0lBckZjKLWDMP9/Elevate`

---

## Known Issues / Pending
1. Mobile layout still needs testing — white space issue on mobile was being fixed
2. Homepage hero section may need updating to match latest Figma
3. `components/Footer.tsx` and `components/Navbar.tsx` (root level) are old versions — use `components/layout/` versions
4. Free Resources, Events, Metrics, About, Programmes pages not yet built

---

## Instructions for New Chat
Paste this into the new chat:

> "We're building the Elevate (ElevateBrand CiC) website in Next.js 15 + TypeScript + Tailwind CSS. I'll share the handoff doc and existing code. The brand color is #4229C9 purple, fonts are Poppins/DM Sans/Sora. Pages still to build: /programmes (listing), /events, /metrics, /about, /free-resources. I have design screenshots from Figma to share for each page."
