import Component from 'vue-class-component';

var template = require('./badge.html');

@Component({
    props: {
        /**
         * String of badge represents new event, string is used as label
         */
        alert: {
            type: String,
            required: false,
            "default": null
        }
    },
    template: template
})
export default class Badge {
    private alert: String;
}