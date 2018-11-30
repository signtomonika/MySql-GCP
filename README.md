# REST API USING GOOGLE CLOUD MYSQL

This is Sample Application for using GCLOUD MySQL in NodeJS Application and deploying it to App Engine

### Contents

* [Prerequisites](#prerequisites)
* [Local Run](#local-run)
* [Testing](#testing)
* [GCLOUD Deploy](#gcloud-deploy)

### Prerequisites

* GCLOUD Instance Creation

    * Create Second Generation Instance. Refer [Documentation](https://cloud.google.com/sql/docs/mysql/create-instance)

* Connect to the Server from MySQL Workbench or any MySQL Client

    * Get Public IPv4 Address [Here](https://www.whatismyip.com/what-is-my-public-ip-address/)
    * Configure Gcloud Connection. Refer [Documentation](https://cloud.google.com/sql/docs/mysql/configure-ip)
    * Use `Connect To Instance` details present in [GCLOUD MYSQL Instance Detail](https://console.cloud.google.com/sql/instances) to connect to server via client

    * Configure NodeJS Application to use GCLOUD MySQL

        * Create file `config.json` in the below format in "Root" folder

           ````json
                {  
                "MYSQL_USER": "server user name",  
                "MYSQL_PASSWORD": "password",  
                "HOST_NAME": "ip address",  
                "DATABASE_NAME": "database name"  
                }   

           ````
       
### Local Run :computer:

```console
 $npm start 
```
#### OR

```console
$node server.js 
```

#### OR

```console
$nodemon server.js
```

Open Link http://localhost:8080/

### Testing :thumbsup:

```console
$npm test
```

#### OR

```console
$npm run test-watch
```


Open Link http://localhost:8080/

### GCLOUD Deploy

* Follow [Steps](https://cloud.google.com/nodejs/getting-started/hello-world) to deploy the application
* Create config.json file in the root folder with contents from local
* run ``` console gcloud app deploy ```


