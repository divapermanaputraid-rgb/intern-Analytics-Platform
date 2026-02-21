# Intern Analytics Platform
![Status](https://img.shields.io/badge/status-active-success.svg)
![Mobile](https://img.shields.io/badge/mobile-Expo%20%7C%20React%20Native-violet)
![Backend](https://img.shields.io/badge/backend-Express.js%20%7C%20TypeScript-black)
![ORM](https://img.shields.io/badge/orm-Prisma-2D3748)
![Database](https://img.shields.io/badge/database-PostgreSQL-336791)
![Runtime](https://img.shields.io/badge/runtime-Node.js%20LTS-339933)
A full-stack analytics platform designed to track intern productivity, task progress, and time allocation.

## Architecture

Monorepo structure:

apps/
  api/      → Express + TypeScript + Prisma
  mobile/   → React Native (Expo)

Database:
PostgreSQL

## Current Status

✔ Monorepo initialized  
✔ Backend Express server running  
✔ Prisma initialized  
⏳ Database schema design in progress  

## Tech Stack

Backend:
- Node.js (LTS)
- Express
- TypeScript
- Prisma
- PostgreSQL

Mobile:
- React Native (Expo)
- TanStack Query

## Development

Start API:

cd apps/api  
npm run dev