import React from 'react';
import { default as NextQuarterButton } from
    '../../game/sidebar/next-quarter-button/next-quarter-button.jsx';
import { default as AdviserPanel } from '../adviser-panel/adviser-panel.jsx';
import { default as CompanyName} from '../company-name/company-name.jsx';

export default React.createClass({
  render() {
    return (
      <div className="main-side-bar">
        <h1>Your Advisers</h1>
        <div className="main-side-bar__wrapper">
          <div className="company-name">
            <CompanyName companyName={this.props.state.companyName} />
          </div>
          <div className="advisor-panel">
            <AdviserPanel state={this.props.state} />
          </div>
          <div className="next-quarter-button">
            <NextQuarterButton actions={this.props.state.game.actions}/>
          </div>
        </div>
      </div>

      );
  }
});
