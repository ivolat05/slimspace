const neededSwiper = document.querySelector(".needed-swiper");
const neededSwiperConfig = {
	slidesPerView: 3,
	spaceBetween: 0,
	pagination: {
		el: ".swiper-pagination",
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

const reviewsSwiper = document.querySelector(".reviews-swiper");
const reviewsSwiperConfig = {
	slidesPerView: 4,
	spaceBetween: 10,
	loop: true,
	preventClicks: true,
	threshold: 15,
	touchRatio: 0.3,
	preventClicksPropagation: false,
	navigation: {
		nextEl: ".reviews__slide-prev",
		prevEl: ".reviews__slide-next",
	},
	on: {
		slideChange: () => {
			openModalWindow(); // Вызов вашей функции при смене слайда
		},
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 40,
		},
		660: {
			slidesPerView: 2,
			spaceBetween: 60,
		},
		998: {
			slidesPerView: 3,
			spaceBetween: 60,
		},
		1300: {
			slidesPerView: 4,
			spaceBetween: 60,
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
