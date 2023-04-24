/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { Container, NeoButtonWrap, TextWrapper, Text } from './filter.styled'

function filterComponent() {
  return (
    <Container>
      <NeoButtonWrap>
        <label>
          <input type="checkbox" name="check" checked />
          <span />
          <p>#재택근무</p>
        </label>
        <label>
          <input type="checkbox" name="check" />
          <span />
          <p>#육아휴직</p>
        </label>
        <label>
          <input type="checkbox" name="check" />
          <span />
          <p>#자율 출퇴근</p>
        </label>
        <label>
          <input type="checkbox" name="check" />
          <span />
          <p>#식대지원</p>
        </label>
        <label>
          <input type="checkbox" name="check" />
          <span />
          <p>#복지 포인트</p>
        </label>
        <label>
          <input type="checkbox" name="check" />
          <span />
          <p>#안식휴가</p>
        </label>
        <label>
          <input type="checkbox" name="check" />
          <span />
          <p>#교통비 지원</p>
        </label>
        <label>
          <input type="checkbox" name="check" />
          <span />
          <p>#통신비 지원</p>
        </label>
        <label>
          <input type="checkbox" name="check" />
          <span />
          <p>#명절 보너스</p>
        </label>
        <label>
          <input type="checkbox" name="check" />
          <span />
          <p>#어학지원</p>
        </label>
      </NeoButtonWrap>
      <TextWrapper>
        <Text>우리가</Text>
        <Text>원하는.</Text>
        <Text>기업 문화.</Text>
      </TextWrapper>
    </Container>
  )
}

export default filterComponent
