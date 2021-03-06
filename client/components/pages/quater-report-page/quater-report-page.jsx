import React from 'react';

import { dispatch } from '../../../stores/game-store';
import { closeQuarterReport } from '../../../actions/actions';

const QuaterReportPage = React.createClass({
  nextQuarter(e) {
    e.preventDefault();
    dispatch( closeQuarterReport() );
  },

  render() {
    return (
        <div className="quater-report-page">
          <div className="quarter-report-page__popup">
          <h1 className="quaterReport_headline">
           Quarter {this.props.state.game.currentQuarter}  Report</h1>

          <div className="quaterReport_information">
            <span>You got a captial change is {this.props.state.game.capitalChangeInCurrentQuarter}
            .</span>
            <br/>
            <span>You got {this.props.state.game.satisfactionCurrentQuarter}.
                satisfaction points</span>
            <br/>
            <br/>
            <br/>
            <span> Keep up the good work!</span>
            <br/>
            <br/>
            <button className="button" onClick={this.nextQuarter}>Next</button>
          </div>
         </div>
        </div>
    );
  }
});
export { QuaterReportPage };
