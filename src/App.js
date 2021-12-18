import "./styles.css";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import CheckOut from "./Components/CheckOut";
import LogIn from "./Components/LogIn";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { useEffect } from "react";
import Footer from "./Footer";

export default function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  console.log(user);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="checkout"
          element={
            <>
              <Header />
              <CheckOut />
              <Footer />
            </>
          }
        />
        <Route path="login" element={<LogIn />} />
      </Routes>
    </div>
  );
}
