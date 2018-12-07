![logo](./snacks_logo.png)

# Galvanize Snacks BACKEND

## Description

Has full CRUD capabilities thats holds data for users, snacks, & reviews.

## Entity Relationship Diagram

![snacks ERD](./snacks_erd.jpg)

## Setup

Start by forking and cloning this repo.
Then install all dependencies

```shell
cd galvanize-snacks
npm install
```

Create the development database:

```shell
createdb snacks_dev
```

and run migrations and seeds:

```shell
npm run knex migrate:latest
npm run knex seed:run
```

Finally, start the server and check that you can GET the `/api/snacks` endpoint

```shell
npm run dev
```
