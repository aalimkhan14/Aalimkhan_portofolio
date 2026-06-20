<script>
  import CatagoryButton from "$lib/components/catagory_button.svelte";
  import Description from "$lib/components/description.svelte";
  import ProjectCard from "$lib/components/project_card.svelte";
  import Title from "$lib/components/title.svelte";
  import { catagories, uiTemplates, webTemplates } from "$lib/data/fake_data";
  import { selected_catagory, templates } from "$lib/data/data";


  let title = "Project";
  let description = "A collection of frontend and mobile development projects showcasing responsive web applications and Flutter-based mobile apps built with modern technologies. Each project reflects my skills in creating clean, user-friendly, and functional digital experiences.";

</script>

<div class="parent" id="project">
    <div class="title">
        <Title title={title} />
        <Description description={description} />
    </div>
    <div class="catagories">
        {#each catagories as catagory}
            <CatagoryButton text={catagory} onclick={()=>{
                selected_catagory.set(catagory);
                if(catagory ==  'UI Templates'){
                    templates.set(uiTemplates);
                }else{
                    templates.set(webTemplates);
                }
            }} />
        {/each}
        
    </div>
    <div class="projects">
        {#each $templates as template}
            <ProjectCard image={template.image} preview_path={template.preview_path} github_path={template.github_path} />
        {/each}
    </div>
</div>

<style>
    .parent {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: fit-content;
      align-items: center;
      gap: 48px;
    }
    .title{
        display: flex;
        flex-direction: column;
        font-family: "Inter", sans-serif;
        max-width: 538px;
        text-align: center;
        gap: 16px;
    }
    .catagories{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 24px;
    }
    .projects{
        display: flex;
        flex-direction: row;
        gap: 24px;
        width: 100%;
        height: fit-content;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media(min-width: 1024px){
        .projects{
            justify-content: start;
        }
    }
</style>