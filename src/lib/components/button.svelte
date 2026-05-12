<script>
    import Download from "$lib/svgs/download.svelte";
    let {text} = $props();

    function downloadCV(){
        const link = document.createElement('a');

        link.href = '/cv/aalimkhan_cv.pdf';
        link.download = 'Aalimkhan-CV.pdf';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

</script>
<button class="sub_parent" onclick={downloadCV}>
    <div class="text">{text}</div>
    <Download />
</button>
<style>
    .sub_parent{
        display: flex;
        flex-direction: row;
        justify-content: end;
        gap: 20px;
        align-items: center;
        padding: 12px 20px;
        border-radius: 8px;
        border: none;
        background-color: var(--primary);
        cursor: pointer;
    }
    .text{
        display: flex;
        flex-grow: 2;
        align-items: center;
        justify-content: center;
        color: var(--surface);
        /* padding: 0 20px; */
    }
</style>