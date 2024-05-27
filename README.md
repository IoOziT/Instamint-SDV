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

     ```
    DB_CONNECTION_HOST : Specifies the hostname or IP address of the database server. It tells the application where to find the database
    ```
     ```
    DB_CONNECTION_PORT : The port number on which the database server listens. Set this value to match your database configuration.
    ```
     ```
    DB_CONNECTION_USER : The username used for database authentication. This user should have necessary permissions for database operations.
    ```
     ```
    DB_CONNECTION_PASSWORD : The password associated with the specified user. Keep it confidential for secure database connections.
    ```
     ```
    DB_CONNECTION_DATABASE : The name of the specific database within the management system. For example, if your project is named “Instamint,” set this parameter to ‘Instamint’.
    ```
     ```
    AUTH_SECRET : It can be generated with "openssl rand -base64 32" and he's use for authentication.
    ```
    ```
    SALT_ROUNDS_PASSWORD : It is for determine the number of rounds when hashing user password.
    ```

3. Instamint uses PostgreSQL as its database. Make sure you have postgres installed and create a database. If your database name is not "Instamint" make sure to change the name of your database in the .env file.

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
