import express from 'express';

const app = express();

app.get('/books', (req, res) => {
    const defaultBook = {
        id: 1,
        name: 'Default book'
    };

    res.json([defaultBook]);
});

export default app;