require('dotenv').config();

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3005;
const { DB_HOST, DB_USER, DB_PASS } = process.env;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/graphql-tutorial?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());

app.use(`/graphql`, graphqlHTTP({
	schema,
	graphiql: true,
}));

const dbConnection = mongoose.connection;

dbConnection.on(`error`, err => console.log(`Connection error: ${err}`));
dbConnection.once(`open`, () => console.log(`Connected to DB!`));

app.listen(PORT, err => {
	console.log(err ? error : `Server started on http://localhost:${PORT}`);
});