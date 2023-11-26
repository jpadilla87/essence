# Essence - Candle Shop
An Online Candle Store made using React.

# Links
Hosted Site: <[Essence Candle Shop](https://essence-true.vercel.app/)>  

## Installation/Startup guide 🔨

cd into the app folder to access everything

Node version requirement 
```
version >= 18.18
```

1. Install packages
```
`npm install`
```
Installs all required modules/dependencies. (If the app is throwing missing errors, check this first)

### Scripts 📜
`npm start`

This will let you run the site locally in development mode.
Ideal for testing and non-production runs.

`npm run dev`

This should start the project locally, on http://localhost:3000/

## Installing the files
The project team14project.zip folder is in the link above and contains the database sql dump (team14dump.sql). If you are using mysql workbench you can either import the sql file or copy the code into the editor in the workbench and execute.

## .env
To host this locally you are going to have to store the a `.env` into your ./src/Server folder. The contents of the `.env` should contain the following
```
POSTGRES_URL="postgres://default:JItap3dLQTU0@ep-bold-flower-26522387-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb"
POSTGRES_PRISMA_URL="postgres://default:JItap3dLQTU0@ep-bold-flower-26522387-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NON_POOLING="postgres://default:JItap3dLQTU0@ep-bold-flower-26522387.us-east-1.postgres.vercel-storage.com:5432/verceldb"
POSTGRES_USER="default"
POSTGRES_HOST="ep-bold-flower-26522387-pooler.us-east-1.postgres.vercel-storage.com"
POSTGRES_PASSWORD="JItap3dLQTU0"
POSTGRES_DATABASE="verceldb"
```

# Data Application Features
1. Insert/Modified/Delete
    - Inserts:  
        - Register (Data)  
                - First Name, Last Name, Email, Password
        - Add Candle
                - Name, Scent Category, Price, Quantity, Supplier ID

    - Edits/Modified:   
        - Candle Information
            - Name, Scent Category, Price, Quantity

    - Delete/Remove:  
        - Candle
            - Performs delete operations that affect the database.

            
2. Types of Roles  
    <table>
        <thead>
            <tr>
                <td>Username</td>
                <td>Password</td>
                <td>Type</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>admin@essence.com</td>
                <td>PasswordA123</td>
                <td>admin</td>
            </tr>
            <tr>
                <td>johndoe1@gmail.com</td>
                <td>johndoe</td>
                <td>customer</td>
            </tr>
        </tbody>
    </table>
3. Triggers and Semantic constraints (In Process) 
    1. Although uncomplete, when a person tries to add candles into their cart, they are unable to purchase more than the quantity available. I.E. Buying 21 candles, where there is only 20 in stock. The number input stops and doesn't allow any higher number.
       
4. Types of queries/reports availiable
    - Tickets Report - Displays Order Information

## Technologies 📡

#### Front-end
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

#### Database
![PostgreSQL](https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

#### Hosting

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
