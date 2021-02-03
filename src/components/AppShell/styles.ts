import { makeStyles, Theme } from '@material-ui/core/styles';

export const useMenuClasses = makeStyles((theme: Theme) => ({
  paper: {
    // paddingTop: theme.spacing(4),
    // paddingBottom: theme.spacing(2),
    // paddingLeft: theme.spacing(3),
    // paddingRight: theme.spacing(3),
    marginTop: '64px',
    overflow: 'auto',
    maxHeight: 'calc(100vh - 74px)',
    height: '100%',
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 0
  },
  appBar: {
    backgroundColor: '#003d34',
  },
  root: {
    flex: 1,
    position: 'relative',
  },
  menu: {
    flex: 'auto',
    maxWidth: '300px',
  },
  menuPaper: {
    position: 'relative',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    bottom: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}))