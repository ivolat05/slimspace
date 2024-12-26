function btnResetIsActive(event) {
	if (event) {
		event.classList.add("active-btn-reset");
	}
}
function btnResetIsDisable(event) {
	if (event) {
		event.classList.remove("active-btn-reset");
	}
}
function inputReset(event) {
	if (event) {
		const wrapp = event.closest(".input-rezet-wrapp");
		if (!wrapp) return;
		const input = wrapp.querySelector(".input-reset");
		if (!input) return;
		input.value = "";
		btnResetIsDisable(input);
	}
}
document.addEventListener("input", (e) => {
	if (e.target.classList.contains("input-reset")) {
		console.log(e.target.value.length);
		if (e.target.value.length > 0) {
			btnResetIsActive(e.target);
		} else {
			btnResetIsDisable(e.target);
		}
	}
});

document.addEventListener("click", (e) => {
	if (e.target.closest(".btn-reset-input")) {
		inputReset(e.target);
	}
});
