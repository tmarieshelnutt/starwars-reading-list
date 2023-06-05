import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";



export const Navbar = () => {
  const { store, actions } = useContext(Context);
console.log(store.favorites, "FAVORTIES")
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <button type="button" className="btn-outline-light">
          <i className="fab fa-jedi-order" style={{color: "#de3050"}}></i>
        </button>
      </Link>
      <div className="ml-auto p-2">
        <Link to="/demo" />
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            // onClick={() => {
            //   actions.fillFavorites(<i className="fas fa-heart" style="color: #de3050;"></i>);
            // }}   
          >
            favorites
          </button>
          <ul className="px-3 dropdown-menu"
            aria-labelledby="dropdownMenuButton">
            
          
            {store.favorites.length > 0 ? (
              store.favorites.map((elem, index) => {
                return (
                 
                 <div className="d-flex">
                    {" "}
                   
                   <button>
                      type="button"
                      class="btn btn-outline-info"
                      {/* onClick={() => {
                        actions.deleteFavorites(
                          <i
                            class="far fa-trash-alt"
                            style="color: #de3050;"
                          ></i>
                        );
                      }} */}
                    
                      X
                    </button>{" "}
                   
                    <li key={index}>{elem}</li>{" "}
                  </div>
                );
              })
            ) : (
              <div>No Favorites added</div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
