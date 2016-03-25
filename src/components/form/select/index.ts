import Component from 'vue-class-component';
import mdDropdownList from '../../dropdown-list';

import inputMixin from '../../../mixins/input';
import slot from '../../../directives/slot';
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
        slot,
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
    private options: any[];
    private multiple: boolean;

    data() {
        return {
            active: false,
            valueSingle: null,
            valueMultiple: [],
            options: {}
        }
    }

    compiled() {
        var options = this.$getAllChildren().filter((c: any) => {return 'SelectOption' == c.$options.name});
        for (var i = 0; i < options.length; i++) {
            var option = options[i];
            var opt: any = this.createOption(option);
            Vue.set(this.options, opt.value, opt);
        }
        this.$nextTick(() => {
            this.refreshOptions();
        })
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

    ready() {
        this.watchField((value) => {
            if (Array.isArray(value)) {
                this.valueMultiple = value;
            }
            else {
                this.valueSingle = value;
            }
        });
    }

    get value() {
        return this.multiple ? this.valueMultiple : this.valueSingle;
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

    refreshOptions() {
        Array.prototype.slice.call(this.$els.field.selectedOptions)
            .forEach((o) => {
               this.$broadcast('option::select', o.value, this.value);
            });
    }
}