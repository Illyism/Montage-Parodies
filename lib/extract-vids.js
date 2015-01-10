export default (posts) => {
  let result =  posts
    .filter(post => post.data.domain == "youtube.com" || post.data.domain == "youtu.be")
    .filter(post => post.data && post.data.media && post.data.media.oembed)
    .map(post => post.data.media.oembed.url.substr(31))
  return result
}