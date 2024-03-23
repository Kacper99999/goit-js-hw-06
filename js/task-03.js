const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery");
const image = document.querySelectorAll(".image");

const markup = images.map((element) => `<li><img class = "image" src = "${element.url}" alt = "${element.alt}"></img></li>`).join("");

gallery.insertAdjacentHTML("beforeend",markup);

image.forEach((element) =>{
  element.style.display = "flex";
  element.style.width = "600px";
  element.style.height = "400px";
  element.style.objectFit = "cover";
  element.style.marginBottom = "20px";
});