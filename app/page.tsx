/* eslint-disable no-console */
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import {
	SiCss3,
	SiExpress,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiKoa,
	SiMantine,
	SiMongodb,
	SiNeo4j,
	SiNextdotjs,
	SiNextui,
	SiNodedotjs,
	SiPostman,
	SiPython,
	SiReact,
	SiSvelte,
	SiTsnode,
	SiVercel,
} from "@icons-pack/react-simple-icons";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import ScrollingBanner from "@/components/scrolling-banner";
import Object3d from "@/components/Object3d";
import LeftSection from "@/components/LeftSection";
import ProgressBar from "@/components/ProgressBar";
import NewSection from "@/components/NewSection";

export default function Home() {
	const size = 50;

	const logos = [
		{
			key: "html",
			logo: <SiHtml5 size={size} />,
		},
		{
			key: "css",
			logo: <SiCss3 size={size} />,
		},
		{
			key: "js",
			logo: <SiJavascript size={size} />,
		},
		{
			key: "typescript",
			logo: <SiTsnode size={size} />,
		},
		{
			key: "react",
			logo: <SiReact size={size} />,
		},
		{
			key: "next",
			logo: <SiNextdotjs size={size} />,
		},
		{
			key: "vercel",
			logo: <SiVercel size={size} />,
		},
		{
			key: "nodejs",
			logo: <SiNodedotjs size={size} />,
		},
		{
			key: "express",
			logo: <SiExpress size={size} />,
		},
		{
			key: "mongodb",
			logo: <SiMongodb size={size} />,
		},
		{
			key: "github",
			logo: <SiGithub size={size} />,
		},
		{
			key: "postman",
			logo: <SiPostman size={size} />,
		},
		{
			key: "python",
			logo: <SiPython size={size} />,
		},
		{
			key: "svelte",
			logo: <SiSvelte size={size} />,
		},
		{
			key: "koa",
			logo: <SiKoa size={size} />,
		},
		{
			key: "neo4j",
			logo: <SiNeo4j size={size} />,
		},
		{
			key: "mantine",
			logo: <SiMantine size={size} />,
		},
		{
			key: "nextui",
			logo: <SiNextui size={size} />,
		},
	];

	return (
		<section className="flex flex-col items-center justify-center gap-4 ">
			<ProgressBar />
			<div className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-8 w-full px-32 ">
				<div className="flex flex-col items-center justify-center w-[fill-available]">
					<LeftSection />
				</div>
				<div>
					<Object3d />
				</div>
			</div>

			<section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-32 lg:px-8 lg:py-40">
				<ScrollingBanner shouldPauseOnHover gap="40px">
					{logos.map(({ key, logo }) => (
						<div
							key={key}
							className="flex items-center justify-center text-foreground"
						>
							{logo}
						</div>
					))}
				</ScrollingBanner>
			</section>
			<NewSection />
			<section>
				<p>click button, show list on right with timestamp</p>
			</section>

			<div className="flex gap-3">
				<Link
					isExternal
					className={buttonStyles({
						color: "primary",
						radius: "full",
						variant: "shadow",
					})}
					href={siteConfig.links.docs}
				>
					Documentation
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideCopyButton hideSymbol variant="bordered">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div>
			<div>
				{/* section with tools and libraries used */}
			</div>
		</section>
	);
}
