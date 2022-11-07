const products = [
  {
    nombre: "POWERLOCK2 - CHARCOAL",
    tag: "TRAINING GLOVES",
    precio: 25990,
    imagen: "../images/P00002306.png",
    id: "P00002306",
    categoria: "guantes",
    stock: 20
  },
  {
    nombre: "POWERLOCK2 - RED",
    tag: "TRAINING GLOVES",
    precio: 25990,
    imagen: "../images/P00002310.png",
    id: "P00002310",
    categoria: "guantes",
    stock: 20
  },
  {
    nombre: "POWERLOCK2 - BLACK",
    tag: "TRAINING GLOVES",
    precio: 25990,
    imagen: "../images/P00002284.png",
    id: "P00002284",
    categoria: "guantes",
    stock: 20
  },
  {
    nombre: "ELITE - GREY",
    tag: "TRAINING GLOVES",
    precio: 35990,
    imagen: "../images/P00002363.png",
    id: "P00002363",
    categoria: "guantes",
    stock: 20
  },
  {
    nombre: "ELITE - GOLDEN",
    tag: "TRAINING GLOVES",
    precio: 35990,
    imagen: "../images/P00002349.png",
    id: "P00002349",
    categoria: "guantes",
    stock: 20
  },
  {
    nombre: "ELITE - BLUE",
    tag: "TRAINING GLOVES",
    precio: 35990,
    imagen: "../images/P00002331.png",
    id: "P00002331",
    categoria: "guantes",
    stock: 20
  },
  {
    nombre: "ELITE - RED",
    tag: "TRAINING GLOVES",
    precio: 35990,
    imagen: "../images/P00002335.png",
    id: "P00002335",
    categoria: "guantes",
    stock: 20
  },
  {
    nombre: "PROFESSIONAL LEATHER",
    tag: "BAG GLOVES",
    precio: 35990,
    imagen: "../images/691201.png",
    id: "691201",
    categoria: "guantes",
    stock: 20
  },
  {
    nombre: "MMA KICKBOXING GLOVES",
    tag: "MMA GLOVES",
    precio: 40990,
    imagen: "../images/4402B.png",
    id: "4402B",
    categoria: "guantes",
    stock: 20
  },
  {
    nombre: "MANTIS PUNCH MITTS",
    tag: "PUNCH MITTS",
    precio: 10990,
    imagen: "../images/4416.png",
    id: "4416",
    categoria: "guantes",
    stock: 20
  },
  {
    nombre: "PRO STYLE MUAY THAI GLOVE",
    tag: "MMA GLOVES",
    precio: 42990,
    imagen: "../images/7012.png",
    id: "7012",
    categoria: "guantes",
    stock: 20
  },
  {
    nombre: "PRO STYLE GRAPPLING GLOVES",
    tag: "MMA GLOVES",
    precio: 49990,
    imagen: "../images/7778.png",
    id: "7778",
    categoria: "guantes",
    stock: 20
  },
  {
    nombre: "MMA POLYCANVAS HEAVY BAG",
    tag: "MMA HEAVY BAGS",
    precio: 18990,
    imagen: "../images/MMA4657WB.png",
    id: "MMA4657WB",
    categoria: "bolsas",
    stock: 20
  },
  {
    nombre: "NEVATEAR DOUBLE-ENDED HEAVY BAG",
    tag: "MMA HEAVY BAGS",
    precio: 19990,
    imagen: "../images/SH7707DEWB.png",
    id: "SH7707DEWB",
    categoria: "bolsas",
    stock: 20
  },
  {
    nombre: "OMNISTRIKE HEAVY BAG",
    tag: "MMA HEAVY BAGS",
    precio: 59990,
    imagen: "../images/SHMMA4788WB.png",
    id: "SHMMA4788WB",
    categoria: "bolsas",
    stock: 20
  },
  {
    nombre: "POWERCORE NEVATEAR HEAVY BAG",
    tag: "HEAVY BAGS",
    precio: 21990,
    imagen: "../images/SH5800WB.png",
    id: "SH5800WB",
    categoria: "bolsas",
    stock: 20
  },
  {
    nombre: "PLATINUM NEVATEAR HEAVY BAG",
    tag: "HEAVY BAGS",
    precio: 22990,
    imagen: "../images/SH5260WB.png",
    id: "SH5260WB",
    categoria: "bolsas",
    stock: 20
  },
  {
    nombre: "EVERHIDE SPEED BAG",
    tag: "SPEED BAGS",
    precio: 12990,
    imagen: "../images/4215.png",
    id: "4215",
    categoria: "bolsas",
    stock: 20
  },
  {
    nombre: "EVERCOOLTM HEADGEAR",
    tag: "HEADGEARS",
    precio: 8990,
    imagen: "../images/4044EV.png",
    id: "4044EV",
    categoria: "protectores",
    stock: 20
  },
  {
    nombre: "LIGHTWEIGHT SPARRING PROTECTOR",
    tag: "HEADGEARS",
    precio: 9990,
    imagen: "../images/760001.png",
    id: "760001",
    categoria: "protectores",
    stock: 20
  },
  {
    nombre: "MMA SHINGUARDS",
    tag: "PROTECTORS",
    precio: 8990,
    imagen: "../images/7951B.png",
    id: "7951B",
    categoria: "protectores",
    stock: 20
  },
  {
    nombre: "178 HAND WRAPS",
    tag: "HAND WRAPS",
    precio: 4990,
    imagen: "../images/EV4855.png",
    id: "EV4855",
    categoria: "accesorios",
    stock: 20
  },
  {
    nombre: "SINGLE MOUTH GUARD",
    tag: "MOUTHGUARDS",
    precio: 2990,
    imagen: "../images/4405.png",
    id: "4405",
    categoria: "accesorios",
    stock: 20
  },
  {
    nombre: "GLOVE BAG",
    tag: "ACCESORIES",
    precio: 5990,
    imagen: "../images/420D.png",
    id: "420D",
    categoria: "accesorios",
    stock: 20
  },
];

export const getProducts = (categoria) =>
  new Promise((res, rej) => {
    const response = categoria
      ? products.filter((p) => p.categoria === categoria)
      : products;
    setTimeout(() => {
      res(response);
    }, 1000);
  });

export const getProduct = (idProduct) =>
  new Promise((res, rej) => {
    const response = products.find((product) => product.id === idProduct);
    setTimeout(() => {
      res(response);
    }, 1000);
  });
