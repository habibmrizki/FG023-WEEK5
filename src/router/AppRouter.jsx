import { BrowserRouter, Routes, Route } from "react-router";

import Signin from "../pages/Signin";
import Signup from "../pages/SignUp";
import Index from "../pages/Index";
import Home2 from "../pages/Home2";
import Details from "../pages/Details";

import OrderHistoryTicketNoPaid from "../pages/OrderHistoryTicketNoPaid";
import OrderHistoryTicketResult from "../pages/OrderHistoryTicketResult";
import Payment from "../pages/Payment";
import ProfilePage from "../pages/ProfilePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth">
          <Route path="signin" element={<Signin />} />
          <Route path="signUp" element={<Signup />} />
        </Route>
        <Route path="/movie">
          <Route path="home2" element={<Home2 />} />
          <Route path="details" element={<Details />} />
        </Route>
        <Route path="/payment" element={<Payment />} />
        <Route path="/order">
          <Route path="paid" element={<OrderHistoryTicketNoPaid />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="result" element={<OrderHistoryTicketResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
