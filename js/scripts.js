const menuParent = document.getElementById("menuParent")
const itemArray = ["#item1", "#item2", "#item3", "#item4"]
let menuCounter = 0

// opens menu
function openMenu() {
    anime({
        targets: "#menu",
        backgroundColor: "#151a21",
        width: "375px",
        easing: "easeInOutQuad"
    })

    for (let i = 0; i < itemArray.length; i++) {
        anime ({
            targets: itemArray[i],
            translateX: (60 * (i + 1)),
            opacity: 2,
            easing: "easeInOutQuad"
            // i really wanted to use stagger to handle each item element, but it's only available on the latest version of anime.js which i couldn't get to work right now
            // instead, i used a for loop to handle each element
            // delay: anime.stagger(100)
        })
    }
}

// closes menu
function closeMenu() {
    anime({
        targets: "#menu",
        backgroundColor: "#1b2028",
        width: "125px",
        easing: "easeOutQuint"
    })

    for (let i = 0; i < itemArray.length; i++) {
        anime ({
            targets: itemArray[i],
            translateX: 0,
            opacity: -2 // had to set opacity to -2 to avoid weird stutter from bounceback effect in anime.js
        })
    }
}

// counts the num of times the user clicked on menu and handles menu behaviour as needed
function menuToggle() {
    menuCounter++
    if (menuCounter % 2 === 0) {
        closeMenu()
    }
    else {
        openMenu()
    }
}

// activates menu functionality, remove this to disable menu
menuParent.addEventListener("click", menuToggle)