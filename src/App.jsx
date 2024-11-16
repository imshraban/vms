import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Modal from "./components/Modal";
import AppRoutes from "./routes/Routes"; 

const App = () => {
  const location = useLocation();

  const isLoggedIn = localStorage.getItem("user");

  // Define the paths where Nav and Modal should be hidden
  const hiddenPaths = ["/login", "/register", "/another-path"]; 
  const hideNavAndModal = hiddenPaths.includes(location.pathname);

  return (
    <>
      {!hideNavAndModal && <Nav />}
      <AppRoutes isLoggedIn={isLoggedIn} />
      {!hideNavAndModal && <Modal />}
    </>
  );
};

export default App;
