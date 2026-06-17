<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
  	import { isDark } from '$lib/scripts/store';
  	import { onMount } from 'svelte';
	import '../app.css'
    import ThemeButton from '$lib/components/theme_button.svelte';
    import MenuButton from '$lib/components/menu_button.svelte';
    import Menu from '$lib/svgs/menu.svelte';
    import MenuWidget from '$lib/components/menu_widget.svelte';
	let { children } = $props();

	function applyTheme(dark:boolean){
		if(dark){
			document.documentElement.setAttribute('data-theme','light');
		}else{
			document.documentElement.setAttribute('data-theme', 'dark')
		}
	}

	$effect(()=> applyTheme($isDark));
	onMount(()=> applyTheme($isDark));


</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<header>
	<div class="avatar"></div>
	<section class="end">
		<ThemeButton useDefaultPadding={false} />
		<MenuButton />
	</section>
</header>


{@render children()}
<style>

	header{
		display: flex;
		justify-self: center;
		width: calc(100% - 40px);
		padding: 12px 24px 12px 12px;
		background-color: var(--background);
		margin: 0 20px;
		margin-top: 20px;
		border-radius: 32px;
		justify-content: space-between;
		align-items: center;
	}
	.avatar{
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background-color: var(--primary);
	}
	.end{
		display: flex;
		flex-direction: row;
		gap: 24px;
	}
	@media(min-width: 700px){
		header{
			width: 640px;
		}
	}
	@media(min-width: 1024px){
		header{
			width: 1020px;
		}
	}
	@media(min-width: 1500px){
		header{
			display: none;
		}
	}
</style>