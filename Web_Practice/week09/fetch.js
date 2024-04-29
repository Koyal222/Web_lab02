let posts=[]
const conatiner= document.getElementById("container")
function getThePosts(){
    fetch('https://jsonplaceholder.org/posts/').then(apiResult => apiResult.json
    ()).then( data =>{
        posts=data;
        posts.forEach(element =>{
            document
            container.innerHTML+=`<div class="card">
            <div>
            title: ${element.title}
            </div>
            <div>
            slug: ${element.slug}
            </div>
            <a href="https://jsonplaceholder.org/post/${element.id}">View</a>
            </div>`
        }

        );
        document.getElementById("container").innerText=posts.length
    })

}
getThePosts()
