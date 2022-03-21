import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ROUTES } from '.';
import Navigation from '../components/Navigation/Navigation';

function AuthenticatedRoute() {
  const [showNavigation, setShowNavigation] = useState(true);
  // const location = useLocation();

  // useEffect(() => {
  //   const find = ROUTES.find(e => e.path === location.pathname)
  //   const findIndex = PAGE_TAB.findIndex(e => e === location.pathname);
  //   setShowNavigation(findIndex !== -1)
  //   if (find && find.title) {
  //     document.title = find.title
  //   }
  // }, [location]);

  return (
    <div>
      <div className={'content-holder'}>
        <div className={'content'}>
          <Switch>
            {ROUTES.map((route) => {
              return (
                <Route
                  key={route.ref}
                  render={(props) => (
                    <route.component {...props} routes={route.routes} />
                  )}
                  path={route.path}
                  exact={route.exact}
                />
              );
            })}
          </Switch>
        </div>
      </div>
      {showNavigation && <Navigation />}
    </div>
  );
}

export default AuthenticatedRoute;
