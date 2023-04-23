import React from 'react'
import {
  Container,
  Wrapper,
  Marquee,
  MarqueeGroup,
  MarqueeGroup2,
  ImageGroup,
  Image,
} from './marquee.styled'

export default function MarqueeComponents() {
  const row1 = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Gmarket_logo.svg/2560px-Gmarket_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Kakao_CI_yellow.svg/2560px-Kakao_CI_yellow.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/e/e0/LINE_Corporation_Logo.png',
    'https://blog.kakaocdn.net/dn/dSZ7ZT/btraqRNzW03/KrrveWDjCkgnoUph1ASdi0/%EC%95%84%EC%9D%B4%EC%BD%98_%EB%A1%9C%EA%B3%A0%EC%A1%B0%ED%95%A9_%EC%9D%B8%EC%87%84%EC%9A%A9%28%EA%B3%A0%ED%95%B4%EC%83%81%EB%8F%84_CMYK%29.png?attach=1&knm=img.png',
    'https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Naver_Logotype.svg/2560px-Naver_Logotype.svg.png',
    'https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Coupang_logo.svg/1280px-Coupang_logo.svg.png',
    'https://blog.kakaocdn.net/dn/IEg5i/btrZtrDFf8k/ikhVhXz9EBHd9az6Le0xfK/img.png',
    'https://static.toss-internal.com/ipd-tcs/toss_core/live/428a6ee6-a3b9-41eb-bf36-06e4c2568cc9',
  ]

  const row2 = [
    'https://images.ctfassets.net/spoqsaf9291f/74zCCeBR8bi00VZsWIK0l5/a2055b635bf64b9fb5aea4d626640cb7/sendbird.png',
    'https://platum.kr/wp-content/uploads/2017/04/unnamed-8.png',
    'https://mblogthumb-phinf.pstatic.net/20160902_289/ppanppane_147280023204738vnE_PNG/11%B9%F8%B0%A1_%B7%CE%B0%ED_%282%29.png?type=w800',
    'https://www.enewstoday.co.kr/news/photo/201804/1183070_299776_2223.png',
    'https://img1.kbcard.com/LT/cxh/images/mblhome/sub/kmotion/logo_ssg.png ',
    'https://musinsa.wd3.myworkdayjobs.com/MUSINSA_Careers/assets/logo',
    'https://m.corp.kt.com/images/info/ci_img.png?ver=2022120801',
    'https://www.sktelecom.com/images/introduce/2021/skt-ci_sm.png?v2',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/LG_U%2B_CI.svg/2560px-LG_U%2B_CI.svg.png',
    'https://assets-global.website-files.com/6237fca0466ffd9274a1dbdd/62a940031030ce524780f083_Moloco_logo_Horiz_Secondary.png',
  ]
  return (
    <Container>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} alt={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} alt={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} alt={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} alt={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </Container>
  )
}
