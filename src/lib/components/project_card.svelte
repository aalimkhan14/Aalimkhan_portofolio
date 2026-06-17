<script>
    let { image, preview_path, github_path } = $props();
</script>

<div
    class="sub_parent"
    style="--background: url('{image}')"
>
    <div class="cover">
        <a class="button" target="_blank" href={preview_path}>Preview</a>
        <a class="button" target="_blank" href={github_path}>Github</a>
    </div>
</div>

<style>
    .sub_parent {
        width: 100%;
        height: 324px;
        background-image: var(--background);
        background-position: center;
        background-size: cover;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    .cover{
        display: flex;
        width: 100%;
        height: 100%;
        gap: 24px;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
    }
    .button{
        display: none;
        padding: 8px 16px;
        border-radius: 24px;
        background-color: var(--surface);
        color: var(--text);
        text-decoration: none;
        font-family: 'Inter', sans-serif;
        transition: 0.3s;
    }
    .button:nth-child(1){
        background-color: var(--primary);
        color: var(--text);
    }
    .sub_parent:hover .cover{
        background: rgba(0, 0, 0, 0.24);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(3.8px);
        -webkit-backdrop-filter: blur(3.8px);
    }
    .sub_parent:hover .button{
        display: flex;
        transition: 0.3s;
    }

    @media(min-width: 720px){
        .sub_parent{
            width: 324px;
        }
    }
    
</style>
