<script lang="ts">
import { getFriendId, getPosts } from '$lib/data'

$: friend_id = getFriendId()
$: posts = getPosts($friend_id)
</script>

Has written {$posts?.length} posts
