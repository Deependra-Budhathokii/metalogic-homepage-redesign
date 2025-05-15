# Metalogic Homepage Redesign

## 🚀 Tech Stack

- [Next.js](https://nextjs.org/) (v15.3.2)
- [React](https://react.dev/) (v19.0.0)
- [Tailwind CSS](https://tailwindcss.com/) (v4) – for utility-first styling
- [Framer Motion](https://www.framer.com/motion/) (v12.11.0) – for smooth animations
- [TypeScript](https://www.typescriptlang.org/) (v5)
- [React Icons](https://react-icons.github.io/react-icons/) (v5.5.0)
- [Typewriter Effect](https://github.com/tameemsafi/typewriterjs) (v2.22.0)
- [next-themes](https://github.com/pacocoursey/next-themes) (v0.4.6) – for dark mode implementation

## 🌓 Features

### Dark Mode

- System preference detection
- Manual toggle between light and dark themes
- Persistent theme selection
- Smooth transitions between themes
- Accessible theme toggle button with icons

## 📁 Project Structure

```
src/
├── app/                # Next.js app directory
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home page
│   ├── about/        # About page
│   └── services/     # Services page
└── components/        # React components
    ├── Footer.tsx
    ├── Header.tsx
    ├── Herosection.tsx
    ├── Nav.tsx
    ├── Service.tsx
    ├── Servicecard.tsx
    └── Whymetalogic.tsx
```

## 🎨 Design System

### Colors

#### Light Mode

| Name             | Hex                                                  |
| ---------------- | ---------------------------------------------------- |
| Primary(red)     | `#cd3534`                                            |
| Secondary(black) | `#323131`                                            |
| Background       | `linear-gradient(-45deg, #a8e48a, #1eb6d9, #f2d3f7)` |
| Text             | `#111827`                                            |

#### Dark Mode

| Name         | Hex                     |
| ------------ | ----------------------- |
| Primary(red) | `#ff4545`               |
| Background   | `#111827` (dark gray)   |
| Text         | `#f3f4f6` (light gray)  |
| Surface      | `#1f2937` (medium gray) |

### Design Decisions

1. **Accessibility**

   - High contrast color combinations
   - Clear visual hierarchy
   - Proper text sizing and spacing
   - ARIA labels for interactive elements

2. **Theme Transitions**

   - Smooth transitions between light and dark modes
   - Consistent spacing across themes
   - Preserved layouts between themes
   - Optimized SVG and image visibility for both modes

3. **Responsive Design**
   - Mobile-first approach
   - Flexible grid layouts
   - Adaptive typography
   - Optimized for all device sizes

### Fonts

- Hero Text: "Schibsted Grotesk", sans-serif
- Body Text: "Rajdhani", sans-serif
- Base Font: "Poppins", sans-serif (for general content)

### Component Styling

- Consistent border radius (`rounded-lg`)
- Uniform shadow styles
- Standardized hover and focus states
- Smooth transitions (`duration-200` or `duration-300`)
- Responsive padding and margins

## 🛠 Development Practices

- TypeScript for type safety
- Component-based architecture
- CSS-in-JS with Tailwind utilities
- Responsive design patterns
- Accessibility-first approach
- Dark mode compatibility
- SEO optimization
