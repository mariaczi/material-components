import Component from 'vue-class-component';
import mdDropdownList from '../../dropdown-list';
import mdOption from '../../form/option';

import inputMixin from '../../../mixins/input';
import clickAway from '../../../directives/click-away';
import bindBoolean from '../../../directives/bind-boolean';

var Vue: any = require('vue');

@Component({
    props: {
        value: {
            required: false,
            'default': null
        },
        options: {
            type: Array,
            required: true,
        },
    },
    events: {
        'select::select': function(value) {
            if (Array.isArray(this.value)) {
                this.value.push(value);
                this.$nextTick(this.refreshDropdownOptions);
            }
            else {
                this.value = value;
                this.close();
            }
            this.$broadcast('option::select', value);
            return true;

        },
        'select::unselect': function(value) {
            if (Array.isArray(this.value)) {
                this.value.$remove(value);
                this.$nextTick(this.refreshDropdownOptions);
            }
            else {
                this.value = value;
            }
            this.$broadcast('option::unselect', value);
            return true;
        }
    },
    watch: {
        value: function () {
            console.log('value changed');
            this.$nextTick(this.refreshDropdownOptions);
        }
    },
    components: {
        mdDropdownList,
        mdOption
    },
    directives: {
        clickAway,
        bindBoolean
    },
    mixins: [
        inputMixin
    ],
    template: require('./select.html')
})
export default class SelectField {
    private $els: any;
    private $getAllChildren: any;
    private $broadcast: any;
    private _slotContents: any;

    private active: boolean;
    public options: any;
    private defaultSelect: string;
    private value: any;

    data() {
        return {
            active: false,
        }
    }

    // compiled() {
    //     //var options = this.$getAllChildren().filter((c: any) => {return 'SelectOption' == c.$options.name});
    //     var options = this.options;
    //     for (var i = 0; i < options.length; i++) {
    //         console.log('option created');
    //         var option = options[i];
    //         var opt: any = this.createOption(option);
    //         Vue.set(this.options, opt.value, opt);
    //     }
    // }

    ready() {
       this.refreshDropdownOptions()
    }

    // createOption(option: any) {
    //     var content = option._slotContents ? option._slotContents.default : '';
    //     var value = option.$data.value;
    //     var disabled = option.$data.disabled;
    //
    //     return {
    //         content: content.textContent,
    //         value: value,
    //         disabled: disabled
    //     };
    // }

    get multiple() {
        return Array.isArray(this.value);
    }

    get valueContent() {
        console.log('get content');
        return Array.isArray(this.value) ? this.valueContentMultiple : this.valueContentSingle;
    }

    get valueContentSingle() {
        console.log('get single');
        return this.options[this.value] ? this.options[this.value].content : '';
    }

    get valueContentMultiple() {
        console.log('get multiple');
        if (this.value.length) {
            return this.value.map((value) => {
                return this.options[value] ? this.options[value].content : '';
            }).join(', ');
        }
        else {
            return this.options[this.defaultSelect] ? this.options[this.defaultSelect].content : ''
        }
    }

    get optionsSource() {
        return this.options;
    }

    get field() {
        return this.$els.field;
    }

    hasSlot(name = 'default') {
        return name in this._slotContents;
    }

    refreshDropdownOptions() {
        console.log('refreshed');
        var options = Array.prototype.slice.call(this.field.options);
        options.forEach((o: HTMLOptionElement) => {
            if (o.selected) {
                this.$broadcast('option::select', o.value)
            }
            else if (this.multiple) {
                this.$broadcast('option::unselect', o.value)
            }
        });
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
}