import { useEffect } from "react";
import axios, * as other from "axios";

// Login status check function
export const isLoggedIn = () => {
  // Checking userToken is set in localStorage or not
  if (typeof window !== "undefined" && localStorage.getItem("userToken")) {
    // For temporary returning true
    return true;

    // Hitting request to api (just for validating user token is ok or not)
    /* axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&request=checkUserToken&data=${localStorage.getItem("userToken")}`
      )
      .then((res) => {
        if (res.data.status === 1) {
          return true;
        } else {
          return false;
        }
      })
      .catch(() => {
        return false;
      }); */
    /////////////////////////////////////////////
    // TODO: Fix the undefined problem
    ////////////////////////////////////////////
  } else {
    return false;
  }
};

// Logout function
export const Logout = () => {
  if (localStorage.getItem("userToken")) {
    // Remove user token from local storage if isset
    localStorage.removeItem("userToken");
  }

  // Returing output
  return true;
};
