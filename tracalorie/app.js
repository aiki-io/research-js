const ItemCtrl = (() => {
    const item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    const data = {
        items: [
            { id: 0, name: 'Steak Dinner', calories: 1200 },
            { id: 1, name: 'Cookie', calories: 400 },
            { id: 2, name: 'Eggs', calories: 300 }
        ],
        currentItem: null,
        totalCalories: 0
    };

    return {
        getItems: () => {
            return data.items;
        }
    };

})();

const UiCtrl = (() => {
    const $itemList = $('#item-list')
    return {
        populateItemList: (items) => {
            $itemList.empty();
            $.each(items, (ndx, item) => {
                const html = `
                <li class="collection-item" id="item-${item.id}">
                    <strong>${item.name}:
                        <em>${item.calories} calories</em>
                    </strong>
                    <a href="" class="secondary-content">
                        <i class="edit-item fa fa-pencil"></i>
                    </a>
                </li>
            `;
            const li = $(html);
            $itemList.append(li);

            });
        }
    };
})();

const App = ((ItemCtrl, UiCtrl) => {

    return {
        init: () => {
            const items = ItemCtrl.getItems();
            UiCtrl.populateItemList(items);
        }
    }
})(ItemCtrl, UiCtrl);

$(() => {
    App.init();
});
