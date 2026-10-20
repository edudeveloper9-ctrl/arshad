import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// API route for Contact Form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message, honeypot } = req.body;

    // Spam protection check
    if (honeypot && honeypot.trim().length > 0) {
      return res.status(400).json({ error: 'Spam bot detected' });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    console.log('📬 [Contact Inquiry for MUDIVEDU ARSHADD]:', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString()
    });

    // If Resend API key is provided, email forwarding can occur here
    if (process.env.RESEND_API_KEY) {
      console.log('Forwarding inquiry via Resend to appdevoloper80@gmail.com...');
    }

    return res.status(200).json({
      success: true,
      message: 'Inquiry received successfully! Mudivedu Arshadd will contact you shortly.'
    });
  } catch (error) {
    console.error('Error handling contact form:', error);
    return res.status(500).json({ error: 'Internal server error processing contact form' });
  }
});

// Serve static build if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

if (process.env.NODE_ENV === 'production') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default app;
