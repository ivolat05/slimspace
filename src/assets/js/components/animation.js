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

// animate review
const reviewsTriger = document.querySelector(".reviews__wrapp");
const reviewsLeftPanel = document.querySelector(".reviews__animate-left");
const reviewsRightPanel = document.querySelector(".reviews__animate-right");
if (reviewsLeftPanel && reviewsTriger) {
	gsap.fromTo(
		reviewsLeftPanel,
		{ x: "-100%", opacity: 0 },
		{
			x: "0",
			opacity: 1,
			duration: 2,
			scrollTrigger: {
				trigger: reviewsTriger,
				start: "top 90%",
			},
		}
	);
}
if (reviewsRightPanel && reviewsTriger) {
	gsap.fromTo(
		reviewsRightPanel,
		{ x: "100%", opacity: 0 },
		{
			x: "0",
			opacity: 1,
			duration: 2,
			scrollTrigger: {
				trigger: reviewsTriger,
				start: "top 90%",
			},
		}
	);
}

// diagram animatin
const trigerStartPlan = document.querySelector(".plan__diagram");
const blockAnimLine = document.querySelector(".plan-control-visible-line");
const planBoxes = document.querySelectorAll(".plan__info-box");

if (trigerStartPlan && planBoxes && blockAnimLine) {
	const optionTriger = {
		trigger: trigerStartPlan,
		start: "top 50%",
	};

	gsap.fromTo(
		blockAnimLine,
		{
			width: "100%",
		},
		{
			width: "0%",
			duration: 6,
			scrollTrigger: optionTriger,
		}
	);

	const timeLine = gsap.timeline({
		scrollTrigger: optionTriger,
	});

	planBoxes.forEach((box) => {
		const span = box.querySelector("span");
		const targetValue = parseInt(span.textContent);

		timeLine.fromTo(
			box,
			{ opacity: 0, y: 20 },
			{ opacity: 1, y: 0, duration: 0.7, ease: "power1.out" }
		);

		timeLine.fromTo(
			span,
			{ innerText: 0 },
			{
				innerText: targetValue,
				duration: 0.7,
				ease: "power1.out",
				snap: { innerText: 1 },
				onUpdate: function () {
					span.textContent = `${Math.round(
						this.targets()[0].innerText
					)}%`;
				},
			}
		);
	});
}

const allNutritionTitle = document.querySelectorAll(".nutrition__list-inner");
const trigerNUrtition = document.querySelector(".nutrition__coll-row");
const nutritionDiagramImg = document.querySelector(".nutrition__diagram-img");
if (allNutritionTitle && trigerNUrtition && nutritionDiagramImg) {
	const circle = document.querySelector(".circle-fill");

	const nutritionOptionTriger = {
		trigger: trigerNUrtition,
		start: "top 70%",
	};

	if (circle) {
		const radius = circle.r.baseVal.value;
		const circumference = 2 * Math.PI * radius;
		circle.style.strokeDasharray = circumference;
		circle.style.strokeDashoffset = 0;

		gsap.to(circle, {
			strokeDashoffset: circumference,
			duration: 7.6,
			ease: "power1.out",
			scrollTrigger: nutritionOptionTriger,
		});
	}

	const nutritionTimeLine = gsap.timeline({
		scrollTrigger: nutritionOptionTriger,
	});

	allNutritionTitle.forEach((box, index) => {
		const span = box.querySelector("h3");
		const targetValue = parseInt(span.textContent);
		const t = { 0: 1.4, 1: 1.2, 2: 1 };
		nutritionTimeLine.fromTo(
			box,
			{ opacity: 0, y: 20 },
			{ opacity: 1, y: 0, duration: t[index], ease: "power1.out" }
		);

		nutritionTimeLine.fromTo(
			span,
			{ innerText: 0 },
			{
				innerText: targetValue,
				duration: t[index],
				ease: "power1.out",
				snap: { innerText: 1 },
				onUpdate: function () {
					span.textContent = `${Math.round(
						this.targets()[0].innerText
					)}%`;
				},
			}
		);
	});
}
