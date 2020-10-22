const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLSchema } = require(`graphql`);

const MovieType = new GraphQLObjectType({
	name: `Movie`,
	fields: {
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
	}
});

const DirectorType = new GraphQLObjectType({
	name: `Director`,
	fields: {
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
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