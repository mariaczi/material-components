import Component from 'vue-class-component';

var template = require('./badge.html');

@Component({
    props: {
        /**
         * String of badge represents new event, string is used as label
         */
        "new": {
            type: String,
            required: false,
            "default": "now"
        }
    },
    template: template
})
class Badge {
    get classes() {
        return this.new ? ['new'] : [''];
    }
}

export default Badge