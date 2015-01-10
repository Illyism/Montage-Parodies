import jsonp from "jsonp"

class RedditAPI {
  constructor() {
    this.url = `http://www.reddit.com/r/montageparodies/.json?sort=top&t=year&show=50`;
  }
  reddit(reddit) {
    this.url = `http://www.reddit.com/r/${reddit}/.json?sort=top&t=year&show=50`;
    return this;
  }
  load(reddit) {
    return new Promise((resolve, reject) => {
      jsonp(this.url, {param: "jsonp"}, (err, data) => {
        err ? reject(err) : resolve(data.data.children)
      })
    })
  }
}


export default new RedditAPI()