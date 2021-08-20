import Select from "@material-ui/core/Select";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { useState } from "react";
import { menuItems } from "./helper";
import './style.css';

const CustomSelect = () => {

  const [age, setAge] = useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl variant="outlined" >
      <Select
        className='CustomSelect'
        value={age}
        onChange={handleChange}
        IconComponent={ UnfoldMoreIcon }
      >
        {menuItems?.length >= 1 && menuItems.map(menuItem => {
          return <MenuItem key={menuItem.value}
                           value={menuItem.value}
          >
            {menuItem.content}
          </MenuItem>
        })}

      </Select>
    </FormControl>
  );
}

export default CustomSelect;