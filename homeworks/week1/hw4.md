# 跟你朋友介紹 Git
 ## Git 的基本概念
 ### GIT 思考模式 
>1.需要新版本 = 開一個新資料夾 <br>
>2.不想要加入版本控制的 = 不要亂開資料 <br>
>3.為了避免版本號衝突 = 檔名用看似亂數的當檔案名稱<br>
>4.如何知道最新版本 = 在開一個資料夾來存，前面的檔案<br>
---
 ## 基礎使用
 ### Git 基本command 
>git init: 創造一個git (是一個隱藏檔案，可以使用 ls -al看到)<br>
.gitignore: 要忽略檔案 (可將數個不想加入版本控制的檔案整合再一起)<br>
git status: 查看現在狀態 (是否有更改過的檔案)<br>
git add S :把S加入版本控制 git add . : 資料夾內的檔案都加入版本控制<br>
git rm --cached S: 把S移出版本控制<br>
git commit -m "commit的訊息" :將add過後的檔案，儲存為一個新版本 (是將目前版本做一個截圖(snapshot))<br>
git log: 歷史版本紀錄 git log --oneline(簡易條列版本紀錄)<br>
* 修改紀錄產生時，gti status 會出現紅色字體標示哪些東西`被改變`了,這時可以將改變內容`add`去版本控制後，做git commit -r "" 產生`新的版本`( 用log查看是否有新的commit)
* 若修改多個檔案的作法
1. git add .(全部修改的一起做Add)
2. git commit -am 一個指令完成(新增的檔案無法被納入)
---
## Git & GitHub   
目前應該已經理解Git要如何創建、修改、控制。<br>
所謂的GitHub像是Git的倉庫，我們可以將我們的Git上傳到Github上讓`大眾`開源使用。<br>
好處可以列舉得就有很多啦，像是剛剛提到的免費且開源、速度快檔案小(Git在於它並不是記錄版本的差異，而是記錄檔案內容的`快照`（snapshot），可以讓 Git 在`快速`的切換版本。)。<br>
在解釋Git Hub如何使用前必須先提及「`branch`」<br>
* 在Git 裡面有三階段 1. Woriking後用Git add 到2.Staging階段 git commit 到 3. repository(github)<br>
本地working 本地Staging 遠端repository.

## Branch想法
目的是為了解決一條線開發，在外面工作常常會多人開發一個Project，因此我們可以想成我們複製`主要的資料(master or main)`，到自己的開發環境，再將修改完且無bug的資料放進主資料夾(去防範`破壞主資料夾的內容`)。
### Branch 基本操作
>git branch 名稱 : 開一個新的branch<br>
git branch -v 看有哪些 branch<br>
git branch -d 名稱: 刪除branch<br>
git checkout 版本名稱: 查看某個版本 <br>
git merge branch名稱: 把別的branch 合併過來<br>
### 出現Conflict
工作時常常會遇到多人開發，有可能大家修改到同一個檔案or同個程式，此時兩個版本Git會不知道要採用哪位的修改的內容。用git status會顯示 both modify ，這時要到檔案中去`手動`選擇要哪個版本。
## GitHub操作
在了解為什麼要用Branch開發後，接者要了解怎麼將Git內容傳到我們的倉庫中(Github)。
>git push origin master: 推你最新版本回去git Hub<br>
git pull origin master: GitHub 的版本可以拉下來<br>
* Push 是指將我們local端的版本，`推`到origin端(倉庫)做保存，當然我們也可以在倉庫上修改我們的內容。
* Pull 是相反的概念，若我們有修改倉庫端的內容 可以用`拉`的方式，將origin端pull回我們local端。<br>

git commit --amend 修改commit名稱<br>
git reset Head^ 回到`最新`的前一個版本<br>
git checkout(restore) — 檔案名稱 : 可以把修改的恢復 當前版本原本樣貌<br>
git branch -m 名稱 —重新命名branch名稱<br>

