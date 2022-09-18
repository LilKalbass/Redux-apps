import React from "react";
import Cart from "./Cart";
import {useDispatch} from "react-redux";
import {authActions} from "../store/auth-slice";

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header>
      <nav className = "sticky shadow-lg ">
        <div className = "">
        <ul className = "flex items-center justify-between">
          <li className = "mr-[50%]">
            <h2 className = "text-[30px] font-mono">Redux Shopping App</h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button onClick = {logoutHandler}
                    className = "mb-5 border-none px-4 py-1.5 rounded-full bg-orange-500 hover:bg-orange-700 ">Logout
            </button>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
