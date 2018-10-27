import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Task.component.css';

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <li className={(this.props.task.state ? 'task-done': '') + " task--container"}>
          <span>{this.props.task.task}</span>
          <div>
            <button className='task-doneBtn' onClick={this.props.done}>
              <i className={(this.props.task.state ? 'fa fa-check-circle-o': 'fa fa-circle-o')} aria-hidden='true'></i>
            </button>
            <button className='task-doneBtn edit' onClick={this.props.editTask}>
              <i className='fa fa-pencil' aria-hidden='true'></i>
            </button>
            <button className='task-doneBtn delete' onClick={this.props.delete} >
              <i className='fa fa-times' aria-hidden='true'></i>
            </button>
          </div>
      </li>
    );
  }
}