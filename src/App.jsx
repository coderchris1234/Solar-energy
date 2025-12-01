import React from "react";
import { RouterProvider } from "react-router-dom";
import { Element } from "./router/Router";
import { WaitlistProvider } from "./Context/WaitlistContext";
import WaitlistModal from "./components/Modal";

const App = () => {
  return (
    <WaitlistProvider>
      <RouterProvider router={Element} />
      <WaitlistModal />
    </WaitlistProvider>
  );
};

export default App;
