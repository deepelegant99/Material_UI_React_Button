import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonGroup } from "@material-ui/core";
import { Save, Delete } from "@material-ui/icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
