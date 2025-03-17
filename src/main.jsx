import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import NavbarLogin from "./components/NavbarLogin.jsx";
import NavbarProfile from "./components/NavbarProfile.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import OrderHistoryTicketNoPaid from "./pages/OrderHistoryTicketNoPaid.jsx";
import OrderHistoryTicketResult from "./pages/OrderHistoryTicketResult.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/SignUp.jsx";
import "../src/assets/styles/style.css";
import Payment from "./pages/Payment.jsx";
import Index from "./pages/Index.jsx";
import MovieToday from "./components/MovieToday.jsx";
import Home2 from "./pages/Home2.jsx";
import UpcomingMovies from "./components/MovieUpcoming.jsx";
import Home from "./pages/Home2.jsx";
import Details from "./pages/Details.jsx";
import Router from "./router/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <NavbarLogin /> */}
    {/* <NavbarProfile /> */}
    {/* <UpcomingMovies /> */}
    {/* <ProfilePage /> */}
    {/* <OrderHistoryTicketResult /> */}
    {/* <Signin /> */}
    {/* <Signup /> */}
    {/* <Payment /> */}
    {/* <Index /> */}
    {/* <Home2 /> */}
    {/* <Details /> */}
    {/* <OrderHistoryTicketNoPaid /> */}
    {/* <Footer /> */}
    <Router />
  </StrictMode>
);
