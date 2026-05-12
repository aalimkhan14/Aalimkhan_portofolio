<script>
  import { major_skills } from "$lib/storage/skill";
import MajorSkillItem from "./major_skill_item.svelte";


</script>
<div class="sub_parent">
    <h2>Major Skill</h2>
    {#each major_skills as skill}
        <MajorSkillItem skill={skill.skill} percent={skill.percent} />
    {/each}
    
</div>
<style>
    .sub_parent{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 24px 0;
        border-bottom: 1px solid var(--horizontal_line);
    }
    h2{
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        color: var(--text);
    }
</style>