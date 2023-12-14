const db = require('./../services/db');

const bookTable = async (name, email, date, occasion, message) => {
  const sql = 'INSERT INTO table_booking (name, email, date, occasion, message) VALUES (?, ?, ?, ?, ?)';
  console.log('SQL Query:', sql);

  try {
    const result = await db.query(sql, [name, email, date, occasion, message]);
    return result;
  } catch (error) {
    throw error;
  }
};

const bookRoom = async (roomType, numNights, checkin, cust_name, cust_email, message) => {
  const sql = 'INSERT INTO room_booking (roomType, numNights, checkin, cust_name, cust_email, message) VALUES (?, ?, ?, ?, ?, ?)';

  try {
    const result = await db.query(sql, [roomType, numNights, checkin, cust_name, cust_email, message]);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  bookTable,
  bookRoom,
};