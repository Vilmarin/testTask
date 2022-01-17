const REVIEWS_ON_PAGE = 10;
  // запрос с сервера
   const getResponse= async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const reviews = await response.json()

    return reviews
}

// получение массива с данными
getResponse().then ((res)=> {
    pagination(res)
})

// показывать данные на странице
const showReviews = (arrReviews) => {
     const list = document.querySelector('.userReview')

    for (const key in arrReviews ) {
        list.innerHTML +=
        `<div class="userPost">
            <div class="userPost_title">${arrReviews[key].title}</div>
            <div class="userPost_text">${arrReviews[key].body}</div>
        </div>`
        arrReviews[key]
    }
}

const pagination = (arrReviews) => {
    const paginationElement = document.querySelector('.pagination');
    const wrapper = document.querySelector('.userReview')

    onClick({indexPage: 0,arrReviews:arrReviews})

    for (let i=0; i<arrReviews.length / REVIEWS_ON_PAGE; i++) {

        const li = document.createElement('li')
        li.onclick = ()=> {
            wrapper.innerHTML = ''
            onClick({indexPage: i,arrReviews:arrReviews})
        }
        li.innerHTML = `${i+1}`
        paginationElement.append(li)
    }
}

const onClick = ({indexPage,arrReviews}) => {
    const start = indexPage * REVIEWS_ON_PAGE;
    const end = start + REVIEWS_ON_PAGE;
    const notes = arrReviews.slice(start,end);

    showReviews(notes)
}