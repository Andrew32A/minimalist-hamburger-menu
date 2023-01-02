# Minimalist Pop-out Menu
This is meant to be boilerplate code for a small menu using anime.js. I originally started this to create a timer selection for my https://github.com/Andrew32A/typing-gym project, however
I decided to make it scalable and allowing multiple items to be put in the DOM for ease of use on future projects.

# How to use
Simply follow the pattern here and be sure to replace the id name and onclick arg to something unique.

```html
    <div id="menu">
        <p class="menuParent">30</p>
        <div id="item1" class="item" onclick="menuChange(item1)">
            15
        </div>
        <div id="item2" class="item" onclick="menuChange(item2)">
            30
        </div>
        <div id="item3" class="item" onclick="menuChange(item3)">
            60
        </div>
        <div id="item4" class="item" onclick="menuChange(item4)">
            120
        </div>
    </div>
```
