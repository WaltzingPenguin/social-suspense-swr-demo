<script>
import { Suspense, SuspenseList } from '@svelte-drama/suspense'
import Comments from './comments.svelte'
import CommentsSkeleton from './comments-skeleton.svelte'
import Post from './post.svelte'
import { getFriendId, getPosts } from '$lib/data'
import PostSkeleton from './post-skeleton.svelte'

$: friend_id = getFriendId()
$: posts = getPosts($friend_id)
</script>

{#if $posts}
  <SuspenseList collapse>
    {#each $posts as post}
      <article>
        <Suspense>
          <Post {post} />
          <PostSkeleton slot="loading" />
        </Suspense>

        <Suspense>
          <Comments post_id={post.id} />
          <CommentsSkeleton slot="loading" />
        </Suspense>
      </article>
    {/each}
  </SuspenseList>
{/if}

<style>
article {
  background: white;
  border-radius: 0.5em;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  overflow: hidden;
}
</style>
