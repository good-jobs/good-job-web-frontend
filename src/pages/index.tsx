import Head from 'next/head'
import styled from 'styled-components'
import useScreenSize from '@/hooks/useScreenSize'
import useUserAgent from '@/hooks/useUserAgent'

const Section = styled.section`
  width: 100%;
`

const Header = styled.header`
  font-size: 32px;
  font-weight: 800;
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
      <Header>Good Job !</Header>
      <main>
        <Section>
          {isMobile
            ? '모바일: 우리는 세상의 좋은 직장을 소개해요'
            : '우리는 세상의 좋은 직장을 소개해요'}
          <p>내 디바이스는 : {device.model}</p>
        </Section>
      </main>
    </>
  )
}
