import React from "react";
import { ContextProvider } from "./Context";
import List from "./List";

const CrudIndex = () => {
  return (
    <ContextProvider>
      <List />
    </ContextProvider>
  );
};

export { CrudIndex }