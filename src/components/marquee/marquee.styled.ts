import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  color: #000000;
  position: relative;
`

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`

export const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`

export const MarqueeGroup = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`
export const MarqueeGroup2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  flex-shrink: 0;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
  animation-direction: reverse;
  animation-delay: -3s;
`

export const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(36rem, 1rem + 52vmin, 16rem);
  padding: calc(clamp(12rem, 1rem + 26vmin, 12rem) / 10);
`

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  filter: opacity(0.8) drop-shadow(0 0 0 rgba(255, 255, 255, 1));
`
