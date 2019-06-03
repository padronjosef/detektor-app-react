import React from 'react';

import "./styles/Badge.css"
import hero from '../images/logo-react.png'
import Gravatar from './Gravatar'

class Badge extends React.Component {
  render() {

    return (
      <div className="Badge">
        <div className="Badge_header">
          <img src={hero} alt="hero"></img>
        </div>

        <div className="Badge_section-name">
          <Gravatar className="Badge_avatar" email={this.props.email} alt="avatar" />
          <h1> {this.props.firstName} <br/> {this.props.lastName} </h1>
        </div>

        <div className="Badge_section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>{this.props.email}</div>
        </div>

        <div className="Badge_footer">
          @{this.props.twitter}
        </div>
      </div>
    )
  }
}

export default Badge;