"use client";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const HeroSection = () => {
	const words = "Master the art of music"
	return (
		<div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="orange"
			/>
			<div className="p-4 relative z-10 w-full text-center">
				<h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
					<TextGenerateEffect words={words} className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold"/>
				</h1>
				<p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
					Dive into our comprehensive music courses and transform your musical
					journey today. Whether you are a beginner or looking to refine your
					skills, join us to unlock your true potential.
				</p>
				<div className="mt-4">
					<Link href={"/courses"}>
						<Button
							duration={500}
							borderClassName="bg-red-800 bg-yellow-400 bg-orange-400"
							borderRadius="1.75rem"
							className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
						>
							Explore courses
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
