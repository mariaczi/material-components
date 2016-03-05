import Component from 'vue-class-component';
import btn from '../button';
import dropdownItem from '../dropdown-item';
import onClickAway from '../../directives/click-away';

var template = require('./dropdown-list.html');

@Component({
    components: {
        btn,
        dropdownItem
    },
    directives: {
        onClickAway
    },
    events: {
        "dropdown::close": function () {
            this.hide();
        },
        "dropdown::show": function (e) {
            this.show(e);
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
        (!this.active ? this.show : this.hide)(e);
    }

    show(e: any) {
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
        var width = element.offsetWidth || 100;
        var top = element.offsetTop  || 0;
        var left = element.offsetLeft  || 0;

        return {
            width: width+'px',
            position: 'absolute',
            top: top+'px',
            left: left+'px',
            opacity: 1,
            display: 'block'
        };
    }
}