import styled from 'styled-components'
import { blue, lightBlue } from '../../constants/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: .24rem;
`

export const StyledInput = styled.input`
  outline: none;
  border-radius: 8px;
  padding: 0.5rem .75rem;
  border: 2px solid ${blue};
  background-color: ${lightBlue};
`