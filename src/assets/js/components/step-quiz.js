// квиз

function stepQuiz() {
	const btnControllStep = document.querySelectorAll(".step__btn");
	const allStep = document.querySelectorAll(".step__list-inner");
	const stepInputAll = document.querySelectorAll(".step__quest-input");
	//const step = document.querySelector(".header");
	//const step = document.querySelector(".step__list-head-title");
	const step = document.querySelectorAll(".step__list-head-title");
	let count = 0;
	if (btnControllStep) {
		btnControllStep.forEach((btn) => {
			btn.addEventListener("click", () => {
				step.forEach((step) => {
					step.scrollIntoView({
						behavior: "auto",
						block: "start",
					});
				});
				if (btn.classList.contains("step__btn-next")) {
					count += 1;
				}
				if (btn.classList.contains("step__btn-prev")) {
					count -= 1;
					if (count < 0) {
						count = 0;
					}
				}
				if (
					btn.classList.contains("step__parameters-btn") &&
					!btn.classList.contains("btn-error")
				) {
					count += 1;
				}
				nextStep(count);
				// прокручиваеть навигацию с кративным вопросом в лево если номер активного вопроса не помещеаеться на экран
				scrollActiveBlock();
			});
		});
	}

	if (stepInputAll) {
		stepInputAll.forEach((input) => {
			input.addEventListener("input", () => {
				const wrapp = input.closest(".step__list-inner");
				const btnNext = wrapp.querySelector(".step__btn-next");

				btnNext.removeAttribute("disabled");

				if (input.type === "radio") {
					step.forEach((step) => {
						step.scrollIntoView({
							behavior: "auto",
							block: "start",
						});
					});
					count += 1;
					nextStep(count);
					// прокручиваеть навигацию с кративным вопросом в лево если номер активного вопроса не помещеаеться на экран
					scrollActiveBlock();
				}
				if (input.type === "checkbox") {
					const allInputs = wrapp.querySelectorAll("input");
					if (input.classList.contains("rezet")) {
						const dataAtt = input.getAttribute("data-rezet");

						allInputs.forEach((checkbox) => {
							if (checkbox.classList.contains(dataAtt)) {
								checkbox.checked = false;
							}
						});
					} else {
						// Если это обычный чекбокс, сбрасываем чекбокс с классом 'rezet'
						const dataAttInputRezet =
							input.getAttribute("data-rezet-btn");
						if (!dataAttInputRezet) return;
						const InputRezet = document.querySelector(
							`.${dataAttInputRezet}`
						);

						InputRezet.checked = false;
					}
					const allRezet = wrapp.querySelectorAll(".rezet");

					const hasChecked = Array.from(allInputs).some(
						(checkbox) => checkbox.checked
					);
					if (allRezet.length > 1) {
						const checkedCount = wrapp.querySelectorAll(
							'input[type="checkbox"]:checked'
						).length;
						if (checkedCount < 2) {
							btnNext.setAttribute("disabled", "true");
							return;
						}
					}
					if (!hasChecked) {
						btnNext.setAttribute("disabled", "true");
					}
				}
			});
		});
	}

	function nextStep(count) {
		allStep.forEach((step) => {
			step.classList.remove("active");
		});
		allStep[count].classList.add("active");
		if (allStep[count].classList.contains("step__personal-plan")) {
			analiseAnimate();
		}
	}
}

stepQuiz();
