
const o = {
  id:2,
  doIt() {
    console.log(this.id);
  }
}

setTimeout(o.doIt.bind(o), 0);

