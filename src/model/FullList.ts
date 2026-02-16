import ListItem from './ListItem'

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

    private list: ListItem[]

   private constructor(list: ListItem[] = []) {
       this.list = list;
   }

   get List(): ListItem[] {
       return this.list;
   } 
   
   save(): void {
    localStorage.setItem('myList', JSON.stringify(this.list))
   }



