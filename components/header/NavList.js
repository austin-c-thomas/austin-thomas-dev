import Link from 'next/link';

const NavList = ({ 
  activeLinkIs, 
  isBurgerMenuOpen, 
  handleLinkClick }) => {

  return (
    <nav className="nav">
      <ul className="nav-list">

        <li>
          <Link href="/">
            Home
          </Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

      </ul>

      <style jsx>
        {`
          nav {
            display: flex;
            align-items: center;
          }

          ul {
            display: flex;
            justify-content: space-around;
          }

          li {
            list-style: none;
          }

        `}
      </style>
    </nav>
  );
};

export default NavList;