import { setGlobalOptions } from "firebase-functions";
import { onRequest } from "firebase-functions/https";
import admin from 'firebase-admin';
import cors from 'cors';

const corsHandler = cors({origin: true});

admin.initializeApp();

const ALLOWED_ORIGINS = new Set([
  'https://fit5032-portfolio.pages.dev',
  'http://localhost:5173'
]);

function applyCors(req, res) {
  const origin = req.headers.origin;
  if (ALLOWED_ORIGINS.has(origin)) res.set('Access-Control-Allow-Origin', origin);
  res.set('Vary', 'Origin');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

export const countBooks = onRequest(async (req, res) => {
  applyCors(req, res);
  if (req.method === 'OPTIONS') { res.status(204).end(); return; }

  try {
    const snapshot = await admin.firestore().collection("books").get();
    res.status(200).send({ count: snapshot.size });
  } catch (error) {
    console.error("Error counting books:", error.message);
    res.status(500).send("Error counting books");
  }
});

export const getAllBooks = onRequest(async (req, res) => {
  applyCors(req, res);
  if (req.method === 'OPTIONS') { res.status(204).end(); return; }

  try {
    const snapshot = await admin.firestore().collection("books").get();
    const allBooks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).send({ allBooks });
  } catch (error) {
    console.error("Error getting all books:", error.message);
    res.status(500).send("Error getting all books");
  }
});

setGlobalOptions({ maxInstances: 10 });

