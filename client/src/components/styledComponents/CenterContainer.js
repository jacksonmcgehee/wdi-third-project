import styled from 'styled-components'

const CenterContainer = styled.div`
  height: 52vh;
  width: 100%;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;

  @media (max-height: 750px) {
    height: 45vh;
  }

`

export default CenterContainer