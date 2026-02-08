# Ashutosh Pandey - Portfolio

A production-ready developer portfolio built with Next.js, React, and Tailwind CSS, featuring a clean YC-style design with dark theme and animated borders.

## 🚀 Features

- **YC-Style Design**: Clean, product-focused layout inspired by Y Combinator
- **Animated Borders**: Reusable component with rotating conic-gradient effect
- **Dark Theme**: Black + deep blue color scheme for professional look
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: CSS-only animations for optimal performance
- **Type-Safe**: Built with TypeScript for reliability

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Space Grotesk (headings) + Inter (body)
- **Animations**: CSS-only (no JavaScript animation libraries)

## 🎨 Sections

1. **Hero**: Two-column layout with profile photo and CTAs
2. **Proof Metrics**: Key statistics strip
3. **Project Highlights**: 3 large product boxes with video previews
4. **Featured Case Study**: In-depth project showcase
5. **Capabilities**: Technical skills grid
6. **GitHub Activity**: Recent contributions and activity
7. **Contact CTA**: Call-to-action with contact links

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Personal Information

Edit the following files to customize with your information:

- **Hero Section**: `components/Hero.tsx`
- **Projects**: `components/ProjectHighlights.tsx`
- **Capabilities**: `components/Capabilities.tsx`
- **Contact Links**: `components/ContactCTA.tsx`

### Add Profile Photo

Place your profile image in the `public` folder and update the Hero component:

```tsx
<img
  src="/your-photo.jpg"
  alt="Ashutosh Pandey"
  className="w-full h-full object-cover"
/>
```

### Add Project Videos

1. Add video files to `public/videos/` folder
2. Uncomment the video element in `components/ProjectHighlights.tsx`
3. Update the `videoPlaceholder` field in the projects array

## 🎯 Animated Border Component

The reusable `AnimatedBorder` component creates a rotating conic-gradient effect:

```tsx
import AnimatedBorder from '@/components/AnimatedBorder';

<AnimatedBorder borderWidth={3}>
  <YourContent />
</AnimatedBorder>
```

### Customization Options

- `borderWidth`: Width of the animated border (default: 2px)
- `className`: Additional Tailwind classes
- Adjust animation speed in `tailwind.config.ts`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (stacked layout)
- **Tablet**: 768px - 1024px (2-column grid)
- **Desktop**: > 1024px (full 3-column grid)

## 🎨 Color Scheme

```css
- Black: #000000
- Deep Blue: #0A1628
- Dark Blue: #1E40AF
- Accent Blue: #3B82F6
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contact

**Ashutosh Pandey**
Product Engineer — AI & Systems

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com)
- GitHub: [Your GitHub](https://github.com)

---

Built with ❤️ using Next.js and Tailwind CSS
