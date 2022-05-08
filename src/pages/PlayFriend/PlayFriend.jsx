import App from "./App";
import { Provider } from "react-redux";
import store from "../../redux/playFriendStore";

function PlayFriend() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default PlayFriend;
