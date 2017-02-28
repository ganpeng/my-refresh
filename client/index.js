const Transform = require('css3transform')
const AlloyFinger = require('alloyfinger')
const AlloyTouch = require('alloytouch')

import './index.css'

const data =
  `
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
    <li>我是最新的数据，呵呵呵呵呵</li>
  `


const html =
  `
    <div id="header"></div>
    <div id="wrapper">
      <div id="scroller">
        <ul id="data-list">
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
          <li>ksdjflsdjfdsfkldfjdkfj</li>
        </ul>
        <div id="load-more">正在加载中，请稍后...</div>
        <div id="no-more">没有更多数据</div>
      </div>
    </div>
    <div id="footer"></div>
  `


const app = document.getElementById('app')
app.innerHTML = html
const target = document.querySelector('#scroller')
const dataList = document.querySelector('#data-list')
const loadmore = document.querySelector('#load-more')
const nomore = document.querySelector('#no-more')
Transform(target, true)

let loading = false
let noneData = false
let index = 0


const allayTouch = new AlloyTouch({
  touch:'#wrapper',
  vertical: true,
  target: target,
  property: 'translateY',
  sensitivity: 1,
  factor: 1,
  max: 0,
  min: (-1 * parseInt(getComputedStyle(target).height)) + window.innerHeight - 100,  // 此处应该减去header和footer的高度，总共100

  step: 40,
  touchStart: () => { resetMin() },
  change: function(v) {
    if (!noneData) {
      if ((v < this.min + 5) && !loading ) {
        loading = true
        loadmore.classList.add('show')
        loadMore()
      }
    } else {
      nomore.classList.add('show')
      return false
    }
  },
  animationEnd: () => {
    if(noneData) {
      nomore.classList.remove('show')
    }
  }
})


function resetMin() {
  allayTouch.min = (-1 * parseInt(getComputedStyle(target).height)) + window.innerHeight - 100
}

function loadMore() {
  setTimeout(() => {
    dataList.innerHTML += data
    if (index > 5) {
      noneData = true
    } else {
      index++
    }
    loading = false
    loadmore.classList.remove('show')
    resetMin()
  }, 3000)
}


document.addEventListener('touchmove', (event) => {
  event.preventDefault()
}, false)



