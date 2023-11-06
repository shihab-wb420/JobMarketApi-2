# JobMarketApi-2

```markdown
# Job Board API

A RESTful API for managing job postings, filtering job listings, and applying for jobs.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Endpoints](#endpoints)
- [Authentication and Authorization](#authentication-and-authorization)
- [Usage](#usage)
- [License](#license)

## Features

- Create job postings with title, company, location, salary, description, tags, and more.
- Get job listings, filter by various parameters (e.g., title, location, tags), and sort them by date or salary.
- Apply to job postings.
- User authentication and authorization, allowing only registered company users to create and update job posts.
- Pagination support for job listings.

## Requirements

- Node.js
- MongoDB
- Express.js

## Getting Started

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/job-board-api.git
   ```

2. Install dependencies with Yarn:
   ```sh
   cd job-board-api
   yarn install
   ```

3. Set up a MongoDB database.

4. Create a `.env` file in the root directory and configure the following environment variables:
   ```
   MONGODB_URI=your_mongodb_uri
   SECRET_KEY=your_secret_key
   ```

5. Start the server:
   ```sh
   yarn start
   ```

## Endpoints

- `POST /api/jobs/create`: Create a new job posting.
- `GET /api/jobs`: Get job listings with optional query parameters for filtering and sorting.
- `PUT /api/jobs/update/:id`: Update a job posting by ID.
- `POST /api/jobs/apply/:id`: Apply to a job posting by ID.
- `GET /api/jobs/filter`: Filter job listings with dynamic query parameters (title, location, company, tags, sort, experience, page, perPage).

## Authentication and Authorization

- User authentication is required for creating job posts and applying for jobs.
- Authorization is enforced to allow only registered users with the "company" role to create and update job posts.

## Usage

- Access the API using the provided endpoints, and use the query parameters for filtering and sorting job listings.
- Ensure user authentication and authorization for creating and updating job posts.
- Customize the API as needed for your application.

## License

This project is licensed under the [MIT License](LICENSE).
```
