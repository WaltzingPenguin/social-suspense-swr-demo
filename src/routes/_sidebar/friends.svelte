<script lang="ts">
import { getFriendId, getFriends } from '$lib/data'
import Img from '../_components/img.svelte'

$: friend_id = getFriendId()
$: friends = getFriends()
</script>

{#if $friends}
  <ul>
    {#each $friends as friend}
      <li>
        <a href="/{friend.id}" class:active={friend.id === $friend_id}>
          <Img src={friend.avatar} />
          <span>{friend.name}</span>
        </a>
      </li>
    {/each}
  </ul>
{/if}

<style>
a {
  align-items: center;
  background: none;
  border: none;
  color: #3182ce;
  cursor: pointer;
  display: flex;
  font: inherit;
  max-width: 100%;
  padding: 0.2em 0;
  text-decoration: none;
}
a:hover {
  color: #63b3ed;
}
a.active {
  font-weight: 600;
}

a :global(img) {
  border: 2px solid white;
  border-radius: 100%;
  height: 1.25em;
  margin-right: 0.25em;
  width: 1.25em;
}
a.active :global(img) {
  border-color: rgba(43, 108, 176);
}

a span {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

ul {
  animation: fade-in 0.3s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
