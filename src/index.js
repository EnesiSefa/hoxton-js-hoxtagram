// write your code here
const state = {
  images: [],
  comments: [],
};

function render() {
    // getImages()
    pageRender();
}
render();

function pageRender() {

  let logoEl = document.createElement("img");
  logoEl.className = "logo";
  logoEl.src = "assets/hoxtagram-logo.png";

  document.body.textContent = ""

  let sectionEl = document.createElement("section");
  sectionEl.className = "image-container"

  

  
   let articleEl = document.createElement("article");
  articleEl.className = "image-card";
  let h2El = document.createElement("h2");
  h2El.className = "title";
  h2El.textContent = "Title of image goes here";
  let imgEl = document.createElement("img");
  imgEl.className = "image";
  imgEl.src = ""
  let divEl = document.createElement("div");
  divEl.className = "likes-section";
  let spanEl = document.createElement("span");
  spanEl.className = "likes";
  spanEl.textContent = "0 likes";
  let btnEl = document.createElement("button");
  btnEl.className = "like-button";
  btnEl.textContent = "♥";

  let ulEl = document.createElement("ul");
  ulEl.className = "comments";

  let liEl = document.createElement("li");
  liEl.textContent = "Get rid of these comments";
  let liEl2 = document.createElement("li");
  liEl2.textContent = "And replace them with the real ones";

  let liEl3 = document.createElement("li");
  liEl3.textContent = "From the server";



  sectionEl.append(articleEl);
  document.body.append(logoEl, sectionEl);
  ulEl.append(liEl, liEl2, liEl3)
  divEl.append(spanEl, btnEl);
  articleEl.append(h2El, imgEl, divEl, ulEl);
  
}






  fetch("http://localhost:7000/images")
    .then((resp) => resp.json())
    .then((images) => {
      state.images = images;
    });

// Here you can do whatever you want with the data // from the 



// <!-- logo 
//     <img class="logo" src="assets/hoxtagram-logo.png" />

//     <! image cards 
//     <section class="image-container">
//        This is the HTML for each card. Use the following HTML as reference to build your cards using JS 

//       <article class="image-card">
//         <h2 class="title">Title of image goes here</h2>
//         <img src="./assets/image-placeholder.jpg" class="image" />
//         <div class="likes-section">
//           <span class="likes">0 likes</span>
//           <button class="like-button">♥</button>
//         </div>
//         <ul class="comments">
//           <li>Get rid of these comments</li>
//           <li>And replace them with the real ones</li>
//           <li>From the server</li>
//         </ul>
//       </article>
//     </section> -->
