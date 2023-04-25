import React, { useState } from 'react'
import {
  BestContainer,
  Wrapper,
  BestInner,
  Side,
  Container,
  ShortName,
  TextWrapper,
  LookigSubject,
  Likes,
  Text,
  SearchWrapper,
  SearchInput,
  SearchButtom,
  ItemWrapper,
  Item,
  ContentWrap1,
  CorpName,
  ContentWrap2,
  CorpInfo,
} from './best.styled'

import { bestCorps } from '../../dummy/best'

// interface IBestData {
//   id: number
//   url: string
//   name: string
//   likes: number
//   shortName: string
// }

function BestComponent(): JSX.Element {
  const [activeItem, setActiveItem] = useState(1)

  const handleHover = (id: number): void => {
    setActiveItem(id)
  }

  const handleHoverLeave = (): void => {
    setActiveItem(1)
  }

  return (
    <BestContainer>
      <Wrapper>
        <BestInner>
          <Side>
            <TextWrapper>
              <Text>실시간</Text>
              <Text>베스트.</Text>
              <Text>기업.</Text>
            </TextWrapper>
            <SearchWrapper>
              <SearchInput placeholder="찾고있는 회사를 입력해주세요." />
              <SearchButtom>Go</SearchButtom>
            </SearchWrapper>
          </Side>
          <Container>
            {bestCorps.map((o) => (
              <ItemWrapper
                key={o.id}
                onMouseOver={() => handleHover(o.id)}
                onMouseLeave={handleHoverLeave}
                isActive={o.id === activeItem}
              >
                <Item
                  style={{ backgroundImage: `url(${o.url})` }}
                  isActive={o.id === activeItem}
                >
                  <ContentWrap1
                    isActive={o.id === activeItem}
                    isFirst={o.id === 1}
                  >
                    <CorpName>{o.name}</CorpName>
                    <CorpInfo>
                      <LookigSubject>{o.likes}</LookigSubject>
                      <Likes>likes</Likes>
                    </CorpInfo>
                  </ContentWrap1>
                  <ContentWrap2
                    isActive={o.id === activeItem}
                    isFirst={o.id === 1}
                  >
                    <ShortName>{o.shortName}</ShortName>
                  </ContentWrap2>
                </Item>
              </ItemWrapper>
            ))}
          </Container>
        </BestInner>
      </Wrapper>
    </BestContainer>
  )
}
export default BestComponent
