/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'

import {
  Container,
  ContentWrapper,
  InnerWrapper,
  Headtext,
  TextWrapper,
  BoldText,
  SliderWrapper,
  SliderContainer,
  CardBoxWrapper,
  BackgroundCard,
  Image,
  ItemText,
} from './category.styled'

const CategoryList = [
  {
    id: 1,
    title: '지마켓',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Gmarket_logo.svg/2560px-Gmarket_logo.svg.png',
    desc: '개발직군 주 3회, 비개발 주 2회 재택근무',
  },
  {
    id: 2,
    title: '카카오',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Kakao_CI_yellow.svg/2560px-Kakao_CI_yellow.svg.png',
    desc: '개발직군 주 1회, 팀장 재량 풀재택 가능',
  },
  {
    id: 3,
    title: '라인플러스',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/e0/LINE_Corporation_Logo.png',
    desc: '개발직군 풀재택, 비개발 주2회 재택근무',
  },
  {
    id: 4,
    title: 'Meta',
    image:
      'https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png',
    desc: '개발직군 풀재택, 비개발 주3회 재택근무',
  },
  {
    id: 5,
    title: '네이버',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Naver_Logotype.svg/2560px-Naver_Logotype.svg.png',
    desc: '개발직군 풀재택, 비개발 주3회 재택근무',
  },
  {
    id: 6,
    title: '쿠팡',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Coupang_logo.svg/1280px-Coupang_logo.svg.png',
    desc: '개발직군 풀재택, 비개발 주1회 재택근무',
  },
  {
    id: 7,
    title: '당근마켓',
    image:
      'https://blog.kakaocdn.net/dn/IEg5i/btrZtrDFf8k/ikhVhXz9EBHd9az6Le0xfK/img.png',
    desc: '개발직군 주2회 재택근무',
  },
  {
    id: 8,
    title: '직방',
    image: 'https://platum.kr/wp-content/uploads/2017/04/unnamed-8.png',
    desc: '전직군 풀재택 및 거점 오피스 시행',
  },
  {
    id: 9,
    title: '토스',
    image:
      'https://static.toss-internal.com/ipd-tcs/toss_core/live/428a6ee6-a3b9-41eb-bf36-06e4c2568cc9',
    desc: '개발직군 주3 재택근무',
  },
]

interface Item {
  id: number
  image: string
  title: string
  desc: string
}

function CategoryComponent() {
  const [active, setActive] = useState<number>(1)
  const [noOfItem, setNoOfItem] = useState<number>(6)

  const updateNoOfItems = (innerWidth: number) => {
    if (innerWidth < 599 || innerWidth < 899) {
      setNoOfItem(3)
    } else if (innerWidth < 1199) {
      setNoOfItem(4)
    } else {
      setNoOfItem(6)
    }
  }

  useEffect(() => {
    const handleResize = (e: UIEvent) => {
      updateNoOfItems((e.target as Window).innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const { carouselFragment, slideToItem, useListenToCustomEvent } =
    useSpringCarousel({
      itemsPerSlide: noOfItem,
      gutter: 28,
      withLoop: true,
      startEndGutter: 36,
      items: CategoryList.map(
        (item: Item, index: number) =>
          ({
            id: index,
            renderItem: (
              <CardBoxWrapper isActive={item.id === active}>
                <BackgroundCard />
                <Image
                  src={item.image}
                  isActive={item.id === active}
                  draggable={false}
                  onClick={() => {
                    setActive(item.id)
                    const checkIdx = CategoryList.findIndex(
                      (x) => x.id === item.id,
                    )
                    slideToItem(checkIdx)
                  }}
                />
                <ItemText isActive={item.id === active}>
                  <h3>{item.title}</h3>
                  <div>{item.desc}</div>
                </ItemText>
              </CardBoxWrapper>
            ),
          } as any),
      ),
    })

  useListenToCustomEvent((event) => {
    if (event.eventName === 'onSlideStartChange') {
      setActive(event.nextItem.index + 1)
    }
  })

  return (
    <Container>
      <ContentWrapper>
        <InnerWrapper>
          <Headtext>출퇴근 지옥으로 부터 해방.</Headtext>
          <TextWrapper>
            <BoldText>재택근무를 사랑하는 회사</BoldText>
          </TextWrapper>
        </InnerWrapper>
      </ContentWrapper>

      <SliderWrapper>
        <SliderContainer>{carouselFragment}</SliderContainer>
      </SliderWrapper>
    </Container>
  )
}

export default CategoryComponent
