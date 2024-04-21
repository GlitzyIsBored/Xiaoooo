console.log("hgi");
const xiaoomg = document.getElementById("xiaoo");

xiaoomg.addEventListener("mouseover", event => {
	//event.target.style.backgroundColor = "green";
	event.target.style.transform = "rotate(7deg)";
});

xiaoomg.addEventListener("mouseout", event => {
	//event.target.style.backgroundColor = "transparent";
	event.target.style.transform = "rotate(0deg)";
});

const interactomg = document.getElementById("interact");

interactomg.addEventListener("mouseover", event => {
	event.target.style.color = "green";
	//event.target.style.backgroundColor = "green";
	//event.target.style.borderRadius = "29px";
})

interactomg.addEventListener("mouseout", event => {
	event.target.style.color = "#adf2a7";
})