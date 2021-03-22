// material-ui
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
  }
});

export default useStyles;