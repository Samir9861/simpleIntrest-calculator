import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import "./index.css";

const App = () => {
  const [P, setp] = useState(0);
  const [T, setT] = useState(0);
  const [R, setR] = useState(0);
  const [si, setsi] = useState();

  const calculateIntrest = () => {
    setsi((P * T * R) / 100);
  };
  return (
    <div className="div">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Intrest Calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <br></br>
      <TextField
        onChange={(event) => setp(event.target.value)}
        id="outlined-basic"
        label="Enter P"
        variant="outlined"
      />
      <br></br>
      <TextField
        onChange={(event) => setT(event.target.value)}
        id="outlined-basic"
        label="Enter T"
        variant="outlined"
      />
      <br></br>
      <TextField
        onChange={(event) => setR(event.target.value)}
        id="outlined-basic"
        label="Enter R"
        variant="outlined"
      />
      <br></br>

      <Button onClick={() => calculateIntrest()} variant="contained">
        Calculate
      </Button>

      <Typography variant="h6" gutterBottom component="div">
        your result is :{si}
      </Typography>
    </div>
  );
};

export default App;
