<script>
  import Button from "./button.svelte";
  import ExtraSkill from "./extra_skill.svelte";
  import Info from "./info.svelte";
  import MajorSkill from "./major_skill.svelte";
</script>
<div class="sub_parent">
    <Info />
    <MajorSkill />
    <ExtraSkill />
    <Button text='Download My CV' />
</div>
<style>
    .sub_parent{
        width: 300px;
        height: fit-content;
        background-color: var(--background);
        border-radius: var(--radius12);
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 24px;
    }
</style>