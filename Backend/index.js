const express = require('express');
const dbConfig = require('./config/db.config');
const mongoose = require('mongoose');
const helmet = require('helmet');
const compression = require('compression');
const customerRoutes = require('./routes/customer.route');
const subjectRoutes = require('./routes/subject.route');
const chapterRoutes = require('./routes/chapter.route');
const topicRoutes = require('./routes/topic.route');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());

app.use(helmet());
app.use(compression());
// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/customer', customerRoutes);
app.use('/api/subject', subjectRoutes);
app.use('/api/chapter', chapterRoutes);
app.use('/api/topic', topicRoutes);

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
})

app.listen(3000, () => {
    console.log('Server is listening port 3000...!!!')
})