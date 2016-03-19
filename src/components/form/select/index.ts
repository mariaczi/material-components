import Component from 'vue-class-component';
import mdDropdownList from '../../dropdown-list';

import inputMixin from '../../../mixins/input';
import slot from '../../../directives/slot';
import clickAway from '../../../directives/click-away';
import booleanAttribute from '../../../directives/boolean-attrbute';

require('./select.scss');
var Vue: any = require('vue');
var template = require('./select.html');

@Component({
    events: {
        'select::select': function (value, option) {
            this.setSelected(value, option);
        }
    },
    components: {
        mdDropdownList
    },
    directives: {
        slot,
        clickAway,
        booleanAttribute
    },
    mixins: [
        inputMixin
    ],
    template: template
})
export default class SelectField {
    private $els: any;
    private $refs: any;
    private $children: vuejs.Vue[];
    private $nextTick: any;
    private $dispatch: any;
    private $broadcast: any;
    private fireEvent: any;

    private active: boolean;
    private value: string;
    private options: any[];

    data() {
        return {
            active: false,
            value: null,
            options: {}
        }
    }

    ready() {
        var options = this.$children.filter((c: any) => {return 'SelectOption' == c.$options.name});
        var selected = null;
        for (var i = 0; i < options.length; i++) {
            var option = options[i];
            var opt: any = this.createOption(option);
            if (opt.selected) {
                selected = opt.value;
            }

            Vue.set(this.options, opt.value, opt);
        }
        this.$nextTick(() => {
            this.value = selected;
        });
    }

    createOption(option: any) {
        var content = option._slotContents.default;
        var value = option.$data.value;
        var disabled = option.$data.disabled;
        var selected = option.$data.selected;

        return {
            content: content.textContent,
            value: value,
            disabled: disabled,
            selected: selected
        };
    }

    get valueContent() {
        return this.options[this.value] ? this.options[this.value].content : '';
    }

    get labelSlot() {
        var self: any = this;
        return 'label' in self._slotContents;
    }

    get readonly() {
        return this.options[this.value] ? this.options[this.value].disabled : false;
    }

    get field() {
        return this.$els.field;
    }

    open(e) {
        this.active = true;
        this.$broadcast('dropdown::open', e);
    }

    close() {
        this.active = false;
        this.$broadcast('dropdown::close');
    }

    setSelected(value) {
        this.value = value;
        this.$nextTick(() => {
            this.fireEvent(this.field, 'change');
        });
    }

}