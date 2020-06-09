const faker = require('faker');
const fs = require('fs');


const writeItems = fs.createWriteStream('../database/items.csv');
writeItems.write('itemId,uploadDate,itemPic,userId,category,price,numLikes,numViews,numChats,title,description,priceNegotiable\n','utf8');

const writeUsers = fs.createWriteStream('../database/users.csv');
writeUsers.write('userId,userName,profPicUrl,city\n','utf8')

const writeReviews = fs.createWriteStream('../database/reviews.csv');
writeReviews.write('reviewId,itemId,rating\n','utf8');

const datasize = 100;

const categories = ['Home Appliance', 'Beauty Products', 'Furniture', 'Clothes', 'Accessories'];
const adjective = ['Brand New', 'Almost New', 'Cute', 'Fresh', 'Top'];
const priceBoolean = [0, 1];
const cities = ['San Francisco', 'Emeryville'];
const ratings = [0.0, 0.2, 0.4, 1.0, 1.4, 1.7, 2.0, 2.6, 2.8, 3.0, 3.2, 3.6, 4.0, 4.3, 4.5, 5.0, 5.1, 5.9, 6.0, 6.3, 6.4, 7.0, 7.2, 7.6, 8.0, 8.5, 8.8, 9.0, 9.2, 9.5, 10.0];
const date = ['2020-05-15', '2020-05-16', '2020-05-17', '2020-05-18', '2020-05-19', '2020-05-20', '2020-05-21', '2020-05-22', '2020-05-23', '2020-05-24','2020-05-25', '2020-05-26', '2020-05-27', '2020-05-28', '2020-05-29', '2020-06-01', '2020-06-02', '2020-06-03', '2020-06-04', '2020-06-05','2020-06-06', '2020-06-07', '2020-06-08', '2020-06-09', '2020-06-10', '2020-06-11', '2020-06-12', '2020-06-13', '2020-06-14','2020-06-15', '2020-06-17', '2020-06-18', '2020-06-19'];
const hour = ['14:05:30','15:05:30','16:05:30','17:05:30','18:05:30','19:05:30','20:05:30','21:05:30','14:39:23','15:39:23','16:39:23','17:39:23','18:39:23','19:39:23','20:39:23','21:39:23','17:20:45','18:20:45','19:20:45','20:20:45','21:20:45','22:20:45','23:20:45','00:20:45'];
const gender = ['men', 'women'];


function write100Items (writer, encoding, callback) {
  let i = datasize;
  let id = 0;
  function write () {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const uploadDate = `${faker.random.arrayElement(date)} ${faker.random.arrayElement(hour)}`;
      const itemPic = `https://picsum.photos/id/${id+10}/200`;
      const userId = faker.random.number({min:1, max: 100});
      const category = faker.random.arrayElement(categories);
      const price = faker.random.number({min: 0, max: 5000});
      const numLikes = faker.random.number({min: 0, max: 300}) ;
      const numViews = faker.random.number({min: 0, max: 500});
      const numChats = faker.random.number({min: 0, max: 200});
      const title = faker.lorem.word();
      const description = faker.lorem.words();
      const priceNegotiable = faker.random.arrayElement(priceBoolean) ;
      const data = `${id},${uploadDate},${itemPic},${userId},${category},${price},${numLikes},${numViews},${numChats},${title},${description},${priceNegotiable}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
    }

    }
  write()
}

write100Items(writeItems, 'utf-8', () => {
  writeItems.end();
  console.log('Item CSV file was written successfully!')
})

function write100Users (writer, encoding, callback) {
  let i = datasize;
  let id = 0;
  function write () {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const userName = faker.name.firstName();
      const profPicUrl = `https://randomuser.me/api/portraits/${faker.random.arrayElement(gender)}/${id}.jpg`;
      const city = faker.random.arrayElement(cities);
      const data = `${id},${userName},${profPicUrl},${city}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write()
}

write100Users(writeUsers, 'utf-8', () => {
  writeUsers.end();
  console.log('User CSV file was written successfully!')
})

function write100Reviews (writer, encoding, callback) {
  let i = datasize;
  let id = 0;
  function write () {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const itemId = faker.random.number({min:1, max: 100});
      const rating = faker.random.arrayElement(ratings);
      const data = `${id},${itemId},${rating}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write()
}

write100Reviews(writeReviews, 'utf-8', () => {
  writeReviews.end();
  console.log('Reviews CSV file was written successfully!')
})