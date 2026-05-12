<script>
  import { handleSectionClick } from "$lib/scripts/scroll_utils";
  import { store_href } from "$lib/scripts/store";
  import { urls } from "$lib/scripts/urls";
  import RightArrow from "$lib/svgs/right_arrow.svelte";


</script>
<div class="parent">
    <div class="content">
        <h2>I develope products that delight and inspire people.</h2>
        <p>A product visual developer focused on UI/UX, responsive design, and building modern experiences for web, desktop, and Android.</p>
        <a href={urls.contact} onclick={(event) => {handleSectionClick(event, 'contact'); store_href.set('contact');}}>Let's Talk <div class="icon"><RightArrow /></div></a>
    </div>
    <div class="picture"><img src="src\lib\assets\picture\IMG_3283.png" alt=""></div>
</div>

<style>
    
    @media(min-width: 1024px){
        .parent{
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 500px;
            background-color: var(--background);
            border-radius: var(--radius12);
            /* background-image: url('../assets/picture/bg4.jpg');
            background-size: cover; */
        }
        .content{
            width: 60%;
            display: flex;
            flex-direction: column;
            padding: 64px;
            gap: 32px;
        }
        h2{
            font-family: 'Inter';
            font-size: 48px;
            font-weight: 600;
            line-height: 56px;
            letter-spacing: 0%;
            color: var(--text);
            
        }
        p{
            width: 85%;
            font-family: 'Inter';
            font-size: 18px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0%;
            color: var(--text);
        }
        a{
            width: 182px;
            height: 56px;
            border-radius: 56px;
            gap: 24px;
            display: flex;
            align-items: center;
            padding: 6px 6px 6px 28px;
            background-color: var(--primary);
            border: none;
            font-family: 'Inter';
            font-size: 18px;
            font-weight: 500;
            line-height: 28px;
            color: var(--background);
            text-decoration: none;
        }
        .icon{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 44px;
            height: 44px;
            background-color: var(--background);
            border-radius: 50%;
        }
        .picture{
            display: flex;

        }

    }
</style>