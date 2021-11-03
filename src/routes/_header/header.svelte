<script lang="ts">
import { Suspense } from '@svelte-drama/suspense'
import Spinner from '../_components/spinner.svelte'
import Menu from './menu.svelte'
</script>

<header>
  <a href="https://svelte.dev/">
    <img
      class="logo"
      alt="Made with Svelte"
      src="https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.svg"
    />
  </a>

  <div class="menu">
    <Suspense>
      <Menu />

      <svelte:fragment slot="loading">
        <Spinner stroke="white" />
        Loading menu...
      </svelte:fragment>
    </Suspense>
  </div>
</header>

<style>
header {
  align-items: center;
  background-color: #2d3748;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 10%),
    0 10px 10px -5px rgb(0 0 0 / 4%);
  color: rgba(226, 232, 240);
  display: flex;
  justify-content: space-between;
  padding: 0.5em 3rem;
}
.logo {
  height: 2.5em;
  width: 2.5em;
}
.menu {
  text-align: right;
}
</style>
