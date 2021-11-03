<script lang="ts">
import FriendCard from './_content/friend-card.svelte'
import Posts from './_content/posts.svelte'
import Spinner from './_components/spinner.svelte'
import PostSkeleton from './_content/post-skeleton.svelte'
import { Suspense, SuspenseList } from '@svelte-drama/suspense'
import { getFriend, getFriendId } from '$lib/data'

$: friend_id = getFriendId()
$: friend = getFriend($friend_id, { suspend: false })
</script>

<svelte:head>
  <title>{$friend?.name || 'Loading...'}</title>
</svelte:head>

<SuspenseList collapse>
  <Suspense>
    <FriendCard />

    <div slot="loading" class="loading">
      <Spinner />
      Loading {$friend?.name || 'Friend'}...
    </div>
  </Suspense>

  <div class="posts">
    <Suspense>
      <Posts />
      <PostSkeleton slot="loading" />
    </Suspense>
  </div>
</SuspenseList>

<style>
.loading {
  text-align: center;
}
.posts {
  align-items: flex-start;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
  padding: 2em 0;
}
</style>
