import Component from 'vue-class-component';
import mdDropdownList from '../../dropdown-list';

import inputMixin from '../../../mixins/input';
import clickAway from '../../../directives/click-away';
import bindBoolean from '../../../directives/bind-boolean';

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
        },
        'select::unselect': function(value, option) {
            this.unsetSelected(value, option);
        }
    },
    components: {
        mdDropdownList
    },
    directives: {
        clickAway,
        bindBoolean
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
    private watchField: any;

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

    compiled() {
        this.watchField((values) => {
            this.$nextTick(() => {
                this.value = this.getSelectedValues();
                this.refreshOptions(values);
            });
        });
        var options = this.$getAllChildren().filter((c: any) => {return 'SelectOption' == c.$options.name});
        for (var i = 0; i < options.length; i++) {
            var option = options[i];
            var opt: any = this.createOption(option);
            Vue.set(this.options, opt.value, opt);
        }
    }

    ready() {
        this.value = this.getSelectedValues();
        this.refreshOptions(this.value);
    }

    createOption(option: any) {
        var content = option._slotContents ? option._slotContents.default : '';
        var value = option.$data.value;
        var disabled = option.$data.disabled;

        return {
            content: content.textContent,
            value: value,
            disabled: disabled
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
            this.valueSingle = value.length ? value[0] : value;
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

    get field() {
        return this.$els.field;
    }

    hasSlot(name = 'default') {
        return name in this._slotContents;
    }

    open(e) {
        if (!this.active) {
            this.active = true;
            this.$broadcast('dropdown-list::open', e);
        }
    }

    close() {
        if (this.active) {
            this.active = false;
            this.$broadcast('dropdown-list::close');
        }
    }

    getSelectedValues() {
        return Array.prototype.slice.call(this.$els.field.selectedOptions)
            .map((o) => o.value);
    }

    change() {
        var values = this.getSelectedValues();
        if (this.multiple) {
            this.valueMultiple = values;
        }
        else {
            this.valueSingle = values.length ? values[0] : '';
        }
    }

    setSelected(value) {
        (this.multiple ? this.setSelectedMultiple : this.setSelectedSingle)(value);
        this.$broadcast('option::select', value);
        this.$nextTick(() => {
            this.fireEvent(this.field, 'change');
        });
    }

    setSelectedSingle(value) {
        this.valueSingle = value;
        this.selectOptionSingle(value);
        this.close();
    }

    selectOptionSingle(value) {
        Array.prototype.slice.call(this.$els.field.options)
            .forEach((o) => {
                o.selected = (value == o.value);
            });
    }

    setSelectedMultiple(value) {
        this.valueMultiple.push(value);
        this.selectOptionMultiple(value);
    }

    selectOptionMultiple(value) {
        Array.prototype.slice.call(this.$els.field.options)
            .forEach((o) => {
                if (value == o.value) {
                    o.selected = true;
                }
            });
    }

    unsetSelected(value) {
        (this.multiple ? this.unsetSelectedMultiple : this.unsetSelectedSingle)(value);
        this.$broadcast('option::unselect', value);
        this.$nextTick(() => {
            this.fireEvent(this.field, 'change');
        });
    }

    unsetSelectedSingle() {
        this.valueSingle = null;
    }

    unsetSelectedMultiple(value) {
        this.valueMultiple.$remove(value);
        this.unsetOptionMultiple(value);
    }

    unsetOptionMultiple(value) {
        Array.prototype.slice.call(this.$els.field.options)
            .forEach((o) => {
                if (value == o.value) {
                    o.selected = false;
                }
            });
    }

    refreshOptions(values) {
        Array.prototype.slice.call(this.$els.field.options)
            .forEach((o) => {
                if (o.selected) {
                    this.$broadcast('option::select', o.value, values)
                }
                else {
                    this.$broadcast('option::unselect', o.value, values)
                }
            });
    }
}