import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../ProductReducer/ProductReducer";
import productReducer from "../ProductReducer/ProductReducer";

const Context = createContext();
const ApiUrl = "https://api.pujakaitem.com/api/products";
const AppProvider = (props) => {
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoding: false,
    singleproducts: {},
  };
  const s = "About Us";
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { ...state };
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  // my 2n api call for single product
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleproducts = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleproducts });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(ApiUrl);
  }, []);

  return (
    <Context.Provider value={{ ...state, getSingleProduct }}>
      {props.children}
    </Context.Provider>
  );
};
const useProductContaxt = () => {
  return useContext(Context);
};

export { Context, AppProvider, useProductContaxt };
//  https://api.pujakaitem.com/api/products
