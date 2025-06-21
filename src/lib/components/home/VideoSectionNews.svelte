<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { tick } from 'svelte';
  import { Play, Eye, Loader2 } from 'lucide-svelte';
	import { fadeFly } from '../../../utils/fadeFly';

  let videos: string | any[] = [];
  let loading = false;
  let page = 1;
  let hasMore = true;

  const initialVideos = [
    {
      id: 1,
      title: "Incredible Buzzer Beater Wins Game",
      duration: "0:45",
      views: "2.1M",
      thumbnail: "from-blue-500 to-purple-600",
      category: "NBA Highlights"
    },
    {
      id: 2,
      title: "Amazing Touchdown Pass in Final Minutes",
      duration: "1:23",
      views: "1.8M",
      thumbnail: "from-green-500 to-blue-500",
      category: "NFL Highlights"
    },
    {
      id: 3,
      title: "Home Run Derby Champion Crowned",
      duration: "2:15",
      views: "950K",
      thumbnail: "from-red-500 to-orange-500",
      category: "MLB Highlights"
    },
    {
      id: 4,
      title: "Goalie Makes Spectacular Save",
      duration: "0:32",
      views: "1.2M",
      thumbnail: "from-indigo-500 to-cyan-500",
      category: "NHL Highlights"
    },
    {
      id: 5,
      title: "World Cup Qualifier Highlights",
      duration: "3:45",
      views: "3.2M",
      thumbnail: "from-yellow-500 to-red-500",
      category: "Soccer Highlights"
    },
    {
      id: 6,
      title: "College Championship Final Moments",
      duration: "2:08",
      views: "1.5M",
      thumbnail: "from-purple-500 to-pink-500",
      category: "College Sports"
    }
  ];

  function generateMoreVideos(pageNum: number) {
    const categories = ["NBA Highlights", "NFL Highlights", "MLB Highlights", "NHL Highlights", "Soccer Highlights", "College Sports"];
    const thumbnails = [
      "from-blue-500 to-purple-600",
      "from-green-500 to-blue-500",
      "from-red-500 to-orange-500",
      "from-indigo-500 to-cyan-500",
      "from-yellow-500 to-red-500",
      "from-purple-500 to-pink-500"
    ];

    return Array.from({ length: 6 }, (_, i) => ({
      id: (pageNum - 1) * 6 + i + 7,
      title: `Sports Highlight ${(pageNum - 1) * 6 + i + 7}`,
      duration: `${Math.floor(Math.random() * 3) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      views: `${(Math.random() * 5 + 0.5).toFixed(1)}M`,
      thumbnail: thumbnails[i % thumbnails.length],
      category: categories[i % categories.length]
    }));
  }

  onMount(() => {
    videos = initialVideos;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  async function loadMoreVideos() {
    if (loading || !hasMore) return;
    loading = true;
    await tick();
    setTimeout(() => {
      const newVideos = generateMoreVideos(page + 1);
      videos = [...videos, ...newVideos];
      page += 1;
      loading = false;
      if (page >= 5) hasMore = false;
    }, 1000);
  }

  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 && !loading) {
      loadMoreVideos();
    }
  }
</script>

<section class="bg-white py-8 sm:py-12">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex items-center justify-between mb-6 sm:mb-8">
      <h2 in:fadeFly={{ x: -20, duration: 400 }} class="text-2xl sm:text-3xl font-bold text-gray-900">
        Video Highlights
      </h2>
      <a href="#" in:fadeFly={{ x: 20, duration: 400 }} class="text-red-600 hover:text-red-700 font-semibold text-sm sm:text-base">
        Watch All Videos →
      </a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {#each videos as video (video.id)}
        <div in:fadeFly={{ y: 20, duration: 300 }} class="group cursor-pointer">
          <div class="relative">
            <div class={`aspect-video bg-gradient-to-br ${video.thumbnail} rounded-lg overflow-hidden`}>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="bg-black/60 rounded-full p-3 sm:p-4 group-hover:bg-black/80 transition-colors">
                  <Play class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <div class="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs sm:text-sm font-medium">
                {video.duration}
              </div>
            </div>

            <div class="mt-3 sm:mt-4">
              <div class="text-xs sm:text-sm text-red-600 font-semibold mb-1">{video.category}</div>
              <h3 class="text-base sm:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2 line-clamp-2">
                {video.title}
              </h3>
              <div class="flex items-center text-xs sm:text-sm text-gray-500 space-x-4">
                <div class="flex items-center">
                  <Eye class="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {video.views} views
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    {#if loading}
      <div class="flex justify-center items-center py-8" in:fade>
        <Loader2 class="w-6 h-6 sm:w-8 sm:h-8 animate-spin text-red-600" />
        <span class="ml-2 text-gray-600 text-sm sm:text-base">Loading more videos...</span>
      </div>
    {/if}

    {#if !hasMore && videos.length > 6}
      <div class="text-center py-8" in:fade>
        <p class="text-gray-600 text-sm sm:text-base">You've reached the end of the videos!</p>
      </div>
    {/if}
  </div>
</section>
