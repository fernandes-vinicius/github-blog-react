import { useCallback, useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import { Link as RouterLink, useParams } from 'react-router-dom'

import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gfm from 'remark-gfm'

import { Link } from '@/components/Link'
import { repoName } from '@/constants'
import { githubAPI } from '@/lib/axios'
import { IPost } from '@/types'
import { formatDate } from '@/utils/dateFormatter'

import {
  PostContainer,
  PostContent,
  PostHeader,
  PostInfoContainer,
  PostInfoItem,
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

  const commentsLabel =
    Number(post?.comments) === 1 ? 'comentário' : 'comentários'

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

        <PostInfoContainer>
          {post?.user && (
            <PostInfoItem>
              <FaGithub size={18} /> <span>{post.user.login}</span>
            </PostInfoItem>
          )}

          {post?.created_at && (
            <PostInfoItem>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>{formatDate(new Date(post.created_at))}</span>
            </PostInfoItem>
          )}

          <PostInfoItem>
            <FontAwesomeIcon icon={faComment} />
            <span>{`${post?.comments ?? 0} ${commentsLabel}`}</span>
          </PostInfoItem>
        </PostInfoContainer>
      </PostHeader>

      <PostContent>
        {post?.body && (
          <ReactMarkdown remarkPlugins={[gfm]}>{post.body}</ReactMarkdown>
        )}
      </PostContent>
    </PostContainer>
  )
}
