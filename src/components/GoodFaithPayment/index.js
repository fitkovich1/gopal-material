import { useState } from "react";
import { Button, DatePicker, Popover, Select } from "antd";
import { CalendarOutlined, InfoCircleOutlined } from '@ant-design/icons';
import selectIcon from '../../assets/img/arrows-icon.png';
import './style.css';


const { Option } = Select;


const GoodFaithPayment = () => {

  const [isPickerOpen, setIsPickerOpen] = useState(false);


  return <div className='GoodFaithPayment'>
    <p>Choose your Good Faith Payment Date</p>
    <div className='GoodFaithPayment-date'>
      <div className='GoodFaithPayment-date-container'>
        <CalendarOutlined
          className='GoodFaithPayment-date-container-calendar'
          onClick={ () => setIsPickerOpen(!isPickerOpen) }
        />
        <DatePicker
          className='GoodFaithPayment-date-picker'
          placeholder={ 'MM/DD/YYYY' }
          size={ 'middle' }
          open={ isPickerOpen }
          allowClear={ true }
          onFocus={ () => setIsPickerOpen(true) }
          onBlur={ () => setIsPickerOpen(false) }
          onChange={ () => setIsPickerOpen(false) }
        />
        <Popover content={ 'Choose your Good Faith Payment Date' } title="Choose date" trigger="hover">
          <InfoCircleOutlined className='GoodFaithPayment-date-container-info'/>
        </Popover>
      </div>
      <div className='GoodFaithPayment-date-amount'>
        <p className='GoodFaithPayment-date-amount-payment'>Your chosen payment amount</p>
        <p className='GoodFaithPayment-date-amount-price'>507.00</p>
      </div>
    </div>
    <p>Would you like to make your payment in one installment each month or split it up between two payments?</p>
    <div className='GoodFaithPayment-payment-frequency'>
      <div className='GoodFaithPayment-payment-frequency-container'>
        <Select
          className='GoodFaithPayment-payment-frequency-container-select'
          defaultValue="payment"
          suffixIcon={ <img src={ selectIcon } alt='icon'/> }
        >
          <Option value="installment">One installment</Option>
          <Option value="payment">Payment Frequency</Option>
          <Option value="payments">Two payments</Option>
        </Select>

        <Popover content={ 'Choose your payment frequency' } title="Choose payment frequency" trigger="hover">
          <InfoCircleOutlined className='GoodFaithPayment-payment-frequency-container-select-info'/>
        </Popover>
      </div>
      <div className='GoodFaithPayment-payment-frequency-amount'>
        <p className='GoodFaithPayment-payment-frequency-amount-payment'>Your chosen payment amount</p>
        <p className='GoodFaithPayment-payment-frequency-amount-price'>507.00</p>
      </div>

    </div>
    <p>What day(s) of the month would you like to pay?</p>
    <div className='GoodFaithPayment-pay-month'>
      <div className='GoodFaithPayment-pay-month-container'>
        <Select
          className='GoodFaithPayment-pay-month-container-select'
          defaultValue="payment"
          suffixIcon={ <img src={ selectIcon } alt='icon'/> }
        >
          <Option value="installment">One installment</Option>
          <Option value="payment">Payment Frequency</Option>
          <Option value="payments">Two payments</Option>
        </Select>

        <Popover content={ 'Choose your payment frequency' } title="Choose payment frequency" trigger="hover">
          <InfoCircleOutlined className='GoodFaithPayment-pay-month-container-select-info'/>
        </Popover>
      </div>
      <div className='GoodFaithPayment-pay-month-container'>
        <Select
          className='GoodFaithPayment-pay-month-container-select'
          defaultValue="payment"
          suffixIcon={ <img src={ selectIcon } alt='icon'/> }
        >
          <Option value="installment">One installment</Option>
          <Option value="payment">Payment Frequency</Option>
          <Option value="payments">Two payments</Option>
        </Select>

        <Popover content={ 'Choose your payment frequency' } title="Choose payment frequency" trigger="hover">
          <InfoCircleOutlined className='GoodFaithPayment-pay-month-container-select-info'/>
        </Popover>
      </div>
    </div>
    <div className='GoodFaithPayment-buttons'>
      <Button size='middle' type='primary'>Back</Button>
      <Button size='large' type='primary'>Next</Button>
    </div>
  </div>
}

export default GoodFaithPayment;