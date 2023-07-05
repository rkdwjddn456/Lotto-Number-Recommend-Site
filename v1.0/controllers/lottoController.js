const generateLottoNumbers = (req, res) => {
    const numbers = [];
    for (let line = 0; line < 5; line++) {
      const lineNumbers = [];
      while (lineNumbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!lineNumbers.includes(randomNumber)) {
          lineNumbers.push(randomNumber);
        }
      }
      lineNumbers.sort((a, b) => a - b); // 오름차순 정렬
      numbers.push(lineNumbers);
    }
  
    res.render('index', { numbers });
  };
  
  module.exports = {
    generateLottoNumbers,
  };
