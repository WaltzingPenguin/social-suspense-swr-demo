<script lang="ts">
import { getComments } from '$lib/data'
import CommentImage from './comment-image.svelte'

export let post_id: number
$: comments = getComments(post_id)
</script>

{#if $comments}
  <h3>{$comments.length} replies</h3>
  {#each $comments as comment}
    <article>
      <div class="image">
        <CommentImage src="https://i.pravatar.cc/32?u={comment.email}" />
      </div>
      <h4>{comment.email}</h4>
      <p>{comment.name}.</p>
    </article>
  {/each}
{/if}

<style>
h3 {
  background: #f7fafc;
  border-top: 1px solid #e2e8f0;
  color: #718096;
  font-size: 0.75rem;
  margin: 0;
  padding: 0.25rem 2rem;
  text-transform: uppercase;
}

article {
  align-items: flex-start;
  background: #edf2f7;
  column-gap: 0.5em;
  display: grid;
  grid-template-columns: 36px 1fr;
  padding: 1em 1.5em;
}
.image {
  background: white;
  border: 2px solid white;
  border-radius: 6px;
  box-sizing: border-box;
  grid-row: span 2;
  margin-top: 0.2em;
}
h4,
p {
  margin: 0;
}
</style>
