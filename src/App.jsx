import { useState } from "react";
import "./App.css";
import Modal from "./components/modal";
import Tooltip from "./components/tooltip";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <h1 className="text-red-500">Hello World</h1>
      <button onClick={() => setOpen(true)}>Open</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        Modal
      </Modal>

      <div>
        <Tooltip message={"I'm a tooltip"}>
          <p>Hover me</p>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
