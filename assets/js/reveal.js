var imgWorkspace = {
    delay: 100,
    distance: '30%',
    duration: 1800,
    reset: true,
    scale: 0.8,
    origin: 'bottom',
    opacity: 0
};
var imgWorkspaceMobi = {
    delay: 100,
    distance: '30%',
    duration: 1800,
    reset: true,
    scale: 0.8,
    origin: 'bottom',
    opacity: 0
};
var iconCard = {
    delay: 200,
    distance: '100%',
    duration: 1800,
    cleanup: true,
    rotate: {
        x: 0,
        y: 0,
        z: 180,
    },
    reset: true,
    origin: 'right',
    opacity: 0.5
};
var arrowTop = {
    delay: 1800,
    distance: '150%',
    duration: 1800,
    rotate: {
        x: 0,
        y: 0,
        z: 0,
    },
    origin: 'bottom',
    opacity: 0,
};
ScrollReveal().reveal('.img-workspace-la-gi', imgWorkspace);
ScrollReveal().reveal('.img-workspace-la-gi-mobi', imgWorkspaceMobi);
ScrollReveal().reveal('.s3-card-icon', iconCard);

ScrollReveal().reveal('.arrow-top', arrowTop);



