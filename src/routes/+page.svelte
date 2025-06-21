<script>
	import HeroSection from "$lib/components/home/HeroSection.svelte";
	import LiveScores from "$lib/components/home/LiveScores.svelte";
	import Footer from "$lib/components/shared/Footer.svelte";
	import Navigation from "$lib/components/shared/Navigation.svelte";

</script>
<div class="min-h-screen bg-white">
    <Navigation />
    <LiveScores />
    <HeroSection />
    <Footer />
</div>