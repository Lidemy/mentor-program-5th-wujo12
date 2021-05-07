## 請以自己的話解釋 API 是什麼
API 全名為 Application Programming Interface，中文翻譯為「應用程式介面」。讓用戶端及伺服器端交換資料的方法。
以`從拉麵店的販賣機理解什麼是 API` 這篇文章當作基礎去了解API。

Ex:
我們進入自助式的拉麵店，點餐的方式是投錢給販賣機後，拿者出餐單給廚師做出餐點。
在這個過程當中可以去整理出:

    顧客 = 用戶端
    廚師 = Server端
    販賣機 = API
    餐點 = 資料

我們透過販賣機(API) 去跟 廚師說 我們要甚麼餐點(我們要的資料) ， 廚師透過點餐單而理解顧客想要甚麼餐點，最後將餐點送到座位上(Server response)，以此方式達到交換資料的過程`且廚師可以決定他要賣甚麼內容(提供甚麼資料)`。
## 請找出三個課程沒教的 HTTP status code 並簡單介紹
HTTP 狀態碼表明一個 HTTP 要求是否已經被完成。回應分為五種：

    資訊回應 (Informational responses, 100–199),
    成功回應 (Successful responses, 200–299),
    重定向 (Redirects, 300–399)
    用戶端錯誤 (Client errors, 400–499)
    伺服器端錯誤 (Server errors, 500–599)
---
    102 Processing-- 伺服器收到並處理請求中，但目前未有回應。
    201 Created -- 請求成功且新的資源成功被創建，通常用於 POST 或一些 PUT 請求後的回應。
    401 Unauthorized -- 需要授權以回應請求。它有點像 403，但這裡的授權，是有可能辦到的。
    403 Forbidden -- 用戶端並無訪問權限，例如未被授權，所以伺服器拒絕給予應有的回應。不同於 401，伺服端知道用戶端的身份。
    404 Not Found

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
Base URL: https://lidemy-restaurants.herokuapp.com

說明          | Method | path | 參數 | 範例
--------------|:-----:|-----:| ----:|------------------------
|回傳所有餐廳資料|GET	|/restaurants       |_limit:限制回傳資料數量|   /restaurants?_limit=5|
|回傳單一餐廳資料|GET	|/restaurants/:id	|無                   |          /restaurant/10|
|新增餐廳	|POST	|/restaurants          |name:書名            |                         無|
|刪除餐廳	|DELETE	|/restaurants/:id      |無                   |                          無|
|更改餐廳資訊|PATCH  |/restaurants/:id      |name: 書名	          |                            無|

# 回傳所有餐廳資料
```
const request = require("request");

request("https://lidemy-restaurant.herokuapp.com/restaurants", (err, res, body) => {
  // 需求內容
})
```
# 回傳單一餐廳資料
```
const request = require("request");

request("https://lidemy-restaurant.herokuapp.com/restaurants/"+ id, (err, res, body) => {
  // 需求內容
})
```
# 增新餐廳
```
const request = require("request");

request.post(
    url:"https://lidemy-restaurant.herokuapp.com/restaurants/"
    ,form: {
      name, 
    },
  },
  (err, res, body) => {
    //需求內容
  }
);
```
# 刪除餐廳
```
const request = require("request");

request.post(
    url:"https://lidemy-restaurant.herokuapp.com/restaurants/"+id
    ,form: {
      name, 
    },
  },
  (err, res, body) => {
    //需求內容
  }
);
```