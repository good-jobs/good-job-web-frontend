import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;

  > p {
    text-align: center;
    font-size: 2rem;
  }
`

export const Header = styled.h1`
  font-size: 4.6rem;
  font-weight: 800;
  color: #fff;
  text-align: center;
  margin-top: 60px;
  text-align: center;
  position: relative;

  &::before {
    top: -38px;
    font-size: 2rem;
    position: absolute;
    font-weight: 600;
    content: 'GOOD JOB';
    color: #e8e8e8;
  }
`
