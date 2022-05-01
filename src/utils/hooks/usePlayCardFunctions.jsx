import { useDispatch } from "react-redux";
import {
  removeUserCard,
  removeOpponentCard,
  setInfoText,
  setWhoIsToPlay,
  updateActiveCard,
} from "../../redux/actions";
import infoTextValues from "../../constants/infoTextValues";

function usePlayCardFunctions({
  shape,
  number,
  goToMarket,
  marketConfig,
  setIsShownState,
  delay,
}) {
  const dispatch = useDispatch();

  const playUserCard = () => {
    dispatch(removeUserCard({ shape, number }));
    dispatch(updateActiveCard({ shape, number }));
    if (number === 1 || number === 8) {
      dispatch(setInfoText(infoTextValues.opponentSuspended));
      return;
    }

    // Pick 2
    if (number === 2) {
      goToMarket("opponent", marketConfig, 2);
      dispatch(setInfoText(infoTextValues.opponentPickedTwo));
      return;
    }

    // Pick 3
    if (number === 5) {
      goToMarket("opponent", marketConfig, 3);
      dispatch(setInfoText(infoTextValues.opponentPickedThree));
      return;
    }

    // General Market
    if (number === 14) {
      goToMarket("opponent", marketConfig, 1);
      dispatch(setInfoText(infoTextValues.opponentReceivedGeneralMarket));
      return;
    }

    dispatch(setWhoIsToPlay("opponent"));
    dispatch(setInfoText(infoTextValues.computersTurn));
  };

  const playOpponentCard = () => {
    setIsShownState(true);
    setTimeout(() => {
      dispatch(removeOpponentCard({ shape, number }));
      dispatch(updateActiveCard({ shape, number }));
      if (number === 1 || number === 8) {
        return;
      }

      // Pick 2
      if (number === 2) {
        goToMarket("user", marketConfig, 2);
        dispatch(setInfoText(infoTextValues.userPickedTwo));
        return;
      }

      // Pick 3
      if (number === 5) {
        goToMarket("user", marketConfig, 3);
        dispatch(setInfoText(infoTextValues.userPickedThree));
        return;
      }

      // General Market
      if (number === 14) {
        goToMarket("user", marketConfig, 1);
        dispatch(setInfoText(infoTextValues.userReceivedGeneralMarket));
        return;
      }

      dispatch(setWhoIsToPlay("user"));
      dispatch(setInfoText(infoTextValues.usersTurn));
    }, delay);
  };

  return [playUserCard, playOpponentCard];
}

export default usePlayCardFunctions;
