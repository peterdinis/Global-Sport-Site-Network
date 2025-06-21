<script>
	import { Play } from 'lucide-svelte';
</script>

<section class="bg-gray-900 text-white">
	<div class="mx-auto max-w-7xl px-4 py-8">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
			<div class="lg:col-span-2">
				<div class="group relative cursor-pointer">
					<div
						class="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-purple-700"
					>
						<div class="absolute inset-0 flex items-center justify-center">
							<Play
								class="h-16 w-16 text-white opacity-80 transition-transform group-hover:scale-110"
							/>
						</div>
						<div
							class="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-6"
						>
							<span class="rounded bg-red-600 px-2 py-1 text-sm font-semibold text-white">
								BREAKING NEWS
							</span>
							<h1 class="mt-2 text-3xl leading-tight font-bold">
								Championship Game Reaches Historic Viewership Numbers
							</h1>
							<p class="mt-2 text-gray-300">
								Last night's game broke multiple records with over 50 million viewers tuning in for
								the epic showdown.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="space-y-6">
				<div class="group cursor-pointer">
					<div
						class="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-green-600 to-blue-600"
					>
						<div
							class="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-4"
						>
							<span class="rounded bg-orange-600 px-2 py-1 text-xs font-semibold text-white">
								HIGHLIGHTS
							</span>
							<h3 class="mt-1 text-lg font-bold">Top 10 Plays of the Week</h3>
						</div>
					</div>
				</div>

				<div class="group cursor-pointer">
					<div
						class="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-red-600 to-orange-600"
					>
						<div
							class="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-4"
						>
							<span class="rounded bg-blue-600 px-2 py-1 text-xs font-semibold text-white">
								ANALYSIS
							</span>
							<h3 class="mt-1 text-lg font-bold">Trade Deadline Updates</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
