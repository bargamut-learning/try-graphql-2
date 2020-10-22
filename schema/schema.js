const { buildSchema } = require(`graphql`);

const schema = buildSchema(`
	type Movie {
		id: ID!
		name: String
		genre: String
	}

	type Director {
		id: ID!
		name: String
		age: Int
	}

	type Query {
		movie(id: ID): Movie!
		director(id: ID): Director!
	}
`);

module.exports = schema;