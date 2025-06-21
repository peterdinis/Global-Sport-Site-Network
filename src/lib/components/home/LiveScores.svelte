<script lang="ts">
  interface Game {
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
    status: string;
    league: string;
  }

  const games: Game[] = [
    { homeTeam: 'Lakers', awayTeam: 'Warriors', homeScore: 108, awayScore: 112, status: 'FINAL', league: 'NBA' },
    { homeTeam: 'Chiefs', awayTeam: 'Bills', homeScore: 21, awayScore: 14, status: 'Q3 12:45', league: 'NFL' },
    { homeTeam: 'Yankees', awayTeam: 'Red Sox', homeScore: 7, awayScore: 3, status: 'B8', league: 'MLB' },
    { homeTeam: 'Rangers', awayTeam: 'Bruins', homeScore: 2, awayScore: 1, status: '2nd 15:30', league: 'NHL' },
    { homeTeam: 'Man City', awayTeam: 'Liverpool', homeScore: 1, awayScore: 2, status: "78'", league: 'EPL' },
    { homeTeam: 'Heat', awayTeam: 'Celtics', homeScore: 95, awayScore: 102, status: 'FINAL', league: 'NBA' },
    { homeTeam: 'Cowboys', awayTeam: 'Packers', homeScore: 24, awayScore: 17, status: 'Q4 5:32', league: 'NFL' },
    { homeTeam: 'Dodgers', awayTeam: 'Giants', homeScore: 8, awayScore: 5, status: 'T9', league: 'MLB' },
  ];
</script>

<section class="bg-red-600 text-white py-2 sm:py-3 md:py-4 overflow-hidden">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex items-center space-x-2 mb-2 sm:mb-3">
      <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
      <h2 class="text-sm sm:text-base md:text-lg font-bold">LIVE SCORES</h2>
    </div>

    <div class="relative">
      <div class="overflow-x-auto scrollbar-hide">
        <div class="flex space-x-3 sm:space-x-4 md:space-x-6 min-w-max pb-2">
          {#each games as game, index (index)}
            <div
              class="bg-black/20 rounded-lg p-2.5 sm:p-3 md:p-4 min-w-[180px] sm:min-w-[200px] md:min-w-[240px] hover:bg-black/30 transition-all cursor-pointer flex-shrink-0 hover:scale-105 transform duration-200"
              style={`animation-delay: ${index * 100}ms`}
            >
              <div class="text-xs text-red-200 mb-2 font-medium">{game.league}</div>
              <div class="flex justify-between items-center">
                <div class="text-xs sm:text-sm flex-1 min-w-0">
                  <div class="font-semibold truncate mb-1">{game.awayTeam}</div>
                  <div class="font-semibold truncate">{game.homeTeam}</div>
                </div>
                <div class="text-right ml-2 sm:ml-3">
                  <div class="text-base sm:text-lg md:text-xl font-bold leading-tight">{game.awayScore}</div>
                  <div class="text-base sm:text-lg md:text-xl font-bold leading-tight">{game.homeScore}</div>
                </div>
              </div>
              <div class="text-xs text-red-200 mt-2 text-center font-medium">{game.status}</div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Fade effect -->
      <div class="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-red-600 to-transparent pointer-events-none sm:hidden"></div>
    </div>
  </div>
</section>
