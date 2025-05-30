"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/gradient.css";

export default function CookieBanner() {

	const [buttonText, setButtonText] = useState('Reject');

	useEffect(() => {
		if (!window.matchMedia('(hover: hover)').matches) {
			const timer = setTimeout(() => {
				setButtonText('Ok');
			}, 5000);

			return () => clearTimeout(timer);
		}
	}, []);

	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		// Check if user has already made a choice
		const cookieChoice = localStorage.getItem("cookieChoice");

		if (cookieChoice) {
			setIsVisible(false);
		}
	}, []);

	const handleAccept = () => {
		setIsVisible(false);
		localStorage.setItem("cookieChoice", "accepted");
	};

	const handleReject = () => {
		setIsVisible(false);
		localStorage.setItem("cookieChoice", "rejected");
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					animate={{ opacity: 1, y: 0 }}
					className="pointer-events-none fixed inset-x-0 bottom-0 z-50"
					exit={{ opacity: 0, y: 100 }}
					initial={{ opacity: 0, y: 100 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
				>
					<div className="pointer-events-auto flex w-full items-center justify-around gap-x-20 border border-divider bg-background/15 px-6 py-4 shadow-small backdrop-blur">
						<p className="text-small font-normal text-default-700">
							I don&apos;t use cookies, but I like the{" "}
							<span className="text-small font-bold bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] bg-gradient-to-r from-[#F54180] via-[#9353D3] to-[#F54180]">
								illusion of choice.
							</span>
						</p>
						<div className="flex items-center gap-2">
							<Button
								className="px-4 font-medium"
								radius="lg"
								style={{
									border: "solid 2px transparent",
									backgroundImage: `linear-gradient(hsl(var(--heroui-background)), hsl(var(--heroui-background))), linear-gradient(83.87deg, #F54180, #9353D3)`,
									backgroundOrigin: "border-box",
									backgroundClip: "padding-box, border-box",
								}}
								onClick={handleAccept}
							>
								Agree
							</Button>
							<Button
								className="font-medium relative overflow-hidden"
								radius="lg"
								variant="light"
								onClick={handleReject}
								onMouseEnter={() => {
									if (window.matchMedia('(hover: hover)').matches) {
										const reject = document.getElementById('reject-text');
										const agree = document.getElementById('agree-text');

										if (reject && agree) {
											reject.animate([
												{ opacity: 1 },
												{ opacity: 0 }
											], {
												duration: 300,
												fill: 'forwards',
												easing: 'ease-in-out'
											});

											agree.animate([
												{ opacity: 0 },
												{ opacity: 1 }
											], {
												duration: 300,
												fill: 'forwards',
												easing: 'ease-in-out'
											});
										}
									}
								}}
								onMouseLeave={() => {
									if (window.matchMedia('(hover: hover)').matches) {
										const reject = document.getElementById('reject-text');
										const agree = document.getElementById('agree-text');

										if (reject && agree) {
											reject.animate([
												{ opacity: 0 },
												{ opacity: 1 }
											], {
												duration: 300,
												fill: 'forwards',
												easing: 'ease-in-out'
											});

											agree.animate([
												{ opacity: 1 },
												{ opacity: 0 }
											], {
												duration: 300,
												fill: 'forwards',
												easing: 'ease-in-out'
											});
										}
									}
								}}
							>
								<motion.span
									className="absolute inset-0 flex items-center justify-center"
									id="reject-text"
									initial={{ opacity: 1 }}
								>
									{buttonText}
								</motion.span>
								<motion.span
									className="absolute inset-0 flex items-center justify-center"
									id="agree-text"
									initial={{ opacity: 0 }}
								>
									Agree
								</motion.span>
							</Button>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
