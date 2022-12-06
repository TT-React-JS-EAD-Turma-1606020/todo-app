import { useEffect, useState } from "react"
import { getAllTasks, postTask } from "../../api/task"
import { AddButton } from "../../components/AddButton"
import { Input } from "../../components/Input"
import { Title } from "../../components/Title"
import { TodoCard } from "../../components/TodoCard"
import { Body, Container, FormContainer, TodoContainer } from './styles'

export const Home = () => {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleChangeNewTodo = (e) => {
    const value = e.target.value

    setNewTodo(value)
  }

  const handleAddTodo = async () => {
    const todoToCreate = {
      title: newTodo,
      status: false,
    }

    await postTask(todoToCreate)

    setNewTodo('')

    handleGetTodos()
  }

  const handleGetTodos = async () => {
    const data = await getAllTasks()

    setTodos(data)
  }

  useEffect(() => {
    handleGetTodos()
  }, [])

  return (
    <Container>
      <Body>
        <Title text='Lista de tarefas' />

        <FormContainer>
          <Input name='title' label='Titulo da tarefa' value={newTodo} onChange={handleChangeNewTodo} />

          <AddButton onClick={handleAddTodo} >Add</AddButton>
        </FormContainer>

        <TodoContainer>
          {todos.map(todo => {
            return (
              <TodoCard title={todo.title} id={todo.id} key={todo.id} onAfterDelete={handleGetTodos} onAfterUpdate={handleGetTodos} status={todo.status} />
            )
          })}
        </TodoContainer>
      </Body>
    </Container>
  )
}