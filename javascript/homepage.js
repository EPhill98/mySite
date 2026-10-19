// Rotating photos on the homepage. Pauses on request, on hover/focus,
// and stays still for people who prefer reduced motion.
(function () {
    const photos = [
        { src: "media/photos/nomien-pitch.jpg", alt: "Euan presenting Nomien at a Cyber Innovation Hub event", caption: "Presenting Nomien at a Cyber Innovation Hub event" },
        { src: "media/photos/swanGrad.jpg", alt: "Euan in graduation robes outside the Great Hall, Swansea University", caption: "Graduating from Swansea University" },
        { src: "media/photos/cityU.jpg", alt: "Euan outside City University of Hong Kong", caption: "My year abroad at CityU Hong Kong" },
        { src: "media/photos/hkhike.jpg", alt: "Euan on a hiking trail in Hong Kong", caption: "Hiking in Hong Kong" }
    ];

    const img = document.getElementById("homeImg");
    const caption = document.getElementById("homeCaption");
    const toggle = document.getElementById("rotatorToggle");
    if (!img || !caption || !toggle) return;

    // Preload so the swap doesn't flash
    photos.forEach(p => { const i = new Image(); i.src = p.src; });

    let index = 0;
    let paused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let hovering = false;

    function render() {
        img.style.opacity = 0;
        setTimeout(() => {
            const p = photos[index];
            img.src = p.src; img.alt = p.alt; caption.textContent = p.caption;
            img.style.opacity = 1;
        }, 250);
    }
    function setPaused(value) {
        paused = value;
        toggle.innerHTML = paused ? '<i class="bi bi-play-circle" aria-hidden="true"></i>' : '<i class="bi bi-pause-circle" aria-hidden="true"></i>';
        toggle.setAttribute("aria-label", paused ? "Play photos" : "Pause photos");
    }

    img.style.transition = "opacity .25s ease";
    setPaused(paused);
    toggle.addEventListener("click", () => setPaused(!paused));
    const fig = img.closest("figure");
    fig.addEventListener("mouseenter", () => hovering = true);
    fig.addEventListener("mouseleave", () => hovering = false);

    setInterval(() => {
        if (paused || hovering || document.hidden) return;
        index = (index + 1) % photos.length;
        render();
    }, 5000);
})();
