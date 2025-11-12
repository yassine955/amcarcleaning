# AM Carcleaning - Design Style Guide

Dit document beschrijft alle design keuzes, styling patterns en visuele richtlijnen voor de AM Carcleaning website.

## 🎨 Kleurenpalet

### Primaire Kleuren
- **Goud Accent**: `#bc9600` - Gebruikt voor iconen, highlights, call-to-actions
- **Dark Background**: `#151515` - Primaire achtergrondkleur voor secties
- **Slightly Lighter Dark**: `#1a1a1a` - Alternatieve sectie achtergrond
- **Card Background**: `#1f1f1f` - Achtergrondkleur voor cards en containers
- **Darker Shade**: `#0a0a0a` - Voor diepere contrasten en frames

### Text Kleuren
- **Primary Text**: `#ffffff` - Witte tekst voor koppen en belangrijke content
- **Secondary Text**: `rgba(255, 255, 255, 0.85)` - Iets transparanter wit voor body text
- **Muted Text**: `rgba(255, 255, 255, 0.7)` - Voor secundaire informatie
- **Dimmed Text**: `#b0b0b0` - Grijze tekst voor beschrijvingen

### Border & Accent Kleuren
- **Gold Border**: `rgba(188, 150, 0, 0.2)` - Subtiele gouden borders
- **Gold Background**: `rgba(188, 150, 0, 0.08)` - Licht gouden achtergrond voor highlights
- **Gold Icon Background**: `rgba(188, 150, 0, 0.15)` - Voor icon containers
- **White Border Subtle**: `rgba(255, 255, 255, 0.1)` - Subtiele witte borders

## 📝 Typografie

### Font Families
- **Headings**: `'Barlow', serif` - Voor alle koppen (h1-h6)
- **Body**: `'Ubuntu', sans-serif` - Voor normale tekst
- **Buttons**: `'Roboto Condensed', sans-serif` - Voor alle knoppen (uppercase)

### Font Sizes (Responsive met clamp)
- **Hero Heading**: `clamp(2.5rem, 5vw, 4rem)`
- **Section Heading**: `clamp(2rem, 4vw, 3rem)`
- **Subsection Heading**: `clamp(1.75rem, 3vw, 2.5rem)`
- **Card Title**: `1.5rem`
- **Body Text**: `1rem` tot `1.125rem`
- **Small Text**: `0.875rem` tot `0.9375rem`
- **Button Text**: `1rem` (Hero), `0.875rem` (Navbar)

### Font Weights
- **Bold Headings**: `600` - Voor alle headings
- **Medium**: `500` - Voor navigatie
- **Regular Body**: `400` - Voor body tekst

### Letter Spacing
- **Section Tags**: `0.05em` - Voor "//" tags boven secties
- **Buttons**: `0.5px` - Voor button tekst
- **Default**: `0` - Voor normale tekst

## 🔘 Buttons

### Primary Button (Witte Knop)
```css
background-color: #ffffff
color: #151515
border: 2px solid #ffffff
border-radius: 2px
padding: 16px 40px
font-family: 'Roboto Condensed', sans-serif
font-weight: 600
font-size: 1rem
text-transform: uppercase
letter-spacing: 0.5px
transition: all 200ms ease
```

**Hover State**:
```css
background-color: transparent
color: #ffffff
transform: translateY(-2px)
```

### Compact Button (Navbar)
```css
padding: 10px 20px
font-size: 0.875rem
```

### Button Varianten
- **Hero Button**: Groot formaat (16px 40px padding)
- **Navbar Button**: Compact formaat (10px 20px padding)
- **Footer Button**: Medium formaat (12px 24px padding)

## 🎯 Icons

### Icon Containers
**Grote Icons (Voordeel Cards)**:
```css
width: 75px
height: 75px
background-color: rgba(188, 150, 0, 0.15)
border: 1px solid rgba(188, 150, 0, 0.3)
border-radius: 2px
```

**Medium Icons (Feature Lists)**:
```css
width: 50px
height: 50px
background-color: #bc9600
border-radius: 50% (cirkel)
```

**Icon Kleur**: Altijd `#bc9600` (goud) voor consistency

### Icon Types
- **Spray Can**: `fa-spray-can` - Interieur reiniging
- **Star**: `fa-star` - Exterieur reiniging, kwaliteit
- **Award**: `fa-award` - Kwaliteit, vakmanschap
- **Shield**: `fa-shield-alt` - Bescherming
- **Gem**: `fa-gem` - Premium, glans
- **Check**: `fa-check` - Checklist items
- **Users**: `fa-users` - Persoonlijke service
- **Heart**: `fa-heart` - Passie

## 📦 Cards & Containers

### Standard Card
```css
background: #1f1f1f
border-radius: 2px
border: 1px solid rgba(255, 255, 255, 0.1)
padding: 40px
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3)
transition: all 200ms ease
```

