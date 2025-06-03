const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');
exports.analyzeExcel = (req, res, next) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: 'No file uploaded.' });
    const workbook = XLSX.readFile(file.path);
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    const analytics = {
      rowCount: data.length,
      columns: data.length > 0 ? Object.keys(data[0]) : [],
      preview: data.slice(0, 5),
    };
    fs.unlinkSync(file.path);
    res.json(analytics);
  } catch (err) {
    next(err);
  }
};
const Record = require('../models/Record');

// ...after parsing Excel data into `data` array

// Example: Save all rows to MongoDB
Record.insertMany(data)
  .then(() => res.json({ success: true, rowCount: data.length }))
  .catch(err => next(err));
