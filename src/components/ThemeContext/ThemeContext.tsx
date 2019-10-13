import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { setSwitch } from "../../Actions";
import { lightTheme, darkTheme } from "../../Constants/Utils";

const ThemeContext = React.createContext({
  isDark: true,
  toggle: () => {}
});

interface IState {
  isDark: boolean;
}

const mapStateToProps = (state: IState) => ({ isDark: state.isDark });

const mapDispatchToProps = (dispatch: any) => ({
  setIsDark: (isDark: boolean) => dispatch(setSwitch({ isDark }))
});

interface IProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const ThemeProvider: React.FC<IProps> = ({ isDark, setIsDark, children }) => {
  // paints the app before it renders elements
  useLayoutEffect(() => {
    const applyTheme = (theme: Array<string>) => {
      const root = document.getElementsByTagName("html")[0];
      root.style.cssText = theme.join(";");
    };

    const themeToApply = isDark ? darkTheme : lightTheme;
    setIsDark(isDark);
    applyTheme(themeToApply);
    // if state changes, repaints the app
  }, [isDark, setIsDark]);

  const toggle = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggle
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeProvider);

export { ThemeContext };
