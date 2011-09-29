// based on Unburner source code by Zachary Halbrecht https://github.com/zackola/unburner
// with commits from zackola and Greg Rundlett

var r = /utm_[^=]+=[^&]+/gi;
var url = document.location.href;
if (url.match(r)) {
  location.href = url.replace(r, '');
}
