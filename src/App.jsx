//import { Post } from './components/Post.jsx'
import { PostList } from './components/PostList.jsx'


const posts =[{
  title: 'Full-stack react projects',
  contents: 'lelelelrlrlrlr',
  author: 'cnbklbglnld'
},
{ title: 'heheheheheheh'}

]


export function App() {
  return (
    <PostList posts ={posts} />
  )
}
