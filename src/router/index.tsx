import { Provider } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainPage from "../components/MainPage/MainPage";
import AboutPage from "../components/AboutPage/AboutPage";
import { store } from "../store";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      { index: true, element: <MainPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "rates", element: <div> rates</div> },
    ],
  },
]);
