import { input } from './app';


const mir = document.getElementsByClassName('mir')[0];
const dinersclub = document.getElementsByClassName('dinersclub')[0];
const jcb = document.getElementsByClassName('jcb')[0];
const ae = document.getElementsByClassName('ae')[0];
const visa = document.getElementsByClassName('visa')[0];
const maestro = document.getElementsByClassName('maestro')[0];
const mastercard = document.getElementsByClassName('mastercard')[0];
const discover = document.getElementsByClassName('discover')[0];
const unionpay = document.getElementsByClassName('unionpay')[0];
const carts = document.getElementsByClassName('carts')[0];

export default function checkSystem() {
    if (input.value.startsWith('2')) {
        mir.style.opacity = '100%';
        return 'mir';
    } else {
        mir.style.opacity = '30%';
    }

    if (input.value.startsWith('30') || input.value.startsWith('36') || input.value.startsWith('38')) {
        dinersclub.style.opacity = '100%';
        return 'dinersclub';
    } else {
        dinersclub.style.opacity = '30%';
    }

    if (input.value.startsWith('31') || input.value.startsWith('35')) {
        jcb.style.opacity = '100%';
        return 'jcb';
    } else {
        jcb.style.opacity = '30%';
    }

    if (input.value.startsWith('34') || input.value.startsWith('37')) {
        ae.style.opacity = '100%'; 
        return 'ae';
    } else {
        ae.style.opacity = '30%';
    }

    if (input.value.startsWith('4')) {
        visa.style.opacity = '100%';
        return 'visa';
    } else {
        visa.style.opacity = '30%';
    }

    if (input.value.startsWith('50') || input.value.startsWith('56') || input.value.startsWith('57') || input.value.startsWith('58') || input.value.startsWith('63') || input.value.startsWith('67')) {
        maestro.style.opacity = '100%';
        return 'maestro';
    } else {
        maestro.style.opacity = '30%';
    }

    if (input.value.startsWith('51') || input.value.startsWith('52') || input.value.startsWith('53') || input.value.startsWith('54') || input.value.startsWith('55')) {
        mastercard.style.opacity = '100%';
        return 'visa';
    } else {
        mastercard.style.opacity = '30%';
    }


    if (input.value.startsWith('60')) {
        discover.style.opacity = '100%';
        return 'discover';
    } else {
        discover.style.opacity = '30%';
    }

    if (input.value.startsWith('62')) {
        unionpay.style.opacity = '100%';
        return 'unionpay';
    } else {
        unionpay.style.opacity = '30%';
    }
}