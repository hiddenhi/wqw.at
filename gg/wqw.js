var base='PG1ldGEgY2hhcnNldD0idXRmLTgiPgo8c3R5bGU+Cip7bWFyZ2luOjA7fQo8L3N0eWxlPgo8Ym9keT48L2JvZHk+CjxzY3JpcHQ+CmZ1bmN0aW9uIGdneigpewp2YXIgaW5kZTI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2Iik7CmluZGUyLmlkPSJmZGl2MiI7CmluZGUyLnN0eWxlLnBvc2l0aW9uPSJyZWxhdGl2ZSI7CmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5kZTIpOwp2YXIgZGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpOwpkaXYuaWQ9ImpxYnoiOwpkaXYuc3R5bGUud2lkdGg9IjI0MHB4IjsKZGl2LnN0eWxlLmhlaWdodD0iNTBweCI7CmRpdi5zdHlsZS5wb3NpdGlvbj0icmVsYXRpdmUiOwpkaXYuc3R5bGUuYm90dG9tPSIwIjsKZGl2LnN0eWxlLmxlZnQ9IjUwJSI7CmRpdi5zdHlsZS50cmFuc2Zvcm09InRyYW5zbGF0ZVgoLTUwJSkiOwpkaXYuc3R5bGUubWFyZ2luPSI1IDAgNSAwIjsKdmFyIGlkPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJqcWIyIik7CmZkaXYyLmFwcGVuZENoaWxkKGRpdik7CnZhciBzdHlsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJzdHlsZSIpOwp2YXIgdGV4dD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnI2pxYno6YmVmb3Jle2NvbnRlbnQ6IuW5v+WRiiI7aGVpZ2h0OjE1cHg7bGluZS1oZWlnaHQ6MTZweDtwb3NpdGlvbjphYnNvbHV0ZTtmb250LXdlaWdodDpib2xkO2ZvbnQtd2VpZ2h0OjkwMDtib3R0b206MDtiYWNrZ3JvdW5kOiNmZmZmZmY7Y29sb3I6IzUzYzVkZDtmb250LXNpemU6MTBweDtwYWRkaW5nOiAwO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt9I2pxYnp7d2lkdGg6MTAwJTtoZWlnaHQ6NTBweDsnKTsKc3R5bGUuYXBwZW5kQ2hpbGQodGV4dCk7CmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3R5bGUpOwp9Z2d6KCk7Cjwvc2NyaXB0Pg==';
function Base64() {
var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
     this.encode = function (input) {
     var output = "";
     var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;
      input = _utf8_encode(input);
      while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output = output +
          _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
          _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
      }
      return output;
    }
    this.decode = function (input) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      input = input.replace(/[^A-Za-z0-9\\+\\/\\=]/g, "");
      while (i < input.length) {
        enc1 = _keyStr.indexOf(input.charAt(i++));
      enc2 = _keyStr.indexOf(input.charAt(i++));
      enc3 = _keyStr.indexOf(input.charAt(i++));
      enc4 = _keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    output = _utf8_decode(output);
    return output;
  }

  var _utf8_encode = function (string) {
    string = string.replace(/\\r\\n/g, "\\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }

    }
    return utftext;
  }

  var _utf8_decode = function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    }
    return string;
  }
}


function can(url,name) { 
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
var fu=url.split("?")[0]+"?";
var r = url.split(fu)[1].match(reg);
//alert(url.split(fu)[1]);
var context = ""; 
if (r != null) 
context = r[2]; 
reg = null; 
r = null; 
return context == null || context == "" || context == "undefined" ? "" : context; 
}


var base64=new Base64();
function addwqw(){
var b=new Date().getTime();
var c="s"+b;
var d=c+"s";
var f=document.createElement("iframe");
f.id=d;
f.name=d;
f.src="about:blank";
f.style.border="medium none";
f.style.width="260px";
f.style.height="55px";
f.style.margin="0 0 0 0";
var scripts = document.getElementsByTagName('script');
script = scripts[scripts.length - 1];
script.parentNode.appendChild(f);
var text=script.innerText;
var url=text.match(/\[url\](\S*)\[\/url\]/)[1];
var image=text.match(/\[image\](\S*)\[\/image\]/)[1];
var iframe = window.frames[d];
iframe.document.open();
iframe.document.write(base64.decode(base));
iframe.document.close();
var iid=document.getElementById(d).contentWindow.document;
iid.getElementById("jqbz").style.background="url('"+image+"') no-repeat center center";
iid.getElementById("jqbz").style.backgroundSize="100% 100%";
iid.getElementById("jqbz").onclick=function(){
window.parent.location.href=url;
}
}addwqw();
