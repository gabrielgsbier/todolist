import {ButtonS, ButtonD, ButtonI2, Tit, Div1, InputS, Lis} from './styled-comp.js'
import {useState} from 'react'
import {useRouter} from 'next/router';

const Todolist = () => {
    const [userInput, setUserInput] = useState('')
    const [todoList, setTodoList] = useState([])
    const roteamento = useRouter();

    const Change = (e) => {
        e.preventDefault() 

        setUserInput(e.target.value)
        console.log(userInput)
    }

    const Submit = (e) => {
        e.preventDefault()
        setTodoList([
            userInput, ...todoList
        ])
        setUserInput('')
    }

    const Delete = (todo) => {
        const upArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo))
        setTodoList(upArr)
    }
    
    return (
        <Div1>
            <ButtonI2 onClick={() => roteamento.push('/')}>Voltar ao inicio</ButtonI2>
            <Tit>To Do NextJS</Tit>
            <form>
                <InputS type="text" value={userInput} placeholder='Digite uma tarefa' onChange={Change}/>
                <br/><ButtonS onClick={Submit}>Adicionar Tarefa</ButtonS>
            </form>
            <ul>
                {
                todoList.length >= 1 ? todoList.map((todo, index) => {
                    return <Lis key={index}>{todo}<ButtonD onClick={(e) => {
                        e.preventDefault()
                        Delete(todo)}}>Delete</ButtonD></Lis>
                })
                : 'Coloque uma tarefa a fazer'
                }
            </ul>
        </Div1>
    )
}

export default Todolist


















/*import {useState} from 'react';
import styled, { css } from 'styled-components';

const ButtonS = styled.button`
display: inline-block;
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
display: block;
`;

export default () => {
    const [todos, setTodos] = useState(["todo 1", "todo 2", "todo 3"]);
    const [todo, setTodo] = useState("");
    const removeTodo = todo => {
        setTodos(todos.filter(t => t != todo));
    };
    return(
        <>
        <input value={todo} onChange={e => setTodo(e.target.value)}/>
        <button onClick={() => setTodos([...todos, todo])}>Add</button>
        {todos.map((todo, index) => (
        
        <>
        <h1>{todo}</h1>
        <button onClick={() => removeTodo(todo, index)}>Remove</button>
        
        </>
        ))}
        </>
    );
};*/