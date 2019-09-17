export const styles = theme => ({
  progress: {
    align: 'center',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: '100vh',
    marginRight: 25,
  },
  textField: {
    margin: 15,
    width: '90%',
  },
  rightButton: {
    float: 'right',
  },
  leftText: {
    float: 'left',
  },
  midSizeTextField: {
    width: '50%',
    margin: 15,
  },
  denseListItem: {
    paddingTop: 1,
    paddingBottom: 1,
  },
  expansionPanelHeading: {
    fontSize: theme.typography.pxToRem(15),
  },
  expansionPanel: {
    width: '75%',
  },
  card: {
    maxWidth: 200,
    minWidth: 175,
    margin: 10,
  },
});
