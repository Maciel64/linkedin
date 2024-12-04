const a = () => {
  console.log("Teste");
};

const b = () => {
  a();
};

const c = () => {
  b();
};

c();
