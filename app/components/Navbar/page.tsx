import Link from "next/link";
import React from "react";
import "./Navbar.css";

const page = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Azul Pro.</h1>
      </div>
      <div className="links">
        <p>
          <Link href="/">Home</Link>
        </p>
        <p>
          <Link href="/products">Products</Link>
        </p>
        <p>
          <Link href="/events">events</Link>
        </p>
         <p>
          <Link href="/blogs">blogs</Link>
        </p>
         <p>
          <Link href="/aboutUs">aboutUs</Link>
        </p>


      </div>
      <div className="buttons">
        <button>Login</button>
        <button>SignUp</button>
      </div>
    </nav>
  );
};

export default page;
