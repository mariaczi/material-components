import Component from 'vue-class-component';

var template = require('./slider.html');

@Component({
    interval: {
        type: Number,
        "default": 4000,
        validator: function (value) {
            return value > 1000
        }
    },
    template: template
})
export default class Slider {
    private activeItem: number;
    private itemsCount: number;
    private interval: number;
    private intervalHandler: number;

    data() {
        return {
            activeItem: 0,
            itemsCount: 0,
        }
    }

    ready() {
        var self: any = this;
        self.$broadcast('slider::activate', this.activeItem);

        this.interval = this.interval ? this.interval : 4000;
        this.itemsCount = self.$children.length;
        this.setupInterval();
    }

    handler() {
        var self: any = this;
        if (self.$children) {
            this.activeItem = (this.activeItem + 1) % this.itemsCount;
            self.$broadcast('slider::activate', this.activeItem);
        }
    }

    setupInterval() {
        this.intervalHandler = setInterval(this.handler, this.interval);
    }

    clearInterval() {
        if (this.intervalHandler) {
            clearInterval(this.intervalHandler);
            this.intervalHandler = null;
        }
    }

    setActive(index) {
        var self: any = this;
        self.$broadcast('slider::activate', index);
        this.activeItem = index;
        this.clearInterval();
    }

}