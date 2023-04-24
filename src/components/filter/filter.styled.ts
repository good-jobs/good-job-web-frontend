import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const TextWrapper = styled.div`
  line-height: 80px;
  margin-top: 100px;
`

const Text = styled.div`
  font-size: 80px;
  color: #fff;
  font-weight: 600;
`
const NeoButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 820px;
  gap: 20px;
  max-height: 100px;
  margin-top: 160px;
  label {
    position: relative;
    width: 128px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  label input {
    appearance: none;
    display: none;
  }

  label input:checked ~ span {
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.35),
      inset 0 5px 5px rgba(0, 0, 0, 0.5), inset 0 15px 25px rgba(0, 0, 0, 0.35);
  }
  label span {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(#555353, #363535, #303030);
    border: 2px solid #222;
    border-radius: 6px;
    box-shadow: inset 0 5px 1px rgba(0, 0, 0, 0.35),
      0 5px 5px rgba(0, 0, 0, 0.5), 0 15px 25px rgba(0, 0, 0, 0.35);

    &:before {
      content: '';
      position: absolute;
      inset: 5px 3px;
      border-top: 1px solid #ccc;
      filter: blur(2px);
    }
  }

  label p {
    position: relative;
    z-index: 10;
    color: #111;
    font-size: 20px;
    color: #adb5bd;
    font-weight: 600;
  }

  label input:checked ~ p {
    color: #fff;
    text-shadow: 0 0 5px #219cf3, 0 0 8px #219cf3;
  }
`

export { Container, NeoButtonWrap, TextWrapper, Text }
