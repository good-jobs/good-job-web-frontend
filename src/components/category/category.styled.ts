import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin: 0px auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  margin-top: 98px;
`

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const InnerWrapper = styled.div`
  width: 75%;
  height: 100%;
`

const Headtext = styled.div`
  font-size: 1.2rem;
  color: #fff;
  margin-left: 32px;
`

const TextWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

const BoldText = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: #fff;
  width: 100%;
  margin-left: 32px;
  margin-top: 4px;
`

const Text = styled.div`
  width: 30%;
  padding: 10px;
  font-size: 16px;
`

const SliderWrapper = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SliderContainer = styled.div`
  height: 100%;
  width: 100%;
`

interface CardBoxProps {
  isActive: boolean
}

const CardBoxWrapper = styled.div<CardBoxProps>`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease-in-out;
  transform-origin: bottom;
  transform: ${({ isActive }) => (isActive ? 'scale(1.2)' : 'scale(0.9)')};
`

const BackgroundCard = styled.div`
  background: #e8f0ef;
  height: 80%;
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
`

interface ImageProps {
  isActive: boolean
}

const Image = styled.img<ImageProps>`
  width: 224px;
  height: auto;
  position: absolute;
  bottom: -4px;
  left: 0;
  user-select: none;
  transition: all 0.3s ease-in-out;
  transform-origin: bottom;
  cursor: pointer;
  transform: ${({ isActive }) =>
    isActive ? 'scale(1.1) translateY(-220px)' : 'scale(1) translateY(0px)'};
`

interface ItemTextProps {
  isActive: boolean
}

const ItemText = styled.div<ItemTextProps>`
  position: absolute;

  right: 20px;
  bottom: 30%;
  display: flex;
  flex-direction: column;
  width: 80%;
  user-select: none;

  h3 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 12px;
  }

  div {
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    font-size: 14px;
  }
`

export {
  Container,
  ContentWrapper,
  InnerWrapper,
  Headtext,
  TextWrapper,
  BoldText,
  Text,
  SliderWrapper,
  SliderContainer,
  CardBoxWrapper,
  BackgroundCard,
  Image,
  ItemText,
}
