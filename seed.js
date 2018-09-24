const db = require("./model");
const express = require("express");
const app = express();

db.sync({ force: true })
  .then(promise1 => {
    console.log("success promise1");
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    db.close();
  });

// db.close();
