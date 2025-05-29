const express = require('express');
const app = express();
const excelRoutes = require('./routes/excel');
const errorHandler = require('./middleware/errorHandler');

// Middleware
app.use(express.json());

// Routes
app.use('/api/excel', excelRoutes);

// Error Handler
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
