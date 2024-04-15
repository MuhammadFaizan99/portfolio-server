const express = require('express');
const multer = require('multer');
const { Vercel } = require('@vercel/client');

const app = express();
const port = process.env.PORT || 5000;

const client = new Vercel({
  token: 'YOUR_VERCEL_TOKEN', // Your Vercel access token
});

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const file = req.file;
    const result = await client.upload(file.path, {
      name: file.originalname,
      deploymentId: 'YOUR_VERCEL_DEPLOYMENT_ID', // Deployment ID where you want to store the image
      teamId: 'YOUR_VERCEL_TEAM_ID', // Your Vercel team ID
    });

    res.json({ url: result.url }); // Return the URL of the uploaded image
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});