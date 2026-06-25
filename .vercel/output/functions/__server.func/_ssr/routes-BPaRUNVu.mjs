import { o as __toESM } from "../_runtime.mjs";
import { t as clinic_default } from "./clinic-UsVY9TJi.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BPaRUNVu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ease = [
	.22,
	1,
	.36,
	1
];
function Reveal({ children, delay = 0, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		variants: {
			hidden: {
				opacity: 0,
				y: 40
			},
			show: {
				opacity: 1,
				y: 0,
				transition: {
					duration: .9,
					ease,
					delay
				}
			}
		},
		children
	});
}
function ImageReveal({ src, alt, className = "", parallax = false }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], parallax ? ["-8%", "8%"] : ["0%", "0%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `relative overflow-hidden ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { clipPath: "inset(100% 0 0 0)" },
			whileInView: { clipPath: "inset(0% 0 0 0)" },
			viewport: { once: true },
			transition: {
				duration: 1.3,
				ease
			},
			className: "absolute inset-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src,
				alt,
				width: "1200",
				height: "1200",
				style: { y },
				className: "h-[115%] w-full object-cover",
				loading: "lazy"
			})
		})
	});
}
var hero_default = "/assets/hero-Dg60S3U8.jpg";
var siteConfig = {
	instagram: clinic_default.instagram,
	facebook: clinic_default.facebook,
	googleBusiness: clinic_default.googleBusiness,
	whatsapp: `https://wa.me/40${clinic_default.phone.replace(/\s+/g, "").replace(/^0/, "")}`,
	phone: clinic_default.phone,
	address: clinic_default.address
};
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, .4]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative min-h-screen bg-navy-deep text-cream overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { y },
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_default,
						alt: `Cabinet stomatologic ${clinic_default.name} Timișoara`,
						width: "2000",
						height: "1333",
						className: "h-full w-full object-cover opacity-70"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/60 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/40" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { opacity },
				className: "relative z-10 pt-32 md:pt-40 px-8 md:px-14 pb-24 min-h-screen flex flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							ease,
							delay: .2
						},
						className: "flex items-center gap-3 text-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-cream/70",
							children: "Stomatologie premium"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-5xl mt-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 40
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1.2,
								ease,
								delay: .35
							},
							className: "font-serif text-[clamp(2.5rem,9vw,7.5rem)] leading-[0.92] tracking-[-0.02em] font-light",
							children: [
								"Zâmbetul",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold",
									children: "tău"
								}),
								", opera",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"noastră."
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 md:mt-12 grid md:grid-cols-3 gap-8 md:gap-10 items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: { y: 20 },
								animate: { y: 0 },
								transition: {
									duration: 1,
									ease,
									delay: .6
								},
								className: "md:col-span-2 text-lg md:text-xl text-cream/75 font-light max-w-xl leading-relaxed",
								children: "Stomatologie de autor în inima Timișoarei. Tratamente discrete, tehnologie de ultimă generație și o experiență de peste 15 ani gândită în jurul tău."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: 1,
									ease,
									delay: .75
								},
								className: "flex flex-col items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#programare",
									className: "group inline-flex items-center gap-6 bg-cream text-navy rounded-full px-8 py-3.5 hover:bg-gold transition-colors duration-500",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif text-lg pt-0.5",
										children: "Programează-te"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs tracking-[0.2em] group-hover:translate-x-1 transition-transform",
										children: "→"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: siteConfig.whatsapp,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "group inline-flex items-center gap-6 border border-cream/30 rounded-full text-cream px-8 py-3.5 hover:border-gold hover:text-gold transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											className: "w-4 h-4 fill-current",
											viewBox: "0 0 24 24",
											xmlns: "http://www.w3.org/2000/svg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.746-.871-2.892-1.554-4.043-3.524-.306-.526.306-.489.875-1.629.097-.196.05-.367-.05-.516-.099-.148-.669-1.612-.916-2.207-.247-.594-.495-.518-.67-.527-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.296-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.076c.149.198 2.064 3.151 5.005 4.292 2.94 1.141 2.94.76 4.005.654 1.064-.107 2.064-.654 2.41-1.214.347-.561.347-1.214.247-1.214-.097-.099-.297-.099-.594-.198z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.04 0C5.388 0 0 5.388 0 12.04c0 2.13.556 4.13 1.526 5.866L0 24l6.21-1.626a11.95 11.95 0 0 0 5.83 1.486h.005c6.652 0 12.04-5.388 12.04-12.04C24.085 5.388 18.697 0 12.04 0zm0 21.918a9.83 9.83 0 0 1-5.014-1.378l-.36-.21-3.708.973.99-3.617-.234-.372a9.83 9.83 0 0 1-1.513-5.275c0-5.443 4.435-9.878 9.882-9.878 2.642 0 5.122 1.03 6.985 2.897a9.83 9.83 0 0 1 2.893 6.986c0 5.443-4.435 9.878-9.92 9.878z" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow pt-0.5",
											children: "WhatsApp"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform",
										children: "↗"
									})]
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-16 md:mt-24" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-8 right-8 md:right-14 z-10 text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-12 bg-cream/30 ml-auto mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-cream/50",
					children: clinic_default.address
				})]
			})
		]
	});
}
var services_default = [
	{
		"n": "01",
		"t": "Implantologie",
		"d": "Implantologia este o specialitate chirurgicală care are rolul de a înlocui dinții lipsă sau grav deteriorați, în condiții de siguranță.",
		"tags": [
			"Dentis (Korea)",
			"Straumann (Switzerland)",
			"Ghid chirurgical",
			"Adiție os / Sinus lift"
		]
	},
	{
		"n": "02",
		"t": "Estetică & Cosmetică",
		"d": "Estetica dentară presupune o armonizare perfectă între gingii, dinți, gură și zâmbet pentru a putea crea, în funcție de trăsăturile feței, un aspect facial cât mai frumos și mai armonios.",
		"tags": [
			"Fațete ceramice E.max",
			"Fațetare directă",
			"Bijuterii Swarovski"
		]
	},
	{
		"n": "03",
		"t": "Profilaxie & Parodontologie",
		"d": "Boala parodontală (parodontoză) constituie cea mai importantă cauză a pierderii dinților la 75% dintre adulți. Cu cât depistarea se face mai repede, cu atât tratamentul va fi mai eficient.",
		"tags": [
			"Detartraj",
			"Air-flow",
			"Periaj profesional",
			"Chiuretaj parodontal"
		]
	},
	{
		"n": "04",
		"t": "Endodonție",
		"d": "Endodonția ajută la prevenirea, diagnosticarea și tratarea îmbolnăvirii pulpei dentare și a ligamentelor de susținere.",
		"tags": [
			"Apex locator",
			"Endomotor",
			"Obturație canal la cald 3D"
		]
	},
	{
		"n": "05",
		"t": "Albire dentară",
		"d": "Un zâmbet alb imaculat reprezintă o carte de vizită care completează pozitiv imaginea fiecărui individ.",
		"tags": [
			"Albire profesională cu LASER",
			"Albire internă",
			"Accelerator de albire"
		]
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "servicii",
		className: "bg-navy text-cream py-32 md:py-48 px-8 md:px-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-12 gap-8 mb-20 md:mb-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow text-gold",
					children: "02 — Servicii"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-serif text-5xl md:text-7xl font-light leading-[1.02] tracking-[-0.02em]",
					children: [
						"Trei discipline.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gold",
							children: "Un singur standard."
						})
					]
				}) })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-0",
			children: services_default.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#programare",
					onClick: () => window.dispatchEvent(new CustomEvent("selectService", { detail: s.t })),
					className: "group grid md:grid-cols-12 gap-6 py-10 md:py-14 border-t border-cream/15 hover:border-gold transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-cream/40",
								children: s.n
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-4xl md:text-5xl font-light group-hover:text-gold group-hover:translate-x-2 transition-all duration-500 ease-out",
								children: s.t
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-cream/70 font-light leading-relaxed",
								children: s.d
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2 mt-5",
								children: s.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-[0.2em] border border-cream/20 px-3 py-1.5 text-cream/60",
									children: t
								}, t))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:col-span-2 flex md:justify-end items-start",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl group-hover:text-gold group-hover:rotate-45 transition-transform duration-500",
								children: "→"
							})
						})
					]
				})
			}, s.n))
		})]
	});
}
var cabinet_default = "/assets/cabinet-CNLljyCU.jpg";
var detail_default = "/assets/detail-ynbzMe0M.jpg";
function Manifesto() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "cabinet",
		className: "relative bg-cream py-32 md:py-48 px-8 md:px-14 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-12 gap-8 md:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "md:col-span-2 md:col-start-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow text-teal",
					children: "01 — Filosofie"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-9 md:col-start-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-[-0.02em] font-light",
					children: [
						"Credem că un cabinet stomatologic ar trebui să se simtă ca ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-teal",
							children: "un hotel parizian"
						}),
						" — discret, cald, atent la fiecare detaliu."
					]
				}) })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mt-24 md:mt-32 grid grid-cols-12 gap-4 md:gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageReveal, {
					src: cabinet_default,
					alt: `Recepția cabinetului ${clinic_default.name}`,
					parallax: true,
					className: "col-span-12 md:col-span-8 aspect-[16/10]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageReveal, {
					src: detail_default,
					alt: "Detaliu instrumente sterilizare",
					parallax: true,
					className: "col-span-7 md:col-span-3 md:col-start-10 aspect-[3/4] -mt-24 md:-mt-40 z-10 shadow-2xl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "col-span-12 md:col-span-4 md:col-start-1 mt-8 md:mt-16 md:pl-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm md:text-base text-muted-foreground leading-relaxed font-light max-w-sm",
						children: clinic_default.description
					})
				})
			]
		})]
	});
}
var cases_default = [
	{
		"id": "caz-1",
		"title": "Caz 1",
		"beforeImage": "/wp-content/uploads/2021/12/2.webp",
		"afterImage": "/wp-content/uploads/2021/12/2A-scaled.webp"
	},
	{
		"id": "caz-2",
		"title": "Caz 2",
		"beforeImage": "/wp-content/uploads/2023/01/IMG_3748.jpg",
		"afterImage": "/wp-content/uploads/2023/01/IMG_3749.jpg"
	},
	{
		"id": "caz-3",
		"title": "Caz 3",
		"beforeImage": "/wp-content/uploads/2021/12/3.jpg",
		"afterImage": "/wp-content/uploads/2021/12/3A.webp"
	},
	{
		"id": "caz-4",
		"title": "Caz 4",
		"beforeImage": "/wp-content/uploads/2023/01/IMG_3728.webp",
		"afterImage": "/wp-content/uploads/2023/01/IMG_3731.webp"
	},
	{
		"id": "caz-5",
		"title": "Caz 5",
		"beforeImage": "/wp-content/uploads/2023/01/IMG_3735.webp",
		"afterImage": "/wp-content/uploads/2023/01/IMG_3733.webp"
	},
	{
		"id": "caz-6",
		"title": "Caz 6",
		"beforeImage": "/wp-content/uploads/2023/01/IMG_3745.webp",
		"afterImage": "/wp-content/uploads/2023/01/IMG_3746.jpg"
	}
];
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-cream py-32 md:py-48 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-8 md:px-14 grid md:grid-cols-12 gap-8 mb-20 md:mb-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow text-teal",
						children: "03 — Cazuri"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-serif text-5xl md:text-7xl font-light leading-[1.02] tracking-[-0.02em]",
						children: [
							"Zâmbete reconstruite.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-teal",
								children: "Rezultate clinice."
							})
						]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-3 flex items-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground font-light leading-relaxed",
							children: "Cazuri clinice din cadrul cabinetului Eiffel Praxis. Fiecare rezultat este semnătura unui plan personalizat de tratament."
						})
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-8 md:px-14 grid md:grid-cols-2 lg:grid-cols-3 gap-12",
			children: cases_default.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: i * .1,
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2 bg-navy/5 p-2 border border-navy/10 rounded-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-wider text-muted-foreground text-center",
							children: "Înainte"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] overflow-hidden bg-cream",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: c.beforeImage,
								alt: `${c.title} înainte`,
								width: "800",
								height: "600",
								loading: "lazy",
								className: "w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-wider text-teal text-center font-medium",
							children: "După"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] overflow-hidden bg-cream",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: c.afterImage,
								alt: `${c.title} după`,
								width: "800",
								height: "600",
								loading: "lazy",
								className: "w-full h-full object-cover transition-all duration-500"
							})
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-baseline border-b border-navy/10 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-lg font-light",
						children: c.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-xs text-muted-foreground",
						children: "Eiffel Praxis Case"
					})]
				})]
			}, c.id))
		})]
	});
}
var doctors_default = [
	{
		"name": "Dr. Cosmin Popescu",
		"role": "Fondator",
		"specialization": "Competență implantologie",
		"quote": "Misiunea noastră este de a ajuta oamenii să aibă un zâmbet frumos și sănătos.",
		"image": "cosmin-popescu.jpg",
		"isLead": true
	},
	{
		"name": "Dr. Larisa Pantea",
		"role": "Medic Specialist",
		"specialization": "Stomatologie generală",
		"image": "larisa-pantea.jpg",
		"isLead": false
	},
	{
		"name": "Dr. Tatiana Solomictaia",
		"role": "Medic Specialist",
		"specialization": "Ortodonție",
		"image": "tatiana-solomictaia.jpg",
		"isLead": false
	},
	{
		"name": "Mariana Catrinoiu",
		"role": "Asistent Medical",
		"specialization": "",
		"image": "mariana-catrinoiu.jpg",
		"isLead": false
	}
];
var imageMap = {
	"cosmin-popescu.jpg": "/assets/cosmin-popescu-BvfwW2P7.webp",
	"larisa-pantea.jpg": "/assets/larisa-pantea-QSnJTAxU.webp",
	"tatiana-solomictaia.jpg": "/assets/tatiana-solomictaia-BwjLvE0z.webp",
	"mariana-catrinoiu.jpg": "/assets/mariana-catrinoiu-BLTi1AqF.webp"
};
function StaffCard({ staff }) {
	const [hovered, setHovered] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		className: "h-80",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "relative h-full w-full rounded-lg overflow-hidden cursor-pointer select-none",
			onHoverStart: () => setHovered(true),
			onHoverEnd: () => setHovered(false),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: imageMap[staff.image],
					alt: staff.name,
					width: "800",
					height: "1000",
					className: "absolute inset-0 h-full w-full object-cover",
					loading: "lazy",
					animate: { scale: hovered ? 1.05 : 1 },
					transition: {
						duration: .6,
						ease: "easeOut"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "absolute inset-0",
					animate: { background: hovered ? "linear-gradient(to top, rgba(10, 15, 30, 0.92) 0%, rgba(10, 15, 30, 0.5) 50%, transparent 100%)" : "linear-gradient(to top, rgba(10, 15, 30, 0.82) 0%, rgba(10, 15, 30, 0.25) 50%, transparent 100%)" },
					transition: {
						duration: .5,
						ease: "easeOut"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "font-serif text-xl text-cream font-light",
						animate: { y: hovered ? -4 : 0 },
						transition: {
							duration: .5,
							ease: "easeOut"
						},
						children: staff.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "overflow-hidden",
						initial: false,
						animate: {
							opacity: hovered ? 1 : 0,
							height: hovered ? "auto" : 0,
							y: hovered ? 0 : 8
						},
						transition: {
							duration: .35,
							ease: "easeOut",
							delay: hovered ? .1 : 0
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-cream/60 uppercase tracking-[0.15em] mt-2",
							children: staff.role
						}), staff.specialization && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-gold uppercase tracking-[0.15em] mt-1 font-light",
							children: staff.specialization
						})]
					})]
				})
			]
		})
	});
}
function Doctor() {
	const leadDoctor = doctors_default.find((d) => d.isLead) || doctors_default[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "doctor",
		className: "bg-navy-deep text-cream py-32 md:py-48 px-8 md:px-14 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow text-gold",
					children: "04 — Doctor"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-serif text-3xl md:text-5xl mt-8 leading-[1.15] font-light max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold italic",
								children: "„"
							}),
							leadDoctor.quote,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold italic",
								children: "\""
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 border-t border-cream/15 pt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "eyebrow text-gold mb-8",
							children: "Echipa Medicală"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
						children: doctors_default.map((staff) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaffCard, { staff }, staff.name))
					})]
				})
			]
		})
	});
}
var testimonials_default = [
	{
		"quote": "Super doctor, super cabinet. Noi mergem de cel puțin 10 ani și suntem foarte mulțumiți. Mergem toată familia, iar de 4 ani mergem și cu piticul nostru. La cabinet mai povestim, mai glumim, nici nu simți ca ești la dentist. Recomand cu toată încrederea!!! 🙂",
		"author": "Ionuț Adrianc"
	},
	{
		"quote": "Recomand cu încredere. Zâmbetul meu de invidiat se datorează domnului doctor Popescu Cosmin!",
		"author": "Adelina Iuliana Bugariu"
	},
	{
		"quote": "Vreau să mulțumesc domnului doctor Cosmin Popescu, la fel întregii lui echipe pentru că mi-au redat zâmbetul! Sunt o echipă de profesioniști! Am făcut și câteva implanturi, la care mă așteptam să dureze vindecarea, dureri, indispoziție la mâncat, dar încă din cea de-a doua zi de la intervenție nu am avut nicio durere, doar senzație de gingie puțin inflamată, iar după încă trei zile s-a vindecat complet! Vă recomand cu încredere clinica doctorului Cosmin Popescu!",
		"author": "Claudius Petrovici"
	},
	{
		"quote": "Merg la dl. dr. Cosmin Popescu din 2009 și îl recomand cu mare drag. Este un dr. extraordinar, implicat și devotat în ceea ce face. În prezent mergem la el toată familia, inclusiv băiețelul nostru de 6 ani care este foarte încântat de cum decurg lucrurile în cabinet.",
		"author": "Anca Cepreaga"
	},
	{
		"quote": "Echipă tânără și foarte pricepută. În cabinet nu te simți stânjenit și nu ai nicio clipă de teamă. Se glumește, se discută prietenește iar lumea zâmbește de fiecare dată. Cu așa o atmosferă uiți repede că te afli la medic. Medicul explică pacientului ce trebuie să facă și recomandă cel mai bun tratament. Recomand oricui, indiferent de vârstă, cu mare plăcere și încredere această echipă!",
		"author": "Ioana Irinescu"
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-cream py-32 md:py-48 px-8 md:px-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-12 gap-8 mb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow text-teal",
					children: "05 — Recenzii"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-serif text-5xl md:text-7xl font-light leading-[1.02] tracking-[-0.02em]",
					children: [
						"Gânduri bune de la pacienți,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-teal",
							children: "zâmbete redate cu drag."
						})
					]
				}) })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/10",
			children: testimonials_default.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: i * .12,
				className: "bg-cream p-10 md:p-14 flex flex-col justify-between min-h-[380px] border border-navy/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-serif text-xl md:text-2xl mt-8 leading-snug font-light text-navy/90",
					children: [
						"„",
						r.quote,
						"\""
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex items-center justify-between border-t border-navy/10 pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-lg font-medium text-navy",
						children: r.author
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-[10px] text-teal tracking-wider uppercase font-medium",
						children: "Recenzie"
					})]
				})]
			}, i))
		})]
	});
}
var bookingSchema = objectType({
	name: stringType().min(1, { message: "Numele complet este obligatoriu" }),
	phone: stringType().min(5, { message: "Numărul de telefon este obligatoriu și trebuie să aibă cel puțin 5 cifre" }),
	service: stringType().min(1, { message: "Serviciul de interes este obligatoriu" }),
	website: stringType().optional()
});
function Booking() {
	const [isSubmitted, setIsSubmitted] = (0, import_react.useState)(false);
	const mountTimeRef = (0, import_react.useRef)(Date.now());
	const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
		resolver: u(bookingSchema),
		defaultValues: {
			name: "",
			phone: "",
			service: services_default[0]?.t || "Consultație inițială",
			website: ""
		}
	});
	(0, import_react.useEffect)(() => {
		const handleSelectService = (e) => {
			const customEvent = e;
			if (customEvent.detail) setValue("service", customEvent.detail);
		};
		window.addEventListener("selectService", handleSelectService);
		return () => window.removeEventListener("selectService", handleSelectService);
	}, [setValue]);
	const onSubmit = (data) => {
		if (data.website) {
			console.warn("Spam detected via honeypot.");
			return;
		}
		if ((Date.now() - mountTimeRef.current) / 1e3 < 3) {
			console.warn("Submission too fast (spam protection).");
			return;
		}
		console.log("Validated payload:", data);
		setIsSubmitted(true);
		reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "programare",
		className: "relative bg-teal text-cream py-32 md:py-48 px-8 md:px-14 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 opacity-30 pointer-events-none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: detail_default,
				alt: "",
				width: "1600",
				height: "1200",
				className: "w-full h-full object-cover mix-blend-overlay"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative grid md:grid-cols-12 gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow text-gold-soft",
						children: "06 — Programare"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif text-6xl md:text-8xl mt-8 leading-[0.95] font-light tracking-[-0.02em]",
							children: [
								"Hai să facem",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold",
									children: "cunoștință."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						className: "mt-12 space-y-6",
						children: [
							[
								"WhatsApp",
								siteConfig.whatsapp,
								clinic_default.email
							],
							[
								"Telefon",
								`tel:${clinic_default.phone.replace(/\s+/g, "")}`,
								clinic_default.workingHours
							],
							[
								"Adresă",
								`https://maps.google.com/?q=${encodeURIComponent(clinic_default.address)}`,
								"Parcare cu locuri suficiente"
							]
						].map(([k, v, sub]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-12 gap-4 border-t border-cream/25 pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-3 eyebrow text-cream/70",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-9",
								children: [v.startsWith("http") || v.startsWith("tel:") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: v,
									target: v.startsWith("http") ? "_blank" : void 0,
									rel: "noopener noreferrer",
									className: "font-serif text-2xl hover:text-gold transition block",
									children: [k === "WhatsApp" ? clinic_default.phone : k === "Telefon" ? clinic_default.phone : clinic_default.address, " ↗"]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-serif text-2xl",
									children: v
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-cream/70 mt-1",
									children: k === "WhatsApp" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${sub}`,
										className: "hover:text-gold transition",
										children: sub
									}) : sub
								})]
							})]
						}, k))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .15,
				className: "md:col-span-5 md:col-start-8 bg-cream text-navy p-10 md:p-12 min-h-[450px] flex flex-col justify-center",
				children: isSubmitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: { duration: .5 },
					className: "text-center space-y-6 py-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-teal text-6xl",
							children: "✓"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-3xl font-light",
							children: "Solicitare trimisă"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground font-light leading-relaxed",
							children: "Mulțumim pentru interes. Te vom contacta în cel mai scurt timp posibil pentru confirmarea programării."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIsSubmitted(false),
							className: "mt-4 text-xs uppercase tracking-widest border-b border-navy pb-1 hover:text-teal hover:border-teal transition cursor-pointer",
							children: "Trimite o altă solicitare"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow text-teal",
						children: "Formular discret"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-3xl mt-4 font-light",
						children: "Te sunăm noi."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit(onSubmit),
						className: "mt-10 space-y-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								tabIndex: -1,
								autoComplete: "off",
								style: { display: "none" },
								...register("website")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "eyebrow text-muted-foreground",
												children: "Nume complet"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												placeholder: "Numele tău",
												...register("name"),
												className: "mt-2 w-full bg-transparent border-b border-navy/30 py-3 font-serif text-lg focus:border-teal focus:outline-none transition"
											}),
											errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-red-500 mt-1 block",
												children: errors.name.message
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "eyebrow text-muted-foreground",
												children: "Telefon"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "tel",
												placeholder: "Numărul de telefon",
												...register("phone"),
												className: "mt-2 w-full bg-transparent border-b border-navy/30 py-3 font-serif text-lg focus:border-teal focus:outline-none transition"
											}),
											errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-red-500 mt-1 block",
												children: errors.phone.message
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "eyebrow text-muted-foreground",
												children: "Serviciu de interes"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												...register("service"),
												className: "mt-2 w-full bg-transparent border-b border-navy/30 py-3 font-serif text-lg focus:border-teal focus:outline-none transition",
												children: services_default.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: s.t,
													children: s.t
												}, s.t))
											}),
											errors.service && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-red-500 mt-1 block",
												children: errors.service.message
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "group w-full mt-4 bg-navy text-cream py-5 flex items-center justify-between px-6 hover:bg-gold hover:text-navy transition-colors cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif text-lg",
									children: "Trimite cererea"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs tracking-[0.3em]",
									children: "→"
								})]
							})
						]
					})
				] })
			})]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy-deep text-cream/70 py-20 px-8 md:px-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-12 gap-8 border-b border-cream/15 pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-serif italic text-5xl text-cream",
						children: clinic_default.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mt-4",
						children: clinic_default.address
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-4 md:col-start-7 text-sm font-light leading-relaxed",
					children: "Stomatologie de autor pentru cei care prețuiesc detaliul, intimitatea și rezultatele care durează."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow text-cream/40 mb-3",
						children: "Urmărește"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 font-serif text-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: clinic_default.instagram,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "block hover:text-gold transition",
								children: "Instagram ↗"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: clinic_default.facebook,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "block hover:text-gold transition",
								children: "Facebook ↗"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: siteConfig.whatsapp,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "block hover:text-gold transition",
								children: "WhatsApp ↗"
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between mt-8 text-xs text-cream/40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				clinic_default.name
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Powered by DDM Marketing" })]
		})]
	});
}
function StickyMobile() {
	const phoneHref = siteConfig.phone ? `tel:${siteConfig.phone.replace(/\s+/g, "")}` : "#programare";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-deep text-cream grid grid-cols-3 border-t border-cream/15",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#programare",
				className: "py-4 text-center border-r border-cream/15 flex flex-col items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-lg",
					children: "📅"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase tracking-widest",
					children: "Programare"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: siteConfig.whatsapp || "#programare",
				target: siteConfig.whatsapp ? "_blank" : void 0,
				rel: "noopener noreferrer",
				className: "py-4 text-center border-r border-cream/15 flex flex-col items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-lg",
					children: "💬"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase tracking-widest",
					children: "WhatsApp"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: phoneHref,
				className: "py-4 text-center flex flex-col items-center gap-1 bg-gold text-navy",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-lg",
					children: "📞"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase tracking-widest",
					children: "Sună"
				})]
			})
		]
	});
}
var logo_default = "/assets/logo-WaZQHJsO.png";
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-cream text-navy overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Manifesto, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Doctor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Booking, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyMobile, {})
		]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed top-0 left-0 right-0 z-50 mix-blend-difference text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-8 py-6 md:px-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "flex items-center gap-2.5 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Eiffel Praxis",
						width: "100",
						height: "100",
						className: "h-8 md:h-9 w-auto brightness-0 invert"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-baseline gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-2xl tracking-tight italic",
							children: "Eiffel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow opacity-70",
							children: "Praxis"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.28em]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#servicii",
							className: "opacity-80 hover:opacity-100 transition",
							children: "Servicii"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#cabinet",
							className: "opacity-80 hover:opacity-100 transition",
							children: "Cabinet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#doctor",
							className: "opacity-80 hover:opacity-100 transition",
							children: "Doctor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#programare",
							className: "opacity-80 hover:opacity-100 transition",
							children: "Contact"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#programare",
					className: "eyebrow border-b border-current pb-1",
					children: "Programare →"
				})
			]
		})
	});
}
function Marquee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-cream border-y border-navy/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 md:grid-cols-4",
			children: [
				{
					v: "15+ Ani",
					l: "De funcționare în Timișoara"
				},
				{
					v: "Propriu",
					l: "Laborator de tehnică dentară"
				},
				{
					v: "Norme U.E.",
					l: "Sterilizare & calitate superioară"
				},
				{
					v: "Parcare",
					l: "Locuri suficiente disponibile"
				}
			].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: i * .08,
				className: `px-6 py-12 md:py-14 ${i !== 0 ? "md:border-l border-navy/10" : ""} ${i % 2 === 1 ? "border-l md:border-l border-navy/10" : ""} ${i > 1 ? "border-t md:border-t-0 border-navy/10" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-serif text-4xl md:text-5xl font-light tracking-tight",
					children: s.v
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow text-muted-foreground mt-3",
					children: s.l
				})]
			}, s.l))
		})
	});
}
//#endregion
export { Home as component };
