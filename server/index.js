const express = require('express');
const bodyParser = require('body-parser');
const connection = require('../database/index.js');

const app = express();
const port = 8070;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser());

//by category // region: SF
app.get('/allitems', (req, res) => {
  connection.query(`select * from items inner join users on items.userId = users.userId;`, (err, result) => {
    res.status(200).send(result);
  })
})

app.get('/user', (req, res) => {
  const userId = req.query.userId;
  connection.query(`select * from users WHERE userId=${userId};`, (err, result) => {
    console.log(result)
    res.status(200).send(result);
  })
})

app.post('/item', (req, res) => {
  const item = req.body.item;
  console.log(item.uploadDate)
  connection.query(`insert into items (uploadDate, itemPic, userId, title, category, price, description, priceNegotiable) values ('${item.uploadDate}', ${item.itemPic}, ${item.userId}, '${item.title}', ' ${item.category}', ${item.price}, '${item.description}', ${item.priceNegotiable});`, (err, result) =>
  {
    if (err) {
      console.log('error uploading item!', err);
    } else {
      res.status(200).send("upload successful!");
    }
  })
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});