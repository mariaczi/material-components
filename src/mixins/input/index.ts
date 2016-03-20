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
        }
    }
}