import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { useStoreDispatch } from "./store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchSymbols, getSymbols } from "./store/symbolsSlice";

function App() {
  const dispatch = useStoreDispatch();
  const symbols = useSelector(getSymbols);

  useEffect(() => {
    if (!symbols.length) {
      dispatch(fetchSymbols());
    }
  }, []);

  return (
    <>
      <Header />
      <section className="app-container">
        <Outlet />
      </section>
    </>
  );
}

export default App;
