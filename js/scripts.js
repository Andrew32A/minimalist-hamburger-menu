// instantiate variable for time out
let timeOut

class Item {
    constructor(icon, bgColor) {
        // note: $ is shorthand for getElementByID
        this.$element = $(document.createElement("div"))
        this.icon = icon
        this.$element.addClass("item")
        this.$element.css("background-color", bgColor)
        let i = document.createElement("i")
        document.getElementById(i).addClass("fi-" + icon)
        this.$element.append(i)
        this.prev = null
        this.next = null
        this.isMoving = false
        let element = this
        this.$element.on("mousemove", function() {
            clearTimeout(timeOut)
            timeOut = setTimeout(function() {
                if (element.next && element.isMoving) {
                    element.next.moveTo(element)
                }
            }, 10)
        })
    }

    moveTo(item) {
        anime({
            targets: this.$element[0],
            left: item.$element.css("left"),
            top: item.$element.css("top"),
            duration: 700,
            elasticity: 500
        })
        if (this.next) {
            this.next.moveTo(item)
        }
    }

    updatePosition() {
        anime({
            targets: this.$element[0],
            left: this.prev.$element.css("left"),
            top: this.prev.$element.css("top"),
            duration: 80
        })
        if (this.next) {
            this.next.updatePosition()
        }
    }
}

class Menu {
    constructor(menu) {
        this.$element = document.getElementById(menu)
        this.size = 0
        this.first = null
        this.last = null
        this.first.$element.on("mouseup", function() {
            if (menu.first.isMoving) {
                menu.first.isMoving = false
            }
            else {
                menu.click()
            }
        })
    }

    open() {
        this.status = "open"
        let current = this.first.next
        let iterator = 1
        let head = this.first
        let sens = head.$element.css("left") < head.$element.css("right") ? 1 : -1
        while (current != null) {
            anime({
                targets: current.$element[0],
                left: parseInt(head.$element.css("left"), 10) + (sens * (iterator * 50)),
                top: head.$element.css("top"),
                duration: 500
            })
            iterator++
            current = current.next
        }
    }

    close() {
        this.status = "closed"
        let current = this.first.next
        let head = this.first
        let iterator = 1
        while (current != null) {
            anime({
                targets: current.$element[0],
                left: head.$element.css("left"),
                top: head.$element.css("top"),
                duration: 500
            })
            iterator++
            current = current.next
        }
    }

    click() {
        if (this.status == "closed") {
            this.open()
        }
        else {
            this.close()
        }
    }
}

let menu = new Menu("#menuWrapper")
let item1 = new Item("test1", "#ff5c5c")
let item2 = new Item("test2", "#ff5c5c")
let item3 = new Item("test3", "#ff5c5c")

menu.add(item1)
menu.add(item2)
menu.add(item3)

document.getElementById(document).delay(50).queue(function(next) {
    menu.open()
    next()
    document.getElementById(document).delay(1000).queue(function(next) {
        menu.close()
        next()
    })
})