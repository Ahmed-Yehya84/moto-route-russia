# 🏍️ MotoRoute Russia

**MotoRoute Russia** is a full-stack web application designed to help motorcyclists plan long-distance road trips across Russia. From tracking epic journeys like Moscow to Vladivostok, to logging day-by-day routes and sharing adventures — this app is built for riders, by riders.

## 🚀 Project Overview

The project combines a powerful Node.js backend with a clean HTML/CSS (BEM-structured) frontend. It enables users to:

- 🔐 Sign up and log in securely _(JWT & Passport.js planned)_
- 🧍 Create rider profiles
- 🛣️ Plan trips across Russian cities
- 📍 Log trip details including origin, destination, distance, and duration
- 📆 (Planned) Break trips into days with `TripDay` logs — ideal for detailed itineraries
- 🗺️ (Planned) View routes on Google Maps or Yandex Maps
- 📄 (Planned) Export or share trip plans

## 🧱 Tech Stack

### Backend

- **Node.js** & **Express.js**
- **PostgreSQL** with **Sequelize ORM**
- **JWT Authentication** _(coming soon)_
- **Passport.js** for Google login _(coming soon)_

### Frontend

- **HTML & CSS** with BEM methodology
- (Planned) Dynamic interactions using Vanilla JS or frontend frameworks if needed

### Other Tools

- **Nodemon** for development
- **Sequelize CLI** for migrations and model generation
- **Dotenv** for environment config
- **SweetAlert2** and **Toastify** _(planned for frontend UX)_

## 📦 Current Features (Working)

- ✅ Sequelize setup with PostgreSQL
- ✅ `User` and `Trip` models with associations
- ✅ Full Sequelize migration system
- ✅ Field validation for required trip info
- ✅ Scripts to seed/test the database
- ✅ Association methods working (`user.createTrip()`)

## 🔭 Upcoming Features

- 🔐 JWT-based authentication & Passport.js integration
- 📆 TripDay model with daily breakdowns
- 🗺️ Google Maps/Yandex Maps API for route planning
- 📤 PDF or CSV export of trip data
- 📱 Frontend integration with responsive design

## 📁 Project Structure

moto-route-russia/
│
├── config/ # Sequelize config
├── controllers/ # App logic (planned)
├── migrations/ # Sequelize DB migrations
├── models/ # Sequelize models (User, Trip)
├── public/ # Frontend HTML/CSS (BEM structured)
├── routes/ # Express routes (planned)
├── scripts/ # Dev/test scripts for DB seeding
├── views/ # Views if needed (index.html)
└── README.md # You are here!

---

## 👨‍💻 Developed By

Ahmed Yehya — frontend developer, adventurer, and aspiring full-stack web wizard 🧙‍♂️  
This project is part of a personal portfolio and a love letter to long-distance motorcycle journeys across Russia.

---

> _"A journey of a thousand miles begins with a single line of code."_ – MotoRoute Russia
