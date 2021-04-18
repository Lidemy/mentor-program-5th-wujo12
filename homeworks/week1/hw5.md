## 請解釋後端與前端的差異。
### 前端
可以說是網頁上可以看的到所有東西。
>前端三本住:<br>
    >HTML（HyperText Markup Language）- 是網頁的框架、身體 <br>
Css (Cascading Stylesheets)－HTML的衣服，可以美化網頁外觀<br>
JavaScript－網頁的互動，功能性的程式語言<br>
### 後端
>就是網頁上看不到的東西，後端主要是做資料的處理，讓伺服器能夠在快速的時間內找到使用者所需要的資料。<br>
後端使用的語言常見的有:PHP、Java、Python、Ruby，、 Node.js、Go 等等。


## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
我們要在網頁上瀏覽某一個網站，與我們現實生活中要去某人家的概念相似，假設我們要去朋友家，必須知道他的地址，朋友家的地址=網路的IP位址。<br>
而網路的IP都是有0-255組成的，例如100.13.120.1000。 而若是朋友地址都很難記，我們都會問附近的地標，地標=網路的Domain(域名)。<br>
但當然我們指光靠Domain 是找不到朋友家的地址的，因此DNS(Domain Name System) 就會從幫助我們。當我們輸入 google.com(所謂的域名)，DNS則會告訴我們詳細的IP地址，讓我們能找到 google.com。<br>
接者，我們可以嘗試去解釋這個題目了。<br>
>1. 輸入google.com後，瀏覽器會去問DNS說google.com 如何走?<br>
>2. DNS回說: google的IP位址。(假設地址為100.13.120.100)<br>
>3. 瀏覽器就會送出request到 100.13.120.100 去說我要找JavaScrpit (因關鍵字為JavaScript)<br>
>4. 當位在100.13.120.100 的 Server收到 request後就會到`資料庫`去查尋關鍵字。<br>
>5. 在資料庫找到JavaScript的資料後就會回傳資料給Server。 <br>
>6. Server搜到資料後會送response給我們的瀏覽器。
>7. 我們的瀏覽器就會解析此response 並顯示出來。


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
### 系統基本資訊
>$ uname -a          # 顯示系統核心資訊 <br>
$ cat /proc/cpuinfo # 顯示 CPU 資訊<br>
### 快捷鍵
>Tab           # 命令補全及檔案補齊，檔案名稱可以不用全打，滿省時的。<br>
Ctrl+R        # 搜尋執行過的命令，新手應該會用到<br>
Ctrl+C: 中止執行中的命令<br>
其實我覺得滿重要的，我有次打cat沒打檔案名稱，然後就卡住了，到現在也不知道原因哈哈哈(再麻煩助教了)，只知道Ctrl +C 就終止了。