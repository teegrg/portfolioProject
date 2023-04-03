let URL = "https://api.artic.edu/api/v1/artworks"
let fill = document.querySelector("#add")
let galleryfill = document.getElementById("gallery-add")
// console.log(galleryfill);

let promise = fetch (URL)
    .then((response) => response.json())
    .then((json) => {
       getImage(json)
       getGalleryImage(json)
    })
    .catch(error => {
        console.log(error);
    })

   const getImage = (json) => {
      //console.log(json);
      // window.img = json
      const randomNum = Math.floor(Math.random() * 12);
        // console.log(randomNum);

      let image = json.data[randomNum]
      let imageId = image.image_id
      let config = json.config.iiif_url
      let title = image.artist_title
      let pic = document.createElement("img")
      pic.setAttribute("src", `${config}` + "/" + `${imageId}`+ "/full/843,/0/default.jpg")
      pic.setAttribute("alt", "Pic of the Art")
      pic.setAttribute("title", `${title}`)
    //   fill.prepend(pic)
      if (fill){
        fill.prepend(pic)
      }
    }

    const getGalleryImage = (json) => {

        let allImage = json.data
        let config = json.config.iiif_url
        allImage.forEach(element => {
            let galleryPic = document.createElement("img")
            // console.log(element);
            galleryPic.setAttribute("src", `${config}` + "/" + `${element.image_id}`+ "/full/843,/0/default.jpg")
            galleryPic.setAttribute("alt", "Pic of art")
            galleryfill.append(galleryPic)
        });
    }




