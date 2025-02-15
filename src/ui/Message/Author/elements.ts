import styled from '@lib/emotion'

// Root
export const Root = styled('span')`
  display: flex;
  height: 22px;
  line-height: 22px;
  overflow: hidden;
`

// Username
interface NameProps {
  color: string
}

export const Name = styled('strong')<NameProps>`
  color: ${({ color }) => (color !== '#000000' ? color : null)};
  /*cursor: pointer;*/
  font-size: 16px;
  flex-shrink: 0;
  font-weight: 500;
  letter-spacing: 0;

  /*&:hover {
    text-decoration: underline;
  }*/

  @media (max-width: 340px), (max-height: 370px) {
    font-size: 14px;
  }
`

// Timestamp
export const Time = styled('span')`
  color: ${({ theme }) => theme.colors._primary.fade(0.7).string()};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  margin-left: 6px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-transform: none;
  cursor: default;

  @media (max-width: 400px), (max-height: 420px) {
    font-size: 11px;
  }

  @media (max-width: 340px), (max-height: 370px) {
    font-size: 10px;
  }

  @media (max-width: 220px) {
    display: none;
  }
`

export const VerifiedBot = styled('svg')`
  vertical-align: top;
  width: 15px;
  height: 15px;
  margin-left: -.25rem;
`
