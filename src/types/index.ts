export interface IUser {
  id: string
  name: string
  avatar_url: string
  bio: string
  login: string
  company: string
  followers: number
  html_url: string
}

export interface IPost {
  id: string
  title: string
  body: string
  created_at: string
  comments: number
  number: number
  user: IUser
}
