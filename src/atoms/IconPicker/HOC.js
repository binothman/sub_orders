import React from 'react';

const HOC = (WrappedComponent) => {
  class IconPicker extends React.Component {
    state = { value: 'group' }

    icons = [
      'chart line',
      'download',
      'share square',
      'coffee',
      'envelope',
      'globe',
      'phone volume',
      'folder open',
      'tag',
      'bug',
      'shield alternate',
      'sitemap',
    ]

    handleValue = (value) => {
      this.setState({ value });
    }

    render() {
      const { value } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          icons={this.icons}
          value={value}
          handleValue={this.handleValue}
        />
      );
    }
  }

  return IconPicker;
};

export default HOC;
