# Wedding Invitation Website

An elegant, responsive wedding invitation website designed to be hosted on GitHub Pages. The website features a beautiful design with sections for the invitation, venue details, and a photo gallery.

## Features

- Responsive design that works on all devices
- Elegant typography with Google Fonts (Montserrat, Great Vibes, and Allura)
- Full-screen hero section with couple's names
- Formal invitation section with ceremony and reception details
- Interactive venue details with Google Maps integration
- Photo gallery section
- Clean and modern design

## Structure

```
├── index.html          # Main HTML file
├── styles.css         # CSS styles
├── script.js         # JavaScript functionality
└── assets/          # Images and media
    ├── hero-bg.jpg        # Hero section background
    ├── couple-photo-1.webp # Gallery image 1
    ├── couple-photo-2.webp # Gallery image 2
    └── couple-photo-3.webp # Gallery image 3
```

## Setup

1. Replace images in the `assets` folder:
   - `hero-bg.jpg` - Hero section background (recommended size: 1920x1080px)
   - `couple-photo-1.webp`, `couple-photo-2.webp`, `couple-photo-3.webp` - Gallery photos

2. Update wedding details in `index.html`:
   - Couple's names in the hero section
   - Wedding date and time
   - Ceremony and reception venues
   - Google Maps links for both venues
   - Gallery photos

## Features Details

### Hero Section
- Full-screen design with overlay
- Elegant display of couple's names
- Wedding date and announcement

### Invitation Section
- Formal invitation text
- Separate ceremony and reception details
- Elegant typography with decorative elements

### Venue Details
- Separate cards for ceremony and reception
- Time and location information
- Direct Google Maps integration
- Interactive location buttons

### Photo Gallery
- Responsive grid layout
- Hover effects on images
- Support for WebP image format

## Hosting on GitHub Pages

1. Create a new repository on GitHub
2. Push this code to your repository
3. Go to repository Settings > Pages
4. Under "Source", select "main" branch
5. Your site will be published at `https://[username].github.io/[repository-name]`

## Customization

### Fonts
The website uses three Google Fonts:
- 'Montserrat' for general text
- 'Great Vibes' for decorative headings
- 'Allura' for special text elements

To modify fonts:
1. Update the Google Fonts link in `index.html`
2. Modify the font-family properties in `styles.css`

### Colors
Main colors used:
- Text: #333 (dark gray)
- Accent: #ff6b6b (pink)
- Backgrounds: #f9f9f9 (light gray)

### Responsive Design
The website is fully responsive with breakpoints at:
- 768px for tablets
- 480px for mobile devices

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes
This is a static website optimized for GitHub Pages hosting. The design focuses on elegance and readability while maintaining good performance across all devices.
