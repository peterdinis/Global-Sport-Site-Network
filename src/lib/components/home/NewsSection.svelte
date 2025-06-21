<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { cubicOut } from 'svelte/easing';
  import type { TransitionConfig } from 'svelte/transition';
  import { Heart, Star, Clock, Loader2 } from 'lucide-svelte';

  // Vlastná prechodová funkcia
  export function fadeFly(
    node: Element,
    {
      delay = 0,
      duration = 300,
      easing = cubicOut,
      x = 0,
      y = 0,
      opacity = 0
    } = {}
  ): TransitionConfig {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;

    return {
      delay,
      duration,
      easing,
      css: (t, u) =>
        `
          transform: translate(${x * u}px, ${y * u}px);
          opacity: ${t * target_opacity + (1 - t) * opacity};
        `
    };
  }

  let news: string | any[] = [];
  let loading = false;
  let page = 1;
  let hasMore = true;

  const initialNews = [
    {
      id: '1',
      title: "MVP Race Heats Up as Season Enters Final Stretch",
      summary: "Three players emerge as frontrunners in what's shaping up to be one of the closest MVP races in recent memory.",
      time: "2 hours ago",
      category: "NBA",
      featured: true,
      team: { id: 'lakers', name: 'Lakers', sport: 'NBA' }
    },
    {
      id: '2',
      title: "Trade Deadline Shakeup Changes Championship Odds",
      summary: "Major trades reshape the playoff picture with several contenders making bold moves.",
      time: "4 hours ago",
      category: "NFL",
      featured: false,
      team: { id: 'chiefs', name: 'Chiefs', sport: 'NFL' }
    },
    {
      id: '3',
      title: "Rookie Sensation Breaks 50-Year-Old Record",
      summary: "First-year player achieves milestone that hasn't been reached since 1974.",
      time: "6 hours ago",
      category: "MLB",
      featured: true,
      team: { id: 'yankees', name: 'Yankees', sport: 'MLB' }
    },
    {
      id: '4',
      title: "International Tournament Bracket Revealed",
      summary: "World's top teams learn their paths to glory in upcoming championship.",
      time: "8 hours ago",
      category: "Soccer",
      featured: false,
      team: { id: 'mancity', name: 'Man City', sport: 'Soccer' }
    },
    {
      id: '5',
      title: "Injury Update: Star Player Expected to Return",
      summary: "Medical team optimistic about recovery timeline for injured superstar.",
      time: "10 hours ago",
      category: "NBA",
      featured: false,
      team: { id: 'warriors', name: 'Warriors', sport: 'NBA' }
    },
    {
      id: '6',
      title: "Coach of the Year Candidates Emerge",
      summary: "Five coaches lead the race for the prestigious end-of-season award.",
      time: "12 hours ago",
      category: "NFL",
      featured: false,
      team: { id: 'bills', name: 'Bills', sport: 'NFL' }
    }
  ];

  const generateMoreNews = (pageNum: number) => {
    const categories = ["NBA", "NFL", "MLB", "Soccer"];
    const teams = [
      { id: 'celtics', name: 'Celtics', sport: 'NBA' },
      { id: 'cowboys', name: 'Cowboys', sport: 'NFL' },
      { id: 'dodgers', name: 'Dodgers', sport: 'MLB' },
      { id: 'barcelona', name: 'Barcelona', sport: 'Soccer' }
    ];

    return Array.from({ length: 6 }, (_, i) => ({
      id: `${(pageNum - 1) * 6 + i + 7}`,
      title: `Breaking Sports News ${(pageNum - 1) * 6 + i + 7}`,
      summary: "Latest developments in the world of sports continue to unfold with exciting updates.",
      time: `${Math.floor(Math.random() * 24) + 1} hours ago`,
      category: categories[i % categories.length],
      featured: Math.random() > 0.7,
      team: teams[i % teams.length]
    }));
  };

  onMount(() => {
    news = initialNews;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  async function loadMoreNews() {
    if (loading || !hasMore) return;
    loading = true;
    await tick();

    setTimeout(() => {
      const newNews = generateMoreNews(page + 1);
      news = [...news, ...newNews];
      page += 1;
      loading = false;

      if (page >= 5) {
        hasMore = false;
      }
    }, 1000);
  }

  function handleScroll() {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 &&
      !loading
    ) {
      loadMoreNews();
    }
  }

  let favorites = new Set<string>();
  function toggleFavorite(teamId: string) {
    favorites.has(teamId) ? favorites.delete(teamId) : favorites.add(teamId);
  }

  function isFavorite(teamId: string) {
    return favorites.has(teamId);
  }

  function categoryClass(category: string) {
    return {
      NBA: 'bg-orange-100 text-orange-800',
      NFL: 'bg-blue-100 text-blue-800',
      MLB: 'bg-green-100 text-green-800',
      Soccer: 'bg-purple-100 text-purple-800'
    }[category] ?? 'bg-gray-100 text-gray-800';
  }
</script>

<section class="bg-gray-100 py-8 sm:py-12">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900" in:fadeFly={{ x: -20, duration: 300 }}>
        Latest News
      </h2>
      <a href="#" class="text-red-600 hover:text-red-700 font-semibold transition-colors" in:fadeFly={{ x: 20, duration: 300 }}>
        View All News →
      </a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {#each news as article (article.id)}
        <div in:fadeFly={{ y: 20, duration: 300 }} class="hover:scale-105 transition-transform h-full">
          <a href={`/article/${article.id}`} class="block h-full">
            <article class="bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer group h-full">
              <div class="p-4 sm:p-6 h-full flex flex-col">
                <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <span class={`px-3 py-1 rounded-full text-xs font-semibold ${categoryClass(article.category)}`}>
                    {article.category}
                  </span>
                  <div class="flex items-center space-x-2">
                    {#if article.featured}
                      <Star class="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    {/if}
                    <button
                      class="p-1 hover:bg-gray-100 rounded"
                      on:click|preventDefault|stopPropagation={() => toggleFavorite(article.team.id)}
                    >
                      <Heart class={`w-4 h-4 ${isFavorite(article.team.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                    </button>
                  </div>
                </div>

                <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2 flex-grow">
                  {article.title}
                </h3>

                <p class="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3 flex-grow">
                  {article.summary}
                </p>

                <div class="flex items-center justify-between text-sm text-gray-500 mt-auto">
                  <div class="flex items-center">
                    <Clock class="w-4 h-4 mr-1" />
                    {article.time}
                  </div>
                  <span class="text-xs text-gray-400">{article.team.name}</span>
                </div>
              </div>
            </article>
          </a>
        </div>
      {/each}
    </div>

    {#if loading}
      <div class="flex justify-center items-center py-8" in:fadeFly={{ opacity: 0 }}>
        <Loader2 class="w-8 h-8 animate-spin text-red-600" />
        <span class="ml-2 text-gray-600">Loading more articles...</span>
      </div>
    {/if}

    {#if !hasMore && news.length > 6}
      <div class="text-center py-8" in:fadeFly={{ opacity: 0 }}>
        <p class="text-gray-600">You've reached the end of the articles!</p>
      </div>
    {/if}
  </div>
</section>