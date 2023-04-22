import Head from 'next/head'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
`

const Header = styled.header`
  font-size: 32px;
  font-weight: 800;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Good Job!:우리는 세상의 좋은 직장을 소개해요</title>
        <meta name="description" content="우리는 세상의 좋은 직장을 소개해요" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header>Good Job !</Header>
      <main>
        <Section>우리는 세상의 좋은 직장을 소개해요</Section>
      </main>
    </>
  )
}
