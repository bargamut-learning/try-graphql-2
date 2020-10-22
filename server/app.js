const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema/schema');

const { movies, directors } = require(`../mocks`);

const app = express();
const PORT = 3005;

const compareIds = (dataId, argsId) => {
	return dataId === Number.parseInt(argsId, 10);
}

const resolvers = {
	movie: ({ id }) => movies.find(movie => compareIds(movie.id, id)),
	director: ({ id }) => directors.find(director => compareIds(director.id, id)),
};

app.use(`/graphql`, graphqlHTTP({
	schema,
	rootValue: resolvers,
	graphiql: true,
}));

app.listen(PORT, err => {
	console.log(err ? error : `Server started on http://localhost:${PORT}`);
});