const express = require('express');
const app = express();
const excelRoutes = require('./routes/excel');
const errorHandler = require('./middleware/errorHandler');
require('./database'); // This will connect to MongoDB Atlas when your app starts

app.use(express.json());
app.use('/api/excel', excelRoutes);
app.use(errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
