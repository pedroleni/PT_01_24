import { createMuiTheme } from "@material-ui/core";
import { purple } from "@material-ui/core";
import { deepOrange } from "@material-ui/core";

export const theme = () => {
    createMuiTheme({
        palette: {
            primary: deepOrange,
            secondary: purple,
        },
    })
};
