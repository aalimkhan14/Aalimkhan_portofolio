<script>
  import LeftSidebar from "$lib/components/left_sidebar.svelte";
  import RightSidebar from "$lib/components/right_sidebar.svelte";
  import ContactUs from "./contact_us.svelte";
  import Education from "./education.svelte";
  import Experience from "./experience.svelte";
  import Homepage from "./homepage.svelte";
  import Project from "./project.svelte";
  import Service from "./service.svelte";
</script>

<div class="parent" id="home">
  <div class="left_side">
    <LeftSidebar />
  </div>
  <div class="content">
    <Homepage />
    <Service title='My Services' description='I design and develop responsive websites, desktop applications, and mobile apps that are fast, clean, and easy to use.' />
    <Education />
    <Experience />
    <Project />
    <ContactUs title='Get In Touch' description='Have a project in mind or want to collaborate? Feel free to reach out — I’m always open to new opportunities.' />
    <div class="space"></div>
  </div>
  <div class="right_side">
    <RightSidebar />
  </div>
</div>
<style>
  .parent {
    display: flex;
    justify-self: center;
    justify-content: space-between;
    padding: 102px 20px 0;
    width: fit-content;
    gap: 32px;
    /* width: 1500px; */
    
  }
  .left_side{
    display: none;
  }
  .content {
    display: flex;
    flex-direction: column;
    max-width: 1050px;
    width: fit-content;
    gap: 112px;
  }
  .right_side{
    display: none;
  }
  .space{
    height: 30px;
  }
  @media(min-width: 1500px){
    .parent{
      padding-top: 32px;
    }
    .left_side, .right_side{
      display: flex;
      height: fit-content;
    }
    .right_side{
      position: sticky;
      top: 32px;
    }
  }
  
</style>
