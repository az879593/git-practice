# week-04

## public IP
`3.27.202.247`

## Linux

### /bin, /sbin
`/bin` 存放使用者可以操作的命令  
`/sbin` 存放系統管理員可以使用的命令

通常都是對整個 OS 運行所必要的東西

### /lib, /lib64
`/lib` 存放讓 `/bin` `/sbin` 共用的系統函式庫  
64為原則放在 `/lib64`

[參考資料](https://blog.techbridge.cc/2017/12/23/linux-commnd-line-tutorial/)

### /usr
`/usr/bin` `/usr/sbin` 用來存放對 OS 非必要的命令 (可能 user 自己安裝的)

### /etc 
通常存放一些可編輯的系統文檔

### /home, /root
為一般 user 的家目錄  
`/root` 為系統管理者的家目錄

### /boot 
存放開機所需相關檔案

### /dev
放置 device 裝置檔案，像是硬碟切割、滑鼠鍵盤等

### /opt
通常為第三方廠商軟體放置處

### /var
放置會隨系統運行而改變的變數

### /tmp
存放暫存檔案

### /proc
用來存放記憶體的資料，讓 kernel 能夠持續追蹤 process

## instance type

instance type 簡單來說指的就是**主機的種類**  
在 AWS 中會提供各種不一樣規格的電腦主機，讓你可以根據你的需求去選擇

[參考資料](https://aws.amazon.com/ec2/instance-types/?nc1=h_ls)

### $PATH
又稱環境變數  
正常若要執行 `pwd` 這個指令，需在 terminal 中打完整的執行路徑 `/bin/pwd`  
而 linux 提供環境變數，用來儲存路徑 (如 `/bin`)  
當輸入 `pwd` 時，會先去環境變數中的所有路徑中尋找有沒有該執行檔
找到後即執行該執行檔，沒有的話回傳錯誤

### which
`which` 會在 `$PATH` 裡尋找該指令，並回傳路徑

## Nginx

Nginx 是一種非同步框架的網頁伺服器，可用作**反向代理**、**附載平衡**等功能

### 正向代理

user 先發送請求給代理，代理連上網路找到 server，回傳資料給使用者  
可以保護 user 端的身份

### 反向代理

user 先發給透過網路發請求給代理，代理再將 server 回傳資料傳給 user  
可做到附載平衡，防止伺服器端被攻擊等等功能

[參考資料](https://www.pressplay.cc/project/F720CEB1D6057D7ABB5614722AB18FFF/articles/660A57208C29FF94453548ED21F284EF)

## pm2
pm2 是一個 node 的管理程序  
可以幫忙自動重啟(server crash 或 node crash)、load balance、整合 CI/CD 等多功能  

[參考資料](https://medium.com/learn-or-die/%E5%A5%BD-pm2-%E4%B8%8D%E7%94%A8%E5%97%8E-fc7434cc8821)

## Proxy
又稱代理，一種網路服務，允許客戶端透過這個服務連線到伺服器，進行非直接的連接  
通常會有一個快取區，進而可提高訪問速度，此外還有像是過濾內容，隱藏真實 ip 等等功能

[參考資料](https://zh.wikipedia.org/zh-tw/%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8)

## Nginx 設定檔

```nginx
worker_processes 1;
user root;

events {}

http {
        
    server {
        
        listen       80;

        location / {
            
			root /home/ubuntu/repo/git-practice/backend;
            
			proxy_pass http://3.27.202.247:3000;
        }

       
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
    
}
```
## Security Group
EC2 正常情況下是拒絕其他所有 ip 和 port，透過 security group 可以允許特定 ip 和 port 連入

## sudo
Super User DO  
讓一般使用者不需知道 root 密碼即可獲取權限  
使用前需被加入 sudoer 才能使用 sudo   
當該指令需要 root 權限就要加入在前面

[參考資料](https://yhtechnote.com/linux-sudo/)
## Nginx log 在哪

在 /var/log/nginx 裡面  
打開就可以看到如下這串  
```x.x.x.x - - [06/Oct/2024:15:32:21 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"
```  
可以得知 user 的資訊(ip, browser, time等等)  

google 找到的  
[參考資料](https://www.readfog.com/a/1644005463855042560)

## 遇到問題

### pm2 start app.js 後無法連上 ip:3000 (未啟動 nginx)
將 security group 加入 custom tcp :3000 0.0.0.0

### nginx.conf 在 ec2 無法存檔
透過 vscode 套件 **Save as Root in Remote - SSH** 存檔

### nginx 無法正常 stop
sudo