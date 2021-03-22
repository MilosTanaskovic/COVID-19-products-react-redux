// material-ui

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    width: 300,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 22,
  },
  pos: {
    marginBottom: 12,
  },
  price: {
    fontSize: 21,
    color: 'primary',
  }
}));

export default useStyles;