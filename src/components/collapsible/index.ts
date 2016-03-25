import Component from 'vue-class-component';

@Component({
    props: {
        opened: {
            required: false,
            'default': ''
        },
        popout: {
            type: Boolean,
            required: false,
            'default': false,
            twoWay: false
        },
        expendable: {
            type: Boolean,
            required: false,
            'default': false,
            twoWay: false
        }
    },
    watch: {
        expendable: function () {
            console.log('Error: can not change expandable')
        },
        opened: {
            deep: true,
            handler: function (newValue, oldValue) {
                this.openedChanged(newValue, oldValue)
            }
        }
    },
    events: {
        'collapsible::open': function (id) {
            return this.open(id);
        },
        'collapsible::close': function (id) {
           return this.close(id);
        }
    },
    template: require('./collapsible.html')
})
export default class Collapsible {
    private $broadcast: any;

    private expendable: boolean;
    private opened: any;

    // always array
    get openedAsArray() {
        if (this.opened != null) {
            return Array.isArray(this.opened) ? this.opened : [this.opened];
        }
        return [];
    }

    open(id: string) {
        if (this.expendable) {
            this.opened.push(id);
        }
        else {
            this.opened = id;
        }
        // propagate event to children
        this.$broadcast('collapsible::open', id, this.expendable);
        return true;
    }

    close(id: string) {
        if (this.expendable) {
            this.opened.$remove(id);
        }
        else {
            this.opened = '';
        }
        // propagate event to children
        this.$broadcast('collapsible::close', id);
        return true;
    }

    openedChanged(newValue, oldValue) {
        if (this.expendable) {
            console.log(newValue);
            console.log(oldValue);
            /*
            newValue = newValue != null ? newValue : [];
            oldValue = oldValue != null ? oldValue : [];
            // close
            oldValue
                .filter((val) => newValue && newValue.indexOf(val) < 0)
                .forEach((id) => this.$broadcast('collapsible::close', id));
            // open
            newValue
                .filter(function (val) { return oldValue && oldValue.indexOf(val) < 0; })
                .forEach((id) => this.$broadcast('collapsible::open', id, this.expendable));
            */
        }
        else {
            this.$broadcast('collapsible::close', oldValue);
            this.$broadcast('collapsible::open', newValue, this.expendable);
        }
    }
}