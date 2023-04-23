/**
 * 현재 브라우저의 User Agent 정보를 가져오는 커스텀 훅
 */

import { useState, useEffect } from 'react'
import UAParser from 'ua-parser-js'

interface IUserAgentInfo {
  os: UAParser.IOS
  browser: UAParser.IBrowser
  device: UAParser.IDevice
}

function getUserAgentInfo(uaString: string): IUserAgentInfo {
  const parser = new UAParser()
  parser.setUA(uaString)

  return {
    os: parser.getOS(),
    browser: parser.getBrowser(),
    device: parser.getDevice(),
  }
}

function useUserAgent(): IUserAgentInfo {
  const [userAgentInfo, setUserAgentInfo] = useState<IUserAgentInfo>({
    os: { name: '', version: '' },
    browser: { name: '', version: '', major: '' },
    device: { model: '', type: '', vendor: '' },
  })

  useEffect(() => {
    const userAgentData = getUserAgentInfo(window.navigator.userAgent)
    setUserAgentInfo(userAgentData)
  }, [])

  return userAgentInfo
}

export default useUserAgent
