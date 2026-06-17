<script>
    let {title, state, date, certificate, content} = $props();
</script>

<div class="sub_parent">
    <div class="left">
        <h3 class="title">{title}</h3>
        <div class="period">
            <p class="state">{state}</p>
            <div class="date">{date}</div>
        </div>
    </div>
    <div class="right">
        <h3 class="certificate">{certificate}</h3>
        <p class='content'>{content}</p>
    </div>
</div>

<style>
    .sub_parent{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 24px;
    }
    .left{
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        padding-left: 20px;
    }
    .title{
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-weight: 600;
        line-height: 28px;
        color: var(--text);
    }
    .period{
        display: flex;
        flex-direction: row;
        gap: 16px;
    }
    .state{
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: var(--text);
    }
    .date{
        padding: 4px 12px;
        border-radius: 6px;
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        color: var(--primary);
        background-color: rgba(247, 143, 66,10%);
    }
    .right{
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
    }
    .certificate{
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-weight: 500;
        line-height: 28px;
        color: var(--text);
    }
    .content{
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: var(--text_secondary)
    }

    @media(min-width: 1500px){
        .sub_parent{
            flex-direction: row;
        }
        .left{
            width: 30%;
            padding: 0;
        }
        .right{
            width: 70%;
        }
    }
</style>