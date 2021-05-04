## hw1：好多星星
這一題算是暖身題，老師教過很多次，有跟者過基本上很快拿AC。

## hw2：水仙花數
剛接觸一個題目時，對於想法實在是很重要的一件事情，水仙花這道題目拿的點不是 不會寫function，
而是不知道從何開始寫起，解題的關鍵在於想法(難怪有人說coding跟數學有關)，不知道是不是我的錯覺，
這中間的過程確實很像在解數學題目，想法對了，也許很快就能解題。關鍵是想不到要怎麼解，花了一小時想解法想不出來後，
去看了作業檢討，老師給了兩個方向，先判斷這是幾位數，再去思考怎麼樣取出每個位數。其實有解題的方法，寫起code就有
方向了，解題就不會太困難!

## hw3：判斷質數
這題跟水仙花數就相反，想法很簡單，實作起來花了一點時間，寫程式碼還是需要很細心，到現在還是不太搞懂輸入要怎麼樣去切，
我還是沒有所謂的程式腦，作一步，修一步。架構的完整度不高，常常會漏掉某些細節!

## hw4：判斷迴文
這題相對來說就簡單了許多， 只是拿到AC後去看老師的解法，覺得想法很特別，很多種解法都能拿到AC，真的重點是在如何解題的想法上，
但這確實也是很有難度的。(我腦袋好像沒很好)

## hw5：聯誼順序比大小
這題我卡了一天，最後受不了去參考了學長姐的答案， 一步一步跟者做，並思考其中的差異在哪。
這題要注意的是題目範圍，因為數字太大，所以下面這個寫法是我一開始的想法，但就是拿不到AC。 想請教原因為何?
```
function solve(lines) {
let tamp = Number(lines[0])
  for(let i=1;i<lines.length; i++){
    let [a, b, k] = lines[i].split(' ')
    console.log(BigorSmall(a, b, k))
  }

}

function BigorSmall(number1,number2,compete){

  if (number1 === number2){
    return 'DRAW'
  }
  if (number1 > number2 && compete === '1'){
    return 'A'
  }
  if (number1 > number1 && compete === '-1'){
    return 'B'
  }
  if (number2 > number1 && compete === '1'){
    return 'B'
  }
  if (number2 > number1 && compete === '-1'){
    return 'A'
  }
} 
