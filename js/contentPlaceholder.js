const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('card-excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://plus.unsplash.com/premium_photo-1711051475117-f3a4d3ff6778?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fHww" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptas.'
    profile_img.innerHTML = '<img src="http://randomuser.me/api/portraits/men/99.jpg" alt="">'
    name.innerHTML = 'John Doe'
    date.innerHTML = 'November 16, 2024'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}