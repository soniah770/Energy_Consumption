import { Typography, Box, useTheme } from "@mui/material";
import {tokens} from "../theme";
import LogoPNG from "../images/Images/dschool-logo-new-colour.png";
//changed
//change2
const Logo = ({title, subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
console.log(LogoPNG)
    return (
        <div className="logo">
        </div>
    );
};

export default Logo;