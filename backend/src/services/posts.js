import { Post } from '../db/models/post.js'

// CreatePost service function =========================================
export async function createPost({ title, author, contents, tags }) {
  const post = new Post({ title, author, contents, tags })

  return await post.save()
}

// Delete Post service function ========================================
export async function deletePost(postId) {
  return await Post.deleteOne({ _id: postId })
}

// Get Post service function ===============================================
export async function getPostById(postId) {
  return await Post.findById(postId)
}

// List posts service functions =============================================
async function listPosts(
  query = {},
  { sortBy = 'createdAt', sortOrder = 'descending' } = {},
) {
  return await Post.find(query).sort({ [sortBy]: sortOrder })
}
export async function listAllPosts(options) {
  return await listPosts({}, options)
}
export async function listPostsByAuthor(author, options) {
  return await listPosts({ author }, options)
}
export async function listPostsByTag(tags, options) {
  return await listPosts({ tags }, options)
}

//
// Update a post==============================================================
export async function updatePost(postId, { title, author, contents, tags }) {
  return await Post.findOneAndUpdate(
    { _id: postId },
    { $set: { title, author, contents, tags } },
    { new: true },
  )
}
