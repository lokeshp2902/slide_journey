import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import {useSlideContext} from './hooks'

const DynamicDropdown = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const {setGridDropDown} = useSlideContext();

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
    setGridDropDown(eventKey);
    // console.log("Updated in the drop down key ", eventKey);
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={selectedItem || "Select the Grid"}
      onSelect={handleSelect}
    >
      {items.map((item, index) => (
        <Dropdown.Item key={index} eventKey={item}>
          {item}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DynamicDropdown;