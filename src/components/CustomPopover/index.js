import { Popover, Typography } from "@material-ui/core";
import { useState } from "react";
import InfoIcon from "@material-ui/icons/Info";

const CustomPopover = (props) => {


  const { text } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <InfoIcon onClick={handleClick} className="GoodFaithPayment-payment-frequency-container-select-info" />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Typography className="GoodFaithPayment-payment-frequency-container-select-info-text">{text}</Typography>
      </Popover>
    </>
    )
};

export default CustomPopover;