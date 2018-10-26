///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {HostBinding} from "@angular/compiler/src/core";

@Directive({
    selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
    // @HostBinding('style.background') background: string;
    @Input() hoverColor: string;
    @Input('appBackground') defaultColor: string;
    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        this.renderer.addClass(this.element.nativeElement, 'whiteColor');
        this.renderer.setStyle(this.element.nativeElement, 'background', 'grey');
    }

    @HostListener('mouseenter')  mouseEnter(event: Event) {
        this.renderer.setStyle(this.element.nativeElement, 'background', this.hoverColor);
        // this.background = 'red';
    }

    @HostListener('mouseleave') mouseLeave(event: Event) {
        this.renderer.setStyle(this.element.nativeElement, 'background', this.defaultColor
        );
    }
}
