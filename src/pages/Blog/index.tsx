import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { useDebounce } from 'use-debounce'

import { repoName } from '@/constants'
import { githubAPI } from '@/lib/axios'
import { IPost } from '@/types'
import { formatDate } from '@/utils/dateFormatter'

import { Profile } from './components/Profile'
import {
  BlogContainer,
  PostItem,
  PostItemBody,
  PostItemTime,
  PostItemTitle,
  PostsContainer,
  PostSearchInput,
  PostsInfoContainer,
} from './styles'

const MIN_INPUT_LENGTH = 2
const DEBOUNCE_DELAY_IN_MILLISECONDS = 1 * 1000

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [inputValue, setInputValue] = useState('')

  const [debouncedInputValue] = useDebounce(
    inputValue,
    DEBOUNCE_DELAY_IN_MILLISECONDS,
  )

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await githubAPI.get('/search/issues', {
      params: { q: `${query}+repo:${repoName}` },
    })

    setPosts(response.data.items)
  }, [])

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.trimStart()
    setInputValue(value)
  }

  useEffect(() => {
    if (debouncedInputValue.length > MIN_INPUT_LENGTH) {
      fetchPosts(debouncedInputValue)
    }
  }, [debouncedInputValue, fetchPosts])

  const totalPosts = posts.length ?? 0

  return (
    <BlogContainer>
      <Profile />

      <PostsInfoContainer>
        <h4>Publicações</h4>
        <span>{totalPosts} publicações</span>
      </PostsInfoContainer>

      <PostSearchInput
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Buscar conteúdo"
      />

      <PostsContainer>
        {posts.map((post) => {
          const formattedTime = formatDate(new Date(post.created_at))

          return (
            <PostItem key={post.id}>
              <header>
                <RouterLink to={`/${post.number}`}>
                  <PostItemTitle>{post.title}</PostItemTitle>
                </RouterLink>

                <PostItemTime>{formattedTime}</PostItemTime>
              </header>

              <PostItemBody>{post.body}</PostItemBody>
            </PostItem>
          )
        })}
      </PostsContainer>
    </BlogContainer>
  )
}
