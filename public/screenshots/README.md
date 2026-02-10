# Product Screenshots

This folder contains high-quality landing page screenshots for featured projects.

## Required Images

Place your actual project screenshots here with these exact filenames:

1. `voice-booking-agent.png` - AI Voice Booking Agent landing page
2. `college-email-saas.png` - Institutional Email Automation SaaS landing page
3. `udaash-platform.png` - UDAASH Job Intelligence Platform landing page

## Image Guidelines

### Dimensions
- **Recommended**: 1920x1152 pixels (5:3 aspect ratio)
- **Minimum**: 1600x960 pixels
- **Format**: PNG or WebP for best quality

### Capture Best Practices
1. **Full Landing Page**: Capture the hero section and key visual elements
2. **Dark/Light Theme**: Match your portfolio's theme (capture in dark mode)
3. **High Resolution**: Take screenshots in high DPI/retina display
4. **Clean State**: Remove development tools, lorem ipsum, or placeholder content
5. **Professional Look**: Show the polished, production-ready interface

### Optimization
After adding your screenshots:
```bash
# Install image optimization tool (optional)
npm install -g sharp-cli

# Optimize images
npx sharp -i voice-booking-agent.png -o voice-booking-agent.png -w 1920 --webp
```

## Technical Details

These screenshots are:
- **Lazy loaded** using Next.js Image component (except first project)
- **Optimized** automatically by Next.js
- **Responsive** with proper srcset generation
- **Styled** with YC-inspired product showcase layout

## Temporary Placeholders

If you don't have screenshots ready yet, you can use placeholder images:
- https://placehold.co/1920x1152/0a0a0a/3b82f6?text=Project+Screenshot
- Or keep the current implementation which gracefully handles missing images
