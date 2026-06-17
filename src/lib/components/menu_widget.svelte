<script>
    import Home from "$lib/svgs/home.svelte";


</script>
<div class="parent">
    <button>Home</button>
    <button>Service</button>
    <button>Education</button>
    <button>Experience</button>
    <button>Project</button>
    <button>Get in touch</button>
</div>
<style>
    .parent{
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        gap: 10px;
        background-color: var(--surface);
    }
    button{
        display: flex;
        justify-content: center;
        padding: 10px 0;
        border-color: transparent;
        background-color: var(--background);
        border-radius: 20px;
    }
</style>