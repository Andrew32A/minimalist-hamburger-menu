const menu = document.getElementById("menu")
const menuParent = document.getElementById("menuParent")
// note: items is an array
// const items = document.getElementsByClassName("item")


menu.addEventListener("mouseover", function() {
    anime ({
        targets: "#item1",
        translateX: 60,
        opacity: 2
        // delay: anime.stagger(100)
    })

    anime ({
        targets: "#item2",
        translateX: 120,
        opacity: 2
    })

    anime ({
        targets: "#item3",
        translateX: 180,
        opacity: 2
    })

    anime ({
        targets: "#item4",
        translateX: 240,
        opacity: 2
    })
})

menu.addEventListener("mouseout", function() {
    anime ({
        targets: "#item1",
        translateX: 0,
        opacity: -1 // had to set opacity to -1 to avoid weird stutter from bounceback effect in anime.js
        // delay: anime.stagger(100)
    })

    anime ({
        targets: "#item2",
        translateX: 0,
        opacity: -1
    })

    anime ({
        targets: "#item3",
        translateX: 0,
        opacity: -1
    })

    anime ({
        targets: "#item4",
        translateX: 0,
        opacity: -1
    })
})

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