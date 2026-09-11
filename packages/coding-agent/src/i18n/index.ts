import { zhCN } from "./zh-CN";

let currentLocale = "zh-CN";

/**
 * Translate a key into the current locale with a mandatory or optional English fallback.
 * 
 * Guarantee: If the key is missing from the active dictionary, it will 100% gracefully
 * fall back to the provided English text, ensuring zero runtime crashes.
 */
export function t(key: string, fallback?: string): string {
	if (currentLocale === "zh-CN") {
		const val = zhCN[key];
		if (val !== undefined) return val;
	}
	return fallback ?? key;
}

export function getLocale(): string {
	return currentLocale;
}

export function setLocale(locale: string): void {
	currentLocale = locale;
}
