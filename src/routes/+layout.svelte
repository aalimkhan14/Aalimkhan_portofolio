<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
  import { isDark } from '$lib/scripts/store';
  import { onMount } from 'svelte';
	import '../app.css'
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

{@render children()}
