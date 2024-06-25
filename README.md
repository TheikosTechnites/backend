# NomadIQ Backend

## Installation

1. Install [Node.js and npm](https://www.npmjs.com/get-npm) and [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2. Clone this repo:

   ```bash
   git clone https://github.com/TheikosTechnites/backend.git
   ```

4. Configure [MongoDB] [Compass] in your local environment.
   Add connection strings.

5. Configure [Docker] [WebApp] in your local environment.

6. Run [`init`](init). This installs the required dependencies and sets up .env in your local repository.

   ```bash
   bash scripts/init-repository.sh
   ```

8. Update [.env](.env). Request the environment variable values for dev from backend developers 

## Running the app

1. To run the app for the first time and everytime there are changes in the migration files, execute these commands:

   ```bash
   $ npm run build
   $ npm run typeorm -- migration:run
   ```

   Followed by any of the commands in step 2.

2. If there is no need for any migrations, the app can be ran using any of these command:

   ```bash
   # development
   $ npm run start

   # watch mode
   $ npm run start:dev

   # production mode
   $ npm run start:prod
   ```

## Testing

### Unit Tests

Simply run

```bash
$ npm run test
```

### End-to-End (e2e) Tests

Simply run

```bash
$ npm run test:e2e
```

### Test coverage

To determine the code coverage, run

```bash
$ npm run test:cov
```