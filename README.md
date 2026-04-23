# Accredian Enterprise Landing Page Clone

A high-fidelity, production-ready replica of the Accredian Enterprise landing page built with **Next.js**, **React**, and **Tailwind CSS**. This project demonstrates a focus on modular architecture, responsive design, and interactive user experiences.

## 🚀 Live Demo
[Insert Vercel Deployment Link Here]

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/accredian-enterprise-clone.git
   cd accredian-enterprise-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🏗️ Approach Taken

- **Modular Component Architecture**: Built reusable React components (Hero, Stats, Testimonials, FAQ, etc.) to ensure a clean, maintainable, and scalable codebase.
- **Tailwind CSS for High-Fidelity Styling**: Leveraged Tailwind's utility-first approach to achieve pixel-perfect parity with the original design, including complex layouts like the horizontal marquee and responsive grid systems.
- **Next.js App Router**: Utilized the latest Next.js features for efficient routing and built-in API support for lead capture.
- **Custom Interaction System**: Implemented a sitewide custom cursor system and high-fidelity micro-interactions (hover states, modal transitions) to enhance user engagement.
- **Responsive-First Design**: Ensured strict viewport compliance, with specific UI logic for mobile users (e.g., list-view stats, mobile-optimized marquee).

---

## 🤖 AI Usage Explanation

This project was developed using **Antigravity** (and other AI tools) as an advanced coding partner. The collaboration focused on translating high-level architectural requirements and specific design prompts into optimized code.

### Where AI Helped
- **Rapid Prototyping**: AI was used to quickly generate initial component structures and Tailwind layouts based on precise structural prompts.
- **Complex Logic Implementation**: AI assisted in wiring up the Next.js API routes and handling state transitions for the multi-step Enquiry Form.
- **CSS Precision**: Assisted in refining complex CSS behaviors, such as the infinite marquee and custom scrollbar configurations.

### Manual Modifications & Improvements
While AI helped with the heavy lifting of implementation, the core of the project was driven by **manual oversight and iterative refinement**:
- **Design System Definition**: I manually defined the color palettes, typography hierarchy, and spacing tokens to ensure brand consistency.
- **Responsive Auditing**: Manually fine-tuned every breakpoint to ensure that complex layouts (like the 'Accredian Edge' USP section) felt native on all devices.
- **Asset Integration**: Curated and integrated all branding assets, including the custom SVG social icons and hero imagery.
- **Logic Refinement**: Manually refactored the form submission logic to move from simple timeouts to a functional Next.js API integrated with lead capture.

---

## 🔮 Future Improvements

With more time, the following enhancements would be prioritized:
- **Database Persistence**: Integrate MongoDB or Prisma to store captured leads permanently rather than just logging them.
- **Content Management System (CMS)**: Integrate Sanity or Contentful to allow marketing teams to update FAQ content and testimonials without code changes.
- **Form Validation**: Implement Zod for more robust server-side and client-side validation of form data.
- **Internationalization (i18n)**: Add multi-language support to cater to a global enterprise audience.
- **Performance Optimization**: Implement specialized image loading strategies and edge caching for even faster load times.
