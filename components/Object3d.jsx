"use client";

import Spline from "@splinetool/react-spline/next";
import { motion } from "framer-motion";

export default function Object3d() {
	return (
		<motion.div
			animate={{ opacity: 1, scale: 1 }}
			initial={{ opacity: 0, scale: 0.8 }}
			style={{
				pointerEvents: "none",
				userSelect: "none",
				position: "relative",
				width: 450,
				height: 550,
			}}
			transition={{
				duration: 5,
				ease: "easeOut",
				delay: 1.5, // Adding a 2 second delay before animation starts
			}}
		>
			<Spline
				height={550}
				scene="https://prod.spline.design/rVj7hJ6IpnIFfWx7/scene.splinecode"
				style={{ display: "flex", justifyContent: "center" }}
				width={450}
			/>
			<div className="absolute bottom-0 w-full h-[100px] bg-white dark:bg-black z-10" />
		</motion.div>
	);
}
