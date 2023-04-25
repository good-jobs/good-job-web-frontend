import React from 'react'
import { marqueeLogoUpSide, marqueeLogoDownSide } from '../../dummy/marquee'
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
  return (
    <Container>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {marqueeLogoUpSide.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} alt={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {marqueeLogoUpSide.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} alt={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {marqueeLogoDownSide.map((el) => (
              <ImageGroup key={el}>
                <Image src={el} alt={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {marqueeLogoDownSide.map((el) => (
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
