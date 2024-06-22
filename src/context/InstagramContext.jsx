import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
//immer imports
import { produce } from "immer";

const InstagramContext = createContext(null);
export const useInstagram = () => useContext(InstagramContext);

const InstagramContextProvider = ({ children }) => {
  // instagram Reducer
  const InstagramReducer = (state, action) => {
    switch (action.type) {
      case "LOADING":
        return produce(state, (draft) => {
          draft.loading = action.payload;
        });
        break;

      case "SET":
        return produce(state, (draft) => {
          draft.downloadObj = action.payload;
        });
        break;
      case "ERROR":
        return produce(state, (draft) => {
          draft.error = action.payload;
        });
        break;
      case "RESET":
        return produce(state, (draft) => {
          draft.inputURL = "";
          draft.downloadObj = {
            video: "",
            thumb: "",
          };
          draft.loading = false;
          draft.error = "";
        });
        break;

      default:
        return state;
    }
  };
  const [instagramState, dispatch] = useReducer(InstagramReducer, {
    inputURL: "",
    downloadObj: {
      video: "",
      thumb: "",
    },
    loading: false,
    error: "",
  });

  // async downloader function
  const getDownloadURL = async (inputURL) => {
    dispatch({ type: "LOADING", payload: true });
    const serverURL =
      "https://social-media-downloader-server.vercel.app/instagram";
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    const data = { url: inputURL };

    await axios.post(serverURL, data, { headers }).then((res) => {
      if (JSON.parse(res.data).hasOwnProperty("video")) {
        dispatch({ type: "SET", payload: JSON.parse(res.data) });
      } else if (JSON.parse(res.data).hasOwnProperty("error")) {
        dispatch({ type: "ERROR", payload: JSON.parse(res.data).error });
      }
      dispatch({ type: "LOADING", payload: false });
    });
    return;
  };

  //reset instagramState
  const resetState = () => {
    dispatch({ type: "RESET" });
  };

  //hhandle rest
  const handleReset = () => {
    resetState();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <InstagramContext.Provider
      value={{
        dispatch,
        instagramState,
        getDownloadURL,
        resetState,
        handleReset,
      }}>
      {children}
    </InstagramContext.Provider>
  );
};

export default InstagramContextProvider;
