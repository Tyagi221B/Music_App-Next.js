"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function TestimonialCards() {
	return (
		<div className="h-[40rem] w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
			<h2 className="text-3xl font-bold text-center mb-8 z-10">
				Hear our Harmony: Voices of success
			</h2>
			<div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
				<div className="w-full max-w-6xl">
					<InfiniteMovingCards
						items={testimonials}
						direction="right"
						speed="normal"
					/>
				</div>
			</div>
		</div>
	);
}

const testimonials = [
	{
		quote:
			"Before AME, music was just a hobby. Now, I have the skills and confidence to perform and truly express myself. Thank you!",
		name: "Aisha Kapoor",
		title: "Sitar Student",
	},
	{
		quote:
			"My child has blossomed at AME. The teachers are patient, encouraging, and passionate about music. We're so grateful for this nurturing environment!",
		name: "Ravi Patel",
		title: "Parent of a Student",
	},
	{
		quote:
			"I never thought I could learn an instrument at my age, but AME made it fun and accessible. It's a joy to finally play the music I love!",
		name: "Priya Singh",
		title: "Tabla Student",
	},
	{
		quote:
			"Whether you're a beginner or a seasoned musician, AME has something to offer everyone. The supportive community and high-quality instruction are truly inspiring.",
		name: "Rahul Sharma",
		title: "Vocal Program Student",
	},
];
