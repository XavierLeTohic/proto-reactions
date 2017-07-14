### How it works

When an user click on a reaction, I send a POST request to the server then it emit a socket all users who are in the /live page.
The project used Next.js/Express/socket.io.
The animations of the reactions are made in CSS3 to provide better performances.
I used styled-jsx for styling component that are included in Next.js so don't think it's just inline CSS ;)

### Setup

Install it:

```bash
npm install
```


### Run it

## Run in a development environment (may be slow)

```bash
npm run dev
```

Then visit http://localhost:3000 for reaction buttons
And http://localhost:3000/live for reaction bubbles animations

## Run in a production environment

```bash
npm run build && npm run start
```

Then visit http://localhost:3000
And http://localhost:3000/live for reaction bubbles animations