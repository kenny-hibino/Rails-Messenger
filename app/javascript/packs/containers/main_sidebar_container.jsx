import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainSidebar from '../components/main_sidebar';
import { withRouter } from 'react-router-dom';
import {
  fetchMessageThreads,
  setActiveThread,
  fetchMessagesFor,
} from '../actions/message_threads';
import {
  getAllMessageThreads,
  getMostRecentMessageThreadId,
  getActiveMessageThreadId,
  getIsAddingNewThread,
  getIsNewThreadActive,
  getNewMessageThreadUsers,
} from '../selectors';

class MainSidebarContainer extends Component {
  componentWillMount() {
    this.props.fetchMessageThreads()
      .then(() => {
        const { activeThreadId, mostRecentThreadId } = this.props;
        if (activeThreadId !== null) {
          this.props.setActiveThread(activeThreadId);
          this.props.fetchMessagesFor(activeThreadId);
          return;
        }

        if (mostRecentThreadId !== false) {
          this.props.setActiveThread(mostRecentThreadId);
          this.props.fetchMessagesFor(mostRecentThreadId);
        }
      });
  }

  render() {
    return (
      <MainSidebar
        isAddingNewThread={this.props.isAddingNewThread}
        isNewThreadActive={this.props.isNewThreadActive}
        newMessageThreadUsers={this.props.newMessageThreadUsers}
        messageThreads={this.props.messageThreads}
        activeThreadId={this.props.activeThreadId}
      />
    );
  }
};

const mapStateToProps = (state) => ({
  isAddingNewThread: getIsAddingNewThread(state),
  isNewThreadActive: getIsNewThreadActive(state),
  newMessageThreadUsers: getNewMessageThreadUsers(state),
  messageThreads: getAllMessageThreads(state),
  activeThreadId: getActiveMessageThreadId(state),
  mostRecentThreadId: getMostRecentMessageThreadId(state),
});

export default connect(
  mapStateToProps,
  {
    fetchMessageThreads,
    setActiveThread,
    fetchMessagesFor,
  }
)(MainSidebarContainer);
