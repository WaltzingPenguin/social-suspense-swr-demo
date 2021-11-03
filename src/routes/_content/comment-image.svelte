<script lang="ts">
export let src

let loaded = false
</script>

<img
  class:loaded
  alt=""
  {src}
  height="32"
  width="32"
  loading="lazy"
  on:load={() => (loaded = true)}
/>

<style>
img {
  border-radius: inherit;
  display: block;
  height: auto;
  opacity: 0;
  transition: opacity 0.2s ease-out;
  width: 100%;
}
img.loaded {
  opacity: 1;
}
</style>
