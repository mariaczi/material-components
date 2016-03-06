import Component from 'vue-class-component';

import events from '../../mixins/events';

var template = require('./collapsible-item.html');

@Component({
    props: {
        expandable: {
            type: Boolean,
            required: false,
            "default": false
        }
    },
    template: template,
    mixins: [
        events
    ],
    events: {
        'collapsible::open': function (uid) {
            this.open(uid);
        },
        'collapsible::close': function (uid) {
            this.close(uid);
        }
    }
})
export default class CollapsibleItem {
    private _uid: number;
    private active: boolean;
    private expandable: boolean;

    data() {
        return {
            active: false
        }
    }

    get computedStyle() {
        if (this.active) {
            return {
                display: 'block'
            }
        }
        return null;
    }

    openThis() {
        if (!this.active) {
            this.active = true;
        }
    }

    open(uid) {
        if (uid === null) {
            this.openThis();
        }
        else {
            if (uid == this._uid) {
                this.openThis();
            }
            else {
                if (!this.expandable) {
                    this.closeThis();
                }
            }
        }
    }

    closeThis() {
        if (this.active) {
            this.active = false;
        }
    }

    close(uid) {
        if (uid === null) {
            this.closeThis();
        }
        else {
            if (uid == this._uid) {
                this.closeThis();
            }
        }
    }

    toggle() {
        var self: any = this;
        if (self.active) {
            self.$dispatch('collapsible::close', this._uid);
        }
        else {
            self.$dispatch('collapsible::open', this._uid);
        }
    }
}