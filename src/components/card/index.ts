import Component from 'vue-class-component';

var Velocity = require('velocity-animate');
var template = require('./card.html');

@Component({
    props: {
        contentClass: {
            required: false,
            'default': null
        },
        titleInImage: {
            type: Boolean,
            required: false,
            'default': false
        },
        small: {
            type: Boolean,
            required: false,
            'default': false
        },
        medium: {
            type: Boolean,
            required: false,
            'default': false
        },
        large: {
            type: Boolean,
            required: false,
            'default': false
        }
    },
    template: template
})
export default class Card {
    private active: boolean;

    data() {
        return {
            active: false
        }
    }

    ready() {
        var self: any = this;
        var activators = self.$el.querySelectorAll('.activator');
        Array.prototype.slice.call(activators).forEach((activator) => {
            activator.addEventListener('click', this.open);
        });

        var revealClose = self.$els.revealClose;
        if (revealClose) {
            revealClose.addEventListener('click', this.close);
        }
    }

    open() {
        if (!this.active) {
            this.active = true;
            var self: any = this;
            var reveal: HTMLElement = self.$els.reveal;
            if (reveal) {
                reveal.style.display = 'block';
                Velocity(reveal, "stop", false);
                Velocity(reveal, {translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
            }
        }
    }

    close() {
        if (this.active) {
            this.active = false;
            var self: any = this;
            var reveal: HTMLElement = self.$els.reveal;
            if (reveal) {
                Velocity(reveal,
                    {translateY: 0}, {
                        duration: 225,
                        queue: false,
                        easing: 'easeInOutQuad',
                        complete: () => {
                            reveal.style.display = 'none';
                        }
                    });
            }
        }
    }

    get imageSlot() {
        var self: any = this;
        return 'image' in self._slotContents;
    }

    get titleSlot() {
        var self: any = this;
        return 'title' in self._slotContents;
    }

    get actionsSlot() {
        var self: any = this;
        return 'actions' in self._slotContents;
    }

    get revealSlot() {
        var self: any = this;
        return 'reveal' in self._slotContents;
    }
}