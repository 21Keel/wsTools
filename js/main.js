var count = 0
var prefix = 'game'
;(function () {
  let r = getQueryString('c')
  if (r) {
    count = parseInt(r)
    run()
  } else {
    var div = document.getElementById('buttonArea')
    div.appendChild(createDuoKaiButton('单开', 1))
    div.appendChild(createDuoKaiButton('双开', 2))
    div.appendChild(createDuoKaiButton('三开', 3))
    div.appendChild(createDuoKaiButton('四开', 4))
    div.appendChild(createDuoKaiButton('五开', 5))
    div.appendChild(createDuoKaiButton('十开', 10))

    var div2 = document.getElementById('button2Area')
    div2.innerHTML =
      "指定数量：<input id='aid' /> <button id='opa' >开</button>"

    var opBtn = document.getElementById('opa')
    opBtn.onclick = function () {
      count = document.getElementById('aid').value
      run()
    }
  }
})()

function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return decodeURI(r[2])
  return null
}

function send() {
  var data = document.getElementById('data').value
  for (let i = 0; i < window.frames.length; i++) {
    window.frames[i].postMessage(data, '*')
  }
}
function flush(idx) {
  document.getElementById('f' + idx).src = `http://${prefix}.wsmud.com/?test`
}

function createDuoKaiButton(name, value) {
  var button = document.createElement('button')
  button.type = 'button'
  button.value = value
  button.onclick = function () {
    count = this.value
    run()
  }
  button.innerHTML = name
  return button
}

function creatFloatDiv() {
  var inputArea = document.getElementById('inputArea')
  inputArea.innerHTML = `指令：<textarea id='data' ></textarea> <button id='sendBtn'>发送</button>`
  var sendBtn = document.getElementById('sendBtn')
  sendBtn.onclick = function () {
    send()
  }
  var float = document.getElementById('float')

  // todo: 改为数组

  var button = document.createElement('button')
  button.innerHTML = '停止'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('stopstate', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '修炼'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('$zdwk', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '拾取'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('$getall', '*')
    }
  }
  float.appendChild(button)

//   button = document.createElement('button')
//   button.innerHTML = '残血*'
//   button.className = 'float'
//   button.onclick = function () {
//     for (let i = 0; i < window.frames.length; i++) {
//       window.frames[i].postMessage('$usezml 残血', '*')
//     }
//   }
//   float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '叫杀'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('$killall', '*')
    }
  }
  float.appendChild(button)

//   button = document.createElement('button')
//   button.innerHTML = '关出招*'
//   button.className = 'float'
//   button.onclick = function () {
//     for (let i = 0; i < window.frames.length; i++) {
//       window.frames[i].postMessage('$usezml 关出招', '*')
//     }
//   }
//   float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '回家'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('$to 住房-练功房', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '武庙'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('$to 扬州城-武庙', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '帮派'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('$to 帮会-大院', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '襄阳'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('$to 襄阳城-广场', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '武道塔'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('jh fam 9 start', '*')
    }
  }
  float.appendChild(button)

  float.appendChild(button)
  button = document.createElement('button')
  button.innerHTML = '武当'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('$to 武当派-后山小院', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '少林'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('$to 少林派-方丈楼', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '华山'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('$to 华山派-客厅', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '峨眉'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('$to 峨眉派-清修洞', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '逍遥'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('$to 逍遥派-地下石室', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '丐帮'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('$to 丐帮-林间小屋', '*')
    }
  }
  float.appendChild(button)

  br = document.createElement('br')
  float.appendChild(br)

  button = document.createElement('button')
  button.innerHTML = 'enter'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('go enter', '*')
    }
  }
  float.appendChild(button)
  
  button = document.createElement('button')
  button.innerHTML = '↑'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('go north', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '↓'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('go south', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '←'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('go west', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '→'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('go east', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '复活'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('relive', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '烧符'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('relive locale', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '清包'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('$sellall', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '装一'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('$eqskill 1;$wait 3000;$eq 1', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '装二'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('$eqskill 2;$wait 3000;$eq 2', '*')
    }
  }
  float.appendChild(button)

  button = document.createElement('button')
  button.innerHTML = '装三'
  button.className = 'float'
  button.onclick = function () {
    for (let i = 0; i < window.frames.length; i++) {
      window.frames[i].postMessage('$eqskill 3;$wait 3000;$eq 3', '*')
    }
  }
  float.appendChild(button)
}

function run() {
  creatFloatDiv()
  var buttonArea = document.getElementById('buttonArea')
  buttonArea.className = 'disable'
  var button2Area = document.getElementById('button2Area')
  button2Area.className = 'disable'
  var iframeArea = document.getElementById('iframeArea')
  iframeArea.innerHTML = ''
  for (var i = 1; i <= count; i++) {
    var box = document.createElement('div')
    box.className = 'big_box'
    box.id = 'box' + i

    var iframe = document.createElement('iframe')
    iframe.id = 'f' + i
    let auto = getQueryString(i)
    if (auto) iframe.src = `http://${prefix}.wsmud.com/?autoLogin=${auto}`
    else iframe.src = `http://${prefix}.wsmud.com/?test`

    var rbtn = `<button  id="btn" onclick="flush(${i})">刷</button>`

    rbtn[i] = document.createElement('button')
    rbtn[i].innerHTML = '刷' + i
    rbtn[i].onclick = 'flush(' + i + ')'

    var cover = document.createElement('div')
    cover.className = 'disable'
    cover.id = 'cover' + i
    cover.innerHTML = i
    cover.onclick = function () {
      this.className = 'disable' // cover 消失
      document.getElementById('box' + this.innerHTML).className = 'big_box' // box 变大
    }

    box.appendChild(iframe)

    box.innerHTML += rbtn

    box.appendChild(cover)
    iframeArea.appendChild(box)
  }
}

function clickCover() {
  var box_array = document.getElementsByClassName(
    'small_box' + ' ' + this.innerHTML
  )
  for (var i = 0; i < box_array.length; i++) {
    box_array[i].className = 'big_box'
  }
}
