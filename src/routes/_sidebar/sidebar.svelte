<script>
import { Suspense } from '@svelte-drama/suspense'
import Friends from './friends.svelte'
import Spinner from '../_components/spinner.svelte'
</script>

<nav>
  <h1>Navigation</h1>

  <section>
    <h2>Main</h2>
    <ul>
      <li>Home</li>
      <li>About</li>
    </ul>
  </section>

  <section>
    <h2>Friends</h2>
    <Suspense>
      <Friends />
      <svelte:fragment slot="loading">
        <Spinner />
        Loading friends...
      </svelte:fragment>
    </Suspense>
  </section>

  <section>
    <h2>Events</h2>
    <ul>
      <li>Create new</li>
      <li>View current</li>
    </ul>
  </section>
</nav>

<style>
nav :global(ul) {
  list-style: none;
  margin: 0;
  padding: 0;
}
h1 {
  left: -1000em;
  position: absolute;
}
h2 {
  font-size: 100%;
  font-weight: bold;
  margin: 0;
}
section {
  margin: 0 -0.5em;
  padding: 0 0.5em;
}
section + section {
  border-top: 1px solid #e2e8f0;
  margin-top: 0.5em;
  padding-top: 0.5em;
}
</style>
