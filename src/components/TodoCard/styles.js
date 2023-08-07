import styled from 'styled-components'
import { darkBlue, white } from '../../constants/colors'

export const Container = styled.div`
  background-color: ${darkBlue};
  border-radius: 8px;
  padding: .5rem 1rem;
  color: ${white};
  display: flex;
  align-items: center;

  button {
    outline: none;
    border: none;
    border-radius: .25rem;
    background-color: white;
    color: black;
    padding: .25rem 1rem;
    cursor: pointer;
  }
`

export const Text = styled.span`
  font-weight: 600;
  margin-right: auto;
  margin-left: 1rem;

  text-decoration: ${({ done }) => done ? 'line-through' : 'none'};
`