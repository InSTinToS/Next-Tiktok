import styled from 'styled-components'

interface ButtonProps {
  outlined: boolean
}

export const Container = styled.button<ButtonProps>`
  width: 100%;
  height: 100%;

  font-size: 14px;
  font-weight: 700;

  background-color: ${props => (props.outlined ? 'white' : '#fe2c55')};
  border: ${props => (props.outlined ? 'solid 1px #fe2c55' : 'none')};
  color: ${props => (props.outlined ? '#fe2c55' : 'white')};

  cursor: pointer;

  :hover {
    background-color: ${props =>
      props.outlined ? 'rgba(22,24,35,0.03)' : '#fe2c55'};
  }
`
