import { useState } from 'react'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useAuth } from '../contexts/AuthContext.jsx'
import { createPost } from '../api/posts.js'

export function CreatePost() {
  // Create the states ======================
  const [title, setTitle] = useState('')
  //const [author, setAuthor] = useState('')
  const [contents, setContents] = useState('')

  // Get the token ===========================
  const [token] = useAuth()

  //Create tjhe query client =======================
  const queryClient = useQueryClient()

  // Create the post mutation ==================
  const createPostMutation = useMutation({
    mutationFn: () => createPost(token, { title, contents }),
    onSuccess: () => queryClient.invalidateQueries(['posts']),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createPostMutation.mutate()
  }

  if (!token) return <div>Please log in to create a new post.</div>

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='create-title'>Title: </label>
        <input
          type='text'
          name='create-title'
          id='create-title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <br />
      <textarea
        value={contents}
        onChange={(e) => setContents(e.target.value)}
      />
      <br />
      <br />
      <input
        type='submit'
        value={
          createPostMutation.isPending ? 'Creating Post...' : 'Click to Create'
        }
        disabled={!title}
      />
      {createPostMutation.isSuccess ? (
        <>
          <br />
          The post was created successfully!
        </>
      ) : (
        <>
          <br />
          Post was not created!!!
        </>
      )}
    </form>
  )
}
