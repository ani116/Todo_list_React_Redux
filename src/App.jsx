import { useState } from "react";
import "./App.css";
import ItemList from "./components/ItemList";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./redux/slices/ListSlice";

function App() {

  const [inputValue, setInputValue] = useState("")
  const {list} = useSelector( (state) => state )

  const dispatch = useDispatch();

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };
  
  function addingValue()
  {
    if(inputValue !== "")
    {
      dispatch(add(inputValue));
    }
     // Dispatch the input value as payload
    setInputValue("");
  }

  
  return (
    <div className="w-11/12 max-w-[1200px]  h-screen m-auto text-center items-center flex flex-col justify-center gap-9">

      <div className="text-3xl font-bold">
        <h1>My ToDo List</h1>
      </div>

      <div className="space-y-4">

        <input type="text"
              placeholder="Add ToDo"
              onChange={changeHandler}
              value={inputValue}
              className="border border-black lg:w-[30rem] md:w-[20rem] p-2" 
        />

        <div>
      
            <button onClick={addingValue} className="py-1 px-7 bg-blue-600 text-white">Add</button>
          
        </div>

      </div>
      <div className="space-y-4">
        {
          list.map( (item, index) => <ItemList key={index} item={item} /> )
        }
      </div>
    </div>
  );
}

export default App;
