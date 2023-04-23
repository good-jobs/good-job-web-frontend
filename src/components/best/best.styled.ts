import styled from 'styled-components'

interface IItemWrapper {
  isActive: boolean
}
export const BestContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
`

export const Wrapper = styled.div`
  width: 1300px;
`

export const BestInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

export const Side = styled.div`
  font-size: 40px;
  position: relative;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  min-width: 600px;
  max-width: 930px;
  width: calc(100% - 100px);
  height: 600px;
`
export const ItemWrapper = styled.div<IItemWrapper>`
  position: relative;
  overflow: hidden;
  min-width: 150px;
  cursor: pointer;
  border-radius: 20px;
  padding: 0 20px;
  flex-grow: ${({ isActive }) => (isActive ? 4 : 1)};
  transition: all 0.6s ease;
`

interface IItem {
  isActive: boolean
}

export const Item = styled.div<IItem>`
  position: relative;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: auto ${({ isActive }) => (isActive ? '90%' : '100%')};
  border-radius: 20px;
  transition: all 0.6s ease;
  overflow: hidden;

  :after {
    content: '';
    display: block;
    position: absolute;
    height: 50%;
    width: 100%;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  }
`

interface IContentWrap {
  isActive: boolean
  isFirst: boolean
}

export const ContentWrap1 = styled.div<IContentWrap>`
  box-sizing: border-box;
  position: absolute;
  bottom: 80px;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 0 40px;
  padding-left: ${({ isFirst }) => (isFirst ? '100px' : '40px')};
  transition: all 0.6s ease;
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
`

export const CorpName = styled.div`
  font-size: 34px;
  color: #fff;
  font-weight: 600;
  word-break: keep-all;
  height: 100%;
  width: 10vw;
`

export const CorpInfo = styled.div`
  text-align: center;
  color: #fff;
`

export const LookigSubject = styled.div`
  font-size: 52px;
  line-height: 1;
`

export const Likes = styled.div`
  text-transform: uppercase;
`

export const ContentWrap2 = styled.div<IContentWrap>`
  width: 120px;
  height: 120px;
  background-color: #1e1e2f;
  color: #fff;
  position: absolute;
  left: 0;
  bottom: 60px;
  z-index: 1;
  transition: all 0.6s ease;
  opacity: ${({ isActive }) => (isActive ? '0' : '1')};
  display: ${({ isFirst }) => (isFirst ? 'none' : 'block')};
`

export const ShortName = styled.div`
  font-size: 34px;
  transform: rotate(-90deg);
`

export const TextWrapper = styled.div`
  line-height: 80px;
  margin-top: 90px;
`

export const Text = styled.div`
  font-size: 80px;
  color: #fff;
  font-weight: 600;
`
export const SearchWrapper = styled.div`
  position: absolute;
  bottom: 60px;
  height: 120px;
  width: 450px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s ease;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 46px 50px;

  :hover {
    transition: all 0.4s ease;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  }
`
export const SearchInput = styled.input`
  flex-grow: 1;
  height: inherit;
  outline: none;
  border: none;
  padding-left: 50px;
  box-sizing: border-box;
  font-size: 20px;

  ::placeholder {
    font-size: 20px;
    color: #1e1e2f;
    font-family: 'Archia-Regular';
    transition: all 0.4s ease;
  }

  :active {
    color: red;
  }

  :focus {
    ::placeholder {
      transition: all 0.4s ease;
      opacity: 0.5;
    }
  }
`
export const SearchButtom = styled.button`
  height: 100%;

  aspect-ratio: 1;
  outline: none;
  border: none;
  font-size: 34px;
  font-weight: 600;
  font-family: 'Archia-Regular';

  background: linear-gradient(to top, #97c680 50%, #feba88 50%);
  background-size: 100% 200%;
  background-position-y: -100%;
  transition: all 0.3s ease;
  user-select: none;
  cursor: pointer;

  :hover {
    background-position-y: 0%;
    transition: all 0.3s ease;
  }
`
