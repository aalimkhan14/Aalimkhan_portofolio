<script>
  import RightArrow from "$lib/svgs/rightArrow.svelte";

  let {icon, title, content1, content2, content3 } = $props();


</script>
<div class="sub_parent">
    <div class="icon"><svelte:component this={icon} /></div>
    <div class="content">
        <h3>{title}</h3>
        <div class="service">
            <div><RightArrow />{content1}</div>
            <div><RightArrow />{content2}</div>
            <div><RightArrow />{content3}</div>
        </div>
    </div>
</div>
<style>
    .sub_parent{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding: 24px;
        background-color: var(--background);
        border-radius: 12px;
    }
    .icon{
        width: 64px;
        height: 64px;
        background-color: var(--surface);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
    }
    .content{
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    .content h3{
        color: var(--text);
        font-family: 'Inter', sans-serif;
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
    }
    .service{
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .service div{
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: var(--text_secondary);
        display: flex;  
        gap: 8px;
        align-items: center;
    }

    @media(min-width: 700px){
        .sub_parent{
            width: 308px;
        }
    }
    @media(min-width: 1500px){
        .sub_parent{
            width: 324;
        }
    }

</style>