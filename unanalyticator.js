// based on Unburner source code by Zachary Halbrecht https://github.com/zackola/unburner
// with commits from zackola and Greg Rundlett

var r = /utm_[^=]+=[^&]+&?/gi;
var url = document.location.href;
if (url.match(r)) {
    url = url.replace(r, ''); // kill utm_ params
    url = url.replace(/\?&*$/i, ''); // kill trailing ?&'s
    location.href = url;
}
