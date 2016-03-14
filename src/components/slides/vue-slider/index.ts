import Component from 'vue-class-component';
    
var template = require('../slider.html');

@Component({
    template: template
})
export default class VueSlides {
    data() {
        var self = this;
        return {
            component: self
        }
    }
}