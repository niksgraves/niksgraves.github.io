document.getElementById("year").textContent = new Date().getFullYear();

const terminal = document.querySelector(".terminal");

if (terminal && window.matchMedia("(min-width: 801px)").matches) {

	document.addEventListener("mousemove", (event) => {

		const x =
			(event.clientX / window.innerWidth - 0.5) * 2;

		const y =
			(event.clientY / window.innerHeight - 0.5) * 2;

		terminal.style.transform = `
			rotateY(${x * 2}deg)
			rotateX(${y * -2}deg)
			translateZ(0)
		`;
	});

}


const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
	(entries) => {

		entries.forEach((entry) => {

			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
			}

		});

	},
	{
		threshold: 0.08
	}
);


sections.forEach((section) => {

	section.classList.add("reveal");

	observer.observe(section);

});


document.querySelectorAll(".project").forEach((project) => {

	project.addEventListener("mouseenter", () => {

		const title = project.querySelector("h2");

		if (!title) return;

		title.style.transform = "translateX(3px)";

		setTimeout(() => {
			title.style.transform = "";
		}, 100);

	});

});