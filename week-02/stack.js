// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
module.exports = class Stack {
	// TODO: # 有特別的意思嗎？請以註解回覆。
    /*
        # 意思：
        即private，在OOP中拿來封裝，避免外部物件任意存取
        要存取通常會透過getter setter去存取
    */ 

    #items;

    constructor() {
        this.#items = [];
    }

    // 在 stack 頂部加入元素i
    push(element) {
    	// TODO
        // 增加array length，在尾端放入元素
        this.#items.length++;
        this.#items[this.#items.length - 1] = element;
    }

    // 移除並回傳 stack 頂部的元素
    pop() {
	    // TODO
        // 檢查array是否為空，無法pop
        if(this.isEmpty()){
            return null;
        }

        // 將last item放到一個temp中，再將length--
        let popItem = this.#items[this.#items.length - 1];
        this.#items.length--;
        return popItem;
    }

    // 回傳 stack 頂部的元素，但不移除它
    peek() {
        // TODO
        // 判斷是否為空
        if(this.isEmpty()){
            return null;
        }
        // return last element
        return this.#items[this.#items.length - 1];
    } 

    // 檢查 stack 是否為空
    isEmpty() {
        // TODO
        // 透過array length判斷是否為空
        if(this.#items.length <= 0){
            console.log("Stack is empty");
            return true;
        }
        return false;
    }

    // 回傳 stack 中元素的個數
    size() {
        // TODO
        return this.#items.length;
    }

    // 清空 stack 
    clear() {
        // TODO
        // length設0
        this.#items.length = 0;
    }

    // 印出 stack 內容
    print() {
        // TODO
        // 若非空，將array每一個直加入result後再印出
        if(!this.isEmpty()){
            let printResult = '';
            for(let index = 0; index < this.#items.length; index++){
                printResult = printResult + this.#items[index] + ' ';
            }
            console.log(printResult);
        }
    }
}
