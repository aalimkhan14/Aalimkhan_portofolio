<script>
    import Menu from "$lib/svgs/menu.svelte";
</script>

<div class="content">
    <button>
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
