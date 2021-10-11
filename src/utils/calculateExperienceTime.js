/*
  Como calcular diferença de datas no JS:
  https://metring.com.br/diferenca-entre-datas-em-javascript
*/

const calculateExperienceTime = (startDate) => {
  const now = new Date();
  const past = new Date(startDate);
  // Subtrai uma data pela outra
  const diff = Math.abs(now.getTime() - past.getTime());
  // Divide o total pelo total de milisegundos correspondentes a 1 mês. (1000 milisegundos = 1 segundo).
  const months = Math.ceil(diff / (1000 * 60 * 60 * 24 * 30));
  
  return months;
};

export default calculateExperienceTime;
