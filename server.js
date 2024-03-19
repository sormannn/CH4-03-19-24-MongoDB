require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT;

const DB = process.env.DATABASE

mongoose
.connect(DB, {
  useNewUrlParser: true,
})
.then((con) => {
  console.log('connection ke databse sukses');
});

  const customerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "nama tidak boleh kosong"],
    },
    email: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    city: String,
    country: {
      type: String,
      required: true,
      default: "indonesia",
    },
  });


const Customer = mongoose.model('Customer', customerSchema);

const customerTest = new Customer({
  name: 'liosa',
  email: 'liosa123@aa.com',
  phoneNumber: '0812',
});



customerTest
.save()
.then((doc) => {
  console.log(doc);
})
.catch((err) => {
  console.log("ERROR : " + err);
});

app.listen(PORT, () => {
  console.log(`APP running on port : ${PORT}`);
});


