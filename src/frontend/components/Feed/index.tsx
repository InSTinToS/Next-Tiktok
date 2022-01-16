import React from 'react'
import { Container } from './styles'

import Post from 'frontend/components/Post'
import PostType from 'frontend/types/Post'

interface Props {
  posts: PostType[]
}

const Feed = ({ posts }: Props) => {
  return (
    <Container>
      {posts.map((post, index) => (
        <Post key={index} post={post}></Post>
      ))}
    </Container>
  )
}

export default Feed
