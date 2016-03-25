import Component from 'vue-class-component';
import mdButton from '../button';
import mdIcon from '../icon';

var Velocity = require('velocity-animate');
var template = require('./fab.html');

@Component({
    props: {
        horizontal: {
            type: Boolean,
            required: false,
            'default': false
        },
        event: {
            type: String,
            required: false,
            'default': 'hover'
        }
    },
    components: {
        mdButton,
        mdIcon
    },
    template: template
})
export default class Fab {
    private active: boolean;
    private horizontal: boolean;
    private event: string;

    data() {
        return {
            active: false
        }
    }

    ready() {
        var self: any = this;
        if (this.event == 'hover') {
            self.$els.fab.addEventListener('mouseenter', this.open);
            self.$els.fab.addEventListener('mouseleave', this.close);
        }
        else {
            self.$els.fab.addEventListener(this.event, this.toggle);
        }
    }

    toggle() {
        if (!this.active) {
            this.open();
        }
        else {
            this.close();
        }
    }

    open() {
        if (!this.active) {
            this.active = true;

            var self:any = this;
            var offsetY, offsetX;

            if (this.horizontal) {
                offsetX = 40;
            } else {
                offsetY = 40;
            }

            var items = Array.prototype.slice.call(self.$el.querySelectorAll('ul .btn-floating'));

            Velocity(items,
                {scaleY: ".4", scaleX: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},
                {duration: 0});

            var time = 0;
            items.reverse().forEach(function (item) {
                Velocity(item,
                    {opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: '0'},
                    {duration: 80, delay: time});
                time += 40;
            });
        }
    }

    close() {
        if (this.active) {
            this.active = false;

            var self: any = this;
            var offsetY, offsetX;

            if (this.horizontal) {
                offsetX = 40;
            } else {
                offsetY = 40;
            }

            var items = Array.prototype.slice.call(self.$el.querySelectorAll('ul .btn-floating'));

            Velocity(items, "stop", true);
            Velocity(items,
                { opacity: "0", scaleX: ".4", scaleY: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},
                { duration: 80 }
            );
        }
    }
}