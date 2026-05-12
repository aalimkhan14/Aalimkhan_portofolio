<script>
    let {txt1, txt2} = $props();
</script>
<div class="sub_parent">
    <p>{txt1}</p>
    <p>{txt2}</p>
</div>
<style>
    .sub_parent{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    p{
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: var(--text);
    }
    p:nth-child(2){
        color: var(--text_secondary);
    }
</style>