import {
  ListItemText,
  Typography,
  ListItem,
  List,
  Link,
  withStyles,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from '@material-ui/core';
import React, { Component } from 'react';
import classnames from 'classnames';
import { ExpandMore } from '@material-ui/icons';
import { styles } from '../styles';

let listItems = [];

class LaunchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  componentDidMount() {
    fetch('/lti_v1x').then(result => {
      result.json().then(result => {
        for (let param in result) {
          if (result.hasOwnProperty(param)) {
            this.setState({ [param]: result[param] });
            listItems.push(param + ' = ' + result[param]);
          }
        }
      });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{ margin: 20 }}>
        <Typography variant={'h6'} gutterBottom color={'secondary'}>
          You were brought here by a {this.state.lti_message_type}.<br />
          <br />
        </Typography>
        <div className={classnames(classes.expansionPanel)}>
          <ExpansionPanel elevation={10}>
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
              <Typography className={classnames(classes.expansionPanelHeading)}>
                Expand to view the rest of the information that was sent over.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <List dense disablePadding>
                {listItems.map(item => (
                  <ListItem key={item} dense className={classnames(classes.denseListItem)}>
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        {this.state.roles === 'Instructor' ? (
          <div style={{ marginTop: 40 }}>
            <Typography variant={'h5'} gutterBottom color={'secondary'}>
              What would you like to do?
            </Typography>
            <Link href={'/quiz/new'} variant="h6" color={'secondary'}>
              Create a new quiz
            </Link>
            <br />
            <Link variant="h6" color={'secondary'}>
              Edit an existing quiz
            </Link>
            <br />
            <Link variant="h6" color={'secondary'}>
              View results from previous quizzes
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default withStyles(styles)(LaunchPage);

/*
Sample launch parameters
{
  "oauth_version": "1.0",
  "oauth_nonce": "99ff3a74636adc9b960044bf3729eae9",
  "oauth_timestamp": "1568573849",
  "oauth_consumer_key": "key",
  "lti_message_type": "basic-lti-launch-request",
  "lti_version": "LTI-1p0",
  "resource_link_id": "429785226",
  "resource_link_title": "Phone home",
  "resource_link_description": "Will ET phone home, or not; click to discover more.",
  "user_id": "29123",
  "roles": "Instructor",
  "lis_person_name_full": "Shannon Harris",
  "lis_person_name_family": "Harris",
  "lis_person_name_given": "Shannon",
  "lis_person_contact_email_primary": "shannon.harris@blackboard.com",
  "lis_person_sourcedid": "sis:942a8dd9",
  "user_image": "http://lti.tools/test/images/lti.gif",
  "context_id": "S3294476",
  "context_type": "CourseSection",
  "context_title": "Telecommuncations 101",
  "context_label": "ST101",
  "lis_course_offering_sourcedid": "DD-ST101",
  "lis_course_section_sourcedid": "DD-ST101:C1",
  "tool_consumer_info_product_family_code": "lms",
  "tool_consumer_info_version": "3700.13",
  "tool_consumer_instance_guid": "46dg3738fr53rfdghj",
  "tool_consumer_instance_name": "Blackboard",
  "tool_consumer_instance_description": "A Higher Education establishment in a land far, far away.",
  "tool_consumer_instance_contact_email": "admin@blackboard.com",
  "tool_consumer_instance_url": "https://vle.uni.ac.uk/",
  "launch_presentation_return_url": "http://lti.tools/test/tc-return.php",
  "launch_presentation_css_url": "http://lti.tools/test/css/tc.css",
  "launch_presentation_locale": "en-GB",
  "launch_presentation_document_target": "frame",
  "lis_outcome_service_url": "http://lti.tools/test/tc-outcomes.php",
  "lis_result_sourcedid": "b1dfab57d32a6de1fd11828570c39a75:::S3294476:::29123:::dyJ86SiwwA9",
  "ext_ims_lis_basic_outcome_url": "http://lti.tools/test/tc-ext-outcomes.php",
  "ext_ims_lis_resultvalue_sourcedids": "decimal",
  "ext_ims_lis_memberships_url": "http://lti.tools/test/tc-ext-memberships.php",
  "ext_ims_lis_memberships_id": "b1dfab57d32a6de1fd11828570c39a75:::4jflkkdf9s",
  "ext_ims_lti_tool_setting_url": "http://lti.tools/test/tc-ext-setting.php",
  "ext_ims_lti_tool_setting_id": "b1dfab57d32a6de1fd11828570c39a75:::d94gjklf954kj",
  "custom_tc_profile_url": "http://lti.tools/test/tc-profile.php/b1dfab57d32a6de1fd11828570c39a75",
  "custom_system_setting_url": "http://lti.tools/test/tc-settings.php/system/b1dfab57d32a6de1fd11828570c39a75",
  "custom_context_setting_url": "http://lti.tools/test/tc-settings.php/context/b1dfab57d32a6de1fd11828570c39a75",
  "custom_link_setting_url": "http://lti.tools/test/tc-settings.php/link/b1dfab57d32a6de1fd11828570c39a75",
  "custom_lineitems_url": "http://lti.tools/test/tc-outcomes2.php/b1dfab57d32a6de1fd11828570c39a75/S3294476/lineitems",
  "custom_results_url": "http://lti.tools/test/tc-outcomes2.php/b1dfab57d32a6de1fd11828570c39a75/S3294476/lineitems/dyJ86SiwwA9/results",
  "custom_lineitem_url": "http://lti.tools/test/tc-outcomes2.php/b1dfab57d32a6de1fd11828570c39a75/S3294476/lineitems/dyJ86SiwwA9",
  "custom_result_url": "http://lti.tools/test/tc-outcomes2.php/b1dfab57d32a6de1fd11828570c39a75/S3294476/lineitems/dyJ86SiwwA9/results/29123",
  "custom_context_memberships_url": "http://lti.tools/test/tc-membership.php/context/b1dfab57d32a6de1fd11828570c39a75",
  "oauth_callback": "about:blank",
  "oauth_signature_method": "HMAC-SHA1",
  "oauth_signature": "J44oZUcaOh2Kp6eFxOsHGCe5lyA="
}
 */
