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
		{
			homeTeam: 'Lakers',
			awayTeam: 'Warriors',
			homeScore: 108,
			awayScore: 112,
			status: 'FINAL',
			league: 'NBA'
		},
		{
			homeTeam: 'Chiefs',
			awayTeam: 'Bills',
			homeScore: 21,
			awayScore: 14,
			status: 'Q3 12:45',
			league: 'NFL'
		},
		{
			homeTeam: 'Yankees',
			awayTeam: 'Red Sox',
			homeScore: 7,
			awayScore: 3,
			status: 'B8',
			league: 'MLB'
		},
		{
			homeTeam: 'Rangers',
			awayTeam: 'Bruins',
			homeScore: 2,
			awayScore: 1,
			status: '2nd 15:30',
			league: 'NHL'
		},
		{
			homeTeam: 'Man City',
			awayTeam: 'Liverpool',
			homeScore: 1,
			awayScore: 2,
			status: "78'",
			league: 'EPL'
		},
		{
			homeTeam: 'Heat',
			awayTeam: 'Celtics',
			homeScore: 95,
			awayScore: 102,
			status: 'FINAL',
			league: 'NBA'
		},
		{
			homeTeam: 'Cowboys',
			awayTeam: 'Packers',
			homeScore: 24,
			awayScore: 17,
			status: 'Q4 5:32',
			league: 'NFL'
		},
		{
			homeTeam: 'Dodgers',
			awayTeam: 'Giants',
			homeScore: 8,
			awayScore: 5,
			status: 'T9',
			league: 'MLB'
		}
	];
</script>

<section class="overflow-hidden bg-red-600 py-2 text-white sm:py-3 md:py-4">
	<div class="mx-auto max-w-7xl px-4">
		<div class="mb-2 flex items-center space-x-2 sm:mb-3">
			<div class="h-2 w-2 animate-pulse rounded-full bg-white"></div>
			<h2 class="text-sm font-bold sm:text-base md:text-lg">LIVE SCORES</h2>
		</div>

		<div class="relative">
			<div class="scrollbar-hide overflow-x-auto">
				<div class="flex min-w-max space-x-3 pb-2 sm:space-x-4 md:space-x-6">
					{#each games as game, index (index)}
						<div
							class="min-w-[180px] flex-shrink-0 transform cursor-pointer rounded-lg bg-black/20 p-2.5 transition-all duration-200 hover:scale-105 hover:bg-black/30 sm:min-w-[200px] sm:p-3 md:min-w-[240px] md:p-4"
							style={`animation-delay: ${index * 100}ms`}
						>
							<div class="mb-2 text-xs font-medium text-red-200">{game.league}</div>
							<div class="flex items-center justify-between">
								<div class="min-w-0 flex-1 text-xs sm:text-sm">
									<div class="mb-1 truncate font-semibold">{game.awayTeam}</div>
									<div class="truncate font-semibold">{game.homeTeam}</div>
								</div>
								<div class="ml-2 text-right sm:ml-3">
									<div class="text-base leading-tight font-bold sm:text-lg md:text-xl">
										{game.awayScore}
									</div>
									<div class="text-base leading-tight font-bold sm:text-lg md:text-xl">
										{game.homeScore}
									</div>
								</div>
							</div>
							<div class="mt-2 text-center text-xs font-medium text-red-200">{game.status}</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Fade effect -->
			<div
				class="pointer-events-none absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-red-600 to-transparent sm:hidden"
			></div>
		</div>
	</div>
</section>
