## 🎬 Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📂 Project Structure

```
Ashutosh_PORTFOLIO/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & Tailwind
├── components/
│   ├── AnimatedBorder.tsx  # Reusable animated border
│   ├── Hero.tsx            # Hero section
│   ├── ProofMetrics.tsx    # Statistics strip
│   ├── ProjectHighlights.tsx # Project cards
│   ├── FeaturedCaseStudy.tsx # Case study panel
│   ├── Capabilities.tsx    # Skills grid
│   ├── GitHubActivity.tsx  # GitHub stats
│   └── ContactCTA.tsx      # Contact section
├── public/
│   ├── profile.jpg         # Your profile photo
│   └── videos/             # Project demo videos
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies

```

## 🎨 Customization Checklist

- [ ] Add your profile photo to `public/profile.jpg`
- [ ] Update Hero.tsx with your profile image
- [ ] Add project videos to `public/videos/`
- [ ] Update email in ContactCTA.tsx
- [ ] Update LinkedIn URL in ContactCTA.tsx
- [ ] Update GitHub URL in ContactCTA.tsx
- [ ] Customize project details in ProjectHighlights.tsx
- [ ] Update metrics in ProofMetrics.tsx
- [ ] Customize case study in FeaturedCaseStudy.tsx
- [ ] Update skills in Capabilities.tsx
- [ ] Update GitHub stats in GitHubActivity.tsx

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
- Netlify
- Railway
- AWS Amplify
- Cloudflare Pages

## 🎯 Performance Tips

1. **Images**: Use Next.js Image component for optimization
2. **Videos**: Compress videos before adding (use HandBrake)
3. **Fonts**: Uses Google Fonts with display=swap
4. **Animations**: CSS-only for 60fps performance
5. **Build**: Run `npm run build` to check bundle size

## 🔧 Troubleshooting

**Port already in use?**
```bash
# Change port in package.json or use:
npm run dev -- -p 3001
```

**TypeScript errors?**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
