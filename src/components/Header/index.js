import { Box } from "@material-ui/core";
import logo from '../../assets/img/lendstreet-logo.png';
import './style.css';


const Header = () => {
  return <Box component="header" className="Header">
    <img src={logo} alt='lendstreet_logo' />
  </Box>
}

export default Header;