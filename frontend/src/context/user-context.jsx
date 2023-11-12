import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [customerInfo, setCustomerInfo] = useState({});

  const customerSignIn = (fname, lname, addr, mail, pass, admin) => {
    setCustomerInfo({
      firstName: fname,
      lastName: lname,
      adress: addr,
      email: mail,
      password: pass,
      isAdmin: admin,
    });
  };

  // if JSON.stringify(customerInfo) === "{}" then you know the user hasn't signed in
  const customerSignOut = () => {
    setCustomerInfo({});
  };

  return (
    <UserContext.Provider
      value={{ customerInfo, setCustomerInfo, customerSignIn, customerSignOut }}
    >
      {children}
    </UserContext.Provider>
  );
}
