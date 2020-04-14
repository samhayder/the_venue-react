import React from 'react';
import Button from '@material-ui/core/Button';
import ticket from '../../resources/icons/ticket.png'

const MyButton = (props) => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size="small"
      target= '_blank'
      style={{
        background: props.bck,
        color: props.color,
      }}

    >
      <img 
        src={ticket} 
        alt="button-icon"
        className="iconImage"
      />
      {props.text}
    </Button>
  );
};

export default MyButton;