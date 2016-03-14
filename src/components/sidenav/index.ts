import Component from 'vue-class-component';

import mdSidenavOverlay from '../sidenav-overlay';

require('./sidenav.scss');
var template = require('./sidenav.html');

const ESC = 27;

@Component({
    props: {
        closeOnClick: {
            type: Boolean,
            required: false,
            'default': false
        }  
    },
    events: {
        'sidenav::open': function () {
            this.open();
        },
        'sidenav::close': function () {
            this.close();
        }
    },
    components: {
        mdSidenavOverlay
    },
    template: template
})
export default class SideNav {
    private active: boolean;
    private closeOnClick: boolean;

    data() {
        return {
            active: false
        }
    }

    ready() {
        var self = this;
        window.document.addEventListener('keydown', function(evt: any) {
            evt = evt || window.event;
            if (evt.keyCode == ESC) {
                self.close();
            }
        });
    }

    get computedStyle() {
        if (this.active) {
            return {
                left: 0
            }
        }
        return null;
    }

    open() {
        if (!this.active) {
            this.active = true;
        }
    }

    close() {
        if (this.active) {
            this.active = false;
        }
    }

    closeIfNecessary() {
        if (this.closeOnClick) {
            this.close();
        }
    }
}