<script>
	import { Heart, Tv, Bell, Search } from 'lucide-svelte';
	import ModeToggle from './ModeToggle.svelte';

	const navItems = [
		'NFL',
		'NBA',
		'MLB',
		'NHL',
		'Soccer',
		'Tennis',
		'Golf',
		'Boxing',
		'MMA',
		'College Football',
		'College Basketball',
		'NASCAR',
		'F1',
		'Olympics',
		'WNBA',
		'Cricket',
		'Rugby',
		'Swimming',
		'Track & Field',
		'Cycling',
		'More Sports'
	];
</script>

<div>
	<header class="relative bg-black text-white">
		<div class="bg-red-600 py-1">
			<div class="mx-auto flex max-w-7xl items-center justify-between px-4 text-sm">
				<div class="flex items-center space-x-4">
					<span class="hidden animate-pulse sm:block">BREAKING: Latest Sports News Updates</span>
					<span class="animate-pulse sm:hidden">BREAKING NEWS</span>
				</div>
				<div class="flex items-center space-x-2 sm:space-x-4">
					<a href="/favorites" class="transition-colors hover:text-red-200">
						<Heart class="h-4 w-4" />
					</a>
					<a
						href="/where-to-watch"
						class="flex items-center space-x-1.5 transition-colors hover:text-red-200"
					>
						<Tv class="h-4 w-4" />
						<span class="text-sm">Watch</span>
					</a>
					<Bell class="h-4 w-4" />
					<span class="hidden sm:block">Notifications</span>
				</div>
			</div>
		</div>

		<div class="mx-auto max-w-7xl px-4 py-3 sm:py-4">
			<div class="flex items-center justify-between gap-4">
				<div class="flex-shrink-0">
					<a
						href="/"
						class="text-2xl font-bold text-red-600 transition-colors hover:text-red-500 sm:text-3xl"
					>
						GSSN
					</a>
				</div>
				<nav class="hidden flex-1 items-center justify-center space-x-3 xl:flex">
					{#each navItems.slice(0, 12) as item (item)}
						<a
							href="#"
							class="px-1 py-2 text-sm font-medium whitespace-nowrap transition-transform hover:scale-105 hover:text-red-600"
						>
							{item}
						</a>
					{/each}
				</nav>
				<div class="flex flex-shrink-0 items-center space-x-2 sm:space-x-3">
					<div class="relative hidden lg:block">
						<Search
							class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400"
						/>
						<input
							type="text"
							placeholder="Search..."
							class="w-48 rounded-md bg-gray-800 py-2 pr-4 pl-10 text-sm text-white transition-all focus:ring-2 focus:ring-red-600 focus:outline-none"
						/>
					</div>
					<button class="p-2 transition-colors hover:text-red-600 lg:hidden">
						<Search class="h-5 w-5" />
					</button>
					<a href="/my-teams" class="hidden p-2 transition-colors hover:text-red-600 sm:block">
						<Heart class="h-5 w-5" />
					</a>
					<ModeToggle />
				</div>
			</div>
		</div>
	</header>
</div>
