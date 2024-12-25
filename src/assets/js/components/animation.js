const paralaxAnimBloclk = document.querySelectorAll(".anim-block-1");
const paralaxAnimBloclkTwo = document.querySelectorAll(".anim-block-2");
const paralaxAnimBloclkThree = document.querySelectorAll(".anim-block-3");

paralaxAnimation(paralaxAnimBloclk, 0.01, 1, -1);
paralaxAnimation(paralaxAnimBloclkTwo, 0.01, -1, -1);
paralaxAnimation(paralaxAnimBloclkThree, 0.001, -1, 1);
/**
 * Анимация параллакса для элементов на странице с использованием GSAP.
 *
 * @param {HTMLElement[]} animationElementAll - Массив элементов, которые нужно анимировать.
 * @param {number} [amplitude=0.01] - Амплитуда параллакса, определяет степень смещения элементов. Чем больше значение, тем сильнее эффект.
 * @param {number} [orientirX=1] - Направление смещения по оси X относительно курсора. Может быть `1` (стандартное направление) или `-1` (инверсия).
 * @param {number} [orientirY=1] - Направление смещения по оси Y относительно курсора. Может быть `1` (стандартное направление) или `-1` (инверсия).
 */

function paralaxAnimation(
	animationElementAll,
	amplitude = 0.01,
	orientirX = 1,
	orientirY = 1
) {
	if (animationElementAll && animationElementAll.length > 0) {
		let requestId = null;

		document.addEventListener("mousemove", (e) => {
			const mouseX = e.clientX;
			const mouseY = e.clientY;

			if (!requestId) {
				requestId = requestAnimationFrame(() => {
					animationElementAll.forEach((animationElement) => {
						gsap.to(animationElement, {
							x:
								orientirX *
								(mouseX - window.innerWidth / 2) *
								amplitude,
							y:
								orientirY *
								(mouseY - window.innerHeight / 2) *
								amplitude,
							ease: "power2.out",
							duration: 0.3,
						});
					});
					requestId = null;
				});
			}
		});
	}
}

// main animation

const trigerAdvantage = document.querySelector(".advantage__row");
const advantageBoxAnimate = document.querySelectorAll(".advantage__box");
if (trigerAdvantage && advantageBoxAnimate) {
	const advantageAnimategroup = gsap.timeline({
		scrollTrigger: {
			trigger: trigerAdvantage,
			start: "top 90%",
		},
	});

	advantageBoxAnimate.forEach((box) => {
		advantageAnimategroup.fromTo(
			box,
			{
				y: "-100%",
				opacity: 0,
			},
			{
				y: "0",
				opacity: 1,
				duration: 0.5,
			}
		);
	});
}

const neededAdvantage = document.querySelector(".needed");
const neededBoxAnimate = document.querySelector(".needed-swiper");
if (neededAdvantage && neededBoxAnimate) {
	gsap.fromTo(
		neededBoxAnimate,
		{ y: "100%", opacity: 0 },
		{
			y: "0",
			opacity: 1,
			duration: 1.2,
			scrollTrigger: {
				trigger: neededAdvantage,
				start: "top 40%",
			},
		}
	);
}

// want animation
const trigerWant = document.querySelector(".want");
if (trigerWant) {
	const leftPanel = document.querySelector(".want-container");
	if (leftPanel) {
		gsap.fromTo(
			leftPanel,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 2,
				scrollTrigger: {
					trigger: trigerWant,
					start: "top 90%",
				},
			}
		);
	}
}

// animate receive

const receiveTargetAnimate = document.querySelector(".receive-container");
const receiveList = document.querySelectorAll(".receive__list-inner");
const receiveImg = document.querySelector(".receive__picture img");
const receiveGenderList = document.querySelectorAll(".receive__gender-inner");
if (receiveTargetAnimate && receiveList) {
	const reciveAnimategroup = gsap.timeline({
		scrollTrigger: {
			trigger: receiveTargetAnimate,
			start: "top 90%",
		},
	});
	if (receiveImg) {
		reciveAnimategroup.fromTo(
			receiveImg,
			{
				scale: "0",
				opacity: 0,
			},
			{
				scale: "1",
				opacity: 1,
				duration: 0.7,
			}
		);
	}

	receiveList.forEach((inner) => {
		reciveAnimategroup.fromTo(
			inner,
			{
				y: "150%",
				opacity: 0,
			},
			{
				y: "0",
				opacity: 1,
				duration: 0.5,
			}
		);
	});
	receiveGenderList.forEach((inner, index) => {
		reciveAnimategroup.fromTo(
			inner,
			{
				x: index % 2 ? "150%" : "-150%",
				opacity: 0,
			},
			{
				x: "0",
				opacity: 1,
				duration: 0.5,
			}
		);
	});
}

// Анимация для чисел
const animateNumbers = (element, target) => {
	gsap.to(element, {
		innerText: target,
		duration: 1.5,
		ease: "power1.out",
		snap: { innerText: 1 }, // Округляем до целых чисел
		onUpdate: function () {
			element.textContent = Math.floor(element.innerText);
		},
	});
};

// Анимация для прогресс-бара
const progressBars = document.querySelectorAll(".progress-item");
if (progressBars) {
	progressBars.forEach((item) => {
		const numberElement = item.querySelector(".progress-number");
		const progressFill = item.querySelector(".progress-fill");
		const targetValue = parseInt(
			numberElement.getAttribute("data-target"),
			10
		);
		const fillPercent = targetValue === 16 ? "80%" : "40%"; // Устанавливаем ширину вручную

		ScrollTrigger.create({
			trigger: item,
			start: "top 80%",
			onEnter: () => {
				// Анимация заполнения чисел
				animateNumbers(numberElement, targetValue);

				// Анимация заполнения прогресс-бара
				gsap.to(progressFill, {
					width: fillPercent,
					duration: 1.5,
					ease: "power1.out",
				});
			},
		});
	});
}