### Call-to-Action Card
```css
background-color: rgba(188, 150, 0, 0.08)
border: 1px solid rgba(188, 150, 0, 0.2)
border-radius: 2px
padding: 64px 40px
```

### Service Card (met foto)
```css
display: flex
flex-direction: column
height: 100%
overflow: hidden
```

**Foto**:
```css
height: 300px
object-fit: cover
```

## 🎭 Sections & Layout

### Section Spacing
- **Large Sections**: `padding: 120px 0`
- **CTA Sections**: `padding: 80px 0`
- **Margin Top (na navbar)**: `margin-top: 80px`

### Container
```css
max-width: 1200px
padding: 0 32px
```

### Section Headers
**Tag Style** (// text //):
```css
color: #bc9600
text-transform: uppercase
font-size: 0.875rem
font-weight: 600
letter-spacing: 0.05em
margin-bottom: 16px
font-family: 'Barlow', serif
```

### Background Colors
- **Primary Dark**: `#151515` - Hoofdsecties
- **Alternate Dark**: `#1a1a1a` - Afwisselende secties
- **Hero**: Transparante overlay over afbeelding

## 🧭 Navigation

### Navbar (Desktop)
```css
height: 80px
position: fixed
top: 0
z-index: 1040
background: rgba(21, 21, 21, 0.7) (transparant)
backdrop-filter: blur(10px)
```

**Scrolled State**:
```css
background: #151515 (solid)
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3)
```

### Nav Links
```css
color: rgba(255, 255, 255, 0.9)
font-weight: 500
font-size: 0.9375rem
padding: 0.5rem 1rem
transition: all 200ms ease
```

**Hover**:
```css
color: #bc9600
```

### Navbar (Mobile)
```css
padding: 12px 24px
background-color: #1a1a1a
border: 1px solid rgba(188, 150, 0, 0.2)
border-top: 1px solid rgba(188, 150, 0, 0.3)
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5)
```

**Nav Items**:
```css
padding: 12px 0
font-size: 1rem
border-bottom: 1px solid rgba(255, 255, 255, 0.05)
```

### Hamburger Menu
```css
width: 24px
height: 2px
background-color: #ffffff
```

**Three Lines**: Top (-8px), Middle (0), Bottom (+8px)

## 📱 Responsive Design

### Breakpoints
- **Mobile**: `< 768px`
- **Tablet**: `768px - 991px`
- **Desktop**: `≥ 992px`
- **Large Desktop**: `≥ 1200px`

### Mobile Aanpassingen
- Vertical padding reduced: `12px` instead of `16px`
- Font sizes slightly smaller
- Full-width buttons op mobile
- Stacked layouts (col-12)
- Hidden elements: `.d-none .d-lg-block`

### Fluid Typography
Gebruik altijd `clamp()` voor responsive tekstgroottes:
```css
font-size: clamp(min, preferred, max)
```

## 🎨 Special Effects

### Transitions
Standaard transition voor alle interactieve elementen:
```css
transition: all 200ms ease
```

### Hover Effects
- **Buttons**: `transform: translateY(-2px)`
- **Links**: Kleurverandering naar `#bc9600`
- **Cards**: Subtle scale of shadow change

### Box Shadows
- **Cards**: `0 10px 30px rgba(0, 0, 0, 0.3)`
- **Mobile Menu**: `0 4px 16px rgba(0, 0, 0, 0.5)`

### Borders
- **Subtle**: `1px solid rgba(255, 255, 255, 0.1)`
- **Gold Accent**: `1px solid rgba(188, 150, 0, 0.2)`
- **Strong Gold**: `1px solid rgba(188, 150, 0, 0.3)`

## 🏢 Footer

### Layout
- **2 Columns**: Adres | Openingstijden
- **Centered**: `justify-content-center`
- **Padding**: `80px 0 40px 0`

### Border
```css
border-top: 1px solid rgba(188, 150, 0, 0.2)
```

### Openingstijden
- **Ma-Vr**: 07:00 - 17:00
- **Za**: 09:00 - 15:00
- **Zo**: Gesloten

### Copyright
```css
border-top: 1px solid rgba(255, 255, 255, 0.1)
padding-top: 32px
margin-top: 64px
text-align: center
font-size: 0.875rem
color: rgba(255, 255, 255, 0.5)
```

Inclusief KvK nummer: "KvK: 65 41 07 69"

## 📋 Form Elements

### Input Fields
```css
border-radius: 2px
border: 1px solid rgba(255, 255, 255, 0.1)
background-color: #1f1f1f
color: #ffffff
```

### Submit Button
Gebruikt de Primary Button stijl (wit met zwarte tekst)

### Success/Error Messages
- **Success**: `#d4edda` background, `#155724` text
- **Error**: `#f8d7da` background, `#721c24` text

## 🎯 Design Principles

### Consistentie
1. **Alle knoppen** zijn wit met zwarte tekst en Roboto Condensed font
2. **Alle iconen** gebruiken dezelfde gouden kleur (#bc9600)
3. **Alle cards** hebben dezelfde border-radius (2px) en shadow
4. **Alle secties** volgen dezelfde spacing patterns

### Minimalisme
- **2px border-radius** - Minimaal maar modern
- **Geen ronde hoeken** - Strak en professioneel
- **Subtiele borders** - Niet opdringerig
- **Clean typography** - Duidelijke hiërarchie

### Dark Mode First
- Alle backgrounds zijn donker (#151515, #1a1a1a, #1f1f1f)
- Tekst is wit of lichtgrijs voor contrast
- Goud accent (#bc9600) voor highlights
- Subtiele borders voor definitie

### Mobile Optimalisatie
- Compact padding op mobile (12px vs 16px)
- Responsive typography met clamp()
- Stack layouts op kleine schermen
- Touch-friendly button sizes (min 44px height)

## 📸 Images

### Object Fit
```css
object-fit: cover
border-radius: 2px
```

### Filters (wanneer nodig)
```css
filter: brightness(0.95) contrast(0.95)
image-rendering: auto
```

### Sizes
- **Service Cards**: 300px height
- **Hero Images**: Full viewport height
- **About Images**: 400px+ min-height

## 🔤 Text Styles

### Line Heights
- **Headings**: `1.2`
- **Body**: `1.6` tot `1.7`
- **Compact**: `1.5`

### Text Colors by Context
- **Headings**: `#ffffff`
- **Body**: `#b0b0b0` of `rgba(255, 255, 255, 0.7)`
- **Strong/Emphasis**: `#ffffff`
- **Links**: `#ffffff` met hover naar `#bc9600`

### Text Transforms
- **Buttons**: `uppercase`
- **Section Tags**: `uppercase`
- **Nav Links**: Normal case
- **Body**: Normal case

## ✨ Animation & Transitions

### Standard Transition
```css
transition: all 200ms ease
```

### Transform Hover
```css
transform: translateY(-2px)
```

### Backdrop Filter (Transparency)
```css
backdrop-filter: blur(10px)
-webkit-backdrop-filter: blur(10px)
```

## 🎪 Special Components

### Experience Badge
```css
background: rgba(10, 10, 10, 0.85)
padding: 20px 28px
border-radius: 2px
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5)
border: 1px solid rgba(255, 255, 255, 0.1)
backdrop-filter: blur(10px)
position: absolute
bottom: 0
left: 0
```

### Pricing Cards
2x2 Grid layout met flexbox:
```css
display: grid
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
gap: 20px
```

### Feature Highlights
Gold accent background:
```css
background-color: rgba(188, 150, 0, 0.08)
border: 1px solid rgba(188, 150, 0, 0.2)
```

## 📐 Spacing Scale

### Margins & Padding
- **xs**: `8px`
- **sm**: `12px`
- **md**: `16px`
- **lg**: `24px`
- **xl**: `32px`
- **2xl**: `40px`
- **3xl**: `64px`
- **4xl**: `80px`
- **5xl**: `120px`

### Gap (Grid/Flex)
- **Cards**: `20px` (g-4)
- **Large Sections**: `40px` (g-5)

## 🎨 Do's and Don'ts

### ✅ Do's
- Gebruik altijd goud (#bc9600) voor accenten
- Houd buttons wit met zwarte tekst
- Gebruik 2px border-radius voor consistency
- Gebruik clamp() voor responsive typography
- Houd mobile padding compact (12px)
- Test alle hover states

### ❌ Don'ts
- Gebruik GEEN blauwe kleuren meer (#1e40af is vervangen)
- Gebruik GEEN ronde borders (50% border-radius) voor cards
- Gebruik GEEN verschillende button stijlen
- Mix GEEN font families voor headings
- Gebruik GEEN harde contrasten zonder transitions

## 🔍 Accessibility

### Contrast Ratios
- Wit op donker: Excellent (>15:1)
- Goud op donker: Good (>7:1)
- Grijs op donker: Adequate (>4.5:1)

### Focus States
Alle interactieve elementen hebben visible hover/focus states

### Touch Targets
Minimum 44x44px voor mobile buttons

## 📱 Performance

### Font Loading
Gebruik font-display: swap voor Google Fonts

### Image Optimization
- Use next/image voor optimization
- Lazy loading voor images below fold
- WebP format waar mogelijk

### CSS
- Minimize inline styles waar mogelijk
- Use CSS modules voor component-specific styles
- Combine multiple style updates in single render

---

**Laatste Update**: 2025-11-12
**Versie**: 1.0
**Onderhouden door**: Claude Code AI Assistant
