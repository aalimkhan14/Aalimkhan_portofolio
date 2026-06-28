<script>
    import { cover_picture } from "$lib/scripts/pictures";
    import { handleSectionClick } from "$lib/scripts/scroll_utils";
    import { store_href } from "$lib/scripts/store";
    import { urls } from "$lib/scripts/urls";
    import RightArrow from "$lib/svgs/right_arrow.svelte";
    // import cover_picture from "$lib/assets/picture/cover_picture.png";
</script>

<div class="parent">
    <div class="content">
        <h2>I develope products that delight and inspire people.</h2>
        <p>
            A product visual developer focused on UI/UX, responsive design, and
            building modern experiences for web, desktop, and Android.
        </p>
        <a
            href={urls.contact}
            onclick={(event) => {
                handleSectionClick(event, "contact");
                store_href.set("contact");
            }}
            >Let's Talk <div class="icon"><RightArrow /></div></a
        >
    </div>
    <div class="picture">
        <img src={cover_picture} alt="" />
    </div>
</div>

<style>
    .parent {
        display: flex;
        align-items: center;
        width: 100%;
        height: fit-content;
        text-align: center;
        padding: 24px;
        background-color: var(--background);
        border-radius: 12px;
        overflow: hidden;
        transition: width 0.3s;
    }
    .content {
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: center;
    }
    p {
        font-family: "Inter", sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: var(--text);
    }
    h2 {
        font-size: 30px;
        font-weight: 600;
        line-height: 36px;
        font-family: "Inter", sans-serif;
        color: var(--text);
    }
    a {
        width: fit-content;
        height: fit-content;
        border-radius: 30px;
        gap: 24px;
        display: flex;
        align-items: center;
        padding: 6px 6px 6px 28px;
        background-color: var(--primary);
        border: none;
        font-family: "Inter";
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: var(--background);
        text-decoration: none;
    }
    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        background-color: var(--background);
        border-radius: 50%;
        transition: 0.3s;
    }
    .picture {
        display: none;
    }
    @media (min-width: 700px) {
        .parent{
            display: flex;
            flex-direction: row;
            align-self: center;
            padding: 0px;
            width: 640px;
            height: 400px;
            justify-content: space-between;
            transition: 0.3s;
        }
        .content{
            width: 60%;
            text-align: left;
            align-items: start;
            padding: 40px 0 40px 40px;
        }
        .picture{
            display: flex;
            width: 40%;
            height: 100%;
        }
        img{
            object-fit: fill;
        }
    }
    @media (min-width: 1024px) {
        .parent {
            display: flex;
            justify-content: space-between;
            width: 1020px;
            height: 500px;
            background-color: var(--background);
            border-radius: var(--radius12);   
            transition: 0.3s;
        }
        .content {
            width: 60%;
            display: flex;
            flex-direction: column;
            padding: 64px;
            gap: 32px;
        }
        h2 {
            font-family: "Inter";
            font-size: 48px;
            font-weight: 600;
            line-height: 56px;
            letter-spacing: 0%;
            color: var(--text);
        }
        p {
            width: 85%;
            font-family: "Inter";
            font-size: 18px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0%;
            color: var(--text);
        }
        a {
            border-radius: 56px;
            display: flex;
            font-size: 18px;
            font-weight: 500;
            line-height: 28px;
        }
        .icon {
            width: 44px;
            height: 44px;
        }
    }
</style>
