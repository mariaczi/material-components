import Component from 'vue-class-component';
import MaterialBox from '../../materialize/materialbox';
import mdLeanOverlay from '../lean-overlay';

require('./image.scss');
var template = require('./image.html');

const ESC = 27;

@Component({
    props: {
        src: {
            type: String,
            required: true
        },
        caption: {
            type: String,
            required: false,
            "default": null
        },
        height: {
            type: String,
            required: false,
            "default": null
        },
        width: {
            type: String,
            required: false,
            "default": null
        }
    },
    components: {
        mdLeanOverlay
    },
    template: template
})
export default class Image {
    private src: string;
    private active: boolean;
    private materialBox: MaterialBox;
    private originalSizes: any;

    data() {
        return {
            active: false
        }
    }

    ready() {
        var self: any = this;
        var img = self.$els.img;
        var placeholder = self.$els.placeholder;
        this.materialBox = new MaterialBox(img, placeholder);
        // Return on ESC
        window.addEventListener('keyup', function(e) {
            if (e.keyCode === ESC) {
                self.close();
            }
        });
    }

    compiled(){
        var self: any = this;
        // todo: remove hack webpack img src loading
        self.$els.img.setAttribute('src', this.src);
    }

    toggle() {
        if (this.active) {
            this.close()
        }
        else {
            this.maximialize();
        }
    }

    maximialize() {
        if (!this.active) {
            this.active = true;
            this.originalSizes = this.getSizes();
            this.materialBox.maximalize(this.originalSizes);
        }
    }

    close() {
        if (this.active) {
            this.active = false;
            this.materialBox.close(this.originalSizes);
        }
    }

     getSizes() {
        var self: any = this;
        var el: HTMLElement = self.$els.img;
        return {
            width: el.offsetWidth,
            height: el.offsetHeight,
            left: el.offsetLeft,
            top: el.offsetTop
        }
    }
}