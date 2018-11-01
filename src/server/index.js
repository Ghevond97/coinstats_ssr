import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import { PORT } from './config';
import App from '../client/App';
import store from '../client/store/configureStore';
const app = express();

app.use(cors());
app.use(express.static('public'));

app.get('*', (req, res, next) => {
  const finalState = store.getState();
  const markup = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  res.send(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="/bundle.js" defer></script>
    </head>
    <body>
    <div id="root">${markup}</div>
    </body>
    </html>`
  );
});
// catch 404 and forward to error handler

app.listen(PORT, () => {
  console.log(`Web server listening on: ${PORT}`);
});
