/*
  IconPicker Component
  -- selectlist of the icons
*/
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, Popup, Icon } from 'semantic-ui-react';

const IconPicker = ({
  handleValue,
  value,
  icons,
}) => (
  <div className="icon-picker">
    <Popup
      trigger={(
        <Button basic>
          <Icon disabled name={value} size="large" color="black" />
          <Icon
            name="chevron down"
            size="small"
            color="black"
          />
        </Button>
      )}
      on="click"
      position="bottom center"
    >
      <div className="icon-picker__icons">
        {icons.map((icon, index) => (
          <span
            key={`icon-${index}`}
            className={classNames(
              'icon-picker__icons__item',
              icon === value && 'icon-picker__icons__item--active',
            )}
            onClick={() => handleValue(icon)}
          >
            <Icon
              name={icon}
              size="large"
              color="grey"
            />
          </span>
        ))}
      </div>
    </Popup>
  </div>
);


IconPicker.propTypes = {
  handleValue: PropTypes.func,
  value: PropTypes.string,
  icons: PropTypes.arrayOf(String),
};

export default IconPicker;
