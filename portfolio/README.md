# Next.js Portfolio with EmailJS

A modern, responsive portfolio website built with Next.js, TailwindCSS, and EmailJS integration for the contact form.

## Features

- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations using Framer Motion
- 🌙 Dark/Light mode support
- 📬 Working contact form with EmailJS
- 📊 Skills visualization
- 📝 Project showcases
- 🚀 Fast performance with Next.js
- 🧩 Component-based architecture

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository or download the code:

```bash
git clone <repository-url>
# or download the zip file
```

2. Navigate to the project directory:

```bash
cd portfolio
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Set up EmailJS:

   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create a service (Gmail, Outlook, etc.)
   - Create an email template with variables: `from_name`, `from_email`, `subject`, and `message`
   - Get your Service ID, Template ID, and Public Key
   - Update these values in `src/components/Contact.tsx`

```typescript
// Replace these values with your own EmailJS credentials
const serviceId = "YOUR_SERVICE_ID";
const templateId = "YOUR_TEMPLATE_ID";
const publicKey = "YOUR_PUBLIC_KEY";
```

5. Start the development server:

```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

Edit the following files to add your personal information:

- `src/components/Hero.tsx` - Update name, title, and introduction
- `src/components/About.tsx` - Update about me, experience, and education
- `src/components/Projects.tsx` - Update projects with your own
- `src/components/Skills.tsx` - Update skills and proficiency
- `src/components/Contact.tsx` - Update contact information
- `src/components/Footer.tsx` - Update footer links and name

### Images

Add your own images to the `public` directory:

- Add your profile picture and update the path in `Hero.tsx`
- Add project screenshots and update the paths in `Projects.tsx`

### Styling

The project uses TailwindCSS for styling. You can customize colors, fonts and more in the `tailwind.config.js` file.

## Deployment

This project can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages. For the best experience, consider using [Vercel](https://vercel.com/) as it's optimized for Next.js applications.

```bash
npm run build
# or
yarn build
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)
