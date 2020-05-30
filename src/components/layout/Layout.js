import React, { useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../home/Home";
import NavHamburger from "./navigation/NavHamburger";
import LoginModal from "./navigation/LoginModal";
import { AuthContextProvider } from "../../context/AuthContext";
import Footer from "./Footer";
import Dashboard from "../admin/Dashboard";
import Enquiries from "../admin/Enquiries";
import { StateContext } from "../../context/StateHandler";
import EstablishmentList from "../booking/EstablishmentList";
import EstablishmentDetails from "../booking/EstablishmentDetails";
import Contact from "../contact/Contact";
function Layout({ ref, activeId }) {
  activeId = "";
  const navRef = useRef(null);
  const toggleNav = (e) => {
    if (activeId !== "Active") {
      activeId = "Active";
    } else {
      activeId = "";
    }
    navRef.current.id = activeId;
  };

  return (
    <AuthContextProvider>
      <StateContext>
        <Router>
          <header>
            <div className="container row row__direction--column">
              <NavLink className="col2" to="/" exact>
                <img
                  id="Logo"
                  src={require("../../images/Logo.png")}
                  alt="Logo"
                />
              </NavLink>
              <NavHamburger toggleNav={toggleNav} />
              <nav id={activeId} className="topMenu" ref={navRef}>
                <NavLink to="/" exact className="topMenu__link">
                  Home
                </NavLink>
                <NavLink to="/booking" exact className="topMenu__link">
                  Booking
                </NavLink>
                <NavLink to="/contact" exact className="topMenu__link">
                  Contact
                </NavLink>
                <LoginModal />
              </nav>
            </div>
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/booking" exact component={EstablishmentList} />
              <Route
                path="/booking/:id"
                exact
                component={EstablishmentDetails}
              />
              <Route path="/contact" exact component={Contact} />
              <Route path="/admin" exact component={Dashboard} />
              <Route path="/admin/enquiries" exact component={Enquiries} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </StateContext>
    </AuthContextProvider>
  );
}

export default Layout;
