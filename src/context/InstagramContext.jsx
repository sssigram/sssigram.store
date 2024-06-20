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
      case "SET":
        return produce(state, (draft) => {
          draft.downloadURL = action.payload;
        });

      default:
        return state;
    }
  };
  const [instagramState, dispatch] = useReducer(InstagramReducer, {
    inputURL: "",
    downloadURL: "",
    loading: false,
  });

  // async downloader function
  const getDownloadURL = async (inputURL) => {
    dispatch({ type: "LOADING", payload: true });
    const serverURL = "http://localhost:5050/instagram";
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    const data = { url: inputURL };

    await axios.post(serverURL, data, { headers }).then((res) => {
      dispatch({ type: "SET", payload: JSON.parse(res.data).downloadURL });
      dispatch({ type: "LOADING", payload: false });
    });
    return;
  };
  return (
    <InstagramContext.Provider
      value={{ dispatch, instagramState, getDownloadURL }}>
      {children}
    </InstagramContext.Provider>
  );
};

export default InstagramContextProvider;
