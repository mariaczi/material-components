declare function require (id: string): any;

declare interface Route {
    url: string;
    title: string;
    component: any;
}

declare interface SliderData {
    activeItem: number;
    itemsCount: number;
    intervalHandler: any;
    interval: number;
    handler: any;
}