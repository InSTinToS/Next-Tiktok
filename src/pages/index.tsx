import Home from 'frontend/pages-components/Home'
import Post from 'frontend/types/Post'

export const getServerSideProps = async () => {
  const posts: Post[] = [
    {
      id: '1',
      tags: ['cutecat', 'catlover', 'catsoftiktok', 'cat'],
      song: '原聲 - Cash',
      videoUrl:
        'https://v16-webapp.tiktok.com/1efc22a83b456007c0837a5e452f878a/62fdb907/video/tos/useast2a/tos-useast2a-pve-0068/39e24d33aad243ea87ddadc7ea8dbc56/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1698&bt=849&cs=0&ds=3&ft=eXd.6HAzMyq8ZBDbOwe2NZO3yl7Gb&mime_type=video_mp4&qs=0&rc=NTg8NTU8ZTQ0O2k6O2g5O0Bpajw6dWQ6Znc0PDMzNzczM0AuNTAuLjAyXjUxXjBgMTI1YSNyNG5pcjRnbWVgLS1kMTZzcw%3D%3D&l=202208172158540101921660710D59BBF6&btag=80000',
      description: 'my mom is a sleepyhead🥱',
      author: {
        id: '1',
        name: 'meow__cash',
        avatar:
          'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e77ca0e404756164e1d6af901a3d08e5~c5_100x100.jpeg?x-expires=1660946400&x-signature=GfEnLdR1biNCaQRKdmOKN2DU%2FzA%3D',
        username: 'Cash'
      },
      actions: {
        likes: 320,
        shares: 100,
        comments: 23
      }
    },
    {
      id: '2',
      tags: ['cutecat', 'catsoftiktok', 'cat'],
      song: 'original sound - Cash',
      videoUrl:
        'https://v16-webapp.tiktok.com/bf89929aa0a372a9aa43cc2c77c42853/62fdb90e/video/tos/useast2a/tos-useast2a-ve-0068c001/be47b58b94f34d8cb7ee0f0b9369556d/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3298&bt=1649&cs=0&ds=3&ft=eXd.6HAzMyq8ZBDbOwe2NZO3yl7Gb&mime_type=video_mp4&qs=0&rc=NmVmNTMzNTZnNzg3ZDs5aUBpamluZnM3aWY4NjMzNzczM0BeYWBjNDVhNmAxLS1iLjY1YSM2Ym0uZGZyczFgLS1kMTZzcw%3D%3D&l=202208172158540101921660710D59BBF6&btag=80000',
      description: 'wakey wakey！Eggs and bakey！😜',
      author: {
        id: '1',
        name: 'meow__cash',
        avatar:
          'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e77ca0e404756164e1d6af901a3d08e5~c5_100x100.jpeg?x-expires=1660946400&x-signature=GfEnLdR1biNCaQRKdmOKN2DU%2FzA%3D',
        username: 'Cash'
      },
      actions: {
        likes: 100,
        shares: 30,
        comments: 43
      }
    }
  ]

  return { props: { posts } }
}

export default Home
