"use client";

import { useReward } from "react-rewards";

import MusicPlayer from "./MusicPlayer/MusicPlayer";
import { gradient } from "./primitives";

export default function NewSection() {
	const { reward: confettiReward, isAnimating: isConfettiAnimating } = useReward(
		"confettiReward",
		"confetti",
		{ position: "absolute" }
	);

	return (
		<section>
			<h1>
				I focus on{" "}
				<button
					className={`${gradient()} animate-gradient font-bold relative`}
					disabled={isConfettiAnimating}
					onClick={() => confettiReward()}
				>
					INTERACTIVITY
					<span className="top-6 absolute inset-0" id="confettiReward" />
				</button>
			</h1>

			<MusicPlayer />
		</section>
	);
}
