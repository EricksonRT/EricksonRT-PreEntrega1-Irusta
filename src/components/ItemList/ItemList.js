const datos = [
  {
    id: 1,
    nombre: 'Gorra Mujer',
    descripcion: 'Una gorra de mujer',
    stock: 34,
    img: 'https://acortar.link/HidmTE',
    categoria: 'Mujer',
  },
  {
    id: 2,
    nombre: 'Gorra Mujer 2',
    descripcion: 'Una gorra de mujer 2',
    stock: 45,
    img: 'https://acortar.link/HidmTE',
    categoria: 'Mujer',
  },
  {
    id: 3,
    nombre: 'Gorra Hombre',
    descripcion: 'Una gorra de Hombre',
    stock: 34,
    img: 'https://acortar.link/qozzkY',
    categoria: 'Hombre',
  },
  {
    id: 4,
    nombre: 'Gorra Hombre 2',
    descripcion: 'Una gorra de Hombre 2',
    stock: 44,
    img: 'https://acortar.link/qozzkY',
    categoria: 'Hombre',
  },
  {
    id: 5,
    nombre: 'Remera Infantil 1',
    descripcion: 'Una Remera Infantil de Hombre 2',
    stock: 23,
    img: 'https://acortar.link/r1qMyL',
    categoria: 'Infantil',
  },
  {
    id: 6,
    nombre: 'remera Hombre 2',
    descripcion: 'Una Remera Infantil de Hombre 2',
    stock: 1,
    img: 'https://acortar.link/r1qMyL',
    categoria: 'Infantil',
  },
  {
    id: 7,
    nombre: 'remera Infantil 3',
    descripcion: 'Una Remera Infantil  3',
    stock: 12,
    img: 'https://acortar.link/r1qMyL',
    categoria: 'Infantil',
  },
];
export const ItemList = () => {
  return new Promise((res, rej) => {
    //   Acciones
    setTimeout(() => {
      res(datos);
    }, 1000);
    //rej
  });
};
