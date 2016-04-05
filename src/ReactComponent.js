import React from 'react';

export default class ReactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { something: 'value' };
  }
  render() {
    return (
      <div>
        ReactComponent
      </div>
    );
  }
}
