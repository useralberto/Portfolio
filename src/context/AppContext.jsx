import { createContext, useState } from "react";

export const AppContext = createContext({
  ThemeDark: false,
});

export const AppProvider = function (props) {
  const [ThemeDark, setThemeDark] = useState(false);
  const { children } = props;
  const valueContext = {
    ThemeDark,
    setThemeDark,
  };
  return (
    <AppContext.Provider value={valueContext}>{children}</AppContext.Provider>
  );
};
