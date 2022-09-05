
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

const blog_section = document.getElementById('blogs');
function articles_show(articles)
{
    console.log(articles);
articles.forEach(item => {
const blog = document.createElement("div");
blog.classList.add("my-2", "p-3", "bg-white", "shedow-lg", "rounded")
blog.innerHTML = `
            <h1>${item.title}</h1>
            <small>_<strong>${item.author}</strong></small>
            <br>
            <small>${item.publishedAt}</small>
            <p class="my-3">${item.description}</p>
            `;
blog_section.appendChild(blog);
});
}

// crate blogs dynamicaly end