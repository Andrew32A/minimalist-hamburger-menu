const menu = document.getElementById("menu")
const menuParent = document.getElementById("menuParent")
// note: items is an array
const items = document.getElementsByClassName("item")

let menuCounter = 0

function openMenu() {
    anime({
        targets: "#menu",
        backgroundColor: "#151a21",
        width: "375px",
        easing: "easeInOutQuad"
    })

    anime ({
        targets: "#item1",
        translateX: 60,
        opacity: 2,
        easing: "easeInOutQuad",
        // delay: anime.stagger(100)
    })

    anime ({
        targets: "#item2",
        translateX: 120,
        opacity: 2,
        easing: "easeInOutQuad",
    })

    anime ({
        targets: "#item3",
        translateX: 180,
        opacity: 2,
        easing: "easeInOutQuad",
    })

    anime ({
        targets: "#item4",
        translateX: 240,
        opacity: 2,
        easing: "easeInOutQuad",
    })
}

function closeMenu() {
    anime({
        targets: "#menu",
        backgroundColor: "#1b2028",
        width: "125px",
        easing: "easeOutQuint"
    })

    // setTimeout(function() {
    //     menu.style.width = "125px"
    // }, 500)

    anime ({
        targets: "#item1",
        translateX: 0,
        opacity: -2 // had to set opacity to -2 to avoid weird stutter from bounceback effect in anime.js
        // delay: anime.stagger(100)
    })

    anime ({
        targets: "#item2",
        translateX: 0,
        opacity: -2
    })

    anime ({
        targets: "#item3",
        translateX: 0,
        opacity: -2
    })

    anime ({
        targets: "#item4",
        translateX: 0,
        opacity: -2
    })  
}

function menuToggle() {
    menuCounter++
    if (menuCounter % 2 === 0) {
        closeMenu()
    }
    else {
        openMenu()
    }
}

menuParent.addEventListener("click", menuToggle)

// adds animations to each item on mouseover and mouseout
// for (let i = 0; i<items.length; i++) {
//     items[i].addEventListener("mouseover", function() {
//         anime ({
//             targets: `${i}`,
//             scale: 1.2
//         })
//     })
// }

// notes:

// menu.addEventListener("mouseover", bubble)

// function openBubble() {
//     anime ({
//         targets: "#menuParent, #item1",
//         width: "50%",
//         easing: "easeInOutQuad",
//         // loop: true,
//         // delay: 1,
//         duration: 1000
//     })
// }

// function closeBubble() {
//     anime ({
//         targets: "#menuParent, #item1",
//         width: "0%",
//         easing: "easeInOutQuad",
//         // loop: true,
//         // delay: 1,
//         duration: 1000
//     }) 
// }
// import anime from './anime.js';