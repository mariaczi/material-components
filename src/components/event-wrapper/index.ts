import Component from 'vue-class-component';

var template = require('./event-wrapper.html');

@Component({
    props: {
        events: {
            type: Array,
            required: true
        }
    },
    template: template
})
export default class EventWrapper {
    private events: string[];

    ready() {
        var self: any = this;
        this.events.forEach(function (event) {
            self.$on(event, function () {
                var args = [event].concat(Array.prototype.slice.call(arguments));
                self.$broadcast.apply(self, args);
                // self.$broadcast(event, arguments);
            });
        })
    }

}