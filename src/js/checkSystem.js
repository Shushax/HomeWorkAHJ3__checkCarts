/* eslint import/no-cycle:0 */ // --> OFF
/* eslint consistent-return:0 */ // --> OFF

export default function checkSystem(value) {
  if (value.startsWith('2')) {
    return 'mir';
  }

  if (value.startsWith('30') || value.startsWith('36') || value.startsWith('38')) {
    return 'dinersclub';
  }

  if (value.startsWith('31') || value.startsWith('35')) {
    return 'jcb';
  }

  if (value.startsWith('34') || value.startsWith('37')) {
    return 'ae';
  }

  if (value.startsWith('4')) {
    return 'visa';
  }

  if (value.startsWith('50') || value.startsWith('56') || value.startsWith('57') || value.startsWith('58') || value.startsWith('63') || value.startsWith('67')) {
    return 'maestro';
  }

  if (value.startsWith('51') || value.startsWith('52') || value.startsWith('53') || value.startsWith('54') || value.startsWith('55')) {
    return 'mastercard';
  }

  if (value.startsWith('60')) {
    return 'discover';
  }

  if (value.startsWith('62')) {
    return 'unionpay';
  }
}
