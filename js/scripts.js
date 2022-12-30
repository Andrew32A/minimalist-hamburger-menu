const menu = document.getElementById("menuParent")
// note: items is an array
const items = document.getElementsByClassName("item")

// function positioning() {
//     for(i=0; i<items.length; i++) {
//         items[i].style.translateY = "`${-(i*1000)}`"
//     }
// }

// positioning()

menu.addEventListener("click", function() {
    for(i=0; i<items.length; i++) {
        items[i].style.opacity = "1"
    }

    anime ({
        targets: "#item1",
        translateX: 60,
        // delay: anime.stagger(100)
    })

    anime ({
        targets: "#item2",
        translateX: 120,
    })

    anime ({
        targets: "#item3",
        translateX: 180,
    })

    anime ({
        targets: "#item4",
        translateX: 240,
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