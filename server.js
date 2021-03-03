const express = require('express');
const inputCheck = require('./utils/inputCheck');
const db = require('./db/database');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// EXPRESS MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// USE API ROUTES
app.use('/api', apiRoutes);


// HOMEPAGE ROUTE
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});


// DEFAULT FOR REQUESTS NOT FOUND
app.use((req, res) => {
    res.status(404).end();
});


// Start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

