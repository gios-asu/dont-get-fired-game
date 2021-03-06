import React from 'react';

import { dispatch } from '../../../stores/game-store';
import { addProgram } from '../../../actions/actions';
import { unselectProgram } from '../../../actions/actions';

export default React.createClass({

  onClick() {
    dispatch( addProgram(this.props.program) );
  },
  onClickBack() {
    dispatch( unselectProgram() );
  },

  render() {

    let buttonArea = <div>NULL</div>;
    let message = <span></span>;

    if (this.props.program.isPurchased === false) {
      if (this.props.program.onBuyActionPoints <= this.props.actions &&
          this.props.program.onBuyCaptial <= this.props.capital) {
        buttonArea = <button className="button" onClick={this.onClick}>
          Setup Program ({this.props.program.onBuyActionPoints} Action Points ,
          {this.props.program.onBuyCaptial} Captial Cost)
        </button>;
      } else {
        buttonArea = <button className="button" disabled onClick={this.onClick}>
          Setup Program ({this.props.program.onBuyActionPoints} Action Points ,
          {this.props.program.onBuyCaptial} Captial Cost)
        </button>;
      }


    }
    if (this.props.program.isPurchased === true) {
      buttonArea = <div>PURCHASED</div>;
    }
    if (this.props.message !== null && this.props.message !== undefined ) {
      message = <div>this.props.message</div>;
    }

    return (
      <div className="program">
        <div className="program__wrapper">
          <img className="program__image" src={this.props.program.programImage} />
          <br/> <br/>
          <h3>{this.props.program.name}</h3>
          {this.props.program.description}
          <br/> <br/>
          {buttonArea}
          <br/>
          {message}
          <br/><br/>
          <button className="button" onClick={this.onClickBack}>Back</button>
        </div>
      </div>
    );
  }
});
