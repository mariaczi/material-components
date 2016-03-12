import Component from 'vue-class-component';

import mdCollapsibleItem from '../collapsible-item';

var template = require('./collapsible.html');

@Component({
    props: {
        popout: {
            type: Boolean,
            required: false,
            "default": false
        },
        expendable: {
            type: Boolean,
            required: false,
            "default": false
        }
    },
    template: template,
    components: {
        mdCollapsibleItem
    },
    events: {
        'collapsible::open': function (uid) {
            // propagate event to children
            this.$broadcast('collapsible::open', uid, this.expendable);
        },
        'collapsible::close': function (uid) {
           // propagate event to children
            this.$broadcast('collapsible::close', uid);
        }
    }
})
export default class Collapsible {
    private popout: boolean;

    get computedClasses() {
        if (this.popout) {
            return ["popout"];
        }
        else {
            return [];
        }
    }
}