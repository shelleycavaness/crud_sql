# crud_sql
##Local setup
Install Docker
Run `docker-compose build` from the root of the repository
##Running the project
Run `docker-compose up` from the root of the repository

## in new terminal

`docker exec -it quintin_crud_db_1 /bin/bash`

then enter password for database found in the docker file.
Then enter `mysql -p`
or run
`docker exec -it quintin_crud_db_1 "mysql" "-p"`
or `mysql -u user -p` 

`exit` to quite sql server

## in 3rd terminal
run `npm start`