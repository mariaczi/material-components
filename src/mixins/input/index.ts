export default {
    computed: {
        id: function () {
            var self: any = this;
            return self.$options.name.toLowerCase() + '_' + self._uid;
        }
    },
    
    methods: {
        fireEvent: function (element, event) {
            if ("createEvent" in document) {
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent(event, false, true);
                element.dispatchEvent(evt);
            }
            else {
                element.fireEvent("on" + event);
            }
        }
    }
}