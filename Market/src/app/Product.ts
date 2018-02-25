export class Product {
  id: number;
  name: string;
  img: string;
  price: number;
  description: string;
}
export const PRODUCTS: Product[] = [
  {id: 1, name: 'IPhone X', img: 'https://www.att.com/catalog/en/skus/images/apple-iphone%20x-space%20gray-450x350.png', description: 'sample', price: 1500.99},
  {id: 2, name: 'Google Pixel 2', img: 'https://lh3.googleusercontent.com/agJkKTH35C-8JnVZ-uMHsV_lAT_EhO74BVkntF9K3ZwTWnK-M0ZJs3nosy4AQAnu6ns=w1000', description: 'sample', price: 899.99},
  {id: 3, name: 'Galaxy S8', img: 'http://images.samsung.com/is/image/samsung/p5/ca/smartphones/galaxy-s8/images/gallery/galaxy-s8-plus_gallery_left_side_black_s4.png?$ORIGIN_PNG$', description: 'sample', price: 799.99},
  {id: 4, name: 'One Plus 5', img: 'https://staticshop.o2.co.uk/product/images/bau-33174-oneplus-5sku-header-master-midnight-black-090617.png?cb=9c83d00dbe40c948b1fb9ea7dfe74b84', description: 'sample', price: 659.99},
  {id: 5, name: 'Huawei P10', img: 'https://images-na.ssl-images-amazon.com/images/I/51GLTE7PHLL.jpg', description: 'sample', price: 350.99},
  {id: 6, name: 'LG V30', img: 'https://cdn2.gsmarena.com/vv/bigpic/lg-v30-.jpg', description: 'sample', price: 650.99}
];
