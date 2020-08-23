# Todo app

This is a simple todo app, from [The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp) node js tutorial on youtube, where he'd use mongo but I used postgres instead.

## What's different
Nothing special
* Used postgres
* Change ajax route/url, from `todo` to `/`
* Delete item by `id` instead of the `items` text
* Passed the item `id` as the `id` of the list item

## Requirements
* postgres
* nodejs

## Depedencies
Dependencies are in the package.json file

## How to set up
* open terminal and cd into where you'd like to put this app
* clone repo, `git clone https://github.com/Otumian-empire/sample-practice-project-todo-app-nodejs.git`
* change into the root dir, `cd sample-practice-project-todo-app-nodejs`
* create a `.env` file, `touch .env`
* add the content as follows:

    ```
    PGHOST='localhost'
    PGUSER='postgres'
    PGDATABASE='todo_db'
    PGPASSWORD=<postgres_password>
    PGPORT=5432
    ```
    > Change PGUSER and PGPASSWORD

* Now, create database and table
    * Still on the terminal, enter, `psql postgres` or `psql <postgres_user_name>`
    * Open, copy and paste the sql statement from the `.sql` file from the root dir, a line after the other.

        which should help create the database and table.
    * Or you may open pgAdmin, create a server if you don't have one
        * create a database and copy and paste the query to create the table into the query tool and run it.

* install dependencies, `npm i`
* open, `localhost:3000/` in browser

