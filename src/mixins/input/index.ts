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
        },

        $getAllChildren: function() {
            return this._getChildren(this)
        },

        _getChildren: function(component) {
            var children = [];
            children = children.concat(component.$children);
            for (var i = 0; i < component.$children.length; i++) {
                children = children.concat(this._getChildren(component.$children[i]));
            }
            return children;
        },

        watchField(cb) {
            var self = this;
            if (self.$els.field) {
                var updateFn = self.$els.field.__v_model.update;
                // create new update fn witch call passed callback
                this.$els.field.__v_model.update = function() {
                    cb.apply(self.$els.field.__v_model, arguments);
                    updateFn.apply(self.$els.field.__v_model, arguments);
                }
            }
            else {
                console.log('Error: no v-field');
            }
        }
    }
}