import { AppBar, CircularProgress, Toolbar, Typography, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import React, { Suspense, lazy, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from './errorBoundary';
import { styles } from '../styles';
const LaunchPage = lazy(() => import('./LaunchPage'));
const Settings = lazy(() => import('./Settings'));

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <AppBar position={'sticky'} color={'secondary'}>
          <Toolbar>
            <Typography variant={'h6'} color={'inherit'}>
              LTI Test Tool
            </Typography>
          </Toolbar>
        </AppBar>
        <ErrorBoundary>
          <main>
            <div />
            <Suspense
              fallback={
                <div>
                  <CircularProgress />
                </div>
              }
              color={'secondary'}
              className={classNames(classes.progress)}
            >
              <Switch>
                <Route exact path={'/lti_v1x/launch'} render={() => <LaunchPage />} />
                <Route path={'/settings'} render={() => <Settings />} />
              </Switch>
            </Suspense>
          </main>
        </ErrorBoundary>
      </div>
    );
  }
}

export default withStyles(styles)(App);
