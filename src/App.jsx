import { DragDropContext } from "react-beautiful-dnd";
import Home from "./components/Home/Home";

function App() {
  let onDragEnd = (result) => {
    console.log(result);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Home />
    </DragDropContext>
  );
}

export default App;
