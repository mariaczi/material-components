import Component from 'vue-class-component';

@Component({
    props: {
        events: {
            type: Array,
            required: true
        }
    },
    template: require('./event-wrapper.html')
})
export default class EventWrapper {
    private events: string[];

    ready() {
        var self: any = this;
        this.events.forEach(function (event) {
            self.$on(event, function () {
                var args = [event].concat(Array.prototype.slice.call(arguments));
                self.$broadcast.apply(self, args);
            });
        })
    }

}