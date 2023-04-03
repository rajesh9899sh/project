import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./route/AppRouter";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
