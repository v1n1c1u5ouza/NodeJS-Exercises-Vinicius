//Não funciona pois o node não deixa vc acessar o globas assim tão facil para evitar bugs
const PI = 3.14;
console.log(global.PI);

global.obj = { name: "Estou no global" };
