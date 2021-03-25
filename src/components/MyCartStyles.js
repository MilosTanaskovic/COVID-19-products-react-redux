// material-ui
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    paddingRight: 30,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardContent: {
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '20'
  },
  product: {
    width: 150,
  },
  buttonGroup: {
    marginRight: 10,
  }
});

export default useStyles;