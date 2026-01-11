# Expert Listing

Dashboard UI for **Expert Listing**.

## Live Demo

https://expertlisting.onrender.com/

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **UI**: React
- **Styling**: Tailwind CSS
- **Component primitives**: shadcn/ui + Radix UI
- **Icons**: lucide-react
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Features

- **Dashboard layout** (cards, overview sections, responsive layout)
- **Budgeting modal** (opens from the top navbar)
- **Calendar sheet** (opens from the top navbar, slides in from the right)
- **Mobile responsive navigation** (scrollable menu/navbar icons)

## Getting Started (Local)

### Prerequisites

- Node.js (recommended: latest LTS)

### Install

```bash
npm install
```

### Run

```bash
npm run dev
```

Open:

http://localhost:3000

### Build

```bash
npm run build
npm run start
```

## Testing

This project includes automated tests for the modal components using **Jest** and **React Testing Library**.

### Run tests

```bash
npm test
```

### Watch mode

```bash
npm run test:watch
```

### What's tested

- **Budget modal**: Opens when clicking the budgeting icon, closes correctly
- **Calendar sheet**: Opens when clicking the calendar icon (slides in from the right), closes correctly
