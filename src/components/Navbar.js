import "../style/NavbarStyle.css";

function Navbar(){
  return (
    <>
    <nav>
      <a className="logo" href="">
        <h1>A</h1>
      </a>

      <div>
        <ul id="navbar">
          <li><a className="active" href="">About</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">BuyNFTS</a></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar;