<script lang="ts">
	import { Search, Menu, Bell, X, Heart, User, LogOut, Settings, Tv } from 'lucide-svelte';
	import AuthModal from '../auth/AuthModal.svelte';

	let isMobileMenuOpen = false;
	let isAuthModalOpen = false;

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

	const handleLogout = () => {
		isMobileMenuOpen = false;
	};
</script>

<header class="relative bg-black text-white">
	<!-- Top Bar -->
	<div class="bg-red-600 py-1">
		<div class="mx-auto flex max-w-7xl items-center justify-between px-4 text-sm">
			<div class="flex items-center space-x-4">
				<span class="hidden animate-pulse sm:block">BREAKING: Latest Sports News Updates</span>
				<span class="animate-pulse text-xs sm:hidden">BREAKING NEWS</span>
			</div>
			<div class="flex items-center space-x-2 sm:space-x-4">
				<a href="/my-teams" class="p-1 transition-colors hover:text-red-200">
					<Heart class="h-4 w-4" />
				</a>
				<a
					href="/where-to-watch"
					class="hidden items-center transition-colors hover:text-red-200 sm:flex"
				>
					<Tv class="h-4 w-4" />
					<span class="ml-1">Watch</span>
				</a>
				<button class="p-1 transition-colors hover:text-red-200">
					<Bell class="h-4 w-4" />
				</button>
				<span class="hidden text-xs md:block">Notifications</span>
			</div>
		</div>
	</div>

	<!-- Main Header -->
	<div class="mx-auto max-w-7xl px-4 py-2 sm:py-3 md:py-4">
		<div class="flex items-center justify-between gap-2 sm:gap-4">
			<!-- Logo -->
			<a
				href="/"
				class="text-xl font-bold text-red-600 transition-colors hover:text-red-500 sm:text-2xl md:text-3xl"
			>
				ESPN
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden flex-1 items-center justify-center space-x-3 xl:flex">
				{#each navItems.slice(0, 12) as item}
					<a
						href="#"
						class="px-1 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:scale-105 hover:text-red-600"
					>
						{item}
					</a>
				{/each}
			</nav>

			<!-- Right Side -->
			<div class="flex flex-shrink-0 items-center space-x-1 sm:space-x-2 md:space-x-3">
				<!-- Desktop Search -->
				<div class="relative hidden lg:block">
					<Search
						class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400"
					/>
					<input
						type="text"
						placeholder="Search..."
						class="w-32 rounded-md bg-gray-800 py-2 pr-4 pl-10 text-sm text-white transition-all focus:ring-2 focus:ring-red-600 focus:outline-none xl:w-48"
					/>
				</div>

				<!-- Mobile Search -->
				<button class="p-2 transition-colors hover:text-red-600 lg:hidden">
					<Search class="h-4 w-4 sm:h-5 sm:w-5" />
				</button>

				<!-- My Teams -->
				<a href="/my-teams" class="hidden p-2 transition-colors hover:text-red-600 sm:block">
					<Heart class="h-4 w-4 sm:h-5 sm:w-5" />
				</a>

				<button
					on:click={() => (isAuthModalOpen = true)}
					class="flex items-center rounded bg-red-600 px-2 py-1 text-xs hover:bg-red-700 sm:px-3 sm:py-2"
				>
					<User class="h-4 w-4" />
					<span class="hidden sm:ml-2 sm:block">Prihlásiť</span>
				</button>

				<!-- Mobile Menu -->
				<button
					on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
					class="p-1 transition-colors hover:text-red-600 sm:p-2 xl:hidden"
				>
					{#if isMobileMenuOpen}
						<X class="h-5 w-5 sm:h-6 sm:w-6" />
					{:else}
						<Menu class="h-5 w-5 sm:h-6 sm:w-6" />
					{/if}
				</button>
			</div>
		</div>
		{#if isMobileMenuOpen}
			<div class="animate-fade-in mt-4 border-t border-gray-700 pb-4 xl:hidden">
				<div class="relative mt-4 mb-4">
					<Search
						class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400"
					/>
					<input
						type="text"
						placeholder="Search sports, teams, players..."
						class="w-full rounded-md bg-gray-800 py-3 pr-4 pl-10 text-base text-white focus:ring-2 focus:ring-red-600 focus:outline-none"
					/>
				</div>
				<div class="mb-4 grid grid-cols-2 gap-2">
					{#each navItems as item}
						<a
							href="#"
							class="block rounded px-3 py-3 text-center text-sm font-medium transition-colors hover:bg-gray-800 hover:text-red-600"
						>
							{item}
						</a>
					{/each}
				</div>

				<div class="space-y-2 border-t border-gray-700 pt-4">
					<a
						href="/my-teams"
						on:click={() => (isMobileMenuOpen = false)}
						class="flex items-center space-x-3 rounded px-4 py-3 hover:bg-gray-800 hover:text-red-600"
					>
						<Heart class="h-5 w-5" />
						<span>My Teams</span>
					</a>
					<a
						href="/where-to-watch"
						on:click={() => (isMobileMenuOpen = false)}
						class="flex items-center space-x-3 rounded px-4 py-3 hover:bg-gray-800 hover:text-red-600"
					>
						<Tv class="h-5 w-5" />
						<span>Where to Watch</span>
					</a>

					<button
						on:click={() => {
							isAuthModalOpen = true;
							isMobileMenuOpen = false;
						}}
						class="flex w-full items-center space-x-3 rounded px-4 py-3 text-left hover:bg-gray-800 hover:text-red-600"
					>
						<User class="h-5 w-5" />
						<AuthModal />
					</button>
				</div>
			</div>
		{/if}
	</div>
</header>
