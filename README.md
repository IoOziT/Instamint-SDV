# Instamint

Instamint is a social network platform that allows users to post and purchase NFTs (Non-Fungible Tokens).

## Installation

1. Clone the project repository using the following command:
   ```
   git clone https://github.com/LouisLagrange1/Instamint-SDV.git
   ```

2. Once the project is cloned and opened in your preferred IDE, create a `.env` file at the root of the project and fill it with the following content:

   ```
   DB_CONNECTION_HOST='localhost'
   DB_CONNECTION_PORT=5432
   DB_CONNECTION_USER='postgres'
   DB_CONNECTION_PASSWORD='your-password'
   DB_CONNECTION_DATABASE='Instamint'
   AUTH_SECRET="secret"
   SALT_ROUNDS_PASSWORD=10
   ```

3. Instamint uses PostgreSQL as its database. Make sure you have pgAdmin installed and create a database named "Instamint".
To be able to execute the command, make sure you have Node.js installed on your machine.

4. In your IDE's terminal, install all project dependencies by running:
   ```
   npm install
   ```

5. Next, create the necessary database tables by executing the following command:
   ```
   export $(cat .env | xargs) && npx knex migrate:latest
   ```

6. Populate the tables with data using the following command:
   ```
   export $(cat .env | xargs) && npx knex seed:run
   ```

7. Finally, start the project by running:
   ```
   npm run dev
   ```

## Accessing Instamint

You can access Instamint via the following URL:
[http://localhost:3000](http://localhost:3000)

## About the Project
Instamint is developed using Next.js.

Regarding the components, we utilize the shadcn library.

To style the frontend of our project, we use the TailwindCSS library.

As mentioned earlier, we are using PostgreSQL for the database.
