<script lang="ts">
  import { isDark, store_href } from "$lib/scripts/store";
  import { urls } from "$lib/scripts/urls";
  import Education from "$lib/svgs/education.svelte";
  import Home from "$lib/svgs/home.svelte";
  import Job from "$lib/svgs/job.svelte";
  import Message from "$lib/svgs/message.svelte";
  import PaintBucket from "$lib/svgs/paint_bucket.svelte";
  import Report from "$lib/svgs/report.svelte";
  import Vector from "$lib/svgs/vector.svelte";
  import { onMount } from "svelte";
  import MenuItem from "./menu_item.svelte";

  let currentSection = $state('');

  $effect(()=>{
    console.log(currentSection);
    store_href.set(currentSection != '' ? currentSection : 'Home')

  });

  onMount(()=>{
    const sections = document.querySelectorAll<HTMLElement>(".parent");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) =>{
                if(entry.isIntersecting){
                    currentSection = entry.target.id.toString().slice(0,1).toUpperCase() + entry.target.id.toString().slice(1);
                }
            });
        },
        {
            threshold: 0.5
        }
    );
    sections.forEach((s) => observer.observe(s));
    return()=> observer.disconnect();
  });

</script>

<div class="sub_parent">
  <div class="theme">
    <button onclick={() => isDark.update((t) => (t ? false : true))}><PaintBucket /></button>
  </div>
  <div class="menu_items">
    <MenuItem href={urls.home}><Home link="home" /></MenuItem>
    <MenuItem href={urls.service}><Vector link="service" /></MenuItem>
    <MenuItem href={urls.education}><Education link="education" /></MenuItem>
    <MenuItem href={urls.experience}><Job link="experience" /></MenuItem>
    <MenuItem href={urls.project}><Report link="project" /></MenuItem>
    <MenuItem href={urls.contact}><Message link="contact" /></MenuItem>
  </div>
</div>

<style>
  .sub_parent {
    width: 88px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
    border-radius: var(--radius12);
    background-color: var(--background);
  }
  .theme {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
  }
  .theme button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .menu_items {
    height: fit-content;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
</style>
