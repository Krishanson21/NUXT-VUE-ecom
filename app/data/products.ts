export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number | null;
  discount: number | null;
  reviews: number;
  image: string;
  altText: string;
  badge: string | null;
}


export const flashSaleProducts: Product[] = [
  { id: 1, name: 'HAVIT HV-G92 Gamepad', price: 120, oldPrice: 160, discount: 40, reviews: 88, image: '/images/g1.png', altText: 'A crimson red dual-analog wired gaming controller gamepad', badge: null },
  { id: 2, name: 'AK-900 Wired Keyboard', price: 960, oldPrice: 1160, discount: 35, reviews: 75, image: '/images/g2.png', altText: 'An ergonomic mechanical keyboard with RGB backlighting', badge: null },
  { id: 3, name: 'IPS LCD Gaming Monitor', price: 370, oldPrice: 400, discount: 30, reviews: 99, image: '/images/g3.png', altText: 'A widescreen ultrawide desktop computer gaming monitor', badge: null },
  { id: 4, name: 'S-Series Comfort Chair', price: 375, oldPrice: 400, discount: 25, reviews: 99, image: '/images/g4.png', altText: 'An elegant gray tufted upholstered comfort accent chair', badge: null },
];


export const bestSellers: Product[] = [
  { id: 5, name: 'The north coat', price: 260, oldPrice: 360, discount: null, reviews: 65, image: '/images/b1.png', altText: 'A bright pink technical winter windbreaker coat jacket', badge: null },
  { id: 6, name: 'Gucci duffle bag', price: 960, oldPrice: 1160, discount: null, reviews: 65, image: '/images/b2.png', altText: 'A classic canvas luxury duffle bag with leather accents', badge: null },
  { id: 7, name: 'RGB liquid CPU Cooler', price: 160, oldPrice: 170, discount: null, reviews: 65, image: '/images/b3.png', altText: 'A liquid CPU water cooler system glowing with RGB fan lighting', badge: null },
  { id: 8, name: 'Small Bookshelf', price: 360, oldPrice: null, discount: null, reviews: 65, image: '/images/b4.png', altText: 'A minimalist four-tier natural wood standing bookshelf', badge: null }
];


export const exploreProducts: Product[] = [
  { id: 9, name: 'Breed Dry Dog Food', price: 100, oldPrice: null, discount: null, reviews: 35, image: '/images/e1.png', altText: 'A bag of premium dry kibble dog food', badge: null },
  { id: 10, name: 'CANON EOS DSLR Camera', price: 360, oldPrice: null, discount: null, reviews: 95, image: '/images/e2.png', altText: 'A black professional DSLR camera with zoom lens', badge: null },
  { id: 11, name: 'ASUS ROG Gaming Laptop', price: 700, oldPrice: null, discount: null, reviews: 325, image: '/images/e3.png', altText: 'A open black high-end gaming laptop computer display', badge: null },
  { id: 12, name: 'Curology Product Set', price: 500, oldPrice: null, discount: null, reviews: 145, image: '/images/e4.png', altText: 'A skin care collection box set including cleansers', badge: null },
  { id: 13, name: 'Kids Electric Car', price: 960, oldPrice: null, discount: null, reviews: 65, image: '/images/e5.png', altText: 'A crimson red motorized miniature childs toy sports car', badge: 'New' },
  { id: 14, name: 'Jr. Zoom Soccer Cleats', price: 1160, oldPrice: null, discount: null, reviews: 35, image: '/images/e6.png', altText: 'A pair of neon yellow athletic soccer cleats spikes', badge: null },
  { id: 15, name: 'GP11 Gaming Controller', price: 660, oldPrice: null, discount: null, reviews: 55, image: '/images/e7.png', altText: 'An ergonomic charcoal wireless console gaming controller pad', badge: 'New' },
  { id: 16, name: 'Quilted Satin Jacket', price: 660, oldPrice: null, discount: null, reviews: 55, image: '/images/e8.png', altText: 'A heavy luxury dark green satin quilted bomber jacket', badge: null }
];