# SONICS CENTRAL // v2.0

Welcome to the digital command center for the upcoming return of the Seattle SuperSonics. This is a personal full-stack project built as a dashboard to manage front office operations, training facilities, and fan waitlists as the city prepares for a new era of basketball.

The application features a distinct, high-contrast industrial aesthetic using thick borders and hard-shadow grids.

---

## Tech Stack

### Frontend
* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS (Custom Sonics Green and Gold palette)
* **Data Fetching:** Server-rendered components utilizing client-side interactive forms.

### Backend
* **Engine:** Java Spring Boot
* **Data Layer:** Spring Data JPA / Hibernate
* **API:** RESTful endpoints delivering JSON payloads to the frontend.

### Database
* **Engine:** PostgreSQL

---

## Core Features

### The Compound (Facilities Dashboard)
A single-screen view control panel displaying the team's training facilities. It utilizes Next.js URL Search Parameters to transition between different facility views seamlessly without requiring page scrolling or causing layout shifts.

### Priority Access Seat Registry
An interactive client-state registration portal enabling fans to sign up for inaugural season ticket priority. Submitting the application triggers a transition to an "Access Granted" view complete with a dynamically calculated confirmation tracking ID.

### The Pro Shop (Inaugural Apparel Line)
A clean retail showcase delivering real-time product cards directly from the database. Currently configured to manage the launch of the core jersey lineup (White Home, Green Away, and Yellow Alternate) with adaptive text indicators reflecting product stock configurations (`Pre-order`, `In Stock`).

---

## Environment Configuration

### 1. Spring Boot Backend (`src/main/resources/application.properties`)

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/sonics_db
spring.datasource.username=your_postgres_user
spring.datasource.password=your_postgres_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 2. Next.js Frontend (`.env.local`)

NEXT_PUBLIC_API_URL=http://localhost:8080

---

## Getting Started & Installation

### Prerequisites
* Java 17 SDK or higher
* Node.js 18 or higher
* PostgreSQL running locally

### Step 1: Initialize Database
Access your local PostgreSQL instance via your preferred CLI or management tool and run:
```sql
CREATE DATABASE sonics_db;
```

### Step 2: Run the Backend API
Navigate to your repository root containing the Spring Boot codebase and initialize the server:
```bash
./mvnw spring-boot:run
```
The backend will spin up and start listening for connections at `http://localhost:8080`.

### Step 3: Run the Frontend
In a separate terminal window, navigate to your Next.js project folder and execute:
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser to view the operational dashboard.

---

## Project Specifications

* **License:** MIT
* **Status:** This repository is maintained strictly as a personal engineering showcase. Pull requests, issue tickets, and external contributions are not being accepted.

---

*Authorized Personnel Access Only. #BringBackOurSonics*