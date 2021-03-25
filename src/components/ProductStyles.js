// material-ui

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    width: 300,
    height: 500,
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
    minHeight: 90,
  },
  desc: {
    marginBottom: 12,
    minHeight: 240,
  },
  price: {
    fontSize: 21,
    color: 'primary',
  }
}));

export default useStyles;