# Tanisha Chauhan — Developer Portfolio

A modern, minimal, and high-performance developer portfolio website for **Tanisha Chauhan**, Pre-final-year Computer Science student at **G.L. Bajaj Institute of Technology and Management** (Expected Graduation: 2028) and Full-Stack Developer.

Built with **React.js**, **Tailwind CSS**, and **Vite**, featuring a clean white aesthetic, subtle typography, fully responsive layouts, accessible navigation, and direct live demo integrations.

---

## 🚀 Live Demos Featured in Portfolio

- **AI Ad Generator**: [https://ai-ad-generator-seven.vercel.app/](https://ai-ad-generator-seven.vercel.app/)
- **Expense Tracker / Budget Tracker**: [https://expense-tracker-pi-mauve-78.vercel.app/](https://expense-tracker-pi-mauve-78.vercel.app/)

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 18, Vite 6, Modern JavaScript (ES6+)
- **Styling**: Tailwind CSS (Utility-first, responsive, clean monochrome palette with refined accents)
- **Icons**: Lucide React
- **Typography**: Inter & JetBrains Mono (via Google Fonts)
- **Assets**: SVG Favicon, Valid PDF Resume in `public/resume.pdf`

---

## 📁 Project Structure

```text
├── public/
│   ├── favicon.svg             # Monogram "TC" SVG favicon
│   └── resume.pdf              # Downloadable resume file
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Responsive sticky navigation & mobile drawer
│   │   ├── Hero.jsx            # Hero banner, bio, stats, CTA buttons
│   │   ├── About.jsx           # Education, CS focus, DSA journey, Python
│   │   ├── Skills.jsx          # Categorized skills (Languages, DSA, MERN, Tools)
│   │   ├── Projects.jsx        # Project gallery showcasing live apps
│   │   ├── ProjectCard.jsx     # Reusable card with features, stack, and buttons
│   │   ├── Education.jsx       # B.Tech at G.L. Bajaj ITM details
│   │   ├── CodingProfiles.jsx  # GitHub and LeetCode profile cards
│   │   ├── Contact.jsx         # Email copy button, mailto form, LinkedIn
│   │   ├── Footer.jsx          # Social links, back-to-top, copyright
│   │   └── ConfigNotice.jsx    # Dismissible helper notice for customization
│   ├── data/
│   │   └── portfolioData.js    # Single central configuration file for all links & text
│   ├── App.jsx                 # Main layout root
│   ├── main.jsx                # React DOM entry point
│   └── index.css               # Tailwind directives & smooth scrolling styles
├── index.html                  # Accessible markup & SEO meta tags
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ✏️ Customization: Personal URLs & Resume

All personal details, URLs, and placeholders are centralized in a single file:
👉 **`src/data/portfolioData.js`**

### Items to Update:

1. **GitHub Profile & Repository URLs**:
   - In `contactInfo.githubUrl`: replace `YOUR_GITHUB_USERNAME` with your real GitHub handle.
   - In `projectsData`: update `githubUrl` for `ai-ad-generator` and `expense-tracker` with your actual repository URLs (or leave as placeholder until you push them).
2. **LeetCode Profile**:
   - In `contactInfo.leetcodeUrl`: replace `YOUR_LEETCODE_USERNAME` with your real LeetCode username.
3. **LinkedIn Profile**:
   - In `contactInfo.linkedinUrl`: replace `YOUR_LINKEDIN_USERNAME` with your actual LinkedIn vanity URL.
4. **Email Address**:
   - In `contactInfo.email`: replace `tanishachauhan.dev@example.com` with your real email address.
5. **Resume PDF**:
   - Replace `public/resume.pdf` with your actual updated resume PDF. Keep the filename as `resume.pdf` (or update `personalInfo.resumePath` if you rename it).

---

## 💻 Local Development

### Prerequisites:
- **Node.js** (v18.x or v20.x or v22.x)
- **npm** (or pnpm / yarn)

### 1. Install Dependencies:
```bash
npm install
```

### 2. Start Local Dev Server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port Vite prints in your terminal).

### 3. Build for Production:
```bash
npm run build
```
This generates the optimized, production-ready static assets in the `dist/` directory.

### 4. Preview Production Build:
```bash
npm run preview
```

---

## 🌐 How to Push to GitHub

1. Stage and commit all files in your terminal:
   ```bash
   git add .
   git commit -m "feat: complete professional portfolio for Tanisha Chauhan"
   ```

2. Create a new repository on [GitHub](https://github.com/new) named `portfolio` (or `tanisha-chauhan-portfolio`).

3. Set your default branch to `main`, link your remote, and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
   git push -u origin main
   ```

---

## ☁️ Deploying to Vercel

### Option 1: Via Vercel Web Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** > **"Project"**.
3. Import your newly pushed `portfolio` repository from GitHub.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**. Your portfolio will be live in under 60 seconds with a free `.vercel.app` domain and automatic SSL!

### Option 2: Via Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the interactive prompts to link and deploy.

---

## 📄 License
MIT License. Created for Tanisha Chauhan.
