import { Box } from "@material-ui/core";
import CustomStepper from "../CustomStepper";
import './style.css';


const CustomizeLoan = () => {

  return (
    <Box className="CustomizeLoan">
      <Box component='p' className='CustomizeLoan-firstPayment'>Schedule your first payment</Box>
      <CustomStepper />
    </Box>
  );
}

export default CustomizeLoan;