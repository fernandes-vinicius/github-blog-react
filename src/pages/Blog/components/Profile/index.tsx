import { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'

import {
  faArrowUpRightFromSquare,
  faUserGroup,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from '@/components/Link'
import { username } from '@/constants'
import { githubAPI } from '@/lib/axios'
import { IUser } from '@/types'

import {
  Biography,
  ProfileContainer,
  ProfileContent,
  ProfileInfoContainer,
  ProfileInfoItem,
  UserAvatar,
  UserName,
} from './styles'

export function Profile() {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    async function loadUser() {
      const response = await githubAPI.get(`/users/${username}`)
      setUser(response.data)
    }

    loadUser()
  }, [])

  if (!user) {
    return null
  }

  return (
    <ProfileContainer>
      <UserAvatar src={user.avatar_url} />

      <ProfileContent>
        <header>
          <UserName>{user.name}</UserName>

          <Link href={user.html_url} target="_blank" rel="noopener">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </header>

        <Biography>{user.bio}</Biography>

        <ProfileInfoContainer>
          <ProfileInfoItem>
            <FaGithub size={18} /> <span>{user.login}</span>
          </ProfileInfoItem>

          <ProfileInfoItem>
            <FontAwesomeIcon icon={faBuilding} size="sm" />
            <span>{user.company}</span>
          </ProfileInfoItem>

          <ProfileInfoItem>
            <FontAwesomeIcon icon={faUserGroup} size="sm" />
            <span>{`${user.followers} seguidores`}</span>
          </ProfileInfoItem>
        </ProfileInfoContainer>
      </ProfileContent>
    </ProfileContainer>
  )
}
