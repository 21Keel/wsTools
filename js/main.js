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
      "<input type='number' id='aid' min='0' style='width:80px;border:none;border-bottom:1px solid #ccc;outline:none;' /> <button id='opa' >开</button>"

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

  // todo: 改为对象
  btnObj = {
    停止: 'stopstate',
    修炼: '$zdwk',
    拾取: '$getall',
    叫杀: '$killall',
    回家: '$to 住房-练功房',
    武庙: '$to 扬州城-武庙',
    帮派: '$to 帮会-大院',
    襄阳: '$to 襄阳城-广场',
    推塔: 'jh fam 9 start',
    武当: '$to 武当派-后山小院',
    少林: '$to 少林派-方丈楼',
    华山: '$to 华山派-客厅',
    峨眉: '$to 峨眉派-清修洞',
    逍遥: '$to 逍遥派-地下石室',
    丐帮: '$to 丐帮-林间小屋',
  }
  btnObj2 = {
    进入: 'go enter',
    往东: 'go east',
    往南: 'go south',
    往西: 'go west',
    往北: 'go north',
    武庙复活: 'relive',
    烧符复活: 'relive locale',
    清包: '$sellall',
    装一: '',
    装二: '',
    装三: '',
    '一键日常（小号）': '$daily',
  }

  for (let key in btnObj) {
    var button = document.createElement('button')
    button.innerHTML = key
    button.className = 'float'
    button.onclick = function () {
      for (let i = 0; i < window.frames.length; i++) {
        window.frames[i].postMessage(btnObj[key], '*')
      }
    }
    float.appendChild(button)
  }

  // 换行
  br = document.createElement('br')
  float.appendChild(br)

  for (let key in btnObj2) {
    var button = document.createElement('button')
    button.innerHTML = key
    button.className = 'float'
    button.onclick = function () {
      for (let i = 0; i < window.frames.length; i++) {
        window.frames[i].postMessage(btnObj2[key], '*')
      }
    }
    float.appendChild(button)
  }
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
