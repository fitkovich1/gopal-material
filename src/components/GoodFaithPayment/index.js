import { useState } from "react";
import { Box, Button } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import CustomSelect from "../CustomSelect";
import CustomPopover from "../CustomPopover";
import './style.css';


const GoodFaithPayment = () => {

  const [selectedDate, handleDateChange] = useState(new Date());

  return <Box className='GoodFaithPayment'>
    <Box component="p" color='textPrimary'>Choose your Good Faith Payment Date</Box>
    <Box className='GoodFaithPayment-date'>
      <Box className='GoodFaithPayment-date-container'>
        <KeyboardDatePicker
          className='GoodFaithPayment-date-picker'
          autoOk
          disableFuture
          variant="inline"
          format="dd/MM/yyyy"
          value={selectedDate}
          InputAdornmentProps={{ position: "start" }}
          onChange={date => handleDateChange(date)}
        />
        <CustomPopover text={'Choose your payment date'}/>
      </Box>
      <Box className='GoodFaithPayment-date-amount'>
        <Box component="p" color='textPrimary' className='GoodFaithPayment-date-amount-payment'>Your chosen payment amount</Box>
        <Box component="p" color='textPrimary' className='GoodFaithPayment-date-amount-price'>507.00</Box>
      </Box>
    </Box>
    <Box component="p" color='textPrimary'>Would you like to make your payment in one installment each month or split it up between two payments?</Box>
    <Box className='GoodFaithPayment-payment-frequency'>
      <Box className='GoodFaithPayment-payment-frequency-container'>
        <CustomSelect />
        <CustomPopover text={'Choose your payment frequency'}/>
      </Box>
      <Box className='GoodFaithPayment-payment-frequency-amount'>
        <Box component="p" color='textPrimary' className='GoodFaithPayment-payment-frequency-amount-payment'>Your chosen payment amount</Box>
        <Box component="p" color='textPrimary' className='GoodFaithPayment-payment-frequency-amount-price'>507.00</Box>
      </Box>
    </Box>
    <Box component="p" color='textPrimary'>What day(s) of the month would you like to pay?</Box>
    <Box className='GoodFaithPayment-pay-month'>
      <Box className='GoodFaithPayment-pay-month-container'>
        <CustomSelect />
        <CustomPopover text={'Choose your payment frequency'}/>
      </Box>
      <Box className='GoodFaithPayment-pay-month-container'>
        <CustomSelect />
        <CustomPopover text={'Choose your month payment'}/>
      </Box>
    </Box>
    <Box className='GoodFaithPayment-buttons'>
      <Button color='primary' size='large' variant='contained'>Back</Button>
      <Button color='primary' size='large' variant='contained'>Next</Button>
    </Box>
  </Box>
}

export default GoodFaithPayment;