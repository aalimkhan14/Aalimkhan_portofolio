<script lang="ts">
    import { isDark } from "$lib/scripts/store";
    import PaintBucket from "$lib/svgs/paint_bucket.svelte";

    let { useDefaultPadding = true } = $props();
</script>

<div class="theme" style="--padding:{useDefaultPadding ? 24 : 0}px">
    <button onclick={() => isDark.update((t) => (t ? false : true))}
        ><PaintBucket /></button
    >
</div>

<style>
    .theme {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: var(--padding);
    }
    .theme button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
</style>
