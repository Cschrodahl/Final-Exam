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
import EstablishmentList from "../booking/EstablishmentList";
import EstablishmentDetails from "../booking/EstablishmentDetails";
import Contact from "../contact/Contact";
import ContactAdmin from "../admin/contacts/Contacts";
import EnquiriesDashboard from "../admin/enquiries/EnquiriesDashboard";
import { HotelContextProvider } from "../../context/HotelContext";
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
      <HotelContextProvider>
        <Router>
          <header>
            <div className="container row row__direction--column">
              <div className="col2">
                <NavLink to="/" exact>
                  <img
                    id="Logo"
                    src={require("../../images/Logo.png")}
                    alt="Logo"
                  />
                </NavLink>
              </div>
              <NavHamburger toggleNav={toggleNav} />
              <nav id={activeId} className="topMenu" ref={navRef}>
                <NavLink
                  to="/"
                  exact
                  className="topMenu__link"
                  onClick={toggleNav}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/booking"
                  exact
                  className="topMenu__link"
                  onClick={toggleNav}
                >
                  Booking
                </NavLink>
                <NavLink
                  to="/contact"
                  exact
                  className="topMenu__link"
                  onClick={toggleNav}
                >
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
              <Route
                path="/admin/enquiries"
                exact
                component={EnquiriesDashboard}
              />
              <Route path="/admin/contacts" exact component={ContactAdmin} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </HotelContextProvider>
    </AuthContextProvider>
  );
}

export default Layout;
