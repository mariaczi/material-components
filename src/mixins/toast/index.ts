import {toast as toastFn} from '../../materialize';

export default {
    methods: {
        toast: function (message, displayLength, className, completeCallback) {
            return toastFn(message, displayLength, className, completeCallback);
        }
    }
}