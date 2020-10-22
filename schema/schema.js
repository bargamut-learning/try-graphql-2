const { buildSchema } = require(`graphql`);

const schema = buildSchema(`
	type Movie {
		id: ID!
		name: String
		genre: String
	}

	type Query {
		movie(id: ID): Movie!
	}
`);

module.exports = schema;