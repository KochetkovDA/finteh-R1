import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.component.css';

export default class Counter extends Component {
  static propTypes = {
    step: PropTypes.number.isRequired,
    init: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  }
  static defaultProps = {
    step: 1,
    init: 0,
    max: 10,
    message: 'Maximum value reached',
  }
    constructor(props) {
        super(props);
        this.inputChange = this.inputChange.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        this.state = { value: this.props.init };
      }
    increment () {
      let val = Number(this.state.value) + this.props.step;
      if(val > this.props.max) {
        return this.setState({value: this.props.max});
      }
      if(Number(this.state.value) < this.props.max) {
        return this.setState({value: val});
      }
    };
    inputChange(e) {
      let val = Number(e.target.value.replace(/\D/g, ''))
      if(val <= this.props.max && val >= -this.props.max) {
        return this.setState({ value: val});
      }
    }
    decrement () {
      let val = Number(this.state.value) - this.props.step;
      if(val < -this.props.max) {
        return this.setState({value: -this.props.max});
      }
      if(Number(this.state.value) > -this.props.max) {
        return this.setState({value: val});
      }
    };
    reset() {
      this.setState({value: this.props.init});
    };
    isMaxValueReached() {
      return (Number(this.state.value) === this.props.max || Number(this.state.value) === -this.props.max)
    }


    isShowResetButton() {
      if(this.state.value !== this.props.init) {
        return {visibility: 'visible'}
      }
      return {visibility: 'hidden'}
    }
    render() {
      return (
        <div>
          <div className="counter--input_group">
          <div className="counter--input_container">
              <button className="counter--button" onClick={this.decrement}><i className="fa fa-minus" aria-hidden="true"></i></button>
              <input className="counter--input" onChange={this.inputChange} value={this.state.value}/>
              <button className="counter--button" onClick={this.increment}><i className="fa fa-plus" aria-hidden="true"></i></button>
          </div>
          <button className="counter--button reset" onClick={this.reset} style={this.isShowResetButton()}><i className="fa fa-repeat" aria-hidden="true"></i></button>
          </div>
          { this.isMaxValueReached() && <p className="counter--message">{this.props.message}</p>}
        </div>
      );
    }
  }
