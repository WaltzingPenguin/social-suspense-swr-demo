<script lang="ts">
import { getFriend, getFriendId } from '$lib/data'

$: friend_id = getFriendId()
$: friend = getFriend($friend_id)
</script>

{$friend?.name}
