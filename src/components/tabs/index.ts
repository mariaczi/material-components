import Component from 'vue-class-component';

var Velocity = require('velocity-animate');

@Component({
    props: {
        active: {
            required: false,
            'default': null
        }
    },
    watch: {
        active: function (value) {
            this.$broadcast('tab::select', value);
        }
    },
    events: {
        'tabs::on-select': function (tab) {
            this.select(tab);
        }
    },
    template: require('./tabs.html')
})
export default class Tabs {
    private $els: any;

    private active: any;
    private indicator: any;

    data() {
        return {
            indicator: {
                left: '0',
                right: '0'
            }
        }
    }

    select(tab) {
        this.active = tab.id;
        var target = tab.$el;
        var parent = target.parentElement;
        this.moveIndicator(
            this.indicator.left, target.offsetLeft,
            this.indicator.right, parent.offsetWidth - target.offsetLeft - target.offsetWidth);
        return true;
    }

    moveIndicator(left, newLeft, right, newRight) {
        var indicator = this.$els.indicator;
        // Update indicator
        if ((newLeft - left) >= 0) {
            Velocity(indicator, 
                {right: newRight}, 
                {duration: 300, queue: false, easing: 'easeOutQuad'}
            );
            Velocity(indicator, 
                {left: newLeft}, 
                {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90}
            );
        }
        else {
            Velocity(indicator, 
                {left: newLeft}, 
                {duration: 300, queue: false, easing: 'easeOutQuad'});
            Velocity(indicator, 
                {right: newRight}, 
                {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});
        }
    }
}