import React, { Component } from 'react';
import { Typography, TextField, withStyles, Button } from '@material-ui/core';
import classnames from 'classnames';
import { styles } from '../../styles';

class Settings extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classnames(classes.content)}>
        <div>
          <Typography variant={'h5'} gutterBottom className={classnames(classes.leftText)}>
            Tool Settings Page
          </Typography>
          <Button variant={'contained'} size={'large'} className={classnames(classes.rightButton)} color={'secondary'}>
            Save
          </Button>
        </div>
        <br />
        <TextField
          required
          className={classnames(classes.textField)}
          variant={'outlined'}
          onChange={this.props.onChange}
          defaultValue={'https://developer.blackboard.com'}
          label={'Developer Portal URL'}
        />
        <br />
        <TextField
          required
          className={classnames(classes.textField, classes.midSizeTextField)}
          variant={'outlined'}
          onChange={this.props.onChange}
          label={'Application ID'}
        />
        <br />
        <TextField
          required
          className={classnames(classes.textField)}
          variant={'outlined'}
          onChange={this.props.onChange}
          label={'OAuth2 Token End Point'}
        />
        <br />
        <TextField
          required
          className={classnames(classes.textField)}
          variant={'outlined'}
          onChange={this.props.onChange}
          label={'Issuer'}
        />
        <TextField
          required
          className={classnames(classes.textField)}
          rows={'15'}
          variant={'outlined'}
          multiline
          onChange={this.props.onChange}
          label={'Private Key'}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Settings);
