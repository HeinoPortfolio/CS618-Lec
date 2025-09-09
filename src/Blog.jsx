//import { Post } from './components/Post.jsx'
import { PostList } from './components/PostList'
import { CreatePost } from './components/CreatePost'
import { PostFilter } from './components/PostFilter'
import { PostSorting } from './components/PostSorting'

// Create a list of posts====================================================
const posts = [
  {
    title: 'Full-Stack React Projects',
    contents: "Let's become full-stack developers.",
    author: 'Daniel Bugl',
  },
  { title: 'Hello React!' },
]

// Show all the components for the page =====================================
export function Blog() {
  return (
    <div style={{ padding: 8 }}>
      <CreatePost />
      <br />
      <hr />
      Filter By:
      <PostFilter field='author' />
      <br />
      <PostSorting fields={['createdAt', 'updatedAt']} />
      <hr />
      <PostList posts={posts} />
    </div>
  )
}
