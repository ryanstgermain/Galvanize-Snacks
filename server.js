
const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const port = process.env.PORT || 3000;
const cors = require('cors')
const app = express();

app.use(bodyParser.json());
app.use(cors());

const snacks = require('./routes/snacks');
app.use('/api', snacks);

app.use((req, res) => {
  const status = 404;
  const message = `Could not ${req.method} ${req.path}`;
  res.status(status).json({ status, message });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  const status = err.status || 500;
  const message = err.message || 'Something went wrong!';
  res.status(status).json({ message, status });
});

app.listen(port, () => {
  console.log('listening on port', port);
});
