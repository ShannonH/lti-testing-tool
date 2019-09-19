import { AppBar, CircularProgress, Toolbar, Typography, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import React, { Suspense, lazy, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from './errorBoundary';
import { styles } from '../styles';
const LaunchPage = lazy(() => import('./v1x/LaunchPage'));
const Settings = lazy(() => import('./advantage/Settings'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('/lti_v1x').then(result => {
      result.json().then(result => {
        for (let param in result) {
          if (result.hasOwnProperty(param)) {
            this.setState({ [param]: result[param] });
          }
        }
      });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <AppBar position={'sticky'} color={'background'} className={classNames(classes.appBar)} elevation={1}>
          <Toolbar>
            <Typography variant={'h6'} color={'inherit'} className={classNames(classes.headerText)}>
              {this.state.resource_link_title}
            </Typography>
          </Toolbar>
        </AppBar>
        <ErrorBoundary>
          <main>
            <div />
            <Suspense
              fallback={
                <div>
                  <CircularProgress className={classNames(classes.progress)} />
                </div>
              }
              color={'secondary'}
            >
              <Switch>
                <Route
                  exact
                  path={'/lti_v1x/launch'}
                  render={props => <LaunchPage {...props} parameters={this.state} />}
                />
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
