const wrapper = document.getElementById("projectWrapper");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

function getCardWidth() {
    const card = wrapper.querySelector(".project-item");
    const gap = parseFloat(window.getComputedStyle(wrapper).gap) || 0;
    return (card.offsetWidth + gap) * 3;
}

function maxScroll() {
    return wrapper.scrollWidth - wrapper.clientWidth;
}

nextBtn.addEventListener("click", () => {
    const move = getCardWidth();
    const atEnd = wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 5;

    if (atEnd) {
        wrapper.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    } else {
        wrapper.scrollBy({
            left: move,
            behavior: "smooth"
        });
    }
});

prevBtn.addEventListener("click", () => {
    const move = getCardWidth();
    const atStart = wrapper.scrollLeft <= 5;

    if (atStart) {
        wrapper.scrollTo({
            left: maxScroll(),
            behavior: "smooth"
        });
    } else {
        wrapper.scrollBy({
            left: -move,
            behavior: "smooth"
        });
    }
});