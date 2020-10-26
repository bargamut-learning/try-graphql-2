import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { addDirectorMutation, updateDirectorMutation } from './mutations';
import { directorQuery } from '../DirectorsTable/queries';

import { styles } from './styles';

const withGraphQl = compose(
	graphql(addDirectorMutation, {
		// props пойдут в сам компонент
		props: ({ mutate }) => ({
			/**
			 * @description Передаёт данные режиссёра аргументами в мутацию
			 * @author Paul "Bargamut" Petrov
			 * @date 26/10/2020
			 * @param {*} director объект данных нового режиссёра, содержит name и age
			 */
			addDirector: director => mutate({
				variables: director,
				// Массив объектов дополнительных запросов при выполнении мутации
				refetchQueries: [
					{
						query: directorQuery,
						variables: { name: '' },
					},
				],
			}),
		}),
	}),

	graphql(updateDirectorMutation, {
		props: ({ mutate }) => ({
			updateDirector: director => mutate({
				variables: director,
				refetchQueries: [
					{
						query: directorQuery,
						variables: { name: '' },
					},
				],
			}),
		}),
	})
);

export default compose(withStyles(styles), withGraphQl);
