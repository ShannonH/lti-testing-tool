import path from 'path';
import * as lti from './lti';

//let membership_url;
let launch_parameters = '';

module.exports = function(app) {
  /*
  General requests should redirect to the app home page
  */
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

  /*
  LTI 1.x launches split based on type of request
  */
  app.post('/', (req, res) => {
    const verifiedParams = lti.validate(req);
    console.log(verifiedParams);
    launch_parameters = req.body;
    if (launch_parameters.lti_version === 'LTI-1p0')
      switch (launch_parameters.lti_message_type) {
        case 'basic-lti-launch-request':
          /* if (params.custom_context_memberships_url !== undefined) {
            membership_url = params.custom_context_memberships_url;
            console.log(membership_url);
          } else {
            membership_url = '';
          }*/
          res.redirect('/lti_v1x/launch');
          break;
        case 'ContentItemSelectionRequest':
          console.log('CIM request');
          break;
        default:
          console.log('shannon you made it to the end of the lti1 route');
      }
  });

  app.get('/lti_v1x', (req, res) => {
    res.json(launch_parameters);
  });
};
