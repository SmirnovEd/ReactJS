import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    color: '#e43af1',
  },
  listItemChat: {
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: '#3ff644',
    },
  },
  listItemChatLink: {
    textDecoration: 'none',
    color: 'white',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

export default function ChatList(props) {
  const classes = useStyles();

  const { chats } = props;
  return (
    <List dense className={classes.root}>
      {chats.map((chat, index) => {
        const labelId = `list-secondary-label-${chat.title + index}`;
        return (
          <Link key={chat.title} to={`/chat/${index}/`} className={classes.listItemChatLink}>
            <ListItem button className={classes.listItemChat}>
               <HomeIcon className={classes.icon} /> 
              <ListItemText id={labelId} primary={chat.title} />
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
}

ChatList.propTypes = {
  chats: PropTypes.array,
};

ChatList.defaultTypes = {
  chats: [],
};