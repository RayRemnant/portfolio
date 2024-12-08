"use client";

import { Progress } from "@nextui-org/progress";
import { useEffect, useState } from "react";

export default function ProgressBar() {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPx = document.documentElement.scrollTop;
			const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const scrolled = (scrollPx / winHeightPx) * 100;

			setScrollProgress(scrolled);
		};

		window.addEventListener("scroll", handleScroll);

		// Call once to set initial value
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="flex flex-col gap-6 w-full max-w-md fixed top-0 left-0 right-0 z-50">
			<Progress
				aria-label="Page scroll progress"
				className="fixed top-0 left-0 right-0 z-50"
				classNames={{
					indicator: "bg-[length:200%_auto] bg-gradient-to-r from-[#F54180] via-[#9353D3] to-[#F54180]"
				}}
				radius="none"
				size="sm"
				value={scrollProgress}
			/>
		</div>
	);
}
