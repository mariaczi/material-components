/*!
 * Materialize v0.97.5 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */

var Vue = require('vue');
var Velocity = require('velocity-animate');

enum TooltipType {
    bottom,
    top,
    left,
    right
}

const margin = 5;

var animate = (tooltip: HTMLElement, backdrop: HTMLElement, el: HTMLElement, position) => {
    var tooltipHeight = tooltip.offsetHeight;
    var tooltipWidth = tooltip.offsetWidth;

    var elHeight = el.offsetHeight;
    var elWidth = el.offsetWidth;
    var elTop = el.offsetTop;
    var elLeft = el.offsetLeft;

    var tooltipVerticalMovement = '0px';
    var tooltipHorizontalMovement = '0px';

    var x;
    var y;
    var backdropStyle = backdrop.style;
    if (position === "top") {
        // Top Position
        x = elLeft + elWidth/2 - tooltipWidth/2;
        y = elTop - tooltipHeight - margin;
        // newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

        tooltipVerticalMovement = '-10px';
        backdropStyle.borderRadius = '14px 14px 0 0';
        backdropStyle.transformOrigin = '50% 90%';
        backdropStyle.marginTop = tooltipHeight.toString();
        backdropStyle.marginLeft = (tooltipWidth/2).toString(); // - (backdrop.width()/2)
    }
    // Left Position
    else if (position === "left") {
        x =  elLeft - tooltipWidth - margin;
        y = elTop + elHeight/2 - tooltipHeight/2;
        // newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

        tooltipHorizontalMovement = '-10px';

        backdropStyle.width = '14px';
        backdropStyle.height = '14px';
        backdropStyle.borderRadius = '14px 0 0 14px';
        backdropStyle.transformOrigin = '95% 50%';
        backdropStyle.marginTop = (tooltipHeight/2).toString();
        backdropStyle.marginLeft = tooltipWidth.toString();
    }
    // Right Position
    else if (position === "right") {
        x = elLeft + elWidth + margin;
        y = elTop + elHeight/2 - tooltipHeight/2;
        // newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

        tooltipHorizontalMovement = '+10px';

        backdropStyle.width = '14px';
        backdropStyle.height = '14px';
        backdropStyle.borderRadius = '0 14px 14px 0';
        backdropStyle.transformOrigin = '5% 50%';
        backdropStyle.marginTop = (tooltipHeight/2).toString();
        backdropStyle.marginLeft = '0px';
    }
    else {
        // Bottom Position
        x = elLeft + elWidth/2 - tooltipWidth/2;
        y = elTop + elHeight + margin;
        // newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
        tooltipVerticalMovement = '+10px';
        backdropStyle.marginLeft = (tooltipWidth/2).toString(); // - (backdrop.width()/2)

    }

    tooltip.style.top = y + 'px';
    tooltip.style.left = x + 'px';

    // Calculate Scale to fill
    /*
    var scale_factor = 8;
    scale_factor = tooltipWidth / 8;
    if (scale_factor < 8) {
        scale_factor = 8;
    }
    if (position === "right" || position === "left") {
        scale_factor = tooltipWidth / 10;
        if (scale_factor < 6)
            scale_factor = 6;
    }

    Velocity(tooltip, {marginTop: tooltipVerticalMovement, marginLeft: tooltipHorizontalMovement}, {duration: 350, queue: false});
    Velocity(tooltip, {opacity: 1}, {duration: 300, delay: 50, queue: false});

    backdrop.style.display = 'block';
    Velocity(backdrop, {opacity:1},{duration: 55, delay: 0, queue: false});
    Velocity(backdrop, {scale: scale_factor}, {duration: 300, delay: 0, queue: false, easing: 'easeInOutQuad'});
    */
};

var display = (tooltip: HTMLElement, backdrop: HTMLElement, el: HTMLElement, position: TooltipType, duration: number) => {
    tooltip.style.display = 'block';
    tooltip.style.top = '0px';
    tooltip.style.left = '0px';

    animate(tooltip, backdrop, el, position);
    tooltip.style.backgroundColor = 'black';
    tooltip.style.display = 'block';
    tooltip.style.opacity = '1';
};

export default {
    methods: {
        tooltip: function (event, message, position = TooltipType.bottom, duration = 350) {
            var target: any = event.currentTarget;
            if (!target._tooltip) {
                // <div class="material-tooltip">
                //     <span>{{message}}</span>
                //     <div class="backdrop"></div>
                // </div>;
                var tooltip = document.createElement("DIV");
                tooltip.classList.add("material-tooltip");

                var span = document.createElement("SPAN");
                span.textContent = message;
                tooltip.appendChild(span);

                var backdrop = document.createElement("DIV");
                backdrop.classList.add("backdrop");
                tooltip.appendChild(backdrop);

                target._tooltip = tooltip;
                target._backdrop = backdrop;
                document.body.appendChild(target._tooltip);

                display(target._tooltip, target._backdrop, target, position, duration);
                target.addEventListener("mouseleave", () => {
                    target._tooltip.style.display = 'none';
                });
            }
            else {
                display(target._tooltip, target._backdrop, target, position, duration);
            }
        }
    },
    destroy: function () {
        this.unlinkTooltip()
    }
}