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

interface IBestData {
  id: number
  url: string
  name: string
  likes: number
  shortName: string
}

const data: IBestData[] = [
  {
    id: 1,
    url: 'https://recruit.navercorp.com/share/tmplat/naver/img/og/Careers_OG_800.png',
    name: '네이버 대규모 경력 채용',
    likes: 9200,
    shortName: '네이버',
  },
  {
    id: 2,
    url: 'https://careers.gmarket.com/img/opengraph.png',
    name: '지마켓 하반기 경력 채용',
    likes: 2400,
    shortName: '지마켓',
  },
  {
    id: 3,
    url: 'https://yt3.googleusercontent.com/ytc/AGIKgqNCpLTnSRndhXPfGV8vPA1zXqyl6MdygfwHHEgl=s900-c-k-c0x00ffffff-no-rj',
    name: '쿠팡 테크본부 대규모 채용',
    likes: 1590,
    shortName: '쿠팡',
  },
]

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
            {data.map((o) => (
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
          </Container>{' '}
        </BestInner>
      </Wrapper>
    </BestContainer>
  )
}

export default BestComponent
