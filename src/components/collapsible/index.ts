import Component from 'vue-class-component';

import collapsibleItem from '../collapsible-item';

require('./collapsible.scss');
var template = require('./collapsible.html');

@Component({
    template: template,
    components: {
        collapsibleItem
    },
    events: {
        'collapsible::open': function (uid) {
            // propagate event to children
            this.$broadcast('collapsible::open', uid);
        },
        'collapsible::close': function (uid) {
            // propagate event to children
            this.$broadcast('collapsible::close', uid);
        }
    }
})
export default class Collapsible {
    
}