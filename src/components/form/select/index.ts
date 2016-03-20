import Component from 'vue-class-component';
import mdDropdownList from '../../dropdown-list';

import inputMixin from '../../../mixins/input';
import slot from '../../../directives/slot';
import clickAway from '../../../directives/click-away';
import booleanAttribute from '../../../directives/boolean-attribute';

require('./select.scss');
var Vue: any = require('vue');
var template = require('./select.html');

@Component({
    props: {
        multiple: {
            type: Boolean,
            required: false,
            'default': false
        }
    },
    events: {
        'select::select': function(value, option) {
            this.setSelected(value, option);
            this.$broadcast('select::select', value);
        },
        'select::unselect': function(value, option) {
            this.unsetSelected(value, option);
            this.$broadcast('select::unselect', value);
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
    private $getAllChildren: any;
    private $nextTick: any;
    private $broadcast: any;
    private fireEvent: any;

    private active: boolean;
    private defaultSelect: string;
    private valueSingle: string;
    private valueMultiple: string[];
    private multiple: boolean;
    private options: any[];

    data() {
        return {
            active: false,
            valueSingle: null,
            valueMultiple: [],
            options: {}
        }
    }

    ready() {
        var options = this.$getAllChildren().filter((c: any) => {return 'SelectOption' == c.$options.name});
        for (var i = 0; i < options.length; i++) {
            var option = options[i];
            var opt: any = this.createOption(option);
            if (opt.selected) {
                this.defaultSelect = opt.value;
            }

            Vue.set(this.options, opt.value, opt);
        }
        this.$nextTick(() => {
            this.valueSingle = this.defaultSelect;
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

    get value() {
        return this.multiple ? this.valueMultiple : this.valueSingle;
    }

    set value(value: any) {
        if (this.multiple) {
            this.valueMultiple = value;
        }
        else {
            this.valueSingle = value;
        }
    }

    get valueContent() {
        return this.multiple ? this.valueContentMultiple : this.valueContentSingle;
    }

    get valueContentSingle() {
        return this.options[this.valueSingle] ? this.options[this.valueSingle].content : '';
    }

    get valueContentMultiple() {
        if (this.valueMultiple.length) {
            return this.valueMultiple.map((value) => {
                return this.options[value] ? this.options[value].content : '';
            }).join(', ');
        }
        else {
            return this.options[this.defaultSelect] ? this.options[this.defaultSelect].content : ''
        }
    }

    get labelSlot() {
        var self: any = this;
        return 'label' in self._slotContents;
    }

    get readonly() {
        return this.options[this.defaultSelect] ? this.options[this.defaultSelect].disabled : false;
    }

    get field() {
        return this.$els.field;
    }

    open(e) {
        if (!this.active) {
            this.active = true;
            this.$broadcast('dropdown::open', e);
        }
    }

    close() {
        if (this.active) {
            this.active = false;
            this.$broadcast('dropdown::close');
        }
    }

    setSelected(value) {
        (this.multiple ? this.setSelectedMultiple : this.setSelectedSingle)(value);
        this.$nextTick(() => {
            this.fireEvent(this.field, 'change');
        });
    }

    setSelectedSingle(value) {
        this.valueSingle = value;
        this.close();
    }

    setSelectedMultiple(value) {
        this.valueMultiple.push(value);
    }

    unsetSelected(value) {
        (this.multiple ? this.unsetSelectedMultiple : this.unsetSelectedSingle)(value);
        this.$nextTick(() => {
            this.fireEvent(this.field, 'change');
        });
    }

    unsetSelectedSingle() {
        this.valueSingle = null;
    }

    unsetSelectedMultiple(value) {
        this.valueMultiple.$remove(value);
    }

}