# Car Cleaning & Repair Service - Next.js Website

This is a professional car cleaning and repair service website built with Next.js, converted from the original HTML template.

## Features

- **Modern Next.js Framework**: Built with Next.js 16 and React 19
- **TypeScript**: Full TypeScript support for type safety
- **Responsive Design**: Mobile-first responsive design using Bootstrap 5
- **Multiple Pages**:
  - Home (/)
  - About (/about)
  - Services (/services)
  - Team (/team)
  - Testimonials (/testimonial)
  - Booking (/booking)
  - Contact (/contact)
- **Reusable Components**: Modular component architecture
- **Animations**: WOW.js and Animate.css for smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd car-cleaning-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
car-cleaning-nextjs/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── booking/           # Booking page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── team/              # Team page
│   ├── testimonial/       # Testimonial page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── PageHeader.tsx
│   ├── PageLayout.tsx
│   ├── Spinner.tsx
│   └── Topbar.tsx
├── public/                # Static assets
│   ├── css/
│   ├── img/
│   ├── js/
│   └── lib/
├── next.config.js
├── package.json
└── tsconfig.json
```

## Customization

### Updating Content

1. **Contact Information**: Edit the `Topbar.tsx` and `Footer.tsx` components
2. **Navigation**: Modify `Navbar.tsx` to add/remove menu items
3. **Services**: Update the services section in `app/services/page.tsx`
4. **Team Members**: Edit team data in `app/team/page.tsx`

### Styling

- Global styles are in `app/globals.css`
- Bootstrap 5 is used for the grid system and components
- Custom styles from the original template are preserved in `/public/css/style.css`

## Technologies Used

- **Next.js 16**: React framework for production
- **React 19**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript
- **Bootstrap 5**: CSS framework for responsive design
- **Font Awesome**: Icon library
- **Animate.css**: CSS animation library
- **WOW.js**: Scroll animation library
- **Owl Carousel**: Touch-enabled carousel

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using Vercel:

```bash
npm install -g vercel
vercel
```

### Other Platforms

You can also deploy to:
- Netlify
- AWS Amplify
- Railway
- Render

Build the application first:
```bash
npm run build
```

Then upload the `.next` folder and run:
```bash
npm start
```

## License

This template is free to use with attribution to HTML Codex.

## Support

For issues or questions, please open an issue in the project repository.
