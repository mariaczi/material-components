import Component from 'vue-class-component';

require('./badge.scss');

@Component({
    props: {
        alert: {
            type: String,
            required: false,
            twoWay: false,
            "default": null
        }
    },
    template: require('./badge.html')
})
export default class Badge {
}