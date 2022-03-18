import React, {useState} from 'react';
import './Navbar.css';
import cn from 'classnames';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onToggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState)
  }

  return (
    <header>
      <div className='container is-active'>
        <span className='title'>
          <h2>Alex Horbunov</h2>
        </span>
        <nav className={cn('navbar', {'is-active': isMobileMenuOpen})}>
          <a className='nav-item' href='#'>Home</a>
          <a className='nav-item' href='#'>Code</a>
          <a className='nav-item' href='#'>Awards</a>
        </nav>
        <button
          onClick={onToggleMobileMenu}
          className={cn('hamburger', {'is-active': isMobileMenuOpen})}>
          <div className='bar' />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
