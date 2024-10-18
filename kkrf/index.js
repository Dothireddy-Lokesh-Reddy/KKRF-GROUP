let video3 = document.getElementById("video-3")
let video4 = document.getElementById("video-4")
let videoChild1 = document.getElementById("video-child-1")
let videoChild2 = document.getElementById("video-child-2")
let nav1 = document.getElementById("nav-1")
let nav2 = document.getElementById("nav-2")
let nav3 = document.getElementById("nav-3")

videoChild1.addEventListener("mouseenter", (e) => {
	e.target.play();
})
videoChild2.addEventListener("mouseenter", (e) => {
	e.target.play();
})
videoChild1.addEventListener("mouseleave", (e) => {
	e.target.pause();
})
videoChild2.addEventListener("mouseleave", (e) => {
	e.target.pause();
})
video3.addEventListener("mouseenter", (e) => {
	e.target.play();
})
video4.addEventListener("mouseenter", (e) => {
	e.target.play();
})
video3.addEventListener("mouseleave", (e) => {
	e.target.pause();
})
video4.addEventListener("mouseleave", (e) => {
	e.target.pause();
})
nav1.addEventListener("mouseenter", (e) => {
	e.target.textContent = "Hard"
	e.target.style.cssText = `
	text-decoration:underline`
})
nav1.addEventListener("mouseleave", (e) => {
	e.target.textContent = "Work"
	e.target.style.cssText = `
	text-decoration:none`
})
nav2.addEventListener("mouseenter", (e) => {
	e.target.textContent = "Studios"
	e.target.style.cssText = `
	text-decoration:underline`
})
nav2.addEventListener("mouseleave", (e) => {
	e.target.textContent = "Play Harder"
	e.target.style.cssText = `
	text-decoration:none`
})
nav3.addEventListener("mouseenter", (e) => {
	e.target.textContent = "Recognition"
	e.target.style.cssText = `
	text-decoration:underline`
})
nav3.addEventListener("mouseleave", (e) => {
	e.target.textContent = "Yeah!"
	e.target.style.cssText = `
	text-decoration:none`
})