import Home from 'frontend/pages-components/Home'
import Post from 'frontend/types/Post'

export const getServerSideProps = async () => {
  const posts: Post[] = [
    {
      id: '1',
      tags: ['cutecat', 'catlover', 'catsoftiktok', 'cat'],
      song: '原聲 - Cash',
      videoUrl:
        'https://v16-webapp.tiktok.com/2232d92427f89a091ee66c5f3dbec064/61e49f4a/video/tos/useast5/tos-useast5-ve-0068c002-tx/2490a37e5b274a32b908ab35b62e1aad/?a=1988&br=3284&bt=1642&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fxrkag3-I&l=202201161642000102231231632768CC84&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amhtbDc6ZjY1OTMzZzczNEApaGg7PGZkNmRoN2g6OTs3ZmdzamRycjRvNmBgLS1kMS9zc2JjYWNhMi9fMjAzMWEtNTQ6Yw%3D%3D&vl=&vr=',
      description: 'my mom is a sleepyhead🥱',
      author: {
        id: '1',
        name: 'meow__cash',
        avatar:
          'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e77ca0e404756164e1d6af901a3d08e5~c5_100x100.jpeg?x-expires=1642438800&x-signature=BoQziJfl7WIi%2BygXjsSb7PRHZn8%3D',
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
        'https://v16-webapp.tiktok.com/8382cbb218938d796f5a0e4ebd4c2864/61e4a0b8/video/tos/useast2a/tos-useast2a-ve-0068c001/5945342196e84776ae553582e1c9be5e/?a=1988&br=2674&bt=1337&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fxrkag3-I&l=202201161648070102231230462667CD15&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzwzcnF3OjQ2NjMzNzczM0ApNjtnZzw1NWUzN2RkZGQ8ZGcuYW1jXi5yYF5gLS1kMTZzc2JeMjA0Yi1gL18yNjE1LTI6Yw%3D%3D&vl=&vr=',
      description: 'wakey wakey！Eggs and bakey！😜',
      author: {
        id: '1',
        name: 'meow__cash',
        avatar:
          'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e77ca0e404756164e1d6af901a3d08e5~c5_100x100.jpeg?x-expires=1642438800&x-signature=BoQziJfl7WIi%2BygXjsSb7PRHZn8%3D',
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
