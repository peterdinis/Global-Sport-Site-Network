import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

export function fadeFly(
	node: Element,
	{ delay = 0, duration = 300, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}
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
