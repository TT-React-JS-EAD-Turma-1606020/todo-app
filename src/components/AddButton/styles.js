import styled from 'styled-components'
import { blue, white } from '../../constants/colors'

export const StyledButton = styled.button`
  outline: none;
  border-radius: 8px;
  height: 36px;
  width: 36px;
  background-color: ${blue};
  border: none;
  color: ${white};
  cursor: pointer;
  transition: filter .2s;

  :hover {
    filter: brightness(80%);
  }
`