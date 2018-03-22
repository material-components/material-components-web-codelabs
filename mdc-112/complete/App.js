import React from 'react';
import TopAppBar from './TopAppBar';
import './app.scss';

export default class App extends React.Component {
  state = {
    isShort: false,
    isRtl: false,
    isProminent: false,
    isAlwaysCollapsed: false,
    noActionItems: false,
  }

  get actionItems() {
    const {isShort, noActionItems} = this.state;
    if (noActionItems) {
      return null;
    }

    const actionItems = [
      <a href='#' className='material-icons mdc-top-app-bar__action-item' aria-label='Bookmark this page' alt='Bookmark this page'>bookmark</a>,
    ];

    // Top App Bar Spec allows for only 1 action item with the short variant
    if (!isShort) {
      [].push.apply(actionItems, [
        <a href='#' className='material-icons mdc-top-app-bar__action-item' aria-label='Download' alt='Download'>file_download</a>,
        <a href='#' className='material-icons mdc-top-app-bar__action-item' aria-label='Print this page' alt='Print this page'>print</a>,
      ]);
    }
    return actionItems;
  }

  render() {
    const {isShort, isRtl, isProminent, isAlwaysCollapsed} = this.state;

    return (
      <section
        dir={isRtl ? 'rtl' : 'ltr'}
        className='mdc-typography'>
        <TopAppBar
          navIcon={NavIcon}
          short={isShort}
          prominent={isProminent}
          alwaysCollapsed={isAlwaysCollapsed}
          title='Mountain View, CA'
          actionItems={this.actionItems}
        />
        <div className='demo-text-container'>
          {this.renderDemoParagraphs()}
        </div>

        {this.renderControls()}
      </section>
    );
  }

  renderDemoParagraphs() {
    const createDemoParagraph = (key) => (<p className='demo-paragraph' key={key}>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
      tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
      ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et
      netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
      vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
      egestas semper. Aenean ultricies mi vitae est.
    </p>);
    const size = 20;
    const tags = Array.from(Array(size).keys());
    return tags.map((tag, key) => createDemoParagraph(key));
  }

  renderControls() {
    const {isShort, isProminent} = this.state;

    const checkboxes = [{
      title: 'Short',
      attr: 'isShort',
      disabled: isProminent,
    }, {
      title: 'Always Short',
      attr: 'isAlwaysCollapsed',
      disabled: !isShort,
    },{
      title: 'RTL',
      attr: 'isRtl',
    }, {
      title: 'Prominent',
      attr: 'isProminent',
      disabled: isShort,
    }, {
      title: 'No Action Items',
      attr: 'noActionItems',
    }];

    return (
      <div className='demo-controls-box'>
        <h3 className='mdc-typography--title'>
          Controls
        </h3>

        {checkboxes.map((checkbox, key) => this.renderControlCheckbox(checkbox, key))}
      </div>
    );
  }

  renderControlCheckbox({title, attr, disabled = false}, key) {
    const labelId = `${title}-${key}`;

    return (
      <div key={key}
        className={`demo-control-checkbox ${disabled ? 'demo-control-checkbox--disabled' : ''}`}>
        <label htmlFor={labelId}
          className='demo-control-checkbox__label'>
          {title}
        </label>
        <input type='checkbox'
          disabled={disabled}
          id={labelId}
          onClick={(evt) => this.setState({[attr]: evt.target.checked})} />
      </div>
    );
  }
}

const NavIcon = () => {
  return (
    <a
      className='material-icons mdc-top-app-bar__navigation-icon'
      href='#'
      onClick={() => {console.log('hey')}}>
      menu
    </a>
  );
}
