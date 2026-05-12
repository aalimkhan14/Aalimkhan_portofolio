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
    gap: 32px;
  }
  .parent {
    width: 1500px;
    padding-top: 32px;
  }
  .left_side{
    height: fit-content;
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 1050px;
    gap: 112px;
  }
  .right_side{
    height: fit-content;
    position: sticky;
    top: 32px;
  }
  .space{
    height: 30px;
  }
</style>
