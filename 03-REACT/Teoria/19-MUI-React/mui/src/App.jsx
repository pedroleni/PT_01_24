import './App.css'
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  boton: {
    background: "coral",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

export const App =() => {

  const classes = useStyle();

  return (
    <>
      <Typography variant="h1">HolaMundo</Typography>
      <Button className={classes.boton}>Estamos probando useStyle</Button>
    </>
  )
}
