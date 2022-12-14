import { Routes, Route } from "react-router-dom";
import { Checkout } from "./components/pages/Checkout";
import { Home } from "./components/pages/Home";
import { Success } from "./components/pages/Success";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Success" element={<Success />} />
      </Route>
    </Routes>
  );
}
