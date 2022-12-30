const menu = document.getElementById("menuParent")
const items = document.getElementsByClassName("item")

menu.addEventListener("click", function() {
    for(i=0; i<items.length; i++) {
        items[i].style.opacity = "1"
    }
    anime ({
        targets: "#menu",
        translateX: 270,
        // delay: anime.stagger(100)
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