import { createContext, useRef, useState,useEffect } from "react";

// 1. Create the context
export const todocontext = createContext();

// 2. Create the provider component
export const Todoprovider = ({ children }) => {
  const inputdata = useRef(); 
  const [todolist, settodolist] = useState([]);

  // ✅ Add todo
  const addtodo = () => {
    const targetinput = inputdata.current.value.trim();
    if (targetinput === "") return;
    settodolist([...todolist, { val: targetinput, complete: false }]);
    inputdata.current.value = "";
  };

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todolist));
}, [todolist]);

  // ✅ Delete todo
  const deletebtn = (itemToDelete) => {
    const updated = todolist.filter(item => item !== itemToDelete);
    settodolist(updated);
  };

  // ✅ Mark as done/undone
 const markDone = (itemToDelete, index) => {
            console.log('itemToDelete', itemToDelete, index)
            const updated = todolist.map((item, i) => {
                if (i === index) {
                    return {
                        ...item,
                        complete: !item?.complete
                    };
                }
                return item;
            });
            settodolist(updated);
        };
    

  return (
    <todocontext.Provider value={{ inputdata, todolist, addtodo, deletebtn, markDone }}>
      {children}
    </todocontext.Provider>
  );
};
