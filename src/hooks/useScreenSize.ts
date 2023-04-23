/**
 * 현재 뷰포트 크기를 가져오는 커스텀 훅
 * @param breakpoints 뷰포트 사용자 지정 범위(기본값: defaultSizes)
 */
/* eslint-disable consistent-return */
import { useEffect, useState } from 'react'

type Sizes = {
  medium: number
  small: number
  large: number
}

const defaultSizes: Sizes = {
  medium: 768,
  small: 480,
  large: 1024,
}

const isClientSide = typeof window === 'object'

const getScreenSize = () => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight

  return { width, height }
}

const useScreenSize = (breakpoints = defaultSizes) => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!isClientSide) return
    const handleChangeSize = () => {
      setScreenSize(getScreenSize())
    }

    window.addEventListener('resize', handleChangeSize)
    handleChangeSize()

    return () => window.removeEventListener('resize', handleChangeSize)
  }, [])

  const { width: currentWidth, height: currentHeight } = screenSize

  const isLargeDesktop = currentWidth > breakpoints.large
  const isDesktop =
    currentWidth > breakpoints.medium && currentWidth <= breakpoints.large
  const isTablet =
    currentWidth > breakpoints.small && currentWidth <= breakpoints.medium
  const isMobile = currentWidth <= breakpoints.small

  return {
    currentWidth,
    currentHeight,
    isLargeDesktop,
    isDesktop,
    isTablet,
    isMobile,
  }
}

export default useScreenSize
