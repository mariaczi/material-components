import Component from 'vue-class-component';

var template = require('./materialize-logo.html');

@Component({
    props: ['href'],
    template: template,
})
export default class MaerializeLogo {
}