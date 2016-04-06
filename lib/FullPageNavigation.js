import React from 'react';

export class FullPageNavigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this);
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
    return (
      <div>
        FullPageNavigationSection
      </div>
    );
  }
}
