import React from 'react';
import { Button, Popup, Icon } from 'semantic-ui-react';

const IconPicker = () => (
  <div className="icon-picker">
    <Popup
      trigger={(
        <Button basic>
          <Icon disabled name="world" size="large" color="black" />
          <Icon
            name="chevron down"
            size="small"
            color="black"
          />
        </Button>
      )}
      flowing
      on="click"
      position="bottom center"
    >
      fsdfdfsdf
    </Popup>
  </div>
);

export default IconPicker;
