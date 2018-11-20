export default class ApiRequest {
  xhttp = null

  constructor (method, path, body) {
    this.method = method
    this.path = path
    this.body = body
  }

  doRequest () {
    return new Promise((resolve, reject) => {
      this.xhttp = new XMLHttpRequest()
      this.xhttp.onreadystatechange = () => {
        if (this.xhttp.readyState === 4 && this.xhttp.status === 200)
          resolve()
        else if (this.xhttp.readyState === 4)
          reject()
      }
      this.xhttp.open(this.method, this.path, true)
      this.xhttp.send(this.body)
    })
  }
}