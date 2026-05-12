<script lang="ts">
  import { page } from "$app/state";
  import { handleSectionClick } from "$lib/scripts/scroll_utils";
  import { store_href } from "$lib/scripts/store";

  let { children, href } = $props();

  let text = href ? href.slice(1).charAt(0).toUpperCase() + href.slice(2) : "";
  let hreftext = href ? href.slice(1) : "";
</script>

<a
  href={href}
  class="sub_parent"
  class:active={$store_href == text}
  style="--text:'{text}'"
  onclick={(event) => {
    handleSectionClick(event, hreftext);
    // store_href.set(text);
  }}
>
  {@render children?.()}
</a>

<style>
  .sub_parent {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background-color: var(--itemColor);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    position: relative;
  }
  .sub_parent.active {
    background-color: var(--primary);
  }
  .sub_parent.active::after {
    content: var(--text);
    padding: 0 8px;
    height: 24px;
    position: absolute;
    margin-top: -92px;
    border-radius: 6px;
    background-color: var(--tooltip_color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: var(--text_secondary);
  }

  .sub_parent.active::before {
    content: '';
    width: 10px;
    height: 10px;
    background-color: var(--tooltip_color);
    position: absolute;
    margin-top: -69px;
    rotate: 45deg;
    border-radius: 1px;
  }
</style>