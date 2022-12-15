import { useCallback, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link as RouterLink, useParams } from 'react-router-dom'

import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gfm from 'remark-gfm'

import { Link } from '@/components/Link'
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
  const { number } = useParams()

  const [post, setPost] = useState<IPost | null>(null)

  const fetchPost = useCallback(async () => {
    const response = await githubAPI.get(`/repos/${repoName}/issues/${number}`)
    setPost(response.data)
  }, [number])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return (
    <PostContainer>
      <PostHeader>
        <PostLinks>
          <RouterLink to="/">
            <Link>
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>Voltar</span>
            </Link>
          </RouterLink>

          <Link href={post?.html_url} target="_blank" rel="noopener">
            <span>Ver no Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </PostLinks>

        <PostTitle>{post?.title}</PostTitle>
      </PostHeader>

      <PostContent>
        {post?.body && (
          <ReactMarkdown remarkPlugins={[gfm]}>{post.body}</ReactMarkdown>
        )}
      </PostContent>
    </PostContainer>
  )
}
