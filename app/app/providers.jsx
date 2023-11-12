"use client";

import { ShopContextProvider, UserContextProvider } from "components/contexts";

export function Providers({ children }) {
  return (
    <ShopContextProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </ShopContextProvider>
  );
}
