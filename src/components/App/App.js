import { Box, Typography } from "@material-ui/core";
import Header from "../Header";
import CustomizeLoan from "../CustomizeLoan";
import GoodFaithPayment from "../GoodFaithPayment";
import Footer from "../Footer";
import './style.css';

const App = () => {

  return (
    <Box className="App">
      <Header />
      <div className='App-container'>
        <CustomizeLoan />
        <Box component='p'>If approved, LendStreet will refinance your account once you've made your Good Faith Payment.</Box>
      </div>
      <GoodFaithPayment />
      <Footer />
    </Box>
  );
}

export default App;
