
// async function news_api() {
//     const url = "https://newsapi.org/v2/everything?q=Apple&from=2022-09-05&sortBy=popularity&apiKey=92cb173fa41042b19e3a9921ef94b26e";
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
const news_data=async()=>{
    const url="https://newsapi.org/v2/everything?q=Apple&from=2022-09-05&sortBy=popularity&apiKey=92cb173fa41042b19e3a9921ef94b26e";
    fetch(url).then(res=>res.json()).then(data=>articles_show(data.articles));
}
// news_api();
news_data();
// crate blogs dynamicaly start

//current date start

const date=new Date();
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
//padStart for fix the length and fill with number
// but must be string perform value
// document.getElementById('current_date').innerText=`${year}-${month.toString().padStart(2,0)}-${day.toString().padStart(2,0)}`;
document.getElementById('select_date').value=`${year}-${(month+1).toString().padStart(2,0)}-${day.toString().padStart(2,0)}`;

// document.getElementById('search').addEventListener('click',()=>{
//     console.log(document.getElementById('select_date').value)
// })

//current date end

const blog_section = document.getElementById('blogs');
function articles_show(articles)
{
    console.log(articles);
articles.forEach(item => {
const blog = document.createElement("div");
blog.classList.add("my-3", "p-2", "bg-white", "shedow-lg", "rounded","border-secondary")
blog.innerHTML = `
<div class="row">
  <div class="my-2 px-4 col-12 col-md-8">
    <h2>${item.title}</h2>
    <p class="my-2">${item.description}</p>
    <small><strong>${item.author}</strong></small>
    <br>
    <small>${item.publishedAt}</small>
  </div>
  <div class="col-12 col-md-4 m-auto">
    <img src=${item.urlToImage} class="img-fluid rounded" alt="">
  </div>
</div> 
            `;
blog_section.appendChild(blog);
});
}

// crate blogs dynamicaly end