// API TEST
const loadNewsCatagery = () =>{
    try {        
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res=> res.json())
        .then(data => displayNewsCatagery(data.data));
    } catch (error) {
        console.log(error);
    }
}
// display Data of news catagery

const displayNewsCatagery = catageries =>{

    const newsCatageries = document.getElementById('news-catagery');
    catageries.news_category.forEach(catagery => {
        newsCatageries.innerHTML += `
        <a class="nav-link" href="#" onclick="fetchCatageryNews('${catagery.category_id}','${catagery.category_name}')">${catagery?.category_name}</a>
        `
    });
}

// Fetch all news in the catagery

const fetchCatageryNews = (catagoryId,catagory_name) =>{
    const url=`https://openapi.programming-hero.com/api/news/category/${catagoryId}`
    try {
        fetch(url)
        .then(res => res.json())
        .then(data => displayFetchCatageryNews(data.data,catagory_name));
    } catch (error) {
        console.log(error);
    }
}

const displayFetchCatageryNews = (newses,catagory_name) =>{
    document.getElementById('alert-news-number').innerText=`${newses.length}`
    document.getElementById('alert-catagery-name').innerText=`${catagory_name}`
    const newsContainer = document.getElementById('catagery-NewsItems');
    newsContainer.innerHTML='';
    newses.forEach(news => {
        newsContainer.innerHTML +=`
        <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${news.title}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
        `
    });
}