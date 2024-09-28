# package.json 中的 dependencies 與 devDependencies 分別是什麼
## dependencies
用來管理你運行這個程式所會用到的套件以及其版本等等

## dev dependcies
和 dependencies 不一樣，dev dependcies 只儲存像是 unit test 這種給開發者使用的相關套件，即使沒有這些套件，程式也能夠正常運行  
這裡管理的套件通常為開發者所用，對 end user 的使用通常不會有影響

[參考資料](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencie)  

# package.json 中的 scripts 這個區塊怎麼用

可以在 terminal 中透過 npm 來呼叫並執行  
假設我在 package.json 中新增一個 script 如下
```json
{
    ...
    "scripts" : {
        "start" : "node app.js"
    },
    ...
}
```
透過 ```npm start``` 即可啟動 server 顯示 app.js 中內容  

隨著專案成長，執行程式所需輸入的指令會愈複雜及麻煩，記住這些指令非常消耗心力且不切實際  
可以透過管理 package.json 中的 script 來處理這個問題

[參考資料](https://ithelp.ithome.com.tw/m/articles/10239752)

# Port number 要怎麼以環境變數來設定
透過 dotenv 套件來管理  
安裝完 dotenv 套件後，在專案中新增 .env 檔  
可以在裡面管理一些敏感的資訊 (Port、DB資訊等)  

[參考資料](https://estella00911.coderbridge.io/2021/08/20/dotenv/)
# GitHube repo (gitignore) 選擇放哪些檔案的決策要素？

gitignore 用來記錄哪些檔案不想被 git 追蹤，避免被 push 上去  
例如以下例子：
- dependency caches，如 `/node_modules`
- 臨時資源，如 `.tmp`, `.log` 檔等等
- 不應和他人共享的本地配置文件，如 `.env`
- 編譯後的程式，如 `.o`, `.pyc`, `.class`
- 機密訊息文件，如 DB password 等
- 隱藏的系統檔案，如 macOS 的 `.DS_Store`


[參考資料](https://stackoverflow.com/questions/27850222/what-is-gitignore)

# CSJ vs ESM

在 ES6 之前，Javascript 並沒有官方的 Module 功能，因此社群出現了像是 CJS 和 AMD 等來達成目的  
在 ES6 後引入 ESM，並正式成為 Javascript 的一部分 

## CSJ
CSJ，全稱 CommonJS，為社群所開發產物  
使用 require 和 module.exports 或 exports  
CSJ 為動態加載，運行時根據需求來動態加載模塊
## ESM
ESM，全稱 ES Modules，為 Javascript 官方的模塊系統  
使用 import 和 export
ESM 為靜態加載，編譯時即可確定模塊的依賴關係  
除此之外還有以下特性：
- module 必須在頂層被 import
- module 內部會自動定義為 strict mode
- module name 不被動態改變
- module 內容為 immutable 無法在其他檔案中被動態新增或刪除內容

## 差異
由於 Javascript 是一款動態語言，其實是很難做到 Tree Shaking 這件事  
相較於可以在任何時候使用的 require(CJS)，ESM 只能在開頭 import  
以及 ESM 的眾多特性，這讓他可以去做 Tree Shaking，相較下效能更好