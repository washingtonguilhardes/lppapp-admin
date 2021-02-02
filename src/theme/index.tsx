import { createMuiTheme } from "@material-ui/core";

export const palette = {
  primary: {
    text: '#fff',
    main: '#009688',
    light: '#cceae7',
    // light: 'rgba(255,255,255,1)',
    dark: '#004c40',
  },
  secondary: {
    main: '#900000',
    light: '#c8412a',
    dark: '#5d0000',
  },
  accent: {
    main: '#900',
  },
};

export default createMuiTheme({
  palette
});

