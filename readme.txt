1. Elephant SQL 

CREATE TABLE books ( id INT PRIMARY KEY NOT NULL, 
title VARCHAR(45) NOT NULL, 
description VARCHAR(255) NOT NULL, 
cover VARCHAR(45));

2. in vs code

npm init -y

npm i express 

npm i nodemon

npm i pg

npm i dotenv

npm i cors

(npm i express pg nodemon cors dotenv )  <-- als einzeiler möglich ;)

3. in package.json

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js" <---- insert this so we dont need to start everytime the server


4. create a file

.gitignore

write inside

.env
node_modules


5. create another file

.env

enter PG_CONNECTIONSTRING = and the "link" from elephantsql, no "`' needed

6. Create new Folder -> frontend

install npx create-react-app . inside of it

7. still in frontend

npm i react-router-dom

8. the Fetch

after creating a pages folder with Books.jsx, Add.jsx, Update.jsx etc.

we will install axios to fetch the needed data

npm i axios




