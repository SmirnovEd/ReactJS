import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// export default class ChatList extends React.Component {
//     render() {
//         return ( 
//             <div className='chatlist'>
//                 <h3>Список чатов</h3>
//                 <ul class="menu-list">
//                     <li class=""><a href="" class="menu-link active">Чат_1</a></li>
//                     <li class=""><a href="" class="menu-link">Чат_2</a></li>
//                     <li class=""><a href="" class="menu-link">Чат_3</a></li>
//                     <li class=""><a href="" class="menu-link">Чат_4</a></li>
//                 </ul>
//             </div>
//         );
//     }
//  }

 export default class ChatList extends React.Component {
    render() {
        return (
        <div className='chatlist'>
            <h3>Список чатов</h3>
            <List component="nav">
            <ListItem button>
                <ListItemText primary="Чат_1" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Чат_2" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Чат_3" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Чат_4" />
            </ListItem>
            </List>
        </div>
        )
    }
  }