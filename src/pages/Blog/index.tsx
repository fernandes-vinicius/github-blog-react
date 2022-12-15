import { ChangeEvent, useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useDebounce } from 'usehooks-ts'

import { repoName } from '@/constants'
import { githubAPI } from '@/lib/axios'
import { IPost } from '@/types'

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

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const debouncedInputValue = useDebounce<string>(inputValue, 500)
  const totalPosts = posts.length ?? 0

  async function fetchPosts(query?: string) {
    const response = await githubAPI.get('/search/issues', {
      params: { q: `${query}+repo:${repoName}` },
    })

    setPosts(response.data.items)
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  useEffect(() => {
    if (debouncedInputValue) fetchPosts(debouncedInputValue)
  }, [debouncedInputValue])

  return (
    <BlogContainer>
      <Profile />

      <PostsInfoContainer>
        <h4>Publicações</h4>
        <span>{totalPosts} publicações</span>
      </PostsInfoContainer>

      <PostSearchInput
        type="text"
        placeholder="Buscar conteúdo"
        minLength={2}
        value={inputValue}
        onChange={handleInputChange}
      />

      <PostsContainer>
        {posts.map((post) => {
          const formattedTime = formatDistanceToNow(new Date(post.created_at), {
            locale: ptBR,
            addSuffix: true,
          })

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
