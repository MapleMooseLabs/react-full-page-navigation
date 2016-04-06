import React from 'react';
import classNames from 'classnames';

export class FullPageNavigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, className } = this.props;
    let defaultClass = 'full-page-nav';
    let applyDefaultClass = !className || (className !== defaultClass);


    let navClass = classNames({
      [defaultClass]: applyDefaultClass
    }, className);

    return (
      <div className={ navClass } id={ id || null }>
        {
          React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
              defaultClass: defaultClass + '__section',
              index: this.props.children.indexOf(child),
              ...child.props
            });
          })
        }
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
    const { id, index, children, defaultClass, className } = this.props;

    let sectionClass = classNames({
      [defaultClass]: !className || (className !== defaultClass)
    }, className);

    return (
      <section id={ id || 'section-' + index } className={ sectionClass }>
        { children }
      </section>
    );
  }
}
