<script lang="ts">
import './global.css'
import Header from './_header/header.svelte'
import Sidebar from './_sidebar/sidebar.svelte'
</script>

<Header />

<div>
  <Sidebar />

  <main>
    <slot />
  </main>
</div>

<style>
div {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 12em 1fr;
  margin: auto;
  max-width: 80em;
  padding: 1em;
}
</style>
