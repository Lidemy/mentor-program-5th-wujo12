const request = require('request')
const process = require('process')

const apiUrl = 'https://lidemy-book-store.herokuapp.com'
const action = process.argv[2]
const param = process.argv[3]

switch (action) {
  case 'list' :
    listBooks()
    break
  case 'read' :
    readBook(param)
    break
  case 'delete' :
    deleteBook(param)
    break
  case 'creat' :
    addBook(param)
    break
  case 'update' :
    renewBook(param, process.argv[4])
    break
  default :
    console.log('請輸入動作')
}
function listBooks() {
  request(`${apiUrl}/books?_limit=20`,
    (err, response, body) => {
      if (err) {
        console.log('error', err)
        return
      }
      let data
      try {
        data = JSON.parse(body)
      } catch (err) {
        console.log(err)
        return
      }
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].id, data[i].name)
      }
    }
  )
}
function readBook(id) {
  request(`${apiUrl}/books/${id}`,
    (err, response, body) => {
      if (err) {
        console.log('error', err)
        return
      }
      let data
      try {
        data = JSON.parse(body)
      } catch (err) {
        console.log(err)
        return
      }
      console.log(data.id, data.name)
    }
  )
}
function deleteBook(id) {
  request.delete(`${apiUrl}/books/${id}`,
    (err, response, body) => {
      if (err) {
        console.log('error', err)
        return
      }
      console.log('刪除成功')
    }
  )
}
function addBook(name) {
  request.post(`${apiUrl}/books`, { form: { name } },
    (err, response, body) => {
      if (err) {
        console.log('error', err)
        return
      }
      console.log('新增成功')
    }
  )
}
function renewBook(id, name) {
  request.patch(`${apiUrl}/books/${id}`, { form: { name } },
    (err, response, body) => {
      if (err) {
        console.log('error', err)
        return
      }
      console.log('修改成功')
    }
  )
}
