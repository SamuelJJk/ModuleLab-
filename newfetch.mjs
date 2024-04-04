const body =document.querySelector('body')
const imgContainer = () =>{
    const container = document.createElement('div')
    container.setAttribute('class','imgContainer')
    body.append(container)
}


export async function getPhotos() {
    imgContainer()
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        console.log(json[0].thumbnailUrl)
        for (let x = 0; x < 5; x++ ){
            let image = document.createElement('img')
            image.setAttribute('src', json[x].thumbnailUrl)
            document.querySelector('.imgContainer').append(image)
        }
      }); 
  }