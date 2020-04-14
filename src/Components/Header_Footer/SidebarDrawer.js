import React from 'react';
import { scroller } from 'react-scroll'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SidebarDrawer = (props) => {

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true
    })
    props.onClose(false)
  }

  return (
    <Drawer
      anchor= "right"
      open= {props.open}
      onClose = {() => props.onClose(false)}
    >
      <List component= "nav">
        <ListItem button onClick={() => scrollToElement('feature')}>
            Event Starts In
        </ListItem> {/* end Feature List Item */}

        <ListItem button onClick={() => scrollToElement('eventnfo')}>
          Event NFO
        </ListItem> {/* end NFO List Item */}

        <ListItem button onClick={() => scrollToElement('highlights')}>
          Highlights
        </ListItem> {/* end Highlights List Item */}

        <ListItem button onClick={() => scrollToElement('pricing')}>
          Pricing
        </ListItem> {/* end Pricing List Item */}

        <ListItem button onClick={() => scrollToElement('location')}>
          Location
        </ListItem> {/* end Location List Item */}
      </List>
    </Drawer>
  );
};

export default SidebarDrawer;