import Author from './Author'

interface Post {
  id: string
  tags: string[]
  song: string
  author: Author
  actions: {
    likes: number
    shares: number
    comments: number
  }
  videoUrl: string
  description: string
}

export default Post
