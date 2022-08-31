import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: rgb(239, 239, 239);
  box-shadow: rgb(193 193 198) -1px -1px 2px, rgb(255 255 255) 1px 1px 2px;
  border-radius: 5px;
`
export const Label = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  color: rgb(100, 100, 100);
`
export const PureInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  border: none;
  background-color: transparent;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`
