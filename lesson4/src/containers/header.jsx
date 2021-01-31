import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  render() {
    const { chatId } = this.props;
    
    return (
      <AppBar position="static" className="header_bg">
        <Toolbar>
          <Typography variant="h6">
            { chatId }
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  chatId: PropTypes.number.isRequired,
};
