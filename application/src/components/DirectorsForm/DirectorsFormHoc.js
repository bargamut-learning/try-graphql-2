import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { addDirectorMutation } from './mutations';

import { styles } from './styles';

const withGraphqlAdd = graphql(addDirectorMutation, {
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
		})
	}),
});

export default compose(withStyles(styles), withGraphqlAdd);
