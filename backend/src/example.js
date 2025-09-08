import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'

await initDatabase()

const post1 = new Post({
  title: 'Hello Mongoose!',
  author: 'Huseyin Ergin',
  contents: 'This post is stored in a MongoDB database using Mongoose',
  tags: ['mongoose', 'mongodb'],
})

await post1.save()

const post2 = new Post({
  title: 'Good Morning',
  author: 'Jane Doe',
  contents: 'It is such a lovely day',
  tags: ['morning', 'sunshine'],
})

await post2.save()

const post3 = new Post({
  title: 'Till tomorrow',
  author: 'John Doe',
  contents: 'Parting is such sweet sorrow',
  tags: ['leaving', 'sorrow'],
})

await post3.save()

const post4 = new Post({
  title: 'Hello Express',
  author: 'Daniel Bugl',
  contents: 'This is another post stored in a MongoDB Database using Mongoose.',
  tags: ['mongo', 'mongoose'],
})

await post4.save()

const posts = await Post.find()

console.log(posts)
