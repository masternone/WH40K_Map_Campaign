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

const applyClass = (list, className) => {
  list.forEach((coordinates) => {
    const elements = document.getElementsByClassName((`hexagon--${coordinates[0]}-${coordinates[1]}`));
    console.log({elements})
    elements[0].classList.add(className);
  })
}

const topography = () => {
  const volcanos = [];
  const mountains = [];
  const hills = []
  const forests = [];
  const plains = [];
  const desserts = [];
  const oceans = [];

  applyClass(volcanos, 'volcano');
  applyClass(mountains, 'mountain');
  applyClass(hills, 'hill');
  applyClass(forests, 'forest');
  applyClass(plains, 'plain');
  applyClass(desserts, 'dessert');
  applyClass(oceans, 'ocean');
}

setTimeout(() => {
  build();
  topography();
}, 1000);
