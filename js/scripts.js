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
        $(i).addClass("fi-" + icon)
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