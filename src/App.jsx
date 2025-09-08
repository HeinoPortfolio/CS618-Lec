//import { Post } from './components/Post.jsx'
import { PostList } from './components/PostList'

// Create a list of posts
const posts = [
  {
    title: 'Full-Stack Reac Projects',
    contents: "Let's become full-stack developers.",
    author: 'Daniel Bugl',
  },
  { title: 'Hello React!' },
]

/*
export function App(){
	return (
		<Post
			title='Full-Stack React Projects'
			contents="Let's become full-stack developers"
			author= 'Daniel Bugl'
		/>
	)
}
*/
export function App() {
  return <PostList posts={posts} />
}
