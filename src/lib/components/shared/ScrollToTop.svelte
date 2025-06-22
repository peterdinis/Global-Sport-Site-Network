<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { ChevronUp } from 'lucide-svelte';
	import { writable } from 'svelte/store';

	const show = writable(false);

	onMount(() => {
		const handleScroll = () => {
			show.set(window.scrollY > 300);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if $show}
	<div class="animate-in fade-in fixed right-6 bottom-6 z-50 duration-300">
		<Button
			onclick={scrollToTop}
			size="icon"
			variant="secondary"
			class="bg-background/80 supports-[backdrop-filter]:bg-background/60 rounded-full shadow-lg backdrop-blur"
		>
			<ChevronUp class="h-5 w-5" />
		</Button>
	</div>
{/if}
