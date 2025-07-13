export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
	? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
	: window.outerWidth !== 0 && window.outerWidth <= 1024;

export const isAndriod = /Android/i.test(navigator.userAgent);
export const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);