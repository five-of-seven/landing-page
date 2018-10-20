import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class ChatModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  handleOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    // var url3 = `http://52.14.229.151${this.props.userId}${this.props.jwt}`;
    var url3 = `http://52.14.229.151?userId=1234${this.props.jwt}`;
    return (
      <div>
        <Typography variant="h6">
        <Button onClick={this.handleOpen}>Chat</Button>
        </Typography>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              <iframe src={url3} width="100%" height="100%"></iframe>
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
            </Typography>
{/*            <ChatModalWrapped />
*/}          </div>
        </Modal>
      </div>
    );
  }
}

ChatModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const ChatModalWrapped = withStyles(styles)(ChatModal);

export default ChatModalWrapped;