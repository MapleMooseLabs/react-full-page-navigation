import React from 'react';
import classNames from 'classnames';

import "./styles/full-page-navigation.scss";

export class FullPageNavigation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeSectionIndex: null
    };
  }

  componentDidMount() {
    if (!this.state.activeSectionIndex) {
      this.setActiveSection(0);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.activeSectionIndex !== nextState.activeSectionIndex;
  }

  setActiveSection(index) {
    this.setState({ 'activeSectionIndex': index });
  }

  render() {
    const { id, className, children, transition } = this.props;
    let defaultClass = 'full-page-nav';
    let applyDefaultClass = !className || (className !== defaultClass);
    let activeIndex = this.state.activeSectionIndex;
    this.sections = [];

    let navClass = classNames({
      [defaultClass]: applyDefaultClass,
      [defaultClass + '--' + transition]: transition !== undefined
    }, className);

    return (
      <div className={ navClass } id={ id || null } ref="container">
        {
          React.Children.map(children, (child, index) => {
            let props = {
              defaultClass: defaultClass + '__section',
              isActive: activeIndex === index,
              id: 'section-' + index,
              ref: 'section-' + index,
              ...child.props
            };
            if (child.type.displayName === 'FullPageNavigationSection') {
              return React.cloneElement(child, props);
            } else {
              return (
                <FullPageNavigationSection { ...props }>
                  { child }
                </FullPageNavigationSection>
              );
            }
          })
        }

        <nav className="full-page-nav__controls">
          <ul className="full-page-nav__indicator-list">
            {
              children.map((child, i) => {
                return (
                  <li
                    key={ i }
                    className={ "full-page-nav__indicator" + (activeIndex === i ? ' full-page-nav__indicator--active' : '') }
                    onClick={ this.setActiveSection.bind(this, i) } />
                )
              })
            }
          </ul>

        </nav>
      </div>
    );
  }
}

/**
 * Navigation Controls
 */



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
    const { id, children, defaultClass, className, isActive } = this.props;
    // console.log(this.props.isActive);
    let sectionClass = classNames({
      [defaultClass]: !className || (className !== defaultClass),
      [defaultClass + '--active']: isActive
    }, className);

    return (
      <section className={ sectionClass } id={ id } ref='container'>
        { children }
      </section>
    );
  }
}
