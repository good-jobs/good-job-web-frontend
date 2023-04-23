import Head from 'next/head'
import MarqueeComponent from '@/components/marquee'
import BestComponent from '@/components/best'
import CategoryComponent from '@/components/category'

import { Section, Header } from '../styles/main.styled'
// import useScreenSize from '@/hooks/useScreenSize'
// import useUserAgent from '@/hooks/useUserAgent'

export default function Home() {
  // const { isMobile } = useScreenSize()
  // const { device } = useUserAgent()
  return (
    <>
      <Head>
        <title>Good Job!:우리는 세상의 좋은 직장을 소개해요</title>
        <meta name="description" content="우리는 세상의 좋은 직장을 소개해요" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header>세상의 좋은 직장을 소개해 드려요</Header>
      <main>
        <MarqueeComponent />
      </main>
      <Section>
        <BestComponent />
        <CategoryComponent />
      </Section>
    </>
  )
}
