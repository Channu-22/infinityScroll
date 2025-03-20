// console.log("Jai Jagannath");
const apiKey="pPf0b6TnHCt3ROnc3nzNo1RpP42QQl_Cqbt68X7Hq9c";
const count=15;
const apiURL=`https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

const loader=document.querySelector(".loader");
const imgContainer=document.querySelector(".imgContainer");

let image=[];
let loaded = false;
async function getPhotos(){
    try{
        let loaded = false;
        loader.style.display="block";
        const response =await fetch(apiURL);
        // console.log(response)
    
        // response.json will give an array
        image=await response.json();
        // console.log(image);
    
    
       displayPhotos(image);
    }
    catch(error){
        console.log(error.messag);
    }
}
getPhotos();

function displayPhotos(arr){
    const fragment=document.createDocumentFragment();
    arr.forEach((element) => {
        const anchor=document.createElement("a");
        const images=document.createElement("img");

        anchor.href=element.links.html;
        images.src=element.urls.regular;
        images.alt = element.urls.regular;
        images.title = element.alt_description;

        anchor.append(images);
        fragment.append(anchor);

    });
    imgContainer.append(fragment);
    loader.style.display="none";
    loaded=true;
    
}


window.addEventListener("scroll", () => {
    window.scrollY + window.innerHeight >= document.body.offsetHeight && loaded
      ? getPhotos()
      : "";
  });


