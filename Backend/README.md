# FastAPI Template Generator

## Overview

This project provides a FastAPI-based backend designed for efficient template management. Users can download predefined templates, create custom templates, and store them for future use. The backend follows a modular design, utilizing Beanie as an asynchronous database layer with MongoDB. This structure ensures high scalability, maintainability, and performance.

## Features

- **Predefined Templates**: Download templates from a structured database, allowing quick access to commonly used project structures.
- **Custom Template Generation**: Dynamically generate and store custom templates, enabling flexibility for various development needs.
- **Modular Code Structure**: Separates concerns across `src.models` and `src.routes`, ensuring easy maintenance and scalability.
- **FastAPI CLI Integration**: Provides a streamlined execution flow and command-line interaction for improved development efficiency.
- **Dockerized Deployment**: Includes a `Dockerfile` and `docker-compose` setup, allowing seamless containerized execution.
- **Poetry Dependency Management**: Ensures version consistency and reproducible builds across different environments.
- **Configurable Environment Variables**: Customize database connections, security settings, and application modes via `.env` or direct exports.
- **Asynchronous Database Operations**: Leverages Beanie and MongoDB for non-blocking execution, optimizing performance for high-concurrency workloads.
- **API Documentation**: Automatically generated with Swagger UI (`/docs`) and ReDoc (`/redoc`), facilitating interactive API exploration and integration.

## Requirements

- **Python 3.10 or higher**: Ensures compatibility with FastAPI and asynchronous features.
- **Poetry**: Efficient package and dependency management, avoiding conflicts and ensuring streamlined installations.
- **Docker & Docker Compose (Optional)**: Simplifies infrastructure setup and ensures consistency across environments.
- **MongoDB**: A running MongoDB instance with `MONGO_URI` properly configured for template storage.

## Installation

### Running with Poetry

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/yourrepo.git
   cd yourrepo
   ```
2. Install dependencies:
   ```sh
   poetry install
   ```
3. Set up required environment variables:
   ```sh
   export MONGO_URI="your_mongo_connection_string"
   ```
4. Start the FastAPI development server:
   ```sh
   poetry run fastapi run src.main:app --reload
   ```
   The application should now be accessible at `http://localhost:8000`.

### Running with Docker

1. Build and start the containerized environment:
   ```sh
   docker-compose up --build
   ```
2. Once started, the application will be available at `http://localhost:8000`.

## Error Handling

The backend includes centralized error handling using FastAPI's `HTTPException`. All API responses follow a structured format, ensuring clear communication of error messages, status codes, and debugging details. Custom exception handlers are implemented for database errors, authentication failures, and request validation issues, improving reliability and user experience.

## Contributing

Contributions are highly encouraged! Developers can contribute by reporting issues, suggesting enhancements, or submitting pull requests to improve the backend’s functionality, security, and scalability. Ensure that all contributions follow best coding practices, adhere to the project's modular structure, and include necessary documentation for seamless integration.

---
