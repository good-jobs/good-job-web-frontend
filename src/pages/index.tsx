import Head from 'next/head'
import styled from 'styled-components'
import useScreenSize from '@/hooks/useScreenSize'
import useUserAgent from '@/hooks/useUserAgent'
import MarqueeComponents from '@/components/marquee'

const Section = styled.section`
  width: 100%;

  > p {
    text-align: center;
    font-size: 2rem;
  }
`

const Header = styled.h1`
  font-size: 4.2rem;
  font-weight: 800;
  color: #009999;
  text-align: center;
  margin: 52px 0 32px;
  text-align: center;
  position: relative;

  &::before {
    top: -24px;
    font-size: 1.7rem;
    position: absolute;
    content: 'GOOD JOB';
    color: #d0d0d0;
  }
`

export default function Home() {
  const { isMobile } = useScreenSize()
  const { device } = useUserAgent()
  return (
    <>
      <Head>
        <title>Good Job!:우리는 세상의 좋은 직장을 소개해요</title>
        <meta name="description" content="우리는 세상의 좋은 직장을 소개해요" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header>세상의 좋은 직장을 소개해 드려요</Header>
      <main>
        <MarqueeComponents />
      </main>
      <Section>
        <p>배민 가고 싶다 🥺</p>
        <p>네이버 가고 싶다 🥺</p>
        <p>쿠팡 가고 싶다 🥺</p>
      </Section>
    </>
  )
}
