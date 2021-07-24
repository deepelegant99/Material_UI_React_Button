import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { Save, Delete } from "@material-ui/icons";
import { React, useState } from "react";

function App() {
  const [checked, setChecked] = useState(true);

  const CheckboxExample = () => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            inputProps={{
              "arial-label": "secondary checkbox",
            }}
            color="primary"
            // disabled
            icon={<Save />}
          />
        }
        label="Testing Textbox"
      />
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <CheckboxExample />
        <ButtonGroup variant="contained" size="large">
          <Button
            startIcon={<Save />}
            onClick={() => alert("Save Something")}
            color="primary"
            href="#"

            // disabled
            // style={{
            //   fontSize: 25
            // }}
          >
            Save
          </Button>
          <Button
            startIcon={<Delete />}
            onClick={() => alert("Delete Something")}
            color="secondary"
            href="#"
          >
            Delete
          </Button>
        </ButtonGroup>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
