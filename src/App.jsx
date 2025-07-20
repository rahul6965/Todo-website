import './App.css'
import Addtodo from './Components/Add-todo'
// import Completelsit from './Components/Complete-lsit'
import Header from './Components/Header'
import { Todoprovider } from './store/store.jsx';

// import Todoitem from './Components/Todo-item'

function App() {
  return (
    <div className="container2 shadow">
      <Todoprovider>
        <Header />
        <Addtodo />
      </Todoprovider>
      {/* <Completelsit /> */}
    </div>
  );
}

export default App;
