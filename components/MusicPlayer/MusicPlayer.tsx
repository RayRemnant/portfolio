import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Slider } from "@heroui/slider";
import {
	IconHeart,
	IconPlayerPause,
	IconPlayerPlay,
	IconPlayerSkipForward,
	IconPlayerSkipBack,
	IconRepeat,
	IconArrowsShuffle,
	IconHeartFilled,
} from "@tabler/icons-react";
import "./music.css";

const songList = [
	{
		title: "American Pie",
		artist: "Don McLean",
		path: "/american-pie.ogg",
		albumCoverart: "/american-pie.png",
		duration: 503

	},
	{
		title: "Sixteen Tons",
		artist: "Tennessee Ernie Ford",
		path: "/sixteen-tons.mp3",
		albumCoverart: "/sixteen-tons.webp",
		duration: 155
	}
]

export const HeartIcon = () =>
	<IconHeart size={24} stroke={1.5} />;
export const HeartIconFilled = () =>
	<IconHeartFilled color="violet" size={24} stroke={1.5} />;
export const PauseIcon = () => <IconPlayerPause size={50} stroke={1.5} />;
export const PlayIcon = () => <IconPlayerPlay size={50} stroke={1.5} />;
export const NextIcon = () => <IconPlayerSkipForward size={24} stroke={1.5} />;
export const PreviousIcon = () => <IconPlayerSkipBack size={24} stroke={1.5} />;
export const RepeatIcon = ({ color = "currentColor" }: { color: string }) => <IconRepeat color={color} size={24} stroke={1.5} />;
export const ShuffleIcon = ({ color = "currentColor" }: { color: string }) => <IconArrowsShuffle color={color} size={24} stroke={1.5} />;

export default function App() {
	const [liked, setLiked] = React.useState(false);
	const [repeat, setRepeat] = React.useState(false);
	const [shuffle, setShuffle] = React.useState(false);
	const [isPlaying, setIsPlaying] = React.useState(false);
	const [currentTime, setCurrentTime] = React.useState(0);

	const [song, setSong] = React.useState(songList[0]);

	const audioRef = React.useRef<HTMLAudioElement>(null);

	const togglePlay = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const handleTimeUpdate = () => {
		if (audioRef.current) {
			setCurrentTime(audioRef.current.currentTime);
		}
	};

	/* const handleLoadedMetadata = () => {
		if (audioRef.current) {
			setDuration(audioRef.current.duration);
		}
	}; */

	const handleSliderChange = (value: number) => {


		if (audioRef.current) {
			const newTime = (value / 100) * song.duration;

			audioRef.current.currentTime = newTime;
			setCurrentTime(newTime);
		}
	};

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);

		return `${minutes}:${seconds.toString().padStart(2, '0')}`;
	};

	return (
		<Card
			isBlurred
			className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
			shadow="sm"
		>
			<CardBody>

				<audio
					ref={audioRef}
					loop={repeat}
					src={song.path}
					onCanPlay={() => {
						if (isPlaying) {
							audioRef.current?.play();
						}

					}}
					onEnded={() => setIsPlaying(false)}
					onLoadedMetadata={() => console.log("loaded")}
					onTimeUpdate={handleTimeUpdate}
				>
					<track kind="captions" />
				</audio>
				<div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
					<div className="relative col-span-6 md:col-span-4">
						<Image
							alt={song.title}
							className="object-cover"
							height={200}
							shadow="md"
							src={song.albumCoverart}
							width="100%"
						/>
					</div>

					<div className="flex flex-col col-span-6 md:col-span-8">
						<div className="flex justify-between items-start">
							<div className="flex flex-col gap-0">
								<h3 className="font-semibold text-foreground/90">{song.title}</h3>
								<p className="text-small text-foreground/80">{song.artist}</p>
							</div>
							<Button
								isIconOnly
								className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
								radius="full"
								variant="light"
								onPress={() => setLiked((v) => !v)}
							>
								{liked ? <HeartIconFilled /> : <HeartIcon />}
							</Button>
						</div>

						<div className="flex flex-col mt-3 gap-1">

							<Slider
								aria-label="Music progress"
								className=" py-0.5"
								classNames={{
									track: "bg-default-500/30",
									thumb: "w-3 h-3 after:w-3 after:h-3 after:bg-foreground",
								}}
								color="foreground"
								size="sm"
								value={song.duration ? (currentTime / song.duration) * 100 : 0}
								onChange={(value) => handleSliderChange(value as number)}
							/>
							<div className="flex justify-between">
								<p className="text-small">{formatTime(currentTime)}</p>
								<p className="text-small text-foreground/50">{formatTime(song.duration)}</p>
							</div>
						</div>

						<div className="flex w-full items-center justify-center gap-2">
							<Button
								isIconOnly
								className="data-[hover]:bg-foreground/10"
								radius="full"
								variant="light"
								onPress={() => setRepeat((v) => !v)}
							>
								<RepeatIcon color={repeat ? "violet" : "currentColor"} />
							</Button>
							<Button
								isIconOnly
								className="data-[hover]:bg-foreground/10"
								radius="full"
								variant="light"
								onPress={() => setSong(songList[0])}
							>
								<PreviousIcon />
							</Button>

							<Button
								isIconOnly
								className="data-[hover]:opacity-75 opacity-1 invert p-1 "
								radius="full"
								variant="solid"
								onPress={togglePlay}
							>
								{isPlaying ? <PauseIcon /> : <PlayIcon />}
							</Button>
							<Button
								isIconOnly
								className="data-[hover]:bg-foreground/10"
								radius="full"
								variant="light"
								onPress={() => {
									setSong(songList[1]);
								}}
							>
								<NextIcon />
							</Button>
							<Button
								isIconOnly
								className="data-[hover]:bg-foreground/10"
								radius="full"
								variant="light"
								onPress={() => setShuffle((v) => !v)}
							>
								<ShuffleIcon color={shuffle ? "violet" : "currentColor"} />
							</Button>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	);
}

