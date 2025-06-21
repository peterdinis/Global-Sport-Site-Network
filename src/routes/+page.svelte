<script>
	import HeroSection from "$lib/components/home/HeroSection.svelte";
	import LiveScores from "$lib/components/home/LiveScores.svelte";
	import NewsSection from "$lib/components/home/NewsSection.svelte";
	import VideoSectionNews from "$lib/components/home/VideoSectionNews.svelte";
	import Footer from "$lib/components/shared/Footer.svelte";
	import Navigation from "$lib/components/shared/Navigation.svelte";
	import ScrollToTop from "$lib/components/shared/ScrollToTop.svelte";

</script>
<div class="min-h-screen bg-white">
    <Navigation />
    <LiveScores />
    <HeroSection />
    <NewsSection />
    <VideoSectionNews />
    <ScrollToTop />
    <Footer />
</div>