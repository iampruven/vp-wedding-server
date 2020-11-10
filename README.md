# Wedding Server
- Welcome to the wedding website.

## Features

- View couple time line.

- Meet wedding party personels.

- View photos.

- RSVP only if on the invite list.

## Tech Stack

### Server:
- Node.js
- Express
- Knex
- PostgreSQL
- Heroku


## API Docs:
- POST
    - Request: '/rsvp'
    - Allows guest to locate name along with invite.


- POST
    - Requests: '/updateresponse'
    - Allows guest(s) to send response of attending event along with a note.

### Local Dev Setup
If using postgres:
```
createdb -U postgres wedding
```

To start:
```
npm install
npm run migrate
```