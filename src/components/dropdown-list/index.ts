import Component from 'vue-class-component';

import mbButton from '../button';
import mdDropdownItem from '../dropdown-item';

import onClickAway from '../../directives/click-away';

var template = require('./dropdown-list.html');

@Component({
    components: {
        mbButton,
        mdDropdownItem
    },
    directives: {
        onClickAway
    },
    events: {
        "dropdown::close": function () {
            this.hide();
        },
        "dropdown::open": function (e) {
            this.open(e);
        }
    },
    template: template
})
export default class DropdownList {
    private active: boolean;
    private clicked: boolean;
    private style: any;

    data() {
        return {
            active: false,
            clicked: false,
            style: {}
        }
    }

    toggle(e: any) {
        (!this.active ? this.open : this.hide)(e);
    }

    open(e: any) {
        if (!this.active) {
            this.style = this.computeStyle(e.currentTarget);
            this.active = true;
            this.clicked = true;
        }
    }

    close() {
        this.hide();
    }

    hide() {
        if (this.active && !this.clicked) {
            this.style = {};
            this.active = false;
        }
        else {
            this.clicked = false;
        }
    }

    computeStyle(element: HTMLElement) {
        var offset = this.offset(element);
        var width = element.offsetWidth || 100;
        var top = offset.top  || 0;
        var left = offset.left  || 0;

        return {
            width: width+'px',
            position: 'absolute',
            top: top+'px',
            left: left+'px',
            opacity: 1,
            display: 'block'
        };
    }

    offset(element: any) {
        var top = 0, left = 0;
        // do {
        //     top += element.offsetTop  || 0;
        //     left += element.offsetLeft || 0;
        //     element = element.offsetParent;
        // } while(element);

        return {
            top: element.offsetTop,
            left: element.offsetLeft
        };
    }
}