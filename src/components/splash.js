import React from 'react'
import styled from 'styled-components'
import { Colors } from '../styles'

const Splash = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background: ${Colors.dark};
`

const DotContainer = styled.div`
  width: 90px;
  height: 100px;
  transform: translateX(5px);
`

const Dot = styled.div`
  background: ${Colors.highlight};
  position: relative;
  float: left;
  margin: 0 10px 10px 0;
  width: 12px;
  height: 12px;
  border-radius: 3px;
`

const SplashScreen = () => (
  <Splash>
    <DotContainer>
      {Array.from({ length: 16 }).map((k, i) => (
        <Dot key={`dot-${i}`} className="splash_dot" />
      ))}
    </DotContainer>
  </Splash>
)

export default SplashScreen
