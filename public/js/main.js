const output = document.querySelector('#output')
const button = document.querySelector('#get-posts-btn')
const form = document.querySelector('#post-form-data')


//showPosts
async function showPosts(){
    try {
        const res = await fetch('http://localhost:5000/api/posts')
        const posts = await res.json()
        if (!res.ok) {
            throw new Error('Failed to fetch the posts')
        }
        output.innerHTML = "" 
        posts.forEach((post) => {
            const postEl = document.createElement('div')
            postEl.textContent = post.title
            output.appendChild(postEl)
        });
    } catch (error) {
        console.log(error);        
    }
}

async function addPost(e){
    e.preventDefault();
    const formData = new FormData(this)
    const title = formData.get('title')
    try {
        const res = await fetch('http://localhost:5000/api/posts',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({title})
        })
        
        if (!res.ok) {
            throw new Error('Failed to add the post data')
        }
        // const newData = await res.json()
        // const postEl = document.createElement('div')
        // postEl.textContent = newData.title
        // output.appendChild(postEl)
        showPosts()

    } catch (error) {
        
    }
}

button.addEventListener('click',showPosts)
form.addEventListener('submit',addPost)
