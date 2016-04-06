import React from 'react';
import { FullPageNavigation, FullPageNavigationSection } from '../lib/FullPageNavigation';

export default class App extends React.Component {
  render() {
    return (
      <div id="demo-app">
        <FullPageNavigation className="navigation">

          <FullPageNavigationSection>
            This is content section 1
          </FullPageNavigationSection>

          <FullPageNavigationSection>
            This is content section 2
          </FullPageNavigationSection>

        </FullPageNavigation>
      </div>
    );
  }
}
