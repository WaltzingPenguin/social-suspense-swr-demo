import { createSuspense } from '@svelte-drama/suspense'

export default function prefetchImage(src?: string) {
  if (!src) return

  const suspend = createSuspense()
  return suspend(
    new Promise((resolve) => {
      const img = new Image()
      img.onload = resolve
      // Not willing to go to an error screen over one broken image.
      img.onerror = resolve
      img.src = src
    })
  )
}
