function Column(nr) {
  if (nr === 1) {
    return `<img src='./src/img/apple.png' alt='' height='60px' width='60px'>`;
  } else if (nr === 2) {
    return `<img src='./src/img/cherry.png' alt='' height='60px' width='60px'>`;
  } else if (nr === 3) {
    return `<img src='./src/img/grapes.png' alt='' height='60px' width='60px'>`;
  } else if (nr === 4) {
    return `<img src='./src/img/lemon.png' alt='' height='60px' width='60px'>`;
  } else if (nr === 5) {
    return `<img src='./src/img/orange.png' alt='' height='60px' width='60px'>`;
  } else if (nr === 6) {
    return `<img src='./src/img/plum.png' alt='' height='60px' width='60px'>`;
  } else if (nr === 7) {
    return `<img src='./src/img/watermelon.png' alt='' height='60px' width='60px'>`;
  } else if (nr === 8) {
    return `<img src='./src/img/seven.png' alt='' height='60px' width='60px'>`;
  } else {
    return nr;
  }
}
export default Column;
