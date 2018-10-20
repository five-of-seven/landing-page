import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { ExpandMore } from '@material-ui/icons';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function ChatExpansionPanel(props) {
  const { classes } = props;
  const url3 = `http://18.191.158.114:8000/chat${props.userId}${props.jwt}`;
  console.log('In chat - UserId is...', props.userId);
  console.log('jwt is ...', props.jwt);
  // const url3 = `http://52.14.229.151/chat${props.userId}${props.jwt}`;
  // var url3 = `http://52.14.229.151?userId=1234${props.jwt}`;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore/>}>
          <Typography className={classes.heading}>Chat here</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <iframe src={url3} width="100%" height="100%"></iframe>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

ChatExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatExpansionPanel);