import React from 'react';

export class FullPageNavigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        FullPageNavigation
      </div>
    );
  }
}


/**
 * Navigation Section
 */

export class FullPageNavigationSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    console.log(this.props);
    return (
      <div>
        FullPageNavigationSection
      </div>
    );
  }
}
