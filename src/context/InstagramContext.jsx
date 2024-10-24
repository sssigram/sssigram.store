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
            error: false,
            hosting: "",
            shortcode: "",
            caption: "",
            type: "",
            download_url: "",
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
      error: false,
      hosting: "",
      shortcode: "",
      caption: "",
      type: "",
      download_url: "",
      thumb: "",
    },
    loading: false,
    error: "",
  });

  // async downloader function
  const getDownloadURL = async (inputURL) => {
    dispatch({ type: "LOADING", payload: true });

    const options = {
      method: "GET",
      url: "https://full-downloader-social-media.p.rapidapi.com/",
      params: {
        url: inputURL,
      },
      headers: {
        "x-rapidapi-key": "1b7dc89b38msha19da7d84c9af6ep130cbbjsn6b35764d0ccc",
        "x-rapidapi-host": "full-downloader-social-media.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      if (response.data) {
        dispatch({ type: "SET", payload: response.data });
      } else {
        dispatch({ type: "ERROR", payload: "Please Enter Valid URL...!" });
      }
    } catch (error) {
      console.log("err");
      console.error(error);
      dispatch({ type: "ERROR", payload: "Something went Wrong...!" });
    }
    dispatch({ type: "LOADING", payload: false });

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
