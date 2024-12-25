const neededSwiper = document.querySelector(".needed-swiper");
const neededSwiperConfig = {
	slidesPerView: 3,
	spaceBetween: 0,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		572: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		800: {
			slidesPerView: 3,
			spaceBetween: 0,
		},
	},
};

const reviewsSwiper = document.querySelector(".reviews__swiper");
const reviewsSwiperConfig = {
	slidesPerView: 3,
	slidesPerGroup: 3,
	spaceBetween: 10,
	loop: true,
	preventClicks: true,
	threshold: 15,
	touchRatio: 0.3,
	preventClicksPropagation: false,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".reviews__swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1.2,
			slidesPerGroup: 1,
			spaceBetween: 20,
		},

		572: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 30,
		},
		762: {
			slidesPerView: 1.2,
			slidesPerGroup: 1,
			spaceBetween: 20,
		},
		1300: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 40,
		},
	},
};

/**
 * Функция для инициализации Swiper
 * @param {HTMLElement} swiperElement - Элемент DOM для Swiper
 * @param {Object} config - Конфигурация для Swiper
 */
function swiperInstal(swiperElement, config) {
	if (swiperElement) {
		try {
			new Swiper(swiperElement, config);
		} catch (error) {
			console.error("Failed to initialize Swiper:", error);
		}
	}
}
swiperInstal(neededSwiper, neededSwiperConfig);
swiperInstal(reviewsSwiper, reviewsSwiperConfig);
