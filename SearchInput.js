export default class SearchInput {
        constructor(element) {
            this._element = element;
        }

        set element(element){
        this._element = element;



        }
        get element(){
        return this._element;

        }
    }
    const searchInput = new SearchInput(document.getElementById)