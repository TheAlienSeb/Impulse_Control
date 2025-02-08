const express = require('express')
const db = require('./firebase'); // Firestore instance
const cors = require('cors')

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())


app.get('/api/requests', (req,res) => {
    res.json({success:true, msg:"hello world"})
})


// Add data to Firestore
app.post('/add-user', async (req, res) => {
    try {
        const { name, email } = req.body;
        const docRef = await db.collection('users').add({ name, email });
        res.status(200).json({ id: docRef.id, message: 'User added successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Fetch data from Firestore
app.get('/get-users', async (req, res) => {
    try {
        const snapshot = await db.collection('users').get();
        const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})