 import { setGlobalOptions } from "firebase-functions";
import { onRequest } from "firebase-functions/https";
import admin from 'firebase-admin';
import cors from 'cors';

const corsHandler = cors({origin: true});

admin.initializeApp();

export const countBooks = onRequest((req, res) => {
    corsHandler(req, res, async () => {
        try{
            const bookCollection = admin.firestore().collection("books");
            const snapshot = await bookCollection.get();
            const count = snapshot.size;
            res.status(200).send({count});
        }catch(error) {
            console.error("Error counting books:", error.message);
            res.status(500).send("Error counting books");
        }
    })
});
export const getAllBooks = onRequest((req, res) => {
    corsHandler(req, res, async () => {
        try{
            const bookCollection = admin.firestore().collection("books");
            const snapshot = await bookCollection.get();
             const allBooks = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));            
            res.status(200).send({allBooks});
        }catch(error) {
            console.error("Error getting all books:", error.message);
            res.status(500).send("Error getting all books");
        }
    })
});
setGlobalOptions({ maxInstances: 10 });

 