import Component from 'vue-class-component';

import events from '../../mixins/events';

var template = require('./collapsible-item.html');
var Velocity = require('velocity-animate');

@Component({
    props: {
        expanded: {
            type: Boolean,
            required: false,
            'default': false
        }
    },
    template: template,
    mixins: [
        events
    ],
    events: {
        'collapsible::open': function (uid, expendable) {
            this.open(uid, expendable);
        },
        'collapsible::close': function (uid) {
            this.close(uid);
        }
    }
})
export default class CollapsibleItem {
    private _uid: number;
    private active: boolean;
    private expanded: boolean;

    ready() {
        this.active = this.expanded;
    }

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
    
    get _body() {
        var self: any = this;
        return self.$els.body;
    }

    openThis() {
        if (!this.active) {
            this.active = true;
            this.onNextTick(() => {
                Velocity(this._body, 'slideDown', this._slideConfig);
            });
        }
    }

    get _slideConfig() {
        var self = this;
        return {
            duration: 350,
            easing: "easeOutQuart",
            queue: false,
            complete: function() {
                self._body.style.height = '';
            }
        }
    }

    open(uid, expendable: boolean) {
        if (uid === null) {
            this.openThis();
        }
        else {
            if (uid == this._uid) {
                this.openThis();
            }
            else {
                if (!expendable) {
                    this.closeThis();
                }
            }
        }
    }

    closeThis() {
        if (this.active) {
            this.active = false;
            this.onNextTick(() => {
                this._body.style.display = 'block';
                Velocity(this._body, 'slideUp', this._slideConfig);
            })
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

    onNextTick(callback) {
        var self: any = this;
        self.$nextTick(callback);
    }
}