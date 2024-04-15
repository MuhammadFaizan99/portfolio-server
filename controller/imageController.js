const { Vercel } = require('@vercel/client');

const client = new Vercel({
  token: 'YOUR_VERCEL_TOKEN', // Your Vercel access token
});

exports.uploadImage = async (req, res) => {
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
};
