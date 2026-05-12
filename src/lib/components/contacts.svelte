<script>
    let {
        icon, 
        label1,
        value1, 
        label2,
        value2, 
        label3,
        value3,
    } = $props();
</script>

<div class="sub_parent">
    <div class="icon"><svelte:component this={icon} /></div>
    <div class="details">
        {#if label1}
            <div class="detail"><p>{label1}:</p><p>{value1}</p></div>
        {/if}
        {#if label2}
            <div class="detail"><p>{label2}:</p><p>{value2}</p></div>
        {/if}
        {#if label3}
            <div class="detail"><p>{label3}:</p><p>{value3}</p></div>
        {/if}
        
    </div>
</div>

<style>
    .sub_parent{
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
        gap: 24px;
        background-color: var(--background);
        border-radius: 12px;
    }
    .icon{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: var(--primary);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .details{
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .detail{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .detail p{
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: var(--text);
    }
    .detail p:nth-child(2){
        color: var(--text_secondary);
    }
</style>