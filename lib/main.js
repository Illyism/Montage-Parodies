import RedditAPI from "./reddit-api"
import ExtractVids from "./extract-vids"
import DisplayVids from "./display-vids"

RedditAPI.reddit("montageparodies").load()
  .then(ExtractVids)
  .then(DisplayVids)

export default {}