# Docker Compose File for PostgreSQL and pgAdmin

This repository contains a Docker Compose file that sets up a PostgreSQL database server and pgAdmin web interface for managing the server.


## Usage

To use this Docker Compose file, follow these steps:

1. Clone this repository to your local machine:

```
    git clone https://github.com/yourusername/your-repo.git
```

2. Create an `.env` file with the following environment variables:

```
    POSTGRES_USER=login_user
    POSTGRES_PASSWORD=login_password
    POSTGRES_DB=db_name

    PGADMIN_DEFAULT_EMAIL=login_email
    PGADMIN_DEFAULT_PASSWORD=login_password


    Replace the `login_user`, `login_password`, `db_name`, `login_email`, and `login_password` values with your desired values for the PostgreSQL and pgAdmin services.
```

3. Open a terminal or command prompt and navigate to the directory containing the `docker-compose.yml` file.

4. Start the containers by running the following command:

```
    docker-compose up   //or//   docker compose up
```

5. Open a web browser and navigate to `http://localhost:8888` to access the pgAdmin web interface.

6. Use the pgAdmin web interface to manage the PostgreSQL database server running inside the container.