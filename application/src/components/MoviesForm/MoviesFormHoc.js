import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { addMovieMutation, updateMovieMutation } from './mutations';
import { movieQuery } from '../MoviesTable/queries';
import { directorsQuery } from './queries';

import { styles } from './styles';

const withGraphQl = compose(
	graphql(addMovieMutation, {
		props: ({ mutate }) => ({
			addMovie: movie => mutate({
				variables: movie,
				refetchQueries: [
					{ query: movieQuery, },
				], 
			})
		}),
	}),

	graphql(updateMovieMutation, {
		props: ({ mutate }) => ({
			updateMovie: movie => mutate({
				variables: movie,
				refetchQueries: [
					{ query: movieQuery, },
				],
			}),
		}),
	}),
);

export default compose(withStyles(styles), withGraphQl, graphql(directorsQuery));
