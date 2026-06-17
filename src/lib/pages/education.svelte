<script>
  import AcademicContent from "$lib/components/academic_content.svelte";
  import Description from "$lib/components/description.svelte";
  import Title from "$lib/components/title.svelte";

  let title = 'Education';
  let description = 'Currently focused on software development and continuously learning modern technologies in web, desktop, and mobile app development alongside UI/UX design.';

</script>

<div class="parent" id="education">
  <div class="title">
    <Title title={title} />
    <Description description={description} />
  </div>
  <div class="table">
    <AcademicContent
      title='University of Kunduz'
      state='Student'
      date='Apr 2021 - Jun 2025'
      certificate='Certificate of Web training'
      content="Completed practical training in modern web development, focusing on HTML, CSS, JavaScript, and responsive UI design. Built real-world projects and improved problem-solving skills through hands-on practice." />
    <!-- <div class="line"></div>
    <AcademicContent
      title='University of Kunduz'
      state='Student'
      date='Apr 2021 - Jun 2024'
      certificate='Certificate of Web training'
      content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum distinctio ipsa incidunt perferendis et laudantium molestias excepturi illo nihil aspernatur, molestiae itaque a veniam, deleniti ex fugiat suscipit iusto assumenda.'
    />
    <div class="line"></div>
    <AcademicContent
      title='University of Kunduz'
      state='Student'
      date='Apr 2021 - Jun 2024'
      certificate='Certificate of Web training'
      content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum distinctio ipsa incidunt perferendis et laudantium molestias excepturi illo nihil aspernatur, molestiae itaque a veniam, deleniti ex fugiat suscipit iusto assumenda.'
    /> -->
  </div>
</div>
<style>
  .parent {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 48px;
    align-self: center;
  }
  .title {
    display: flex;
    flex-direction: column;
    font-family: "Inter", sans-serif;
    width: 438px;
    text-align: center;
    gap: 16px;
  }
  .table{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px;
    background-color: var(--background);
    border-radius: 12px;
    gap: 40px;
  }
  .line{
    width: 100%;
    height: 1px;
    background-color: var(--horizontal_line);
  }
  
  @media(min-width: 700px){
    .parent{
      width: 640px;
    }
  }

  @media(min-width: 1024px){
    .parent{
      width: 1020px;
    }
  }
</style>