<script lang="ts">
import prefetchImage from '$lib/prefetch-image'

export let src: string
$: prefetchImage(src)
</script>

<img alt="" {src} />
