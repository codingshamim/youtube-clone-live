import Branding from "./Branding";

import MobileNav from "./MobileNav";
import NavbarActions from "./NavbarActions";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <>
      <MobileNav />
      <nav className="py-2">
        <div className="custom-container flex-between">
          {/* left side of navbar start  */}
          <Branding />
          {/* left side of navbar end  */}
          {/* searchbar start  */}
          <SearchBar />
          {/* searchbar start end */}
          {/* navbar actions  */}
          <NavbarActions />
          {/* navbar actions end */}
        </div>
      </nav>
    </>
  );
}
