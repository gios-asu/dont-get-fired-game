import React from 'react';

export default React.createClass({
  render() {
    return (
        <div>
          <span className="advisor-text-bubble">
            y {this.props.main.text}
          </span>
        </div>
    );
  }
});
