import "./navbar.css";
export default function Navbar() {
  return (
    <>
      <div className="topnav">
        <div className="logo">
          <h3>Neekunj Chaturvedi</h3>
        </div>
        <div className="tags">
          <h3>
            <a href="#">About</a>
          </h3>
          <h3>
            <a href="">Experience</a>
          </h3>
          <h3>
            <a href="">Projects</a>
          </h3>
          <h3>
            <a href="">Contact</a>
          </h3>
        </div>
      </div>
    </>
  );
}
