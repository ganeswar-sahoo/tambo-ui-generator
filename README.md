# Tambo UI Generator

A Tambo-powered UI generator that allows users to create dashboards, forms, charts, tables, and layouts using natural language.

This project demonstrates how to register structured UI components with Tambo so AI can generate **real UI components**, not just text or code snippets.

---
## What This Project Does

Users can type prompts like:

- Create a SaaS analytics dashboard
- Add a user stats section with stat cards
- Show a transactions table
- Create a login form

And the app renders actual React components on screen using Tambo.

This project is built as:
- A learning reference for the Tambo ecosystem
- A hackathon-ready UI generator template
- An example of schema-controlled AI UI rendering

---
## Tech Stack

- Next.js
- React
- Tailwind CSS
- Tambo AI
- Zod (for schema validation)

---
## Registered Components

The following components are registered with Tambo and can be generated via prompts:

- **PageLayout** – Page container with title and description
- **Section** – Content grouping with optional heading
- **StatCard** – Displays a single metric
- **Chart** – Renders bar, line, or pie chart layouts
- **Table** – Structured data table with fixed columns
- **Form** – Input forms generated from schema
- **Dashboard** – Combines stats and charts

All components use strict Zod schemas to ensure safe AI generation.

---
## Project Structure

```text
src/
├── app/
│   └── chat/page.tsx
├── components/
│   ├── tambo/
│   │   ├── stat-card.tsx
│   │   ├── table.tsx
│   │   └── graph.tsx
│   └── ui-generator/
│       ├── Dashboard.tsx
│       ├── Form.tsx
│       ├── PageLayout.tsx
│       └── Section.tsx
├── lib/
│   └── tambo.ts
```
---
## How to Run

### Install dependencies

```bash
npm install
```
## Environment Setup

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_TAMBO_API_KEY=your_api_key_here
```

## Start Development Server

```bash
npm run dev
```
## `Open in your browser`

http://localhost:3000

## Example Prompts

Try these in the chat UI:

- Create a SaaS analytics dashboard
- Add a section with user stats and 3 stat cards
- Show a monthly signups chart from January to June
- Add a transactions table with date, user, amount, and status
- Create a login form with email and password
- Create a page layout with stats and charts sections

---

## How to Add New Components

To add a new AI-generated UI component:

- Create a React component
- Define the component props clearly
- Create a Zod schema for the props
- Register the component in `src/lib/tambo.ts`
- Test the component using chat prompts

---

## Purpose

This project is not just an app.

It is a reference template showing how to:

- Control AI output with schemas
- Generate real UI from natural language
- Build safe and reusable AI-driven components

---

## License

MIT License

---

## Final Checklist

```bash
git add README.md
git commit -m "docs: finalize README"
git push
```
