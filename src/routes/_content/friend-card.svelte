<script>
import { getFriend, getFriendId } from '$lib/data'
import prefetchImage from '$lib/prefetch-image'
import { Suspense } from '@svelte-drama/suspense'
import FriendCardPosts from './friend-card-posts.svelte'

$: friend_id = getFriendId()
$: friend = getFriend($friend_id)

$: background = `http://placekitten.com/1000/150?image=${$friend_id}`
$: prefetchImage(background)
$: prefetchImage($friend?.avatar)
</script>

<section>
  <div class="cover" style="background-image: url('{background}')" />

  <header>
    <div>
      <h1>{$friend?.name}</h1>
      <div>{$friend?.email}</div>
    </div>
    <img alt="" class="avatar" src={$friend?.avatar} />
  </header>

  <div class="info">
    <div>{$friend?.website}</div>
    <div>{$friend?.company.catchPhrase}</div>
    <div>
      <Suspense>
        <FriendCardPosts />
      </Suspense>
    </div>
  </div>
</section>

<style>
section {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  overflow: hidden;
}
.cover {
  background-position: center;
  background-size: cover;
  height: 150px;
}

h1 {
  color: black;
  font-size: 1.5em;
  font-weight: 200;
  margin: 0;
}
header {
  align-items: center;
  color: #718096;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin-top: -3em;
  margin-left: 1em;
}
header > div {
  background: white;
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
  margin-left: -1.5em;
  padding: 0.5em 1em 0 2em;
}
img {
  border: 0.25em solid white;
  border-radius: 50%;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  height: 5.75em;
  width: 5.75em;
}

.info {
  display: grid;
  justify-items: center;
  grid-gap: 1em;
  grid-template-columns: repeat(3, 1fr);
  padding: 1em;
}
.info div {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
