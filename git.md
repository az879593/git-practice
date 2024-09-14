# blob, tree, branch, head

### blob
git add後會創建的物件
僅儲存檔案的**內容**
首先會先將檔案的內容透過SHA1產生一個hash值，頭兩碼作為資料夾名稱，剩餘作為該blob檔案的名稱
以hello world.txt為例，內容為hello world
經SHA1後為 **2aae6c35c94fcfb415dbe95f408b9ce91ee846ed**
則此blob檔名為 **ae6c35c94fcfb415dbe95f408b9ce91ee846ed** 並存在 **2a** 的資料夾裡
而此blob檔案內容為hello world經過zlib演算法壓縮後再存在其中

### tree
有點像資料夾的概念，儲存規則和blob相同，透過SHA1雜湊後作為資料夾名和檔名，內容一樣透過zlib壓縮
但tree所存放內容為目錄下的資訊，如這個資料夾裡有存放什麼資料夾(tree)什麼檔案(blob)
會有另一種物件叫commit物件來存放說這次的版本有哪些的tree來達成版控目的

### commit (補充)
git commit後會創建的一個物件
存放這次commit後裡面有包含哪些tree
還會存放上一次的commit物件，藉此進行版本控制

參考自:
[Github](https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/zh-tw/06.md)
[影片](https://www.youtube.com/watch?v=PZbSRy_ow0U)


### branch
為一個指標，通常指向該分支的最新commit

### head
為一個指標，指著目前所在commit位置
通常指向目前所在分支的branch指標上
如果指向的commit沒有branch的話，又稱作**detached head**
在**detached head** commit的話會導致head後面的commit遺失
所以通常不會這麼做，而是在該位置開一個新的branch去做修改
