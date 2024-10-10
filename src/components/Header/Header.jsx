import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our missin
          is to satisfy your cravings and elevate your dining experience, one
          delicious meal at a time.
        </p>
        <button>
          <a href="#explore-menu">Vew Menu</a>
        </button>
      </div>
    </header>
  );
}
