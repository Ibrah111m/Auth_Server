const express = require('express');
const authRoutes = require('./routes/auth_routes');
const adminRoutes = require('./routes/admin_routes');

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});

app.use((req, res) => res.status(404).send('Not Found'));

module.exports = app;
