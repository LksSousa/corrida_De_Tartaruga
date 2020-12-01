const gets = require('prompt-sync')();


let nTartarugas;

while (nTartarugas = gets()) {
  
  let maiorVelocidade = 0;
  let velocidade = gets();
  let velo2 = velocidade.split(" ");
  
  for (let i = 0; i < nTartarugas; ++i ){
    velo2[i] = parseInt(velo2[i]);
    if (velo2[i] > maiorVelocidade){
      maiorVelocidade = velo2[i];
    }
  }

  if (maiorVelocidade >= 20){
    console.log(3);
  } else if (maiorVelocidade >= 10){
    console.log(2);
  } else {
    console.log(1);
  }

}