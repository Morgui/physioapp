// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js
require('dotenv').config()

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const Patient = require("../models/Patient.model")

const bcryptSalt = 10;

mongoose
  .connect(`${process.env.DB_REMOTE}`, {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "admin",
    password: bcrypt.hashSync("admin", bcrypt.genSaltSync(bcryptSalt)),
  }
]

User.deleteMany()
  .then(() => {
    return User.create(users)
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })

const patients = [{
  name: "Samuel",
  surname: "Querol",
  email: "testing1@gmail.com",
  age: "28",
  antecedents: "Luxación anterior de hombro",
  genre: "hombre",
  _id: "5e6b61476d429ddd9e94baa8"

},
{
  name: "Victoria",
  surname: "Mena",
  email: "testing2@gmail.com",
  age: "23",
  antecedents: "",
  genre: "mujer",
  _id: "5e6b614f86e851393010feb2"

},
{
  name: "Ismael",
  surname: "Ceron",
  email: "testing3@gmail.com",
  age: "34",
  antecedents: "ATM",
  genre: "hombre",
  _id: "5e6b61a584268197a95e4c3a"
},
{
  name: "Julian",
  surname: "Fuster",
  email: "testing4@gmail.com",
  age: "27",
  antecedents: "Tortícolis congenita",
  genre: "hombre",
  _id: "5e6b61dd97a8e7e835c4b485"
},
{
  name: "Carmen",
  surname: "Carbonell",
  email: "testing5@gmail.com",
  age: "43",
  antecedents: "Epicondilitis lateral",
  genre: "mujer",
  _id: "5e6b61c82d76bd140371c63c"
},
{
  name: "Isabel",
  surname: "Guillen",
  email: "testing6@gmail.com",
  age: "19",
  antecedents: "Escoliosis",
  genre: "mujer",
  _id: "5e6b6210933f8a1a23b3cd5c"
},
{
  name: "Yeiko",
  surname: "Aymerich",
  email: "testing7@gmail.com",
  age: "52",
  antecedents: "Lumbago",
  genre: "hombre",
  _id: "5e6b61fa3f11d10087a70927"
},
{
  name: "Ivan",
  surname: "Esteso",
  email: "testing8@gmail.com",
  age: "37",
  antecedents: "Fractura de clavícula",
  genre: "hombre",
  _id: "5e6b6222b1d4acff58cc8fe6"
},
{
  name: "Christel",
  surname: "Santander",
  email: "testing9@gmail.com",
  age: "27",
  antecedents: "Artrosis de rodilla",
  genre: "mujer",
  _id: "5e6b622c5128c2b114286480"
},
{
  name: "David",
  surname: "Bengoa",
  email: "testing10@gmail.com",
  age: "48",
  antecedents: "Rotura parcial del tendón extensor",
  genre: "hombre",
  _id: "5e6b623672b5f440d7e48c44"
},
{
  name: "Alcira",
  surname: "Calo",
  email: "testing11@gmail.com",
  age: "82",
  antecedents: "Calcificación",
  genre: "mujer",
  _id: "5e6b624ef260a1a123d70b35"
},
{
  name: "Diana",
  surname: "Romero",
  email: "testing12@gmail.com",
  age: "22",
  antecedents: "Tendinosis",
  genre: "mujer",
  _id: "5e6b625a24fb87ae03c9a557"
},
{
  name: "Cristofer",
  surname: "Batanero",
  email: "testing13@gmail.com",
  age: "58",
  antecedents: "Fractura por estrés del segundo metatarsiano",
  genre: "hombre",
  _id: "5e6b626338fef0570f519192"
}
]

Patient.insertMany(patients)