document.addEventListener("DOMContentLoaded", () => {
	const options = document.querySelectorAll(".menu .option");
	const sections = document.querySelectorAll("main > section");
	const actionBtns = document.querySelectorAll(".actions .action[data-target]");
	const overlay = document.getElementById("overlay");

	const mapping = ["dashboard", "message", "fee", "profile"];

	function showSection(target) {
		// fade in overlay
		overlay.classList.add("active");

		// after short delay, switch section
		setTimeout(() => {
			sections.forEach(s => (s.style.display = "none"));
			const section = document.querySelector(`.${target}`);
			if (section) section.style.display = "block";

			options.forEach(o => o.classList.remove("active"));
			const idx = mapping.indexOf(target);
			if (idx !== -1) options[idx].classList.add("active");

			// fade out overlay
			setTimeout(() => {
				overlay.classList.remove("active");
			}, 400); // duration overlay stays visible before fading
		}, 400); // delay before showing section
	}

	options.forEach((option, index) => {
		option.addEventListener("click", () => showSection(mapping[index]));
	});

	actionBtns.forEach(btn => {
		btn.addEventListener("click", () => showSection(btn.dataset.target));
	});

	showSection("dashboard");
});


const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
	greeting.textContent = "Good Morning!";
} else if (hour < 18) {
	greeting.textContent = "Good Afternoon!";
} else {
	greeting.textContent = "Good Evening!";
}

const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openSidebar");

openBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

// click outside to close
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !openBtn.contains(e.target)) {
    sidebar.classList.remove("active");
  }
});