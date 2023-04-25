import { ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

type Props = {
  children: ReactNode
  title: string
}

const LayoutWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`

export default function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  )
}
