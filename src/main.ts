// solution goes here
// write your code here

type State = {
  images: Image[]; // or Array<Email>
};

type Image = {
  id: number;
  title: string;
  likes: number;
  image: string;
  comments : CommentData[]
};

type CommentData = {
  id: number;
  content: string;
  imageId: number;
};

const state : State = {
  images: [],
};

function render() {
  // getImages()
  pageRender();
}
render();

function pageRender() {

  let sectionEl = document.querySelector(".image-container")
  if(sectionEl === null) return
  sectionEl.textContent = ""

  for (let image of state.images) {   
     let articleEl = document.createElement("article");
    articleEl.className = "image-card";
    let h2El = document.createElement("h2");
    h2El.className = "title";
    h2El.textContent = image.title
    let imgEl = document.createElement("img");
    imgEl.className = "image";
    imgEl.src = image.image
   
    let divEl = document.createElement("div");
    divEl.className = "likes-section";
    let spanEl = document.createElement("span");
    spanEl.className = "likes";
    spanEl.textContent = image.likes
    let btnEl = document.createElement("button");
    btnEl.className = "like-button";
    btnEl.textContent = "♥";
    btnEl.addEventListener("click", function (){
      image.likes++
      render() 
    })


    let ulEl = document.createElement("ul");
    ulEl.className = "comments";
  
    // let liEl = document.createElement("li")
    // liEl.textContent = image.comments[0].content
    for (let Comment of image.comments ){
       let liEl = document.createElement("li");
      liEl.textContent = Comment.content
      ulEl.append(liEl);
    
   }
   

    let formEl = document.createElement("form")
    formEl.className = "comment-form"

    let inputEl = document.createElement("input")
    inputEl.className = "comment-input"
    inputEl.type = "text"
    inputEl.name = "comment"
    inputEl.placeholder = "Add a comment..."
    
    let buttonEl = document.createElement("button")
    buttonEl.className = "comment-button" 
    buttonEl.type = "submit"
    buttonEl.textContent = "Post"
    btnEl.addEventListener("click",function(){})
    
    formEl.append(inputEl,buttonEl)
    divEl.append(spanEl, btnEl);
    articleEl.append(h2El, imgEl, divEl, ulEl,formEl);
    sectionEl.append(articleEl);
  }
}

function getImages() {
  fetch("http://localhost:5000/images")
    .then((resp) => resp.json())
    .then((image) => {
      state.images = image;
      render()
    });
}
 getImages()

 function deleteComment(){
  fetch('http://localhost:3333/images/6', {
    method: "DELETE",
})
    .then(resp => resp.json())
    .then(data => console.log(data))
 }

//  
// 
// for(let comment of state.images){
    
//   let updatedState = state.images.filter(Comment => Comment.comments)
// }


