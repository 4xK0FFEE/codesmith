# FastAPI Template Generator - Frontend

## Overview
This repository contains the frontend for the FastAPI Template Generator, built using Next.js. The application provides a user-friendly interface to interact with the backend, allowing users to browse, generate, and manage templates efficiently. 

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Technologies Used
- **Framework**: Next.js – for building a server-side rendered React application.
- **HTTP Client**: Axios – for handling API requests to the backend.
- **Styling**: Tailwind CSS – for utility-based styling.
- **Animations**: Framer Motion – for smooth and interactive UI animations.
- **Component Library**: shadcn/ui – for pre-built UI components.
- **Icons**: React-Icons – for integrating various icons seamlessly.

## Installation & Setup

### Prerequisites
Ensure that you have the following installed on your system:
- **Node.js** (LTS version recommended)
- **npm** (Comes with Node.js) or **yarn**

### Running the Application

1. **Start the Backend**
   - Before running the frontend, make sure the backend is running by following the [backend setup instructions](../backend/README.md).

2. **Clone the Repository**
   ```sh
   git clone https://github.com/0xK0FFEE/codesmith.git
   cd codesmith/frontend
   ```

3. **Install Dependencies**
   ```sh
   npm install
   ```
   *(Alternatively, use `yarn install` if using Yarn.)*

4. **Set Up Environment Variables**
   Create a `.env.local` file in the root of the project and configure the necessary environment variables:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
   ```
   Adjust the API URL based on the backend server's location.

5. **Run the Development Server**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features
- **Template Management**: Browse, generate, and store templates easily.
- **Responsive UI**: Fully responsive design optimized for all screen sizes.
- **API Integration**: Seamless communication with the backend using Axios.
- **Dynamic Animations**: Smooth animations powered by Framer Motion.
- **Modern Styling**: Aesthetic and customizable UI built with Tailwind CSS.

## Contributing
Contributions are welcome! Please ensure that any changes align with the existing code structure and follow best practices. Open an issue or submit a pull request with detailed explanations for enhancements.
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
