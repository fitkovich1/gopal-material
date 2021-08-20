import { Steps } from 'antd';
import './style.less';
import { useState } from "react";


const { Step } = Steps;




const CustomizeLoan = () => {

  const [currentStep, setCurrentStep] = useState(2);

  const onCurrentStepChange = (currentStep) => {
    setCurrentStep(currentStep);
  }


  return (
    <div className="CustomizeLoan">
      <p className='CustomizeLoan-firstPayment'>Schedule your first payment</p>
      <Steps labelPlacement={'vertical'}
             responsive={true}
             size='small'
             type={'default'}
             current={currentStep}
             onChange={onCurrentStepChange}
             className='CustomizeLoan-firstPayment-steps'
      >
        <Step title="Contact information" className='CustomizeLoan-firstPayment-steps-item'/>
        <Step title="Your Background" className='CustomizeLoan-firstPayment-steps-item'/>
        <Step title="Customize Loan" className='CustomizeLoan-firstPayment-steps-item'/>
        <Step title="Income verification" className='CustomizeLoan-firstPayment-steps-item'/>
        <Step title="Approval" className='CustomizeLoan-firstPayment-steps-item'/>
      </Steps>
    </div>
  );
}

export default CustomizeLoan;