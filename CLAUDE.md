# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with turbopack (uses port 3000)
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Architecture Overview

This is a Next.js 15 application using App Router that provides an AI-powered bionic reading service for Korean and English text, specifically designed for users with dyslexia, ADHD, and reading difficulties.

### Key Components Structure

**Core Technologies:**
- Next.js 15 with App Router (TypeScript)
- Tailwind CSS for styling with Pretendard font
- Radix UI components for accessible UI primitives
- Supabase for backend services
- Google Gemini AI for text conversion
- React 19

**Application Structure:**
- **Landing Page (`app/page.tsx`):** Sectioned marketing page with interactive bionic reading demo
- **Converter Page (`app/converter/page.tsx`):** Main text conversion interface with real-time processing
- **Layout (`app/layout.tsx`):** Korean-optimized layout with Pretendard font and structured navigation
- **Sections (`components/sections/`):** Modular landing page components (Hero, Stats, UseCases, etc.)
- **UI Components (`components/ui/`):** Reusable Radix-based components following shadcn/ui patterns

**Key Features:**
- **Interactive Bionic Reading Demo (`components/sections/HeroSection.tsx`):** Real-time mouse-tracking demo showing bionic reading effect
- **Text Converter (`app/converter/page.tsx`):** Full-featured conversion interface with settings panel
- **AI Integration (`lib/gemini/client.ts`):** Enhanced Gemini AI service with Korean-specific processing and fallback logic
- **Custom Hook (`hooks/useBionicReading.tsx`):** Handles bionic reading logic with Korean-optimized word emphasis rules
- **Bionic Text Component (`components/ui/bionic-text.tsx`):** Specialized component for rendering converted text

**Language Optimization:**
The application implements Korean-specific bionic reading rules:
- 2-3 syllable words: emphasize first syllable
- 4+ syllables: divide by meaning units and emphasize first part of each
- Skip particles and endings
- Focus on noun and verb roots

**Environment Variables Required:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_GEMINI_API_KEY` (for AI text conversion)

**Styling Patterns:**
- Uses Korean-optimized typography with Pretendard font
- Responsive design with mobile-first approach
- Custom animations and hover effects
- Consistent component styling through Radix UI and Tailwind