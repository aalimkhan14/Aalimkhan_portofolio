<script>
  import { selected_catagory } from "$lib/data/data";


    let {text, onclick}= $props();

    let isActive = $derived(() => $selected_catagory == text);

</script>

<button 
    style="--color: { isActive() ? 'var(--primary)': 'var(--text_secondary)'}"
    onclick={onclick}
>{text}</button>

<style>
    button{
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: var(--color);
        outline: none;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
</style>