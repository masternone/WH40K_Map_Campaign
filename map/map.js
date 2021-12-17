const build = () => {
  const size = 16;
  const container = document.getElementsByClassName('container');
  for(let i = 0; i < container.length; i++) {
    for(let j = 0; j < size; j++) {
      let element = document.createElement('div');
      element.setAttribute('class', 'row');
      for(let k = 0; k < size; k++) {
        let jText = j.toString(size);
        let kText = k.toString(size);
        let hex = document.createElement('div');
        let text = document.createTextNode(`${jText},${kText}`);
        hex.append(text);
        hex.setAttribute('class', `hexagon hexagon--${jText}-${kText}`);
        element.append(hex);
      }
      container[i].append(element);
    }
  }
};
setTimeout(() => {
  build();
}, 1000);
