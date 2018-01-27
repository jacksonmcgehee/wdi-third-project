import styled from 'styled-components'

const ButtonDiv = styled.div`
  height: 70px;
  width: 250px;
  background-color: white;
  color: #00B16A;
  font-size: 25px;
  border: .75px solid #00B16A;
  text-align: center;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 400px) {
    font-size: 18px;
    width: 175px;
  }

`

export default ButtonDiv