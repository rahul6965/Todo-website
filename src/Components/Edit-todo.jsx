import { useContext, useState } from "react";
import { todocontext } from "../store/store";

const EditTodoItem = ({ item, index }) => {
 const { markDone, deletebtn } = useContext(todocontext);
    //Edit todo item detail 
    const [isEditable, setisEditable] = useState(false)
    const [newValue, setNewValue] = useState(item?.val);


    //check and uncheck functionality
    function checkitem() {
        return { complete: false };
    }

    return (
        <li key={item}>
            <input
                type="checkbox"
                checked={item.complete} // or use false/true depending on the item
                 onClick={() => {   markDone(item, index);  checkitem(); }} />
            {!isEditable ? <label>{newValue}</label> : <input value={newValue} onChange={(e) => setNewValue(e.target.value)} readOnly={!isEditable} />}
            <button className="edit" onClick={() => setisEditable(!isEditable)}>{!isEditable ? "Edit" : "Save"}</button>
            <button className="delete" onClick={() => deletebtn(item)}>Delete</button>
        </li>
    );
};

export default EditTodoItem;
