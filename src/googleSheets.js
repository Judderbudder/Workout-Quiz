import { google } from 'googleapis';
import credentials from './client_secret_127884514894-drvmvu2k2kp5i7dklnm99q3dfp26s462.apps.googleusercontent.com.json';

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

const appendDataToSheet = async (spreadsheetId, range, values) => {
  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,  // Specify the ID of the target spreadsheet
      range,          // Specify the target range (e.g., 'Sheet1!A1')
      valueInputOption: 'RAW',
      resource: {
        values: [values], // Assuming values is an array of data to append
      },
    });

    console.log(`Appended data to sheet: ${response.data.updates.updatedRange}`);
  } catch (error) {
    console.error('Error appending data:', error);
  }
};

export default appendDataToSheet;
