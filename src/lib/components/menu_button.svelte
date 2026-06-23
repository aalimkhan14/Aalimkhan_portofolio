<script>
    import { isShrunk } from "$lib/scripts/store";
    import Cancel from "$lib/svgs/cancel.svelte";
    import Menu from "$lib/svgs/menu.svelte";

    function showMenu() {
        isShrunk.update((v) => !v);
        console.log($isShrunk);
    }
</script>

<div class="content">
    <button onclick={showMenu}>
        <Menu />
    </button>
</div>

<style>
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: var(--padding);
    }
    .content button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
</style>
