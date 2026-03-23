"use client";

import React from "react";
import { CalendarDays, Smartphone } from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import {
	LeadCaptureForm,
	LeadCaptureSubmitData,
} from "@/app/components/form/lead-capture-form";

interface ContainerProps {
	titleRedLine: React.ReactNode | null,
	redLine: React.ReactNode | null,
	formName: string,
	onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
	submitError?: string | null;
}

export default function HeroSection({
	titleRedLine,
	redLine,
	formName,
	onSubmit,
	submitError
}: ContainerProps) {
	const [isCtaVisible, setIsCtaVisible] = React.useState(false);

	React.useEffect(() => {
		if (isCtaVisible) return;

		const releaseTimeInSeconds = 19 * 60 + 43;

		const readCurrentTime = () => {
			const anyWindow = window as Window & {
				smartplayer?: { instances?: Record<string, unknown> };
			};
			const playerId = "69bd47beb1f8e9f7f4f1822e";

			const instance = anyWindow.smartplayer?.instances?.[playerId] as
				| { currentTime?: number; getCurrentTime?: () => number }
				| undefined;

			if (instance) {
				if (typeof instance.currentTime === "number") return instance.currentTime;
				if (typeof instance.getCurrentTime === "function") {
					const time = instance.getCurrentTime();
					if (typeof time === "number") return time;
				}
			}

			const playerElement = document.getElementById(
				`vid-${playerId}`,
			) as
				| {
						currentTime?: number;
						getCurrentTime?: () => number;
						player?: { currentTime?: number; getCurrentTime?: () => number };
				  }
				| null;

			if (playerElement) {
				if (typeof playerElement.currentTime === "number") {
					return playerElement.currentTime;
				}
				if (typeof playerElement.getCurrentTime === "function") {
					const time = playerElement.getCurrentTime();
					if (typeof time === "number") return time;
				}
				if (typeof playerElement.player?.currentTime === "number") {
					return playerElement.player.currentTime;
				}
				if (typeof playerElement.player?.getCurrentTime === "function") {
					const time = playerElement.player.getCurrentTime();
					if (typeof time === "number") return time;
				}
			}

			return null;
		};

		const intervalId = window.setInterval(() => {
			const currentTime = readCurrentTime();
			if (typeof currentTime === "number" && currentTime >= releaseTimeInSeconds) {
				setIsCtaVisible(true);
			}
		}, 1000);

		return () => window.clearInterval(intervalId);
	}, [isCtaVisible]);

	return (
		<section
			id="hero"
			className={`relative h-[894px] md:h-[1130px] flex flex-col items-center p-4 md:p-0 justify-start overflow-hidden bg-[#071117] bg-[url('/images/cida/v1/background_mobile.webp')] md:bg-[url('/images/cida/v1/background_desktop.webp')] bg-cover bg-center z-0`}
		>
			<Script
				src="https://scripts.converteai.net/38ceed6c-8f63-40f6-95cd-d6fd1194b3c6/players/69bd47beb1f8e9f7f4f1822e/v4/player.js"
				strategy="afterInteractive"
			/>

			<div className="md:mt-[450px] mt-[350px] mb-[16px] text-center">
				<h1
					className="
					w-full max-w-[350px]
					mx-auto
					font-spectral
					font-bold
					text-[20px]
					leading-[115%]
					text-white
					text-center

					md:max-w-[880px]
					md:text-[28px]
					md:leading-[115%]
					"
				>
					<span className="block md:hidden">
						O que essas três personagens da
						<br />
						ficção têm em comum com a trava na
						<br />
						sua vida financeira e amorosa?
					</span>

					<span className="hidden md:block">
						{titleRedLine}
					</span>
				</h1>
			</div>

			<div
				className="
					mt-0
					w-full max-w-[350px]
					mx-auto
					font-spectral
					font-medium
					text-[16px]
					leading-[128%]
					text-white
					text-center

					md:max-w-[880px]
					md:text-[20px]
					md:leading-[125%]
				"
			>
				<span className="block md:hidden">
					Assista ao vídeo gratuito e descubra o padrão
					<br />
					que castra a sua Permissão para enriquecer.
				</span>

				<span className="hidden md:block">
					{redLine}
				</span>
			</div>

			<div
				className="
					mt-9
					w-[350px]
					h-[196.875px]
					relative
					flex
					items-center
					justify-center
					overflow-hidden
					rounded-[16px]
					p-[2px]
					border-[2px]
					border-[#006D71]
					bg-[#252525]
					shadow-[0px_0px_80px_0px_rgba(0,109,113,0.5)]

					md:w-[460px]
					md:h-[260px]
				"
			>
				<div className="h-full w-full overflow-hidden rounded-[14px]">
					{React.createElement("vturb-smartplayer", {
						id: "vid-69bd47beb1f8e9f7f4f1822e",
						style: {
							display: "block",
							margin: "0 auto",
							width: "100%",
							height: "100%",
							borderRadius: "14px",
							overflow: "hidden",
						},
					})}
				</div>
			</div>

			{/* BUTTON */}
			{isCtaVisible && (
				<div
					className="
					mt-9
					w-[350px]
					md:w-[460px]
					h-[56px]
					p-[2px]
					rounded-[12px]
					shadow-[0px_10px_12.9px_0px_rgba(0,0,0,0.5)]
					"
					style={{
						background: "linear-gradient(360deg, #04770E 0%, #5ADB66 100%)",
					}}
				>
					<button
						className="
						w-full
						h-full
						rounded-[10px]
						flex
						items-center
						justify-center
						text-center
						font-raleway
						font-bold
						text-[16px]
						leading-[125%]
						uppercase
						text-black
						"
						style={{
							background:
								"radial-gradient(50% 75.61% at 50% 50%, #7AD783 0%, #32A43D 100%)",
							transition: "background 0.3s",
						}}
						onMouseEnter={e =>
							(e.currentTarget.style.background =
								"radial-gradient(50% 75.61% at 50% 50%, #32A43D 0%, #7AD783 100%)")
						}
						onMouseLeave={e =>
							(e.currentTarget.style.background =
								"radial-gradient(50% 75.61% at 50% 50%, #7AD783 0%, #32A43D 100%)")
						}
						onClick={() => window.open("https://aliancadivergente.pro.typeform.com/to/kP8WPQBb", "_blank")}
					>
						PREENCHER FICHA DE INTERESSE
					</button>
				</div>
			)}

		</section>
	);
}