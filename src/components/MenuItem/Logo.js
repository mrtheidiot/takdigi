import LogoImg from './../../assets/Logo1.svg'
import './Logo.css';

const Logo = () => {
  return <div className='logo__main'>
    <img src={LogoImg} alt="logo tak to sie obi" />
  </div>;
};

export default Logo;
