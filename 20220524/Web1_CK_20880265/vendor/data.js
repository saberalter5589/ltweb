// /* SV KHONG chinh sua noi dung trong file nay */
// const SIZE = 10; // so image toi da hien thi trong 1 trang
// const IMAGE_COUNT = 23; // tong so file images
// const PAGE_COUNT = Math.ceil(IMAGE_COUNT / SIZE); // tong so trang

// // chi so trang bat dau tu 1
// function getImages(currentPage = 1) {
//     currentPage = parseInt(currentPage);
//     if (currentPage < 1 || currentPage > PAGE_COUNT)
//         return [];

//     var images = [];
//     var start = (currentPage - 1) * SIZE + 1;
//     var end = (currentPage * SIZE) > IMAGE_COUNT ? IMAGE_COUNT : (currentPage * SIZE);
//     for (i = start; i <= end; i++){
//         if (i < 10) {
//             images.push(`images/gallery/0${i}.jpg`);
//         } else {
//             images.push(`images/gallery/${i}.jpg`);
//         }
//     }
//     return images;
// }

const DATA = [{
        id: 1,
        title: 'Coffees @amp; Teas 1',
        slogan: 'Blended to Perfection',
        imagepath: 'img/gallery/01.jpg'
    },
    {
        id: 2,
        title: 'Coffees @amp; Teas 2',
        slogan: 'Blended to Perfection',
        imagepath: 'img/gallery/02.jpg'
    },
    {
        id: 3,
        title: 'Coffees @amp; Teas 3',
        slogan: 'Blended to Perfection',
        imagepath: 'img/gallery/03.jpg'
    },
]

function getData() {
    return DATA;
}