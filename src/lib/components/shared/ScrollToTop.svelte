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
  <div class="fixed bottom-6 right-6 z-50 animate-in fade-in duration-300">
    <Button
      onclick={scrollToTop}
      size="icon"
      variant="secondary"
      class="rounded-full shadow-lg bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <ChevronUp class="w-5 h-5" />
    </Button>
  </div>
{/if}