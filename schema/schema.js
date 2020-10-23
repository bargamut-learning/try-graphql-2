const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = require(`graphql`);

// Экземпляры Mongoose-схем
const Movies = require('../models/movie');
const Directors = require('../models/director');

// const { compareIds } = require('../utils');

const DirectorType = new GraphQLObjectType({
	name: `Director`,
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: new GraphQLNonNull(GraphQLString) },
		age: { type: new GraphQLNonNull(GraphQLInt) },
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
		name: { type: new GraphQLNonNull(GraphQLString) },
		genre: { type: new GraphQLNonNull(GraphQLString) },
		director: {
			type: DirectorType,
			resolve(parent, args) {
				// return directors.find(director => compareIds(director.id, parent.directorId));
				return Directors.findById(parent.directorId);
			}
		}
	})
});

const Mutation = new GraphQLObjectType({
	name: `Mutation`,
	fields: {
		addDirector: {
			type: DirectorType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				age: { type: new GraphQLNonNull(GraphQLInt) },
			},
			resolve(parent, { name, age }) {
				const director = new Directors({
					name,
					age,
				});

				return director.save();
			}
		},
		addMovie: {
			type: MovieType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				genre: { type: new GraphQLNonNull(GraphQLString) },
				directorId: { type: GraphQLID },
			},
			resolve(parent, { name, genre, directorId }) {
				const movie = new Movies({
					name,
					genre,
					directorId,
				});

				return movie.save();
			}
		},
		deleteDirector: {
			type: DirectorType,
			args: {
				id: { type: GraphQLID },
			},
			resolve(parent, { id }) {
				return Directors.findByIdAndRemove(id);
			}
		},
		deleteMovie: {
			type: MovieType,
			args: {
				id: { type: GraphQLID },
			},
			resolve(parent, { id }) {
				return Movies.findByIdAndRemove(id);
			}
		},
		updateDirector: { 
			type: DirectorType,
			args: {
				id: { type: GraphQLID },
				name: { type: new GraphQLNonNull(GraphQLString) },
				age: { type: new GraphQLNonNull(GraphQLInt) },
			},
			resolve(parent, { id, name, age }) {
				return Directors.findByIdAndUpdate(
					id,
					{ $set: { name, age, } },
					{ new: true },
				);
			},
		},
		updateMovie: { 
			type: MovieType,
			args: {
				id: { type: GraphQLID },
				name: { type: new GraphQLNonNull(GraphQLString) },
				genre: { type: new GraphQLNonNull(GraphQLString) },
				directorId: { type: GraphQLID },
			},
			resolve(parent, { id, name, genre, directorId }) {
				return Movies.findByIdAndUpdate(
					id,
					{ $set: { name, genre, directorId, } },
					{ new: true },
				);
			},
		},
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
	mutation: Mutation,
});