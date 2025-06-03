const XLSX = require('xlsx');
const fs = require('fs');
const Record = require('../models/record');

exports.analyzeExcel = (req, res, next) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: 'No file uploaded.' });

    // Read the uploaded Excel file
    const workbook = XLSX.readFile(file.path);
    const sheetName = workbook.SheetNames[0]; // Get the first sheet name
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Save all rows to MongoDB
    Record.insertMany(data)
      .then(() => {
        // Delete the file after processing
        fs.unlinkSync(file.path);
        res.json({ success: true, rowCount: data.length });
      })
      .catch(err => next(err));
  } catch (err) {
    next(err);
  }
};
