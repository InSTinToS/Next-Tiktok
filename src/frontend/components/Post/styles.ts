import styled from 'styled-components'

export const Action = styled.div`
  display: flex;
  align-items: center;

  margin-right: 25px;

  font-size: 18px;
  font-weight: 700;

  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
    margin-right: 4px;
  }
`

export const Footer = styled.div`
  display: flex;
  align-items: center;

  padding: 0 10px;
  margin-top: 12px;
`

export const ButtonWrapper = styled.div`
  width: 118px;
  height: 28px;

  font-weight: 600;
  font-size: 16px;
`

export const PlayerIcon = styled.img`
  width: 20px;
  height: 20px;
`

export const VideoActions = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  left: 12px;
  width: 40px;
  height: 40px;
  bottom: 15px;
  visibility: hidden;
`

export const Video = styled.video`
  width: 270px;
  border-radius: 9px;
`

export const VideoWrapper = styled.div`
  position: relative;

  margin-top: 15px;
  width: calc(0.56 * (400px + ((100vw - 768px) / 1152) * 100));

  cursor: pointer;

  :hover {
    ${VideoActions} {
      visibility: visible;
    }
  }
`

export const Song = styled.div`
  display: flex;
  align-items: flex-end;

  margin-top: 5px;

  a {
    font-weight: 600;

    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  img {
    width: 18px;
    height: 25px;
    margin-right: 5px;
  }
`

export const Body = styled.div`
  margin-left: 68px;
`

export const Tag = styled.a`
  font-weight: bold;
  margin-left: 4px;
  font-size: 16px;

  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`

export const Description = styled.p`
  span {
    text-transform: uppercase;
  }
`

export const Author = styled.a`
  display: flex;

  margin-right: 5px;
  margin-bottom: 5px;

  font-weight: 700;
  font-size: 18px;
  line-height: 24px;

  :hover {
    text-decoration: underline;
  }

  span {
    margin-top: 1px;
    margin-left: 4px;

    font-weight: 400;
    font-size: 14px;

    color: var(--black);
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 12px;
`

export const Avatar = styled.img`
  display: flex;
  justify-content: space-between;

  width: 56px;
  height: 56px;
  border-radius: 50%;
`

export const PersonWrapper = styled.div`
  display: flex;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Container = styled.div`
  position: relative;

  width: 592px;
  max-width: 592px;
  padding: 20px 0;
  margin: 0 16px;

  border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
`
