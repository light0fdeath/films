import React, { Component } from 'react';

export class Like extends Component {
  render() {
    let classes = 'fa-heart fa-';
    if (!this.props.liked) classes += 'regular';
    else classes += 'solid';
    return (
      <div>
        <i
          onClick={this.props.onLikeToggle}
          style={{ cursor: 'pointer' }}
          className={classes}
        ></i>
      </div>
    );
  }
}

export default Like;
