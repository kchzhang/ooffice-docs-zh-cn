export function loadXMLDoc({ type, url, data }, callback) {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp = new XMLHttpRequest();
  } else {
    // IE6, IE5 浏览器执行代码
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      callback(xmlhttp);
    } else {
      callback(xmlhttp);
    }
  };
  xmlhttp.open(type, url, true);
  xmlhttp.send();
  //   xmlhttp.open("POST", "/try/ajax/demo_post2.php", true);
  //   xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //   xmlhttp.send("fname=Henry&lname=Ford");
}
