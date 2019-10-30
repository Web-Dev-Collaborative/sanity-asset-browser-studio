import styled, { css } from 'styled-components'
import { color } from 'styled-system'

const Image = styled.img`
  --checkerboard-color: rgba(23, 23, 23, 0.05);

  transition: opacity 250ms;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;

  ${props =>
    props.showCheckerboard &&
    css`
      background-image: linear-gradient(
          45deg,
          var(--checkerboard-color) 25%,
          transparent 25%
        ),
        linear-gradient(-45deg, var(--checkerboard-color) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--checkerboard-color) 75%),
        linear-gradient(-45deg, transparent 75%, var(--checkerboard-color) 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0;
    `}

  ${color}
`

export default Image
