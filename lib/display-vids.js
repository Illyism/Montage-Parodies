function makeIframe(id) {
  let root = document.createElement("iframe")
  root.id = id;
  root.src = `http://www.youtube.com/embed/${id}?autoplay=1&controls=0&showinfo=0&autohide=1&loop=1&modestbranding=1&rel=0&theme=dark&enablejsapi=1&iv_load_policy=3`;
  return root;
}

export default (ids) => {
  var el = document.querySelector("#vids")

  let iframes = ids.map(id => makeIframe(id))

  for (var i = 0; i < iframes.length; i++) {
    el.appendChild(iframes[i])
  };

  return ids;
}