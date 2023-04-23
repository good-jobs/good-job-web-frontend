import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;

  > p {
    text-align: center;
    font-size: 2rem;
  }
`

export const Header = styled.h1`
  font-size: 6rem;
  font-weight: 800;
  color: #fff;
  text-align: center;
  margin: 62px 0 32px;
  text-align: center;
  position: relative;

  &::before {
    top: -36px;
    font-size: 2.4rem;
    position: absolute;
    font-weight: 600;
    content: 'GOOD JOB';
    color: #e8e8e8;
  }
`
