export interface Item {
  id: string,
  item: string,
  checked: boolean,
}

export default class ListItem implements Item {
    private _id: string;
    private _item: string;
    private _checked: boolean;
    
    constructor(
      id: string,
      item: string,
      checked: boolean,
    ) {
      this._id = id;
      this._item = item;
      this._checked = checked;
    }
     
    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get item(): string {
        return this._item;
    }

    set item(value: string) {
        this._item = value;
    }

    get checked(): boolean {
        return this._checked;
    }

    set checked(value: boolean) {
        this._checked = value;
    }
}

