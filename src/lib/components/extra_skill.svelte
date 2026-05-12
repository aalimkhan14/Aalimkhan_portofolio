<script>
  import { extra_skills } from "$lib/storage/skill";
</script>
<div class="sub_parent">
    <h2>Extra Skill</h2>
    <div class="skills">
        {#each extra_skills as skill}
            <div>{skill.skill}</div>
        {/each}
    </div>
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
    .skills{
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .skills div{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px 12px;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        font-family: 'Inter', sans-serif;
        color: var(--text_secondary);
        cursor: context-menu;
        user-select: none;
    }
</style>