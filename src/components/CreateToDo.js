import React, {  useState } from "react";
import TodoList from "./TodoList";
import swal from "sweetalert";
import ItemList from "./ItemList";

const data = [
  { slug: "tshirt", name: "Tshirt", checked: false },
  { slug: "watch", name: "G-Shock", checked: false },
];
function CreateToDo(){

    const [todo,setTodo] =useState({title:"",done:false})
    const [todoArr,setTodoArr]=useState([])


    let todos = localStorage.hasOwnProperty("todos") 
        ? JSON.parse(localStorage.getItem("todos"))
        :[]

    const onChange =(event)=>{
        let {value}= event.target
        let obj ={}
        obj["title"]=value
        obj["done"]= false
        setTodo(obj)
    }

    const createToDo = (event)=>{
        const {name} =event.target
        if(event.key ==="Enter" || name === "addToDo"){
            if(todo.title !== ""){
                todos.unshift(todo)
                localStorage.setItem('todos', JSON.stringify(todos))
                setTodo({title: "",done: false})
            }else{
                swal("Oops", "Please write todo first", "error")
            }
            }
        }
    
        const completeTodo = (i) => {
            if(todos[i]["done"] !== true){
                todos[i]["done"] =true
                localStorage.setItem("todos",JSON.stringify(todos))
                setTodoArr(todos)
                swal("Good job!", "Todo Completed", "success");
            }
        }

        const deleteTodo =(i) =>{
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this file!",
                icon: "warning",
                buttons: true,
                dangerMode:true
            }).then(res =>{
                if(res){
                    todos.splice(i,1)
                    localStorage.setItem('todos',JSON.stringify(todos))
                    setTodoArr(todos)
                }
            })
        }
    
  
const[item,setItem]=useState([data]);
                
        const handleSelectAll = (slug) => {
          const copyTodos = [...item];
          const modifiedTodos = copyTodos.map((todo) => {
            if (slug === todo.slug) {
              todo.checked = !todo.checked;
            }
          });
      
          setItem(modifiedTodos);
        }; 

       const handleRemove=()=>{
        const copyTodos=[...item];
        const modifiedTodos = copyTodos.filter(
          (todo)=> todo.checked !== true
        );
        setItem(modifiedTodos);
       }
        
        
          


    return(
      
        <>
        <div className="box">
        <div className="text-end">

            <h2>ToDo List</h2>
        </div>
        <div className="text-addToDo">
           

            <input type="text" name="todo" placeholder="Write here..." 
            value={todo.title} onKeyPress={createToDo} onChange={onChange}/>
            <button className="btn-addToDo" type="button" name="addToDo" onClick={createToDo}>Add</button>
        </div>
</div>

 

       {/*  <button    type="button" onClick={completeTodo}>done</button>
        <button type="button"  onClick={()=>handleRemove()}>delete</button> */}
        {item &&
        item.map((todo, idx) => (
          <ItemList key={idx} todo={todo} handleChange={handleSelectAll} />
        ))}
        <TodoList todoArr={todoArr} 
      
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}/>
        </>
    );
}
export default CreateToDo;


























  /* const onSelect=(value, event) =>{
            if (event.action === "select-option" && event.option.value ===
            "*") {
               this.setState(this.options);
            } else if (event.action === "deselect-option" &&
            event.option.value === "*") {
              this.setState([]);
            } else if (event.action === "deselect-option") {
              this.setState(value.filter(o => o.value !== "*"));
            } else if (value.length === this.options.length - 1) {
              this.setState(this.options);
            } else {
              this.setState(value);
            }
          }  */
        
        /*  const handleChange = e => {
            let itemName = e.target.name;
            let checked = e.target.checked;
            this.setState(prevState => {
              let { list, allChecked } = prevState;
              if (itemName === "checkAll") {
                allChecked = checked;
                list = list.map(item => ({ ...item, isChecked: checked }));
              } else {
                list = list.map(item =>
                  item.name === itemName ? { ...item, isChecked: checked } : item
                );
                allChecked = list.every(item => item.isChecked);
              }
              return { list, allChecked };
            });
          }; */

 

         /*  const handleSelectAll = e => {
            setIsCheckAll(!isCheckAll);
            setIsCheck(list.map(li => li.id));
            if (isCheckAll) {
              setIsCheck([]);
            }
          };
        
          const handleClick = e => {
            const { id, checked } = e.target;
            setIsCheck([...isCheck, id]);
            if (!checked) {
              setIsCheck(isCheck.filter(item => item !== id));
            }
          };
        
          console.log(isCheck);





const handleChange=(e)=>{
          const{name,checked}=e.target;
          if(name=== "allSelect"){
            let tempData = todos.map((todos) => {
              return { ...todos, isChecked: checked };
            });
            setTodo(tempData);
          } else {
            let tempData = todos.map((todos) =>
              todos.name === name ? { ...todos, isChecked: checked } : todos
            );
            setTodo(tempData);
          }
        }




         */
        

      /*   const data = [
          { slug: "tshirt", name: "Tshirt", checked: false },
          { slug: "cup", name: "White Mug", checked: false },
          { slug: "watch", name: "G-Shock", checked: false },
          { slug: "shorts", name: "Hawaiian Shorts", checked: false }
        ]; */

        
       /*  const handleSelectAll = (slug) => {
          const copyTodos = [...todos];
          const modifiedTodos = copyTodos.map((todo) => {
            if (slug === todo.slug) {
              todo.checked = !todo.checked;
            }
          });
      
          setTodoArr(modifiedTodos);
        }; */


        
     {/*   <div>
        <input type="checkbox"  name="allSelect" checked={!todos.some((todos) => todos?.isChecked !== true)}
            onChange={}/>
            
        <button type="button" >all select</button> 
        
</div> */}
       {/*  {todos.map((todos, index) => (
          <div className="todo-list" key={index}>
            <input
              type="checkbox"
              className="todo-list"
              name={todos.name}
              checked={todos?.isChecked || false}
              onChange={handleChange}
            />
             <label className="todo-list">{todos.name}</label> 
          </div> 
         ))}  

 */}