import Link from 'next/link';
import StoreButton from '../layout/StoreButton';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='leftFooter'>
        <Logo />
        <p className='lightText'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
          corrupti accusantium non facilis eveniet laboriosam deserunt ab,
          aliquid, in cumque esse quis minus! Libero nostrum facere nam ea!
          Fuga, fugiat.
        </p>
      </div>
      <div className='rightFooter'>
        <div className='links'>
          <h4>Useful Links</h4>
          <ul className='lightText'>
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About Pay</a>
              </Link>
            </li>
            <li>
              <Link href='/how'>
                <a>How it Works</a>
              </Link>
            </li>
            <li>
              <Link href='/features'>
                <a>Features</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='links'>
          <h4>Legal</h4>
          <ul className='lightText'>
            <li>
              <Link href='/'>
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Terms of Conditions</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='links '>
          <h4>Downloads</h4>
          <StoreButton store={'App'} />
          <StoreButton store={'Play'} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
