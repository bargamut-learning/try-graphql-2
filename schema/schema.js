const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLSchema } = require(`graphql`);
const { directors } = require("../mocks");
const { compareIds } = require('../utils');

const DirectorType = new GraphQLObjectType({
	name: `Director`,
	fields: {
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
	}
});

const MovieType = new GraphQLObjectType({
	name: `Movie`,
	fields: {
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
		director: {
			type: DirectorType,
			resolve(parent, args) {

				return directors.find(director => compareIds(director.id, parent.directorId));
			}
		}
	}
});

const Query = new GraphQLObjectType({
	name: `Query`,
	fields: {
		movie: {
			type: MovieType,
			args: { id: { type: GraphQLID } },
		},
		director: {
			type: DirectorType,
			args: { id: { type: GraphQLID } },
		},
	}
});

module.exports = new GraphQLSchema({
	query: Query,
});