<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import { isDark, isShrunk } from "$lib/scripts/store";
	import { onMount } from "svelte";
	import "../app.css";
	import ThemeButton from "$lib/components/theme_button.svelte";
	import MenuButton from "$lib/components/menu_button.svelte";
	import { handleSectionClick } from "$lib/scripts/scroll_utils";
	import { fly } from "svelte/transition";

	let { children } = $props();
	let header: HTMLElement;
	let menuItems: Array<string> = [
		"Home",
		"Service",
		"Education",
		"Experience",
		"Project",
		"Contact",
	];

	function applyTheme(dark: boolean) {
		if (dark) {
			document.documentElement.setAttribute("data-theme", "light");
		} else {
			document.documentElement.setAttribute("data-theme", "dark");
		}
	}

	function clickOutside(event: MouseEvent) {
		if (header && !header.contains(event.target as Node)) {
			isShrunk.set(false);
		}
	}

	$effect(() => applyTheme($isDark));

	onMount(() => {
		applyTheme($isDark);

		document.addEventListener("click", clickOutside);

		return () => {
			document.removeEventListener("click", clickOutside);
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header bind:this={header} class:expanded={$isShrunk}>
	<div class="header_content">
		<div class="avatar"></div>

		<section class="end">
			<ThemeButton useDefaultPadding={false} />
			<MenuButton />
		</section>
	</div>

	<div class="menu">
		<nav>
			{#each menuItems as item}
				<a
					onclick={(event) => {
						handleSectionClick(event, item.toLowerCase());
						isShrunk.set(false);
					}}
					href="#{item.toLowerCase()}">{item}</a
				>
			{/each}
		</nav>
	</div>
	{#if $isShrunk}
		<div class="miniMenu" in:fly={{ y: -20, duration: 200 }} out:fly={{y: -20, duration: 200}}>
			<nav>
				{#each menuItems as item}
					<a
						onclick={(event) => {
							handleSectionClick(event, item.toLowerCase());
							isShrunk.set(false);
						}}
						href="#{item.toLowerCase()}">{item}</a
					>
				{/each}
			</nav>
		</div>
	{/if}
</header>

{@render children()}

<style>
	header {
		display: flex;
		flex-direction: column;
		width: calc(100% - 40px);
		padding: 12px 24px 12px 12px;
		background-color: var(--background);
		margin: 20px 20px 0;
		border-radius: 32px;
		overflow: visible;
		transition: all 0.3s ease;
		justify-self: center;
		position: fixed;
		z-index: 1;
	}

	.header_content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.avatar {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background-color: var(--primary);
	}

	.end {
		display: flex;
		flex-direction: row;
		gap: 24px;
	}

	/* MENU */
	.menu {
		max-height: 0;
		opacity: 0;
		overflow: hidden;
		transition:
			max-height 0.3s ease,
			opacity 0.3s ease,
			transform 0.3s ease;
	}

	/* OPEN STATE */
	header.expanded .menu {
		max-height: 400px;
		opacity: 1;
		transform: translateY(0);
	}

	.menu nav {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 16px 0 0 0;
	}
	.menu nav a {
		text-decoration: none;
		color: var(--text);
		font-family: "Inter", sans-serif;
		letter-spacing: 1px;
		background-color: var(--surface);
		padding: 12px;
		border-radius: 24px;
	}
	.menu nav a:active {
		background-color: var(--primary);
	}
	.miniMenu {
		display: none;
	}

	/* responsive */
	@media (min-width: 700px) {
		header {
			width: 640px;
		}
		.menu {
			display: none;
		}
		.miniMenu {
			position: absolute;
			display: flex;
			padding: 12px 16px;
			width: 150px;
			background-color: var(--surface);
			border-radius: 18px;
			z-index: 2;
			right: 0;
			top: 80px;
			box-shadow: 0 0 5px 1px color-mix(in srgb, var(--text_secondary) 20%, transparent);
		}
		.miniMenu nav {
			display: flex;
			flex-direction: column;
			gap: 12px;
		}
		.miniMenu nav a {
			text-decoration: none;
			font-family: "Inter", sans-serif;
			color: var(--text);
		}
		.miniMenu nav a:hover {
			color: var(--primary);
		}
		.miniMenu nav a:active {
			color: var(--primary);
		}
	}

	@media (min-width: 1024px) {
		header {
			width: 1020px;
		}
	}

	@media (min-width: 1500px) {
		header {
			display: none;
		}
	}
</style>
