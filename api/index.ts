import express = require('express');
import cors = require('cors');
import { db } from '../lib/db';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: `Sample Case 21455.` });
});

app.get('/api', (req, res) => {
  res.json({ message: `Sample Case 21455.` });
});

const invoiceGet = db.prepare(`SELECT * FROM invoices WHERE InvoiceId = ?`);

app.get('/api/invoices/:id', (req, res) => {
  const id = req.params.id;
  const invoice = invoiceGet.get(id);
  res.json(invoice);
});

export default app;
