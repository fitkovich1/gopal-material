import { Step, StepLabel, Stepper } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './style.css';
import { stepLabels } from "./helper";


const CustomStepper = () => {

  const matches = useMediaQuery('(min-width:500px)');

  return <Stepper className='CustomStepper'
                  activeStep={ 1 }
                  alternativeLabel={ matches }
                  orientation={ matches ? "horizontal" : "vertical" }
  >
    { stepLabels?.length && stepLabels.map(label => {
      return <Step key={ label }>
        <StepLabel>{ label }</StepLabel>
      </Step>
    }) }
  </Stepper>
}

export default CustomStepper;