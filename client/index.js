require('es6-promise').polyfill()
const co = require('co')
const axios = require('axios')
const Transform = require('css3transform')
const AlloyFinger = require('alloyfinger')
const AlloyTouch = require('alloytouch')

const url = 'https://randomuser.me/api/'
const seed = 'myseed'
const results = 10
let page = 1

function genUrl(page) {
  if (!page && !isNaN(page)) {
    throw new Error('page must is a number')
  }
  return  `${url}?seed=${seed}&page=${page}&results=${results}`
}


import './index.css'


const tmp = function(user) {
  return `
    <li class="user">
      <div class="user-img">
        <img src="${user.picture.medium}"/>
      </div>
      <div class="user-info">
        <div class="user-name">
          <span class="first-name">${user.name.first}&nbsp;&nbsp;</span>
          <span class="last-name">${user.name.last}</span>
        </div>
        <span clas"user-email">
          ${user.email}
        </span>
      </div>
    </li>
  `
}



const html =
  `
    <div id="header"></div>
    <div id="wrapper">
      <div id="scroller">
        <ul id="data-list">
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

let alloyTouch = null

loadData()

function loadData() {
  co(function* () {
    const result = yield axios.get(genUrl(page)).then((res) => res.data)
    const users = result.results
    const html = users.map((user) => {
      return tmp(user)
    }).join('')

    dataList.innerHTML = html
    page++

    alloyTouch = new AlloyTouch({
      touch:'#wrapper',
      vertical: true,
      target: target,
      property: 'translateY',
      sensitivity: 1,
      factor: 1,
      max: 0,
      min: -window.innerHeight - 100,  // 此处应该减去header和footer的高度，总共100

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

  }).catch((err) => {
    console.log(err)
  })

}






function resetMin() {
  alloyTouch.min = (-1 * parseInt(getComputedStyle(target).height)) + window.innerHeight - 100
}

function loadMore() {

  co(function* () {
    const result = yield axios.get(genUrl(page)).then((res) => res.data)
    const users = result.results
    console.log(users)
    const html = users.map((user) => {
      return tmp(user)
    }).join('')

    dataList.innerHTML += html

    if (page > 5) {
      noneData = true
    } else {
      page++
    }
    loading = false
    loadmore.classList.remove('show')
    resetMin()

  }).catch((err) => {
    console.log(err)
  })
}


document.addEventListener('touchmove', (event) => {
  event.preventDefault()
}, false)



