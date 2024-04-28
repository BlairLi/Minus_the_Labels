import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
  // const session = useSession();
  return (
    <>
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-item navbar-center">
          <a className="navbar-item has-text-white" href="/">
            Minus The Labels
          </a>
        </div>
        {/* Other navbar items */}
      </nav>
      
    </>
  );
};

export default NavBar;
