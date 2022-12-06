import { api } from './index'

export const getAllTasks = async () => {
  const response = await api.get('/tasks')

  return response.data
}

export const postTask = async (task) => {
  const response = await api.post('/tasks', task)

  return response.data
}

export const deleteTask = async (id) => {
  const response = await api.delete(`/tasks/${id}`)

  return response.data
}

export const updateTask = async (id, data) => {
  const response = await api.put(`/tasks/${id}`, data)

  return response.data
}