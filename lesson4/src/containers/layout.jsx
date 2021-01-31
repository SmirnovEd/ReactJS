import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import MessageField from './messagefield';
import ChatList from './chatlist';
import Header from './header';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { chatId } = this.props;
    
    return (
      <Grid className="grid-container" container alignItems="stretch">
        <Hidden only={['xs', 'sm']}>
          <Grid className="chatList" item xs={3}>
            <ChatList />
          </Grid>
        </Hidden>
        <Grid className="messageField" item xs>
          <Header chatId={ chatId } />
          <MessageField chatId={ chatId } />
        </Grid>
      </Grid>
    );
  }
}

Layout.propTypes = {
  chatId: PropTypes.number,
};

Layout.defaultProps = {
  chatId: 0,
};
