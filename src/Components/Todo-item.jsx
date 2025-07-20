import EditTodoItem from "./Edit-todo"


export default function Todoitem({ todolist, deletebtn, markDone }) {

    return (
        <>
        <div><h3>Todo Item</h3>
            <ul id="incomplete-tasks">
                {todolist.map((item,index) => (
                    !item?.complete &&
                    <EditTodoItem key={index} index={index} item={item} markDone={markDone} deletebtn={deletebtn} />
                ))}
            </ul>
        </div>
        <div>
            <h3>Completed</h3>
            <ul id="incomplete-tasks cus_line">
                {todolist.map((item,index) => (
                item?.complete &&
                    <EditTodoItem key={index} index={index} item={item} markDone={markDone} deletebtn={deletebtn} />
                ))}
            </ul>
        </div>
        </>
    )
}
