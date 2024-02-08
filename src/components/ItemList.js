import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/ListSlice";
import { useState } from "react";
const count=0;

const ItemList = ({item}) => {
    
    const dispatch = useDispatch();
    function removeValue()
    {
        dispatch(remove(item))
    }

    
    const [increment, setIncrement] = useState(0);
    const [visited, setVisited] = useState(false);

    function colorHandler(){
        
        if(!visited)
        {
            setVisited(true)
        }
        else
        {
            setVisited(false);
        }
        
    }

    

    return(

        <div>

                <div className="flex max-md:flex-col max-lg:flex-row justify-between border border-black lg:w-[25rem] md:w-[18rem]  py-3 px-3 bg-white" style={ visited ? {background: "lightgreen"} : {background: "white"} } >

                    <div>
                        <input type="checkbox"  onClick={colorHandler} />
                    </div>
                    <h2 className="font-bold text-xl" >{item}</h2>
                    <div>
                        <button onClick={removeValue} className="px-2 py-1 bg-red-600 text-white">remove</button>
                    </div>
                </div>

        </div>
            
    )
}

export default ItemList;