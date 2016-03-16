import Component from 'vue-class-component';

var template = require('./linear-preloader.html');

@Component({
    props: {
        value: {
            required: false,
            'default': null
        }
    },
    template: template
})
export default class LinearPreloader {
    private value: number;

    get computedStyle() {
        if (this.value == null) {
            return {}
        }
        else {
            return {
                width: this.value + '%'
            }
        }
    }
}