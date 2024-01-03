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

const bookRoom = async (name, email, date, numNights, RoomType, message ) => {
  const sql = 'INSERT INTO room_booking (name, email, date, numNights, RoomType, message) VALUES (?, ?, ?, ?, ?, ?)';
  console.log('SQL Query:', sql);

  try {
    const result = await db.query(sql, [name, email, date, numNights, RoomType, message ]);
    return result;
  } catch (error) {
    throw error;
  }
};

const sendMsg = async (name, email, message ) => {
  const sql = 'INSERT INTO message_contact (name, email, message) VALUES (?, ?, ?)';
  console.log('SQL Query:', sql);

  try {
    const result = await db.query(sql, [name, email, message]);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  bookTable,
  bookRoom,
  sendMsg,
};