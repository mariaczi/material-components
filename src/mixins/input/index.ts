export default {

    computed: {
        id: function () {
            var self: any = this;
            return self.$options.name.toLowerCase() + '_' + self._uid;
        }
    },

    methods: {
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