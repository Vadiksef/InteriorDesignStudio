//Tabs___________________________________________________________________________________________
let tabs = document.querySelectorAll(".tabs[data-tabs]");
for (let index = 0; index < tabs.length; index++) {
    let tab = tabs[index];
    let tabs_items = tab.querySelectorAll(".tabs__title[data-tabs-titles]");
    let tabs_blocks = tab.querySelectorAll(".tabs__body[data-tabs-body]");
    for (let index = 0; index < tabs_items.length; index++) {
        let tabs_item = tabs_items[index];
        tabs_item.addEventListener("click", function (e) {
            for (let index = 0; index < tabs_items.length; index++) {
                let tabs_item = tabs_items[index];
                tabs_item.classList.remove('_tab-active');
                tabs_blocks[index].classList.remove('_tab-active');
            }
            tabs_item.classList.add('_tab-active');
            tabs_blocks[index].classList.add('_tab-active');
            e.preventDefault();
        });
    }
}