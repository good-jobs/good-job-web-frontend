import Layout from '@/layout'
import MarqueeComponent from '@/components/marquee'
import BestComponent from '@/components/best'
import CategoryComponent from '@/components/category'
import FilterComponent from '@/components/filter'
import { Section, Header } from '../styles/main.styled'

export default function Home() {
  return (
    <Layout title="우리는 세상의 좋은 직장을 소개해요">
      <Header>세상의 좋은 직장을 소개해 드려요</Header>
      <MarqueeComponent />
      <Section>
        <BestComponent />
        <FilterComponent />
        <CategoryComponent />
      </Section>
    </Layout>
  )
}
