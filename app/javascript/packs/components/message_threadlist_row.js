import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MessageThreadlistRow = (props) => (
  <li className="message-threadlist-row__root" onClick={props.onClick}>
    <div className="message-threadlist-row__avatar-container">
      <img src={props.avatarUrl} className="message-threadlist-row__avatar-image" width="50" />
    </div>
    <div>
      <div>
        <span className="message-threadlist-row__username">{props.usernames.join(', ')}</span>
      </div>
      <div>
        <span className="message-threadlist-row__message">You are now connected on Messenger</span>
      </div> 
    </div>
  </li>
);

MessageThreadlistRow.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  usernames: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MessageThreadlistRow;