import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useLocation, Link } from 'react-router-dom';
import { BOTTOM_TAB_ROUTES } from '../../routes';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: '16px 16px 0px 0px',
    marginBottom: '0px',
    width: '100vw',
  },
});

export default function Navigation() {
  const location = useLocation();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    const findIndex = BOTTOM_TAB_ROUTES.findIndex(
      (e) => e.to === location.pathname
    );
    setValue(findIndex);
  }, [location]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      showLabels
      className={classes.root}
    >
      {BOTTOM_TAB_ROUTES.map((e, index) => {
        return (
          <BottomNavigationAction
            key={e.ref}
            component={Link}
            to={{
              pathname: e.to,
              key: e.ref,
            }}
            label={e.label}
            icon={value === index ? e.iconActive : e.icon}
          />
        );
      })}
    </BottomNavigation>
  );
}
