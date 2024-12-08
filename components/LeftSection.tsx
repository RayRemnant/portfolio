"use client";

import { motion } from "framer-motion";

import { title, subtitle } from "@/components/primitives";
import "@/styles/gradient.css";

export default function LeftSection() {
	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			className="text-right"
			initial={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.8, delay: 0.5 }}
		>
			<span className={title()}>Hello traveller!</span>
			<br />
			<motion.span
				animate={{ opacity: 1, x: 0 }}
				className={title()}
				initial={{ opacity: 0, x: -20 }}
				transition={{ delay: 1, duration: 0.8 }}
			>
				I&apos;m <span className={title() + " font-bold bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] bg-gradient-to-r from-[#F54180] via-[#9353D3] to-[#F54180]"} >Ray&nbsp;</span>

			</motion.span>
			<motion.div
				animate={{ opacity: 1 }}
				className={subtitle({ class: "mt-4" })}
				initial={{ opacity: 0 }}
				transition={{ delay: 1.5, duration: 0.8 }}
			>
				Web dev and tech enthusiast 💻
			</motion.div>
		</motion.div>)
}
