export default {
    computed: {
        id: function () {
            var self: any = this;
            return self.$options.name.toLowerCase() + '_' + self._uid;
        }
    }
}