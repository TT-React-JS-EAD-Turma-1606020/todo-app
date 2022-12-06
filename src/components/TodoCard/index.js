import { deleteTask, updateTask } from '../../api/task'
import { Container, Text } from './styles'

export const TodoCard = ({ title, status, id, onAfterDelete, onAfterUpdate }) => {

  const handleClickDelete = async () => {
    await deleteTask(id)
    onAfterDelete()
  }

  const handleClickDone = async () => {
    await updateTask(id, { status: true })
    onAfterUpdate()
  }

  return (
    <Container>
      <button onClick={handleClickDone}>Concluir</button>

      <Text done={status}>{title}</Text>

      <button onClick={handleClickDelete}>Delete</button>
    </Container>
  )
}