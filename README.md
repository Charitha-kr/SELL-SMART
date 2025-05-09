
# SoftSell - Software License Resale Platform

## Project Information
https://soft-sell-bay.vercel.app/

SoftSell is a fictional software resale startup that helps businesses and individuals sell their unused software licenses quickly, securely, and for the best possible price.

## Features Implemented

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Modern UI**: Clean, professional design with a cohesive color palette and typography
- **Complete Marketing Website**: All sections required in the assignment:
  - Hero section with compelling headline and CTA
  - "How It Works" process visualization with 3 steps
  - "Why Choose Us" section with 4 key benefits
  - Customer testimonials section
  - Contact/Lead form with frontend validation
- **Animations**: Subtle animations enhance user experience
- **Meta Tags**: SEO-optimized meta tags in the HTML head
- **Favicon**: Simple emoji favicon as a placeholder
- **Form Validation**: Frontend validation for the contact form
- **Dark/Light Mode**: Theme toggle with system preference detection and local storage persistence
- **AI Chat Widget**: Mock AI assistant with intelligent response system for common questions

## Design Choices

- **Color Palette**: Blue-based professional palette that conveys trust and security
  - Primary: Blue (#0171c7)
  - Secondary accents of lighter blues
  - Dark backgrounds for contrast and visual interest
- **Typography**:
  - Poppins for headings: Professional, clean, and modern
  - Inter for body text: Excellent readability
- **Component Structure**: Modular components for easy maintenance
- **Animation**: Subtle entrance animations to enhance engagement without being distracting
- **Responsive Approach**: Mobile-first design ensuring the site works well on all device sizes
- **Chat Interface**: Friendly, intuitive chat widget with familiar messaging UI patterns

## Chat Widget Features

- Fixed position in bottom-right corner for easy access
- Collapsible interface to minimize screen space when not in use
- Simulated "typing" indicators for a realistic experience
- Intelligent response system that matches user questions to predefined answers
- Conversation history maintained during the session
- Responsive design that works on all device sizes

## Time Spent

The implementation took approximately 8 hours:
- Planning and structure: 1 hour
- Component development: 3 hours
- Styling and responsive design: 1 hour
- Testing and refinement: 1 hour
- Dark/Light mode implementation: 1 hour
- Chat widget implementation: 1 hour

## Tech Stack

- React with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- ShadCN UI for component structure
- React Router for navigation
- React Query for potential future data fetching

## How to Run Locally

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm i

# Start the development server
npm run dev
```

Visit `http://localhost:8080` to see the site running locally.

## Deployment on Vercel

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Sign up or login to [Vercel](https://vercel.com)
3. Create a new project and import your GitHub repository
4. Vercel will automatically detect the Vite configuration
5. Click "Deploy" and your site will be live in minutes

The `vercel.json` file in the repository ensures proper configuration for routing and building the project.
