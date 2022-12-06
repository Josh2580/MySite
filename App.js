import React from "react";
import { ThemeProvider } from "styled-components";
//Components and style
import GlobalStyle from "./styles/GlobalStyle";
//Pages
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
//Router Routing
import { Route, Outlet, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./routes/error-page";

export const routerComp = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: "/",
      //   element: <HomePage />,
      // },
    ],
  },
]);

const theme = {
  color: {
    firstBlue: "#1890e0",
  },
  mobile: "769px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <NavBar />
        <HomePage />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
