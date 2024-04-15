const express = require('express');
const imageRoutes = require('./imageRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use('/api', imageRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});