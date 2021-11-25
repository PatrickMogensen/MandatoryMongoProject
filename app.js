var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
const bank = require('./models/bank')
const user = require('./models/user')
const acocunt = require('./models/account')
const currency = require('./models/currency')



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);


const mongoose = require('mongoose');

main().catch(err => console.log(err));


async function main() {



    await mongoose.connect('mongodb+srv://testuser:testpassword@cluster0.ypzhz.mongodb.net/MandatoryBank?retryWrites=true&w=majority');




    const dkk = new currency.model({name:"DKK", rateToDKK: 1})
    const hans = new user.model({firstName: "Hans", lastName: "hansen", email:"mail@mail", sex: "m", phone:"48255455"})
    const hansAccount = new acocunt.model({amount:10373, currency: dkk})
    hans.accounts.push(hansAccount)

    await  hans.save()
    const department = new bank({address: "Guldbergsgade", phone: "00000000",})


    await department.save();












}



let hostname = "localhost";
let port = 3000;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
