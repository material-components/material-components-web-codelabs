import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';

const username = new MDCTextField(document.querySelector('.username'));
const password = new MDCTextField(document.querySelector('.password'));

new MDCRipple(document.querySelector('.cancel'));
new MDCRipple(document.querySelector('.next'));
