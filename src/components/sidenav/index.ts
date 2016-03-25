import Component from 'vue-class-component';

import mdSidenavOverlay from '../sidenav-overlay';

var template = require('./sidenav.html');

const ESC = 27;

@Component({
    props: {
        closeOnClick: {
            type: Boolean,
            required: false,
            'default': false
        },
        active: {
            type: Boolean,
            required: false,
            'default': false
        },
        fixed: {
            type: Boolean,
            required: false,
            'default': false
        }
    },
    events: {
        'sidenav::open': function () {
            this.open();
            return true;
        },
        'sidenav::close': function () {
            this.close();
            return true;
        }
    },
    components: {
        mdSidenavOverlay
    },
    template: template
})
export default class SideNav {
    private active: boolean;
    private fixed: boolean;
    private closeOnClick: boolean;

    ready() {
        this.active = this.fixed || this.active;
        window.document.addEventListener('keydown', (evt: any) => {
            evt = evt || window.event;
            if (evt.keyCode == ESC) {
                this.close();
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