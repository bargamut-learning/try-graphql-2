import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { directorQuery } from './queries';

import { styles } from './styles';

export default compose(withStyles(styles), graphql(directorQuery));
