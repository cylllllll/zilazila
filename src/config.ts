import type {
	FAQItem,
	Feature,
	PricingTier,
	Review,
	SocialLink,
} from "@/types";

export const storeConfig = {
	/** Set to true to pull live metadata from the App Store at build time */
	fetchRealData: false,
	/** Numeric App Store app ID (without the "id" prefix) */
	appStoreAppId: 686449807,
} as const;

export const site = {
	name: "zilazila",
	url: "https://zilazila.pages.dev",
	description:
		"一个 tvOS 端 bilibili 第三方播放器",
	logo: "/favicon.svg",
	keywords: ["bilibili", "第三方", "播放器", "tvOS"],
	storeLinks: {
		apple: "https://apps.apple.com/us/app/zilazila/id6756011268",
		google: "https://testflight.apple.com/join/32EqU7Sw",
	},
	rating: {
    	score: 0,
    	count: "0",
    },
	ageRating: "4+",
	version: "1.0.1",
	minimumOS: "26.0",
	releaseDate: "Jul 20, 2026",
	social: [
		{ url: "https://t.me/zilazilaApp", icon: "RiTelegram2Fill", label: "Telegram" },
	] as SocialLink[],
} as const;

export const features: Feature[] = [
	{
		title: "Main Feature",
		description: "Describe your main feature here. What makes it special?",
		icon: "FiStar",
	},
];

export const screenshots: string[] = [
	"/assets/screenshots/1.png",
];

export const pricingTiers: PricingTier[] = [
	{
		name: "Free",
		price: "$0",
		period: "/month",
		description: "Everything you need to get started. No credit card required.",
		features: [
			"Core app features",
			"Up to 3 projects",
			"Basic analytics dashboard",
			"Community support",
			"iOS & Android",
		],
		cta: "Download Free",
		ctaHref: "#",
	},
	{
		name: "Pro",
		price: "$4.99",
		period: "/month",
		description:
			"The full experience. Unlock every feature and remove all limits.",
		features: [
			"Everything in Free",
			"Unlimited projects",
			"Advanced analytics",
			"Priority support",
			"Cloud sync & backup",
			"Early access to new features",
		],
		cta: "Start Free Trial",
		ctaHref: "#",
		highlighted: true,
		badge: "Most Popular",
	},
	{
		name: "Teams",
		price: "Custom",
		description:
			"For organizations that need advanced controls, SSO, and dedicated support.",
		features: [
			"Everything in Pro",
			"Team collaboration tools",
			"Admin dashboard",
			"SSO & access controls",
			"Dedicated account manager",
			"Custom integrations & API",
		],
		cta: "Contact Sales",
		ctaHref: "mailto:hello@example.com",
	},
];

export const reviews: Review[] = [
	{
		author: "Sarah K.",
		rating: 5,
		text: "This app has completely transformed how I manage my daily tasks. The interface is intuitive and the performance is outstanding!",
	},
	{
		author: "James M.",
		rating: 5,
		text: "I've tried dozens of similar apps, but this one stands out with its unique features and reliability. Highly recommended!",
	},
	{
		author: "Elena T.",
		rating: 4,
		text: "Great app with impressive functionality. The recent update made it even better. Just a few minor UI improvements would make it perfect.",
	},
	{
		author: "Michael R.",
		rating: 5,
		text: "Customer support is exceptional. Had an issue and they resolved it within hours. The app itself is fantastic too!",
	},
];

export const faqs: FAQItem[] = [
	{
		question: "免费吗？",
		answer:
			"这款应用可在 App Store 和 TestFlight 免费下载，不包含任何内购。",
	},
	{
		question: "支持 tvOS 什么系统版本？",
		answer:
			"只支持 tvOS 26.0 及以上版本。",
	},
	{
		question: "如何使用？",
		answer:
			"输入： zilazila://",
	},
];
