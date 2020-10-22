const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList } = require(`graphql`);

// Экземпляры Mongoose-схем
const Movies = require('../models/movie');
const Directors = require('../models/director');

const { compareIds } = require('../utils');

const DirectorType = new GraphQLObjectType({
	name: `Director`,
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
		movies: {
			type: new GraphQLList(MovieType),
			resolve(parent, args) {
				// return movies.filter(movie => compareIds(movie.directorId, parent.id));
				return Movies.find({ directorId: parent.id });
			}
		}
	})
});

const MovieType = new GraphQLObjectType({
	name: `Movie`,
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
		director: {
			type: DirectorType,
			resolve(parent, args) {
				// return directors.find(director => compareIds(director.id, parent.directorId));
				return Directors.findById(parent.directorId);
			}
		}
	})
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
		movies: {
			type: new GraphQLList(MovieType),
			resolve(parent, args) {
				// return movies;
				return Movies.find({});
			}
		},
		directors: {
			type: new GraphQLList(DirectorType),
			resolve(parent, args) {
				// return directors;
				return Directors.find({});
			}
		},
	}
});

module.exports = new GraphQLSchema({
	query: Query,
});