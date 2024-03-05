import logo from '../../assets/logo.jpg';
import HeaderCartBtn from './HeaderCartBtn';

const Header = () => {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logo} alt='logo' />
        <h1>React Food</h1>
      </div>

      <nav>
        <HeaderCartBtn />
      </nav>
    </header>
  );
};

export default Header;
