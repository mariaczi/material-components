import Component from 'vue-class-component';

var template = require('./toasts.html');

import toast from '../../../mixins/toast';

import mdButton from '../../../components/button';

@Component({
    template: template,
    components: {
        mdButton
    },
    mixins: [
        toast
    ]
})
export default class Toasts {
    makeAToast(msg) {
        var self: any = this;
        self.toast(msg, 4000, '', () => {
            alert('Your toast was dismissed');
        })
    }
}

