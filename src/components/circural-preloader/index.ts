import Component from 'vue-class-component';

var template = require('./circular-preloader.html');

@Component({
    props: {
        size: {
            type: String,
            required: false,
            'default': ''
        },
        color: {
            type: String,
            required: false,
            'default': ''
        },
        flashing: {
            type: Boolean,
            required: false,
            'default': false
        },
    },
    template: template
})
export default class CircularPreloader {
    
}