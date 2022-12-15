import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link as RouterLink, useParams } from 'react-router-dom'

import Link from '@/components/Link'
import { repoName } from '@/constants'
import { githubAPI } from '@/lib/axios'
import { IPost } from '@/types'

import {
  PostContainer,
  PostContent,
  PostHeader,
  PostLinks,
  PostTitle,
} from './styles'

export function Post() {
  const { postNumber } = useParams()

  const [post, setPost] = useState<IPost | null>(null)

  useEffect(() => {
    async function loadPost() {
      const response = await githubAPI.get(
        `/repos/${repoName}/issues/${postNumber}`,
      )
      setPost(response.data)
    }

    loadPost()
  }, [postNumber])

  if (!post) {
    return null
  }

  return (
    <PostContainer>
      <PostHeader>
        <PostLinks>
          <RouterLink to="/">
            <Link>Voltar</Link>
          </RouterLink>

          <Link>Ver no Github</Link>
        </PostLinks>

        <PostTitle>{post.title}</PostTitle>
      </PostHeader>

      <PostContent>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
