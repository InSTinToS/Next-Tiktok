import React, { useRef, useState, VideoHTMLAttributes } from 'react'
import {
  Action,
  Author,
  Avatar,
  Body,
  ButtonWrapper,
  Container,
  Description,
  Footer,
  Header,
  Info,
  PersonWrapper,
  PlayerIcon,
  Song,
  Tag,
  Video,
  VideoActions,
  VideoWrapper
} from './styles'

import Button from '../Button'

import PostType from 'frontend/types/Post'

interface Props {
  post?: PostType
}

const Post = ({ post }: Props) => {
  const [running, setRunning] = useState(false)
  const videoRef = useRef<HTMLVideoElement>()

  const toggleRunning = () => {
    if (videoRef.current) {
      !running ? videoRef.current.play() : videoRef.current.pause()

      setRunning(!running)
    }
  }

  return post ? (
    <Container>
      <Header>
        <PersonWrapper>
          <Avatar src={post.author.avatar} />

          <Info>
            <Author>
              {post.author.username}
              <span>{post.author.name}</span>
            </Author>

            <Description>
              <span>{post.description.slice(0, 1)}</span>
              {post.description.slice(1)}

              {post.tags.map((tag, index) => (
                <Tag key={index}>#{tag}</Tag>
              ))}
            </Description>
          </Info>
        </PersonWrapper>

        <ButtonWrapper>
          <Button outlined>Seguir</Button>
        </ButtonWrapper>
      </Header>

      <Body>
        <Song>{post.song}</Song>

        <VideoWrapper onClick={toggleRunning}>
          <Video
            loop={true}
            ref={videoRef}
            preload='metadata'
            src={post.videoUrl}
            webkit-playsinline='true'
          />

          <VideoActions>
            <PlayerIcon
              src={`/assets/${running ? 'pauseIcon' : 'playIcon'}.svg`}
            />
          </VideoActions>
        </VideoWrapper>
      </Body>

      <Footer>
        <Action>
          <img src='/assets/heartIcon.svg' />
          <a href=''>{post.actions.likes}</a>
        </Action>

        <Action>
          <img src='/assets/bubbleIcon.svg' />
          <a href=''>{post.actions.comments}</a>
        </Action>

        <Action>
          <img src='/assets/arrowIcon.svg' />
          <a href=''>{post.actions.shares}</a>
        </Action>
      </Footer>
    </Container>
  ) : (
    <></>
  )
}

export default Post
