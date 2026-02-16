import ListItem from './ListItem'

// The interface remains the same.
interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void,
}

export default class FullList implements List {

    static instance: FullList = new FullList()

    // It's a good practice to name private properties with an underscore 
    // to avoid naming conflicts with public getters.
    private _list: ListItem[]

    private constructor(list: ListItem[] = []) {
       this._list = list;
    }

    // MOVED INSIDE THE CLASS
    // This getter now correctly implements the 'list' property from the 'List' interface.
    get list(): ListItem[] {
        return this._list;
    }

    // MOVED INSIDE THE CLASS
    load(): void {
        const storedList: string | null = localStorage.getItem('myList');
        if (typeof storedList !== "string") return;
        
        // The parsed list will have the public properties of the ListItem class,
        // which we assume are 'id', 'item', and 'checked' (without underscores).
        const parsedList: { id: string, item: string, checked: boolean }[] = JSON.parse(storedList);
        
        // This process rebuilds the list with new ListItem instances,
        // ensuring all methods of ListItem are available.
        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj.id, itemObj.item, itemObj.checked);
            // We use the addItem method to add the item to the list internally.
            this.addItem(newListItem);
        });
    }

    // MOVED INSIDE THE CLASS
    save(): void {
        localStorage.setItem('myList', JSON.stringify(this._list))
    }

    // MOVED INSIDE THE CLASS
    clearList(): void {
        this._list = [];
        this.save();
    }

    // MOVED INSIDE THE CLASS
    addItem(itemObj: ListItem): void {
        this._list.push(itemObj);
        this.save();        
    }

    // MOVED INSIDE THE CLASS
    removeItem(id: string): void {
        // The logic here was correct, just updated to use the private _list.
        this._list = this._list.filter(item => item.id !== id);
        this.save();
    }
}
