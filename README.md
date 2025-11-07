# Professional Profile Website

A modern, responsive professional profile website built with Next.js, TypeScript, and Tailwind CSS. Perfect for showcasing your skills, experience, and projects.

## Features

- 🎨 Modern and responsive design
- 🌙 Dark mode support
- 📱 Mobile-friendly interface
- ⚡ Fast and optimized with Next.js
- 🎯 Smooth scrolling navigation
- 📧 Contact form
- 🚀 Ready for Vercel deployment

## Sections

- **Hero**: Eye-catching introduction section
- **About**: Personal information and background
- **Skills**: Technical skills with proficiency levels
- **Experience**: Work history and achievements
- **Projects**: Portfolio of featured projects
- **Contact**: Contact information and message form

## Getting Started

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

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, title, and description
   - Change the avatar initials

2. **About Section** (`components/About.tsx`):
   - Modify the about text
   - Update education, location, and interests

3. **Skills Section** (`components/Skills.tsx`):
   - Add or modify skills and proficiency levels

4. **Experience Section** (`components/Experience.tsx`):
   - Update work experience entries

5. **Projects Section** (`components/Projects.tsx`):
   - Add your own projects with descriptions and technologies

6. **Contact Section** (`components/Contact.tsx`):
   - Update contact information (email, LinkedIn, GitHub, phone)

### Styling

- Colors can be customized in `tailwind.config.ts`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind CSS classes

## Deployment on Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "New Project" and import your repository

4. Vercel will automatically detect Next.js and configure the build settings

5. Click "Deploy" and your site will be live!

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in

2. Click "Add New Project"

3. Import your Git repository or upload the project folder

4. Vercel will auto-detect Next.js settings

5. Click "Deploy"

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact section
│   ├── Experience.tsx   # Experience section
│   ├── Hero.tsx         # Hero section
│   ├── Navigation.tsx   # Navigation bar
│   ├── Projects.tsx     # Projects section
│   └── Skills.tsx       # Skills section
├── public/              # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue on GitHub or contact me through the contact form on the website.

