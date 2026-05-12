<script>
  import Description from "$lib/components/description.svelte";
  import ServiceItem from "$lib/components/service_item.svelte";
  import Title from "$lib/components/title.svelte";
  import GraphicsDesign from "$lib/svgs/graphics_design.svelte";
  import MobileDevelopment from "$lib/svgs/mobile_development.svelte";
  import WebDevelopment from "$lib/svgs/web_development.svelte";

  let {title ,description} = $props();

</script>

<div class="parent" id="service">
  <div class="title">
    <Title title={title} />
    <Description description={description} />
  </div>
  <div class="content">
    <ServiceItem icon={WebDevelopment} title='Web Development' content1='Frontend Developent' content2='Backend Development' content3='CMS Development' />
    <ServiceItem icon={MobileDevelopment} title='App Development' content1='iOS Development' content2='Android Development' content3='Cross-Platform Development' />
    <ServiceItem icon={GraphicsDesign} title='Graphics Design' content1='Branding Design' content2='Social Media Post' content3='Logo Design' />
    
  </div>
</div>

<style>
  .parent {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 48px;
  }
  .title {
    display: flex;
    flex-direction: column;
    font-family: "Inter", sans-serif;
    width: 438px;
    text-align: center;
    gap: 16px;
  }
  .content{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
  }
</style>
