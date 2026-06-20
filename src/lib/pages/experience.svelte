<script>
  import AcademicContent from "$lib/components/academic_content.svelte";
  import Description from "$lib/components/description.svelte";
  import Title from "$lib/components/title.svelte";

  let title = 'Experience';
  let description = 'Frontend developer focused on building responsive and user-friendly cross-platform applications using Flutter, with attention to performance, accessibility, and clean design.';

</script>

<div class="parent" id="experience">
  <div class="title">
    <Title title={title} />
    <Description description={description} />
  </div>
  <div class="table">
    <AcademicContent
      title='Arfoon Software Company'
      state='Intern'
      date='Jul 2025 - Oct 2025'
      certificate='Internship Frontend Developer'
      content="Completed internship in web development using Svelte and TypeScript, focusing on building responsive user interfaces, component-based architecture, and improving frontend development skills through real-world projects."
    />
    <div class="line"></div>
    <AcademicContent
      title='Arfoon Software Company'
      state='Junior Developer'
      date='Jan 2026 - Now'
      certificate='Frontend Development'
      content="Junior Flutter developer building cross-platform mobile apps with a focus on responsive UI, state management, and real-world application development."
    />
    <!-- <div class="line"></div>
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
    max-width: 438px;
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