import { page } from '$app/stores'
import { derived } from 'svelte/store'
import { swr } from '@svelte-drama/swr'
import { suspend } from '@svelte-drama/swr/plugin'

type Comment = {
  name: string
  email: string
}

type Friend = {
  avatar: string
  company: {
    catchPhrase: string
  }
  email: string
  id: number
  name: string
  website: string
}

type Post = {
  id: number
  body: string
  title: string
}

/* ----- */

export function getComments(post_id: number) {
  const url = `/posts/${post_id}/comments`
  const { data } = swr<Comment[]>(url, {
    fetcher: async (url) => {
      return get(`${url}?_limit=${rand(1, 6)}`)
    },
    plugins: [suspend()],
  })
  return data
}

export function getFriends() {
  const { data } = swr<Friend[]>('/users?_limit=9', {
    fetcher: async (url) => {
      const data = await get(url)
      return data.map(setAvatar)
    },
    plugins: [suspend()],
  })
  return data
}

export function getFriend(
  friend_id: number,
  { suspend: should_supsend = true } = {}
) {
  const url = `/users/${friend_id}`
  const { data } = swr<Friend>(url, {
    fetcher: async (url) => {
      const data = await get(url)
      return setAvatar(data)
    },
    plugins: should_supsend ? [suspend()] : [],
  })
  return data
}

export function getFriendId() {
  return derived(page, ($page) => {
    return parseInt($page.params.id, 10)
  })
}

export function getPosts(friend_id: number) {
  const url = `/posts/${friend_id}/posts`
  const { data } = swr<Post[]>(url, {
    fetcher: async (url) => {
      return get(`${url}?_limit=${rand(4, 8)}&_start=${friend_id * 10}`)
    },
    plugins: [suspend()],
  })
  return data
}

/* ----- */

async function get(url: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com` + url)
  const json = await response.json()
  await new Promise((resolve) => {
    setTimeout(resolve, rand(500, 4000))
  })
  return json
}

function rand(start: number, end: number) {
  return start + Math.round(Math.random() * (end - start))
}

function setAvatar(friend: Friend) {
  friend.avatar = `https://i.pravatar.cc/256?img=${friend.id + 4}`
  return friend
}
