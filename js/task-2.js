const calculateEngravingPrice = function(message, pricePerWord) {
  const result = message.split(' ').length * pricePerWord;
  console.log(result);
};

  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus', 10); // 80

  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus', 20); // 160

  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40); // 240

  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20); // 120