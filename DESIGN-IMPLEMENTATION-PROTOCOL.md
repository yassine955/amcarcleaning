# Design Implementation Protocol

## Principe: Content Behouden, Alleen Styling Aanpassen

Deze werkwijze zorgt ervoor dat bij het implementeren van een nieuw design systeem, **ALLE originele content behouden blijft** en alleen de visuele presentatie wordt aangepast.

## Stappen:

### 1. Analyseer het Bron Design
- Bekijk de referentie website/screenshots
- Identificeer alle design elementen:
  - Kleurenpalet (primair, secundair, accent kleuren)
  - Typografie (fonts, groottes, gewichten, line-heights)
  - Spacing (marges, paddings, sectie afstanden)
  - Border-radius (afronding van hoeken)
  - Shadows (schaduwen en diepte effecten)
  - Hover states en transitions
  - Layout patronen (grid, flexbox, alternerende secties)
  - Component styling (buttons, cards, links)

### 2. Creëer Design DNA JSON
Maak een gestructureerd JSON bestand zoals `rogo-design-dna.json` met:

```json
{
  "name": "Design System Naam",
  "colors": {
    "primary": { ... },
    "secondary": { ... },
    "accent": { ... }
  },
  "typography": {
    "fontFamilies": { ... },
    "fontSizes": { ... },
    "fontWeights": { ... }
  },
  "spacing": { ... },
  "components": { ... },
  "layoutPatterns": { ... }
}
```

### 3. Implementeer ALLEEN Styling

**WAT WEL DOEN:**
✅ Kleuren aanpassen (achtergrond, tekst, accent)
✅ Typografie styling (font-family, font-size, font-weight, line-height)
✅ Spacing aanpassen (padding, margin, gaps)
✅ Border-radius aanpassen
✅ Shadows toevoegen/aanpassen
✅ Hover effects en transitions toevoegen
✅ Icon kleuren aanpassen
✅ Button styling aanpassen
✅ Link styling aanpassen (underline, kleur)
✅ Layout spacing verbeteren

**WAT NIET DOEN:**
❌ GEEN content verwijderen
❌ GEEN headings aanpassen (h1, h2, h3, etc.)
❌ GEEN paragrafen veranderen
❌ GEEN secties verwijderen
❌ GEEN links veranderen
❌ GEEN structuur wijzigen
❌ GEEN tekst herschrijven

## Praktijk Voorbeeld: Rogo Design DNA Implementatie

### Origineel (voor):
```jsx
<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  <div className="d-flex py-5 px-4">
    <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
    <div className="ps-4">
      <h5 className="mb-3">Interieur Reiniging</h5>
      <p>Professionele behandeling van bekleding, dashboard en alle interieur onderdelen</p>
      <a className="text-secondary border-bottom" href="/interieur">Meer info</a>
    </div>
  </div>
</div>
```

### Na Rogo DNA Styling:
```jsx
<div className="col-lg-4 col-md-6">
  <div style={{ display: 'flex', padding: '40px 32px' }}>
    {/* ✅ ALLEEN kleur aangepast van 'text-primary' naar green */}
    <i className="fa fa-certificate fa-3x flex-shrink-0" style={{ color: '#19a26c' }}></i>
    <div className="ps-4">
      {/* ✅ ALLEEN styling toegevoegd, tekst blijft hetzelfde */}
      <h5 style={{
        marginBottom: '16px',
        fontSize: '1.25rem',
        fontWeight: 600,
        color: '#151515'
      }}>
        Interieur Reiniging
      </h5>
      {/* ✅ ALLEEN styling, content ongewijzigd */}
      <p style={{
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#737373',
        marginBottom: '16px'
      }}>
        Professionele behandeling van bekleding, dashboard en alle interieur onderdelen
      </p>
      {/* ✅ ALLEEN link styling, href en tekst ongewijzigd */}
      <a
        href="/interieur"
        style={{
          fontSize: '0.9375rem',
          color: '#151515',
          textDecoration: 'none',
          borderBottom: '1px solid #151515',
          fontWeight: 500,
          transition: 'all 200ms ease'
        }}
      >
        Meer info
      </a>
    </div>
  </div>
</div>
```

## Checklist Voor Implementatie

Voor het implementeren:
- [ ] Lees originele content uit git/backup
- [ ] Identificeer alle secties en hun exacte content
- [ ] Noteer alle headings (h1, h2, h3, etc.)
- [ ] Noteer alle paragrafen en hun tekst
- [ ] Noteer alle links en hun href attributen

Tijdens implementeren:
- [ ] Behoud exact dezelfde HTML structuur
- [ ] Behoud alle CSS classes die nodig zijn voor layout (col-lg-6, row, etc.)
- [ ] Voeg ALLEEN inline styles toe voor design
- [ ] Test dat alle content nog zichtbaar is
- [ ] Verifieer dat alle links nog werken

Na implementeren:
- [ ] Vergelijk met origineel: is alle content er nog?
- [ ] Controleer alle headings: zijn ze onveranderd?
- [ ] Controleer alle paragrafen: exacte tekst behouden?
- [ ] Controleer alle links: correcte href en tekst?
- [ ] Test responsive behavior op mobile/tablet/desktop

## Design DNA Patronen

### Kleuren
```javascript
// Primaire kleuren
const colors = {
  dark: '#151515',      // Voor primaire tekst en buttons
  gray: '#737373',      // Voor secundaire tekst
  accent: '#19a26c',    // Voor icons, links, hover states
  beige: '#f5f2eb',     // Voor alternerende backgrounds
  white: '#ffffff'      // Voor kaarten en lichte backgrounds
}
```

### Typografie Hiërarchie
```javascript
// Rogo DNA voorbeeld
h1: {
  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
  fontWeight: 600,
  lineHeight: '1.2',
  fontFamily: "'Barlow', serif"
}

h2: {
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  fontWeight: 600,
  lineHeight: '1.2'
}

p: {
  fontSize: '1.125rem',
  lineHeight: '1.6',
  color: '#737373'
}
```

### Spacing Systeem
```javascript
// Consistent spacing
sections: '120px',      // Tussen grote secties
blocks: '80px',         // Tussen content blokken
elements: '24px-40px',  // Tussen gerelateerde elementen
```

### Component Styling
```javascript
// Buttons
button: {
  borderRadius: '2px',           // Minimaal
  padding: '14px 32px',
  transition: 'all 200ms ease',
  backgroundColor: '#151515',
  color: '#ffffff'
}

// Links
link: {
  textDecoration: 'underline',   // Of border-bottom
  color: '#151515',
  hover: { color: '#19a26c' }
}

// Icons
icon: {
  color: '#19a26c',              // Accent kleur
  size: '3rem'
}
```

## Resultaat

Het eindresultaat is een pagina die:
1. ✅ 100% van de originele content bevat
2. ✅ Professionele, moderne visuele presentatie heeft
3. ✅ Consistent design systeem volgt
4. ✅ Alle functionaliteit behoudt
5. ✅ Responsive blijft op alle schermformaten

##Voorbeeld Output

**Voor:** Generic Bootstrap styling met standaard kleuren
**Na:** Sophisticated Rogo-inspired design met:
- Monochrome palette + green accent
- Generous whitespace
- Minimal border-radius (2px)
- Clean typography hierarchy
- Professional hover effects
- Dark-framed images

**Content:** EXACT HETZELFDE - geen woord veranderd!
