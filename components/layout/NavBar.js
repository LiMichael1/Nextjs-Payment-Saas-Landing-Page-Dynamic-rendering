import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';

const NavBar = () => {
  const handleDownload = async () => {
    const response = await fetch('http://localhost:3000/api/downloadCount');
    const data = await response.json();

    console.log(data);
  };

  return (
    <nav className='navbar'>
      <div className='leftNav'>
        <Logo />
        <ul className='navLinks lightText'>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/features'>
              <a>Features</a>
            </Link>
          </li>
          <li>
            <Link href='/how'>
              <a>How It Works</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='rightNav'>
        <button onClick={handleDownload}>Download</button>
      </div>
    </nav>
  );
};

export default NavBar;
