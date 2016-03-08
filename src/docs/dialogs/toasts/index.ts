import Component from 'vue-class-component';

var template = require('./toasts.html');

import toast from '../../../mixins/toast';
import btn from '../../../components/button';

@Component({
    template: template,
    components: {
        btn
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

