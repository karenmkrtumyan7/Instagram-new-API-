import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    navItem: {
        fontSize: '1.3rem',
        cursor: 'pointer',
        textAlign: 'center',
        color: 'white'
    },
    nav: {
        background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
        display: 'flex',
        justifyContent: 'space-around',
    },
  });