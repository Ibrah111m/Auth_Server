# Auth Server

Det här projektet är en autentiseringstjänst byggd med Node.js, Express, PostgreSQL och Docker. Den använder JSON Web Tokens (JWT) för att hantera användarinloggning och autentisering. 

## Funktioner
- Skapa och hantera användare
- Skapa och hantera användargrupper
- CRUD-operationer för användare via API
- Användarautentisering med JWT

## Installation och användning

### 1. Klona repot

För att komma igång, börja med att klona repot:

```bash
git clone https://github.com/Ibrah111m/Auth_Server.git
cd Auth_Server

2. Installera beroenden

Installera nödvändiga paket via npm:

npm install

3. Skapa en .env-fil

Skapa en .env-fil i projektets rotmapp och lägg till följande miljövariabler:

ACCESS_TOKEN_SECRET=din_hemliga_access_token
REFRESH_TOKEN_SECRET=din_hemliga_refresh_token
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=authdb
DB_HOST=db
PORT=3000

Viktigt: För att säkerställa att dina hemligheter inte läcker, ska du byta ut ACCESS_TOKEN_SECRET och REFRESH_TOKEN_SECRET mot egna hemligheter. Håll dessa uppgifter privata!
4. Kör applikationen med Docker

För att starta applikationen och databasen med Docker, använd följande kommando:

docker-compose up --build

Detta kommer att bygga och köra både applikationen och databasen i separata containrar.
5. Åtkomst till applikationen

När applikationen körs kommer den att vara tillgänglig på följande URL:er:

    Login: http://localhost:3000/api/auth/login
    Users: http://localhost:3000/api/admin/users

API-endpoints
Auth Endpoints

    POST /api/auth/login: Loggar in användaren och returnerar access och refresh tokens.
    POST /api/auth/logout: Loggar ut användaren genom att rensa cookies med JWT.

Admin Endpoints

    GET /api/admin/users: Hämtar alla användare från databasen.
    POST /api/admin/users: Skapar en ny användare.
    GET /api/admin/users/
    Hämtar användarinformation baserat på användarens ID.
    PUT /api/admin/users/
    Uppdaterar användardata för en specifik användare baserat på ID.
    DELETE /api/admin/users/
    Tar bort en användare baserat på ID.

Group Endpoints

    POST /api/admin/groups: Skapar en ny grupp.
    GET /api/admin/groups: Hämtar alla grupper.
    DELETE /api/admin/groups/
    Tar bort en grupp baserat på gruppnamnet.

Docker

Applikationen använder Docker för att köra både backend-servern och PostgreSQL-databasen. Docker-kommandon används för att bygga och starta containrar.
Docker Compose

Docker Compose används för att hantera tjänster. Här är några användbara kommandon:

    Bygg och starta containrar:

docker-compose up --build

Stoppa containrar:

docker-compose down

Se loggar för containrar:

    docker-compose logs

Databas

Applikationen använder PostgreSQL som databas. När du kör applikationen med Docker, kommer databasen att initieras automatiskt.

För att komma åt databasen via terminalen (psql) kan du använda:

docker exec -it auth-server-db-1 psql -U postgres -d authdb

När du har anslutit till databasen kan du köra SQL-kommandon som:

SELECT * FROM "Users";
