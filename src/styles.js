export const styles = theme => ({
  progress: {
    margin: 200,
    size: 200,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: '100vh',
    margin: 30,
    fontFamily: ['Helvetica Neue', 'Helvetica', 'Helvetica', 'Arial', 'sans-serif'],
  },
  textField: {
    margin: 15,
    width: '90%',
    color: theme.palette.text.primary,
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
  appBar: {
    borderBottomStyle: 'solid',
    borderBottomWidth: '.001px',
    borderBottomColor: '#c1c1c1',
    height: '6.6875rem',
  },
  headerText: {
    fontFamily: 'Noto serif, serif',
    fontSize: '1.875rem',
    paddingTop: 40,
    paddingLeft: 20,
  },
});
