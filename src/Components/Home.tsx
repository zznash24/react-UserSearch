import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Welcome to the Home Page</h1>
      </div>
      <div className="homeText">
        <p style={{ textAlign: "center" }}>The real magical side of this App comes from the User Phone Book.</p>
        <div style={{ textAlign: "center" }}>
          <button style={{ backgroundColor: 'orange'}}>
            <a href="/user-search" style={{ textDecoration: "none", color: "inherit" }}>User Phonebook</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
