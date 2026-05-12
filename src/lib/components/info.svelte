<script>
  import { urls } from "$lib/scripts/urls";
  import Facebook from "$lib/svgs/facebook.svelte";
  import Instagram from "$lib/svgs/instagram.svelte";
  import Linkedin from "$lib/svgs/linkedin.svelte";
  import Twitter from "$lib/svgs/twitter.svelte";
  import Youtube from "$lib/svgs/youtube.svelte";
  import InfoLabel from "./info_label.svelte";


</script>
<div class="sub_parent">
    <div class="head">
        <div class="picture"><img src="" alt=""></div>
        <div class="name">
            <div class="fullname">Aalimkhan Muradi</div>
            <div class="job"><p>Frontend Developer</p></div>
        </div>
        <div class="social">
            <a target="_blank" href={urls.facebook}><Facebook /></a>
            <a target="_blank" href={urls.instagram}><Instagram /></a>
            <a target="_blank" href={urls.x}><Twitter /></a>
            <a target="_blank" href={urls.linkedin}><Linkedin /></a>
            <a target="_blank" href={urls.youtube}><Youtube /></a>
        </div>
    </div>
    <div class="info">
        <InfoLabel txt1='Email:' txt2='aalimmuradia4@gmail.com' />
        <InfoLabel txt1='Phone:' txt2='(+93) 730 874 961' />
        <InfoLabel txt1='Residence:' txt2='Afghanistan' />
        <InfoLabel txt1='City:' txt2='Kunduz' />
        <InfoLabel txt1='Age:' txt2='25 Years' />
        <InfoLabel txt1='Freelance:' txt2='Available' />
        <InfoLabel txt1='Language:' txt2='Persian, English' />
    </div>
</div>
<style>
    .sub_parent{
        display: flex;
        flex-direction: column;
        padding: 0 0  24px 0;
        border-bottom: 1px solid var(--horizontal_line);
        gap: 24px;
    }
    .head{
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
    .picture{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        border: 2px solid var(--text);
        border-radius: 50%;
        background-color: var(--background);
        overflow: hidden;
        margin-top: 8px;
    }
    .picture::after{
        content: '';
        width: 16px;
        height: 16px;
        position: absolute;
        background-color: var(--primary);
        border-radius: 50%;
        margin-top: 65px;
        margin-left: 70px;
        border: 5px solid var(--background);
    }
    .name{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .fullname{
        font-family: 'Inter', sans-serif;
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
        letter-spacing: 0%;
        color: var(--text);
    }
    .job{
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #F78F42;
        padding: 4px 12px;
        border-radius: 50px;
        background-color: rgba(247, 143, 66,10%);
    }
    .social{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 18px;
        width: 100%;
    }
    .info{
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }
</style>