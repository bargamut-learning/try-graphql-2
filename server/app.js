const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema/schema');

const movies = require(`../mock.json`);

const app = express();
const PORT = 3005;

const resolvers = {
	movie: ({ id }) => movies.find(movie => movie.id === Number.parseInt(id, 10)),
};

app.use(`/graphql`, graphqlHTTP({
	schema,
	rootValue: resolvers,
	graphiql: true,
}));

app.listen(PORT, err => {
	console.log(err ? error : `Server started on http://localhost:${PORT}`);
});