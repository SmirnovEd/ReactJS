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
    const { title } = this.props;

    return (
      <div>
        <AppBar position="static" className="header_bg">
            <Toolbar>
            <Typography variant="h6" >
                {title}
            </Typography>
            </Toolbar>
        </AppBar>
      </div>  
    );
  }
}

Header.propTypes = {
    title: PropTypes.string,
};