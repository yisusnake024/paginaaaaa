"use client";

import { useState, useEffect, useRef } from "react";

const timelineEvents = [
	{
		year: "2024",
		title: "Inteligencia Artificial",
		description:
			"Enfoque especial en IA y machine learning, con workshops prácticos y laboratorios.",
		participants: "2,500+",
		papers: "120",
		color: "from-pink-500 to-rose-500",
		icon: "🤖",
	},
	{
		year: "2023",
		title: "Reconocimiento Internacional",
		description:
			"CIINATIC recibe reconocimiento como uno de los congresos más importantes de LATAM.",
		participants: "2,000+",
		papers: "95",
		color: "from-yellow-500 to-orange-500",
		icon: "🏆",
	},
	{
		year: "2022",
		title: "Formato Híbrido",
		description:
			"Combinación exitosa de modalidades presencial y virtual, maximizando el alcance.",
		participants: "1,500+",
		papers: "78",
		color: "from-teal-500 to-cyan-500",
		icon: "🔗",
	},
	{
		year: "2021",
		title: "Innovación Tecnológica",
		description:
			"Introducción de realidad virtual y experiencias inmersivas en las presentaciones.",
		participants: "1,200+",
		papers: "65",
		color: "from-orange-500 to-red-500",
		icon: "🥽",
	},
	{
		year: "2020",
		title: "Modalidad Virtual",
		description:
			"Adaptación exitosa al formato virtual debido a la pandemia, alcanzando audiencia global.",
		participants: "800+",
		papers: "48",
		color: "from-purple-500 to-violet-500",
		icon: "💻",
	},
	{
		year: "2019",
		title: "Expansión Internacional",
		description:
			"Se incorporan participantes de 8 países latinoamericanos, consolidando la proyección internacional.",
		participants: "450+",
		papers: "32",
		color: "from-green-500 to-emerald-500",
		icon: "🌎",
	},
	{
		year: "2018",
		title: "Primera Edición",
		description:
			"Nace CIINATIC con 200 participantes y 15 ponencias magistrales, estableciendo las bases para el futuro.",
		participants: "200+",
		papers: "15",
		color: "from-blue-500 to-cyan-500",
		icon: "🚀",
	},
];

export default function TimelineSection() {
	const [activeEvent, setActiveEvent] = useState<number | null>(null);
	const [isPaused, setIsPaused] = useState(false);
	const timelineRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isPaused) return;

		const interval = setInterval(() => {
			setActiveEvent((prev) => {
				if (prev === null) return 0;
				return (prev + 1) % timelineEvents.length;
			});
		}, 4000);

		return () => clearInterval(interval);
	}, [isPaused]);

	return (
		<section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative">
			<div className="absolute inset-0">
				{[...Array(20)].map((_, i) => (
					<div
						key={i}
						className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 3}s`,
							animationDuration: `${2 + Math.random() * 2}s`,
						}}
					/>
				))}
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance animate-fade-in">
						Historia del Congreso
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty animate-fade-in-delay">
						Un recorrido por la evolución y crecimiento de CIINATIC
						a través de los años
					</p>
				</div>

				<div
					className="relative overflow-x-clip overflow-y-visible"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
				>
					<div
						ref={timelineRef}
						className={`flex space-x-8 transition-transform duration-1000 ease-in-out ${
							isPaused ? "" : "animate-scroll"
						}`}
						style={{
							width: `${timelineEvents.length * 320}px`,
						}}
					>
						{[...timelineEvents, ...timelineEvents].map(
							(event, index) => {
								const originalIndex =
									index % timelineEvents.length;
								return (
									<div
										key={index}
										className="flex-shrink-0 w-80 relative flex flex-col items-center transition-all duration-700"
										onMouseEnter={() => {
											setActiveEvent(originalIndex);
											setIsPaused(true);
										}}
										onMouseLeave={() => setIsPaused(false)}
									>
										<div
											className={`relative w-8 h-8 rounded-full border-4 border-background shadow-lg z-10 mb-6 transition-all duration-500 ${
												activeEvent === originalIndex
													? "scale-150 shadow-2xl"
													: "scale-100"
											} animate-pulse-slow`}
										>
											<div
												className={`w-full h-full rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center text-white text-sm font-bold transition-all duration-300`}
											>
												{activeEvent === originalIndex
													? event.icon
													: event.year.slice(-2)}
											</div>
											{activeEvent === originalIndex && (
												<div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
											)}
										</div>

										<div
											className={`group p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 transition-all duration-700 w-full relative overflow-hidden ${
												activeEvent === originalIndex
													? "shadow-2xl scale-110 border-primary/50 bg-card"
													: "hover:scale-105 hover:shadow-xl hover:bg-card"
											}`}
											style={{
												transform:
													activeEvent ===
													originalIndex
														? "translateY(-10px) scale(1.1)"
														: "",
											}}
										>
											<div
												className={`absolute inset-0 bg-gradient-to-br ${
													event.color
												} opacity-0 transition-opacity duration-500 ${
													activeEvent ===
													originalIndex
														? "opacity-10"
														: ""
												}`}
											/>

											<div className="relative z-10">
												<div className="flex items-center justify-between mb-4">
													<span
														className={`text-3xl font-bold transition-all duration-300 ${
															activeEvent ===
															originalIndex
																? "text-primary scale-110"
																: "text-primary"
														}`}
													>
														{event.year}
													</span>
													<div className="flex space-x-3 text-sm text-muted-foreground">
														<div className="flex items-center space-x-1 bg-muted/50 px-2 py-1 rounded-full">
															<span>👥</span>
															<span className="font-medium">
																{
																	event.participants
																}
															</span>
														</div>
														<div className="flex items-center space-x-1 bg-muted/50 px-2 py-1 rounded-full">
															<span>📄</span>
															<span className="font-medium">
																{event.papers}
															</span>
														</div>
													</div>
												</div>

												<h3
													className={`text-lg font-bold text-foreground mb-3 text-balance transition-all duration-300 ${
														activeEvent ===
														originalIndex
															? "text-xl"
															: ""
													}`}
												>
													<span className="text-2xl mr-2">
														{event.icon}
													</span>
													{event.title}
												</h3>

												<p className="text-sm text-muted-foreground text-pretty leading-relaxed">
													{event.description}
												</p>

												{activeEvent ===
													originalIndex && (
													<div className="mt-4 w-full bg-muted/30 rounded-full h-1">
														<div className="bg-primary h-1 rounded-full animate-progress" />
													</div>
												)}
											</div>
										</div>
									</div>
								);
							}
						)}
					</div>
				</div>

				<div className="flex justify-center space-x-2 mt-8">
					{timelineEvents.map((_, index) => (
						<button
							key={index}
							onClick={() => setActiveEvent(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								activeEvent === index
									? "bg-primary scale-125"
									: "bg-primary/50 hover:bg-primary/70"
							}`}
						/>
					))}
				</div>
			</div>

			<style jsx>{`
				@keyframes fade-in {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes progress {
					from {
						width: 0%;
					}
					to {
						width: 100%;
					}
				}

				@keyframes scroll {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(
							-${timelineEvents.length * 320}px
						);
					}
				}

				.animate-fade-in {
					animation: fade-in 0.8s ease-out;
				}

				.animate-fade-in-delay {
					animation: fade-in 0.8s ease-out 0.2s both;
				}

				.animate-pulse-slow {
					animation: pulse 3s infinite;
				}

				.animate-progress {
					animation: progress 4s linear infinite;
				}

				.animate-scroll {
					animation: scroll 28s linear infinite;
				}
			`}</style>
		</section>
	);
}
