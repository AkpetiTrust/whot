import App from "./App";
import { Provider } from "react-redux";
import store from "../../redux/playComputerStore";

function PlayComputer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default PlayComputer;
