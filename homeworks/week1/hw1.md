## 交作業流程
1. 通過GitHub classroom連結並授權後，會導引到"Lidemy" 的github respositories並看到"自己"的帳號。
2. 切換git bash後 git clone (code link)到local端後就可以去寫作業拉 (`寫作業前記得建立git branch，並git checkout branch`)。
3. 將完成的作業用 git status 確認修改了哪些檔案。
4. 確認檔案後用 git commit -am 建立一個新的版本。(-am適用於git add過後的檔案，若是'新增'的檔案，要用git add加入)
6. 將最新的作業版本 git push orgin branch名稱 到 git repository上。
7. 回到網頁上並到Pull Request(目的是將branch merge到主線上(確認是否可以merge不會有conflict)。
8. 確認作業都沒問題後複製*網址*到學習系統中的課程總攬去繳交作業。
---
## 作業改完並且 merge 以後：
1. 切換到 master：git checkout master
2. 把最新的改動拉下來：git pull origin master
3. 刪除已經 merge 的 branch：git branch -d hw1

## 自我檢討補充
Git 真正儲存的是「檔案的差異」
第一次 git init 的時候會把整份檔案記起來，知道開始長什麼樣子。之後對於每一個檔案，Git是儲存之間的差異。
