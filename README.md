# i Nails Studio - Content Management System

This website uses Sanity.io as a headless CMS to allow easy content management for services, gallery images, testimonials, and courses.

## Setup Instructions

### 1. Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io/) and create a new account
2. Create a new project
3. Note down your Project ID and Dataset name (usually 'production')

### 2. Configure Sanity Client

1. Replace `'your-project-id'` in `src/lib/sanity.ts` with your actual Sanity project ID
2. Update the dataset name if different from 'production'

### 3. Set Up Sanity Studio

1. Install Sanity CLI globally: `npm install -g @sanity/cli`
2. Navigate to the `sanity` folder: `cd sanity`
3. Install dependencies: `npm install`
4. Update `sanity.config.ts` and `sanity.cli.ts` with your project ID
5. Start Sanity Studio: `npm run dev`
6. Open http://localhost:3333 to access the studio

### 4. Add Content

Use the Sanity Studio interface to add:

- **Services**: Add your nail art, eyelash extensions, and permanent makeup services
- **Gallery Images**: Upload and categorize your work portfolio
- **Testimonials**: Add client reviews and ratings
- **Courses**: Add your training course offerings

### 5. Deploy Sanity Studio (Optional)

To deploy your studio to the web:
```bash
npm run deploy
```

### 6. Set Up Webhooks for Auto-Deployment

1. In your Sanity project dashboard, go to API settings
2. Add a webhook that triggers when content is published
3. Point it to your hosting provider's build hook (e.g., Netlify)

## Content Management

### Services
- Title, description, and features list
- Upload service images
- Mark services as "popular" to show badges

### Gallery Images
- Upload high-quality images of your work
- Add alt text for accessibility
- Categorize by service type

### Testimonials
- Client name, role, and photo
- Star ratings (1-5)
- Testimonial text and service used

### Courses
- Course details: title, duration, student count
- Pricing and ratings
- Course highlights and descriptions
- Mark courses as "featured"

## Technical Features

- **Responsive Design**: Works on all devices
- **Dark/Light Theme**: Toggle between themes
- **SEO Optimized**: Meta tags and schema markup
- **Performance**: Optimized images and lazy loading
- **Accessibility**: ARIA labels and keyboard navigation

## Fallback Content

The website includes fallback content that displays if Sanity is unavailable, ensuring your site always works.

## Support

For technical support or customization requests, contact your developer.