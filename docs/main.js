"use strict";
(self["webpackChunkshop"] = self["webpackChunkshop"] || []).push([["main"],{

/***/ 6885:
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountComponent": () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/auth.service */ 1544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _orders_shared_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders/shared/order.service */ 6559);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/page-title/page-title.component */ 9526);






function AccountComponent_div_7_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "(Admin)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AccountComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AccountComponent_div_7_span_5_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.user.firstName, " ", ctx_r0.user.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.user.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.user.roles.admin);
} }
const _c0 = function () { return { title: "Account", link: "/account" }; };
const _c1 = function (a0) { return { title: a0 }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
class AccountComponent {
    constructor(authService, router, orderService) {
        this.authService = authService;
        this.router = router;
        this.orderService = orderService;
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_orders_shared_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService)); };
AccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], decls: 17, vars: 9, consts: [[3, "title", "children"], [1, "container", "padding-bottom-3x", "mb-2"], [1, "row"], [1, "col-lg-4"], [1, "user-info-wrapper"], [1, "user-cover", 2, "background-image", "url(img/user-cover-img.jpg)"], [1, "user-info"], ["class", "user-data", 4, "ngIf"], [1, "list-group"], ["routerLinkActive", "active", "routerLink", "/account/profile", 1, "list-group-item"], [1, "icon-head"], ["routerLinkActive", "active", "routerLink", "/account/orders", "href", "", 1, "list-group-item", "with-badge"], [1, "icon-bag"], [1, "col-lg-8"], [1, "user-data"], [4, "ngIf"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-page-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "aside", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AccountComponent_div_7_Template, 6, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nav", 8)(9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx.router.url === "/account/profile" ? "My Profile" : "My Orders")("children", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, ctx.router.url === "/account/profile" ? "My Profile" : "My Orders")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__.PageTitleComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive], styles: [".user-info-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin-bottom: -1px;\n  padding-top: 90px;\n  padding-bottom: 30px;\n  border: 1px solid #e1e7ec;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  overflow: hidden;\n}\n.user-info-wrapper[_ngcontent-%COMP%]   .user-cover[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 120px;\n  background-position: center;\n  background-color: #f5f5f5;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.user-info-wrapper[_ngcontent-%COMP%]   .user-cover[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]   .tooltip-inner[_ngcontent-%COMP%] {\n  width: 230px;\n  max-width: 100%;\n  padding: 10px 15px;\n}\n.user-info-wrapper[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 18px;\n  right: 18px;\n  height: 26px;\n  padding: 0 12px;\n  border-radius: 13px;\n  background-color: #ffffff;\n  color: #606975;\n  font-size: 12px;\n  line-height: 26px;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.18);\n  cursor: pointer;\n}\n.user-info-wrapper[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 3px;\n  font-size: 1.2em;\n  vertical-align: middle;\n}\n.user-info-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: table;\n  position: relative;\n  width: 100%;\n  padding: 0 18px;\n  z-index: 5;\n}\n.user-info-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%], .user-info-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: top;\n}\n.user-info-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 115px;\n}\n.user-info-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  border: 5px solid #ffffff;\n  border-radius: 50%;\n}\n.user-info-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   .edit-avatar[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: -2px;\n  right: 2px;\n  width: 36px;\n  height: 36px;\n  transition: opacity 0.3s;\n  border-radius: 50%;\n  background-color: #ffffff;\n  color: #606975;\n  line-height: 34px;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  opacity: 0;\n  text-align: center;\n  text-decoration: none;\n}\n.user-info-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   .edit-avatar[_ngcontent-%COMP%]::before {\n  font-family: feather;\n  font-size: 17px;\n  content: \"\\e058\";\n}\n.user-info-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]:hover   .edit-avatar[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.user-info-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%] {\n  padding-top: 48px;\n  padding-left: 12px;\n}\n.user-info-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n.user-info-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #9da9b9;\n  font-size: 13px;\n}\n.user-info-wrapper[_ngcontent-%COMP%]    + .list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:first-child {\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXHNjc3NcXGhlbHBlcnNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBRUUsaUJBQUE7RUFDQSxvQkFBQTtFQUVGLHlCQUFBO0VBQ0EsMkJDaUdtQjtFRGhHbkIsNEJDZ0dtQjtFRC9GbkIsZ0JBQUE7QUFKRjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQytNc0I7RUQ3TXBCLDJCQUFBO0VBQ0EseUJDVG1CO0VEVW5CLDRCQUFBO0VBQ0Esc0JBQUE7QUFKTjtBQU1JO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUpOO0FBT0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkMxQnFCO0VEMkJyQixjQy9CcUI7RURnQ3JCLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtBQUxKO0FBTUk7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUpOO0FBT0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFMSjtBQU1JOztFQUVFLG1CQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQU1JO0VBQ0Usa0JBQUE7RUFDQSxZQ2lLb0I7QURySzFCO0FBS007RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQUtNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQ3VEZTtFRHREZixZQ3NEZTtFRHJEZix3QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDcEVpQjtFRHFFakIsY0N6RWlCO0VEMEVqQixpQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFFRSxrQkFBQTtFQUNBLHFCQUFBO0FBSlY7QUFNUTtFQUVJLG9CQUFBO0VBQ0EsZUFBQTtFQUVGLGdCQUFBO0FBTlY7QUFTTTtFQUF1QixVQUFBO0FBTjdCO0FBUUk7RUFFSSxpQkFBQTtFQUNBLGtCQUFBO0FBUFI7QUFTTTtFQUFLLGtCQUFBO0FBTlg7QUFPTTtFQUNFLGNBQUE7RUFDQSxjQ25HaUI7RURvR2pCLGVDbkRpQjtBRDhDekI7QUFTRTtFQUErQyxnQkFBQTtBQU5qRCIsImZpbGUiOiJhY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNjc3MvaGVscGVycy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICd+c2Nzcy9oZWxwZXJzL21peGlucyc7XHJcblxyXG4udXNlci1pbmZvLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gIHBhZGRpbmc6IHtcclxuICAgIHRvcDogKCRjb3Zlci1oZWlnaHQgLSAzMCk7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGc7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWxnO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLnVzZXItY292ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAkY292ZXItaGVpZ2h0O1xyXG4gICAgYmFja2dyb3VuZDoge1xyXG4gICAgICBwb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogJGdyYXktbGlnaHRlcjtcclxuICAgICAgcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIHNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgLnRvb2x0aXAgLnRvb2x0aXAtaW5uZXIge1xyXG4gICAgICB3aWR0aDogMjMwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW5mby1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMThweDtcclxuICAgIHJpZ2h0OiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICAgIGNvbG9yOiAkZ3JheS1kYXJrO1xyXG4gICAgZm9udC1zaXplOiBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlIC8gMS4zMykpOyAvL34xMnB4XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjE4KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgID4gaSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC51c2VyLWluZm8ge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgMThweDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICAudXNlci1hdmF0YXIsXHJcbiAgICAudXNlci1kYXRhIHtcclxuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIH1cclxuICAgIC51c2VyLWF2YXRhciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6ICR1c2VyLWF2YS1zaXplO1xyXG4gICAgICA+IGltZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgJHdoaXRlLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG4gICAgICAuZWRpdC1hdmF0YXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC0ycHg7XHJcbiAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgICB3aWR0aDogJGJ0bi1zbS1oZWlnaHQ7XHJcbiAgICAgICAgaGVpZ2h0OiAkYnRuLXNtLWhlaWdodDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkZ3JheS1kYXJrO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkYnRuLXNtLWhlaWdodCAtIDI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgIGZhbWlseTogZmVhdGhlcjtcclxuICAgICAgICAgICAgc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnRlbnQ6ICdcXGUwNTgnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyIC5lZGl0LWF2YXRhciB7IG9wYWNpdHk6IDE7IH1cclxuICAgIH1cclxuICAgIC51c2VyLWRhdGEge1xyXG4gICAgICBwYWRkaW5nOiB7XHJcbiAgICAgICAgdG9wOiA0OHB4O1xyXG4gICAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgaDQgeyBtYXJnaW4tYm90dG9tOiAycHg7IH1cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICRncmF5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14cztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmICsgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7IGJvcmRlci1yYWRpdXM6IDA7IH1cclxufVxyXG4iLCIvL1xyXG4vLyBWYXJpYWJsZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vPT0gQ29sb3JzXHJcbi8vXHJcbi8vIyMgR3JheSBhbmQgYnJhbmQgY29sb3JzIGZvciB1c2UgYWNyb3NzIFRoZW1lLlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gR3JheXNjYWxlXHJcbiRncmF5LWRhcmtlcjogICAgICAgICAgICAjMzc0MjUwO1xyXG4kZ3JheS1kYXJrOiAgICAgICAgICAgIFx0ICM2MDY5NzU7XHJcbiRncmF5OiAgICAgICAgICAgICAgICAgICAjOWRhOWI5O1xyXG4kZ3JheS1saWdodDogICAgICAgICAgICAgI2UxZTdlYztcclxuJGdyYXktbGlnaHRlcjogICAgICAgICAgICNmNWY1ZjU7XHJcbiR3aGl0ZS1jb2xvcjogICAgICAgICAgICAjZmZmZmZmO1xyXG4kYmxhY2stY29sb3I6ICAgICAgICAgICAgIzAwMDAwMDtcclxuXHJcbi8vIEJyYW5kIGNvbG9yc1xyXG4kYnJhbmQtcHJpbWFyeTogICAgICAgICAjMGRhOWVmO1xyXG4kYnJhbmQtaW5mbzpcdFx0ICAgICAgICAjNTBjNmU5O1xyXG4kYnJhbmQtc3VjY2VzczogICAgICAgICAjNDNkOWEzO1xyXG4kYnJhbmQtd2FybmluZzogICAgICAgICAjZmZiNzRmO1xyXG4kYnJhbmQtZGFuZ2VyOiAgICAgICAgICAjZmY1MjUyO1xyXG5cclxuLy8gQm9keVxyXG4kYm9keS1iZzogXHRcdFx0XHRcdFx0XHQkd2hpdGUtY29sb3I7XHJcbiRib2R5LWNvbG9yOiBcdFx0XHRcdFx0XHQkZ3JheS1kYXJrO1xyXG5cclxuLy8gSW5saW5lIGxpbmtzXHJcbiRsaW5rLWNvbG9yOiBcdFx0XHRcdFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuJGxpbmstaG92ZXItY29sb3I6IFx0XHRcdCRicmFuZC1wcmltYXJ5O1xyXG5cclxuLy8gSGVkaW5nc1xyXG4kaGVhZGluZ3MtY29sb3I6XHQgXHRcdFx0JGdyYXktZGFya2VyO1xyXG5cclxuLy8gQmxvY2txdW90ZVxyXG4kcXVvdGUtdGV4dC1jb2xvcjogICAgICAkYm9keS1jb2xvcjtcclxuJHF1b3RlLW1hcmstY29sb3I6ICAgICAgJGdyYXk7XHJcbiRxdW90ZS1hdXRob3ItY29sb3I6ICAgICRncmF5O1xyXG5cclxuLy8gQm9yZGVyc1xyXG4kYm9yZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS1saWdodDtcclxuJGJvcmRlci1saWdodC1jb2xvcjogICAgcmdiYSgkd2hpdGUtY29sb3IsIC4xMik7XHJcblxyXG4vLyBIaWdobGlnaHQgY29sb3JcclxuJGhpZ2hsaWdodC1jb2xvcjogICAgICAgI2ZmZjhiMDtcclxuXHJcblxyXG4vLz09IFR5cG9ncmFwaHlcclxuLy9cclxuLy8jIyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGZvbnQtZmFtaWx5LWJhc2U6IFx0XHRcdCAgJ01hdmVuIFBybycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1oZWFkaW5nczogXHQgIGluaGVyaXQ7XHJcblxyXG4vLyBGb250IHNpemVzXHJcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgMTZweDtcclxuJGZvbnQtc2l6ZS1sZWFkOiAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4xMjUpKTsgLy8gfjE4cHhcclxuJGZvbnQtc2l6ZS1zbTogXHRcdFx0XHQgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC44NzUpKTsgLy8gfjE0cHhcclxuJGZvbnQtc2l6ZS14czogICAgICAgICBcdFx0Zmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC44MTI1KSk7IC8vIH4xM3B4XHJcblxyXG4vLyBIZWFkaW5nc1xyXG4kZm9udC1zaXplLWgxOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAyLjI1KSk7IC8vIH4zNnB4XHJcbiRmb250LXNpemUtaDI6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuODc1KSk7IC8vIH4zMHB4XHJcbiRmb250LXNpemUtaDM6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuNSkpOyAvLyB+MjRweFxyXG4kZm9udC1zaXplLWg0OiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSk7IC8vIH4yMHB4XHJcbiRmb250LXNpemUtaDU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZWFkOyAvLyB+MThweFxyXG4kZm9udC1zaXplLWg2OiAgICAgICAgICAgICRmb250LXNpemUtYmFzZTsgLy8gfjE2cHhcclxuXHJcbi8vIERpc3BsYXkgaGVhZGluZ3NcclxuJGRpc3BsYXktMTogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogNC41KSk7IC8vIH43MnB4XHJcbiRkaXNwbGF5LTI6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDMuNzUpKTsgLy8gfjYwcHhcclxuJGRpc3BsYXktMzogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMy4xMjUpKTsgLy8gfjUwcHhcclxuJGRpc3BsYXktNDogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMi41KSk7IC8vIH40MHB4XHJcblxyXG4vLyBGb250IHN0eWxlc1xyXG4kZm9udC1zdHlsZS1iYXNlOiAgICAgICAgIG5vcm1hbDtcclxuJGZvbnQtc3R5bGUtaGVhZGluZ3M6ICAgICBub3JtYWw7XHJcblxyXG4vLyBGb250IHdlaWdodHNcclxuJGZvbnQtd2VpZ2h0LWJhc2U6ICAgICAgICAgbm9ybWFsO1xyXG4kZm9udC13ZWlnaHQtaGVhZGluZ3M6ICAgICA1MDA7XHJcblxyXG4vLyBUZXh0IHRyYW5zZm9ybXNcclxuJHRleHQtdHJhbnNmb3JtLWJhc2U6ICAgICBub25lO1xyXG4kdGV4dC10cmFuc2Zvcm0taGVhZGluZ3M6IG5vbmU7XHJcblxyXG4vLyBMaW5lIGhlaWdodHNcclxuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgIDEuNTtcclxuJGxpbmUtaGVpZ2h0LWgxOiAgICAgICAgIDEuMTU7XHJcbiRsaW5lLWhlaWdodC1oMjogICAgICAgICAxLjI7XHJcbiRsaW5lLWhlaWdodC1oMzogICAgICAgICAxLjI1O1xyXG4kbGluZS1oZWlnaHQtaDQ6ICAgICAgICAgMS4zO1xyXG4kbGluZS1oZWlnaHQtaDU6ICAgICAgICAgMS4zNTtcclxuJGxpbmUtaGVpZ2h0LWg2OiAgICAgICAgIDEuNDtcclxuJGxpbmUtaGVpZ2h0LWRpc3BsYXk6ICAgIDEuMTU7XHJcblxyXG5cclxuLy89PSBHcmlkIFZlcnRpY2FsIFN0ZXBcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGdyaWQtdmVydGljYWwtc3RlcDogICAgIDI0cHg7XHJcblxyXG5cclxuLy89PSBCb3JkZXIgUmFkaXVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRib3JkZXItcmFkaXVzLWxnOiBcdFx0N3B4O1xyXG4kYm9yZGVyLXJhZGl1cy1iYXNlOiBcdDVweDtcclxuJGJvcmRlci1yYWRpdXMtc206IFx0XHQzcHg7XHJcblxyXG5cclxuLy89PSBGb3Jtc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kaW5wdXQtaGVpZ2h0LWxnOlx0XHRcdFx0XHRcdFx0NTRweDtcclxuJGlucHV0LWhlaWdodDpcdFx0XHRcdFx0XHRcdFx0NDRweDtcclxuJGlucHV0LWhlaWdodC1zbTpcdFx0XHRcdFx0XHRcdDM2cHg7XHJcbiRpbnB1dC1jb2xvci1wbGFjZWhvbGRlcjogICAgICRncmF5O1xyXG5cclxuXHJcbi8vPT0gQnV0dG9uc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kYnRuLWZvbnQtc2l6ZTogXHRcdFx0XHRcdFx0XHQkZm9udC1zaXplLXNtO1xyXG4kYnRuLXNtLWZvbnQtc2l6ZTogXHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS14cztcclxuJGJ0bi10ZXh0LXRyYW5zZm9ybTogICAgICAgICAgdXBwZXJjYXNlO1xyXG4kYnRuLWZvbnQtd2VpZ2h0OiBcdFx0XHRcdFx0XHQ1MDA7XHJcbiRidG4tdGV4dC1jb2xvcjogICAgICAgICAgICAgICRncmF5LWRhcms7XHJcblxyXG4kYnRuLWhlaWdodDogXHRcdFx0XHRcdFx0XHRcdFx0NDRweDtcclxuJGJ0bi1sZy1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0NTRweDtcclxuJGJ0bi1zbS1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0MzZweDtcclxuXHJcbiRidG4tbWFyZ2luOiAgICAgICAgICAgICAgICAgIGZsb29yKCRncmlkLXZlcnRpY2FsLXN0ZXAgLyAyKTsgLy9+MTJweFxyXG4kc29jaWFsLWJ0bi1zaXplOiBcdFx0XHRcdFx0XHQkZm9udC1zaXplLXhzO1xyXG5cclxuXHJcbi8vPT0gVGFibGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiR0YWJsZS1ib3JkZXItY29sb3I6IFx0XHRcdFx0XHQkYm9yZGVyLWNvbG9yO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nOlx0XHRcdFx0XHQxNXB4O1xyXG4kdGFibGUtYmctYWNjZW50OiBcdFx0XHRcdFx0XHQkZ3JheS1saWdodGVyO1xyXG5cclxuXHJcbi8vPT0gTmF2YmFyIC8gTG9nb1xyXG4vL1xyXG5cclxuJG5hdmJhci1taW4taGVpZ2h0OiBcdFx0XHQ4NHB4O1xyXG4kbmF2YmFyLXN0dWNrLXNoYWRvdzogICAgIDAgM3B4IDI1cHggMCByZ2JhKGRhcmtlbigkZ3JheS1kYXJrZXIsIDQlKSwgLjIyKTtcclxuJGxvZ28td2lkdGg6IFx0XHRcdFx0ICAgICAgMTI5cHg7XHJcblxyXG4vLyBOYXZiYXIgVG9vbHNcclxuJG5hdmJhci10b29scy1jb2xvcjogICAgICAgICAgJGdyYXktZGFyaztcclxuJG5hdmJhci10b29scy1zaXplOiAgICAgICAgICAgJGJ0bi1oZWlnaHQ7XHJcbiRvZmZjYW52YXMtdG9nZ2xlLWljb24tc2l6ZTogIDIwcHg7XHJcbiR0b29scy1pY29uLXNpemU6ICAgICAgICAgICAgIDE3cHg7XHJcblxyXG5cclxuLy89PSBOYXZpZ2F0aW9uXHJcbi8vXHJcblxyXG4kbmF2LWxpbmstZm9udC1zaXplOiBcdFx0XHRcdCRmb250LXNpemUtc207IC8vIDE0cHhcclxuJG5hdi1saW5rLWZvbnQtd2VpZ2h0OiBcdFx0XHQ1MDA7XHJcbiRuYXYtbGluay1jb2xvcjogXHRcdFx0XHRcdFx0JGdyYXktZGFyaztcclxuJG5hdi1saW5rLWhvdmVyLWNvbG9yOiBcdFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuJG5hdi1saW5rLWFjdGl2ZS1jb2xvcjogXHRcdCRicmFuZC1wcmltYXJ5O1xyXG5cclxuLy8gU3ViIE1lbnUgLyBNZWdhIE1lbnVcclxuJHN1Yi1tZW51LXdpZHRoOiAgICAgICAgICAgIDIwMHB4O1xyXG4kc3ViLW1lbnUtc2hhZG93OiAgICAgICAgICAgMCA3cHggMjJweCAtNXB4IHJnYmEoZGFya2VuKCRncmF5LWRhcmtlciwgNCUpLCAuMik7XHJcblxyXG4vLyBPZmYtQ2FudmFzXHJcbiRvZmZjYW52YXMtd2lkdGg6ICAgICAgICAgICAyOTBweDtcclxuXHJcblxyXG4vLz09IFRhYnNcclxuLy9cclxuXHJcbiRuYXYtdGFicy1mb250LXNpemU6XHRcdFx0XHRcdFx0XHRcdGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuODc1KSk7IC8vIH4xNHB4XHJcbiRuYXYtdGFicy1saW5rLWNvbG9yOiBcdFx0XHRcdFx0XHRcdCRncmF5O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICBcdFx0XHQkZ3JheS1kYXJrO1xyXG5cclxuXHJcbi8vPT0gUHJvZ3Jlc3NcclxuLy9cclxuXHJcbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAxOHB4O1xyXG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgJGJyYW5kLXByaW1hcnk7XHJcblxyXG5cclxuLy89PSBTdGVwc1xyXG4vL1xyXG5cclxuJHN0ZXAtY2lyY2xlLXNpemU6ICAgICAgICA4MHB4O1xyXG4kc3RlcC1pY29uLWRlZmF1bHQtYmc6ICAgICRncmF5LWxpZ2h0ZXI7XHJcbiRzdGVwLWljb24tc2l6ZTogICAgICAgICAgMzhweDtcclxuJHN0ZXAtaWNvbi1kZWZhdWx0LWNvbG9yOiAkZ3JheS1kYXJrZXI7XHJcbiRzdGVwLXRpdGxlLXNpemU6ICAgICAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJHN0ZXAtdGl0bGUtY29sb3I6ICAgICAgICAkZ3JheS1kYXJrO1xyXG4kc3RlcC1jb25uZWN0LWhlaWdodDogICAgIDNweDtcclxuXHJcblxyXG4vLyA9PSBTaG9wXHJcbi8vXHJcblxyXG4vLyBQcm9kdWN0XHJcbiRwcm9kdWN0LXRpdGxlLWZvbnQtc2l6ZTogICAgICRmb250LXNpemUtYmFzZTtcclxuJHByb2R1Y3QtdGl0bGUtY29sb3I6ICAgICAgICAgJGdyYXktZGFya2VyO1xyXG4kcHJvZHVjdC10aXRsZS1ob3Zlci1jb2xvcjogICAkYnJhbmQtcHJpbWFyeTtcclxuJHByb2R1Y3QtcHJpY2UtZm9udC1zaXplOiAgICAgJGZvbnQtc2l6ZS1iYXNlO1xyXG4kcHJvZHVjdC1wcmljZS1jb2xvcjogICAgICAgICAkZ3JheS1kYXJrO1xyXG5cclxuLy8gU2hvcCBWaWV3XHJcbiRzaG9wLXZpZXctc2l6ZTogICAgICAgICAgICA0M3B4O1xyXG4kc2hvcC12aWV3LWNvbG9yOiAgICAgICAgICAgJGdyYXktZGFyaztcclxuJHNob3Atdmlldy1iZy1jb2xvcjogICAgICAgICR3aGl0ZS1jb2xvcjtcclxuJHNob3Atdmlldy1ob3Zlci1iZy1jb2xvcjogICRncmF5LWxpZ2h0ZXI7XHJcbiRzaG9wLXZpZXctYWN0aXZlLWJnLWNvbG9yOiAkYnJhbmQtcHJpbWFyeTtcclxuXHJcbi8vIENhcnRcclxuJGNhcnQtdGh1bWItc2l6ZTogICAgICAgICAxMTBweDtcclxuXHJcbi8vIEFjY291bnRcclxuJGNvdmVyLWhlaWdodDogICAgICAgICAgICAxMjBweDtcclxuJHVzZXItYXZhLXNpemU6ICAgICAgICAgICAxMTVweDtcclxuXHJcblxyXG4vLyA9PSBCbG9nXHJcbi8vXHJcblxyXG4kYmxvZy1wb3N0LW1ldGEtY29sb3I6ICAgICAgJGdyYXktZGFyaztcclxuJGJsb2ctcG9zdC1tZXRhLWljb24tY29sb3I6ICRncmF5O1xyXG4kYmxvZy1wb3N0LW1ldGEtZm9udC1zaXplOiAgJGZvbnQtc2l6ZS14cztcclxuJGJsb2ctcG9zdC1jb2xvcjogICAgICAgICAgICRoZWFkaW5ncy1jb2xvcjtcclxuJGJsb2ctcG9zdC1ob3Zlci1jb2xvcjogICAgICRicmFuZC1wcmltYXJ5O1xyXG5cclxuXHJcbi8vID09IENvbW1lbnRzXHJcbi8vXHJcblxyXG4kY29tbWVudC1hdXRob3ItYXZhLXNpemU6ICAgNTBweDtcclxuJGNvbW1lbnQtdGl0bGUtc2l6ZTogICAgICAgICRmb250LXNpemUtc207XHJcbiRjb21tZW50LXRpdGxlLXdlaWdodDogICAgICA1MDA7XHJcblxyXG5cclxuLy89PSBXaWRnZXRzXHJcbi8vXHJcblxyXG4kc2lkZWJhci1tYXgtd2lkdGg6ICAgICAgICAgIDQwMHB4O1xyXG4kc2lkZWJhci1vZmZjYW52YXMtd2lkdGg6ICAgIDMyMHB4O1xyXG4kd2lkZ2V0LXRpdGxlLWNvbG9yOiAgICAgICAgICRncmF5O1xyXG4kd2lkZ2V0LXRpdGxlLWZvbnQtc2l6ZTogICAgICRmb250LXNpemUtc207XHJcbiR3aWRnZXQtbGluay1mb250LXNpemU6ICAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJHdpZGdldC1tZXRhLWNvbG9yOiAgICAgICAgICAkZ3JheTtcclxuJHdpZGdldC1tZXRhLWZvbnQtc2l6ZTogICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlIC8gMS4zMykpOyAvL34xMnB4XHJcbiR3aWRnZXQtZW50cnktdGh1bWItc2l6ZTogICAgNTBweDtcclxuXHJcbi8vIFRhZ3NcclxuJHdpZGdldC10YWdzLWhlaWdodDogICAgICAgICAgICAgIDI4cHg7XHJcbiR3aWRnZXQtdGFncy1mb250LXNpemU6ICAgICAgICAgICAkZm9udC1zaXplLXhzO1xyXG4kd2lkZ2V0LXRhZ3MtY29sb3I6ICAgICAgICAgICAgICAgJG5hdi1saW5rLWNvbG9yO1xyXG4kd2lkZ2V0LXRhZ3MtaG92ZXItYmc6ICAgICAgICAgICAgJGdyYXktbGlnaHRlcjtcclxuJHdpZGdldC10YWdzLWFjdGl2ZS1iZzogICAgICAgICAgICRuYXYtbGluay1hY3RpdmUtY29sb3I7XHJcbiR3aWRnZXQtdGFncy1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkbmF2LWxpbmstYWN0aXZlLWNvbG9yO1xyXG4kd2lkZ2V0LXRhZ3MtYWN0aXZlLWNvbG9yOiAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG5cclxuXHJcbi8vPT0gUGFnaW5hdGlvblxyXG4vL1xyXG5cclxuJHBhZ2luYXRpb24tbGluay1zaXplOiAgICAgICAgICRidG4tc20taGVpZ2h0O1xyXG4kcGFnaW5hdGlvbi1saW5rLWZvbnQtc2l6ZTogICAgJGZvbnQtc2l6ZS1zbTtcclxuJHBhZ2luYXRpb24tbGluay1mb250LXdlaWdodDogIDUwMDtcclxuJHBhZ2luYXRpb24tbGluay1jb2xvcjogICAgICAgICRncmF5LWRhcms7XHJcbiRwYWdpbmF0aW9uLWxpbmstYWN0aXZlLWNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbiRwYWdpbmF0aW9uLWxpbmstaG92ZXItYmc6ICAgICAkZ3JheS1saWdodGVyO1xyXG4kcGFnaW5hdGlvbi1saW5rLWFjdGl2ZS1iZzogICAgJGJyYW5kLXByaW1hcnk7XHJcblxyXG5cclxuLy89PSBUb29sdGlwc1xyXG4vL1xyXG5cclxuJHRvb2x0aXAtb3BhY2l0eTogICAgXHRcdDE7XHJcbiR0b29sdGlwLWJnOiBcdFx0XHRcdCBcdFx0ZGFya2VuKCRncmF5LWRhcmtlciwgNCUpO1xyXG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAkd2hpdGUtY29sb3I7XHJcbiR0b29sdGlwLWFycm93LWNvbG9yOiBcdCR0b29sdGlwLWJnO1xyXG5cclxuXHJcbi8vPT0gQ2Fyb3VzZWxcclxuLy9cclxuXHJcbiRjYXJvdXNlbC1uYXZzLXNpemU6IFx0XHRcdFx0ICAkYnRuLWhlaWdodDtcclxuJGNhcm91c2VsLW5hdnMtaWNvbi1zaXplOiBcdCAgMTlweDtcclxuJGNhcm91c2VsLW5hdnMtYmc6ICAgICAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG4kY2Fyb3VzZWwtbmF2cy1jb2xvcjogXHRcdFx0ICAkZ3JheS1kYXJrZXI7XHJcbiRjYXJvdXNlbC1kb3RzLXNpemU6IFx0XHRcdFx0ICA2cHg7XHJcbiRjYXJvdXNlbC1kb3RzLWNvbG9yOiBcdCAgXHQgICRncmF5LWRhcms7XHJcblxyXG4vLyBIZXJvIFNsaWRlclxyXG4kaGVyby1zbGlkZXItbWluLWhlaWdodDogICAgICA1ODBweDtcclxuXHJcbi8vPT0gQ291bnRkb3duXHJcbi8vXHJcblxyXG4kY291bnRkb3duLWJveC1zaXplOiAgICAgICAgICA0OHB4O1xyXG4kY291bnRkb3duLWZvbnQtc2l6ZTogICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4zNzUpKTsgLy8gfjIycHhcclxuJGNvdW50ZG93bi1sYWJlbC1zaXplOiAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC43NSkpOyAvLyB+MTJweFxyXG5cclxuXHJcbi8vPT0gTWVkaWEgcXVlcmllcyAocmVzcG9uc2l2ZSBicmVhY2twb2ludHMpXHJcbi8vIyMgRGVzY2t0b3AsIFRhYmxldCwgTW9iaWxlXHJcblxyXG4kc2NyZWVuLXhsOiAxMjAwcHg7XHJcbiRzY3JlZW4tbGc6IDk5MXB4O1xyXG4kc2NyZWVuLW1kOiA3NjhweDtcclxuJHNjcmVlbi1zbTogNTc2cHg7XHJcbiRzY3JlZW4teHM6IDM2MHB4O1xyXG5cclxuJG5hdi1jb2xsYXBzZTogICAgIDEwNzBweDtcclxuIl19 */"] });


/***/ }),

/***/ 3879:
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountModule": () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ 1102);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders/orders.component */ 1748);
/* harmony import */ var _register_login_register_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-login/register-login.component */ 6985);
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.component */ 6885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








class AccountModule {
}
AccountModule.ɵfac = function AccountModule_Factory(t) { return new (t || AccountModule)(); };
AccountModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AccountModule });
AccountModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AccountModule, { declarations: [_account_component__WEBPACK_IMPORTED_MODULE_4__.AccountComponent,
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent,
        _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__.OrdersComponent,
        _register_login_register_login_component__WEBPACK_IMPORTED_MODULE_3__.RegisterLoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule], exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 1748:
/*!****************************************************!*\
  !*** ./src/app/account/orders/orders.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersComponent": () => (/* binding */ OrdersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/order.service */ 6559);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function OrdersComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td")(8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td")(11, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r1.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 4, order_r1.date, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r1.status || "In Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 7, order_r1.total));
} }
class OrdersComponent {
    constructor(orderService) {
        this.orderService = orderService;
    }
    ngOnInit() {
        this.ordersSubscription = this.orderService
            .getOrders()
            .subscribe((orders) => {
            if (orders) {
                this.orders = orders.reverse();
            }
        });
    }
    ngOnDestroy() {
        this.ordersSubscription.unsubscribe();
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_order_service__WEBPACK_IMPORTED_MODULE_0__.OrderService)); };
OrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["app-orders"]], decls: 16, vars: 1, consts: [[1, "padding-top-2x", "mt-2", "hidden-lg-up"], [1, "table-responsive"], [1, "table", "table-hover", "margin-bottom-none"], [4, "ngFor", "ngForOf"], ["href", "#", "data-toggle", "modal", "data-target", "#orderDetails", 1, "text-medium", "navi-link"], [1, "text-info"], [1, "text-medium"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "table", 2)(3, "thead")(4, "tr")(5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Order #");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Date Purchased");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, OrdersComponent_tr_14_Template, 14, 9, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "hr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orders);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6559:
/*!********************************************************!*\
  !*** ./src/app/account/orders/shared/order.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../messages/message.service */ 5985);
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/auth.service */ 1544);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/database */ 2575);






class OrderService {
    constructor(messageService, authService, store) {
        this.messageService = messageService;
        this.authService = authService;
        this.store = store;
    }
    getOrders() {
        return this.authService.user
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((user) => {
            if (user) {
                const remoteUserOrders = `/users/${user.uid}/orders`;
                return this.store.list(remoteUserOrders).valueChanges();
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
            }
        }));
    }
    addUserOrder(order, total, user) {
        const orderWithMetaData = {
            ...order,
            ...this.constructOrderMetaData(order),
            total
        };
        const databaseOperation = this.store
            .list(`users/${user}/orders`)
            .push(orderWithMetaData)
            .then((response) => response, (error) => error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(databaseOperation);
    }
    addAnonymousOrder(order, total) {
        const orderWithMetaData = {
            ...order,
            ...this.constructOrderMetaData(order),
            total
        };
        const databaseOperation = this.store
            .list('orders')
            .push(orderWithMetaData)
            .then((response) => response, (error) => error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(databaseOperation);
    }
    constructOrderMetaData(order) {
        return {
            number: (Math.random() * 10000000000).toString().split('.')[0],
            date: new Date().toString(),
            status: 'In Progress'
        };
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.messageService.addError(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
        };
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_messages_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_6__.AngularFireDatabase)); };
OrderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac });


/***/ }),

/***/ 1102:
/*!******************************************************!*\
  !*** ./src/app/account/profile/profile.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/auth.service */ 1544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function ProfileComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter your firstname!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter your lastname!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "has-danger": a0 }; };
class ProfileComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.initFormGroup();
        this.authSubscription = this.authService.user.subscribe(user => {
            if (user) {
                this.formProfile.patchValue({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                });
                this.user = user;
            }
        });
    }
    initFormGroup() {
        this.formProfile = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null),
        });
    }
    onSubmit() {
        // Update Email
        if (this.user.email !== this.formProfile.value.email) {
            this.authService.updateEmail(this.formProfile.value.email)
                .catch(error => {
                this.profileErrors = error.message;
                this.formProfile.patchValue({ email: this.user.email });
            });
        }
        // Update Profile (Firstname, Lastname)
        if (this.user.firstName !== this.formProfile.value.firstName || this.user.lastName !== this.formProfile.value.lastName) {
            this.authService.updateProfile(this.formProfile.value);
        }
        // Update password
        if (this.formProfile.value.password && this.formProfile.value.confirmPassword
            && (this.formProfile.value.password === this.formProfile.value.confirmPassword)) {
            this.authService.updatePassword(this.formProfile.value.password)
                .catch(error => {
                this.profileErrors = error.message;
            });
        }
    }
    ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 38, vars: 11, consts: [[1, "padding-top-2x", "mt-2", "hidden-lg-up"], [1, "row", 3, "formGroup", "ngSubmit"], [1, "col-md-6"], [1, "form-group"], ["for", "account-email"], ["type", "email", "id", "account-email", "formControlName", "email", 1, "form-control"], [1, "form-group", 3, "ngClass"], ["for", "account-fn"], ["type", "text", "id", "account-fn", "formControlName", "firstName", 1, "form-control"], ["class", "form-control-feedback", 4, "ngIf"], ["for", "account-ln"], ["type", "text", "id", "account-ln", "formControlName", "lastName", 1, "form-control"], ["for", "account-pass"], ["type", "password", "formControlName", "password", "id", "account-pass", 1, "form-control"], ["for", "account-confirm-pass"], ["type", "password", "formControlName", "confirmPassword", "id", "account-confirm-pass", 1, "form-control"], [1, "col-12"], [1, "mt-2", "mb-3"], [1, "form-group", "has-danger"], [1, "form-control-feedback"], [1, "text-right"], ["type", "submit", 1, "btn", "btn-primary", "margin-right-none", 3, "disabled"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "E-mail Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2)(9, "div", 6)(10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProfileComponent_div_13_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 2)(15, "div", 6)(16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ProfileComponent_div_19_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2)(21, "div", 3)(22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 2)(26, "div", 3)(27, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18)(33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 20)(36, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Update Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.formProfile.get("firstName").invalid && ctx.formProfile.get("firstName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formProfile.get("firstName").invalid && ctx.formProfile.get("firstName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.formProfile.get("lastName").invalid && ctx.formProfile.get("lastName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formProfile.get("lastName").invalid && ctx.formProfile.get("lastName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.profileErrors, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.formProfile.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6985:
/*!********************************************************************!*\
  !*** ./src/app/account/register-login/register-login.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterLoginComponent": () => (/* binding */ RegisterLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/auth.service */ 1544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../messages/message.service */ 5985);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/page-title/page-title.component */ 9526);









function RegisterLoginComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Be sure to enter a valid, existing Email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RegisterLoginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " The entered password seems to be wrong.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { title: "Account", link: "/account" }; };
const _c1 = function () { return { title: "Login / Register" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
const _c3 = function (a0) { return { "has-danger": a0 }; };
class RegisterLoginComponent {
    constructor(authenticationService, router, messageService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.initLoginForm();
        this.initRegisterForm();
    }
    initLoginForm() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
        });
    }
    initRegisterForm() {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
        });
    }
    onRegister() {
        if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
            this.registerErrors = 'Passwords don\'t match!';
            this.registerForm.controls.password.setErrors({ password: true });
            this.registerForm.controls.confirmPassword.setErrors({ confirmPassword: true });
        }
        else {
            this.authenticationService.emailSignUp(this.registerForm.value.email, this.registerForm.value.password)
                .then(() => {
                this.messageService.add('Account created successfully. Please login with your new credentials!');
                this.loginForm.setValue({ email: this.registerForm.value.email, password: '' });
                this.initRegisterForm();
            }, (error) => {
                this.registerErrors = error.message;
                if (error.code === 'auth/weak-password') {
                    this.registerForm.controls.password.setErrors({ password: true });
                    this.registerForm.controls.confirmPassword.setErrors({ confirmPassword: true });
                }
                if (error.code === 'auth/email-already-in-use') {
                    this.registerForm.controls.email.setErrors({ email: true });
                }
            });
        }
    }
    onLogin() {
        this.authenticationService
            .emailLogin(this.loginForm.value.email, this.loginForm.value.password)
            .then(() => {
            this.messageService.add('Login successful!');
            this.router.navigate(['/home']);
        }, (error) => {
            if (error.code === 'auth/user-not-found') {
                this.loginForm.controls.email.setErrors({ email: true });
            }
            if (error.code === 'auth/wrong-password') {
                this.loginForm.controls.password.setErrors({ password: true });
            }
        });
    }
}
RegisterLoginComponent.ɵfac = function RegisterLoginComponent_Factory(t) { return new (t || RegisterLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_messages_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService)); };
RegisterLoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RegisterLoginComponent, selectors: [["app-register-login"]], decls: 48, vars: 28, consts: [["title", "Login / Register Account", 3, "children"], [1, "container", "padding-bottom-3x", "mb-2"], [1, "row"], [1, "col-md-6"], [1, "login-box", 3, "formGroup", "ngSubmit"], [1, "margin-bottom-1x"], [1, "form-group", "input-group", 3, "ngClass"], ["formControlName", "email", "type", "email", "placeholder", "Email", "required", "", 1, "form-control"], [1, "input-group-addon"], [1, "icon-mail"], ["class", "form-control-feedback", 4, "ngIf"], ["formControlName", "password", "type", "password", "placeholder", "Password", "required", "", 1, "form-control"], [1, "icon-lock"], [1, "text-center", "text-sm-right"], ["type", "submit", 1, "btn", "btn-primary", "margin-bottom-none", 3, "disabled"], [1, "padding-top-3x", "hidden-md-up"], [1, "row", 3, "formGroup", "ngSubmit"], [1, "col-sm-12"], [1, "form-group", 3, "ngClass"], ["for", "reg-email"], ["formControlName", "email", "type", "email", "id", "reg-email", "required", "", 1, "form-control"], [1, "col-sm-6"], ["for", "reg-pass"], ["formControlName", "password", "type", "password", "id", "reg-pass", "required", "", 1, "form-control"], ["for", "reg-pass-confirm"], ["formControlName", "confirmPassword", "type", "password", "id", "reg-pass-confirm", "required", "", 1, "form-control"], [1, "col-12", "text-center", "text-sm-right"], [1, "form-group", "has-danger"], [1, "form-control-feedback"]], template: function RegisterLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-page-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegisterLoginComponent_Template_form_ngSubmit_4_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, RegisterLoginComponent_div_11_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, RegisterLoginComponent_div_16_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13)(18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "No Account? Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Registration takes less than a minute but gives you full control over your orders.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegisterLoginComponent_Template_form_ngSubmit_26_listener() { return ctx.onRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 17)(28, "div", 18)(29, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "E-mail Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 21)(33, "div", 18)(34, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 21)(38, "div", 18)(39, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 26)(43, "div", 27)(44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("children", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](15, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c3, !ctx.loginForm.get("email").valid && ctx.loginForm.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loginForm.get("email").valid && ctx.loginForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c3, !ctx.loginForm.get("password").valid && ctx.loginForm.get("password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loginForm.get("password").valid && ctx.loginForm.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](22, _c3, !ctx.registerForm.get("email").valid && ctx.registerForm.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](24, _c3, !ctx.registerForm.get("password").valid && ctx.registerForm.get("password").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](26, _c3, !ctx.registerForm.get("confirmPassword").valid && ctx.registerForm.get("confirmPassword").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.registerErrors, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__.PageTitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1544:
/*!************************************************!*\
  !*** ./src/app/account/shared/auth.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 8427);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/user.model */ 4872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/database */ 2575);
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../messages/message.service */ 5985);








class AuthService {
    constructor(afAuth, db, messageService) {
        this.afAuth = afAuth;
        this.db = db;
        this.messageService = messageService;
        this.user = this.afAuth.authState
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)((auth) => {
            if (auth) {
                return this.db.object('users/' + auth.uid).valueChanges()
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((user) => {
                    return {
                        ...user,
                        uid: auth.uid
                    };
                }));
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
            }
        }));
    }
    googleLogin() {
        const provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider();
        return this.afAuth.signInWithPopup(provider).then((credential) => {
            this.updateNewUser(credential.user);
        }, (error) => {
            throw error;
        });
    }
    emailSignUp(email, password) {
        return this.afAuth
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
            this.updateNewUser(user);
        }, (error) => {
            throw error;
        });
    }
    emailLogin(email, password) {
        return this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
            this.updateNewUser(user);
        }, (error) => {
            throw error;
        });
    }
    signOut() {
        this.afAuth.signOut();
        this.messageService.add('You have been logged out.');
    }
    updateProfile(userData) {
        this.updateExistingUser(userData);
        this.messageService.add('User profile has been updated!');
    }
    updatePassword(password) {
        return this.afAuth.currentUser
            .then(user => user.updatePassword(password))
            .then(() => {
            this.messageService.add('Password has been updated!');
        })
            .catch(function (error) {
            throw error;
        });
    }
    updateEmail(email) {
        return this.afAuth.currentUser
            .then(user => user.updateEmail(email))
            .then(() => {
            this.updateExistingUser({ email: email });
            this.messageService.add('User email have been updated!');
        })
            .catch(function (error) {
            throw error;
        });
    }
    updateNewUser(authData) {
        const userData = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__.User(authData);
        const ref = this.db.object('users/' + authData.uid);
        ref
            .valueChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1))
            .subscribe((user) => {
            if (!user) {
                ref.update(userData);
            }
        });
    }
    updateExistingUser(userData) {
        this.afAuth.currentUser.then(user => {
            const ref = this.db.object('users/' + user.uid);
            ref
                .valueChanges()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1))
                .subscribe((user) => {
                ref.update(userData);
            });
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_9__.AngularFireDatabase), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_messages_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


/***/ }),

/***/ 4498:
/*!******************************************************!*\
  !*** ./src/app/admin/add-edit/add-edit.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditComponent": () => (/* binding */ AddEditComponent),
/* harmony export */   "DomainProduct": () => (/* binding */ DomainProduct)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/product.model */ 1454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _products_shared_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../products/shared/product.service */ 9979);
/* harmony import */ var _products_shared_file_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../products/shared/file-upload.service */ 5606);
/* harmony import */ var _products_shared_products_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products/shared/products-cache.service */ 9491);
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../messages/message.service */ 5985);
/* harmony import */ var _core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/page-title/page-title.component */ 9526);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);












const _c0 = ["photos"];

function AddEditComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Shucks, enter a name for your product. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function AddEditComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Shucks, enter a number as id for your product. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function AddEditComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Shucks, enter a date for your product. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function AddEditComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Shucks, enter at least one category for your product. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function AddEditComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Shucks, enter a description for your product. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function AddEditComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Shucks, enter a price for your product. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function AddEditComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Shucks, enter a base price for your product. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function AddEditComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31)(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const pct_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", pct_r9, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 3, pct_r9, "1.0-0"), "%");
  }
}

const _c1 = function () {
  return {
    title: "Add/Edit Product"
  };
};

const _c2 = function (a0) {
  return [a0];
}; // we send and receive categories as {key:true},
// but for the input field we need
// a product with categories of type string


class DomainProduct extends _models_product_model__WEBPACK_IMPORTED_MODULE_0__.Product {}
class AddEditComponent {
  constructor(router, route, productService, fileUploadService, productsCacheService, log) {
    this.router = router;
    this.route = route;
    this.productService = productService;
    this.fileUploadService = fileUploadService;
    this.productsCacheService = productsCacheService;
    this.log = log;
  }

  ngOnInit() {
    this.setProduct();
  }

  initForm() {
    this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(this.product && this.product.name, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl({
        value: this.product && this.product.id,
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0)]),
      date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(this.product && this.product.date, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
      categories: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(this.product && this.product.categories, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(this.product && this.product.description, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
      price: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(this.product && this.product.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0)]),
      priceNormal: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl(this.product && this.product.priceNormal, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0)])
    });
    this.onFormChanges();
  }

  setProduct() {
    this.route.params.subscribe(params => {
      this.id = +this.route.snapshot.paramMap.get('id'); // if we have an id, we're in edit mode

      if (this.id) {
        this.mode = 'edit';
        this.getProduct(this.id);
        this.initForm();
      } else {
        // else we are in add mode
        this.mode = 'add';
        this.constructProduct();
        this.initForm();
      }
    });
  }

  constructProduct() {
    const product = this.constructMockProduct();
    product.categories = this.categoriesFromObjectToString(product.categories);
    this.syncProduct(product);
    this.initForm();
  }

  getProduct(id) {
    this.productSubscription = this.productService.getProduct(id).subscribe(product => {
      if (product) {
        product.categories = this.categoriesFromObjectToString(product.categories);
        this.syncProduct(product);
        this.initForm();
      }
    });
  }

  onFormChanges() {
    this.formSubscription = this.productForm.valueChanges.subscribe(formFieldValues => {
      const product = { ...this.product,
        ...formFieldValues
      };
      this.syncProduct(product);
    });
  }

  syncProduct(product) {
    const id = this.createId(product);
    const imageURLs = this.handleImageURLs(product);
    const reduction = this.calculateReduction(product.priceNormal, product.price);
    const sale = this.checkForSale(reduction);
    this.product = { ...product,
      sale,
      reduction,
      id,
      imageURLs
    };
  }

  onSubmit() {
    this.syncProduct({ ...this.product,
      ...this.productForm.value
    });
    const productToSubmit = this.constructProductToSubmit(this.product);
    const files = this.photos.nativeElement.files;

    if (this.mode === 'add' && files.length > 0) {
      this.addProduct(productToSubmit, files);
    } else if (this.mode === 'edit') {
      this.updateProduct(productToSubmit, files);
    } else {
      this.log.addError('Please provide a file for your product');
      return;
    }
  }

  addProduct(product, files) {
    this.productService.addProduct({
      product,
      files
    }).subscribe(savedProduct => {
      if (savedProduct.id) {
        this.product = null;
        this.router.navigate(['/products']);
      }
    }, error => {
      this.log.addError('Could not upload your product');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(error);
    });
  }

  updateProduct(product, files) {
    this.productSubscription.unsubscribe();
    this.productService.updateProduct({
      product,
      files
    }).subscribe(response => {
      this.router.navigate(['/products/' + response.id]);
    }, error => this.log.addError('Could not update your product'));
  }

  onDelete() {
    if (this.mode === 'edit') {
      this.productSubscription.unsubscribe();
      this.productService.deleteProduct(this.product).then(res => {
        this.router.navigate(['/products']);
      });
    } else {
      this.log.addError(`Cannot delete new product`);
    }
  } // pure helper functions start here:


  constructMockProduct() {
    return new _models_product_model__WEBPACK_IMPORTED_MODULE_0__.Product();
  }

  constructProductToSubmit(product) {
    return { ...product,
      categories: this.categoriesFromStringToObject(product.categories)
    };
  }

  createId(product) {
    const randomId = Math.floor(Math.random() * new Date().getTime());
    let id = product.id || randomId;

    if (id === 1) {
      id = randomId;
    }

    return id;
  }

  categoriesFromObjectToString(categories) {
    // categories: { key: true, key: true} || {}
    if (Object.keys(categories).length === 0) {
      return 'example, category';
    }

    return Object.keys(categories).reduce((result, currentProduct, index, inputArray) => {
      if (index < inputArray.length - 1) {
        return result + currentProduct + ',';
      }

      return result + currentProduct;
    }, '');
  }

  categoriesFromStringToObject(categories) {
    // categories: 'cat1, cat2, cat3' || ''
    if (categories.length === 0) {
      return {};
    }

    return categories.split(',').reduce((combinedCategories, currentCategory) => {
      combinedCategories[currentCategory.trim()] = true;
      return combinedCategories;
    }, {});
  }

  checkForSale(reduction) {
    return reduction > 0;
  }

  calculateReduction(priceNormal, price) {
    const reduction = Math.round((priceNormal - price) / priceNormal * 100);
    return reduction > 0 ? reduction : 0;
  }

  handleImageURLs(product) {
    if (product.imageURLs && product.imageURLs.length > 0) {
      return product.imageURLs;
    }

    return [];
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }

}

AddEditComponent.ɵfac = function AddEditComponent_Factory(t) {
  return new (t || AddEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_products_shared_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_products_shared_file_upload_service__WEBPACK_IMPORTED_MODULE_2__.FileUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_products_shared_products_cache_service__WEBPACK_IMPORTED_MODULE_3__.ProductsCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_messages_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService));
};

AddEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AddEditComponent,
  selectors: [["app-add-edit"]],
  viewQuery: function AddEditComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.photos = _t.first);
    }
  },
  decls: 64,
  vars: 17,
  consts: [["title", "Add/Edit Product", 3, "children"], [1, "container"], [1, "row", "mb-5"], [1, "col-lg-8"], [1, "margin-bottom-1x"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "name", 1, "col-2", "col-form-label"], [1, "col-10"], ["formControlName", "name", "type", "text", "id", "name", "value", "", 1, "form-control", "form-control-square", "form-control-sm"], ["class", "form-control-feedback", 4, "ngIf"], ["for", "id", 1, "col-2", "col-form-label"], ["formControlName", "id", "type", "number", "id", "id", "value", "0", 1, "form-control", "form-control-square", "form-control-sm"], ["for", "date-input", 1, "col-2", "col-form-label"], ["type", "date", "id", "date-input", "formControlName", "date", "value", "", 1, "form-control"], ["for", "categories", 1, "col-2", "col-form-label"], ["formControlName", "categories", "type", "text", "id", "categories", "value", "", 1, "form-control", "form-control-square", "form-control-sm"], ["for", "description", 1, "col-2", "col-form-label"], ["formControlName", "description", "id", "description", "rows", "5", 1, "form-control", "form-control-square", "form-control-sm"], ["for", "photos", 1, "col-2", "col-form-label"], ["type", "file", "id", "photos", 1, ""], ["photos", ""], ["for", "price", 1, "col-2", "col-form-label"], ["formControlName", "price", "type", "number", "id", "price", "value", "", 1, "form-control", "form-control-square", "form-control-sm"], ["for", "price-normal", 1, "col-2", "col-form-label"], ["formControlName", "priceNormal", "type", "number", "id", "price-normal", "value", "0", 1, "form-control", "form-control-square", "form-control-sm"], ["class", "progress margin-bottom-1x", 4, "ngIf"], [1, "col", "text-right"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "form-control-feedback"], [1, "progress", "margin-bottom-1x"], ["role", "progressbar", "aria-valuenow", "pct | number: '1.0-0'", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar"]],
  template: function AddEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-page-title", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Add/Edit Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function AddEditComponent_Template_form_ngSubmit_6_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6)(8, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Product Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AddEditComponent_div_12_Template, 2, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 6)(14, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Id");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, AddEditComponent_div_18_Template, 2, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 6)(20, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Creation Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, AddEditComponent_div_24_Template, 2, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 6)(26, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Categories (commma seperated)");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, AddEditComponent_div_30_Template, 2, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 6)(32, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Product description");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 8)(35, "textarea", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, AddEditComponent_div_37_Template, 2, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 6)(39, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Add Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "input", 20, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 6)(45, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Actual Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, AddEditComponent_div_49_Template, 2, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 6)(51, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Original Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, AddEditComponent_div_55_Template, 2, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, AddEditComponent_div_56_Template, 4, 6, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](57, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 2)(59, "div", 27)(60, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddEditComponent_Template_button_click_60_listener() {
        return ctx.onDelete();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Delete Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Save Changes");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("children", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](15, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](14, _c1)));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.productForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.productForm.get("name").valid && ctx.productForm.get("name").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.productForm.get("id").valid && ctx.productForm.get("id").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.productForm.get("date").valid && ctx.productForm.get("date").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.productForm.get("categories").valid && ctx.productForm.get("categories").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.productForm.get("description").valid && ctx.productForm.get("description").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.productForm.get("price").valid && ctx.productForm.get("price").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.productForm.get("priceNormal").valid && ctx.productForm.get("priceNormal").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](57, 12, ctx.fileUploadService.percentage$));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.mode === "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.productForm.invalid);
    }
  },
  dependencies: [_core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__.PageTitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe],
  styles: [".progress[_ngcontent-%COMP%] {\n  height: auto;\n  border-radius: 9px;\n  background-color: #f0f0f0;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 18px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  height: 18px;\n  background-color: #0da9ef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcc2Nzc1xcaGVscGVyc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFFRSxlQ2lEcUI7RURoRHJCLGdCQUFBO0VBRUYsaUJDK0tvQjtBRHZMdEI7O0FBVUE7RUFDRSxZQzRLb0I7RUQzS3BCLHlCQUFBO0FBUEYiLCJmaWxlIjoiYWRkLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQcm9ncmVzcyBiYXJzXHJcbkBpbXBvcnQgJy4uLy4uLy4uL3Njc3MvaGVscGVycy9fdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLy9cclxuLy8gUHJvZ3Jlc3MgQmFyc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLnByb2dyZXNzIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogY2VpbCgkcHJvZ3Jlc3MtaGVpZ2h0IC8gMik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRncmF5LWxpZ2h0ZXIsIDIlKTtcclxuICBmb250OiB7XHJcbiAgICBzaXplOiAkZm9udC1zaXplLXhzO1xyXG4gICAgd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIGxpbmUtaGVpZ2h0OiAkcHJvZ3Jlc3MtaGVpZ2h0O1xyXG59XHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gIGhlaWdodDogJHByb2dyZXNzLWhlaWdodDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJvZ3Jlc3MtYmc7XHJcbn1cclxuIiwiLy9cclxuLy8gVmFyaWFibGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLz09IENvbG9yc1xyXG4vL1xyXG4vLyMjIEdyYXkgYW5kIGJyYW5kIGNvbG9ycyBmb3IgdXNlIGFjcm9zcyBUaGVtZS5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIEdyYXlzY2FsZVxyXG4kZ3JheS1kYXJrZXI6ICAgICAgICAgICAgIzM3NDI1MDtcclxuJGdyYXktZGFyazogICAgICAgICAgICBcdCAjNjA2OTc1O1xyXG4kZ3JheTogICAgICAgICAgICAgICAgICAgIzlkYTliOTtcclxuJGdyYXktbGlnaHQ6ICAgICAgICAgICAgICNlMWU3ZWM7XHJcbiRncmF5LWxpZ2h0ZXI6ICAgICAgICAgICAjZjVmNWY1O1xyXG4kd2hpdGUtY29sb3I6ICAgICAgICAgICAgI2ZmZmZmZjtcclxuJGJsYWNrLWNvbG9yOiAgICAgICAgICAgICMwMDAwMDA7XHJcblxyXG4vLyBCcmFuZCBjb2xvcnNcclxuJGJyYW5kLXByaW1hcnk6ICAgICAgICAgIzBkYTllZjtcclxuJGJyYW5kLWluZm86XHRcdCAgICAgICAgIzUwYzZlOTtcclxuJGJyYW5kLXN1Y2Nlc3M6ICAgICAgICAgIzQzZDlhMztcclxuJGJyYW5kLXdhcm5pbmc6ICAgICAgICAgI2ZmYjc0ZjtcclxuJGJyYW5kLWRhbmdlcjogICAgICAgICAgI2ZmNTI1MjtcclxuXHJcbi8vIEJvZHlcclxuJGJvZHktYmc6IFx0XHRcdFx0XHRcdFx0JHdoaXRlLWNvbG9yO1xyXG4kYm9keS1jb2xvcjogXHRcdFx0XHRcdFx0JGdyYXktZGFyaztcclxuXHJcbi8vIElubGluZSBsaW5rc1xyXG4kbGluay1jb2xvcjogXHRcdFx0XHRcdFx0JGJyYW5kLXByaW1hcnk7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiBcdFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuXHJcbi8vIEhlZGluZ3NcclxuJGhlYWRpbmdzLWNvbG9yOlx0IFx0XHRcdCRncmF5LWRhcmtlcjtcclxuXHJcbi8vIEJsb2NrcXVvdGVcclxuJHF1b3RlLXRleHQtY29sb3I6ICAgICAgJGJvZHktY29sb3I7XHJcbiRxdW90ZS1tYXJrLWNvbG9yOiAgICAgICRncmF5O1xyXG4kcXVvdGUtYXV0aG9yLWNvbG9yOiAgICAkZ3JheTtcclxuXHJcbi8vIEJvcmRlcnNcclxuJGJvcmRlci1jb2xvcjogICAgICAgICAgJGdyYXktbGlnaHQ7XHJcbiRib3JkZXItbGlnaHQtY29sb3I6ICAgIHJnYmEoJHdoaXRlLWNvbG9yLCAuMTIpO1xyXG5cclxuLy8gSGlnaGxpZ2h0IGNvbG9yXHJcbiRoaWdobGlnaHQtY29sb3I6ICAgICAgICNmZmY4YjA7XHJcblxyXG5cclxuLy89PSBUeXBvZ3JhcGh5XHJcbi8vXHJcbi8vIyMgRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRmb250LWZhbWlseS1iYXNlOiBcdFx0XHQgICdNYXZlbiBQcm8nLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktaGVhZGluZ3M6IFx0ICBpbmhlcml0O1xyXG5cclxuLy8gRm9udCBzaXplc1xyXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgIDE2cHg7XHJcbiRmb250LXNpemUtbGVhZDogICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuMTI1KSk7IC8vIH4xOHB4XHJcbiRmb250LXNpemUtc206IFx0XHRcdFx0ICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuODc1KSk7IC8vIH4xNHB4XHJcbiRmb250LXNpemUteHM6ICAgICAgICAgXHRcdGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuODEyNSkpOyAvLyB+MTNweFxyXG5cclxuLy8gSGVhZGluZ3NcclxuJGZvbnQtc2l6ZS1oMTogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMi4yNSkpOyAvLyB+MzZweFxyXG4kZm9udC1zaXplLWgyOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjg3NSkpOyAvLyB+MzBweFxyXG4kZm9udC1zaXplLWgzOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjUpKTsgLy8gfjI0cHhcclxuJGZvbnQtc2l6ZS1oNDogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkpOyAvLyB+MjBweFxyXG4kZm9udC1zaXplLWg1OiAgICAgICAgICAgICRmb250LXNpemUtbGVhZDsgLy8gfjE4cHhcclxuJGZvbnQtc2l6ZS1oNjogICAgICAgICAgICAkZm9udC1zaXplLWJhc2U7IC8vIH4xNnB4XHJcblxyXG4vLyBEaXNwbGF5IGhlYWRpbmdzXHJcbiRkaXNwbGF5LTE6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDQuNSkpOyAvLyB+NzJweFxyXG4kZGlzcGxheS0yOiAgICAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAzLjc1KSk7IC8vIH42MHB4XHJcbiRkaXNwbGF5LTM6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDMuMTI1KSk7IC8vIH41MHB4XHJcbiRkaXNwbGF5LTQ6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDIuNSkpOyAvLyB+NDBweFxyXG5cclxuLy8gRm9udCBzdHlsZXNcclxuJGZvbnQtc3R5bGUtYmFzZTogICAgICAgICBub3JtYWw7XHJcbiRmb250LXN0eWxlLWhlYWRpbmdzOiAgICAgbm9ybWFsO1xyXG5cclxuLy8gRm9udCB3ZWlnaHRzXHJcbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgIG5vcm1hbDtcclxuJGZvbnQtd2VpZ2h0LWhlYWRpbmdzOiAgICAgNTAwO1xyXG5cclxuLy8gVGV4dCB0cmFuc2Zvcm1zXHJcbiR0ZXh0LXRyYW5zZm9ybS1iYXNlOiAgICAgbm9uZTtcclxuJHRleHQtdHJhbnNmb3JtLWhlYWRpbmdzOiBub25lO1xyXG5cclxuLy8gTGluZSBoZWlnaHRzXHJcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAxLjU7XHJcbiRsaW5lLWhlaWdodC1oMTogICAgICAgICAxLjE1O1xyXG4kbGluZS1oZWlnaHQtaDI6ICAgICAgICAgMS4yO1xyXG4kbGluZS1oZWlnaHQtaDM6ICAgICAgICAgMS4yNTtcclxuJGxpbmUtaGVpZ2h0LWg0OiAgICAgICAgIDEuMztcclxuJGxpbmUtaGVpZ2h0LWg1OiAgICAgICAgIDEuMzU7XHJcbiRsaW5lLWhlaWdodC1oNjogICAgICAgICAxLjQ7XHJcbiRsaW5lLWhlaWdodC1kaXNwbGF5OiAgICAxLjE1O1xyXG5cclxuXHJcbi8vPT0gR3JpZCBWZXJ0aWNhbCBTdGVwXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRncmlkLXZlcnRpY2FsLXN0ZXA6ICAgICAyNHB4O1xyXG5cclxuXHJcbi8vPT0gQm9yZGVyIFJhZGl1c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kYm9yZGVyLXJhZGl1cy1sZzogXHRcdDdweDtcclxuJGJvcmRlci1yYWRpdXMtYmFzZTogXHQ1cHg7XHJcbiRib3JkZXItcmFkaXVzLXNtOiBcdFx0M3B4O1xyXG5cclxuXHJcbi8vPT0gRm9ybXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGlucHV0LWhlaWdodC1sZzpcdFx0XHRcdFx0XHRcdDU0cHg7XHJcbiRpbnB1dC1oZWlnaHQ6XHRcdFx0XHRcdFx0XHRcdDQ0cHg7XHJcbiRpbnB1dC1oZWlnaHQtc206XHRcdFx0XHRcdFx0XHQzNnB4O1xyXG4kaW5wdXQtY29sb3ItcGxhY2Vob2xkZXI6ICAgICAkZ3JheTtcclxuXHJcblxyXG4vLz09IEJ1dHRvbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGJ0bi1mb250LXNpemU6IFx0XHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS1zbTtcclxuJGJ0bi1zbS1mb250LXNpemU6IFx0XHRcdFx0XHRcdCRmb250LXNpemUteHM7XHJcbiRidG4tdGV4dC10cmFuc2Zvcm06ICAgICAgICAgIHVwcGVyY2FzZTtcclxuJGJ0bi1mb250LXdlaWdodDogXHRcdFx0XHRcdFx0NTAwO1xyXG4kYnRuLXRleHQtY29sb3I6ICAgICAgICAgICAgICAkZ3JheS1kYXJrO1xyXG5cclxuJGJ0bi1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0XHRcdDQ0cHg7XHJcbiRidG4tbGctaGVpZ2h0OiBcdFx0XHRcdFx0XHRcdDU0cHg7XHJcbiRidG4tc20taGVpZ2h0OiBcdFx0XHRcdFx0XHRcdDM2cHg7XHJcblxyXG4kYnRuLW1hcmdpbjogICAgICAgICAgICAgICAgICBmbG9vcigkZ3JpZC12ZXJ0aWNhbC1zdGVwIC8gMik7IC8vfjEycHhcclxuJHNvY2lhbC1idG4tc2l6ZTogXHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS14cztcclxuXHJcblxyXG4vLz09IFRhYmxlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kdGFibGUtYm9yZGVyLWNvbG9yOiBcdFx0XHRcdFx0JGJvcmRlci1jb2xvcjtcclxuJHRhYmxlLWNlbGwtcGFkZGluZzpcdFx0XHRcdFx0MTVweDtcclxuJHRhYmxlLWJnLWFjY2VudDogXHRcdFx0XHRcdFx0JGdyYXktbGlnaHRlcjtcclxuXHJcblxyXG4vLz09IE5hdmJhciAvIExvZ29cclxuLy9cclxuXHJcbiRuYXZiYXItbWluLWhlaWdodDogXHRcdFx0ODRweDtcclxuJG5hdmJhci1zdHVjay1zaGFkb3c6ICAgICAwIDNweCAyNXB4IDAgcmdiYShkYXJrZW4oJGdyYXktZGFya2VyLCA0JSksIC4yMik7XHJcbiRsb2dvLXdpZHRoOiBcdFx0XHRcdCAgICAgIDEyOXB4O1xyXG5cclxuLy8gTmF2YmFyIFRvb2xzXHJcbiRuYXZiYXItdG9vbHMtY29sb3I6ICAgICAgICAgICRncmF5LWRhcms7XHJcbiRuYXZiYXItdG9vbHMtc2l6ZTogICAgICAgICAgICRidG4taGVpZ2h0O1xyXG4kb2ZmY2FudmFzLXRvZ2dsZS1pY29uLXNpemU6ICAyMHB4O1xyXG4kdG9vbHMtaWNvbi1zaXplOiAgICAgICAgICAgICAxN3B4O1xyXG5cclxuXHJcbi8vPT0gTmF2aWdhdGlvblxyXG4vL1xyXG5cclxuJG5hdi1saW5rLWZvbnQtc2l6ZTogXHRcdFx0XHQkZm9udC1zaXplLXNtOyAvLyAxNHB4XHJcbiRuYXYtbGluay1mb250LXdlaWdodDogXHRcdFx0NTAwO1xyXG4kbmF2LWxpbmstY29sb3I6IFx0XHRcdFx0XHRcdCRncmF5LWRhcms7XHJcbiRuYXYtbGluay1ob3Zlci1jb2xvcjogXHRcdFx0JGJyYW5kLXByaW1hcnk7XHJcbiRuYXYtbGluay1hY3RpdmUtY29sb3I6IFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuXHJcbi8vIFN1YiBNZW51IC8gTWVnYSBNZW51XHJcbiRzdWItbWVudS13aWR0aDogICAgICAgICAgICAyMDBweDtcclxuJHN1Yi1tZW51LXNoYWRvdzogICAgICAgICAgIDAgN3B4IDIycHggLTVweCByZ2JhKGRhcmtlbigkZ3JheS1kYXJrZXIsIDQlKSwgLjIpO1xyXG5cclxuLy8gT2ZmLUNhbnZhc1xyXG4kb2ZmY2FudmFzLXdpZHRoOiAgICAgICAgICAgMjkwcHg7XHJcblxyXG5cclxuLy89PSBUYWJzXHJcbi8vXHJcblxyXG4kbmF2LXRhYnMtZm9udC1zaXplOlx0XHRcdFx0XHRcdFx0XHRmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogLjg3NSkpOyAvLyB+MTRweFxyXG4kbmF2LXRhYnMtbGluay1jb2xvcjogXHRcdFx0XHRcdFx0XHQkZ3JheTtcclxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAgXHRcdFx0JGdyYXktZGFyaztcclxuXHJcblxyXG4vLz09IFByb2dyZXNzXHJcbi8vXHJcblxyXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgMThweDtcclxuJHByb2dyZXNzLWJnOiAgICAgICAgICRicmFuZC1wcmltYXJ5O1xyXG5cclxuXHJcbi8vPT0gU3RlcHNcclxuLy9cclxuXHJcbiRzdGVwLWNpcmNsZS1zaXplOiAgICAgICAgODBweDtcclxuJHN0ZXAtaWNvbi1kZWZhdWx0LWJnOiAgICAkZ3JheS1saWdodGVyO1xyXG4kc3RlcC1pY29uLXNpemU6ICAgICAgICAgIDM4cHg7XHJcbiRzdGVwLWljb24tZGVmYXVsdC1jb2xvcjogJGdyYXktZGFya2VyO1xyXG4kc3RlcC10aXRsZS1zaXplOiAgICAgICAgICRmb250LXNpemUtc207XHJcbiRzdGVwLXRpdGxlLWNvbG9yOiAgICAgICAgJGdyYXktZGFyaztcclxuJHN0ZXAtY29ubmVjdC1oZWlnaHQ6ICAgICAzcHg7XHJcblxyXG5cclxuLy8gPT0gU2hvcFxyXG4vL1xyXG5cclxuLy8gUHJvZHVjdFxyXG4kcHJvZHVjdC10aXRsZS1mb250LXNpemU6ICAgICAkZm9udC1zaXplLWJhc2U7XHJcbiRwcm9kdWN0LXRpdGxlLWNvbG9yOiAgICAgICAgICRncmF5LWRhcmtlcjtcclxuJHByb2R1Y3QtdGl0bGUtaG92ZXItY29sb3I6ICAgJGJyYW5kLXByaW1hcnk7XHJcbiRwcm9kdWN0LXByaWNlLWZvbnQtc2l6ZTogICAgICRmb250LXNpemUtYmFzZTtcclxuJHByb2R1Y3QtcHJpY2UtY29sb3I6ICAgICAgICAgJGdyYXktZGFyaztcclxuXHJcbi8vIFNob3AgVmlld1xyXG4kc2hvcC12aWV3LXNpemU6ICAgICAgICAgICAgNDNweDtcclxuJHNob3Atdmlldy1jb2xvcjogICAgICAgICAgICRncmF5LWRhcms7XHJcbiRzaG9wLXZpZXctYmctY29sb3I6ICAgICAgICAkd2hpdGUtY29sb3I7XHJcbiRzaG9wLXZpZXctaG92ZXItYmctY29sb3I6ICAkZ3JheS1saWdodGVyO1xyXG4kc2hvcC12aWV3LWFjdGl2ZS1iZy1jb2xvcjogJGJyYW5kLXByaW1hcnk7XHJcblxyXG4vLyBDYXJ0XHJcbiRjYXJ0LXRodW1iLXNpemU6ICAgICAgICAgMTEwcHg7XHJcblxyXG4vLyBBY2NvdW50XHJcbiRjb3Zlci1oZWlnaHQ6ICAgICAgICAgICAgMTIwcHg7XHJcbiR1c2VyLWF2YS1zaXplOiAgICAgICAgICAgMTE1cHg7XHJcblxyXG5cclxuLy8gPT0gQmxvZ1xyXG4vL1xyXG5cclxuJGJsb2ctcG9zdC1tZXRhLWNvbG9yOiAgICAgICRncmF5LWRhcms7XHJcbiRibG9nLXBvc3QtbWV0YS1pY29uLWNvbG9yOiAkZ3JheTtcclxuJGJsb2ctcG9zdC1tZXRhLWZvbnQtc2l6ZTogICRmb250LXNpemUteHM7XHJcbiRibG9nLXBvc3QtY29sb3I6ICAgICAgICAgICAkaGVhZGluZ3MtY29sb3I7XHJcbiRibG9nLXBvc3QtaG92ZXItY29sb3I6ICAgICAkYnJhbmQtcHJpbWFyeTtcclxuXHJcblxyXG4vLyA9PSBDb21tZW50c1xyXG4vL1xyXG5cclxuJGNvbW1lbnQtYXV0aG9yLWF2YS1zaXplOiAgIDUwcHg7XHJcbiRjb21tZW50LXRpdGxlLXNpemU6ICAgICAgICAkZm9udC1zaXplLXNtO1xyXG4kY29tbWVudC10aXRsZS13ZWlnaHQ6ICAgICAgNTAwO1xyXG5cclxuXHJcbi8vPT0gV2lkZ2V0c1xyXG4vL1xyXG5cclxuJHNpZGViYXItbWF4LXdpZHRoOiAgICAgICAgICA0MDBweDtcclxuJHNpZGViYXItb2ZmY2FudmFzLXdpZHRoOiAgICAzMjBweDtcclxuJHdpZGdldC10aXRsZS1jb2xvcjogICAgICAgICAkZ3JheTtcclxuJHdpZGdldC10aXRsZS1mb250LXNpemU6ICAgICAkZm9udC1zaXplLXNtO1xyXG4kd2lkZ2V0LWxpbmstZm9udC1zaXplOiAgICAgICRmb250LXNpemUtc207XHJcbiR3aWRnZXQtbWV0YS1jb2xvcjogICAgICAgICAgJGdyYXk7XHJcbiR3aWRnZXQtbWV0YS1mb250LXNpemU6ICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAvIDEuMzMpKTsgLy9+MTJweFxyXG4kd2lkZ2V0LWVudHJ5LXRodW1iLXNpemU6ICAgIDUwcHg7XHJcblxyXG4vLyBUYWdzXHJcbiR3aWRnZXQtdGFncy1oZWlnaHQ6ICAgICAgICAgICAgICAyOHB4O1xyXG4kd2lkZ2V0LXRhZ3MtZm9udC1zaXplOiAgICAgICAgICAgJGZvbnQtc2l6ZS14cztcclxuJHdpZGdldC10YWdzLWNvbG9yOiAgICAgICAgICAgICAgICRuYXYtbGluay1jb2xvcjtcclxuJHdpZGdldC10YWdzLWhvdmVyLWJnOiAgICAgICAgICAgICRncmF5LWxpZ2h0ZXI7XHJcbiR3aWRnZXQtdGFncy1hY3RpdmUtYmc6ICAgICAgICAgICAkbmF2LWxpbmstYWN0aXZlLWNvbG9yO1xyXG4kd2lkZ2V0LXRhZ3MtYWN0aXZlLWJvcmRlci1jb2xvcjogJG5hdi1saW5rLWFjdGl2ZS1jb2xvcjtcclxuJHdpZGdldC10YWdzLWFjdGl2ZS1jb2xvcjogICAgICAgICR3aGl0ZS1jb2xvcjtcclxuXHJcblxyXG4vLz09IFBhZ2luYXRpb25cclxuLy9cclxuXHJcbiRwYWdpbmF0aW9uLWxpbmstc2l6ZTogICAgICAgICAkYnRuLXNtLWhlaWdodDtcclxuJHBhZ2luYXRpb24tbGluay1mb250LXNpemU6ICAgICRmb250LXNpemUtc207XHJcbiRwYWdpbmF0aW9uLWxpbmstZm9udC13ZWlnaHQ6ICA1MDA7XHJcbiRwYWdpbmF0aW9uLWxpbmstY29sb3I6ICAgICAgICAkZ3JheS1kYXJrO1xyXG4kcGFnaW5hdGlvbi1saW5rLWFjdGl2ZS1jb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4kcGFnaW5hdGlvbi1saW5rLWhvdmVyLWJnOiAgICAgJGdyYXktbGlnaHRlcjtcclxuJHBhZ2luYXRpb24tbGluay1hY3RpdmUtYmc6ICAgICRicmFuZC1wcmltYXJ5O1xyXG5cclxuXHJcbi8vPT0gVG9vbHRpcHNcclxuLy9cclxuXHJcbiR0b29sdGlwLW9wYWNpdHk6ICAgIFx0XHQxO1xyXG4kdG9vbHRpcC1iZzogXHRcdFx0XHQgXHRcdGRhcmtlbigkZ3JheS1kYXJrZXIsIDQlKTtcclxuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogXHQkdG9vbHRpcC1iZztcclxuXHJcblxyXG4vLz09IENhcm91c2VsXHJcbi8vXHJcblxyXG4kY2Fyb3VzZWwtbmF2cy1zaXplOiBcdFx0XHRcdCAgJGJ0bi1oZWlnaHQ7XHJcbiRjYXJvdXNlbC1uYXZzLWljb24tc2l6ZTogXHQgIDE5cHg7XHJcbiRjYXJvdXNlbC1uYXZzLWJnOiAgICAgICAgICAgICR3aGl0ZS1jb2xvcjtcclxuJGNhcm91c2VsLW5hdnMtY29sb3I6IFx0XHRcdCAgJGdyYXktZGFya2VyO1xyXG4kY2Fyb3VzZWwtZG90cy1zaXplOiBcdFx0XHRcdCAgNnB4O1xyXG4kY2Fyb3VzZWwtZG90cy1jb2xvcjogXHQgIFx0ICAkZ3JheS1kYXJrO1xyXG5cclxuLy8gSGVybyBTbGlkZXJcclxuJGhlcm8tc2xpZGVyLW1pbi1oZWlnaHQ6ICAgICAgNTgwcHg7XHJcblxyXG4vLz09IENvdW50ZG93blxyXG4vL1xyXG5cclxuJGNvdW50ZG93bi1ib3gtc2l6ZTogICAgICAgICAgNDhweDtcclxuJGNvdW50ZG93bi1mb250LXNpemU6ICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuMzc1KSk7IC8vIH4yMnB4XHJcbiRjb3VudGRvd24tbGFiZWwtc2l6ZTogICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuNzUpKTsgLy8gfjEycHhcclxuXHJcblxyXG4vLz09IE1lZGlhIHF1ZXJpZXMgKHJlc3BvbnNpdmUgYnJlYWNrcG9pbnRzKVxyXG4vLyMjIERlc2NrdG9wLCBUYWJsZXQsIE1vYmlsZVxyXG5cclxuJHNjcmVlbi14bDogMTIwMHB4O1xyXG4kc2NyZWVuLWxnOiA5OTFweDtcclxuJHNjcmVlbi1tZDogNzY4cHg7XHJcbiRzY3JlZW4tc206IDU3NnB4O1xyXG4kc2NyZWVuLXhzOiAzNjBweDtcclxuXHJcbiRuYXYtY29sbGFwc2U6ICAgICAxMDcwcHg7XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 7095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit/add-edit.component */ 4498);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products/products.module */ 8980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _products_products_module__WEBPACK_IMPORTED_MODULE_2__.ProductsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _products_products_module__WEBPACK_IMPORTED_MODULE_2__.ProductsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_0__.AddEditComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _products_products_module__WEBPACK_IMPORTED_MODULE_2__.ProductsModule], exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _products_products_module__WEBPACK_IMPORTED_MODULE_2__.ProductsModule] }); })();


/***/ }),

/***/ 816:
/*!*********************************************!*\
  !*** ./src/app/admin/shared/admin.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminGuard": () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _account_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../account/shared/auth.service */ 1544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);





class AdminGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        return this.authService.user.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((user) => (user && user.roles.admin ? true : false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((authorized) => {
            if (!authorized) {
                this.router.navigate(['/register-login']);
            }
        }));
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_account_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AdminGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/home/home.component */ 1494);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart/cart.component */ 4918);
/* harmony import */ var _admin_add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/add-edit/add-edit.component */ 4498);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 439);
/* harmony import */ var _admin_shared_admin_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/shared/admin.guard */ 816);
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout/checkout.component */ 1594);
/* harmony import */ var _account_register_login_register_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account/register-login/register-login.component */ 6985);
/* harmony import */ var _account_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account/orders/orders.component */ 1748);
/* harmony import */ var _account_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account/profile/profile.component */ 1102);
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account/account.component */ 6885);
/* harmony import */ var _products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/products-list/products-list.component */ 2702);
/* harmony import */ var _products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/product-detail/product-detail.component */ 1305);
/* harmony import */ var _checkout_complete_complete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./checkout/complete/complete.component */ 5448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
















const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'products', component: _products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_10__.ProductsListComponent },
    { path: 'products/:id', component: _products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__.ProductDetailComponent },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__.CartComponent },
    { path: 'admin/add', component: _admin_add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_2__.AddEditComponent, canActivate: [_admin_shared_admin_guard__WEBPACK_IMPORTED_MODULE_4__.AdminGuard] },
    {
        path: 'admin/edit/:id',
        component: _admin_add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_2__.AddEditComponent,
        canActivate: [_admin_shared_admin_guard__WEBPACK_IMPORTED_MODULE_4__.AdminGuard]
    },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__.CheckoutComponent },
    { path: 'register-login', component: _account_register_login_register_login_component__WEBPACK_IMPORTED_MODULE_6__.RegisterLoginComponent },
    {
        path: 'account',
        component: _account_account_component__WEBPACK_IMPORTED_MODULE_9__.AccountComponent,
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'orders', component: _account_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__.OrdersComponent },
            { path: 'profile', component: _account_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__.ProfileComponent }
        ]
    },
    { path: 'order-complete', component: _checkout_complete_complete_component__WEBPACK_IMPORTED_MODULE_12__.CompleteComponent },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__.PageNotFoundComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        _admin_shared_admin_guard__WEBPACK_IMPORTED_MODULE_4__.AdminGuard,
    ], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_shared_offcanvas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/shared/offcanvas.service */ 9917);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _core_navigation_off_canvas_navigation_off_canvas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/navigation-off-canvas/navigation-off-canvas.component */ 7647);
/* harmony import */ var _core_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/top-bar/top-bar.component */ 2054);
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/header/header.component */ 3556);
/* harmony import */ var _core_content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/content/content.component */ 1481);








const _c0 = function (a0) {
  return {
    "offcanvas-open": a0
  };
};

class AppComponent {
  constructor(offcanvasService) {
    this.offcanvasService = offcanvasService;
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_shared_offcanvas_service__WEBPACK_IMPORTED_MODULE_0__.OffcanvasService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 6,
  vars: 5,
  consts: [[1, "main-wrapper", 3, "ngClass"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-navigation-off-canvas")(3, "app-top-bar")(4, "app-header")(5, "app-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.offcanvasService.offcanvasNavigationOpen)));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _core_navigation_off_canvas_navigation_off_canvas_component__WEBPACK_IMPORTED_MODULE_1__.NavigationOffCanvasComponent, _core_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__.TopBarComponent, _core_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _core_content_content_component__WEBPACK_IMPORTED_MODULE_4__.ContentComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ 2808);
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products/products.module */ 8980);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _checkout_checkout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout/checkout.module */ 8400);
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/account.module */ 3879);
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.module */ 7095);
/* harmony import */ var _angular_fire_compat___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/ */ 1879);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat/database */ 2575);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart.component */ 4918);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
// Modules















// Components






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        _angular_fire_compat___WEBPACK_IMPORTED_MODULE_13__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.firebase),
        _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_14__.AngularFireDatabaseModule,
        _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuthModule,
        _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_16__.AngularFireStorageModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrModule.forRoot(),
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
        _products_products_module__WEBPACK_IMPORTED_MODULE_0__.ProductsModule,
        _checkout_checkout_module__WEBPACK_IMPORTED_MODULE_3__.CheckoutModule,
        _account_account_module__WEBPACK_IMPORTED_MODULE_4__.AccountModule,
        _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__.AdminModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent,
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__.CartComponent,
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__.PageNotFoundComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_fire_compat___WEBPACK_IMPORTED_MODULE_13__.AngularFireModule, _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_14__.AngularFireDatabaseModule,
        _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuthModule,
        _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_16__.AngularFireStorageModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrModule, _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
        _products_products_module__WEBPACK_IMPORTED_MODULE_0__.ProductsModule,
        _checkout_checkout_module__WEBPACK_IMPORTED_MODULE_3__.CheckoutModule,
        _account_account_module__WEBPACK_IMPORTED_MODULE_4__.AccountModule,
        _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__.AdminModule] }); })();


/***/ }),

/***/ 4918:
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartComponent": () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/cart.service */ 8085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_price_price_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/price/price.component */ 6422);
/* harmony import */ var _core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/page-title/page-title.component */ 9526);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);







function CartComponent_tbody_17_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 17)(3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 20)(6, "h4", 21)(7, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 4)(10, "div", 23)(11, "div", 24)(12, "div", 25)(13, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_tbody_17_tr_1_Template_button_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const item_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.decreaseAmount(item_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CartComponent_tbody_17_tr_1_Template_input_ngModelChange_15_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const item_r4 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](item_r4.amount = $event); })("blur", function CartComponent_tbody_17_tr_1_Template_input_blur_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const item_r4 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.checkAmount(item_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 28)(17, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_tbody_17_tr_1_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const item_r4 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.increaseAmount(item_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "app-price", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td", 5)(25, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_tbody_17_tr_1_Template_a_click_25_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const item_r4 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.onRemoveItem($event, item_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", item_r4.product.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r4.product.imageURLs[0], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", item_r4.product.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item_r4.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("product", item_r4.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 7, item_r4.product.price * item_r4.amount));
} }
function CartComponent_tbody_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CartComponent_tbody_17_tr_1_Template, 27, 9, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
function CartComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody")(1, "tr")(2, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "There are no items in your cart..");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} }
const _c0 = function () { return { title: "Cart" }; };
const _c1 = function (a0) { return [a0]; };
class CartComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    ngOnInit() {
        this.items = this.cartService.getItems();
        this.total = this.cartService.getTotal();
        this.cartSubscription = this.cartService.itemsChanged.subscribe((items) => {
            this.items = items;
            this.total = this.cartService.getTotal();
        });
    }
    onClearCart(event) {
        event.preventDefault();
        event.stopPropagation();
        this.cartService.clearCart();
    }
    onRemoveItem(event, item) {
        event.preventDefault();
        event.stopPropagation();
        this.cartService.removeItem(item);
    }
    increaseAmount(item) {
        this.cartService.updateItemAmount(item, item.amount + 1);
    }
    decreaseAmount(item) {
        const newAmount = item.amount === 1 ? 1 : item.amount - 1;
        this.cartService.updateItemAmount(item, newAmount);
    }
    checkAmount(item) {
        this.cartService.updateItemAmount(item, item.amount < 1 || !item.amount || isNaN(item.amount) ? 1 : item.amount);
    }
    ngOnDestroy() {
        this.cartSubscription.unsubscribe();
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
CartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 35, vars: 9, consts: [["title", "Cart", 3, "children"], [1, "container", "padding-bottom-3x", "mb-1"], [1, "table-responsive", "shopping-cart"], [1, "table"], [1, "text-center"], [1, "text-right"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [4, "ngIf", "ngIfElse"], ["noItemsInCart", ""], [1, "shopping-cart-footer"], [1, "column"], [1, "column", "text-lg"], [1, "text-medium"], ["routerLink", "/products", 1, "btn", "btn-outline-secondary"], [1, "icon-arrow-left"], ["routerLink", "/checkout", 1, "btn", "btn-success"], [4, "ngFor", "ngForOf"], [1, "product-item"], [1, "product-thumb", 3, "routerLink"], ["alt", "Product", 3, "src"], [1, "product-info"], [1, "product-title"], [3, "routerLink"], [1, "count-input"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "text", "placeholder", "", 1, "form-control", "text-center", 3, "ngModel", "ngModelChange", "blur"], [1, "input-group-append"], [1, "text-center", "text-lg", "text-medium"], [3, "product"], ["href", "#", "data-toggle", "tooltip", "title", "Remove item", 1, "remove-from-cart", 3, "click"], [1, "icon-cross"], ["colspan", "5"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-page-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "table", 3)(4, "thead")(5, "tr")(6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 5)(15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_Template_button_click_15_listener($event) { return ctx.onClearCart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Clear Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CartComponent_tbody_17_Template, 2, 1, "tbody", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CartComponent_ng_template_18_Template, 4, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Total: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 9)(28, "div", 10)(29, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\u00A0Back to Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 10)(33, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("children", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.items.length)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 4, ctx.total));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_price_price_component__WEBPACK_IMPORTED_MODULE_1__.PriceComponent, _core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__.PageTitleComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe], styles: [".form-control[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.form-control[_ngcontent-%COMP%]::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control[_ngcontent-%COMP%]:disabled, .form-control[readonly][_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\ninput[type=date].form-control[_ngcontent-%COMP%], input[type=time].form-control[_ngcontent-%COMP%], input[type=datetime-local].form-control[_ngcontent-%COMP%], input[type=month].form-control[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n          appearance: none;\n}\nselect.form-control[_ngcontent-%COMP%]:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #495057;\n}\nselect.form-control[_ngcontent-%COMP%]:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n.form-control-file[_ngcontent-%COMP%], .form-control-range[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.col-form-label[_ngcontent-%COMP%] {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n.col-form-label-lg[_ngcontent-%COMP%] {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n.col-form-label-sm[_ngcontent-%COMP%] {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.form-control-plaintext[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0;\n  margin-bottom: 0;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n.form-control-plaintext.form-control-sm[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .form-control-plaintext.form-control[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .form-control-plaintext.input-group-text[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .form-control-plaintext.input-group-text[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .form-control-plaintext.btn[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .form-control-plaintext.btn[_ngcontent-%COMP%], .form-control-plaintext.form-control-lg[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .form-control-plaintext.form-control[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .form-control-plaintext.input-group-text[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .form-control-plaintext.input-group-text[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .form-control-plaintext.btn[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .form-control-plaintext.btn[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n}\n.form-control-sm[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n.form-control-lg[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\nselect.form-control[size][_ngcontent-%COMP%], select.form-control[multiple][_ngcontent-%COMP%] {\n  height: auto;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  height: auto;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-text[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.25rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n.form-row[_ngcontent-%COMP%]    > .col[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]    > [class*=col-][_ngcontent-%COMP%] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.form-check[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem;\n}\n.form-check-input[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem;\n}\n.form-check-input[disabled][_ngcontent-%COMP%]    ~ .form-check-label[_ngcontent-%COMP%], .form-check-input[_ngcontent-%COMP%]:disabled    ~ .form-check-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.form-check-label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.form-check-inline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n.form-check-inline[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n}\n.valid-feedback[_ngcontent-%COMP%] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #28a745;\n}\n.valid-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.9);\n  border-radius: 0.25rem;\n}\n.form-row[_ngcontent-%COMP%]    > .col[_ngcontent-%COMP%]    > .valid-tooltip[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]    > [class*=col-][_ngcontent-%COMP%]    > .valid-tooltip[_ngcontent-%COMP%] {\n  left: 5px;\n}\n.was-validated[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:valid    ~ .valid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:valid    ~ .valid-tooltip[_ngcontent-%COMP%], .is-valid[_ngcontent-%COMP%]    ~ .valid-feedback[_ngcontent-%COMP%], .is-valid[_ngcontent-%COMP%]    ~ .valid-tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n.was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:valid, .form-control.is-valid[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  padding-right: calc(1.5em + 0.75rem) !important;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:valid:focus, .form-control.is-valid[_ngcontent-%COMP%]:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%]:valid, select.form-control.is-valid[_ngcontent-%COMP%] {\n  padding-right: 3rem !important;\n  background-position: right 1.5rem center;\n}\n.was-validated[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%]:valid, textarea.form-control.is-valid[_ngcontent-%COMP%] {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n.was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:valid, .custom-select.is-valid[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  padding-right: calc(0.75em + 2.3125rem) !important;\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0.75rem center/8px 10px no-repeat, #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem) no-repeat;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:valid:focus, .custom-select.is-valid[_ngcontent-%COMP%]:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:valid    ~ .form-check-label[_ngcontent-%COMP%], .form-check-input.is-valid[_ngcontent-%COMP%]    ~ .form-check-label[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.was-validated[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:valid    ~ .valid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:valid    ~ .valid-tooltip[_ngcontent-%COMP%], .form-check-input.is-valid[_ngcontent-%COMP%]    ~ .valid-feedback[_ngcontent-%COMP%], .form-check-input.is-valid[_ngcontent-%COMP%]    ~ .valid-tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid    ~ .custom-control-label[_ngcontent-%COMP%], .custom-control-input.is-valid[_ngcontent-%COMP%]    ~ .custom-control-label[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-valid[_ngcontent-%COMP%]    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  border-color: #28a745;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-valid[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  border-color: #34ce57;\n  background-color: #34ce57;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid:focus    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-valid[_ngcontent-%COMP%]:focus    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid:focus:not(:checked)    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-valid[_ngcontent-%COMP%]:focus:not(:checked)    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  border-color: #28a745;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:valid    ~ .custom-file-label[_ngcontent-%COMP%], .custom-file-input.is-valid[_ngcontent-%COMP%]    ~ .custom-file-label[_ngcontent-%COMP%] {\n  border-color: #28a745;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:valid:focus    ~ .custom-file-label[_ngcontent-%COMP%], .custom-file-input.is-valid[_ngcontent-%COMP%]:focus    ~ .custom-file-label[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: #dc3545;\n}\n.invalid-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.25rem;\n}\n.form-row[_ngcontent-%COMP%]    > .col[_ngcontent-%COMP%]    > .invalid-tooltip[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]    > [class*=col-][_ngcontent-%COMP%]    > .invalid-tooltip[_ngcontent-%COMP%] {\n  left: 5px;\n}\n.was-validated[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:invalid    ~ .invalid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:invalid    ~ .invalid-tooltip[_ngcontent-%COMP%], .is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%], .is-invalid[_ngcontent-%COMP%]    ~ .invalid-tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n.was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:invalid, .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + 0.75rem) !important;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:invalid:focus, .form-control.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%]:invalid, select.form-control.is-invalid[_ngcontent-%COMP%] {\n  padding-right: 3rem !important;\n  background-position: right 1.5rem center;\n}\n.was-validated[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%]:invalid, textarea.form-control.is-invalid[_ngcontent-%COMP%] {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n.was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:invalid, .custom-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  padding-right: calc(0.75em + 2.3125rem) !important;\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") right 0.75rem center/8px 10px no-repeat, #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\") center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem) no-repeat;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:invalid:focus, .custom-select.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:invalid    ~ .form-check-label[_ngcontent-%COMP%], .form-check-input.is-invalid[_ngcontent-%COMP%]    ~ .form-check-label[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.was-validated[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:invalid    ~ .invalid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:invalid    ~ .invalid-tooltip[_ngcontent-%COMP%], .form-check-input.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%], .form-check-input.is-invalid[_ngcontent-%COMP%]    ~ .invalid-tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:invalid    ~ .custom-control-label[_ngcontent-%COMP%], .custom-control-input.is-invalid[_ngcontent-%COMP%]    ~ .custom-control-label[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:invalid    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-invalid[_ngcontent-%COMP%]    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  border-color: #dc3545;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:invalid:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-invalid[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  border-color: #e4606d;\n  background-color: #e4606d;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:invalid:focus    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-invalid[_ngcontent-%COMP%]:focus    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:invalid:focus:not(:checked)    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-invalid[_ngcontent-%COMP%]:focus:not(:checked)    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  border-color: #dc3545;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:invalid    ~ .custom-file-label[_ngcontent-%COMP%], .custom-file-input.is-invalid[_ngcontent-%COMP%]    ~ .custom-file-label[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:invalid:focus    ~ .custom-file-label[_ngcontent-%COMP%], .custom-file-input.is-invalid[_ngcontent-%COMP%]:focus    ~ .custom-file-label[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.form-inline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n.form-inline[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 576px) {\n  .form-inline[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0;\n  }\n  .form-inline[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 0 0 auto;\n    flex-flow: row wrap;\n    align-items: center;\n    margin-bottom: 0;\n  }\n  .form-inline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline[_ngcontent-%COMP%]   .form-control-plaintext[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .form-inline[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%], .form-inline[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .form-inline[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: auto;\n    padding-left: 0;\n  }\n  .form-inline[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n    position: relative;\n    flex-shrink: 0;\n    margin-top: 0;\n    margin-right: 0.25rem;\n    margin-left: 0;\n  }\n  .form-inline[_ngcontent-%COMP%]   .custom-control[_ngcontent-%COMP%] {\n    align-items: center;\n    justify-content: center;\n  }\n  .form-inline[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n.shopping-cart[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.shopping-cart[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.shopping-cart[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.shopping-cart[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .shopping-cart[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .shopping-cart[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .shopping-cart[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  vertical-align: middle !important;\n}\n.shopping-cart[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 17px;\n  padding-bottom: 17px;\n  border-width: 1px;\n}\n.shopping-cart[_ngcontent-%COMP%]   .remove-from-cart[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #ff5252;\n  font-size: 18px;\n  line-height: 1;\n  text-decoration: none;\n}\n.shopping-cart[_ngcontent-%COMP%]   .count-input[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  width: 170px;\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  min-width: 150px;\n  margin-top: 5px;\n  margin-bottom: 3px;\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%], .shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%] {\n  width: 130px;\n  padding-right: 20px;\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n@media screen and (max-width: 860px) {\n  .shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    > em[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-style: normal;\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n  padding-top: 5px;\n  font-size: 16px;\n  font-weight: 500;\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  transition: color 0.3s;\n  color: #374250;\n  line-height: 1.5;\n  text-decoration: none;\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #0da9ef;\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: inline;\n  margin-left: 6px;\n  font-weight: 500;\n}\n.input-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]:focus, .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]:focus, .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]:focus {\n  z-index: 3;\n}\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]    + .form-control[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]    + .custom-select[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]    + .custom-file[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]    + .form-control[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]    + .custom-select[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]    + .custom-file[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]    + .form-control[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]    + .custom-select[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]    + .custom-file[_ngcontent-%COMP%] {\n  margin-left: -1px;\n}\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]:not(:last-child), .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]:not(:first-child), .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]:not(:last-child)   .custom-file-label[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]:not(:last-child)   .custom-file-label[_ngcontent-%COMP%]::before {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]:not(:first-child)   .custom-file-label[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]:not(:first-child)   .custom-file-label[_ngcontent-%COMP%]::before {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group-prepend[_ngcontent-%COMP%], .input-group-append[_ngcontent-%COMP%] {\n  display: flex;\n}\n.input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .input-group-append[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%], .input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .input-group-text[_ngcontent-%COMP%], .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]    + .input-group-text[_ngcontent-%COMP%], .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%], .input-group-append[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%], .input-group-append[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .input-group-text[_ngcontent-%COMP%], .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]    + .input-group-text[_ngcontent-%COMP%], .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\n  margin-left: -1px;\n}\n.input-group-prepend[_ngcontent-%COMP%] {\n  margin-right: -1px;\n}\n.input-group-append[_ngcontent-%COMP%] {\n  margin-left: -1px;\n}\n.input-group-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n.input-group-text[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%], .input-group-text[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]:not(:last-child)    > .btn[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]:not(:last-child)    > .input-group-text[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]:last-child    > .btn[_ngcontent-%COMP%]:not(:last-child):not(.dropdown-toggle), .input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]:last-child    > .input-group-text[_ngcontent-%COMP%]:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]:not(:first-child)    > .btn[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]:not(:first-child)    > .input-group-text[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]:first-child    > .btn[_ngcontent-%COMP%]:not(:first-child), .input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]:first-child    > .input-group-text[_ngcontent-%COMP%]:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.shopping-cart-footer[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  padding: 10px 0;\n  border-top: 1px solid #e1e7ec;\n}\n.shopping-cart-footer[_ngcontent-%COMP%]    > .column[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 5px 0;\n  vertical-align: middle;\n}\n.shopping-cart-footer[_ngcontent-%COMP%]    > .column[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n.shopping-cart-footer[_ngcontent-%COMP%]    > .column[_ngcontent-%COMP%]:last-child   .btn[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 15px;\n}\n@media (max-width: 768px) {\n  .shopping-cart-footer[_ngcontent-%COMP%]    > .column[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .shopping-cart-footer[_ngcontent-%COMP%]    > .column[_ngcontent-%COMP%]:last-child {\n    text-align: center;\n  }\n  .shopping-cart-footer[_ngcontent-%COMP%]    > .column[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 12px 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxfZm9ybXMuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcdmVuZG9yXFxfcmZzLnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYm9yZGVyLXJhZGl1cy5zY3NzIiwiLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX3RyYW5zaXRpb24uc2NzcyIsImNhcnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfZm9ybXMuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9ncmFkaWVudHMuc2NzcyIsIi4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9icmVha3BvaW50cy5zY3NzIiwiLi5cXC4uXFxzY3NzXFxoZWxwZXJzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQzJlc0M7RUQxZXRDLHlCQUFBO0VFMEtJLGVBQUE7RUZ2S0osZ0JDbVI0QjtFRGxSNUIsZ0JDdVI0QjtFRHRSNUIsY0NEUztFREVULHNCQ1RTO0VEVVQsNEJBQUE7RUFDQSx5QkFBQTtFR0FFLHNCQUFBO0VDRkUsd0VKUUo7QUtWRjtBRE1NO0VKZE47SUllUSxnQkFBQTtFQ0hOO0FBQ0Y7QUxRRTtFQUNFLDZCQUFBO0VBQ0EsU0FBQTtBS05KO0FDVkU7RUFDRSxjQUFBO0VBQ0Esc0JMUk87RUtTUCxxQkxzZG9DO0VLcmRwQyxVQUFBO0VBS0UsZ0RMcVh3QjtBSTdXOUI7QUxNRTtFQUNFLGNDeEJPO0VEMEJQLFVBQUE7QUtMSjtBTGFFO0VBRUUseUJDeENPO0VEMENQLFVBQUE7QUtiSjtBTHFCRTs7OztFQUNFLHdCQUFBO1VBQUEsZ0JBQUE7QUtmSjtBTHFCRTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7QUtsQko7QUxxQkU7RUFNRSxjQy9ETztFRGdFUCxzQkN2RU87QUkrQ1g7QUw2QkE7O0VBRUUsY0FBQTtFQUNBLFdBQUE7QUsxQkY7QUxvQ0E7RUFDRSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUVpRUUsa0JBQUE7RUYvREYsZ0JDZ000QjtBSWpPOUI7QUxvQ0E7RUFDRSwrQkFBQTtFQUNBLGtDQUFBO0VFMEVJLGtCQUFBO0VGeEVKLGdCQzZINEI7QUk5SjlCO0FMb0NBO0VBQ0UsZ0NBQUE7RUFDQSxtQ0FBQTtFRW1FSSxtQkFBQTtFRmpFSixnQkN1SDRCO0FJeEo5QjtBTDBDQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFRW9ESSxlQUFBO0VGbERKLGdCQ21LNEI7RURsSzVCLGNDbkhTO0VEb0hULDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBS3ZDRjtBTHlDRTs7Ozs7Ozs7O0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0FLaENKO0FMNENBOzs7OztFQUNFLGtDQzZWc0M7RUQ1VnRDLHVCQUFBO0VFMkJJLG1CQUFBO0VGekJKLGdCQytFNEI7RUV4TjFCLHFCQUFBO0FFcUdKO0FMd0NBOzs7OztFQUNFLGdDQ3NWc0M7RURyVnRDLG9CQUFBO0VFbUJJLGtCQUFBO0VGakJKLGdCQ3NFNEI7RUV2TjFCLHFCQUFBO0FFaUhKO0FMc0NFO0VBRUUsWUFBQTtBS3BDSjtBTHdDQTtFQUNFLFlBQUE7QUtyQ0Y7QUw2Q0E7RUFDRSxtQkMyVXNDO0FJclh4QztBTDZDQTtFQUNFLGNBQUE7RUFDQSxtQkM0VHNDO0FJdFd4QztBTGtEQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBSy9DRjtBTGlERTs7RUFFRSxrQkFBQTtFQUNBLGlCQUFBO0FLL0NKO0FMd0RBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJDaVNzQztBSXRWeEM7QUx3REE7RUFDRSxrQkFBQTtFQUNBLGtCQzZSc0M7RUQ1UnRDLHFCQUFBO0FLckRGO0FMd0RFO0VBRUUsY0N6Tk87QUlrS1g7QUwyREE7RUFDRSxnQkFBQTtBS3hERjtBTDJEQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJDOFFzQztBSXRVeEM7QUwyREU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkN5UW9DO0VEeFFwQyxjQUFBO0FLekRKO0FDcEpFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkwyY29DO0VDdFZwQyxrQkFBQTtFSW5IQSxjTnFOcUM7QUs5RHpDO0FDcEpFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUp3SEUsbUJBQUE7RUl0SEYsZ0JMdU8wQjtFS3RPMUIsV0FBQTtFQUNBLHdDQUFBO0VIOUNBLHNCQUFBO0FFc01KO0FDbkpJO0VBRUUsU0FBQTtBRG9KTjtBQy9JSTs7OztFQUVFLGNBQUE7QURvSk47QUNsTUk7RUFvREUscUJOa0xtQztFTS9LakMsK0NBQUE7RUFDQSxpUkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkRBQUE7RUFDQSxnRUFBQTtBRGdKUjtBQzdJTTtFQUNFLHFCTnVLaUM7RU10S2pDLGdEQUFBO0FEK0lSO0FDL01JO0VBeUVJLDhCQUFBO0VBQ0Esd0NBQUE7QUQwSVI7QUNwTkk7RUFtRkksb0NMNlhnQztFSzVYaEMsa0ZBQUE7QURxSVI7QUN6Tkk7RUEyRkUscUJOMkltQztFTXhJakMsa0RBQUE7RUFDQSx1akJBQUE7QURnSVI7QUM3SE07RUFDRSxxQk5tSWlDO0VNbElqQyxnREFBQTtBRCtIUjtBQ3hITTtFQUNFLGNOMEhpQztBS0N6QztBQ3hITTs7O0VBRUUsY0FBQTtBRDJIUjtBQ3BITTtFQUNFLGNONkdpQztBS1V6QztBQ3JIUTtFQUNFLHFCTjBHK0I7QUthekM7QUNsSFE7RUFDRSxxQkFBQTtFQzVKTix5QkQ2SjJCO0FEb0gvQjtBQy9HUTtFQUNFLGdEQUFBO0FEaUhWO0FDOUdRO0VBQ0UscUJOeUYrQjtBS3VCekM7QUN2R007RUFDRSxxQk4rRWlDO0FLMkJ6QztBQ3RHUTtFQUNFLHFCTjBFK0I7RU16RS9CLGdEQUFBO0FEd0dWO0FDelBFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkwyY29DO0VDdFZwQyxrQkFBQTtFSW5IQSxjTnFOcUM7QUt1Q3pDO0FDelBFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUp3SEUsbUJBQUE7RUl0SEYsZ0JMdU8wQjtFS3RPMUIsV0FBQTtFQUNBLHdDQUFBO0VIOUNBLHNCQUFBO0FFMlNKO0FDeFBJO0VBRUUsU0FBQTtBRHlQTjtBQ3BQSTs7OztFQUVFLGNBQUE7QUR5UE47QUN2U0k7RUFvREUscUJOa0xtQztFTS9LakMsK0NBQUE7RUFDQSw0VUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkRBQUE7RUFDQSxnRUFBQTtBRHFQUjtBQ2xQTTtFQUNFLHFCTnVLaUM7RU10S2pDLGdEQUFBO0FEb1BSO0FDcFRJO0VBeUVJLDhCQUFBO0VBQ0Esd0NBQUE7QUQrT1I7QUN6VEk7RUFtRkksb0NMNlhnQztFSzVYaEMsa0ZBQUE7QUQwT1I7QUM5VEk7RUEyRkUscUJOMkltQztFTXhJakMsa0RBQUE7RUFDQSxrbkJBQUE7QURxT1I7QUNsT007RUFDRSxxQk5tSWlDO0VNbElqQyxnREFBQTtBRG9PUjtBQzdOTTtFQUNFLGNOMEhpQztBS3NHekM7QUM3Tk07OztFQUVFLGNBQUE7QURnT1I7QUN6Tk07RUFDRSxjTjZHaUM7QUsrR3pDO0FDMU5RO0VBQ0UscUJOMEcrQjtBS2tIekM7QUN2TlE7RUFDRSxxQkFBQTtFQzVKTix5QkQ2SjJCO0FEeU4vQjtBQ3BOUTtFQUNFLGdEQUFBO0FEc05WO0FDbk5RO0VBQ0UscUJOeUYrQjtBSzRIekM7QUM1TU07RUFDRSxxQk4rRWlDO0FLZ0l6QztBQzNNUTtFQUNFLHFCTjBFK0I7RU16RS9CLGdEQUFBO0FENk1WO0FMeEhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUsySEY7QUx0SEU7RUFDRSxXQUFBO0FLd0hKO0FHdlZJO0VSb09BO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtFS3NISjtFTGxIRTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VLb0hKO0VMaEhFO0lBQ0UscUJBQUE7SUFDQSxXQUFBO0lBQ0Esc0JBQUE7RUtrSEo7RUw5R0U7SUFDRSxxQkFBQTtFS2dISjtFTDdHRTs7SUFFRSxXQUFBO0VLK0dKO0VMMUdFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFSzRHSjtFTDFHRTtJQUNFLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7SUFDQSxxQkNnTGtDO0lEL0tsQyxjQUFBO0VLNEdKO0VMekdFO0lBQ0UsbUJBQUE7SUFDQSx1QkFBQTtFSzJHSjtFTHpHRTtJQUNFLGdCQUFBO0VLMkdKO0FBQ0Y7QUEzYkE7RUFDRSxtQkFBQTtBQThiRjtBQTdiRTtFQUFTLGdCQUFBO0FBZ2NYO0FBL2JFO0VBQU8sU0FBQTtBQWtjVDtBQS9iSTs7OztFQUNPLGlDQUFBO0FBb2NYO0FBbGNFO0VBRUksaUJBQUE7RUFDQSxvQkFBQTtFQUVGLGlCQUFBO0FBa2NKO0FBaGNFO0VBQ0UscUJBQUE7RUFDQSxjSUhvQjtFSklwQixlSWdDc0I7RUovQnRCLGNBQUE7RUFDQSxxQkFBQTtBQWtjSjtBQWhjRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFrY0o7QUFoY0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUUsZUFBQTtFQUNBLGtCQUFBO0FBaWNOO0FBL2JJOztFQUVFLG1CQUFBO0VBQ0Esc0JBQUE7QUFpY047QUEvYkk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFpY047QUFoY007RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQWtjUjtBQWhjTTtFQVBGO0lBT3lDLGFBQUE7RUFvYzNDO0FBQ0Y7QUFuY0k7RUFDRSxjQUFBO0VBQ0EsZUlDbUI7QUpvY3pCO0FBcGNNO0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtBQXFjVjtBQWpjSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFRSxlSWRrQjtFSmVsQixnQkFBQTtBQWtjUjtBQWhjTTtFQUNFLHNCQUFBO0VBQ0EsY0luRWlCO0VKb0VqQixnQklZaUI7RUpYakIscUJBQUE7QUFrY1I7QUFqY1E7RUFBVSxjSTdETTtBSmlnQnhCO0FBbGNNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFvY1I7QUE5YkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBaWNGO0FBL2JFOzs7RUFHRSxrQkFBQTtFQUNBLGNBQUE7RUFHQSxTQUFBO0VBQ0EsZ0JBQUE7QUErYko7QUE1Ykk7OztFQUNFLFVBQUE7QUFnY047QUE3Ykk7Ozs7Ozs7OztFQUdFLGlCQUFBO0FBcWNOO0FBL2JJOztFRnhGQSwwQkFBQTtFQUNBLDZCQUFBO0FFMmhCSjtBQW5jSTs7RUYzRUEseUJBQUE7RUFDQSw0QkFBQTtBRWtoQko7QUFuY0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFxY0o7QUFuY0k7RUZsR0EsMEJBQUE7RUFDQSw2QkFBQTtBRXdpQko7QUFyY0k7RUZ0RkEseUJBQUE7RUFDQSw0QkFBQTtBRThoQko7QUFyY0E7O0VBRUUsYUFBQTtBQXdjRjtBQW5jRTs7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFzY0o7QUFuY0U7Ozs7Ozs7O0VBSUUsaUJBQUE7QUF5Y0o7QUF0Y0E7RUFBdUIsa0JBQUE7QUEwY3ZCO0FBemNBO0VBQXNCLGlCQUFBO0FBNmN0QjtBQTNjQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlSTNHd0I7RUo0R3hCLGdCSjBINEI7RUl6SDVCLGdCSjhINEI7RUk3SDVCLGNKMUpTO0VJMkpULGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkpsS1M7RUltS1QseUJBQUE7RUYxSkUsc0JBQUE7QUV5bUJKO0FBM2NFOztFQUVFLGFBQUE7QUE2Y0o7QUF6YkE7Ozs7OztFRnBLSSwwQkFBQTtFQUNBLDZCQUFBO0FFc21CSjtBQTFiQTs7Ozs7O0VGL0pJLHlCQUFBO0VBQ0EsNEJBQUE7QUVrbUJKO0FBM2JBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUE4YkY7QUE3YkU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQStiSjtBQTliSTtFQUNFLGlCQUFBO0FBZ2NOO0FBL2JNO0VBRUksZUFBQTtFQUNBLGlCQUFBO0FBZ2NWO0FBNWJJO0VBYkY7SUFjSSxjQUFBO0lBQ0EsV0FBQTtFQStiSjtFQTliSTtJQUFlLGtCQUFBO0VBaWNuQjtFQWhjSTtJQUNFLFdBQUE7SUFDQSx5QkFBQTtFQWtjTjtBQUNGIiwiZmlsZSI6ImNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1uby1xdWFsaWZ5aW5nLXR5cGVcblxuLy9cbi8vIFRleHR1YWwgZm9ybSBjb250cm9sc1xuLy9cblxuLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xuICBwYWRkaW5nOiAkaW5wdXQtcGFkZGluZy15ICRpbnB1dC1wYWRkaW5nLXg7XG4gIGZvbnQtZmFtaWx5OiAkaW5wdXQtZm9udC1mYW1pbHk7XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgkaW5wdXQtZm9udC1zaXplKTtcbiAgZm9udC13ZWlnaHQ6ICRpbnB1dC1mb250LXdlaWdodDtcbiAgbGluZS1oZWlnaHQ6ICRpbnB1dC1saW5lLWhlaWdodDtcbiAgY29sb3I6ICRpbnB1dC1jb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJnO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6ICRpbnB1dC1ib3JkZXItd2lkdGggc29saWQgJGlucHV0LWJvcmRlci1jb2xvcjtcblxuICAvLyBOb3RlOiBUaGlzIGhhcyBubyBlZmZlY3Qgb24gPHNlbGVjdD5zIGluIHNvbWUgYnJvd3NlcnMsIGR1ZSB0byB0aGUgbGltaXRlZCBzdHlsYWJpbGl0eSBvZiBgPHNlbGVjdD5gcyBpbiBDU1MuXG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGlucHV0LWJvcmRlci1yYWRpdXMsIDApO1xuXG4gIEBpbmNsdWRlIGJveC1zaGFkb3coJGlucHV0LWJveC1zaGFkb3cpO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKCRpbnB1dC10cmFuc2l0aW9uKTtcblxuICAvLyBVbnN0eWxlIHRoZSBjYXJldCBvbiBgPHNlbGVjdD5gcyBpbiBJRTEwKy5cbiAgJjo6LW1zLWV4cGFuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICB9XG5cbiAgLy8gQ3VzdG9taXplIHRoZSBgOmZvY3VzYCBzdGF0ZSB0byBpbWl0YXRlIG5hdGl2ZSBXZWJLaXQgc3R5bGVzLlxuICBAaW5jbHVkZSBmb3JtLWNvbnRyb2wtZm9jdXMoJGlnbm9yZS13YXJuaW5nOiB0cnVlKTtcblxuICAvLyBQbGFjZWhvbGRlclxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjtcbiAgICAvLyBPdmVycmlkZSBGaXJlZm94J3MgdW51c3VhbCBkZWZhdWx0IG9wYWNpdHk7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8xMTUyNi5cbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgLy8gRGlzYWJsZWQgYW5kIHJlYWQtb25seSBpbnB1dHNcbiAgLy9cbiAgLy8gSFRNTDUgc2F5cyB0aGF0IGNvbnRyb2xzIHVuZGVyIGEgZmllbGRzZXQgPiBsZWdlbmQ6Zmlyc3QtY2hpbGQgd29uJ3QgYmVcbiAgLy8gZGlzYWJsZWQgaWYgdGhlIGZpZWxkc2V0IGlzIGRpc2FibGVkLiBEdWUgdG8gaW1wbGVtZW50YXRpb24gZGlmZmljdWx0eSwgd2VcbiAgLy8gZG9uJ3QgaG9ub3IgdGhhdCBlZGdlIGNhc2U7IHdlIHN0eWxlIHRoZW0gYXMgZGlzYWJsZWQgYW55d2F5LlxuICAmOmRpc2FibGVkLFxuICAmW3JlYWRvbmx5XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWRpc2FibGVkLWJnO1xuICAgIC8vIGlPUyBmaXggZm9yIHVucmVhZGFibGUgZGlzYWJsZWQgY29udGVudDsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTE2NTUuXG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbmlucHV0W3R5cGU9XCJ0aW1lXCJdLFxuaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdLFxuaW5wdXRbdHlwZT1cIm1vbnRoXCJdIHtcbiAgJi5mb3JtLWNvbnRyb2wge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7IC8vIEZpeCBhcHBlYXJhbmNlIGZvciBkYXRlIGlucHV0cyBpbiBTYWZhcmlcbiAgfVxufVxuXG5zZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgLy8gUmVtb3ZlIHNlbGVjdCBvdXRsaW5lIGZyb20gc2VsZWN0IGJveCBpbiBGRlxuICAmOi1tb3otZm9jdXNyaW5nIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAwICRpbnB1dC1jb2xvcjtcbiAgfVxuXG4gICY6Zm9jdXM6Oi1tcy12YWx1ZSB7XG4gICAgLy8gU3VwcHJlc3MgdGhlIG5lc3RlZCBkZWZhdWx0IHdoaXRlIHRleHQgb24gYmx1ZSBiYWNrZ3JvdW5kIGhpZ2hsaWdodCBnaXZlbiB0b1xuICAgIC8vIHRoZSBzZWxlY3RlZCBvcHRpb24gdGV4dCB3aGVuIHRoZSAoc3RpbGwgY2xvc2VkKSA8c2VsZWN0PiByZWNlaXZlcyBmb2N1c1xuICAgIC8vIGluIElFIGFuZCAodW5kZXIgY2VydGFpbiBjb25kaXRpb25zKSBFZGdlLCBhcyBpdCBsb29rcyBiYWQgYW5kIGNhbm5vdCBiZSBtYWRlIHRvXG4gICAgLy8gbWF0Y2ggdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIG5hdGl2ZSB3aWRnZXQuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTkzOTguXG4gICAgY29sb3I6ICRpbnB1dC1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmc7XG4gIH1cbn1cblxuLy8gTWFrZSBmaWxlIGlucHV0cyBiZXR0ZXIgbWF0Y2ggdGV4dCBpbnB1dHMgYnkgZm9yY2luZyB0aGVtIHRvIG5ldyBsaW5lcy5cbi5mb3JtLWNvbnRyb2wtZmlsZSxcbi5mb3JtLWNvbnRyb2wtcmFuZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuLy9cbi8vIExhYmVsc1xuLy9cblxuLy8gRm9yIHVzZSB3aXRoIGhvcml6b250YWwgYW5kIGlubGluZSBmb3Jtcywgd2hlbiB5b3UgbmVlZCB0aGUgbGFiZWwgKG9yIGxlZ2VuZClcbi8vIHRleHQgdG8gYWxpZ24gd2l0aCB0aGUgZm9ybSBjb250cm9scy5cbi5jb2wtZm9ybS1sYWJlbCB7XG4gIHBhZGRpbmctdG9wOiBhZGQoJGlucHV0LXBhZGRpbmcteSwgJGlucHV0LWJvcmRlci13aWR0aCk7XG4gIHBhZGRpbmctYm90dG9tOiBhZGQoJGlucHV0LXBhZGRpbmcteSwgJGlucHV0LWJvcmRlci13aWR0aCk7XG4gIG1hcmdpbi1ib3R0b206IDA7IC8vIE92ZXJyaWRlIHRoZSBgPGxhYmVsPi88bGVnZW5kPmAgZGVmYXVsdFxuICBAaW5jbHVkZSBmb250LXNpemUoaW5oZXJpdCk7IC8vIE92ZXJyaWRlIHRoZSBgPGxlZ2VuZD5gIGRlZmF1bHRcbiAgbGluZS1oZWlnaHQ6ICRpbnB1dC1saW5lLWhlaWdodDtcbn1cblxuLmNvbC1mb3JtLWxhYmVsLWxnIHtcbiAgcGFkZGluZy10b3A6IGFkZCgkaW5wdXQtcGFkZGluZy15LWxnLCAkaW5wdXQtYm9yZGVyLXdpZHRoKTtcbiAgcGFkZGluZy1ib3R0b206IGFkZCgkaW5wdXQtcGFkZGluZy15LWxnLCAkaW5wdXQtYm9yZGVyLXdpZHRoKTtcbiAgQGluY2x1ZGUgZm9udC1zaXplKCRpbnB1dC1mb250LXNpemUtbGcpO1xuICBsaW5lLWhlaWdodDogJGlucHV0LWxpbmUtaGVpZ2h0LWxnO1xufVxuXG4uY29sLWZvcm0tbGFiZWwtc20ge1xuICBwYWRkaW5nLXRvcDogYWRkKCRpbnB1dC1wYWRkaW5nLXktc20sICRpbnB1dC1ib3JkZXItd2lkdGgpO1xuICBwYWRkaW5nLWJvdHRvbTogYWRkKCRpbnB1dC1wYWRkaW5nLXktc20sICRpbnB1dC1ib3JkZXItd2lkdGgpO1xuICBAaW5jbHVkZSBmb250LXNpemUoJGlucHV0LWZvbnQtc2l6ZS1zbSk7XG4gIGxpbmUtaGVpZ2h0OiAkaW5wdXQtbGluZS1oZWlnaHQtc207XG59XG5cblxuLy8gUmVhZG9ubHkgY29udHJvbHMgYXMgcGxhaW4gdGV4dFxuLy9cbi8vIEFwcGx5IGNsYXNzIHRvIGEgcmVhZG9ubHkgaW5wdXQgdG8gbWFrZSBpdCBhcHBlYXIgbGlrZSByZWd1bGFyIHBsYWluXG4vLyB0ZXh0ICh3aXRob3V0IGFueSBib3JkZXIsIGJhY2tncm91bmQgY29sb3IsIGZvY3VzIGluZGljYXRvcilcblxuLmZvcm0tY29udHJvbC1wbGFpbnRleHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6ICRpbnB1dC1wYWRkaW5nLXkgMDtcbiAgbWFyZ2luLWJvdHRvbTogMDsgLy8gbWF0Y2ggaW5wdXRzIGlmIHRoaXMgY2xhc3MgY29tZXMgb24gaW5wdXRzIHdpdGggZGVmYXVsdCBtYXJnaW5zXG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgkaW5wdXQtZm9udC1zaXplKTtcbiAgbGluZS1oZWlnaHQ6ICRpbnB1dC1saW5lLWhlaWdodDtcbiAgY29sb3I6ICRpbnB1dC1wbGFpbnRleHQtY29sb3I7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGggMDtcblxuICAmLmZvcm0tY29udHJvbC1zbSxcbiAgJi5mb3JtLWNvbnRyb2wtbGcge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59XG5cblxuLy8gRm9ybSBjb250cm9sIHNpemluZ1xuLy9cbi8vIEJ1aWxkIG9uIGAuZm9ybS1jb250cm9sYCB3aXRoIG1vZGlmaWVyIGNsYXNzZXMgdG8gZGVjcmVhc2Ugb3IgaW5jcmVhc2UgdGhlXG4vLyBoZWlnaHQgYW5kIGZvbnQtc2l6ZSBvZiBmb3JtIGNvbnRyb2xzLlxuLy9cbi8vIFJlcGVhdGVkIGluIGBfaW5wdXRfZ3JvdXAuc2Nzc2AgdG8gYXZvaWQgU2FzcyBleHRlbmQgaXNzdWVzLlxuXG4uZm9ybS1jb250cm9sLXNtIHtcbiAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LXNtO1xuICBwYWRkaW5nOiAkaW5wdXQtcGFkZGluZy15LXNtICRpbnB1dC1wYWRkaW5nLXgtc207XG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgkaW5wdXQtZm9udC1zaXplLXNtKTtcbiAgbGluZS1oZWlnaHQ6ICRpbnB1dC1saW5lLWhlaWdodC1zbTtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkaW5wdXQtYm9yZGVyLXJhZGl1cy1zbSk7XG59XG5cbi5mb3JtLWNvbnRyb2wtbGcge1xuICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtbGc7XG4gIHBhZGRpbmc6ICRpbnB1dC1wYWRkaW5nLXktbGcgJGlucHV0LXBhZGRpbmcteC1sZztcbiAgQGluY2x1ZGUgZm9udC1zaXplKCRpbnB1dC1mb250LXNpemUtbGcpO1xuICBsaW5lLWhlaWdodDogJGlucHV0LWxpbmUtaGVpZ2h0LWxnO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRpbnB1dC1ib3JkZXItcmFkaXVzLWxnKTtcbn1cblxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnNcbnNlbGVjdC5mb3JtLWNvbnRyb2wge1xuICAmW3NpemVdLFxuICAmW211bHRpcGxlXSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5cbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLy8gRm9ybSBncm91cHNcbi8vXG4vLyBEZXNpZ25lZCB0byBoZWxwIHdpdGggdGhlIG9yZ2FuaXphdGlvbiBhbmQgc3BhY2luZyBvZiB2ZXJ0aWNhbCBmb3Jtcy4gRm9yXG4vLyBob3Jpem9udGFsIGZvcm1zLCB1c2UgdGhlIHByZWRlZmluZWQgZ3JpZCBjbGFzc2VzLlxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206ICRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b207XG59XG5cbi5mb3JtLXRleHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogJGZvcm0tdGV4dC1tYXJnaW4tdG9wO1xufVxuXG5cbi8vIEZvcm0gZ3JpZFxuLy9cbi8vIFNwZWNpYWwgcmVwbGFjZW1lbnQgZm9yIG91ciBncmlkIHN5c3RlbSdzIGAucm93YCBmb3IgdGlnaHRlciBmb3JtIGxheW91dHMuXG5cbi5mb3JtLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAtJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGggKiAuNTtcbiAgbWFyZ2luLWxlZnQ6IC0kZm9ybS1ncmlkLWd1dHRlci13aWR0aCAqIC41O1xuXG4gID4gLmNvbCxcbiAgPiBbY2xhc3MqPVwiY29sLVwiXSB7XG4gICAgcGFkZGluZy1yaWdodDogJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGggKiAuNTtcbiAgICBwYWRkaW5nLWxlZnQ6ICRmb3JtLWdyaWQtZ3V0dGVyLXdpZHRoICogLjU7XG4gIH1cbn1cblxuXG4vLyBDaGVja2JveGVzIGFuZCByYWRpb3Ncbi8vXG4vLyBJbmRlbnQgdGhlIGxhYmVscyB0byBwb3NpdGlvbiByYWRpb3MvY2hlY2tib3hlcyBhcyBoYW5naW5nIGNvbnRyb2xzLlxuXG4uZm9ybS1jaGVjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogJGZvcm0tY2hlY2staW5wdXQtZ3V0dGVyO1xufVxuXG4uZm9ybS1jaGVjay1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXk7XG4gIG1hcmdpbi1sZWZ0OiAtJGZvcm0tY2hlY2staW5wdXQtZ3V0dGVyO1xuXG4gIC8vIFVzZSBbZGlzYWJsZWRdIGFuZCA6ZGlzYWJsZWQgZm9yIHdvcmthcm91bmQgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yODI0N1xuICAmW2Rpc2FibGVkXSB+IC5mb3JtLWNoZWNrLWxhYmVsLFxuICAmOmRpc2FibGVkIH4gLmZvcm0tY2hlY2stbGFiZWwge1xuICAgIGNvbG9yOiAkdGV4dC1tdXRlZDtcbiAgfVxufVxuXG4uZm9ybS1jaGVjay1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7IC8vIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIGJvdHRvbSBtYXJnaW5cbn1cblxuLmZvcm0tY2hlY2staW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMDsgLy8gT3ZlcnJpZGUgYmFzZSAuZm9ybS1jaGVja1xuICBtYXJnaW4tcmlnaHQ6ICRmb3JtLWNoZWNrLWlubGluZS1tYXJnaW4teDtcblxuICAvLyBVbmRvIC5mb3JtLWNoZWNrLWlucHV0IGRlZmF1bHRzIGFuZCBhZGQgc29tZSBgbWFyZ2luLXJpZ2h0YC5cbiAgLmZvcm0tY2hlY2staW5wdXQge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6ICRmb3JtLWNoZWNrLWlubGluZS1pbnB1dC1tYXJnaW4teDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG5cbi8vIEZvcm0gdmFsaWRhdGlvblxuLy9cbi8vIFByb3ZpZGUgZmVlZGJhY2sgdG8gdXNlcnMgd2hlbiBmb3JtIGZpZWxkIHZhbHVlcyBhcmUgdmFsaWQgb3IgaW52YWxpZC4gV29ya3Ncbi8vIHByaW1hcmlseSBmb3IgY2xpZW50LXNpZGUgdmFsaWRhdGlvbiB2aWEgc2NvcGVkIGA6aW52YWxpZGAgYW5kIGA6dmFsaWRgXG4vLyBwc2V1ZG8tY2xhc3NlcyBidXQgYWxzbyBpbmNsdWRlcyBgLmlzLWludmFsaWRgIGFuZCBgLmlzLXZhbGlkYCBjbGFzc2VzIGZvclxuLy8gc2VydmVyIHNpZGUgdmFsaWRhdGlvbi5cblxuQGVhY2ggJHN0YXRlLCAkZGF0YSBpbiAkZm9ybS12YWxpZGF0aW9uLXN0YXRlcyB7XG4gIEBpbmNsdWRlIGZvcm0tdmFsaWRhdGlvbi1zdGF0ZSgkc3RhdGUsIG1hcC1nZXQoJGRhdGEsIGNvbG9yKSwgbWFwLWdldCgkZGF0YSwgaWNvbikpO1xufVxuXG4vLyBJbmxpbmUgZm9ybXNcbi8vXG4vLyBNYWtlIGZvcm1zIGFwcGVhciBpbmxpbmUoLWJsb2NrKSBieSBhZGRpbmcgdGhlIGAuZm9ybS1pbmxpbmVgIGNsYXNzLiBJbmxpbmVcbi8vIGZvcm1zIGJlZ2luIHN0YWNrZWQgb24gZXh0cmEgc21hbGwgKG1vYmlsZSkgZGV2aWNlcyBhbmQgdGhlbiBnbyBpbmxpbmUgd2hlblxuLy8gdmlld3BvcnRzIHJlYWNoIDw3NjhweC5cbi8vXG4vLyBSZXF1aXJlcyB3cmFwcGluZyBpbnB1dHMgYW5kIGxhYmVscyB3aXRoIGAuZm9ybS1ncm91cGAgZm9yIHByb3BlciBkaXNwbGF5IG9mXG4vLyBkZWZhdWx0IEhUTUwgZm9ybSBjb250cm9scyBhbmQgb3VyIGN1c3RvbSBmb3JtIGNvbnRyb2xzIChlLmcuLCBpbnB1dCBncm91cHMpLlxuXG4uZm9ybS1pbmxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvLyBQcmV2ZW50IHNob3J0ZXIgZWxlbWVudHMgZnJvbSBncm93aW5nIHRvIHNhbWUgaGVpZ2h0IGFzIG90aGVycyAoZS5nLiwgc21hbGwgYnV0dG9ucyBncm93aW5nIHRvIG5vcm1hbCBzaXplZCBidXR0b24gaGVpZ2h0KVxuXG4gIC8vIEJlY2F1c2Ugd2UgdXNlIGZsZXgsIHRoZSBpbml0aWFsIHNpemluZyBvZiBjaGVja2JveGVzIGlzIGNvbGxhcHNlZCBhbmRcbiAgLy8gZG9lc24ndCBvY2N1cHkgdGhlIGZ1bGwtd2lkdGggKHdoaWNoIGlzIHdoYXQgd2Ugd2FudCBmb3IgeHMgZ3JpZCB0aWVyKSxcbiAgLy8gc28gd2UgZm9yY2UgdGhhdCBoZXJlLlxuICAuZm9ybS1jaGVjayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAvLyBLaWNrIGluIHRoZSBpbmxpbmVcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICAgIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC8vIElubGluZS1ibG9jayBhbGwgdGhlIHRoaW5ncyBmb3IgXCJpbmxpbmVcIlxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAvLyBBbGxvdyBmb2xrcyB0byAqbm90KiB1c2UgYC5mb3JtLWdyb3VwYFxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IGF1dG87IC8vIFByZXZlbnQgbGFiZWxzIGZyb20gc3RhY2tpbmcgYWJvdmUgaW5wdXRzIGluIGAuZm9ybS1ncm91cGBcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdGF0aWMgY29udHJvbHMgYmVoYXZlIGxpa2UgcmVndWxhciBvbmVzXG4gICAgLmZvcm0tY29udHJvbC1wbGFpbnRleHQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5pbnB1dC1ncm91cCxcbiAgICAuY3VzdG9tLXNlbGVjdCB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gb24gcmFkaW9zL2NoZWNrYm94ZXMgdGhhdCB3ZXJlIHVzZWQgZm9yIHN0YWNraW5nLCBhbmRcbiAgICAvLyB0aGVuIHVuZG8gdGhlIGZsb2F0aW5nIG9mIHJhZGlvcyBhbmQgY2hlY2tib3hlcyB0byBtYXRjaC5cbiAgICAuZm9ybS1jaGVjayB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxuICAgIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXg7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuY3VzdG9tLWNvbnRyb2wge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cbi8vIENvbG9yIHN5c3RlbVxuXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4kZ3JheXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXG4gICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXG4gICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXG4gICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICksXG4gICRncmF5c1xuKTtcblxuJGJsdWU6ICAgICMwMDdiZmYgIWRlZmF1bHQ7XG4kaW5kaWdvOiAgIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICAjNmY0MmMxICFkZWZhdWx0O1xuJHBpbms6ICAgICNlODNlOGMgIWRlZmF1bHQ7XG4kcmVkOiAgICAgI2RjMzU0NSAhZGVmYXVsdDtcbiRvcmFuZ2U6ICAjZmQ3ZTE0ICFkZWZhdWx0O1xuJHllbGxvdzogICNmZmMxMDcgIWRlZmF1bHQ7XG4kZ3JlZW46ICAgIzI4YTc0NSAhZGVmYXVsdDtcbiR0ZWFsOiAgICAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICAgICMxN2EyYjggIWRlZmF1bHQ7XG5cbiRjb2xvcnM6ICgpICFkZWZhdWx0O1xuJGNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJibHVlXCI6ICAgICAgICRibHVlLFxuICAgIFwiaW5kaWdvXCI6ICAgICAkaW5kaWdvLFxuICAgIFwicHVycGxlXCI6ICAgICAkcHVycGxlLFxuICAgIFwicGlua1wiOiAgICAgICAkcGluayxcbiAgICBcInJlZFwiOiAgICAgICAgJHJlZCxcbiAgICBcIm9yYW5nZVwiOiAgICAgJG9yYW5nZSxcbiAgICBcInllbGxvd1wiOiAgICAgJHllbGxvdyxcbiAgICBcImdyZWVuXCI6ICAgICAgJGdyZWVuLFxuICAgIFwidGVhbFwiOiAgICAgICAkdGVhbCxcbiAgICBcImN5YW5cIjogICAgICAgJGN5YW4sXG4gICAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSxcbiAgICBcImdyYXlcIjogICAgICAgJGdyYXktNjAwLFxuICAgIFwiZ3JheS1kYXJrXCI6ICAkZ3JheS04MDBcbiAgKSxcbiAgJGNvbG9yc1xuKTtcblxuJHByaW1hcnk6ICAgICAgICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJGN5YW4gIWRlZmF1bHQ7XG4kd2FybmluZzogICAgICAgJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAgICAkcmVkICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG5cbiR0aGVtZS1jb2xvcnM6ICgpICFkZWZhdWx0O1xuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LFxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXG4gICksXG4gICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIFNldCBhIHNwZWNpZmljIGp1bXAgcG9pbnQgZm9yIHJlcXVlc3RpbmcgY29sb3IganVtcHNcbiR0aGVtZS1jb2xvci1pbnRlcnZhbDogICAgICA4JSAhZGVmYXVsdDtcblxuLy8gVGhlIHlpcSBsaWdodG5lc3MgdmFsdWUgdGhhdCBkZXRlcm1pbmVzIHdoZW4gdGhlIGxpZ2h0bmVzcyBvZiBjb2xvciBjaGFuZ2VzIGZyb20gXCJkYXJrXCIgdG8gXCJsaWdodFwiLiBBY2NlcHRhYmxlIHZhbHVlcyBhcmUgYmV0d2VlbiAwIGFuZCAyNTUuXG4keWlxLWNvbnRyYXN0ZWQtdGhyZXNob2xkOiAgMTUwICFkZWZhdWx0O1xuXG4vLyBDdXN0b21pemUgdGhlIGxpZ2h0IGFuZCBkYXJrIHRleHQgY29sb3JzIGZvciB1c2UgaW4gb3VyIFlJUSBjb2xvciBjb250cmFzdCBmdW5jdGlvbi5cbiR5aXEtdGV4dC1kYXJrOiAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4keWlxLXRleHQtbGlnaHQ6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4vLyBDaGFyYWN0ZXJzIHdoaWNoIGFyZSBlc2NhcGVkIGJ5IHRoZSBlc2NhcGUtc3ZnIGZ1bmN0aW9uXG4kZXNjYXBlZC1jaGFyYWN0ZXJzOiAoXG4gIChcIjxcIiwgXCIlM2NcIiksXG4gIChcIj5cIiwgXCIlM2VcIiksXG4gIChcIiNcIiwgXCIlMjNcIiksXG4gIChcIihcIiwgXCIlMjhcIiksXG4gIChcIilcIiwgXCIlMjlcIiksXG4pICFkZWZhdWx0O1xuXG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcHJlZmVycy1yZWR1Y2VkLW1vdGlvbi1tZWRpYS1xdWVyeTogICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeTogICAgICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkLCBubyBsb25nZXIgYWZmZWN0cyBhbnkgY29tcGlsZWQgQ1NTXG4kZW5hYmxlLWdyaWQtY2xhc3NlczogICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcG9pbnRlci1jdXJzb3ItZm9yLWJ1dHRvbnM6ICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmludC1zdHlsZXM6ICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplczogICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXZhbGlkYXRpb24taWNvbnM6ICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZGVwcmVjYXRpb24tbWVzc2FnZXM6ICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuXG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xuJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDA6IDAsXG4gICAgMTogKCRzcGFjZXIgKiAuMjUpLFxuICAgIDI6ICgkc3BhY2VyICogLjUpLFxuICAgIDM6ICRzcGFjZXIsXG4gICAgNDogKCRzcGFjZXIgKiAxLjUpLFxuICAgIDU6ICgkc3BhY2VyICogMylcbiAgKSxcbiAgJHNwYWNlcnNcbik7XG5cbi8vIFRoaXMgdmFyaWFibGUgYWZmZWN0cyB0aGUgYC5oLSpgIGFuZCBgLnctKmAgY2xhc3Nlcy5cbiRzaXplczogKCkgIWRlZmF1bHQ7XG4kc2l6ZXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDI1OiAyNSUsXG4gICAgNTA6IDUwJSxcbiAgICA3NTogNzUlLFxuICAgIDEwMDogMTAwJSxcbiAgICBhdXRvOiBhdXRvXG4gICksXG4gICRzaXplc1xuKTtcblxuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuJGxpbmstZGVjb3JhdGlvbjogICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkbGluay1jb2xvciwgMTUlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgIHVuZGVybGluZSAhZGVmYXVsdDtcbi8vIERhcmtlbiBwZXJjZW50YWdlIGZvciBsaW5rcyB3aXRoIGAudGV4dC0qYCBjbGFzcyAoZS5nLiBgLnRleHQtc3VjY2Vzc2ApXG4kZW1waGFzaXplZC1saW5rLWhvdmVyLWRhcmtlbi1wZXJjZW50YWdlOiAxNSUgIWRlZmF1bHQ7XG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogICAxcmVtICFkZWZhdWx0O1xuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xuQGluY2x1ZGUgX2Fzc2VydC1zdGFydHMtYXQtemVybygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcblxuXG4vLyBHcmlkIGNvbnRhaW5lcnNcbi8vXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgc206IDU0MHB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NjBweCxcbiAgeGw6IDExNDBweFxuKSAhZGVmYXVsdDtcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGNvbnRhaW5lci1tYXgtd2lkdGhzLCBcIiRjb250YWluZXItbWF4LXdpZHRoc1wiKTtcblxuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgICAgMTIgIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJGdyaWQtcm93LWNvbHVtbnM6ICAgICAgICAgICAgNiAhZGVmYXVsdDtcblxuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiRib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcblxuJHJvdW5kZWQtcGlsbDogICAgICAgICAgICAgICAgNTByZW0gIWRlZmF1bHQ7XG5cbiRib3gtc2hhZG93LXNtOiAgICAgICAgICAgICAgIDAgLjEyNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctbGc6ICAgICAgICAgICAgICAgMCAxcmVtIDNyZW0gcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY29tcG9uZW50LWFjdGl2ZS1iZzogICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG5cbiRjYXJldC13aWR0aDogICAgICAgICAgICAgICAgIC4zZW0gIWRlZmF1bHQ7XG4kY2FyZXQtdmVydGljYWwtYWxpZ246ICAgICAgICAkY2FyZXQtd2lkdGggKiAuODUgIWRlZmF1bHQ7XG4kY2FyZXQtc3BhY2luZzogICAgICAgICAgICAgICAkY2FyZXQtd2lkdGggKiAuODUgIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLWJhc2U6ICAgICAgICAgICAgIGFsbCAuMnMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5IC4xNXMgbGluZWFyICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tY29sbGFwc2U6ICAgICAgICAgaGVpZ2h0IC4zNXMgZWFzZSAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWNvbGxhcHNlLXdpZHRoOiAgIHdpZHRoIC4zNXMgZWFzZSAhZGVmYXVsdDtcblxuJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvczogKCkgIWRlZmF1bHQ7XG4kZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zOiBqb2luKFxuICAoXG4gICAgKDIxIDkpLFxuICAgICgxNiA5KSxcbiAgICAoNCAzKSxcbiAgICAoMSAxKSxcbiAgKSxcbiAgJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvc1xuKTtcblxuLy8gVHlwb2dyYXBoeVxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIFwiTGliZXJhdGlvbiBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC44NzUgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodGVyOiAgICAgICAgIGxpZ2h0ZXIgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICA3MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiAgICAgICAgICBib2xkZXIgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNSAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjc1ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcblxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICAgICAgJHNwYWNlciAqIC41ICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogICAgICAgIDUwMCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogICAgICAgIDEuMiAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRkaXNwbGF5MS1zaXplOiAgICAgICAgICAgICAgIDZyZW0gIWRlZmF1bHQ7XG4kZGlzcGxheTItc2l6ZTogICAgICAgICAgICAgICA1LjVyZW0gIWRlZmF1bHQ7XG4kZGlzcGxheTMtc2l6ZTogICAgICAgICAgICAgICA0LjVyZW0gIWRlZmF1bHQ7XG4kZGlzcGxheTQtc2l6ZTogICAgICAgICAgICAgICAzLjVyZW0gIWRlZmF1bHQ7XG5cbiRkaXNwbGF5MS13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5Mi13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5My13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5NC13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5LWxpbmUtaGVpZ2h0OiAgICAgICAgICRoZWFkaW5ncy1saW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJGxlYWQtZm9udC1zaXplOiAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRsZWFkLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcblxuJHNtYWxsLWZvbnQtc2l6ZTogICAgICAgICAgICAgLjg3NWVtICFkZWZhdWx0O1xuXG4kdGV4dC1tdXRlZDogICAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRibG9ja3F1b3RlLXNtYWxsLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLXNtYWxsLWZvbnQtc2l6ZTogICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1mb250LXNpemU6ICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuXG4kaHItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJGhyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJG1hcmstcGFkZGluZzogICAgICAgICAgICAgICAgLjJlbSAhZGVmYXVsdDtcblxuJGR0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRrYmQtYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgLS4xcmVtIDAgcmdiYSgkYmxhY2ssIC4yNSkgIWRlZmF1bHQ7XG4kbmVzdGVkLWtiZC1mb250LXdlaWdodDogICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcblxuJGxpc3QtaW5saW5lLXBhZGRpbmc6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRtYXJrLWJnOiAgICAgICAgICAgICAgICAgICAgICNmY2Y4ZTMgIWRlZmF1bHQ7XG5cbiRoci1tYXJnaW4teTogICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG5cblxuLy8gVGFibGVzXG4vL1xuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXNtOiAgICAgICAuM3JlbSAhZGVmYXVsdDtcblxuJHRhYmxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtYmc6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNSkgIWRlZmF1bHQ7XG4kdGFibGUtaG92ZXItY29sb3I6ICAgICAgICAgICAkdGFibGUtY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kdGFibGUtYWN0aXZlLWJnOiAgICAgICAgICAgICAkdGFibGUtaG92ZXItYmcgIWRlZmF1bHQ7XG5cbiR0YWJsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kdGFibGUtaGVhZC1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kdGFibGUtaGVhZC1jb2xvcjogICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kdGFibGUtdGgtZm9udC13ZWlnaHQ6ICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kdGFibGUtZGFyay1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1iZzogICAgICAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1hY2NlbnQtYmc6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjA1KSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICR0YWJsZS1kYXJrLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstaG92ZXItYmc6ICAgICAgICAgcmdiYSgkd2hpdGUsIC4wNzUpICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAgICAgbGlnaHRlbigkdGFibGUtZGFyay1iZywgNy41JSkgIWRlZmF1bHQ7XG5cbiR0YWJsZS1zdHJpcGVkLW9yZGVyOiAgICAgICAgIG9kZCAhZGVmYXVsdDtcblxuJHRhYmxlLWNhcHRpb24tY29sb3I6ICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiR0YWJsZS1iZy1sZXZlbDogICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1sZXZlbDogICAgICAgICAgLTYgIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAgICAgICAgIC4zNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtZmFtaWx5OiAgICAgICBudWxsICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemU6ICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogICAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tZm9jdXMtd2lkdGg6ICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogICAgICAgcmdiYSgkY29tcG9uZW50LWFjdGl2ZS1iZywgLjI1KSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogIDAgMCAwICRpbnB1dC1idG4tZm9jdXMtd2lkdGggJGlucHV0LWJ0bi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206ICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTogICAgJGxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZzogICAgJGxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG5cbi8vIEJ1dHRvbnNcbi8vXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cblxuJGJ0bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteDogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRidG4tZm9udC1mYW1pbHk6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kYnRuLXdoaXRlLXNwYWNlOiAgICAgICAgICAgICBudWxsICFkZWZhdWx0OyAvLyBTZXQgdG8gYG5vd3JhcGAgdG8gcHJldmVudCB0ZXh0IHdyYXBwaW5nXG5cbiRidG4tcGFkZGluZy15LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQtc206ICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRidG4tcGFkZGluZy15LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRidG4tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kYnRuLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGJ0bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKCR3aGl0ZSwgLjE1KSwgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRidG4tZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAuNjUgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiAgICAgICBpbnNldCAwIDNweCA1cHggcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuXG4kYnRuLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRidG4tYmxvY2stc3BhY2luZy15OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4vLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRidG4tdHJhbnNpdGlvbjogICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRpbnB1dC1mb250LWZhbWlseTogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRpbnB1dC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRpbnB1dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgIGluc2V0IDAgMXB4IDFweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuJGlucHV0LWZvY3VzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAyNSUpICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggKiAyICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgJGlucHV0LXBhZGRpbmcteSAqIDIpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1oYWxmOiAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuNWVtLCAkaW5wdXQtcGFkZGluZy15KSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtaW5uZXItcXVhcnRlcjogICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjI1ZW0sICRpbnB1dC1wYWRkaW5nLXkgKiAuNSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteSAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQtc20gKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LXNtICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodC1sZyAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktbGcgKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcblxuJGlucHV0LXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRmb3JtLXRleHQtbWFyZ2luLXRvcDogICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWd1dHRlcjogICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXk6ICAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXg6ICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi14OiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlubGluZS1pbnB1dC1tYXJnaW4teDogICAgICAuMzEyNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWd1dHRlcjogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLXNwYWNlci14OiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtY3Vyc29yOiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplOiAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnOiAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnLXNpemU6ICAgICAgNTAlIDUwJSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm94LXNoYWRvdzogICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aDogJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWxhYmVsLWNvbG9yOiAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYmc6ICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogIHJnYmEodGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpLCAuNSkgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm94LXNoYWRvdzogICBudWxsICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6ICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm9yZGVyLWNvbG9yOiAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWNvbG9yOiAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJveC1zaGFkb3c6ICAgIG51bGwgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2bDIuOTc0IDIuOTlMOCAyLjE5M3onLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6ICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc0JyB2aWV3Qm94PScwIDAgNCA0Jz48cGF0aCBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIGQ9J00wIDJoNCcvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm94LXNoYWRvdzogICBudWxsICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6ICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDUwJSAhZGVmYXVsdDtcbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXN3aXRjaC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgKiAxLjc1ICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplICogLjUgIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAgICAgICAgICBzdWJ0cmFjdCgkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUsICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoICogNCkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteTogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXg6ICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1mYW1pbHk6ICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplOiAgICAgICAgICAgJGlucHV0LWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodDogICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogICAxcmVtICFkZWZhdWx0OyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcbiRjdXN0b20tc2VsZWN0LWZvbnQtd2VpZ2h0OiAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWxpbmUtaGVpZ2h0OiAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWJnOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6ICAgICAgICAgICAgIDhweCAxMHB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6ICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJhY2tncm91bmQ6ICAgICAgICAgIGVzY2FwZS1zdmcoJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yKSByaWdodCAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggY2VudGVyIC8gJGN1c3RvbS1zZWxlY3QtYmctc2l6ZSBuby1yZXBlYXQgIWRlZmF1bHQ7IC8vIFVzZWQgc28gd2UgY2FuIGhhdmUgbXVsdGlwbGUgYmFja2dyb3VuZCBlbGVtZW50cyAoZS5nLiwgYXJyb3cgYW5kIGZlZWRiYWNrIGljb24pXG5cbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcGFkZGluZy1yaWdodDogYWRkKDFlbSAqIC43NSwgKDIgKiAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXkgKiAuNzUpICsgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogICAgICBjZW50ZXIgcmlnaHQgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXdpZHRoOiAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJveC1zaGFkb3c6ICAgICAgICAgIGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJvcmRlci1jb2xvcjogICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aDogICAgICAgICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAgICAwIDAgMCAkY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICAgICAgICAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1zbTogICAgICAgICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICAgICAgICAgICAkaW5wdXQtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogICAgICAgICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhbmdlLXRyYWNrLXdpZHRoOiAgICAgICAgICAxMDAlICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1oZWlnaHQ6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWN1cnNvcjogICAgICAgICBwb2ludGVyICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1iZzogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1ib3JkZXItcmFkaXVzOiAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYm94LXNoYWRvdzogICAgIGluc2V0IDAgLjI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoOiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXI6ICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIC4xcmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgMCAwIDAgMXB4ICRib2R5LWJnLCAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdy13aWR0aDogICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDsgLy8gRm9yIGZvY3VzIGJveCBzaGFkb3cgaXNzdWUgaW4gSUUvRWRnZVxuJGN1c3RvbS1yYW5nZS10aHVtYi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcblxuJGN1c3RvbS1maWxlLWhlaWdodDogICAgICAgICAgICAgICAgJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1oZWlnaHQtaW5uZXI6ICAgICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXIgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZGlzYWJsZWQtYmc6ICAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZmlsZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtcGFkZGluZy14OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvbnQtZmFtaWx5OiAgICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLXJhZGl1czogICAgICAgICAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3gtc2hhZG93OiAgICAgICAgICAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJ1dHRvbi1jb2xvcjogICAgICAgICAgJGN1c3RvbS1maWxlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJ1dHRvbi1iZzogICAgICAgICAgICAgJGlucHV0LWdyb3VwLWFkZG9uLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLXRleHQ6IChcbiAgZW46IFwiQnJvd3NlXCJcbikgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG5cbiRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6ICAgICAgICAgICRmb3JtLXRleHQtbWFyZ2luLXRvcCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogICAgICAgICB0aGVtZS1jb2xvcihcInN1Y2Nlc3NcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yOiAgICAgICB0aGVtZS1jb2xvcihcImRhbmdlclwiKSAhZGVmYXVsdDtcblxuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcn0nIGQ9J00yLjMgNi43M0wuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyB2aWV3Qm94PScwIDAgMTIgMTInPjxjaXJjbGUgY3g9JzYnIGN5PSc2JyByPSc0LjUnLz48cGF0aCBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNS44IDMuNmguNEw2IDYuNXonLz48Y2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyBzdHJva2U9J25vbmUnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiAoKSAhZGVmYXVsdDtcbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInZhbGlkXCI6IChcbiAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IsXG4gICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZFxuICAgICksXG4gICAgXCJpbnZhbGlkXCI6IChcbiAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcixcbiAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWRcbiAgICApLFxuICApLFxuICAkZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xuKTtcblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LWRyb3Bkb3duOiAgICAgICAgICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xuJHppbmRleC1zdGlja3k6ICAgICAgICAgICAgICAgICAgICAgMTAyMCAhZGVmYXVsdDtcbiR6aW5kZXgtZml4ZWQ6ICAgICAgICAgICAgICAgICAgICAgIDEwMzAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsLWJhY2tkcm9wOiAgICAgICAgICAgICAxMDQwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XG4kemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuXG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkZ3JheS0yMDAgJGdyYXktMjAwICRuYXYtdGFicy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTMwMCAkZ3JheS0zMDAgJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtZGl2aWRlci1jb2xvcjogICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRuYXYtZGl2aWRlci1tYXJnaW4teTogICAgICAgICAgICAgICRzcGFjZXIgKiAuNSAhZGVmYXVsdDtcblxuXG4vLyBOYXZiYXJcblxuJG5hdmJhci1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAqIC41ICFkZWZhdWx0O1xuJG5hdmJhci1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAgICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4vLyBDb21wdXRlIHRoZSBuYXZiYXItYnJhbmQgcGFkZGluZy15IHNvIHRoZSBuYXZiYXItYnJhbmQgd2lsbCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyBuYXZiYXItdGV4dCBhbmQgbmF2LWxpbmtcbiRuYXYtbGluay1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDIgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLWhlaWdodDogICAgICAgICAgICAgICAkbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZSAqICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1wYWRkaW5nLXk6ICAgICAgICAgICAgKCRuYXYtbGluay1oZWlnaHQgLSAkbmF2YmFyLWJyYW5kLWhlaWdodCkgKiAuNSAhZGVmYXVsdDtcblxuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAgICAgICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJG5hdmJhci1uYXYtc2Nyb2xsLW1heC1oZWlnaHQ6ICAgICAgNzV2aCAhZGVmYXVsdDtcblxuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC41KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNzUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yOiAgICAgICAgcmdiYSgkd2hpdGUsIC4yNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1pY29uLWJnOiAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1kYXJrLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1ib3JkZXItY29sb3I6ICByZ2JhKCR3aGl0ZSwgLjEpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuOSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjMpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItbGlnaHQtY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcblxuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cbiRkcm9wZG93bi1taW4td2lkdGg6ICAgICAgICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXNwYWNlcjogICAgICAgICAgICAgICAgICAgLjEyNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1jb2xvcjogICAgICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogICAgICBzdWJ0cmFjdCgkZHJvcGRvd24tYm9yZGVyLXJhZGl1cywgJGRyb3Bkb3duLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teTogICAgICAgICAkbmF2LWRpdmlkZXItbWFyZ2luLXkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm94LXNoYWRvdzogICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICBkYXJrZW4oJGdyYXktOTAwLCA1JSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24taGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAkZHJvcGRvd24tcGFkZGluZy15ICRkcm9wZG93bi1pdGVtLXBhZGRpbmcteCAhZGVmYXVsdDtcblxuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1saW5lLWhlaWdodDogICAgICAgICAgICAxLjI1ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLW91dGxpbmU6ICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJHBhZ2luYXRpb24tYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXMtc206ICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG5cblxuLy8gSnVtYm90cm9uXG5cbiRqdW1ib3Ryb24tcGFkZGluZzogICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kanVtYm90cm9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1iZzogICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIENhcmRzXG5cbiRjYXJkLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICBzdWJ0cmFjdCgkY2FyZC1ib3JkZXItcmFkaXVzLCAkY2FyZC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJGNhcmQtY2FwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wMykgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAqIC41ICFkZWZhdWx0O1xuJGNhcmQtZGVjay1tYXJnaW46ICAgICAgICAgICAgICAgICAgJGNhcmQtZ3JvdXAtbWFyZ2luICFkZWZhdWx0O1xuXG4kY2FyZC1jb2x1bW5zLWNvdW50OiAgICAgICAgICAgICAgICAzICFkZWZhdWx0O1xuJGNhcmQtY29sdW1ucy1nYXA6ICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRjYXJkLWNvbHVtbnMtbWFyZ2luOiAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICFkZWZhdWx0O1xuXG5cbi8vIFRvb2x0aXBzXG5cbiR0b29sdGlwLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyMDBweCAhZGVmYXVsdDtcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiR0b29sdGlwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIC44cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkdG9vbHRpcC1iZyAhZGVmYXVsdDtcblxuLy8gRm9ybSB0b29sdGlwcyBtdXN0IGNvbWUgYWZ0ZXIgcmVndWxhciB0b29sdGlwc1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteDogICAgICR0b29sdGlwLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtZm9udC1zaXplOiAgICAgJHRvb2x0aXAtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1saW5lLWhlaWdodDogICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtb3BhY2l0eTogICAgICAgJHRvb2x0aXAtb3BhY2l0eSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtYm9yZGVyLXJhZGl1czogJHRvb2x0aXAtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBQb3BvdmVyc1xuXG4kcG9wb3Zlci1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJHBvcG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBvcG92ZXItbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjc2cHggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJHBvcG92ZXItaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgc3VidHJhY3QoJHBvcG92ZXItYm9yZGVyLXJhZGl1cywgJHBvcG92ZXItYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICAgICAgICAgICAgJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICBmYWRlLWluKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgLjA1KSAhZGVmYXVsdDtcblxuXG4vLyBUb2FzdHNcblxuJHRvYXN0LW1heC13aWR0aDogICAgICAgICAgICAgICAgICAgMzUwcHggIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0b2FzdC1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMSkgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNzVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJHRvYXN0LWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICByZ2JhKDAsIDAsIDAsIC4wNSkgIWRlZmF1bHQ7XG5cblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIDc1JSAhZGVmYXVsdDtcbiRiYWRnZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNGVtICFkZWZhdWx0O1xuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRiYWRnZS10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICRidG4tdHJhbnNpdGlvbiAhZGVmYXVsdDtcbiRiYWRnZS1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG5cbiRiYWRnZS1waWxsLXBhZGRpbmcteDogICAgICAgICAgICAgIC42ZW0gIWRlZmF1bHQ7XG4vLyBVc2UgYSBoaWdoZXIgdGhhbiBub3JtYWwgdmFsdWUgdG8gZW5zdXJlIGNvbXBsZXRlbHkgcm91bmRlZCBlZGdlcyB3aGVuXG4vLyBjdXN0b21pemluZyBwYWRkaW5nIG9yIGZvbnQtc2l6ZSBvbiBsYWJlbHMuXG4kYmFkZ2UtcGlsbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcblxuXG4vLyBNb2RhbHNcblxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4vLyBNYXJnaW4gYmV0d2VlbiBlbGVtZW50cyBpbiBmb290ZXIsIG11c3QgYmUgbG93ZXIgdGhhbiBvciBlcXVhbCB0byAyICogJG1vZGFsLWlubmVyLXBhZGRpbmdcbiRtb2RhbC1mb290ZXItbWFyZ2luLWJldHdlZW46ICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtZGlhbG9nLW1hcmdpbjogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogICAgICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kbW9kYWwtY29udGVudC1jb2xvcjogICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWlubmVyLWJvcmRlci1yYWRpdXM6IHN1YnRyYWN0KCRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXMsICRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG5cbiRtb2RhbC1iYWNrZHJvcC1iZzogICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgICAgICAgIC41ICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogICAgICAgICAgICAgICRtb2RhbC1oZWFkZXItcGFkZGluZy15ICRtb2RhbC1oZWFkZXItcGFkZGluZy14ICFkZWZhdWx0OyAvLyBLZWVwIHRoaXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cbiRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgIDgwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcblxuJG1vZGFsLWZhZGUtdHJhbnNmb3JtOiAgICAgICAgICAgICAgdHJhbnNsYXRlKDAsIC01MHB4KSAhZGVmYXVsdDtcbiRtb2RhbC1zaG93LXRyYW5zZm9ybTogICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kbW9kYWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0ICFkZWZhdWx0O1xuJG1vZGFsLXNjYWxlLXRyYW5zZm9ybTogICAgICAgICAgICAgc2NhbGUoMS4wMikgIWRlZmF1bHQ7XG5cblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRhbGVydC1iZy1sZXZlbDogICAgICAgICAgICAgICAgICAgIC0xMCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICAgICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xuJGFsZXJ0LWNvbG9yLWxldmVsOiAgICAgICAgICAgICAgICAgNiAhZGVmYXVsdDtcblxuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuNzUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIGluc2V0IDAgLjFyZW0gLjFyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgIDFzIGxpbmVhciBpbmZpbml0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xuXG5cbi8vIExpc3QgZ3JvdXBcblxuJGxpc3QtZ3JvdXAtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXk6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvciAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4kdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cblxuLy8gRmlndXJlc1xuXG4kZmlndXJlLWNhcHRpb24tZm9udC1zaXplOiAgICAgICAgICA5MCUgIWRlZmF1bHQ7XG4kZmlndXJlLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cblxuLy8gQnJlYWRjcnVtYnNcblxuJGJyZWFkY3J1bWItZm9udC1zaXplOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItcGFkZGluZy15OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBxdW90ZShcIi9cIikgIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIENhcm91c2VsXG5cbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgIC41ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtaG92ZXItb3BhY2l0eTogICAgIC45ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtdHJhbnNpdGlvbjogICAgICAgIG9wYWNpdHkgLjE1cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGVpZ2h0OiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhpdC1hcmVhLWhlaWdodDogMTBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3Itc3BhY2VyOiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci10cmFuc2l0aW9uOiAgICAgIG9wYWNpdHkgLjZzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jYXB0aW9uLXdpZHRoOiAgICAgICAgICAgICA3MCUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1pY29uLXdpZHRoOiAgICAgICAgMjBweCAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNUw0LjI1IDRsMi41LTIuNUw1LjI1IDB6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjVMMy43NSA0bC0yLjUgMi41TDIuNzUgOGw0LTQtNC00eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb246ICAgICAgIC42cyAhZGVmYXVsdDtcbiRjYXJvdXNlbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb24gZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIERlZmluZSB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBmaXJzdCBpZiB1c2luZyBtdWx0aXBsZSB0cmFuc2l0aW9ucyAoZS5nLiwgYHRyYW5zZm9ybSAycyBlYXNlLCBvcGFjaXR5IC41cyBlYXNlLW91dGApXG5cblxuLy8gU3Bpbm5lcnNcblxuJHNwaW5uZXItd2lkdGg6ICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0OiAgICAgICAgICAkc3Bpbm5lci13aWR0aCAhZGVmYXVsdDtcbiRzcGlubmVyLXZlcnRpY2FsLWFsaWduOiAgLS4xMjVlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aDogICAgLjI1ZW0gIWRlZmF1bHQ7XG5cbiRzcGlubmVyLXdpZHRoLXNtOiAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWhlaWdodC1zbTogICAgICAgJHNwaW5uZXItd2lkdGgtc20gIWRlZmF1bHQ7XG4kc3Bpbm5lci1ib3JkZXItd2lkdGgtc206IC4yZW0gIWRlZmF1bHQ7XG5cblxuLy8gQ2xvc2VcblxuJGNsb3NlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGNsb3NlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kY2xvc2UtdGV4dC1zaGFkb3c6ICAgICAgICAgICAgICAgICAwIDFweCAwICR3aGl0ZSAhZGVmYXVsdDtcblxuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgIDg3LjUlICFkZWZhdWx0O1xuJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgJHBpbmsgIWRlZmF1bHQ7XG5cbiRrYmQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGtiZC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4ka2JkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAkY29kZS1mb250LXNpemUgIWRlZmF1bHQ7XG4ka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4ka2JkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbiRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRwcmUtc2Nyb2xsYWJsZS1tYXgtaGVpZ2h0OiAgICAgICAgIDM0MHB4ICFkZWZhdWx0O1xuXG5cbi8vIFV0aWxpdGllc1xuXG4kZGlzcGxheXM6IG5vbmUsIGlubGluZSwgaW5saW5lLWJsb2NrLCBibG9jaywgdGFibGUsIHRhYmxlLXJvdywgdGFibGUtY2VsbCwgZmxleCwgaW5saW5lLWZsZXggIWRlZmF1bHQ7XG4kb3ZlcmZsb3dzOiBhdXRvLCBoaWRkZW4gIWRlZmF1bHQ7XG4kcG9zaXRpb25zOiBzdGF0aWMsIHJlbGF0aXZlLCBhYnNvbHV0ZSwgZml4ZWQsIHN0aWNreSAhZGVmYXVsdDtcbiR1c2VyLXNlbGVjdHM6IGFsbCwgYXV0bywgbm9uZSAhZGVmYXVsdDtcblxuXG4vLyBQcmludGluZ1xuXG4kcHJpbnQtcGFnZS1zaXplOiAgICAgICAgICAgICAgICAgICBhMyAhZGVmYXVsdDtcbiRwcmludC1ib2R5LW1pbi13aWR0aDogICAgICAgICAgICAgIG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIFwibGdcIikgIWRlZmF1bHQ7XG4iLCIvLyBzdHlsZWxpbnQtZGlzYWJsZSBwcm9wZXJ0eS1ibGFja2xpc3QsIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcblxuLy8gU0NTUyBSRlMgbWl4aW5cbi8vXG4vLyBBdXRvbWF0ZWQgcmVzcG9uc2l2ZSBmb250IHNpemVzXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9yZnMvYmxvYi92OC54L0xJQ0VOU0UpXG5cbi8vIENvbmZpZ3VyYXRpb25cblxuLy8gQmFzZSBmb250IHNpemVcbiRyZnMtYmFzZS1mb250LXNpemU6IDEuMjVyZW0gIWRlZmF1bHQ7XG4kcmZzLWZvbnQtc2l6ZS11bml0OiByZW0gIWRlZmF1bHQ7XG5cbkBpZiAkcmZzLWZvbnQtc2l6ZS11bml0ICE9IHJlbSBhbmQgJHJmcy1mb250LXNpemUtdW5pdCAhPSBweCB7XG4gIEBlcnJvciBcImAjeyRyZnMtZm9udC1zaXplLXVuaXR9YCBpcyBub3QgYSB2YWxpZCB1bml0IGZvciAkcmZzLWZvbnQtc2l6ZS11bml0LiBVc2UgYHB4YCBvciBgcmVtYC5cIjtcbn1cblxuLy8gQnJlYWtwb2ludCBhdCB3aGVyZSBmb250LXNpemUgc3RhcnRzIGRlY3JlYXNpbmcgaWYgc2NyZWVuIHdpZHRoIGlzIHNtYWxsZXJcbiRyZnMtYnJlYWtwb2ludDogMTIwMHB4ICFkZWZhdWx0O1xuJHJmcy1icmVha3BvaW50LXVuaXQ6IHB4ICFkZWZhdWx0O1xuXG5AaWYgJHJmcy1icmVha3BvaW50LXVuaXQgIT0gcHggYW5kICRyZnMtYnJlYWtwb2ludC11bml0ICE9IGVtIGFuZCAkcmZzLWJyZWFrcG9pbnQtdW5pdCAhPSByZW0ge1xuICBAZXJyb3IgXCJgI3skcmZzLWJyZWFrcG9pbnQtdW5pdH1gIGlzIG5vdCBhIHZhbGlkIHVuaXQgZm9yICRyZnMtYnJlYWtwb2ludC11bml0LiBVc2UgYHB4YCwgYGVtYCBvciBgcmVtYC5cIjtcbn1cblxuLy8gUmVzaXplIGZvbnQgc2l6ZSBiYXNlZCBvbiBzY3JlZW4gaGVpZ2h0IGFuZCB3aWR0aFxuJHJmcy10d28tZGltZW5zaW9uYWw6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBGYWN0b3Igb2YgZGVjcmVhc2VcbiRyZnMtZmFjdG9yOiAxMCAhZGVmYXVsdDtcblxuQGlmIHR5cGUtb2YoJHJmcy1mYWN0b3IpICE9IFwibnVtYmVyXCIgb3IgJHJmcy1mYWN0b3IgPD0gMSB7XG4gIEBlcnJvciBcImAjeyRyZnMtZmFjdG9yfWAgaXMgbm90IGEgdmFsaWQgICRyZnMtZmFjdG9yLCBpdCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAxLlwiO1xufVxuXG4vLyBHZW5lcmF0ZSBlbmFibGUgb3IgZGlzYWJsZSBjbGFzc2VzLiBQb3NzaWJpbGl0aWVzOiBmYWxzZSwgXCJlbmFibGVcIiBvciBcImRpc2FibGVcIlxuJHJmcy1jbGFzczogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIDEgcmVtID0gJHJmcy1yZW0tdmFsdWUgcHhcbiRyZnMtcmVtLXZhbHVlOiAxNiAhZGVmYXVsdDtcblxuLy8gU2FmYXJpIGlmcmFtZSByZXNpemUgYnVnOiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9yZnMvaXNzdWVzLzE0XG4kcmZzLXNhZmFyaS1pZnJhbWUtcmVzaXplLWJ1Zy1maXg6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBEaXNhYmxlIFJGUyBieSBzZXR0aW5nICRlbmFibGUtcmVzcG9uc2l2ZS1mb250LXNpemVzIHRvIGZhbHNlXG4kZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplczogdHJ1ZSAhZGVmYXVsdDtcblxuLy8gQ2FjaGUgJHJmcy1iYXNlLWZvbnQtc2l6ZSB1bml0XG4kcmZzLWJhc2UtZm9udC1zaXplLXVuaXQ6IHVuaXQoJHJmcy1iYXNlLWZvbnQtc2l6ZSk7XG5cbkBmdW5jdGlvbiBkaXZpZGUoJGRpdmlkZW5kLCAkZGl2aXNvciwgJHByZWNpc2lvbjogMTApIHtcbiAgJHNpZ246IGlmKCRkaXZpZGVuZCA+IDAgYW5kICRkaXZpc29yID4gMCBvciAkZGl2aWRlbmQgPCAwIGFuZCAkZGl2aXNvciA8IDAsIDEsIC0xKTtcbiAgJGRpdmlkZW5kOiBhYnMoJGRpdmlkZW5kKTtcbiAgJGRpdmlzb3I6IGFicygkZGl2aXNvcik7XG4gIEBpZiAkZGl2aWRlbmQgPT0gMCB7XG4gICAgQHJldHVybiAwO1xuICB9XG4gIEBpZiAkZGl2aXNvciA9PSAwIHtcbiAgICBAZXJyb3IgXCJDYW5ub3QgZGl2aWRlIGJ5IDBcIjtcbiAgfVxuICAkcmVtYWluZGVyOiAkZGl2aWRlbmQ7XG4gICRyZXN1bHQ6IDA7XG4gICRmYWN0b3I6IDEwO1xuICBAd2hpbGUgKCRyZW1haW5kZXIgPiAwIGFuZCAkcHJlY2lzaW9uID49IDApIHtcbiAgICAkcXVvdGllbnQ6IDA7XG4gICAgQHdoaWxlICgkcmVtYWluZGVyID49ICRkaXZpc29yKSB7XG4gICAgICAkcmVtYWluZGVyOiAkcmVtYWluZGVyIC0gJGRpdmlzb3I7XG4gICAgICAkcXVvdGllbnQ6ICRxdW90aWVudCArIDE7XG4gICAgfVxuICAgICRyZXN1bHQ6ICRyZXN1bHQgKiAxMCArICRxdW90aWVudDtcbiAgICAkZmFjdG9yOiAkZmFjdG9yICogLjE7XG4gICAgJHJlbWFpbmRlcjogJHJlbWFpbmRlciAqIDEwO1xuICAgICRwcmVjaXNpb246ICRwcmVjaXNpb24gLSAxO1xuICAgIEBpZiAoJHByZWNpc2lvbiA8IDAgYW5kICRyZW1haW5kZXIgPj0gJGRpdmlzb3IgKiA1KSB7XG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICsgMTtcbiAgICB9XG4gIH1cbiAgJHJlc3VsdDogJHJlc3VsdCAqICRmYWN0b3IgKiAkc2lnbjtcbiAgJGRpdmlkZW5kLXVuaXQ6IHVuaXQoJGRpdmlkZW5kKTtcbiAgJGRpdmlzb3ItdW5pdDogdW5pdCgkZGl2aXNvcik7XG4gICR1bml0LW1hcDogKFxuICAgIFwicHhcIjogMXB4LFxuICAgIFwicmVtXCI6IDFyZW0sXG4gICAgXCJlbVwiOiAxZW0sXG4gICAgXCIlXCI6IDElXG4gICk7XG4gIEBpZiAoJGRpdmlkZW5kLXVuaXQgIT0gJGRpdmlzb3ItdW5pdCBhbmQgbWFwLWhhcy1rZXkoJHVuaXQtbWFwLCAkZGl2aWRlbmQtdW5pdCkpIHtcbiAgICAkcmVzdWx0OiAkcmVzdWx0ICogbWFwLWdldCgkdW5pdC1tYXAsICRkaXZpZGVuZC11bml0KTtcbiAgfVxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cbi8vIFJlbW92ZSBweC11bml0IGZyb20gJHJmcy1iYXNlLWZvbnQtc2l6ZSBmb3IgY2FsY3VsYXRpb25zXG5AaWYgJHJmcy1iYXNlLWZvbnQtc2l6ZS11bml0ID09IFwicHhcIiB7XG4gICRyZnMtYmFzZS1mb250LXNpemU6IGRpdmlkZSgkcmZzLWJhc2UtZm9udC1zaXplLCAkcmZzLWJhc2UtZm9udC1zaXplICogMCArIDEpO1xufVxuQGVsc2UgaWYgJHJmcy1iYXNlLWZvbnQtc2l6ZS11bml0ID09IFwicmVtXCIge1xuICAkcmZzLWJhc2UtZm9udC1zaXplOiBkaXZpZGUoJHJmcy1iYXNlLWZvbnQtc2l6ZSwgZGl2aWRlKCRyZnMtYmFzZS1mb250LXNpemUgKiAwICsgMSwgJHJmcy1yZW0tdmFsdWUpKTtcbn1cblxuLy8gQ2FjaGUgJHJmcy1icmVha3BvaW50IHVuaXQgdG8gcHJldmVudCBtdWx0aXBsZSBjYWxsc1xuJHJmcy1icmVha3BvaW50LXVuaXQtY2FjaGU6IHVuaXQoJHJmcy1icmVha3BvaW50KTtcblxuLy8gUmVtb3ZlIHVuaXQgZnJvbSAkcmZzLWJyZWFrcG9pbnQgZm9yIGNhbGN1bGF0aW9uc1xuQGlmICRyZnMtYnJlYWtwb2ludC11bml0LWNhY2hlID09IFwicHhcIiB7XG4gICRyZnMtYnJlYWtwb2ludDogZGl2aWRlKCRyZnMtYnJlYWtwb2ludCwgJHJmcy1icmVha3BvaW50ICogMCArIDEpO1xufVxuQGVsc2UgaWYgJHJmcy1icmVha3BvaW50LXVuaXQtY2FjaGUgPT0gXCJyZW1cIiBvciAkcmZzLWJyZWFrcG9pbnQtdW5pdC1jYWNoZSA9PSBcImVtXCIge1xuICAkcmZzLWJyZWFrcG9pbnQ6IGRpdmlkZSgkcmZzLWJyZWFrcG9pbnQsIGRpdmlkZSgkcmZzLWJyZWFrcG9pbnQgKiAwICsgMSwgJHJmcy1yZW0tdmFsdWUpKTtcbn1cblxuLy8gSW50ZXJuYWwgbWl4aW4gdGhhdCBhZGRzIGRpc2FibGUgY2xhc3NlcyB0byB0aGUgc2VsZWN0b3IgaWYgbmVlZGVkLlxuQG1peGluIF9yZnMtZGlzYWJsZS1jbGFzcyB7XG4gIEBpZiAkcmZzLWNsYXNzID09IFwiZGlzYWJsZVwiIHtcbiAgICAvLyBBZGRpbmcgYW4gZXh0cmEgY2xhc3MgaW5jcmVhc2VzIHNwZWNpZmljaXR5LCB3aGljaCBwcmV2ZW50cyB0aGUgbWVkaWEgcXVlcnkgdG8gb3ZlcnJpZGUgdGhlIGZvbnQgc2l6ZVxuICAgICYsXG4gICAgLmRpc2FibGUtcmVzcG9uc2l2ZS1mb250LXNpemUgJixcbiAgICAmLmRpc2FibGUtcmVzcG9uc2l2ZS1mb250LXNpemUge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG4gIEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBJbnRlcm5hbCBtaXhpbiB0aGF0IGFkZHMgZW5hYmxlIGNsYXNzZXMgdG8gdGhlIHNlbGVjdG9yIGlmIG5lZWRlZC5cbkBtaXhpbiBfcmZzLWVuYWJsZS1jbGFzcyB7XG4gIEBpZiAkcmZzLWNsYXNzID09IFwiZW5hYmxlXCIge1xuICAgIC5lbmFibGUtcmVzcG9uc2l2ZS1mb250LXNpemUgJixcbiAgICAmLmVuYWJsZS1yZXNwb25zaXZlLWZvbnQtc2l6ZSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbiAgQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIEludGVybmFsIG1peGluIHVzZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIG1lZGlhIHF1ZXJ5IG5lZWRzIHRvIGJlIHVzZWRcbkBtaXhpbiBfcmZzLW1lZGlhLXF1ZXJ5KCRtcS12YWx1ZSkge1xuICBAaWYgJHJmcy10d28tZGltZW5zaW9uYWwge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRtcS12YWx1ZX0pLCAobWF4LWhlaWdodDogI3skbXEtdmFsdWV9KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbiAgQGVsc2Uge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRtcS12YWx1ZX0pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIGZvbnQgc2l6ZSBtaXhpblxuQG1peGluIHJmcygkZnMsICRpbXBvcnRhbnQ6IGZhbHNlKSB7XG4gIC8vIENhY2hlICRmcyB1bml0XG4gICRmcy11bml0OiBpZih0eXBlLW9mKCRmcykgPT0gXCJudW1iZXJcIiwgdW5pdCgkZnMpLCBmYWxzZSk7XG5cbiAgLy8gQWRkICFpbXBvcnRhbnQgc3VmZml4IGlmIG5lZWRlZFxuICAkcmZzLXN1ZmZpeDogaWYoJGltcG9ydGFudCwgXCIgIWltcG9ydGFudFwiLCBcIlwiKTtcblxuICAvLyBJZiAkZnMgaXNuJ3QgYSBudW1iZXIgKGxpa2UgaW5oZXJpdCkgb3IgJGZzIGhhcyBhIHVuaXQgKG5vdCBweCBvciByZW0sIGxpa2UgMS41ZW0pIG9yICQgaXMgMCwganVzdCBwcmludCB0aGUgdmFsdWVcbiAgQGlmIG5vdCAkZnMtdW5pdCBvciAkZnMtdW5pdCAhPSBcIlwiIGFuZCAkZnMtdW5pdCAhPSBcInB4XCIgYW5kICRmcy11bml0ICE9IFwicmVtXCIgb3IgJGZzID09IDAge1xuICAgIGZvbnQtc2l6ZTogI3skZnN9I3skcmZzLXN1ZmZpeH07XG4gIH1cbiAgQGVsc2Uge1xuICAgIC8vIFJlbW92ZSB1bml0IGZyb20gJGZzIGZvciBjYWxjdWxhdGlvbnNcbiAgICBAaWYgJGZzLXVuaXQgPT0gXCJweFwiIHtcbiAgICAgICRmczogZGl2aWRlKCRmcywgJGZzICogMCArIDEpO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkZnMtdW5pdCA9PSBcInJlbVwiIHtcbiAgICAgICRmczogZGl2aWRlKCRmcywgZGl2aWRlKCRmcyAqIDAgKyAxLCAkcmZzLXJlbS12YWx1ZSkpO1xuICAgIH1cblxuICAgIC8vIFNldCBkZWZhdWx0IGZvbnQgc2l6ZVxuICAgICRyZnMtc3RhdGljOiBpZigkcmZzLWZvbnQtc2l6ZS11bml0ID09IHJlbSwgI3tkaXZpZGUoJGZzLCAkcmZzLXJlbS12YWx1ZSl9cmVtLCAjeyRmc31weCk7XG5cbiAgICAvLyBPbmx5IGFkZCB0aGUgbWVkaWEgcXVlcnkgaWYgdGhlIGZvbnQgc2l6ZSBpcyBiaWdnZXIgdGhhbiB0aGUgbWluaW11bSBmb250IHNpemVcbiAgICBAaWYgJGZzIDw9ICRyZnMtYmFzZS1mb250LXNpemUgb3Igbm90ICRlbmFibGUtcmVzcG9uc2l2ZS1mb250LXNpemVzIHtcbiAgICAgIGZvbnQtc2l6ZTogI3skcmZzLXN0YXRpY30jeyRyZnMtc3VmZml4fTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBtaW5pbXVtIGZvbnQgc2l6ZSBmb3IgJGZzXG4gICAgICAkZnMtbWluOiAkcmZzLWJhc2UtZm9udC1zaXplICsgZGl2aWRlKCRmcyAtICRyZnMtYmFzZS1mb250LXNpemUsICRyZnMtZmFjdG9yKTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIGRpZmZlcmVuY2UgYmV0d2VlbiAkZnMgYW5kIHRoZSBtaW5pbXVtIGZvbnQgc2l6ZVxuICAgICAgJGZzLWRpZmY6ICRmcyAtICRmcy1taW47XG5cbiAgICAgIC8vIEJhc2UgZm9udC1zaXplIGZvcm1hdHRpbmdcbiAgICAgICRtaW4td2lkdGg6IGlmKCRyZnMtZm9udC1zaXplLXVuaXQgPT0gcmVtLCAje2RpdmlkZSgkZnMtbWluLCAkcmZzLXJlbS12YWx1ZSl9cmVtLCAjeyRmcy1taW59cHgpO1xuXG4gICAgICAvLyBVc2UgYHZtaW5gIGlmIHR3by1kaW1lbnNpb25hbCBpcyBlbmFibGVkXG4gICAgICAkdmFyaWFibGUtdW5pdDogaWYoJHJmcy10d28tZGltZW5zaW9uYWwsIHZtaW4sIHZ3KTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSB2YXJpYWJsZSB3aWR0aCBiZXR3ZWVuIDAgYW5kICRyZnMtYnJlYWtwb2ludFxuICAgICAgJHZhcmlhYmxlLXdpZHRoOiAje2RpdmlkZSgkZnMtZGlmZiAqIDEwMCwgJHJmcy1icmVha3BvaW50KX0jeyR2YXJpYWJsZS11bml0fTtcblxuICAgICAgLy8gU2V0IHRoZSBjYWxjdWxhdGVkIGZvbnQtc2l6ZVxuICAgICAgJHJmcy1mbHVpZDogY2FsYygjeyRtaW4td2lkdGh9ICsgI3skdmFyaWFibGUtd2lkdGh9KSAjeyRyZnMtc3VmZml4fTtcblxuICAgICAgLy8gQnJlYWtwb2ludCBmb3JtYXR0aW5nXG4gICAgICAkbXEtdmFsdWU6IGlmKCRyZnMtYnJlYWtwb2ludC11bml0ID09IHB4LCAjeyRyZnMtYnJlYWtwb2ludH1weCwgI3tkaXZpZGUoJHJmcy1icmVha3BvaW50LCAkcmZzLXJlbS12YWx1ZSl9I3skcmZzLWJyZWFrcG9pbnQtdW5pdH0pO1xuXG4gICAgICBAaW5jbHVkZSBfcmZzLWRpc2FibGUtY2xhc3Mge1xuICAgICAgICBmb250LXNpemU6ICN7JHJmcy1zdGF0aWN9I3skcmZzLXN1ZmZpeH07XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIF9yZnMtbWVkaWEtcXVlcnkoJG1xLXZhbHVlKSB7XG4gICAgICAgIEBpbmNsdWRlIF9yZnMtZW5hYmxlLWNsYXNzIHtcbiAgICAgICAgICBmb250LXNpemU6ICRyZnMtZmx1aWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbmNsdWRlIHNhZmFyaSBpZnJhbWUgcmVzaXplIGZpeCBpZiBuZWVkZWRcbiAgICAgICAgbWluLXdpZHRoOiBpZigkcmZzLXNhZmFyaS1pZnJhbWUtcmVzaXplLWJ1Zy1maXgsICgwICogMXZ3KSwgbnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBmb250LXNpemUgJiByZXNwb25zaXZlLWZvbnQtc2l6ZSBtaXhpbnMgdXNlIFJGUyB0byByZXNjYWxlIHRoZSBmb250IHNpemVcbkBtaXhpbiBmb250LXNpemUoJGZzLCAkaW1wb3J0YW50OiBmYWxzZSkge1xuICBAaW5jbHVkZSByZnMoJGZzLCAkaW1wb3J0YW50KTtcbn1cblxuQG1peGluIHJlc3BvbnNpdmUtZm9udC1zaXplKCRmcywgJGltcG9ydGFudDogZmFsc2UpIHtcbiAgQGluY2x1ZGUgcmZzKCRmcywgJGltcG9ydGFudCk7XG59XG4iLCIvLyBzdHlsZWxpbnQtZGlzYWJsZSBwcm9wZXJ0eS1kaXNhbGxvd2VkLWxpc3Rcbi8vIFNpbmdsZSBzaWRlIGJvcmRlci1yYWRpdXNcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHJlcGxhY2UgbmVnYXRpdmUgdmFsdWVzIHdpdGggMFxuQGZ1bmN0aW9uIHZhbGlkLXJhZGl1cygkcmFkaXVzKSB7XG4gICRyZXR1cm46ICgpO1xuICBAZWFjaCAkdmFsdWUgaW4gJHJhZGl1cyB7XG4gICAgQGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBudW1iZXIge1xuICAgICAgJHJldHVybjogYXBwZW5kKCRyZXR1cm4sIG1heCgkdmFsdWUsIDApKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRyZXR1cm46IGFwcGVuZCgkcmV0dXJuLCAkdmFsdWUpO1xuICAgIH1cbiAgfVxuICBAcmV0dXJuICRyZXR1cm47XG59XG5cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXM6ICRib3JkZXItcmFkaXVzLCAkZmFsbGJhY2stYm9yZGVyLXJhZGl1czogZmFsc2UpIHtcbiAgQGlmICRlbmFibGUtcm91bmRlZCB7XG4gICAgYm9yZGVyLXJhZGl1czogdmFsaWQtcmFkaXVzKCRyYWRpdXMpO1xuICB9XG4gIEBlbHNlIGlmICRmYWxsYmFjay1ib3JkZXItcmFkaXVzICE9IGZhbHNlIHtcbiAgICBib3JkZXItcmFkaXVzOiAkZmFsbGJhY2stYm9yZGVyLXJhZGl1cztcbiAgfVxufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yYWRpdXMoJHJhZGl1cykge1xuICBAaWYgJGVuYWJsZS1yb3VuZGVkIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YWxpZC1yYWRpdXMoJHJhZGl1cyk7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhbGlkLXJhZGl1cygkcmFkaXVzKTtcbiAgfVxufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0LXJhZGl1cygkcmFkaXVzKSB7XG4gIEBpZiAkZW5hYmxlLXJvdW5kZWQge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YWxpZC1yYWRpdXMoJHJhZGl1cyk7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhbGlkLXJhZGl1cygkcmFkaXVzKTtcbiAgfVxufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1yYWRpdXMoJHJhZGl1cykge1xuICBAaWYgJGVuYWJsZS1yb3VuZGVkIHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFsaWQtcmFkaXVzKCRyYWRpdXMpO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhbGlkLXJhZGl1cygkcmFkaXVzKTtcbiAgfVxufVxuXG5AbWl4aW4gYm9yZGVyLWxlZnQtcmFkaXVzKCRyYWRpdXMpIHtcbiAgQGlmICRlbmFibGUtcm91bmRlZCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFsaWQtcmFkaXVzKCRyYWRpdXMpO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhbGlkLXJhZGl1cygkcmFkaXVzKTtcbiAgfVxufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cygkcmFkaXVzKSB7XG4gIEBpZiAkZW5hYmxlLXJvdW5kZWQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhbGlkLXJhZGl1cygkcmFkaXVzKTtcbiAgfVxufVxuXG5AbWl4aW4gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMoJHJhZGl1cykge1xuICBAaWYgJGVuYWJsZS1yb3VuZGVkIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFsaWQtcmFkaXVzKCRyYWRpdXMpO1xuICB9XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cygkcmFkaXVzKSB7XG4gIEBpZiAkZW5hYmxlLXJvdW5kZWQge1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YWxpZC1yYWRpdXMoJHJhZGl1cyk7XG4gIH1cbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMoJHJhZGl1cykge1xuICBAaWYgJGVuYWJsZS1yb3VuZGVkIHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YWxpZC1yYWRpdXMoJHJhZGl1cyk7XG4gIH1cbn1cbiIsIi8vIHN0eWxlbGludC1kaXNhYmxlIHByb3BlcnR5LWRpc2FsbG93ZWQtbGlzdFxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcbiAgQGlmIGxlbmd0aCgkdHJhbnNpdGlvbikgPT0gMCB7XG4gICAgJHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWJhc2U7XG4gIH1cblxuICBAaWYgbGVuZ3RoKCR0cmFuc2l0aW9uKSA+IDEge1xuICAgIEBlYWNoICR2YWx1ZSBpbiAkdHJhbnNpdGlvbiB7XG4gICAgICBAaWYgJHZhbHVlID09IG51bGwgb3IgJHZhbHVlID09IG5vbmUge1xuICAgICAgICBAd2FybiBcIlRoZSBrZXl3b3JkICdub25lJyBvciAnbnVsbCcgbXVzdCBiZSB1c2VkIGFzIGEgc2luZ2xlIGFyZ3VtZW50LlwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBpZiAkZW5hYmxlLXRyYW5zaXRpb25zIHtcbiAgICBAaWYgbnRoKCR0cmFuc2l0aW9uLCAxKSAhPSBudWxsIHtcbiAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIEBpZiAkZW5hYmxlLXByZWZlcnMtcmVkdWNlZC1tb3Rpb24tbWVkaWEtcXVlcnkgYW5kIG50aCgkdHJhbnNpdGlvbiwgMSkgIT0gbnVsbCBhbmQgbnRoKCR0cmFuc2l0aW9uLCAxKSAhPSBub25lIHtcbiAgICAgIEBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9uc1wiO1xyXG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL21peGluc1wiO1xyXG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL2Zvcm1zXCI7XHJcbkBpbXBvcnQgJ35zY3NzL2hlbHBlcnMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnfnNjc3MvaGVscGVycy9taXhpbnMnO1xyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1uby1xdWFsaWZ5aW5nLXR5cGVcclxuXHJcbi5zaG9wcGluZy1jYXJ0IHtcclxuICBtYXJnaW4tYm90dG9tOiBmbG9vcigkZ3JpZC12ZXJ0aWNhbC1zdGVwIC8gMS4yKTsgLy9+MjBweFxyXG4gIC50YWJsZSB7IG1hcmdpbi1ib3R0b206IDA7IH1cclxuICAuYnRuIHsgbWFyZ2luOiAwOyB9XHJcbiAgPiB0YWJsZSA+IHRoZWFkID4gdHIsXHJcbiAgPiB0YWJsZSA+IHRib2R5ID4gdHIge1xyXG4gICAgPiB0aCxcclxuICAgID4gdGQgeyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7IH1cclxuICB9XHJcbiAgPiB0YWJsZSB0aGVhZCB0aCB7XHJcbiAgICBwYWRkaW5nOiB7XHJcbiAgICAgIHRvcDogMTdweDtcclxuICAgICAgYm90dG9tOiAxN3B4O1xyXG4gICAgfVxyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgfVxyXG4gIC5yZW1vdmUtZnJvbS1jYXJ0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAkYnJhbmQtZGFuZ2VyO1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLWxlYWQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLmNvdW50LWlucHV0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gIH1cclxuICAucHJvZHVjdC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiB7XHJcbiAgICAgIHRvcDogNXB4O1xyXG4gICAgICBib3R0b206IDNweDtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0LXRodW1iLFxyXG4gICAgLnByb2R1Y3QtaW5mbyB7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdC10aHVtYiB7XHJcbiAgICAgIHdpZHRoOiAoJGNhcnQtdGh1bWItc2l6ZSArIDIwKTtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgPiBpbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg2MHB4KSB7IGRpc3BsYXk6IG5vbmU7IH1cclxuICAgIH1cclxuICAgIC5wcm9kdWN0LWluZm8gc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XHJcbiAgICAgID4gZW0ge1xyXG4gICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgIHdlaWdodDogNTAwO1xyXG4gICAgICAgICAgc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9kdWN0LXRpdGxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogZmxvb3IoJGdyaWQtdmVydGljYWwtc3RlcCAvIDQpO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICBmb250OiB7XHJcbiAgICAgICAgc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4gICAgICAgIHdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICAgID4gYSB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjNzO1xyXG4gICAgICAgIGNvbG9yOiAkcHJvZHVjdC10aXRsZS1jb2xvcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICY6aG92ZXIgeyBjb2xvcjogJG5hdi1saW5rLWhvdmVyLWNvbG9yOyB9XHJcbiAgICAgIH1cclxuICAgICAgc21hbGwge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwOyAvLyBGb3IgZm9ybSB2YWxpZGF0aW9uIGZlZWRiYWNrXHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gID4gLmZvcm0tY29udHJvbCxcclxuICA+IC5jdXN0b20tc2VsZWN0LFxyXG4gID4gLmN1c3RvbS1maWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLy8gRm9yIGZvY3VzIHN0YXRlJ3Mgei1pbmRleFxyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAvLyBBZGQgd2lkdGggMSUgYW5kIGZsZXgtYmFzaXMgYXV0byB0byBlbnN1cmUgdGhhdCBidXR0b24gd2lsbCBub3Qgd3JhcCBvdXRcclxuICAgIC8vIHRoZSBjb2x1bW4uIEFwcGxpZXMgdG8gSUUgRWRnZSsgYW5kIEZpcmVmb3guIENocm9tZSBkb2VzIG5vdCByZXF1aXJlIHRoaXMuXHJcbiAgICB3aWR0aDogMSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgIC8vIEJyaW5nIHRoZSBcImFjdGl2ZVwiIGZvcm0gY29udHJvbCB0byB0aGUgdG9wIG9mIHN1cnJvdW5kaW5nIGVsZW1lbnRzXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgei1pbmRleDogMztcclxuICAgIH1cclxuXHJcbiAgICArIC5mb3JtLWNvbnRyb2wsXHJcbiAgICArIC5jdXN0b20tc2VsZWN0LFxyXG4gICAgKyAuY3VzdG9tLWZpbGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLSRpbnB1dC1ib3JkZXItd2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA+IC5mb3JtLWNvbnRyb2wsXHJcbiAgPiAuY3VzdG9tLXNlbGVjdCB7XHJcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkgeyBAaW5jbHVkZSBib3JkZXItcmlnaHQtcmFkaXVzKDApOyB9XHJcbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHsgQGluY2x1ZGUgYm9yZGVyLWxlZnQtcmFkaXVzKDApOyB9XHJcbiAgfVxyXG5cclxuICAvLyBDdXN0b20gZmlsZSBpbnB1dHMgaGF2ZSBtb3JlIGNvbXBsZXggbWFya3VwLCB0aHVzIHJlcXVpcmluZyBkaWZmZXJlbnRcclxuICAvLyBib3JkZXItcmFkaXVzIG92ZXJyaWRlcy5cclxuICA+IC5jdXN0b20tZmlsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkgLmN1c3RvbS1maWxlLWxhYmVsLFxyXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIC5jdXN0b20tZmlsZS1sYWJlbDo6YmVmb3JlIHsgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygwKTsgfVxyXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSAuY3VzdG9tLWZpbGUtbGFiZWwsXHJcbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIC5jdXN0b20tZmlsZS1sYWJlbDo6YmVmb3JlIHsgQGluY2x1ZGUgYm9yZGVyLWxlZnQtcmFkaXVzKDApOyB9XHJcbiAgfVxyXG59XHJcbi5pbnB1dC1ncm91cC1wcmVwZW5kLFxyXG4uaW5wdXQtZ3JvdXAtYXBwZW5kIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAvLyBFbnN1cmUgYnV0dG9ucyBhcmUgYWx3YXlzIGFib3ZlIGlucHV0cyBmb3IgbW9yZSB2aXN1YWxseSBwbGVhc2luZyBib3JkZXJzLlxyXG4gIC8vIFRoaXMgaXNuJ3QgbmVlZGVkIGZvciBgLmlucHV0LWdyb3VwLXRleHRgIHNpbmNlIGl0IHNoYXJlcyB0aGUgc2FtZSBib3JkZXItY29sb3JcclxuICAvLyBhcyBvdXIgaW5wdXRzLlxyXG4gIC5idG4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcblxyXG4gIC5idG4gKyAuYnRuLFxyXG4gIC5idG4gKyAuaW5wdXQtZ3JvdXAtdGV4dCxcclxuICAuaW5wdXQtZ3JvdXAtdGV4dCArIC5pbnB1dC1ncm91cC10ZXh0LFxyXG4gIC5pbnB1dC1ncm91cC10ZXh0ICsgLmJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogLSRpbnB1dC1ib3JkZXItd2lkdGg7XHJcbiAgfVxyXG59XHJcbi5pbnB1dC1ncm91cC1wcmVwZW5kIHsgbWFyZ2luLXJpZ2h0OiAtJGlucHV0LWJvcmRlci13aWR0aDsgfVxyXG4uaW5wdXQtZ3JvdXAtYXBwZW5kIHsgbWFyZ2luLWxlZnQ6IC0kaW5wdXQtYm9yZGVyLXdpZHRoOyB9XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6ICRpbnB1dC1wYWRkaW5nLXkgJGlucHV0LXBhZGRpbmcteDtcclxuICBtYXJnaW4tYm90dG9tOiAwOyAvLyBBbGxvdyB1c2Ugb2YgPGxhYmVsPiBlbGVtZW50cyBieSBvdmVycmlkaW5nIG91ciBkZWZhdWx0IG1hcmdpbi1ib3R0b21cclxuICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTsgLy8gTWF0Y2ggaW5wdXRzXHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6ICRpbnB1dC1saW5lLWhlaWdodDtcclxuICBjb2xvcjogJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1ncm91cC1hZGRvbi1iZztcclxuICBib3JkZXI6ICRpbnB1dC1ib3JkZXItd2lkdGggc29saWQgJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjtcclxuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRpbnB1dC1ib3JkZXItcmFkaXVzKTtcclxuXHJcbiAgLy8gTnVrZSBkZWZhdWx0IG1hcmdpbnMgZnJvbSBjaGVja2JveGVzIGFuZCByYWRpb3MgdG8gdmVydGljYWxseSBjZW50ZXIgd2l0aGluLlxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1sZyA+IC5mb3JtLWNvbnRyb2wsXHJcbi5pbnB1dC1ncm91cC1sZyA+IC5pbnB1dC1ncm91cC1wcmVwZW5kID4gLmlucHV0LWdyb3VwLXRleHQsXHJcbi5pbnB1dC1ncm91cC1sZyA+IC5pbnB1dC1ncm91cC1hcHBlbmQgPiAuaW5wdXQtZ3JvdXAtdGV4dCxcclxuLmlucHV0LWdyb3VwLWxnID4gLmlucHV0LWdyb3VwLXByZXBlbmQgPiAuYnRuLFxyXG4uaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYXBwZW5kID4gLmJ0biB7XHJcbiAgQGV4dGVuZCAuZm9ybS1jb250cm9sLWxnO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtc20gPiAuZm9ybS1jb250cm9sLFxyXG4uaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtcHJlcGVuZCA+IC5pbnB1dC1ncm91cC10ZXh0LFxyXG4uaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtYXBwZW5kID4gLmlucHV0LWdyb3VwLXRleHQsXHJcbi5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1wcmVwZW5kID4gLmJ0bixcclxuLmlucHV0LWdyb3VwLXNtID4gLmlucHV0LWdyb3VwLWFwcGVuZCA+IC5idG4ge1xyXG4gIEBleHRlbmQgLmZvcm0tY29udHJvbC1zbTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwID4gLmlucHV0LWdyb3VwLXByZXBlbmQgPiAuYnRuLFxyXG4uaW5wdXQtZ3JvdXAgPiAuaW5wdXQtZ3JvdXAtcHJlcGVuZCA+IC5pbnB1dC1ncm91cC10ZXh0LFxyXG4uaW5wdXQtZ3JvdXAgPiAuaW5wdXQtZ3JvdXAtYXBwZW5kOm5vdCg6bGFzdC1jaGlsZCkgPiAuYnRuLFxyXG4uaW5wdXQtZ3JvdXAgPiAuaW5wdXQtZ3JvdXAtYXBwZW5kOm5vdCg6bGFzdC1jaGlsZCkgPiAuaW5wdXQtZ3JvdXAtdGV4dCxcclxuLmlucHV0LWdyb3VwID4gLmlucHV0LWdyb3VwLWFwcGVuZDpsYXN0LWNoaWxkID4gLmJ0bjpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKSxcclxuLmlucHV0LWdyb3VwID4gLmlucHV0LWdyb3VwLWFwcGVuZDpsYXN0LWNoaWxkID4gLmlucHV0LWdyb3VwLXRleHQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygwKTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwID4gLmlucHV0LWdyb3VwLWFwcGVuZCA+IC5idG4sXHJcbi5pbnB1dC1ncm91cCA+IC5pbnB1dC1ncm91cC1hcHBlbmQgPiAuaW5wdXQtZ3JvdXAtdGV4dCxcclxuLmlucHV0LWdyb3VwID4gLmlucHV0LWdyb3VwLXByZXBlbmQ6bm90KDpmaXJzdC1jaGlsZCkgPiAuYnRuLFxyXG4uaW5wdXQtZ3JvdXAgPiAuaW5wdXQtZ3JvdXAtcHJlcGVuZDpub3QoOmZpcnN0LWNoaWxkKSA+IC5pbnB1dC1ncm91cC10ZXh0LFxyXG4uaW5wdXQtZ3JvdXAgPiAuaW5wdXQtZ3JvdXAtcHJlcGVuZDpmaXJzdC1jaGlsZCA+IC5idG46bm90KDpmaXJzdC1jaGlsZCksXHJcbi5pbnB1dC1ncm91cCA+IC5pbnB1dC1ncm91cC1wcmVwZW5kOmZpcnN0LWNoaWxkID4gLmlucHV0LWdyb3VwLXRleHQ6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gIEBpbmNsdWRlIGJvcmRlci1sZWZ0LXJhZGl1cygwKTtcclxufVxyXG5cclxuLnNob3BwaW5nLWNhcnQtZm9vdGVyIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgPiAuY29sdW1uIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgLmJ0biB7XHJcbiAgICAgICAgbWFyZ2luOiB7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICY6bGFzdC1jaGlsZCB7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4gICAgICAuYnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IGZsb29yKCRncmlkLXZlcnRpY2FsLXN0ZXAgLyAyKSAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gRm9ybSBjb250cm9sIGZvY3VzIHN0YXRlXG4vL1xuLy8gR2VuZXJhdGUgYSBjdXN0b21pemVkIGZvY3VzIHN0YXRlIGFuZCBmb3IgYW55IGlucHV0IHdpdGggdGhlIHNwZWNpZmllZCBjb2xvcixcbi8vIHdoaWNoIGRlZmF1bHRzIHRvIHRoZSBgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcmAgdmFyaWFibGUuXG4vL1xuLy8gV2UgaGlnaGx5IGVuY291cmFnZSB5b3UgdG8gbm90IGN1c3RvbWl6ZSB0aGUgZGVmYXVsdCB2YWx1ZSwgYnV0IGluc3RlYWQgdXNlXG4vLyB0aGlzIHRvIHR3ZWFrIGNvbG9ycyBvbiBhbiBhcy1uZWVkZWQgYmFzaXMuIFRoaXMgYWVzdGhldGljIGNoYW5nZSBpcyBiYXNlZCBvblxuLy8gV2ViS2l0J3MgZGVmYXVsdCBzdHlsZXMsIGJ1dCBhcHBsaWNhYmxlIHRvIGEgd2lkZXIgcmFuZ2Ugb2YgYnJvd3NlcnMuIEl0c1xuLy8gdXNhYmlsaXR5IGFuZCBhY2Nlc3NpYmlsaXR5IHNob3VsZCBiZSB0YWtlbiBpbnRvIGFjY291bnQgd2l0aCBhbnkgY2hhbmdlLlxuLy9cbi8vIEV4YW1wbGUgdXNhZ2U6IGNoYW5nZSB0aGUgZGVmYXVsdCBibHVlIGJvcmRlciBhbmQgc2hhZG93IHRvIHdoaXRlIGZvciBiZXR0ZXJcbi8vIGNvbnRyYXN0IGFnYWluc3QgYSBkYXJrIGdyYXkgYmFja2dyb3VuZC5cbkBtaXhpbiBmb3JtLWNvbnRyb2wtZm9jdXMoJGlnbm9yZS13YXJuaW5nOiBmYWxzZSkge1xuICAmOmZvY3VzIHtcbiAgICBjb2xvcjogJGlucHV0LWZvY3VzLWNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1mb2N1cy1iZztcbiAgICBib3JkZXItY29sb3I6ICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I7XG4gICAgb3V0bGluZTogMDtcbiAgICBAaWYgJGVuYWJsZS1zaGFkb3dzIHtcbiAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coJGlucHV0LWJveC1zaGFkb3csICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93KTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIC8vIEF2b2lkIHVzaW5nIG1peGluIHNvIHdlIGNhbiBwYXNzIGN1c3RvbSBmb2N1cyBzaGFkb3cgcHJvcGVybHlcbiAgICAgIGJveC1zaGFkb3c6ICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93O1xuICAgIH1cbiAgfVxuICBAaW5jbHVkZSBkZXByZWNhdGUoXCJUaGUgYGZvcm0tY29udHJvbC1mb2N1cygpYCBtaXhpblwiLCBcInY0LjQuMFwiLCBcInY1XCIsICRpZ25vcmUtd2FybmluZyk7XG59XG5cbi8vIFRoaXMgbWl4aW4gdXNlcyBhbiBgaWYoKWAgdGVjaG5pcXVlIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBEYXJ0IFNhc3Ncbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9zYXNzL2lzc3Vlcy8xODczI2lzc3VlY29tbWVudC0xNTIyOTM3MjUgZm9yIG1vcmUgZGV0YWlsc1xuQG1peGluIGZvcm0tdmFsaWRhdGlvbi1zdGF0ZS1zZWxlY3Rvcigkc3RhdGUpIHtcbiAgQGlmICgkc3RhdGUgPT0gXCJ2YWxpZFwiIG9yICRzdGF0ZSA9PSBcImludmFsaWRcIikge1xuICAgIC53YXMtdmFsaWRhdGVkICN7aWYoJiwgXCImXCIsIFwiXCIpfTojeyRzdGF0ZX0sXG4gICAgI3tpZigmLCBcIiZcIiwgXCJcIil9LmlzLSN7JHN0YXRlfSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgICN7aWYoJiwgXCImXCIsIFwiXCIpfS5pcy0jeyRzdGF0ZX0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBmb3JtLXZhbGlkYXRpb24tc3RhdGUoJHN0YXRlLCAkY29sb3IsICRpY29uKSB7XG4gIC4jeyRzdGF0ZX0tZmVlZGJhY2sge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDtcbiAgICBAaW5jbHVkZSBmb250LXNpemUoJGZvcm0tZmVlZGJhY2stZm9udC1zaXplKTtcbiAgICBjb2xvcjogJGNvbG9yO1xuICB9XG5cbiAgLiN7JHN0YXRlfS10b29sdGlwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogNTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1heC13aWR0aDogMTAwJTsgLy8gQ29udGFpbiB0byBwYXJlbnQgd2hlbiBwb3NzaWJsZVxuICAgIHBhZGRpbmc6ICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy15ICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy14O1xuICAgIG1hcmdpbi10b3A6IC4xcmVtO1xuICAgIEBpbmNsdWRlIGZvbnQtc2l6ZSgkZm9ybS1mZWVkYmFjay10b29sdGlwLWZvbnQtc2l6ZSk7XG4gICAgbGluZS1oZWlnaHQ6ICRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtbGluZS1oZWlnaHQ7XG4gICAgY29sb3I6IGNvbG9yLXlpcSgkY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLCAkZm9ybS1mZWVkYmFjay10b29sdGlwLW9wYWNpdHkpO1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1ib3JkZXItcmFkaXVzKTtcblxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8zMTU1N1xuICAgIC8vIEFsaWduIHRvb2x0aXAgdG8gZm9ybSBlbGVtZW50c1xuICAgIC5mb3JtLXJvdyA+IC5jb2wgPiAmLFxuICAgIC5mb3JtLXJvdyA+IFtjbGFzcyo9XCJjb2wtXCJdID4gJiB7XG4gICAgICBsZWZ0OiAkZm9ybS1ncmlkLWd1dHRlci13aWR0aCAqIC41O1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIGZvcm0tdmFsaWRhdGlvbi1zdGF0ZS1zZWxlY3Rvcigkc3RhdGUpIHtcbiAgICB+IC4jeyRzdGF0ZX0tZmVlZGJhY2ssXG4gICAgfiAuI3skc3RhdGV9LXRvb2x0aXAge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgQGluY2x1ZGUgZm9ybS12YWxpZGF0aW9uLXN0YXRlLXNlbGVjdG9yKCRzdGF0ZSkge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XG5cbiAgICAgIEBpZiAkZW5hYmxlLXZhbGlkYXRpb24taWNvbnMge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkaW5wdXQtaGVpZ2h0LWlubmVyICFpbXBvcnRhbnQ7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGVzY2FwZS1zdmcoJGljb24pO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAkaW5wdXQtaGVpZ2h0LWlubmVyLXF1YXJ0ZXIgY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6ICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY7XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgJGlucHV0LWZvY3VzLXdpZHRoIHJnYmEoJGNvbG9yLCAuMjUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzZWxlY3Rvci1uby1xdWFsaWZ5aW5nLXR5cGVcbiAgc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gICAgQGluY2x1ZGUgZm9ybS12YWxpZGF0aW9uLXN0YXRlLXNlbGVjdG9yKCRzdGF0ZSkge1xuICAgICAgQGlmICRlbmFibGUtdmFsaWRhdGlvbi1pY29ucyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6ICRpbnB1dC1wYWRkaW5nLXggKiA0ICFpbXBvcnRhbnQ7IC8vIHN0eWxlbGludC1kaXNhYmxlLWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0ICRpbnB1dC1wYWRkaW5nLXggKiAyIGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2VsZWN0b3Itbm8tcXVhbGlmeWluZy10eXBlXG4gIHRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gICAgQGluY2x1ZGUgZm9ybS12YWxpZGF0aW9uLXN0YXRlLXNlbGVjdG9yKCRzdGF0ZSkge1xuICAgICAgQGlmICRlbmFibGUtdmFsaWRhdGlvbi1pY29ucyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6ICRpbnB1dC1oZWlnaHQtaW5uZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCAkaW5wdXQtaGVpZ2h0LWlubmVyLXF1YXJ0ZXIgcmlnaHQgJGlucHV0LWhlaWdodC1pbm5lci1xdWFydGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jdXN0b20tc2VsZWN0IHtcbiAgICBAaW5jbHVkZSBmb3JtLXZhbGlkYXRpb24tc3RhdGUtc2VsZWN0b3IoJHN0YXRlKSB7XG4gICAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcblxuICAgICAgQGlmICRlbmFibGUtdmFsaWRhdGlvbi1pY29ucyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6ICRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcGFkZGluZy1yaWdodCAhaW1wb3J0YW50OyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudFxuICAgICAgICBiYWNrZ3JvdW5kOiAkY3VzdG9tLXNlbGVjdC1iYWNrZ3JvdW5kLCAkY3VzdG9tLXNlbGVjdC1iZyBlc2NhcGUtc3ZnKCRpY29uKSAkY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uIC8gJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplIG5vLXJlcGVhdDtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAkaW5wdXQtZm9jdXMtd2lkdGggcmdiYSgkY29sb3IsIC4yNSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tY2hlY2staW5wdXQge1xuICAgIEBpbmNsdWRlIGZvcm0tdmFsaWRhdGlvbi1zdGF0ZS1zZWxlY3Rvcigkc3RhdGUpIHtcbiAgICAgIH4gLmZvcm0tY2hlY2stbGFiZWwge1xuICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgfVxuXG4gICAgICB+IC4jeyRzdGF0ZX0tZmVlZGJhY2ssXG4gICAgICB+IC4jeyRzdGF0ZX0tdG9vbHRpcCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jdXN0b20tY29udHJvbC1pbnB1dCB7XG4gICAgQGluY2x1ZGUgZm9ybS12YWxpZGF0aW9uLXN0YXRlLXNlbGVjdG9yKCRzdGF0ZSkge1xuICAgICAgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICAgICAgICBjb2xvcjogJGNvbG9yO1xuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpjaGVja2VkIHtcbiAgICAgICAgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRjb2xvciwgMTAlKTtcbiAgICAgICAgICBAaW5jbHVkZSBncmFkaWVudC1iZyhsaWdodGVuKCRjb2xvciwgMTAlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwICRpbnB1dC1mb2N1cy13aWR0aCByZ2JhKCRjb2xvciwgLjI1KTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bm90KDpjaGVja2VkKSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGN1c3RvbSBmaWxlXG4gIC5jdXN0b20tZmlsZS1pbnB1dCB7XG4gICAgQGluY2x1ZGUgZm9ybS12YWxpZGF0aW9uLXN0YXRlLXNlbGVjdG9yKCRzdGF0ZSkge1xuICAgICAgfiAuY3VzdG9tLWZpbGUtbGFiZWwge1xuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIH4gLmN1c3RvbS1maWxlLWxhYmVsIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAkaW5wdXQtZm9jdXMtd2lkdGggcmdiYSgkY29sb3IsIC4yNSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIEdyYWRpZW50c1xuXG5AbWl4aW4gZ3JhZGllbnQtYmcoJGNvbG9yKSB7XG4gIEBpZiAkZW5hYmxlLWdyYWRpZW50cyB7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yIGxpbmVhci1ncmFkaWVudCgxODBkZWcsIG1peCgkYm9keS1iZywgJGNvbG9yLCAxNSUpLCAkY29sb3IpIHJlcGVhdC14O1xuICB9IEBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gIH1cbn1cblxuLy8gSG9yaXpvbnRhbCBncmFkaWVudCwgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbkBtaXhpbiBncmFkaWVudC14KCRzdGFydC1jb2xvcjogJGdyYXktNzAwLCAkZW5kLWNvbG9yOiAkZ3JheS04MDAsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gVmVydGljYWwgZ3JhZGllbnQsIGZyb20gdG9wIHRvIGJvdHRvbVxuLy9cbi8vIENyZWF0ZXMgdHdvIGNvbG9yIHN0b3BzLCBzdGFydCBhbmQgZW5kLCBieSBzcGVjaWZ5aW5nIGEgY29sb3IgYW5kIHBvc2l0aW9uIGZvciBlYWNoIGNvbG9yIHN0b3AuXG5AbWl4aW4gZ3JhZGllbnQteSgkc3RhcnQtY29sb3I6ICRncmF5LTcwMCwgJGVuZC1jb2xvcjogJGdyYXktODAwLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtZGlyZWN0aW9uYWwoJHN0YXJ0LWNvbG9yOiAkZ3JheS03MDAsICRlbmQtY29sb3I6ICRncmF5LTgwMCwgJGRlZzogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cbkBtaXhpbiBncmFkaWVudC14LXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICRibHVlLCAkbWlkLWNvbG9yOiAkcHVycGxlLCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAkcmVkKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtaXhpbiBncmFkaWVudC15LXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICRibHVlLCAkbWlkLWNvbG9yOiAkcHVycGxlLCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAkcmVkKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1peGluIGdyYWRpZW50LXJhZGlhbCgkaW5uZXItY29sb3I6ICRncmF5LTcwMCwgJG91dGVyLWNvbG9yOiAkZ3JheS04MDApIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1peGluIGdyYWRpZW50LXN0cmlwZWQoJGNvbG9yOiByZ2JhKCR3aGl0ZSwgLjE1KSwgJGFuZ2xlOiA0NWRlZykge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vXHJcbi8vIFZhcmlhYmxlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy89PSBDb2xvcnNcclxuLy9cclxuLy8jIyBHcmF5IGFuZCBicmFuZCBjb2xvcnMgZm9yIHVzZSBhY3Jvc3MgVGhlbWUuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBHcmF5c2NhbGVcclxuJGdyYXktZGFya2VyOiAgICAgICAgICAgICMzNzQyNTA7XHJcbiRncmF5LWRhcms6ICAgICAgICAgICAgXHQgIzYwNjk3NTtcclxuJGdyYXk6ICAgICAgICAgICAgICAgICAgICM5ZGE5Yjk7XHJcbiRncmF5LWxpZ2h0OiAgICAgICAgICAgICAjZTFlN2VjO1xyXG4kZ3JheS1saWdodGVyOiAgICAgICAgICAgI2Y1ZjVmNTtcclxuJHdoaXRlLWNvbG9yOiAgICAgICAgICAgICNmZmZmZmY7XHJcbiRibGFjay1jb2xvcjogICAgICAgICAgICAjMDAwMDAwO1xyXG5cclxuLy8gQnJhbmQgY29sb3JzXHJcbiRicmFuZC1wcmltYXJ5OiAgICAgICAgICMwZGE5ZWY7XHJcbiRicmFuZC1pbmZvOlx0XHQgICAgICAgICM1MGM2ZTk7XHJcbiRicmFuZC1zdWNjZXNzOiAgICAgICAgICM0M2Q5YTM7XHJcbiRicmFuZC13YXJuaW5nOiAgICAgICAgICNmZmI3NGY7XHJcbiRicmFuZC1kYW5nZXI6ICAgICAgICAgICNmZjUyNTI7XHJcblxyXG4vLyBCb2R5XHJcbiRib2R5LWJnOiBcdFx0XHRcdFx0XHRcdCR3aGl0ZS1jb2xvcjtcclxuJGJvZHktY29sb3I6IFx0XHRcdFx0XHRcdCRncmF5LWRhcms7XHJcblxyXG4vLyBJbmxpbmUgbGlua3NcclxuJGxpbmstY29sb3I6IFx0XHRcdFx0XHRcdCRicmFuZC1wcmltYXJ5O1xyXG4kbGluay1ob3Zlci1jb2xvcjogXHRcdFx0JGJyYW5kLXByaW1hcnk7XHJcblxyXG4vLyBIZWRpbmdzXHJcbiRoZWFkaW5ncy1jb2xvcjpcdCBcdFx0XHQkZ3JheS1kYXJrZXI7XHJcblxyXG4vLyBCbG9ja3F1b3RlXHJcbiRxdW90ZS10ZXh0LWNvbG9yOiAgICAgICRib2R5LWNvbG9yO1xyXG4kcXVvdGUtbWFyay1jb2xvcjogICAgICAkZ3JheTtcclxuJHF1b3RlLWF1dGhvci1jb2xvcjogICAgJGdyYXk7XHJcblxyXG4vLyBCb3JkZXJzXHJcbiRib3JkZXItY29sb3I6ICAgICAgICAgICRncmF5LWxpZ2h0O1xyXG4kYm9yZGVyLWxpZ2h0LWNvbG9yOiAgICByZ2JhKCR3aGl0ZS1jb2xvciwgLjEyKTtcclxuXHJcbi8vIEhpZ2hsaWdodCBjb2xvclxyXG4kaGlnaGxpZ2h0LWNvbG9yOiAgICAgICAjZmZmOGIwO1xyXG5cclxuXHJcbi8vPT0gVHlwb2dyYXBoeVxyXG4vL1xyXG4vLyMjIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kZm9udC1mYW1pbHktYmFzZTogXHRcdFx0ICAnTWF2ZW4gUHJvJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LWhlYWRpbmdzOiBcdCAgaW5oZXJpdDtcclxuXHJcbi8vIEZvbnQgc2l6ZXNcclxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAxNnB4O1xyXG4kZm9udC1zaXplLWxlYWQ6ICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjEyNSkpOyAvLyB+MThweFxyXG4kZm9udC1zaXplLXNtOiBcdFx0XHRcdCAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogLjg3NSkpOyAvLyB+MTRweFxyXG4kZm9udC1zaXplLXhzOiAgICAgICAgIFx0XHRmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogLjgxMjUpKTsgLy8gfjEzcHhcclxuXHJcbi8vIEhlYWRpbmdzXHJcbiRmb250LXNpemUtaDE6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDIuMjUpKTsgLy8gfjM2cHhcclxuJGZvbnQtc2l6ZS1oMjogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS44NzUpKTsgLy8gfjMwcHhcclxuJGZvbnQtc2l6ZS1oMzogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS41KSk7IC8vIH4yNHB4XHJcbiRmb250LXNpemUtaDQ6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuMjUpKTsgLy8gfjIwcHhcclxuJGZvbnQtc2l6ZS1oNTogICAgICAgICAgICAkZm9udC1zaXplLWxlYWQ7IC8vIH4xOHB4XHJcbiRmb250LXNpemUtaDY6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlOyAvLyB+MTZweFxyXG5cclxuLy8gRGlzcGxheSBoZWFkaW5nc1xyXG4kZGlzcGxheS0xOiAgICAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiA0LjUpKTsgLy8gfjcycHhcclxuJGRpc3BsYXktMjogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMy43NSkpOyAvLyB+NjBweFxyXG4kZGlzcGxheS0zOiAgICAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAzLjEyNSkpOyAvLyB+NTBweFxyXG4kZGlzcGxheS00OiAgICAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAyLjUpKTsgLy8gfjQwcHhcclxuXHJcbi8vIEZvbnQgc3R5bGVzXHJcbiRmb250LXN0eWxlLWJhc2U6ICAgICAgICAgbm9ybWFsO1xyXG4kZm9udC1zdHlsZS1oZWFkaW5nczogICAgIG5vcm1hbDtcclxuXHJcbi8vIEZvbnQgd2VpZ2h0c1xyXG4kZm9udC13ZWlnaHQtYmFzZTogICAgICAgICBub3JtYWw7XHJcbiRmb250LXdlaWdodC1oZWFkaW5nczogICAgIDUwMDtcclxuXHJcbi8vIFRleHQgdHJhbnNmb3Jtc1xyXG4kdGV4dC10cmFuc2Zvcm0tYmFzZTogICAgIG5vbmU7XHJcbiR0ZXh0LXRyYW5zZm9ybS1oZWFkaW5nczogbm9uZTtcclxuXHJcbi8vIExpbmUgaGVpZ2h0c1xyXG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgMS41O1xyXG4kbGluZS1oZWlnaHQtaDE6ICAgICAgICAgMS4xNTtcclxuJGxpbmUtaGVpZ2h0LWgyOiAgICAgICAgIDEuMjtcclxuJGxpbmUtaGVpZ2h0LWgzOiAgICAgICAgIDEuMjU7XHJcbiRsaW5lLWhlaWdodC1oNDogICAgICAgICAxLjM7XHJcbiRsaW5lLWhlaWdodC1oNTogICAgICAgICAxLjM1O1xyXG4kbGluZS1oZWlnaHQtaDY6ICAgICAgICAgMS40O1xyXG4kbGluZS1oZWlnaHQtZGlzcGxheTogICAgMS4xNTtcclxuXHJcblxyXG4vLz09IEdyaWQgVmVydGljYWwgU3RlcFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kZ3JpZC12ZXJ0aWNhbC1zdGVwOiAgICAgMjRweDtcclxuXHJcblxyXG4vLz09IEJvcmRlciBSYWRpdXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGJvcmRlci1yYWRpdXMtbGc6IFx0XHQ3cHg7XHJcbiRib3JkZXItcmFkaXVzLWJhc2U6IFx0NXB4O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogXHRcdDNweDtcclxuXHJcblxyXG4vLz09IEZvcm1zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRpbnB1dC1oZWlnaHQtbGc6XHRcdFx0XHRcdFx0XHQ1NHB4O1xyXG4kaW5wdXQtaGVpZ2h0Olx0XHRcdFx0XHRcdFx0XHQ0NHB4O1xyXG4kaW5wdXQtaGVpZ2h0LXNtOlx0XHRcdFx0XHRcdFx0MzZweDtcclxuJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyOiAgICAgJGdyYXk7XHJcblxyXG5cclxuLy89PSBCdXR0b25zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRidG4tZm9udC1zaXplOiBcdFx0XHRcdFx0XHRcdCRmb250LXNpemUtc207XHJcbiRidG4tc20tZm9udC1zaXplOiBcdFx0XHRcdFx0XHQkZm9udC1zaXplLXhzO1xyXG4kYnRuLXRleHQtdHJhbnNmb3JtOiAgICAgICAgICB1cHBlcmNhc2U7XHJcbiRidG4tZm9udC13ZWlnaHQ6IFx0XHRcdFx0XHRcdDUwMDtcclxuJGJ0bi10ZXh0LWNvbG9yOiAgICAgICAgICAgICAgJGdyYXktZGFyaztcclxuXHJcbiRidG4taGVpZ2h0OiBcdFx0XHRcdFx0XHRcdFx0XHQ0NHB4O1xyXG4kYnRuLWxnLWhlaWdodDogXHRcdFx0XHRcdFx0XHQ1NHB4O1xyXG4kYnRuLXNtLWhlaWdodDogXHRcdFx0XHRcdFx0XHQzNnB4O1xyXG5cclxuJGJ0bi1tYXJnaW46ICAgICAgICAgICAgICAgICAgZmxvb3IoJGdyaWQtdmVydGljYWwtc3RlcCAvIDIpOyAvL34xMnB4XHJcbiRzb2NpYWwtYnRuLXNpemU6IFx0XHRcdFx0XHRcdCRmb250LXNpemUteHM7XHJcblxyXG5cclxuLy89PSBUYWJsZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJHRhYmxlLWJvcmRlci1jb2xvcjogXHRcdFx0XHRcdCRib3JkZXItY29sb3I7XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmc6XHRcdFx0XHRcdDE1cHg7XHJcbiR0YWJsZS1iZy1hY2NlbnQ6IFx0XHRcdFx0XHRcdCRncmF5LWxpZ2h0ZXI7XHJcblxyXG5cclxuLy89PSBOYXZiYXIgLyBMb2dvXHJcbi8vXHJcblxyXG4kbmF2YmFyLW1pbi1oZWlnaHQ6IFx0XHRcdDg0cHg7XHJcbiRuYXZiYXItc3R1Y2stc2hhZG93OiAgICAgMCAzcHggMjVweCAwIHJnYmEoZGFya2VuKCRncmF5LWRhcmtlciwgNCUpLCAuMjIpO1xyXG4kbG9nby13aWR0aDogXHRcdFx0XHQgICAgICAxMjlweDtcclxuXHJcbi8vIE5hdmJhciBUb29sc1xyXG4kbmF2YmFyLXRvb2xzLWNvbG9yOiAgICAgICAgICAkZ3JheS1kYXJrO1xyXG4kbmF2YmFyLXRvb2xzLXNpemU6ICAgICAgICAgICAkYnRuLWhlaWdodDtcclxuJG9mZmNhbnZhcy10b2dnbGUtaWNvbi1zaXplOiAgMjBweDtcclxuJHRvb2xzLWljb24tc2l6ZTogICAgICAgICAgICAgMTdweDtcclxuXHJcblxyXG4vLz09IE5hdmlnYXRpb25cclxuLy9cclxuXHJcbiRuYXYtbGluay1mb250LXNpemU6IFx0XHRcdFx0JGZvbnQtc2l6ZS1zbTsgLy8gMTRweFxyXG4kbmF2LWxpbmstZm9udC13ZWlnaHQ6IFx0XHRcdDUwMDtcclxuJG5hdi1saW5rLWNvbG9yOiBcdFx0XHRcdFx0XHQkZ3JheS1kYXJrO1xyXG4kbmF2LWxpbmstaG92ZXItY29sb3I6IFx0XHRcdCRicmFuZC1wcmltYXJ5O1xyXG4kbmF2LWxpbmstYWN0aXZlLWNvbG9yOiBcdFx0JGJyYW5kLXByaW1hcnk7XHJcblxyXG4vLyBTdWIgTWVudSAvIE1lZ2EgTWVudVxyXG4kc3ViLW1lbnUtd2lkdGg6ICAgICAgICAgICAgMjAwcHg7XHJcbiRzdWItbWVudS1zaGFkb3c6ICAgICAgICAgICAwIDdweCAyMnB4IC01cHggcmdiYShkYXJrZW4oJGdyYXktZGFya2VyLCA0JSksIC4yKTtcclxuXHJcbi8vIE9mZi1DYW52YXNcclxuJG9mZmNhbnZhcy13aWR0aDogICAgICAgICAgIDI5MHB4O1xyXG5cclxuXHJcbi8vPT0gVGFic1xyXG4vL1xyXG5cclxuJG5hdi10YWJzLWZvbnQtc2l6ZTpcdFx0XHRcdFx0XHRcdFx0Zmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC44NzUpKTsgLy8gfjE0cHhcclxuJG5hdi10YWJzLWxpbmstY29sb3I6IFx0XHRcdFx0XHRcdFx0JGdyYXk7XHJcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogIFx0XHRcdCRncmF5LWRhcms7XHJcblxyXG5cclxuLy89PSBQcm9ncmVzc1xyXG4vL1xyXG5cclxuJHByb2dyZXNzLWhlaWdodDogICAgIDE4cHg7XHJcbiRwcm9ncmVzcy1iZzogICAgICAgICAkYnJhbmQtcHJpbWFyeTtcclxuXHJcblxyXG4vLz09IFN0ZXBzXHJcbi8vXHJcblxyXG4kc3RlcC1jaXJjbGUtc2l6ZTogICAgICAgIDgwcHg7XHJcbiRzdGVwLWljb24tZGVmYXVsdC1iZzogICAgJGdyYXktbGlnaHRlcjtcclxuJHN0ZXAtaWNvbi1zaXplOiAgICAgICAgICAzOHB4O1xyXG4kc3RlcC1pY29uLWRlZmF1bHQtY29sb3I6ICRncmF5LWRhcmtlcjtcclxuJHN0ZXAtdGl0bGUtc2l6ZTogICAgICAgICAkZm9udC1zaXplLXNtO1xyXG4kc3RlcC10aXRsZS1jb2xvcjogICAgICAgICRncmF5LWRhcms7XHJcbiRzdGVwLWNvbm5lY3QtaGVpZ2h0OiAgICAgM3B4O1xyXG5cclxuXHJcbi8vID09IFNob3BcclxuLy9cclxuXHJcbi8vIFByb2R1Y3RcclxuJHByb2R1Y3QtdGl0bGUtZm9udC1zaXplOiAgICAgJGZvbnQtc2l6ZS1iYXNlO1xyXG4kcHJvZHVjdC10aXRsZS1jb2xvcjogICAgICAgICAkZ3JheS1kYXJrZXI7XHJcbiRwcm9kdWN0LXRpdGxlLWhvdmVyLWNvbG9yOiAgICRicmFuZC1wcmltYXJ5O1xyXG4kcHJvZHVjdC1wcmljZS1mb250LXNpemU6ICAgICAkZm9udC1zaXplLWJhc2U7XHJcbiRwcm9kdWN0LXByaWNlLWNvbG9yOiAgICAgICAgICRncmF5LWRhcms7XHJcblxyXG4vLyBTaG9wIFZpZXdcclxuJHNob3Atdmlldy1zaXplOiAgICAgICAgICAgIDQzcHg7XHJcbiRzaG9wLXZpZXctY29sb3I6ICAgICAgICAgICAkZ3JheS1kYXJrO1xyXG4kc2hvcC12aWV3LWJnLWNvbG9yOiAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG4kc2hvcC12aWV3LWhvdmVyLWJnLWNvbG9yOiAgJGdyYXktbGlnaHRlcjtcclxuJHNob3Atdmlldy1hY3RpdmUtYmctY29sb3I6ICRicmFuZC1wcmltYXJ5O1xyXG5cclxuLy8gQ2FydFxyXG4kY2FydC10aHVtYi1zaXplOiAgICAgICAgIDExMHB4O1xyXG5cclxuLy8gQWNjb3VudFxyXG4kY292ZXItaGVpZ2h0OiAgICAgICAgICAgIDEyMHB4O1xyXG4kdXNlci1hdmEtc2l6ZTogICAgICAgICAgIDExNXB4O1xyXG5cclxuXHJcbi8vID09IEJsb2dcclxuLy9cclxuXHJcbiRibG9nLXBvc3QtbWV0YS1jb2xvcjogICAgICAkZ3JheS1kYXJrO1xyXG4kYmxvZy1wb3N0LW1ldGEtaWNvbi1jb2xvcjogJGdyYXk7XHJcbiRibG9nLXBvc3QtbWV0YS1mb250LXNpemU6ICAkZm9udC1zaXplLXhzO1xyXG4kYmxvZy1wb3N0LWNvbG9yOiAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yO1xyXG4kYmxvZy1wb3N0LWhvdmVyLWNvbG9yOiAgICAgJGJyYW5kLXByaW1hcnk7XHJcblxyXG5cclxuLy8gPT0gQ29tbWVudHNcclxuLy9cclxuXHJcbiRjb21tZW50LWF1dGhvci1hdmEtc2l6ZTogICA1MHB4O1xyXG4kY29tbWVudC10aXRsZS1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJGNvbW1lbnQtdGl0bGUtd2VpZ2h0OiAgICAgIDUwMDtcclxuXHJcblxyXG4vLz09IFdpZGdldHNcclxuLy9cclxuXHJcbiRzaWRlYmFyLW1heC13aWR0aDogICAgICAgICAgNDAwcHg7XHJcbiRzaWRlYmFyLW9mZmNhbnZhcy13aWR0aDogICAgMzIwcHg7XHJcbiR3aWRnZXQtdGl0bGUtY29sb3I6ICAgICAgICAgJGdyYXk7XHJcbiR3aWRnZXQtdGl0bGUtZm9udC1zaXplOiAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJHdpZGdldC1saW5rLWZvbnQtc2l6ZTogICAgICAkZm9udC1zaXplLXNtO1xyXG4kd2lkZ2V0LW1ldGEtY29sb3I6ICAgICAgICAgICRncmF5O1xyXG4kd2lkZ2V0LW1ldGEtZm9udC1zaXplOiAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgLyAxLjMzKSk7IC8vfjEycHhcclxuJHdpZGdldC1lbnRyeS10aHVtYi1zaXplOiAgICA1MHB4O1xyXG5cclxuLy8gVGFnc1xyXG4kd2lkZ2V0LXRhZ3MtaGVpZ2h0OiAgICAgICAgICAgICAgMjhweDtcclxuJHdpZGdldC10YWdzLWZvbnQtc2l6ZTogICAgICAgICAgICRmb250LXNpemUteHM7XHJcbiR3aWRnZXQtdGFncy1jb2xvcjogICAgICAgICAgICAgICAkbmF2LWxpbmstY29sb3I7XHJcbiR3aWRnZXQtdGFncy1ob3Zlci1iZzogICAgICAgICAgICAkZ3JheS1saWdodGVyO1xyXG4kd2lkZ2V0LXRhZ3MtYWN0aXZlLWJnOiAgICAgICAgICAgJG5hdi1saW5rLWFjdGl2ZS1jb2xvcjtcclxuJHdpZGdldC10YWdzLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRuYXYtbGluay1hY3RpdmUtY29sb3I7XHJcbiR3aWRnZXQtdGFncy1hY3RpdmUtY29sb3I6ICAgICAgICAkd2hpdGUtY29sb3I7XHJcblxyXG5cclxuLy89PSBQYWdpbmF0aW9uXHJcbi8vXHJcblxyXG4kcGFnaW5hdGlvbi1saW5rLXNpemU6ICAgICAgICAgJGJ0bi1zbS1oZWlnaHQ7XHJcbiRwYWdpbmF0aW9uLWxpbmstZm9udC1zaXplOiAgICAkZm9udC1zaXplLXNtO1xyXG4kcGFnaW5hdGlvbi1saW5rLWZvbnQtd2VpZ2h0OiAgNTAwO1xyXG4kcGFnaW5hdGlvbi1saW5rLWNvbG9yOiAgICAgICAgJGdyYXktZGFyaztcclxuJHBhZ2luYXRpb24tbGluay1hY3RpdmUtY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuJHBhZ2luYXRpb24tbGluay1ob3Zlci1iZzogICAgICRncmF5LWxpZ2h0ZXI7XHJcbiRwYWdpbmF0aW9uLWxpbmstYWN0aXZlLWJnOiAgICAkYnJhbmQtcHJpbWFyeTtcclxuXHJcblxyXG4vLz09IFRvb2x0aXBzXHJcbi8vXHJcblxyXG4kdG9vbHRpcC1vcGFjaXR5OiAgICBcdFx0MTtcclxuJHRvb2x0aXAtYmc6IFx0XHRcdFx0IFx0XHRkYXJrZW4oJGdyYXktZGFya2VyLCA0JSk7XHJcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgICR3aGl0ZS1jb2xvcjtcclxuJHRvb2x0aXAtYXJyb3ctY29sb3I6IFx0JHRvb2x0aXAtYmc7XHJcblxyXG5cclxuLy89PSBDYXJvdXNlbFxyXG4vL1xyXG5cclxuJGNhcm91c2VsLW5hdnMtc2l6ZTogXHRcdFx0XHQgICRidG4taGVpZ2h0O1xyXG4kY2Fyb3VzZWwtbmF2cy1pY29uLXNpemU6IFx0ICAxOXB4O1xyXG4kY2Fyb3VzZWwtbmF2cy1iZzogICAgICAgICAgICAkd2hpdGUtY29sb3I7XHJcbiRjYXJvdXNlbC1uYXZzLWNvbG9yOiBcdFx0XHQgICRncmF5LWRhcmtlcjtcclxuJGNhcm91c2VsLWRvdHMtc2l6ZTogXHRcdFx0XHQgIDZweDtcclxuJGNhcm91c2VsLWRvdHMtY29sb3I6IFx0ICBcdCAgJGdyYXktZGFyaztcclxuXHJcbi8vIEhlcm8gU2xpZGVyXHJcbiRoZXJvLXNsaWRlci1taW4taGVpZ2h0OiAgICAgIDU4MHB4O1xyXG5cclxuLy89PSBDb3VudGRvd25cclxuLy9cclxuXHJcbiRjb3VudGRvd24tYm94LXNpemU6ICAgICAgICAgIDQ4cHg7XHJcbiRjb3VudGRvd24tZm9udC1zaXplOiAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjM3NSkpOyAvLyB+MjJweFxyXG4kY291bnRkb3duLWxhYmVsLXNpemU6ICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogLjc1KSk7IC8vIH4xMnB4XHJcblxyXG5cclxuLy89PSBNZWRpYSBxdWVyaWVzIChyZXNwb25zaXZlIGJyZWFja3BvaW50cylcclxuLy8jIyBEZXNja3RvcCwgVGFibGV0LCBNb2JpbGVcclxuXHJcbiRzY3JlZW4teGw6IDEyMDBweDtcclxuJHNjcmVlbi1sZzogOTkxcHg7XHJcbiRzY3JlZW4tbWQ6IDc2OHB4O1xyXG4kc2NyZWVuLXNtOiA1NzZweDtcclxuJHNjcmVlbi14czogMzYwcHg7XHJcblxyXG4kbmF2LWNvbGxhcHNlOiAgICAgMTA3MHB4O1xyXG4iXX0= */"] });


/***/ }),

/***/ 8085:
/*!*********************************************!*\
  !*** ./src/app/cart/shared/cart.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../messages/message.service */ 5985);



class CartService {
    constructor(messageService) {
        this.messageService = messageService;
        this.itemsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.cartItems = [];
    }
    getItems() {
        return this.cartItems.slice();
    }
    // Get Product ids out of CartItem[] in a new array
    getItemIds() {
        return this.getItems().map(cartItem => cartItem.product.id);
    }
    addItem(item) {
        // If item is already in cart, add to the amount, otherwise push item into cart
        if (this.getItemIds().includes(item.product.id)) {
            this.cartItems.forEach(function (cartItem) {
                if (cartItem.product.id === item.product.id) {
                    cartItem.amount += item.amount;
                }
            });
            this.messageService.add('Amount in cart changed for: ' + item.product.name);
        }
        else {
            this.cartItems.push(item);
            this.messageService.add('Added to cart: ' + item.product.name);
        }
        this.itemsChanged.emit(this.cartItems.slice());
    }
    addItems(items) {
        items.forEach((cartItem) => {
            this.addItem(cartItem);
        });
    }
    removeItem(item) {
        const indexToRemove = this.cartItems.findIndex(element => element === item);
        this.cartItems.splice(indexToRemove, 1);
        this.itemsChanged.emit(this.cartItems.slice());
        this.messageService.add('Deleted from cart: ' + item.product.name);
    }
    updateItemAmount(item, newAmount) {
        this.cartItems.forEach((cartItem) => {
            if (cartItem.product.id === item.product.id) {
                cartItem.amount = newAmount;
            }
        });
        this.itemsChanged.emit(this.cartItems.slice());
        this.messageService.add('Updated amount for: ' + item.product.name);
    }
    clearCart() {
        this.cartItems = [];
        this.itemsChanged.emit(this.cartItems.slice());
        this.messageService.add('Cleared cart');
    }
    getTotal() {
        let total = 0;
        this.cartItems.forEach((cartItem) => {
            total += cartItem.amount * cartItem.product.price;
        });
        return total;
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_messages_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService)); };
CartService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac });


/***/ }),

/***/ 3428:
/*!*******************************************************!*\
  !*** ./src/app/checkout/address/address.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressComponent": () => (/* binding */ AddressComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_checkout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/checkout.service */ 3948);
/* harmony import */ var _account_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../account/shared/auth.service */ 1544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 6627);







function AddressComponent_form_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please enter your firstname!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddressComponent_form_3_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please enter your lastname!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddressComponent_form_3_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please enter your address!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddressComponent_form_3_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please enter your zip code!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddressComponent_form_3_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please enter your city!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddressComponent_form_3_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please enter your E-mail!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddressComponent_form_3_option_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", country_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](country_r8);
} }
const _c0 = function (a0) { return { "has-danger": a0 }; };
function AddressComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AddressComponent_form_3_div_7_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AddressComponent_form_3_div_13_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 4)(15, "div", 5)(16, "div", 6)(17, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Address 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, AddressComponent_form_3_div_20_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 5)(22, "div", 14)(23, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Address 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 4)(27, "div", 5)(28, "div", 6)(29, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "ZIP Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, AddressComponent_form_3_div_32_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 5)(34, "div", 6)(35, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, AddressComponent_form_3_div_38_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 4)(40, "div", 5)(41, "div", 6)(42, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "E-mail Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, AddressComponent_form_3_div_45_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 5)(47, "div", 14)(48, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 4)(52, "div", 5)(53, "div", 14)(54, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 5)(58, "div", 14)(59, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, AddressComponent_form_3_option_62_Template, 2, 2, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Shipping Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "hr", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 14)(67, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "input", 31)(69, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Same as billing address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddressComponent_form_3_Template_a_click_72_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.onFillForm($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Debug: Fill out form");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.formAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c0, ctx_r0.formAddress.get("firstname").invalid && ctx_r0.formAddress.get("firstname").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.formAddress.get("firstname").invalid && ctx_r0.formAddress.get("firstname").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c0, ctx_r0.formAddress.get("lastname").invalid && ctx_r0.formAddress.get("lastname").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.formAddress.get("lastname").invalid && ctx_r0.formAddress.get("lastname").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c0, ctx_r0.formAddress.get("address1").invalid && ctx_r0.formAddress.get("address1").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.formAddress.get("address1").invalid && ctx_r0.formAddress.get("address1").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c0, ctx_r0.formAddress.get("zip").invalid && ctx_r0.formAddress.get("zip").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.formAddress.get("zip").invalid && ctx_r0.formAddress.get("zip").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](22, _c0, ctx_r0.formAddress.get("city").invalid && ctx_r0.formAddress.get("city").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.formAddress.get("city").invalid && ctx_r0.formAddress.get("city").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](24, _c0, ctx_r0.formAddress.get("email").invalid && ctx_r0.formAddress.get("email").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.formAddress.get("email").invalid && ctx_r0.formAddress.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.countries);
} }
const _c1 = function () { return ["backToCart", "continue"]; };
class AddressComponent {
    constructor(checkoutService, authService) {
        this.checkoutService = checkoutService;
        this.authService = authService;
    }
    ngOnInit() {
        this.initFormGroup();
        this.authSubscription = this.authService.user.subscribe((user) => {
            if (user) {
                this.user = user;
                this.initFormGroup();
            }
        });
    }
    initFormGroup() {
        this.countries = ['Switzerland'];
        this.formAddress = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(this.user && this.user.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(this.user && this.user.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            address1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^\d\d\d\d$/)
            ]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(this.user && this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(null),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl({ value: this.countries[0], disabled: false })
        });
    }
    onContinue() {
        this.checkoutService.setCustomer(this.formAddress.value);
        this.checkoutService.nextStep();
    }
    // Debug: Fill Form Helper MEthod
    onFillForm(event) {
        event.preventDefault();
        this.formAddress.setValue({
            firstname: 'Hans',
            lastname: 'Muster',
            address1: 'Musterstrasse 13',
            address2: '',
            zip: 1234,
            city: 'Musterhausen',
            email: 'hans.muster@muster.com',
            phone: '+41791234567',
            company: '',
            country: 'Switzerland'
        });
    }
    ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }
}
AddressComponent.ɵfac = function AddressComponent_Factory(t) { return new (t || AddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_checkout_service__WEBPACK_IMPORTED_MODULE_0__.CheckoutService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_account_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
AddressComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddressComponent, selectors: [["app-checkout-address"]], inputs: { user: "user" }, decls: 5, vars: 4, consts: [[1, "padding-bottom-1x"], [3, "formGroup", 4, "ngIf"], [3, "buttons", "continueEnabled", "continue"], [3, "formGroup"], [1, "row"], [1, "col-sm-6"], [1, "form-group", 3, "ngClass"], ["for", "firstname"], ["type", "text", "id", "firstname", "name", "firstname", "formControlName", "firstname", 1, "form-control"], ["class", "form-control-feedback", 4, "ngIf"], ["for", "lastname"], ["type", "text", "id", "lastname", "name", "lastname", "formControlName", "lastname", 1, "form-control"], ["for", "address1"], ["type", "text", "id", "address1", "name", "address1", "formControlName", "address1", 1, "form-control"], [1, "form-group"], ["for", "address2"], ["type", "text", "id", "address2", "name", "address2", "formControlName", "address2", 1, "form-control"], ["for", "zip"], ["type", "text", "name", "zip", "id", "zip", "formControlName", "zip", 1, "form-control"], ["for", "city"], ["type", "text", "name", "city", "id", "city", "formControlName", "city", 1, "form-control"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "formControlName", "email", 1, "form-control"], ["for", "phone"], ["type", "text", "id", "phone", "name", "phone", "formControlName", "phone", 1, "form-control"], ["for", "company"], ["type", "text", "id", "company", "name", "company", "formControlName", "company", 1, "form-control"], ["for", "country"], ["id", "country", "name", "country", "formControlName", "country", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "checked", "", 1, "custom-control-input"], [1, "custom-control-indicator"], [1, "custom-control-description"], ["href", "", 3, "click"], [1, "form-control-feedback"], [3, "value"]], template: function AddressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Billing Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddressComponent_form_3_Template, 74, 26, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "app-checkout-footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("continue", function AddressComponent_Template_app_checkout_footer_continue_4_listener() { return ctx.onContinue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("buttons", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1))("continueEnabled", ctx.formAddress.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRyZXNzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1594:
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutComponent": () => (/* binding */ CheckoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_checkout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/checkout.service */ 3948);
/* harmony import */ var _core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/page-title/page-title.component */ 9526);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address/address.component */ 3428);
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment/payment.component */ 7179);
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./review/review.component */ 7068);
/* harmony import */ var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipping/shipping.component */ 3677);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 3051);









function CheckoutComponent_button_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 9);
} }
const _c0 = function (a0, a1) { return { "active": a0, "active-sibling": a1 }; };
function CheckoutComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CheckoutComponent_button_5_span_1_Template, 1, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](3, _c0, i_r2 === ctx_r0.activeStep, i_r2 === ctx_r0.activeStep - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r2 < ctx_r0.steps.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](step_r1);
} }
const _c1 = function () { return { title: "Checkout" }; };
const _c2 = function (a0) { return [a0]; };
const _c3 = function (a0) { return { "d-none": a0 }; };
class CheckoutComponent {
    constructor(checkoutService) {
        this.checkoutService = checkoutService;
    }
    ngOnInit() {
        this.steps = ['1. Address', '2. Shipping', '3. Payment', '4. Review'];
        this.activeStep = this.checkoutService.activeStep;
        this.checkoutSubscription = this.checkoutService.stepChanged.subscribe((step) => {
            this.activeStep = step;
        });
    }
    ngOnDestroy() {
        this.checkoutSubscription.unsubscribe();
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_checkout_service__WEBPACK_IMPORTED_MODULE_0__.CheckoutService)); };
CheckoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 12, vars: 17, consts: [["title", "Checkout", 3, "children"], [1, "container", "padding-bottom-3x", "mb-2"], [1, "row"], [1, "col-xl-9", "col-lg-8"], [1, "checkout-steps"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "col-xl-3", "col-lg-4"], ["class", "angle", 4, "ngIf"], [1, "angle"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-page-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CheckoutComponent_button_5_Template, 3, 6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-checkout-address", 6)(7, "app-checkout-shipping", 6)(8, "app-checkout-payment", 6)(9, "app-checkout-review", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "app-checkout-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("children", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c3, ctx.activeStep !== 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c3, ctx.activeStep !== 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c3, ctx.activeStep !== 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](15, _c3, ctx.activeStep !== 3));
    } }, dependencies: [_core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_1__.PageTitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _address_address_component__WEBPACK_IMPORTED_MODULE_2__.AddressComponent, _payment_payment_component__WEBPACK_IMPORTED_MODULE_3__.PaymentComponent, _review_review_component__WEBPACK_IMPORTED_MODULE_4__.ReviewComponent, _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_5__.ShippingComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.SidebarComponent], styles: [".checkout-steps[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.checkout-steps[_ngcontent-%COMP%]::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.checkout-steps[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .checkout-steps[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-right: 18px;\n  width: 25%;\n  height: 55px;\n  float: left;\n  transition: color 0.3s;\n  border: none;\n  border-top: 1px solid #e1e7ec;\n  border-bottom: 1px solid #e1e7ec;\n  background-color: #ffffff;\n  color: #606975;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 53px;\n  text-decoration: none;\n  text-align: center;\n}\n.checkout-steps[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .angle[_ngcontent-%COMP%], .checkout-steps[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > .angle[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0px;\n  width: 27px;\n  height: 53px;\n  background-color: #ffffff;\n}\n.checkout-steps[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .angle[_ngcontent-%COMP%]::before, .checkout-steps[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .angle[_ngcontent-%COMP%]::after, .checkout-steps[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > .angle[_ngcontent-%COMP%]::before, .checkout-steps[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > .angle[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n  content: \"\";\n  pointer-events: none;\n}\n.checkout-steps[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .angle[_ngcontent-%COMP%]::after, .checkout-steps[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > .angle[_ngcontent-%COMP%]::after {\n  border-width: 26px;\n  border-color: transparent;\n  border-left-color: #ffffff;\n}\n.checkout-steps[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .angle[_ngcontent-%COMP%]::before, .checkout-steps[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > .angle[_ngcontent-%COMP%]::before {\n  margin-top: -1px;\n  border-width: 27px;\n  border-color: transparent;\n  border-left-color: #d8e0e6;\n}\n.checkout-steps[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%], .checkout-steps[_ngcontent-%COMP%]    > button.active[_ngcontent-%COMP%] {\n  background-color: #0da9ef;\n  color: #ffffff;\n  cursor: default;\n  pointer-events: none;\n}\n.checkout-steps[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%]    > .angle[_ngcontent-%COMP%]::after, .checkout-steps[_ngcontent-%COMP%]    > button.active[_ngcontent-%COMP%]    > .angle[_ngcontent-%COMP%]::after {\n  border-left-color: #0da9ef;\n}\n.checkout-steps[_ngcontent-%COMP%]    > a.active-sibling[_ngcontent-%COMP%]    > .angle[_ngcontent-%COMP%], .checkout-steps[_ngcontent-%COMP%]    > button.active-sibling[_ngcontent-%COMP%]    > .angle[_ngcontent-%COMP%] {\n  background-color: #0da9ef;\n}\n.checkout-steps[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:first-child, .checkout-steps[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #e1e7ec;\n  border-top-left-radius: 7px;\n  border-bottom-left-radius: 7px;\n}\n.checkout-steps[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:last-child, .checkout-steps[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #e1e7ec;\n  border-top-right-radius: 7px;\n  border-bottom-right-radius: 7px;\n}\n@media (max-width: 576px) {\n  .checkout-steps[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n    float: none;\n    border: 1px solid #e1e7ec;\n    border-radius: 7px;\n  }\n  .checkout-steps[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .angle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxzY3NzXFxoZWxwZXJzXFxfbWl4aW5zLnNjc3MiLCIuLlxcLi5cXHNjc3NcXGhlbHBlcnNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG1CQUFBO0FBRkY7QUN1S0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QURyS0o7QUFBRTs7RUFFRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUdFLDZCQUFBO0VBQ0EsZ0NBQUE7RUFHRix5QkVScUI7RUZTckIsY0VicUI7RUZnQm5CLGVFaUNpQjtFRmhDakIsZ0JFMElvQjtFRnZJdEIsaUJBQUE7RUFHRSxxQkFBQTtFQUNBLGtCQUFBO0FBUk47QUFXSTs7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJFOUJtQjtBRnNCekI7QUFVTTs7O0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFQUjtBQVVNOztFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkUvQ2lCO0FGd0N6QjtBQVVNOztFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBUFI7QUFXSTs7RUFDRSx5QkV2RGtCO0VGd0RsQixjRTVEbUI7RUY2RG5CLGVBQUE7RUFDQSxvQkFBQTtBQVJOO0FBVU07O0VBQWtCLDBCRTVEQTtBRnNEeEI7QUFVUTs7RUFBVyx5QkVoRUs7QUYwRHhCO0FBU0k7O0VBQ0UsOEJBQUE7RUFDQSwyQkVxQmU7RUZwQmYsOEJFb0JlO0FGMUJyQjtBQVNJOztFQUNFLCtCQUFBO0VBQ0EsNEJFZWU7RUZkZiwrQkVjZTtBRnBCckI7QUFVRTtFQUVFO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLHlCQUFBO0lBQ0Esa0JFR2U7RUZabkI7RUFVSTtJQUFXLGFBQUE7RUFQZjtBQUNGIiwiZmlsZSI6ImNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNjc3MvaGVscGVycy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICd+c2Nzcy9oZWxwZXJzL21peGlucyc7XHJcblxyXG4uY2hlY2tvdXQtc3RlcHMge1xyXG4gIG1hcmdpbi1ib3R0b206IGZsb29yKCRncmlkLXZlcnRpY2FsLXN0ZXAgKiAxLjcpOyAvLyB+NDBweFxyXG4gIEBpbmNsdWRlIGNsZWFyZml4O1xyXG5cclxuICA+IGEsXHJcbiAgPiBidXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjNzO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgIGJvcmRlcjoge1xyXG4gICAgICB0b3A6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnO1xyXG4gICAgY29sb3I6ICRuYXYtbGluay1jb2xvcjtcclxuXHJcbiAgICBmb250OiB7XHJcbiAgICAgIHNpemU6ICRuYXYtbGluay1mb250LXNpemU7XHJcbiAgICAgIHdlaWdodDogJG5hdi1saW5rLWZvbnQtd2VpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmUtaGVpZ2h0OiA1M3B4O1xyXG5cclxuICAgIHRleHQ6IHtcclxuICAgICAgZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICA+IC5hbmdsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgd2lkdGg6IDI3cHg7XHJcbiAgICAgIGhlaWdodDogNTNweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJvZHktYmc7XHJcblxyXG4gICAgICAmOjpiZWZvcmUsXHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogJGJvZHktYmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDI3cHg7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogZGFya2VuKCRib3JkZXItY29sb3IsIDMlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi1saW5rLWFjdGl2ZS1jb2xvcjtcclxuICAgICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHJcbiAgICAgID4gLmFuZ2xlOjphZnRlciB7IGJvcmRlci1sZWZ0LWNvbG9yOiAkbmF2LWxpbmstYWN0aXZlLWNvbG9yOyB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUtc2libGluZyB7XHJcbiAgICAgICAgPiAuYW5nbGUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LWxpbmstYWN0aXZlLWNvbG9yOyB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGc7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWxnO1xyXG4gICAgfVxyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1sZztcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWxnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tc20pIHtcclxuXHJcbiAgICA+IGEge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWxnO1xyXG4gICAgICA+IC5hbmdsZSB7IGRpc3BsYXk6IG5vbmU7IH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy9cclxuLy8gTWl4aW5zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBCbG9jayBwYWRkaW5ncyBjbGFzc2VzXHJcbkBtaXhpbiBibG9jay1wYWRkaW5nLXRvcCgkZnJvbTogMSwgJHRvOiAxMCkge1xyXG4gIEBmb3IgJGkgZnJvbSAkZnJvbSB0aHJvdWdoICR0byB7XHJcbiAgICAucGFkZGluZy10b3AtI3skaX14IHtcclxuICAgICAgcGFkZGluZy10b3A6IGZsb29yKCRncmlkLXZlcnRpY2FsLXN0ZXAgKiAkaSkgIWltcG9ydGFudDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogZmxvb3IoKCRncmlkLXZlcnRpY2FsLXN0ZXAgKiAkaSkgLyAxLjUpICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1peGluIGJsb2NrLXBhZGRpbmctYm90dG9tKCRmcm9tOiAxLCAkdG86IDEwKSB7XHJcbiAgQGZvciAkaSBmcm9tICRmcm9tIHRocm91Z2ggJHRvIHtcclxuICAgIC5wYWRkaW5nLWJvdHRvbS0jeyRpfXgge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogZmxvb3IoJGdyaWQtdmVydGljYWwtc3RlcCAqICRpKSAhaW1wb3J0YW50O1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBmbG9vcigoJGdyaWQtdmVydGljYWwtc3RlcCAqICRpKSAvIDEuNSkgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQmxvY2sgbWFyZ2lucyBjbGFzc2VzXHJcbkBtaXhpbiBibG9jay1tYXJnaW4tdG9wKCRmcm9tOiAxLCAkdG86IDEwKSB7XHJcbiAgQGZvciAkaSBmcm9tICRmcm9tIHRocm91Z2ggJHRvIHtcclxuICAgIC5tYXJnaW4tdG9wLSN7JGl9eCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IGZsb29yKCRncmlkLXZlcnRpY2FsLXN0ZXAgKiAkaSkgIWltcG9ydGFudDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiBmbG9vcigoJGdyaWQtdmVydGljYWwtc3RlcCAqICRpKSAvIDEuNSkgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWl4aW4gYmxvY2stbWFyZ2luLWJvdHRvbSgkZnJvbTogMSwgJHRvOiAxMCkge1xyXG4gIEBmb3IgJGkgZnJvbSAkZnJvbSB0aHJvdWdoICR0byB7XHJcbiAgICAubWFyZ2luLWJvdHRvbS0jeyRpfXgge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiBmbG9vcigkZ3JpZC12ZXJ0aWNhbC1zdGVwICogJGkpICFpbXBvcnRhbnQ7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogZmxvb3IoKCRncmlkLXZlcnRpY2FsLXN0ZXAgKiAkaSkgLyAxLjUpICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIE5vcm1hbCBCdXR0b24gVmFyaWFudHNcclxuQG1peGluIGJ1dHRvbi12YXJpYW50KCRiZy1jb2xvcikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmctY29sb3IsIDEwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBPdXRsaW5lIEJ1dHRvbiBWYXJpYW50c1xyXG5AbWl4aW4gb3V0bGluZS1idXR0b24tdmFyaWFudCgkY29sb3IpIHtcclxuICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogJGNvbG9yO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIExpbmsgQnV0dG9uIFZhcmlhbnRzXHJcbkBtaXhpbiBsaW5rLWJ1dHRvbi12YXJpYW50KCRjb2xvcikge1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogZGFya2VuKCRjb2xvciwgMTAlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFsZXJ0IFZhcmlhbnRzXHJcbkBtaXhpbiBhbGVydC12YXJpYW50KCRjb2xvciwgJGJnLWNvbG9yLCAkYm9yZGVyLWNvbG9yKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcbiAgJjo6YmVmb3JlIHsgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yOyB9XHJcbiAgPiAqLFxyXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIHVsLCBvbCwgYSB7XHJcbiAgICAmOm5vdCgudGV4dC13aGl0ZSksXHJcbiAgICAmOm5vdCgudGV4dC1saWdodCkgeyBjb2xvcjogJGNvbG9yOyB9XHJcbiAgfVxyXG4gIC5hbGVydC1jbG9zZSB7IGNvbG9yOiAkY29sb3I7IH1cclxufVxyXG5cclxuLy8gTGlzdCBHcm91cCBWYXJpYW50c1xyXG5AbWl4aW4gbGlzdC1ncm91cC12YXJpYW50KCRjb2xvciwgJGJnLWNvbG9yKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xyXG4gIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICA+ICosXHJcbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgdWwsIG9sLCBhIHsgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50OyB9XHJcbn1cclxuXHJcbi8vIE92ZXJsYXkgQmxvY2tcclxuQG1peGluIG92ZXJsYXktYmxvY2soJHppbmRleCwgJGJnLWNvbG9yLCAkb3BhY2l0eSkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIG9wYWNpdHk6ICRvcGFjaXR5O1xyXG4gIHotaW5kZXg6ICR6aW5kZXg7XHJcbn1cclxuXHJcbi8vIFBsYWNlaG9sZGVyIHRleHRcclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvcjogJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKSB7XHJcbiAgLy8gRmlyZWZveFxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIG9wYWNpdHk6IDE7IC8vIE92ZXJyaWRlIEZpcmVmb3gncyB1bnVzdWFsIGRlZmF1bHQgb3BhY2l0eTsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzExNTI2XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgfSAvLyBJbnRlcm5ldCBFeHBsb3JlciAxMCtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyICB7XHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gIH0gLy8gU2FmYXJpIGFuZCBDaHJvbWVcclxufVxyXG5cclxuLy8gRm9udCBzbW9vdGhpbmdcclxuQG1peGluIGZvbnQtc21vb3RoaW5nIHtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG4vLyBCYWNrZmFjZSB2aXNpYmlsaXR5XHJcbkBtaXhpbiBiYWNrZmFjZS12aXNpYmlsaXR5KCR2YWx1ZSkge1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcclxufVxyXG5cclxuLy8gVXNlciBzZWxlY3RcclxuQG1peGluIHVzZXItc2VsZWN0KCR2YWx1ZSkge1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiAkdmFsdWU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiAkdmFsdWU7XHJcbiAgdXNlci1zZWxlY3Q6ICR2YWx1ZTtcclxufVxyXG5cclxuLy8gQXBwZWFyYW5jZVxyXG5AbWl4aW4gYXBwZWFyYW5jZSgkdmFsdWUpIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6ICR2YWx1ZTtcclxuICAtbW96LWFwcGVhcmFuY2U6ICR2YWx1ZTtcclxuICBhcHBlYXJhbmNlOiAkdmFsdWU7XHJcbn1cclxuXHJcblxyXG4vLyBUZXh0IG92ZXJmbG93XHJcbi8vIFJlcXVpcmVzIGlubGluZS1ibG9jayBvciBibG9jayBmb3IgcHJvcGVyIHN0eWxpbmdcclxuQG1peGluIHRleHQtb3ZlcmZsb3cge1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLy8gVW5zdHlsZWQgbGlzdFxyXG5AbWl4aW4gbGlzdC11bnN0eWxlZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi8vIFByb3ZpZGVzIGFuIGVhc3kgd2F5IHRvIGluY2x1ZGUgYSBjbGVhcmZpeCBmb3IgY29udGFpbmluZyBmbG9hdHMuXHJcbkBtaXhpbiBjbGVhcmZpeCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gIH1cclxufVxyXG4iLCIvL1xyXG4vLyBWYXJpYWJsZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vPT0gQ29sb3JzXHJcbi8vXHJcbi8vIyMgR3JheSBhbmQgYnJhbmQgY29sb3JzIGZvciB1c2UgYWNyb3NzIFRoZW1lLlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gR3JheXNjYWxlXHJcbiRncmF5LWRhcmtlcjogICAgICAgICAgICAjMzc0MjUwO1xyXG4kZ3JheS1kYXJrOiAgICAgICAgICAgIFx0ICM2MDY5NzU7XHJcbiRncmF5OiAgICAgICAgICAgICAgICAgICAjOWRhOWI5O1xyXG4kZ3JheS1saWdodDogICAgICAgICAgICAgI2UxZTdlYztcclxuJGdyYXktbGlnaHRlcjogICAgICAgICAgICNmNWY1ZjU7XHJcbiR3aGl0ZS1jb2xvcjogICAgICAgICAgICAjZmZmZmZmO1xyXG4kYmxhY2stY29sb3I6ICAgICAgICAgICAgIzAwMDAwMDtcclxuXHJcbi8vIEJyYW5kIGNvbG9yc1xyXG4kYnJhbmQtcHJpbWFyeTogICAgICAgICAjMGRhOWVmO1xyXG4kYnJhbmQtaW5mbzpcdFx0ICAgICAgICAjNTBjNmU5O1xyXG4kYnJhbmQtc3VjY2VzczogICAgICAgICAjNDNkOWEzO1xyXG4kYnJhbmQtd2FybmluZzogICAgICAgICAjZmZiNzRmO1xyXG4kYnJhbmQtZGFuZ2VyOiAgICAgICAgICAjZmY1MjUyO1xyXG5cclxuLy8gQm9keVxyXG4kYm9keS1iZzogXHRcdFx0XHRcdFx0XHQkd2hpdGUtY29sb3I7XHJcbiRib2R5LWNvbG9yOiBcdFx0XHRcdFx0XHQkZ3JheS1kYXJrO1xyXG5cclxuLy8gSW5saW5lIGxpbmtzXHJcbiRsaW5rLWNvbG9yOiBcdFx0XHRcdFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuJGxpbmstaG92ZXItY29sb3I6IFx0XHRcdCRicmFuZC1wcmltYXJ5O1xyXG5cclxuLy8gSGVkaW5nc1xyXG4kaGVhZGluZ3MtY29sb3I6XHQgXHRcdFx0JGdyYXktZGFya2VyO1xyXG5cclxuLy8gQmxvY2txdW90ZVxyXG4kcXVvdGUtdGV4dC1jb2xvcjogICAgICAkYm9keS1jb2xvcjtcclxuJHF1b3RlLW1hcmstY29sb3I6ICAgICAgJGdyYXk7XHJcbiRxdW90ZS1hdXRob3ItY29sb3I6ICAgICRncmF5O1xyXG5cclxuLy8gQm9yZGVyc1xyXG4kYm9yZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS1saWdodDtcclxuJGJvcmRlci1saWdodC1jb2xvcjogICAgcmdiYSgkd2hpdGUtY29sb3IsIC4xMik7XHJcblxyXG4vLyBIaWdobGlnaHQgY29sb3JcclxuJGhpZ2hsaWdodC1jb2xvcjogICAgICAgI2ZmZjhiMDtcclxuXHJcblxyXG4vLz09IFR5cG9ncmFwaHlcclxuLy9cclxuLy8jIyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGZvbnQtZmFtaWx5LWJhc2U6IFx0XHRcdCAgJ01hdmVuIFBybycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1oZWFkaW5nczogXHQgIGluaGVyaXQ7XHJcblxyXG4vLyBGb250IHNpemVzXHJcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgMTZweDtcclxuJGZvbnQtc2l6ZS1sZWFkOiAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4xMjUpKTsgLy8gfjE4cHhcclxuJGZvbnQtc2l6ZS1zbTogXHRcdFx0XHQgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC44NzUpKTsgLy8gfjE0cHhcclxuJGZvbnQtc2l6ZS14czogICAgICAgICBcdFx0Zmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC44MTI1KSk7IC8vIH4xM3B4XHJcblxyXG4vLyBIZWFkaW5nc1xyXG4kZm9udC1zaXplLWgxOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAyLjI1KSk7IC8vIH4zNnB4XHJcbiRmb250LXNpemUtaDI6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuODc1KSk7IC8vIH4zMHB4XHJcbiRmb250LXNpemUtaDM6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuNSkpOyAvLyB+MjRweFxyXG4kZm9udC1zaXplLWg0OiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSk7IC8vIH4yMHB4XHJcbiRmb250LXNpemUtaDU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZWFkOyAvLyB+MThweFxyXG4kZm9udC1zaXplLWg2OiAgICAgICAgICAgICRmb250LXNpemUtYmFzZTsgLy8gfjE2cHhcclxuXHJcbi8vIERpc3BsYXkgaGVhZGluZ3NcclxuJGRpc3BsYXktMTogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogNC41KSk7IC8vIH43MnB4XHJcbiRkaXNwbGF5LTI6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDMuNzUpKTsgLy8gfjYwcHhcclxuJGRpc3BsYXktMzogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMy4xMjUpKTsgLy8gfjUwcHhcclxuJGRpc3BsYXktNDogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMi41KSk7IC8vIH40MHB4XHJcblxyXG4vLyBGb250IHN0eWxlc1xyXG4kZm9udC1zdHlsZS1iYXNlOiAgICAgICAgIG5vcm1hbDtcclxuJGZvbnQtc3R5bGUtaGVhZGluZ3M6ICAgICBub3JtYWw7XHJcblxyXG4vLyBGb250IHdlaWdodHNcclxuJGZvbnQtd2VpZ2h0LWJhc2U6ICAgICAgICAgbm9ybWFsO1xyXG4kZm9udC13ZWlnaHQtaGVhZGluZ3M6ICAgICA1MDA7XHJcblxyXG4vLyBUZXh0IHRyYW5zZm9ybXNcclxuJHRleHQtdHJhbnNmb3JtLWJhc2U6ICAgICBub25lO1xyXG4kdGV4dC10cmFuc2Zvcm0taGVhZGluZ3M6IG5vbmU7XHJcblxyXG4vLyBMaW5lIGhlaWdodHNcclxuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgIDEuNTtcclxuJGxpbmUtaGVpZ2h0LWgxOiAgICAgICAgIDEuMTU7XHJcbiRsaW5lLWhlaWdodC1oMjogICAgICAgICAxLjI7XHJcbiRsaW5lLWhlaWdodC1oMzogICAgICAgICAxLjI1O1xyXG4kbGluZS1oZWlnaHQtaDQ6ICAgICAgICAgMS4zO1xyXG4kbGluZS1oZWlnaHQtaDU6ICAgICAgICAgMS4zNTtcclxuJGxpbmUtaGVpZ2h0LWg2OiAgICAgICAgIDEuNDtcclxuJGxpbmUtaGVpZ2h0LWRpc3BsYXk6ICAgIDEuMTU7XHJcblxyXG5cclxuLy89PSBHcmlkIFZlcnRpY2FsIFN0ZXBcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGdyaWQtdmVydGljYWwtc3RlcDogICAgIDI0cHg7XHJcblxyXG5cclxuLy89PSBCb3JkZXIgUmFkaXVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRib3JkZXItcmFkaXVzLWxnOiBcdFx0N3B4O1xyXG4kYm9yZGVyLXJhZGl1cy1iYXNlOiBcdDVweDtcclxuJGJvcmRlci1yYWRpdXMtc206IFx0XHQzcHg7XHJcblxyXG5cclxuLy89PSBGb3Jtc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kaW5wdXQtaGVpZ2h0LWxnOlx0XHRcdFx0XHRcdFx0NTRweDtcclxuJGlucHV0LWhlaWdodDpcdFx0XHRcdFx0XHRcdFx0NDRweDtcclxuJGlucHV0LWhlaWdodC1zbTpcdFx0XHRcdFx0XHRcdDM2cHg7XHJcbiRpbnB1dC1jb2xvci1wbGFjZWhvbGRlcjogICAgICRncmF5O1xyXG5cclxuXHJcbi8vPT0gQnV0dG9uc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kYnRuLWZvbnQtc2l6ZTogXHRcdFx0XHRcdFx0XHQkZm9udC1zaXplLXNtO1xyXG4kYnRuLXNtLWZvbnQtc2l6ZTogXHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS14cztcclxuJGJ0bi10ZXh0LXRyYW5zZm9ybTogICAgICAgICAgdXBwZXJjYXNlO1xyXG4kYnRuLWZvbnQtd2VpZ2h0OiBcdFx0XHRcdFx0XHQ1MDA7XHJcbiRidG4tdGV4dC1jb2xvcjogICAgICAgICAgICAgICRncmF5LWRhcms7XHJcblxyXG4kYnRuLWhlaWdodDogXHRcdFx0XHRcdFx0XHRcdFx0NDRweDtcclxuJGJ0bi1sZy1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0NTRweDtcclxuJGJ0bi1zbS1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0MzZweDtcclxuXHJcbiRidG4tbWFyZ2luOiAgICAgICAgICAgICAgICAgIGZsb29yKCRncmlkLXZlcnRpY2FsLXN0ZXAgLyAyKTsgLy9+MTJweFxyXG4kc29jaWFsLWJ0bi1zaXplOiBcdFx0XHRcdFx0XHQkZm9udC1zaXplLXhzO1xyXG5cclxuXHJcbi8vPT0gVGFibGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiR0YWJsZS1ib3JkZXItY29sb3I6IFx0XHRcdFx0XHQkYm9yZGVyLWNvbG9yO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nOlx0XHRcdFx0XHQxNXB4O1xyXG4kdGFibGUtYmctYWNjZW50OiBcdFx0XHRcdFx0XHQkZ3JheS1saWdodGVyO1xyXG5cclxuXHJcbi8vPT0gTmF2YmFyIC8gTG9nb1xyXG4vL1xyXG5cclxuJG5hdmJhci1taW4taGVpZ2h0OiBcdFx0XHQ4NHB4O1xyXG4kbmF2YmFyLXN0dWNrLXNoYWRvdzogICAgIDAgM3B4IDI1cHggMCByZ2JhKGRhcmtlbigkZ3JheS1kYXJrZXIsIDQlKSwgLjIyKTtcclxuJGxvZ28td2lkdGg6IFx0XHRcdFx0ICAgICAgMTI5cHg7XHJcblxyXG4vLyBOYXZiYXIgVG9vbHNcclxuJG5hdmJhci10b29scy1jb2xvcjogICAgICAgICAgJGdyYXktZGFyaztcclxuJG5hdmJhci10b29scy1zaXplOiAgICAgICAgICAgJGJ0bi1oZWlnaHQ7XHJcbiRvZmZjYW52YXMtdG9nZ2xlLWljb24tc2l6ZTogIDIwcHg7XHJcbiR0b29scy1pY29uLXNpemU6ICAgICAgICAgICAgIDE3cHg7XHJcblxyXG5cclxuLy89PSBOYXZpZ2F0aW9uXHJcbi8vXHJcblxyXG4kbmF2LWxpbmstZm9udC1zaXplOiBcdFx0XHRcdCRmb250LXNpemUtc207IC8vIDE0cHhcclxuJG5hdi1saW5rLWZvbnQtd2VpZ2h0OiBcdFx0XHQ1MDA7XHJcbiRuYXYtbGluay1jb2xvcjogXHRcdFx0XHRcdFx0JGdyYXktZGFyaztcclxuJG5hdi1saW5rLWhvdmVyLWNvbG9yOiBcdFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuJG5hdi1saW5rLWFjdGl2ZS1jb2xvcjogXHRcdCRicmFuZC1wcmltYXJ5O1xyXG5cclxuLy8gU3ViIE1lbnUgLyBNZWdhIE1lbnVcclxuJHN1Yi1tZW51LXdpZHRoOiAgICAgICAgICAgIDIwMHB4O1xyXG4kc3ViLW1lbnUtc2hhZG93OiAgICAgICAgICAgMCA3cHggMjJweCAtNXB4IHJnYmEoZGFya2VuKCRncmF5LWRhcmtlciwgNCUpLCAuMik7XHJcblxyXG4vLyBPZmYtQ2FudmFzXHJcbiRvZmZjYW52YXMtd2lkdGg6ICAgICAgICAgICAyOTBweDtcclxuXHJcblxyXG4vLz09IFRhYnNcclxuLy9cclxuXHJcbiRuYXYtdGFicy1mb250LXNpemU6XHRcdFx0XHRcdFx0XHRcdGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuODc1KSk7IC8vIH4xNHB4XHJcbiRuYXYtdGFicy1saW5rLWNvbG9yOiBcdFx0XHRcdFx0XHRcdCRncmF5O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICBcdFx0XHQkZ3JheS1kYXJrO1xyXG5cclxuXHJcbi8vPT0gUHJvZ3Jlc3NcclxuLy9cclxuXHJcbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAxOHB4O1xyXG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgJGJyYW5kLXByaW1hcnk7XHJcblxyXG5cclxuLy89PSBTdGVwc1xyXG4vL1xyXG5cclxuJHN0ZXAtY2lyY2xlLXNpemU6ICAgICAgICA4MHB4O1xyXG4kc3RlcC1pY29uLWRlZmF1bHQtYmc6ICAgICRncmF5LWxpZ2h0ZXI7XHJcbiRzdGVwLWljb24tc2l6ZTogICAgICAgICAgMzhweDtcclxuJHN0ZXAtaWNvbi1kZWZhdWx0LWNvbG9yOiAkZ3JheS1kYXJrZXI7XHJcbiRzdGVwLXRpdGxlLXNpemU6ICAgICAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJHN0ZXAtdGl0bGUtY29sb3I6ICAgICAgICAkZ3JheS1kYXJrO1xyXG4kc3RlcC1jb25uZWN0LWhlaWdodDogICAgIDNweDtcclxuXHJcblxyXG4vLyA9PSBTaG9wXHJcbi8vXHJcblxyXG4vLyBQcm9kdWN0XHJcbiRwcm9kdWN0LXRpdGxlLWZvbnQtc2l6ZTogICAgICRmb250LXNpemUtYmFzZTtcclxuJHByb2R1Y3QtdGl0bGUtY29sb3I6ICAgICAgICAgJGdyYXktZGFya2VyO1xyXG4kcHJvZHVjdC10aXRsZS1ob3Zlci1jb2xvcjogICAkYnJhbmQtcHJpbWFyeTtcclxuJHByb2R1Y3QtcHJpY2UtZm9udC1zaXplOiAgICAgJGZvbnQtc2l6ZS1iYXNlO1xyXG4kcHJvZHVjdC1wcmljZS1jb2xvcjogICAgICAgICAkZ3JheS1kYXJrO1xyXG5cclxuLy8gU2hvcCBWaWV3XHJcbiRzaG9wLXZpZXctc2l6ZTogICAgICAgICAgICA0M3B4O1xyXG4kc2hvcC12aWV3LWNvbG9yOiAgICAgICAgICAgJGdyYXktZGFyaztcclxuJHNob3Atdmlldy1iZy1jb2xvcjogICAgICAgICR3aGl0ZS1jb2xvcjtcclxuJHNob3Atdmlldy1ob3Zlci1iZy1jb2xvcjogICRncmF5LWxpZ2h0ZXI7XHJcbiRzaG9wLXZpZXctYWN0aXZlLWJnLWNvbG9yOiAkYnJhbmQtcHJpbWFyeTtcclxuXHJcbi8vIENhcnRcclxuJGNhcnQtdGh1bWItc2l6ZTogICAgICAgICAxMTBweDtcclxuXHJcbi8vIEFjY291bnRcclxuJGNvdmVyLWhlaWdodDogICAgICAgICAgICAxMjBweDtcclxuJHVzZXItYXZhLXNpemU6ICAgICAgICAgICAxMTVweDtcclxuXHJcblxyXG4vLyA9PSBCbG9nXHJcbi8vXHJcblxyXG4kYmxvZy1wb3N0LW1ldGEtY29sb3I6ICAgICAgJGdyYXktZGFyaztcclxuJGJsb2ctcG9zdC1tZXRhLWljb24tY29sb3I6ICRncmF5O1xyXG4kYmxvZy1wb3N0LW1ldGEtZm9udC1zaXplOiAgJGZvbnQtc2l6ZS14cztcclxuJGJsb2ctcG9zdC1jb2xvcjogICAgICAgICAgICRoZWFkaW5ncy1jb2xvcjtcclxuJGJsb2ctcG9zdC1ob3Zlci1jb2xvcjogICAgICRicmFuZC1wcmltYXJ5O1xyXG5cclxuXHJcbi8vID09IENvbW1lbnRzXHJcbi8vXHJcblxyXG4kY29tbWVudC1hdXRob3ItYXZhLXNpemU6ICAgNTBweDtcclxuJGNvbW1lbnQtdGl0bGUtc2l6ZTogICAgICAgICRmb250LXNpemUtc207XHJcbiRjb21tZW50LXRpdGxlLXdlaWdodDogICAgICA1MDA7XHJcblxyXG5cclxuLy89PSBXaWRnZXRzXHJcbi8vXHJcblxyXG4kc2lkZWJhci1tYXgtd2lkdGg6ICAgICAgICAgIDQwMHB4O1xyXG4kc2lkZWJhci1vZmZjYW52YXMtd2lkdGg6ICAgIDMyMHB4O1xyXG4kd2lkZ2V0LXRpdGxlLWNvbG9yOiAgICAgICAgICRncmF5O1xyXG4kd2lkZ2V0LXRpdGxlLWZvbnQtc2l6ZTogICAgICRmb250LXNpemUtc207XHJcbiR3aWRnZXQtbGluay1mb250LXNpemU6ICAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJHdpZGdldC1tZXRhLWNvbG9yOiAgICAgICAgICAkZ3JheTtcclxuJHdpZGdldC1tZXRhLWZvbnQtc2l6ZTogICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlIC8gMS4zMykpOyAvL34xMnB4XHJcbiR3aWRnZXQtZW50cnktdGh1bWItc2l6ZTogICAgNTBweDtcclxuXHJcbi8vIFRhZ3NcclxuJHdpZGdldC10YWdzLWhlaWdodDogICAgICAgICAgICAgIDI4cHg7XHJcbiR3aWRnZXQtdGFncy1mb250LXNpemU6ICAgICAgICAgICAkZm9udC1zaXplLXhzO1xyXG4kd2lkZ2V0LXRhZ3MtY29sb3I6ICAgICAgICAgICAgICAgJG5hdi1saW5rLWNvbG9yO1xyXG4kd2lkZ2V0LXRhZ3MtaG92ZXItYmc6ICAgICAgICAgICAgJGdyYXktbGlnaHRlcjtcclxuJHdpZGdldC10YWdzLWFjdGl2ZS1iZzogICAgICAgICAgICRuYXYtbGluay1hY3RpdmUtY29sb3I7XHJcbiR3aWRnZXQtdGFncy1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkbmF2LWxpbmstYWN0aXZlLWNvbG9yO1xyXG4kd2lkZ2V0LXRhZ3MtYWN0aXZlLWNvbG9yOiAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG5cclxuXHJcbi8vPT0gUGFnaW5hdGlvblxyXG4vL1xyXG5cclxuJHBhZ2luYXRpb24tbGluay1zaXplOiAgICAgICAgICRidG4tc20taGVpZ2h0O1xyXG4kcGFnaW5hdGlvbi1saW5rLWZvbnQtc2l6ZTogICAgJGZvbnQtc2l6ZS1zbTtcclxuJHBhZ2luYXRpb24tbGluay1mb250LXdlaWdodDogIDUwMDtcclxuJHBhZ2luYXRpb24tbGluay1jb2xvcjogICAgICAgICRncmF5LWRhcms7XHJcbiRwYWdpbmF0aW9uLWxpbmstYWN0aXZlLWNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbiRwYWdpbmF0aW9uLWxpbmstaG92ZXItYmc6ICAgICAkZ3JheS1saWdodGVyO1xyXG4kcGFnaW5hdGlvbi1saW5rLWFjdGl2ZS1iZzogICAgJGJyYW5kLXByaW1hcnk7XHJcblxyXG5cclxuLy89PSBUb29sdGlwc1xyXG4vL1xyXG5cclxuJHRvb2x0aXAtb3BhY2l0eTogICAgXHRcdDE7XHJcbiR0b29sdGlwLWJnOiBcdFx0XHRcdCBcdFx0ZGFya2VuKCRncmF5LWRhcmtlciwgNCUpO1xyXG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAkd2hpdGUtY29sb3I7XHJcbiR0b29sdGlwLWFycm93LWNvbG9yOiBcdCR0b29sdGlwLWJnO1xyXG5cclxuXHJcbi8vPT0gQ2Fyb3VzZWxcclxuLy9cclxuXHJcbiRjYXJvdXNlbC1uYXZzLXNpemU6IFx0XHRcdFx0ICAkYnRuLWhlaWdodDtcclxuJGNhcm91c2VsLW5hdnMtaWNvbi1zaXplOiBcdCAgMTlweDtcclxuJGNhcm91c2VsLW5hdnMtYmc6ICAgICAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG4kY2Fyb3VzZWwtbmF2cy1jb2xvcjogXHRcdFx0ICAkZ3JheS1kYXJrZXI7XHJcbiRjYXJvdXNlbC1kb3RzLXNpemU6IFx0XHRcdFx0ICA2cHg7XHJcbiRjYXJvdXNlbC1kb3RzLWNvbG9yOiBcdCAgXHQgICRncmF5LWRhcms7XHJcblxyXG4vLyBIZXJvIFNsaWRlclxyXG4kaGVyby1zbGlkZXItbWluLWhlaWdodDogICAgICA1ODBweDtcclxuXHJcbi8vPT0gQ291bnRkb3duXHJcbi8vXHJcblxyXG4kY291bnRkb3duLWJveC1zaXplOiAgICAgICAgICA0OHB4O1xyXG4kY291bnRkb3duLWZvbnQtc2l6ZTogICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4zNzUpKTsgLy8gfjIycHhcclxuJGNvdW50ZG93bi1sYWJlbC1zaXplOiAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC43NSkpOyAvLyB+MTJweFxyXG5cclxuXHJcbi8vPT0gTWVkaWEgcXVlcmllcyAocmVzcG9uc2l2ZSBicmVhY2twb2ludHMpXHJcbi8vIyMgRGVzY2t0b3AsIFRhYmxldCwgTW9iaWxlXHJcblxyXG4kc2NyZWVuLXhsOiAxMjAwcHg7XHJcbiRzY3JlZW4tbGc6IDk5MXB4O1xyXG4kc2NyZWVuLW1kOiA3NjhweDtcclxuJHNjcmVlbi1zbTogNTc2cHg7XHJcbiRzY3JlZW4teHM6IDM2MHB4O1xyXG5cclxuJG5hdi1jb2xsYXBzZTogICAgIDEwNzBweDtcclxuIl19 */"] });


/***/ }),

/***/ 8400:
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutModule": () => (/* binding */ CheckoutModule)
/* harmony export */ });
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address/address.component */ 3428);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 6627);
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment/payment.component */ 7179);
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./review/review.component */ 7068);
/* harmony import */ var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shipping/shipping.component */ 3677);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 3051);
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.component */ 1594);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _complete_complete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./complete/complete.component */ 5448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);











class CheckoutModule {
}
CheckoutModule.ɵfac = function CheckoutModule_Factory(t) { return new (t || CheckoutModule)(); };
CheckoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: CheckoutModule });
CheckoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](CheckoutModule, { declarations: [_checkout_component__WEBPACK_IMPORTED_MODULE_6__.CheckoutComponent,
        _address_address_component__WEBPACK_IMPORTED_MODULE_0__.AddressComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent,
        _payment_payment_component__WEBPACK_IMPORTED_MODULE_2__.PaymentComponent,
        _review_review_component__WEBPACK_IMPORTED_MODULE_3__.ReviewComponent,
        _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_4__.ShippingComponent,
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.SidebarComponent,
        _complete_complete_component__WEBPACK_IMPORTED_MODULE_8__.CompleteComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule], exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule,
        _checkout_component__WEBPACK_IMPORTED_MODULE_6__.CheckoutComponent,
        _address_address_component__WEBPACK_IMPORTED_MODULE_0__.AddressComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent,
        _payment_payment_component__WEBPACK_IMPORTED_MODULE_2__.PaymentComponent,
        _review_review_component__WEBPACK_IMPORTED_MODULE_3__.ReviewComponent,
        _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_4__.ShippingComponent,
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.SidebarComponent,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 5448:
/*!*********************************************************!*\
  !*** ./src/app/checkout/complete/complete.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteComponent": () => (/* binding */ CompleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/page-title/page-title.component */ 9526);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const _c0 = function () { return { title: "Checkout" }; };
const _c1 = function (a0) { return [a0]; };
class CompleteComponent {
}
CompleteComponent.ɵfac = function CompleteComponent_Factory(t) { return new (t || CompleteComponent)(); };
CompleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CompleteComponent, selectors: [["app-complete"]], decls: 13, vars: 4, consts: [["title", "Checkout", 3, "children"], [1, "container", "padding-bottom-3x", "mb-2"], [1, "card", "text-center"], [1, "card-body", "padding-top-2x"], [1, "card-title"], [1, "card-text"], [1, "padding-top-1x", "padding-bottom-1x"], ["routerLink", "/home", 1, "btn", "btn-outline-secondary"]], template: function CompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-page-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Thank you for your order!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Your order has been placed and will be processed as soon as possible.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "You will be receiving an email shortly with confirmation of your order. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Go Back Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("children", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0)));
    } }, dependencies: [_core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_0__.PageTitleComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV0ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6627:
/*!*****************************************************!*\
  !*** ./src/app/checkout/footer/footer.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




function FooterComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0Back To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function FooterComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_button_3_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onBack($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function FooterComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_button_5_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onContinue($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Continue\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.continueEnabled);
} }
function FooterComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_button_6_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onCompleteOrder($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Complete Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
class FooterComponent {
    constructor() {
        this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.continue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.completeOrder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onBack(e) {
        this.back.emit();
    }
    onContinue(e) {
        this.continue.emit();
    }
    onCompleteOrder(e) {
        this.completeOrder.emit();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-checkout-footer"]], inputs: { buttons: "buttons", continueEnabled: "continueEnabled" }, outputs: { back: "back", continue: "continue", completeOrder: "completeOrder" }, decls: 7, vars: 4, consts: [[1, "checkout-footer"], [1, "column"], ["class", "btn btn-outline-secondary", "routerLink", "/cart", 4, "ngIf"], ["class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", "href", "", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-primary", "href", "", 3, "click", 4, "ngIf"], ["routerLink", "/cart", 1, "btn", "btn-outline-secondary"], [1, "icon-arrow-left"], [1, "hidden-xs-down"], [1, "btn", "btn-outline-secondary", 3, "click"], ["href", "", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "icon-arrow-right"], ["href", "", 1, "btn", "btn-primary", 3, "click"], [1, "d-sm-none"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FooterComponent_button_2_Template, 4, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FooterComponent_button_3_Template, 4, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FooterComponent_button_5_Template, 4, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FooterComponent_button_6_Template, 5, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttons.includes("backToCart"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttons.includes("back"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttons.includes("continue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttons.includes("completeOrder"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], styles: [".checkout-footer[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-top: 28px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border: 1px solid #e1e7ec;\n  border-radius: 7px;\n  table-layout: fixed;\n}\n.checkout-footer[_ngcontent-%COMP%]    > .column[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 10px 15px;\n  vertical-align: middle;\n}\n.checkout-footer[_ngcontent-%COMP%]    > .column[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n.checkout-footer[_ngcontent-%COMP%]    > .column[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n.checkout-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXHNjc3NcXGhlbHBlcnNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFRSxnQkFBQTtFQUNBLG1CQUFBO0VBRUYseUJBQUE7RUFDQSxrQkNpR21CO0VEaEduQixtQkFBQTtBQUpGO0FBTUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFKSjtBQUtJO0VBQWUsaUJBQUE7QUFGbkI7QUFHSTtFQUFnQixnQkFBQTtBQUFwQjtBQUdFO0VBQU8sU0FBQTtBQUFUIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zY3NzL2hlbHBlcnMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnfnNjc3MvaGVscGVycy9taXhpbnMnO1xyXG5cclxuLmNoZWNrb3V0LWZvb3RlciB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogZmxvb3IoJGdyaWQtdmVydGljYWwtc3RlcCAqIDEuMik7XHJcbiAgcGFkZGluZzoge1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBib3R0b206IDVweDtcclxuICB9XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1sZztcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG5cclxuICA+IC5jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAmOmxhc3QtY2hpbGQgeyB0ZXh0LWFsaWduOiByaWdodDsgfVxyXG4gICAgJjpmaXJzdC1jaGlsZCB7IHRleHQtYWxpZ246IGxlZnQ7IH1cclxuICB9XHJcblxyXG4gIC5idG4geyBtYXJnaW46IDA7IH1cclxufVxyXG4iLCIvL1xyXG4vLyBWYXJpYWJsZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vPT0gQ29sb3JzXHJcbi8vXHJcbi8vIyMgR3JheSBhbmQgYnJhbmQgY29sb3JzIGZvciB1c2UgYWNyb3NzIFRoZW1lLlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gR3JheXNjYWxlXHJcbiRncmF5LWRhcmtlcjogICAgICAgICAgICAjMzc0MjUwO1xyXG4kZ3JheS1kYXJrOiAgICAgICAgICAgIFx0ICM2MDY5NzU7XHJcbiRncmF5OiAgICAgICAgICAgICAgICAgICAjOWRhOWI5O1xyXG4kZ3JheS1saWdodDogICAgICAgICAgICAgI2UxZTdlYztcclxuJGdyYXktbGlnaHRlcjogICAgICAgICAgICNmNWY1ZjU7XHJcbiR3aGl0ZS1jb2xvcjogICAgICAgICAgICAjZmZmZmZmO1xyXG4kYmxhY2stY29sb3I6ICAgICAgICAgICAgIzAwMDAwMDtcclxuXHJcbi8vIEJyYW5kIGNvbG9yc1xyXG4kYnJhbmQtcHJpbWFyeTogICAgICAgICAjMGRhOWVmO1xyXG4kYnJhbmQtaW5mbzpcdFx0ICAgICAgICAjNTBjNmU5O1xyXG4kYnJhbmQtc3VjY2VzczogICAgICAgICAjNDNkOWEzO1xyXG4kYnJhbmQtd2FybmluZzogICAgICAgICAjZmZiNzRmO1xyXG4kYnJhbmQtZGFuZ2VyOiAgICAgICAgICAjZmY1MjUyO1xyXG5cclxuLy8gQm9keVxyXG4kYm9keS1iZzogXHRcdFx0XHRcdFx0XHQkd2hpdGUtY29sb3I7XHJcbiRib2R5LWNvbG9yOiBcdFx0XHRcdFx0XHQkZ3JheS1kYXJrO1xyXG5cclxuLy8gSW5saW5lIGxpbmtzXHJcbiRsaW5rLWNvbG9yOiBcdFx0XHRcdFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuJGxpbmstaG92ZXItY29sb3I6IFx0XHRcdCRicmFuZC1wcmltYXJ5O1xyXG5cclxuLy8gSGVkaW5nc1xyXG4kaGVhZGluZ3MtY29sb3I6XHQgXHRcdFx0JGdyYXktZGFya2VyO1xyXG5cclxuLy8gQmxvY2txdW90ZVxyXG4kcXVvdGUtdGV4dC1jb2xvcjogICAgICAkYm9keS1jb2xvcjtcclxuJHF1b3RlLW1hcmstY29sb3I6ICAgICAgJGdyYXk7XHJcbiRxdW90ZS1hdXRob3ItY29sb3I6ICAgICRncmF5O1xyXG5cclxuLy8gQm9yZGVyc1xyXG4kYm9yZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS1saWdodDtcclxuJGJvcmRlci1saWdodC1jb2xvcjogICAgcmdiYSgkd2hpdGUtY29sb3IsIC4xMik7XHJcblxyXG4vLyBIaWdobGlnaHQgY29sb3JcclxuJGhpZ2hsaWdodC1jb2xvcjogICAgICAgI2ZmZjhiMDtcclxuXHJcblxyXG4vLz09IFR5cG9ncmFwaHlcclxuLy9cclxuLy8jIyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGZvbnQtZmFtaWx5LWJhc2U6IFx0XHRcdCAgJ01hdmVuIFBybycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1oZWFkaW5nczogXHQgIGluaGVyaXQ7XHJcblxyXG4vLyBGb250IHNpemVzXHJcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgMTZweDtcclxuJGZvbnQtc2l6ZS1sZWFkOiAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4xMjUpKTsgLy8gfjE4cHhcclxuJGZvbnQtc2l6ZS1zbTogXHRcdFx0XHQgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC44NzUpKTsgLy8gfjE0cHhcclxuJGZvbnQtc2l6ZS14czogICAgICAgICBcdFx0Zmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC44MTI1KSk7IC8vIH4xM3B4XHJcblxyXG4vLyBIZWFkaW5nc1xyXG4kZm9udC1zaXplLWgxOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAyLjI1KSk7IC8vIH4zNnB4XHJcbiRmb250LXNpemUtaDI6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuODc1KSk7IC8vIH4zMHB4XHJcbiRmb250LXNpemUtaDM6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuNSkpOyAvLyB+MjRweFxyXG4kZm9udC1zaXplLWg0OiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSk7IC8vIH4yMHB4XHJcbiRmb250LXNpemUtaDU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZWFkOyAvLyB+MThweFxyXG4kZm9udC1zaXplLWg2OiAgICAgICAgICAgICRmb250LXNpemUtYmFzZTsgLy8gfjE2cHhcclxuXHJcbi8vIERpc3BsYXkgaGVhZGluZ3NcclxuJGRpc3BsYXktMTogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogNC41KSk7IC8vIH43MnB4XHJcbiRkaXNwbGF5LTI6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDMuNzUpKTsgLy8gfjYwcHhcclxuJGRpc3BsYXktMzogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMy4xMjUpKTsgLy8gfjUwcHhcclxuJGRpc3BsYXktNDogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMi41KSk7IC8vIH40MHB4XHJcblxyXG4vLyBGb250IHN0eWxlc1xyXG4kZm9udC1zdHlsZS1iYXNlOiAgICAgICAgIG5vcm1hbDtcclxuJGZvbnQtc3R5bGUtaGVhZGluZ3M6ICAgICBub3JtYWw7XHJcblxyXG4vLyBGb250IHdlaWdodHNcclxuJGZvbnQtd2VpZ2h0LWJhc2U6ICAgICAgICAgbm9ybWFsO1xyXG4kZm9udC13ZWlnaHQtaGVhZGluZ3M6ICAgICA1MDA7XHJcblxyXG4vLyBUZXh0IHRyYW5zZm9ybXNcclxuJHRleHQtdHJhbnNmb3JtLWJhc2U6ICAgICBub25lO1xyXG4kdGV4dC10cmFuc2Zvcm0taGVhZGluZ3M6IG5vbmU7XHJcblxyXG4vLyBMaW5lIGhlaWdodHNcclxuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgIDEuNTtcclxuJGxpbmUtaGVpZ2h0LWgxOiAgICAgICAgIDEuMTU7XHJcbiRsaW5lLWhlaWdodC1oMjogICAgICAgICAxLjI7XHJcbiRsaW5lLWhlaWdodC1oMzogICAgICAgICAxLjI1O1xyXG4kbGluZS1oZWlnaHQtaDQ6ICAgICAgICAgMS4zO1xyXG4kbGluZS1oZWlnaHQtaDU6ICAgICAgICAgMS4zNTtcclxuJGxpbmUtaGVpZ2h0LWg2OiAgICAgICAgIDEuNDtcclxuJGxpbmUtaGVpZ2h0LWRpc3BsYXk6ICAgIDEuMTU7XHJcblxyXG5cclxuLy89PSBHcmlkIFZlcnRpY2FsIFN0ZXBcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGdyaWQtdmVydGljYWwtc3RlcDogICAgIDI0cHg7XHJcblxyXG5cclxuLy89PSBCb3JkZXIgUmFkaXVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRib3JkZXItcmFkaXVzLWxnOiBcdFx0N3B4O1xyXG4kYm9yZGVyLXJhZGl1cy1iYXNlOiBcdDVweDtcclxuJGJvcmRlci1yYWRpdXMtc206IFx0XHQzcHg7XHJcblxyXG5cclxuLy89PSBGb3Jtc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kaW5wdXQtaGVpZ2h0LWxnOlx0XHRcdFx0XHRcdFx0NTRweDtcclxuJGlucHV0LWhlaWdodDpcdFx0XHRcdFx0XHRcdFx0NDRweDtcclxuJGlucHV0LWhlaWdodC1zbTpcdFx0XHRcdFx0XHRcdDM2cHg7XHJcbiRpbnB1dC1jb2xvci1wbGFjZWhvbGRlcjogICAgICRncmF5O1xyXG5cclxuXHJcbi8vPT0gQnV0dG9uc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kYnRuLWZvbnQtc2l6ZTogXHRcdFx0XHRcdFx0XHQkZm9udC1zaXplLXNtO1xyXG4kYnRuLXNtLWZvbnQtc2l6ZTogXHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS14cztcclxuJGJ0bi10ZXh0LXRyYW5zZm9ybTogICAgICAgICAgdXBwZXJjYXNlO1xyXG4kYnRuLWZvbnQtd2VpZ2h0OiBcdFx0XHRcdFx0XHQ1MDA7XHJcbiRidG4tdGV4dC1jb2xvcjogICAgICAgICAgICAgICRncmF5LWRhcms7XHJcblxyXG4kYnRuLWhlaWdodDogXHRcdFx0XHRcdFx0XHRcdFx0NDRweDtcclxuJGJ0bi1sZy1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0NTRweDtcclxuJGJ0bi1zbS1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0MzZweDtcclxuXHJcbiRidG4tbWFyZ2luOiAgICAgICAgICAgICAgICAgIGZsb29yKCRncmlkLXZlcnRpY2FsLXN0ZXAgLyAyKTsgLy9+MTJweFxyXG4kc29jaWFsLWJ0bi1zaXplOiBcdFx0XHRcdFx0XHQkZm9udC1zaXplLXhzO1xyXG5cclxuXHJcbi8vPT0gVGFibGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiR0YWJsZS1ib3JkZXItY29sb3I6IFx0XHRcdFx0XHQkYm9yZGVyLWNvbG9yO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nOlx0XHRcdFx0XHQxNXB4O1xyXG4kdGFibGUtYmctYWNjZW50OiBcdFx0XHRcdFx0XHQkZ3JheS1saWdodGVyO1xyXG5cclxuXHJcbi8vPT0gTmF2YmFyIC8gTG9nb1xyXG4vL1xyXG5cclxuJG5hdmJhci1taW4taGVpZ2h0OiBcdFx0XHQ4NHB4O1xyXG4kbmF2YmFyLXN0dWNrLXNoYWRvdzogICAgIDAgM3B4IDI1cHggMCByZ2JhKGRhcmtlbigkZ3JheS1kYXJrZXIsIDQlKSwgLjIyKTtcclxuJGxvZ28td2lkdGg6IFx0XHRcdFx0ICAgICAgMTI5cHg7XHJcblxyXG4vLyBOYXZiYXIgVG9vbHNcclxuJG5hdmJhci10b29scy1jb2xvcjogICAgICAgICAgJGdyYXktZGFyaztcclxuJG5hdmJhci10b29scy1zaXplOiAgICAgICAgICAgJGJ0bi1oZWlnaHQ7XHJcbiRvZmZjYW52YXMtdG9nZ2xlLWljb24tc2l6ZTogIDIwcHg7XHJcbiR0b29scy1pY29uLXNpemU6ICAgICAgICAgICAgIDE3cHg7XHJcblxyXG5cclxuLy89PSBOYXZpZ2F0aW9uXHJcbi8vXHJcblxyXG4kbmF2LWxpbmstZm9udC1zaXplOiBcdFx0XHRcdCRmb250LXNpemUtc207IC8vIDE0cHhcclxuJG5hdi1saW5rLWZvbnQtd2VpZ2h0OiBcdFx0XHQ1MDA7XHJcbiRuYXYtbGluay1jb2xvcjogXHRcdFx0XHRcdFx0JGdyYXktZGFyaztcclxuJG5hdi1saW5rLWhvdmVyLWNvbG9yOiBcdFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuJG5hdi1saW5rLWFjdGl2ZS1jb2xvcjogXHRcdCRicmFuZC1wcmltYXJ5O1xyXG5cclxuLy8gU3ViIE1lbnUgLyBNZWdhIE1lbnVcclxuJHN1Yi1tZW51LXdpZHRoOiAgICAgICAgICAgIDIwMHB4O1xyXG4kc3ViLW1lbnUtc2hhZG93OiAgICAgICAgICAgMCA3cHggMjJweCAtNXB4IHJnYmEoZGFya2VuKCRncmF5LWRhcmtlciwgNCUpLCAuMik7XHJcblxyXG4vLyBPZmYtQ2FudmFzXHJcbiRvZmZjYW52YXMtd2lkdGg6ICAgICAgICAgICAyOTBweDtcclxuXHJcblxyXG4vLz09IFRhYnNcclxuLy9cclxuXHJcbiRuYXYtdGFicy1mb250LXNpemU6XHRcdFx0XHRcdFx0XHRcdGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuODc1KSk7IC8vIH4xNHB4XHJcbiRuYXYtdGFicy1saW5rLWNvbG9yOiBcdFx0XHRcdFx0XHRcdCRncmF5O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICBcdFx0XHQkZ3JheS1kYXJrO1xyXG5cclxuXHJcbi8vPT0gUHJvZ3Jlc3NcclxuLy9cclxuXHJcbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAxOHB4O1xyXG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgJGJyYW5kLXByaW1hcnk7XHJcblxyXG5cclxuLy89PSBTdGVwc1xyXG4vL1xyXG5cclxuJHN0ZXAtY2lyY2xlLXNpemU6ICAgICAgICA4MHB4O1xyXG4kc3RlcC1pY29uLWRlZmF1bHQtYmc6ICAgICRncmF5LWxpZ2h0ZXI7XHJcbiRzdGVwLWljb24tc2l6ZTogICAgICAgICAgMzhweDtcclxuJHN0ZXAtaWNvbi1kZWZhdWx0LWNvbG9yOiAkZ3JheS1kYXJrZXI7XHJcbiRzdGVwLXRpdGxlLXNpemU6ICAgICAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJHN0ZXAtdGl0bGUtY29sb3I6ICAgICAgICAkZ3JheS1kYXJrO1xyXG4kc3RlcC1jb25uZWN0LWhlaWdodDogICAgIDNweDtcclxuXHJcblxyXG4vLyA9PSBTaG9wXHJcbi8vXHJcblxyXG4vLyBQcm9kdWN0XHJcbiRwcm9kdWN0LXRpdGxlLWZvbnQtc2l6ZTogICAgICRmb250LXNpemUtYmFzZTtcclxuJHByb2R1Y3QtdGl0bGUtY29sb3I6ICAgICAgICAgJGdyYXktZGFya2VyO1xyXG4kcHJvZHVjdC10aXRsZS1ob3Zlci1jb2xvcjogICAkYnJhbmQtcHJpbWFyeTtcclxuJHByb2R1Y3QtcHJpY2UtZm9udC1zaXplOiAgICAgJGZvbnQtc2l6ZS1iYXNlO1xyXG4kcHJvZHVjdC1wcmljZS1jb2xvcjogICAgICAgICAkZ3JheS1kYXJrO1xyXG5cclxuLy8gU2hvcCBWaWV3XHJcbiRzaG9wLXZpZXctc2l6ZTogICAgICAgICAgICA0M3B4O1xyXG4kc2hvcC12aWV3LWNvbG9yOiAgICAgICAgICAgJGdyYXktZGFyaztcclxuJHNob3Atdmlldy1iZy1jb2xvcjogICAgICAgICR3aGl0ZS1jb2xvcjtcclxuJHNob3Atdmlldy1ob3Zlci1iZy1jb2xvcjogICRncmF5LWxpZ2h0ZXI7XHJcbiRzaG9wLXZpZXctYWN0aXZlLWJnLWNvbG9yOiAkYnJhbmQtcHJpbWFyeTtcclxuXHJcbi8vIENhcnRcclxuJGNhcnQtdGh1bWItc2l6ZTogICAgICAgICAxMTBweDtcclxuXHJcbi8vIEFjY291bnRcclxuJGNvdmVyLWhlaWdodDogICAgICAgICAgICAxMjBweDtcclxuJHVzZXItYXZhLXNpemU6ICAgICAgICAgICAxMTVweDtcclxuXHJcblxyXG4vLyA9PSBCbG9nXHJcbi8vXHJcblxyXG4kYmxvZy1wb3N0LW1ldGEtY29sb3I6ICAgICAgJGdyYXktZGFyaztcclxuJGJsb2ctcG9zdC1tZXRhLWljb24tY29sb3I6ICRncmF5O1xyXG4kYmxvZy1wb3N0LW1ldGEtZm9udC1zaXplOiAgJGZvbnQtc2l6ZS14cztcclxuJGJsb2ctcG9zdC1jb2xvcjogICAgICAgICAgICRoZWFkaW5ncy1jb2xvcjtcclxuJGJsb2ctcG9zdC1ob3Zlci1jb2xvcjogICAgICRicmFuZC1wcmltYXJ5O1xyXG5cclxuXHJcbi8vID09IENvbW1lbnRzXHJcbi8vXHJcblxyXG4kY29tbWVudC1hdXRob3ItYXZhLXNpemU6ICAgNTBweDtcclxuJGNvbW1lbnQtdGl0bGUtc2l6ZTogICAgICAgICRmb250LXNpemUtc207XHJcbiRjb21tZW50LXRpdGxlLXdlaWdodDogICAgICA1MDA7XHJcblxyXG5cclxuLy89PSBXaWRnZXRzXHJcbi8vXHJcblxyXG4kc2lkZWJhci1tYXgtd2lkdGg6ICAgICAgICAgIDQwMHB4O1xyXG4kc2lkZWJhci1vZmZjYW52YXMtd2lkdGg6ICAgIDMyMHB4O1xyXG4kd2lkZ2V0LXRpdGxlLWNvbG9yOiAgICAgICAgICRncmF5O1xyXG4kd2lkZ2V0LXRpdGxlLWZvbnQtc2l6ZTogICAgICRmb250LXNpemUtc207XHJcbiR3aWRnZXQtbGluay1mb250LXNpemU6ICAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJHdpZGdldC1tZXRhLWNvbG9yOiAgICAgICAgICAkZ3JheTtcclxuJHdpZGdldC1tZXRhLWZvbnQtc2l6ZTogICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlIC8gMS4zMykpOyAvL34xMnB4XHJcbiR3aWRnZXQtZW50cnktdGh1bWItc2l6ZTogICAgNTBweDtcclxuXHJcbi8vIFRhZ3NcclxuJHdpZGdldC10YWdzLWhlaWdodDogICAgICAgICAgICAgIDI4cHg7XHJcbiR3aWRnZXQtdGFncy1mb250LXNpemU6ICAgICAgICAgICAkZm9udC1zaXplLXhzO1xyXG4kd2lkZ2V0LXRhZ3MtY29sb3I6ICAgICAgICAgICAgICAgJG5hdi1saW5rLWNvbG9yO1xyXG4kd2lkZ2V0LXRhZ3MtaG92ZXItYmc6ICAgICAgICAgICAgJGdyYXktbGlnaHRlcjtcclxuJHdpZGdldC10YWdzLWFjdGl2ZS1iZzogICAgICAgICAgICRuYXYtbGluay1hY3RpdmUtY29sb3I7XHJcbiR3aWRnZXQtdGFncy1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkbmF2LWxpbmstYWN0aXZlLWNvbG9yO1xyXG4kd2lkZ2V0LXRhZ3MtYWN0aXZlLWNvbG9yOiAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG5cclxuXHJcbi8vPT0gUGFnaW5hdGlvblxyXG4vL1xyXG5cclxuJHBhZ2luYXRpb24tbGluay1zaXplOiAgICAgICAgICRidG4tc20taGVpZ2h0O1xyXG4kcGFnaW5hdGlvbi1saW5rLWZvbnQtc2l6ZTogICAgJGZvbnQtc2l6ZS1zbTtcclxuJHBhZ2luYXRpb24tbGluay1mb250LXdlaWdodDogIDUwMDtcclxuJHBhZ2luYXRpb24tbGluay1jb2xvcjogICAgICAgICRncmF5LWRhcms7XHJcbiRwYWdpbmF0aW9uLWxpbmstYWN0aXZlLWNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbiRwYWdpbmF0aW9uLWxpbmstaG92ZXItYmc6ICAgICAkZ3JheS1saWdodGVyO1xyXG4kcGFnaW5hdGlvbi1saW5rLWFjdGl2ZS1iZzogICAgJGJyYW5kLXByaW1hcnk7XHJcblxyXG5cclxuLy89PSBUb29sdGlwc1xyXG4vL1xyXG5cclxuJHRvb2x0aXAtb3BhY2l0eTogICAgXHRcdDE7XHJcbiR0b29sdGlwLWJnOiBcdFx0XHRcdCBcdFx0ZGFya2VuKCRncmF5LWRhcmtlciwgNCUpO1xyXG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAkd2hpdGUtY29sb3I7XHJcbiR0b29sdGlwLWFycm93LWNvbG9yOiBcdCR0b29sdGlwLWJnO1xyXG5cclxuXHJcbi8vPT0gQ2Fyb3VzZWxcclxuLy9cclxuXHJcbiRjYXJvdXNlbC1uYXZzLXNpemU6IFx0XHRcdFx0ICAkYnRuLWhlaWdodDtcclxuJGNhcm91c2VsLW5hdnMtaWNvbi1zaXplOiBcdCAgMTlweDtcclxuJGNhcm91c2VsLW5hdnMtYmc6ICAgICAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG4kY2Fyb3VzZWwtbmF2cy1jb2xvcjogXHRcdFx0ICAkZ3JheS1kYXJrZXI7XHJcbiRjYXJvdXNlbC1kb3RzLXNpemU6IFx0XHRcdFx0ICA2cHg7XHJcbiRjYXJvdXNlbC1kb3RzLWNvbG9yOiBcdCAgXHQgICRncmF5LWRhcms7XHJcblxyXG4vLyBIZXJvIFNsaWRlclxyXG4kaGVyby1zbGlkZXItbWluLWhlaWdodDogICAgICA1ODBweDtcclxuXHJcbi8vPT0gQ291bnRkb3duXHJcbi8vXHJcblxyXG4kY291bnRkb3duLWJveC1zaXplOiAgICAgICAgICA0OHB4O1xyXG4kY291bnRkb3duLWZvbnQtc2l6ZTogICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4zNzUpKTsgLy8gfjIycHhcclxuJGNvdW50ZG93bi1sYWJlbC1zaXplOiAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC43NSkpOyAvLyB+MTJweFxyXG5cclxuXHJcbi8vPT0gTWVkaWEgcXVlcmllcyAocmVzcG9uc2l2ZSBicmVhY2twb2ludHMpXHJcbi8vIyMgRGVzY2t0b3AsIFRhYmxldCwgTW9iaWxlXHJcblxyXG4kc2NyZWVuLXhsOiAxMjAwcHg7XHJcbiRzY3JlZW4tbGc6IDk5MXB4O1xyXG4kc2NyZWVuLW1kOiA3NjhweDtcclxuJHNjcmVlbi1zbTogNTc2cHg7XHJcbiRzY3JlZW4teHM6IDM2MHB4O1xyXG5cclxuJG5hdi1jb2xsYXBzZTogICAgIDEwNzBweDtcclxuIl19 */"] });


/***/ }),

/***/ 7179:
/*!*******************************************************!*\
  !*** ./src/app/checkout/payment/payment.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentComponent": () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_checkout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/checkout.service */ 3948);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 6627);






function PaymentComponent_tr_12_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const paymentMethod_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", paymentMethod_r1);
} }
function PaymentComponent_tr_12_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const paymentMethod_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](paymentMethod_r1);
} }
function PaymentComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PaymentComponent_tr_12_img_2_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PaymentComponent_tr_12_span_3_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 7)(5, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 11)(7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const paymentMethod_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", paymentMethod_r1 === "Paypal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", paymentMethod_r1 !== "Paypal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", paymentMethod_r1);
} }
const _c0 = function () { return ["back", "continue"]; };
class PaymentComponent {
    constructor(checkoutService) {
        this.checkoutService = checkoutService;
    }
    ngOnInit() {
        this.paypalLoggedIn = false;
        this.paymentMethods = ['Paypal', 'Prepayment'];
        this.formPayment = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
            'paymentMethod': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(this.paymentMethods[0], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
        });
    }
    onPaypalLogin(event) {
        this.paypalLoggedIn = true;
    }
    onBack() {
        this.checkoutService.previousStep();
    }
    onContinue() {
        this.checkoutService.setPaymentMethod(this.formPayment.controls.paymentMethod.value);
        this.checkoutService.nextStep();
    }
}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_checkout_service__WEBPACK_IMPORTED_MODULE_0__.CheckoutService)); };
PaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-checkout-payment"]], decls: 14, vars: 5, consts: [[1, "padding-bottom-1x"], [3, "formGroup"], [1, "table-responsive"], [1, "table"], [1, "thead-default"], [4, "ngFor", "ngForOf"], [3, "buttons", "continueEnabled", "back", "continue"], [1, "align-middle"], ["src", "img/paypal.svg", 3, "alt", 4, "ngIf"], ["class", "text-medium", 4, "ngIf"], [1, "custom-control", "custom-radio"], ["type", "radio", "name", "paymentMethod", "formControlName", "paymentMethod", 1, "form-control-radio", 3, "value"], [1, "custom-control-indicator"], ["src", "img/paypal.svg", 3, "alt"], [1, "text-medium"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Choose Payment Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1)(4, "div", 2)(5, "table", 3)(6, "thead", 4)(7, "tr")(8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Payment method");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, PaymentComponent_tr_12_Template, 8, 3, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "app-checkout-footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("back", function PaymentComponent_Template_app_checkout_footer_back_13_listener() { return ctx.onBack(); })("continue", function PaymentComponent_Template_app_checkout_footer_continue_13_listener() { return ctx.onContinue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formPayment);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.paymentMethods);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("buttons", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0))("continueEnabled", ctx.formPayment.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7068:
/*!*****************************************************!*\
  !*** ./src/app/checkout/review/review.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewComponent": () => (/* binding */ ReviewComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../cart/shared/cart.service */ 8085);
/* harmony import */ var _shared_checkout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/checkout.service */ 3948);
/* harmony import */ var _account_orders_shared_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../account/orders/shared/order.service */ 6559);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _account_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../account/shared/auth.service */ 1544);
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../messages/message.service */ 5985);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ 6627);











function ReviewComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 14)(3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 17)(6, "h4", 18)(7, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td", 3)(15, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", item_r1.product.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("alt", item_r1.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r1.product.imageURLs[0], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", item_r1.product.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r1.product.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("x ", item_r1.amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 7, item_r1.product.price * item_r1.amount));
} }
const _c0 = function () { return ["back", "completeOrder"]; };
class ReviewComponent {
    constructor(cartService, checkoutService, orderService, router, authService, messageService) {
        this.cartService = cartService;
        this.checkoutService = checkoutService;
        this.orderService = orderService;
        this.router = router;
        this.authService = authService;
        this.messageService = messageService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    }
    ngOnInit() {
        this.authService.user.subscribe(user => this.user = user);
        this.items = this.cartService.getItems();
        this.total = this.cartService.getTotal();
        this.cartService.itemsChanged
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.unsubscribe$))
            .subscribe((items) => {
            this.items = items;
            this.total = this.cartService.getTotal();
        });
        this.customer = this.checkoutService.getOrderInProgress().customer;
        this.checkoutService.orderInProgressChanged
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.unsubscribe$))
            .subscribe((order) => {
            this.customer = order.customer;
            this.paymentMethod = order.paymentMethod;
        });
    }
    onBack() {
        this.checkoutService.previousStep();
    }
    onCompleteOrder() {
        const userUid = this.user ? this.user.uid : false;
        const order = this.checkoutService.getOrderInProgress();
        const total = this.cartService.getTotal();
        this.checkoutService.setOrderItems(this.cartService.getItems());
        if (userUid) {
            this.submitUserOrder(order, total, userUid);
        }
        else {
            this.submitAnonOrder(order, total);
        }
    }
    submitUserOrder(order, total, userUid) {
        this.orderService
            .addUserOrder(order, total, userUid)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.unsubscribe$))
            .subscribe((response) => {
            this.cartService.clearCart();
            this.checkoutService.resetSteps();
            this.router.navigate(['/order-complete']);
        }, (error) => {
            this.messageService.addError('Could not submit order, try again.');
        });
    }
    submitAnonOrder(order, total) {
        this.orderService
            .addAnonymousOrder(order, total)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.unsubscribe$))
            .subscribe((response) => {
            this.cartService.clearCart();
            this.checkoutService.resetSteps();
            this.router.navigate(['/order-complete']);
        }, (error) => {
            this.messageService.addError('Could not submit order, try again.');
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
ReviewComponent.ɵfac = function ReviewComponent_Factory(t) { return new (t || ReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_checkout_service__WEBPACK_IMPORTED_MODULE_1__.CheckoutService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_account_orders_shared_order_service__WEBPACK_IMPORTED_MODULE_2__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_account_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_messages_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService)); };
ReviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ReviewComponent, selectors: [["app-checkout-review"]], decls: 46, vars: 12, consts: [[1, "padding-bottom-1x"], [1, "table-responsive", "shopping-cart"], [1, "table"], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "shopping-cart-footer"], [1, "column"], [1, "column", "text-lg"], [1, "text-medium"], [1, "row", "padding-top-1x", "mt-3"], [1, "col-sm-6"], [1, "list-unstyled"], [1, "text-muted"], [3, "buttons", "back", "completeOrder"], [1, "product-item"], [1, "product-thumb", 3, "routerLink"], [3, "src", "alt"], [1, "product-info"], [1, "product-title"], [3, "routerLink"], [1, "text-center", "text-lg", "text-medium"], ["routerLink", "/cart", 1, "btn", "btn-outline-primary", "btn-sm"]], template: function ReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Review Your Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1)(4, "table", 2)(5, "thead")(6, "tr")(7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ReviewComponent_tr_13_Template, 17, 9, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Subtotal: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 9)(22, "div", 10)(23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Shipping to:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ul", 11)(26, "li")(27, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Client:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "li")(31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "li")(35, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 10)(39, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Payment method:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "ul", 11)(42, "li")(43, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "app-checkout-footer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("back", function ReviewComponent_Template_app_checkout_footer_back_45_listener() { return ctx.onBack(); })("completeOrder", function ReviewComponent_Template_app_checkout_footer_completeOrder_45_listener() { return ctx.onCompleteOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 9, ctx.total));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx.customer.firstname, " ", ctx.customer.lastname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx.customer.address1, " ", ctx.customer.address2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.customer.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.paymentMethod);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("buttons", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c0));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CurrencyPipe], styles: [".shopping-cart[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.shopping-cart[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.shopping-cart[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.shopping-cart[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .shopping-cart[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .shopping-cart[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .shopping-cart[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  vertical-align: middle !important;\n}\n.shopping-cart[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 17px;\n  padding-bottom: 17px;\n  border-width: 1px;\n}\n.shopping-cart[_ngcontent-%COMP%]   .remove-from-cart[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #ff5252;\n  font-size: 18px;\n  line-height: 1;\n  text-decoration: none;\n}\n.shopping-cart[_ngcontent-%COMP%]   .count-input[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  width: 170px;\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  min-width: 150px;\n  margin-top: 5px;\n  margin-bottom: 3px;\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%], .shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%] {\n  width: 130px;\n  padding-right: 20px;\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n@media screen and (max-width: 860px) {\n  .shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    > em[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-style: normal;\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n  padding-top: 5px;\n  font-size: 16px;\n  font-weight: 500;\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  transition: color 0.3s;\n  color: #374250;\n  line-height: 1.5;\n  text-decoration: none;\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #0da9ef;\n}\n.shopping-cart[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: inline;\n  margin-left: 6px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXHNjc3NcXGhlbHBlcnNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG1CQUFBO0FBRkY7QUFHRTtFQUFTLGdCQUFBO0FBQVg7QUFDRTtFQUFPLFNBQUE7QUFFVDtBQUNJOzs7O0VBQ08saUNBQUE7QUFJWDtBQUZFO0VBRUksaUJBQUE7RUFDQSxvQkFBQTtFQUVGLGlCQUFBO0FBRUo7QUFBRTtFQUNFLHFCQUFBO0VBQ0EsY0NFb0I7RUREcEIsZUNxQ3NCO0VEcEN0QixjQUFBO0VBQ0EscUJBQUE7QUFFSjtBQUFFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUUsZUFBQTtFQUNBLGtCQUFBO0FBQ047QUFDSTs7RUFFRSxtQkFBQTtFQUNBLHNCQUFBO0FBQ047QUFDSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUNOO0FBQU07RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUVSO0FBQU07RUFQRjtJQU95QyxhQUFBO0VBSTNDO0FBQ0Y7QUFISTtFQUNFLGNBQUE7RUFDQSxlQ01tQjtBRER6QjtBQUpNO0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtBQUtWO0FBREk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBRUUsZUNUa0I7RURVbEIsZ0JBQUE7QUFFUjtBQUFNO0VBQ0Usc0JBQUE7RUFDQSxjQzlEaUI7RUQrRGpCLGdCQ2lCaUI7RURoQmpCLHFCQUFBO0FBRVI7QUFEUTtFQUFVLGNDeERNO0FENER4QjtBQUZNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFJUiIsImZpbGUiOiJyZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+c2Nzcy9oZWxwZXJzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ35zY3NzL2hlbHBlcnMvbWl4aW5zJztcclxuXHJcbi5zaG9wcGluZy1jYXJ0IHtcclxuICBtYXJnaW4tYm90dG9tOiBmbG9vcigkZ3JpZC12ZXJ0aWNhbC1zdGVwIC8gMS4yKTsgLy9+MjBweFxyXG4gIC50YWJsZSB7IG1hcmdpbi1ib3R0b206IDA7IH1cclxuICAuYnRuIHsgbWFyZ2luOiAwOyB9XHJcbiAgPiB0YWJsZSA+IHRoZWFkID4gdHIsXHJcbiAgPiB0YWJsZSA+IHRib2R5ID4gdHIge1xyXG4gICAgPiB0aCxcclxuICAgID4gdGQgeyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7IH1cclxuICB9XHJcbiAgPiB0YWJsZSB0aGVhZCB0aCB7XHJcbiAgICBwYWRkaW5nOiB7XHJcbiAgICAgIHRvcDogMTdweDtcclxuICAgICAgYm90dG9tOiAxN3B4O1xyXG4gICAgfVxyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgfVxyXG4gIC5yZW1vdmUtZnJvbS1jYXJ0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAkYnJhbmQtZGFuZ2VyO1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLWxlYWQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLmNvdW50LWlucHV0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gIH1cclxuICAucHJvZHVjdC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiB7XHJcbiAgICAgIHRvcDogNXB4O1xyXG4gICAgICBib3R0b206IDNweDtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0LXRodW1iLFxyXG4gICAgLnByb2R1Y3QtaW5mbyB7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdC10aHVtYiB7XHJcbiAgICAgIHdpZHRoOiAoJGNhcnQtdGh1bWItc2l6ZSArIDIwKTtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgPiBpbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg2MHB4KSB7IGRpc3BsYXk6IG5vbmU7IH1cclxuICAgIH1cclxuICAgIC5wcm9kdWN0LWluZm8gc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6ICRmb250LXNpemUteHM7XHJcbiAgICAgID4gZW0ge1xyXG4gICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgIHdlaWdodDogNTAwO1xyXG4gICAgICAgICAgc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9kdWN0LXRpdGxlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogZmxvb3IoJGdyaWQtdmVydGljYWwtc3RlcCAvIDQpO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICBmb250OiB7XHJcbiAgICAgICAgc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4gICAgICAgIHdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICAgID4gYSB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjNzO1xyXG4gICAgICAgIGNvbG9yOiAkcHJvZHVjdC10aXRsZS1jb2xvcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICY6aG92ZXIgeyBjb2xvcjogJG5hdi1saW5rLWhvdmVyLWNvbG9yOyB9XHJcbiAgICAgIH1cclxuICAgICAgc21hbGwge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy9cclxuLy8gVmFyaWFibGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLz09IENvbG9yc1xyXG4vL1xyXG4vLyMjIEdyYXkgYW5kIGJyYW5kIGNvbG9ycyBmb3IgdXNlIGFjcm9zcyBUaGVtZS5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIEdyYXlzY2FsZVxyXG4kZ3JheS1kYXJrZXI6ICAgICAgICAgICAgIzM3NDI1MDtcclxuJGdyYXktZGFyazogICAgICAgICAgICBcdCAjNjA2OTc1O1xyXG4kZ3JheTogICAgICAgICAgICAgICAgICAgIzlkYTliOTtcclxuJGdyYXktbGlnaHQ6ICAgICAgICAgICAgICNlMWU3ZWM7XHJcbiRncmF5LWxpZ2h0ZXI6ICAgICAgICAgICAjZjVmNWY1O1xyXG4kd2hpdGUtY29sb3I6ICAgICAgICAgICAgI2ZmZmZmZjtcclxuJGJsYWNrLWNvbG9yOiAgICAgICAgICAgICMwMDAwMDA7XHJcblxyXG4vLyBCcmFuZCBjb2xvcnNcclxuJGJyYW5kLXByaW1hcnk6ICAgICAgICAgIzBkYTllZjtcclxuJGJyYW5kLWluZm86XHRcdCAgICAgICAgIzUwYzZlOTtcclxuJGJyYW5kLXN1Y2Nlc3M6ICAgICAgICAgIzQzZDlhMztcclxuJGJyYW5kLXdhcm5pbmc6ICAgICAgICAgI2ZmYjc0ZjtcclxuJGJyYW5kLWRhbmdlcjogICAgICAgICAgI2ZmNTI1MjtcclxuXHJcbi8vIEJvZHlcclxuJGJvZHktYmc6IFx0XHRcdFx0XHRcdFx0JHdoaXRlLWNvbG9yO1xyXG4kYm9keS1jb2xvcjogXHRcdFx0XHRcdFx0JGdyYXktZGFyaztcclxuXHJcbi8vIElubGluZSBsaW5rc1xyXG4kbGluay1jb2xvcjogXHRcdFx0XHRcdFx0JGJyYW5kLXByaW1hcnk7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiBcdFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuXHJcbi8vIEhlZGluZ3NcclxuJGhlYWRpbmdzLWNvbG9yOlx0IFx0XHRcdCRncmF5LWRhcmtlcjtcclxuXHJcbi8vIEJsb2NrcXVvdGVcclxuJHF1b3RlLXRleHQtY29sb3I6ICAgICAgJGJvZHktY29sb3I7XHJcbiRxdW90ZS1tYXJrLWNvbG9yOiAgICAgICRncmF5O1xyXG4kcXVvdGUtYXV0aG9yLWNvbG9yOiAgICAkZ3JheTtcclxuXHJcbi8vIEJvcmRlcnNcclxuJGJvcmRlci1jb2xvcjogICAgICAgICAgJGdyYXktbGlnaHQ7XHJcbiRib3JkZXItbGlnaHQtY29sb3I6ICAgIHJnYmEoJHdoaXRlLWNvbG9yLCAuMTIpO1xyXG5cclxuLy8gSGlnaGxpZ2h0IGNvbG9yXHJcbiRoaWdobGlnaHQtY29sb3I6ICAgICAgICNmZmY4YjA7XHJcblxyXG5cclxuLy89PSBUeXBvZ3JhcGh5XHJcbi8vXHJcbi8vIyMgRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRmb250LWZhbWlseS1iYXNlOiBcdFx0XHQgICdNYXZlbiBQcm8nLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktaGVhZGluZ3M6IFx0ICBpbmhlcml0O1xyXG5cclxuLy8gRm9udCBzaXplc1xyXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgIDE2cHg7XHJcbiRmb250LXNpemUtbGVhZDogICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuMTI1KSk7IC8vIH4xOHB4XHJcbiRmb250LXNpemUtc206IFx0XHRcdFx0ICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuODc1KSk7IC8vIH4xNHB4XHJcbiRmb250LXNpemUteHM6ICAgICAgICAgXHRcdGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuODEyNSkpOyAvLyB+MTNweFxyXG5cclxuLy8gSGVhZGluZ3NcclxuJGZvbnQtc2l6ZS1oMTogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMi4yNSkpOyAvLyB+MzZweFxyXG4kZm9udC1zaXplLWgyOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjg3NSkpOyAvLyB+MzBweFxyXG4kZm9udC1zaXplLWgzOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjUpKTsgLy8gfjI0cHhcclxuJGZvbnQtc2l6ZS1oNDogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkpOyAvLyB+MjBweFxyXG4kZm9udC1zaXplLWg1OiAgICAgICAgICAgICRmb250LXNpemUtbGVhZDsgLy8gfjE4cHhcclxuJGZvbnQtc2l6ZS1oNjogICAgICAgICAgICAkZm9udC1zaXplLWJhc2U7IC8vIH4xNnB4XHJcblxyXG4vLyBEaXNwbGF5IGhlYWRpbmdzXHJcbiRkaXNwbGF5LTE6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDQuNSkpOyAvLyB+NzJweFxyXG4kZGlzcGxheS0yOiAgICAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAzLjc1KSk7IC8vIH42MHB4XHJcbiRkaXNwbGF5LTM6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDMuMTI1KSk7IC8vIH41MHB4XHJcbiRkaXNwbGF5LTQ6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDIuNSkpOyAvLyB+NDBweFxyXG5cclxuLy8gRm9udCBzdHlsZXNcclxuJGZvbnQtc3R5bGUtYmFzZTogICAgICAgICBub3JtYWw7XHJcbiRmb250LXN0eWxlLWhlYWRpbmdzOiAgICAgbm9ybWFsO1xyXG5cclxuLy8gRm9udCB3ZWlnaHRzXHJcbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgIG5vcm1hbDtcclxuJGZvbnQtd2VpZ2h0LWhlYWRpbmdzOiAgICAgNTAwO1xyXG5cclxuLy8gVGV4dCB0cmFuc2Zvcm1zXHJcbiR0ZXh0LXRyYW5zZm9ybS1iYXNlOiAgICAgbm9uZTtcclxuJHRleHQtdHJhbnNmb3JtLWhlYWRpbmdzOiBub25lO1xyXG5cclxuLy8gTGluZSBoZWlnaHRzXHJcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAxLjU7XHJcbiRsaW5lLWhlaWdodC1oMTogICAgICAgICAxLjE1O1xyXG4kbGluZS1oZWlnaHQtaDI6ICAgICAgICAgMS4yO1xyXG4kbGluZS1oZWlnaHQtaDM6ICAgICAgICAgMS4yNTtcclxuJGxpbmUtaGVpZ2h0LWg0OiAgICAgICAgIDEuMztcclxuJGxpbmUtaGVpZ2h0LWg1OiAgICAgICAgIDEuMzU7XHJcbiRsaW5lLWhlaWdodC1oNjogICAgICAgICAxLjQ7XHJcbiRsaW5lLWhlaWdodC1kaXNwbGF5OiAgICAxLjE1O1xyXG5cclxuXHJcbi8vPT0gR3JpZCBWZXJ0aWNhbCBTdGVwXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRncmlkLXZlcnRpY2FsLXN0ZXA6ICAgICAyNHB4O1xyXG5cclxuXHJcbi8vPT0gQm9yZGVyIFJhZGl1c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kYm9yZGVyLXJhZGl1cy1sZzogXHRcdDdweDtcclxuJGJvcmRlci1yYWRpdXMtYmFzZTogXHQ1cHg7XHJcbiRib3JkZXItcmFkaXVzLXNtOiBcdFx0M3B4O1xyXG5cclxuXHJcbi8vPT0gRm9ybXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGlucHV0LWhlaWdodC1sZzpcdFx0XHRcdFx0XHRcdDU0cHg7XHJcbiRpbnB1dC1oZWlnaHQ6XHRcdFx0XHRcdFx0XHRcdDQ0cHg7XHJcbiRpbnB1dC1oZWlnaHQtc206XHRcdFx0XHRcdFx0XHQzNnB4O1xyXG4kaW5wdXQtY29sb3ItcGxhY2Vob2xkZXI6ICAgICAkZ3JheTtcclxuXHJcblxyXG4vLz09IEJ1dHRvbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGJ0bi1mb250LXNpemU6IFx0XHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS1zbTtcclxuJGJ0bi1zbS1mb250LXNpemU6IFx0XHRcdFx0XHRcdCRmb250LXNpemUteHM7XHJcbiRidG4tdGV4dC10cmFuc2Zvcm06ICAgICAgICAgIHVwcGVyY2FzZTtcclxuJGJ0bi1mb250LXdlaWdodDogXHRcdFx0XHRcdFx0NTAwO1xyXG4kYnRuLXRleHQtY29sb3I6ICAgICAgICAgICAgICAkZ3JheS1kYXJrO1xyXG5cclxuJGJ0bi1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0XHRcdDQ0cHg7XHJcbiRidG4tbGctaGVpZ2h0OiBcdFx0XHRcdFx0XHRcdDU0cHg7XHJcbiRidG4tc20taGVpZ2h0OiBcdFx0XHRcdFx0XHRcdDM2cHg7XHJcblxyXG4kYnRuLW1hcmdpbjogICAgICAgICAgICAgICAgICBmbG9vcigkZ3JpZC12ZXJ0aWNhbC1zdGVwIC8gMik7IC8vfjEycHhcclxuJHNvY2lhbC1idG4tc2l6ZTogXHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS14cztcclxuXHJcblxyXG4vLz09IFRhYmxlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kdGFibGUtYm9yZGVyLWNvbG9yOiBcdFx0XHRcdFx0JGJvcmRlci1jb2xvcjtcclxuJHRhYmxlLWNlbGwtcGFkZGluZzpcdFx0XHRcdFx0MTVweDtcclxuJHRhYmxlLWJnLWFjY2VudDogXHRcdFx0XHRcdFx0JGdyYXktbGlnaHRlcjtcclxuXHJcblxyXG4vLz09IE5hdmJhciAvIExvZ29cclxuLy9cclxuXHJcbiRuYXZiYXItbWluLWhlaWdodDogXHRcdFx0ODRweDtcclxuJG5hdmJhci1zdHVjay1zaGFkb3c6ICAgICAwIDNweCAyNXB4IDAgcmdiYShkYXJrZW4oJGdyYXktZGFya2VyLCA0JSksIC4yMik7XHJcbiRsb2dvLXdpZHRoOiBcdFx0XHRcdCAgICAgIDEyOXB4O1xyXG5cclxuLy8gTmF2YmFyIFRvb2xzXHJcbiRuYXZiYXItdG9vbHMtY29sb3I6ICAgICAgICAgICRncmF5LWRhcms7XHJcbiRuYXZiYXItdG9vbHMtc2l6ZTogICAgICAgICAgICRidG4taGVpZ2h0O1xyXG4kb2ZmY2FudmFzLXRvZ2dsZS1pY29uLXNpemU6ICAyMHB4O1xyXG4kdG9vbHMtaWNvbi1zaXplOiAgICAgICAgICAgICAxN3B4O1xyXG5cclxuXHJcbi8vPT0gTmF2aWdhdGlvblxyXG4vL1xyXG5cclxuJG5hdi1saW5rLWZvbnQtc2l6ZTogXHRcdFx0XHQkZm9udC1zaXplLXNtOyAvLyAxNHB4XHJcbiRuYXYtbGluay1mb250LXdlaWdodDogXHRcdFx0NTAwO1xyXG4kbmF2LWxpbmstY29sb3I6IFx0XHRcdFx0XHRcdCRncmF5LWRhcms7XHJcbiRuYXYtbGluay1ob3Zlci1jb2xvcjogXHRcdFx0JGJyYW5kLXByaW1hcnk7XHJcbiRuYXYtbGluay1hY3RpdmUtY29sb3I6IFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuXHJcbi8vIFN1YiBNZW51IC8gTWVnYSBNZW51XHJcbiRzdWItbWVudS13aWR0aDogICAgICAgICAgICAyMDBweDtcclxuJHN1Yi1tZW51LXNoYWRvdzogICAgICAgICAgIDAgN3B4IDIycHggLTVweCByZ2JhKGRhcmtlbigkZ3JheS1kYXJrZXIsIDQlKSwgLjIpO1xyXG5cclxuLy8gT2ZmLUNhbnZhc1xyXG4kb2ZmY2FudmFzLXdpZHRoOiAgICAgICAgICAgMjkwcHg7XHJcblxyXG5cclxuLy89PSBUYWJzXHJcbi8vXHJcblxyXG4kbmF2LXRhYnMtZm9udC1zaXplOlx0XHRcdFx0XHRcdFx0XHRmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogLjg3NSkpOyAvLyB+MTRweFxyXG4kbmF2LXRhYnMtbGluay1jb2xvcjogXHRcdFx0XHRcdFx0XHQkZ3JheTtcclxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAgXHRcdFx0JGdyYXktZGFyaztcclxuXHJcblxyXG4vLz09IFByb2dyZXNzXHJcbi8vXHJcblxyXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgMThweDtcclxuJHByb2dyZXNzLWJnOiAgICAgICAgICRicmFuZC1wcmltYXJ5O1xyXG5cclxuXHJcbi8vPT0gU3RlcHNcclxuLy9cclxuXHJcbiRzdGVwLWNpcmNsZS1zaXplOiAgICAgICAgODBweDtcclxuJHN0ZXAtaWNvbi1kZWZhdWx0LWJnOiAgICAkZ3JheS1saWdodGVyO1xyXG4kc3RlcC1pY29uLXNpemU6ICAgICAgICAgIDM4cHg7XHJcbiRzdGVwLWljb24tZGVmYXVsdC1jb2xvcjogJGdyYXktZGFya2VyO1xyXG4kc3RlcC10aXRsZS1zaXplOiAgICAgICAgICRmb250LXNpemUtc207XHJcbiRzdGVwLXRpdGxlLWNvbG9yOiAgICAgICAgJGdyYXktZGFyaztcclxuJHN0ZXAtY29ubmVjdC1oZWlnaHQ6ICAgICAzcHg7XHJcblxyXG5cclxuLy8gPT0gU2hvcFxyXG4vL1xyXG5cclxuLy8gUHJvZHVjdFxyXG4kcHJvZHVjdC10aXRsZS1mb250LXNpemU6ICAgICAkZm9udC1zaXplLWJhc2U7XHJcbiRwcm9kdWN0LXRpdGxlLWNvbG9yOiAgICAgICAgICRncmF5LWRhcmtlcjtcclxuJHByb2R1Y3QtdGl0bGUtaG92ZXItY29sb3I6ICAgJGJyYW5kLXByaW1hcnk7XHJcbiRwcm9kdWN0LXByaWNlLWZvbnQtc2l6ZTogICAgICRmb250LXNpemUtYmFzZTtcclxuJHByb2R1Y3QtcHJpY2UtY29sb3I6ICAgICAgICAgJGdyYXktZGFyaztcclxuXHJcbi8vIFNob3AgVmlld1xyXG4kc2hvcC12aWV3LXNpemU6ICAgICAgICAgICAgNDNweDtcclxuJHNob3Atdmlldy1jb2xvcjogICAgICAgICAgICRncmF5LWRhcms7XHJcbiRzaG9wLXZpZXctYmctY29sb3I6ICAgICAgICAkd2hpdGUtY29sb3I7XHJcbiRzaG9wLXZpZXctaG92ZXItYmctY29sb3I6ICAkZ3JheS1saWdodGVyO1xyXG4kc2hvcC12aWV3LWFjdGl2ZS1iZy1jb2xvcjogJGJyYW5kLXByaW1hcnk7XHJcblxyXG4vLyBDYXJ0XHJcbiRjYXJ0LXRodW1iLXNpemU6ICAgICAgICAgMTEwcHg7XHJcblxyXG4vLyBBY2NvdW50XHJcbiRjb3Zlci1oZWlnaHQ6ICAgICAgICAgICAgMTIwcHg7XHJcbiR1c2VyLWF2YS1zaXplOiAgICAgICAgICAgMTE1cHg7XHJcblxyXG5cclxuLy8gPT0gQmxvZ1xyXG4vL1xyXG5cclxuJGJsb2ctcG9zdC1tZXRhLWNvbG9yOiAgICAgICRncmF5LWRhcms7XHJcbiRibG9nLXBvc3QtbWV0YS1pY29uLWNvbG9yOiAkZ3JheTtcclxuJGJsb2ctcG9zdC1tZXRhLWZvbnQtc2l6ZTogICRmb250LXNpemUteHM7XHJcbiRibG9nLXBvc3QtY29sb3I6ICAgICAgICAgICAkaGVhZGluZ3MtY29sb3I7XHJcbiRibG9nLXBvc3QtaG92ZXItY29sb3I6ICAgICAkYnJhbmQtcHJpbWFyeTtcclxuXHJcblxyXG4vLyA9PSBDb21tZW50c1xyXG4vL1xyXG5cclxuJGNvbW1lbnQtYXV0aG9yLWF2YS1zaXplOiAgIDUwcHg7XHJcbiRjb21tZW50LXRpdGxlLXNpemU6ICAgICAgICAkZm9udC1zaXplLXNtO1xyXG4kY29tbWVudC10aXRsZS13ZWlnaHQ6ICAgICAgNTAwO1xyXG5cclxuXHJcbi8vPT0gV2lkZ2V0c1xyXG4vL1xyXG5cclxuJHNpZGViYXItbWF4LXdpZHRoOiAgICAgICAgICA0MDBweDtcclxuJHNpZGViYXItb2ZmY2FudmFzLXdpZHRoOiAgICAzMjBweDtcclxuJHdpZGdldC10aXRsZS1jb2xvcjogICAgICAgICAkZ3JheTtcclxuJHdpZGdldC10aXRsZS1mb250LXNpemU6ICAgICAkZm9udC1zaXplLXNtO1xyXG4kd2lkZ2V0LWxpbmstZm9udC1zaXplOiAgICAgICRmb250LXNpemUtc207XHJcbiR3aWRnZXQtbWV0YS1jb2xvcjogICAgICAgICAgJGdyYXk7XHJcbiR3aWRnZXQtbWV0YS1mb250LXNpemU6ICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAvIDEuMzMpKTsgLy9+MTJweFxyXG4kd2lkZ2V0LWVudHJ5LXRodW1iLXNpemU6ICAgIDUwcHg7XHJcblxyXG4vLyBUYWdzXHJcbiR3aWRnZXQtdGFncy1oZWlnaHQ6ICAgICAgICAgICAgICAyOHB4O1xyXG4kd2lkZ2V0LXRhZ3MtZm9udC1zaXplOiAgICAgICAgICAgJGZvbnQtc2l6ZS14cztcclxuJHdpZGdldC10YWdzLWNvbG9yOiAgICAgICAgICAgICAgICRuYXYtbGluay1jb2xvcjtcclxuJHdpZGdldC10YWdzLWhvdmVyLWJnOiAgICAgICAgICAgICRncmF5LWxpZ2h0ZXI7XHJcbiR3aWRnZXQtdGFncy1hY3RpdmUtYmc6ICAgICAgICAgICAkbmF2LWxpbmstYWN0aXZlLWNvbG9yO1xyXG4kd2lkZ2V0LXRhZ3MtYWN0aXZlLWJvcmRlci1jb2xvcjogJG5hdi1saW5rLWFjdGl2ZS1jb2xvcjtcclxuJHdpZGdldC10YWdzLWFjdGl2ZS1jb2xvcjogICAgICAgICR3aGl0ZS1jb2xvcjtcclxuXHJcblxyXG4vLz09IFBhZ2luYXRpb25cclxuLy9cclxuXHJcbiRwYWdpbmF0aW9uLWxpbmstc2l6ZTogICAgICAgICAkYnRuLXNtLWhlaWdodDtcclxuJHBhZ2luYXRpb24tbGluay1mb250LXNpemU6ICAgICRmb250LXNpemUtc207XHJcbiRwYWdpbmF0aW9uLWxpbmstZm9udC13ZWlnaHQ6ICA1MDA7XHJcbiRwYWdpbmF0aW9uLWxpbmstY29sb3I6ICAgICAgICAkZ3JheS1kYXJrO1xyXG4kcGFnaW5hdGlvbi1saW5rLWFjdGl2ZS1jb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4kcGFnaW5hdGlvbi1saW5rLWhvdmVyLWJnOiAgICAgJGdyYXktbGlnaHRlcjtcclxuJHBhZ2luYXRpb24tbGluay1hY3RpdmUtYmc6ICAgICRicmFuZC1wcmltYXJ5O1xyXG5cclxuXHJcbi8vPT0gVG9vbHRpcHNcclxuLy9cclxuXHJcbiR0b29sdGlwLW9wYWNpdHk6ICAgIFx0XHQxO1xyXG4kdG9vbHRpcC1iZzogXHRcdFx0XHQgXHRcdGRhcmtlbigkZ3JheS1kYXJrZXIsIDQlKTtcclxuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogXHQkdG9vbHRpcC1iZztcclxuXHJcblxyXG4vLz09IENhcm91c2VsXHJcbi8vXHJcblxyXG4kY2Fyb3VzZWwtbmF2cy1zaXplOiBcdFx0XHRcdCAgJGJ0bi1oZWlnaHQ7XHJcbiRjYXJvdXNlbC1uYXZzLWljb24tc2l6ZTogXHQgIDE5cHg7XHJcbiRjYXJvdXNlbC1uYXZzLWJnOiAgICAgICAgICAgICR3aGl0ZS1jb2xvcjtcclxuJGNhcm91c2VsLW5hdnMtY29sb3I6IFx0XHRcdCAgJGdyYXktZGFya2VyO1xyXG4kY2Fyb3VzZWwtZG90cy1zaXplOiBcdFx0XHRcdCAgNnB4O1xyXG4kY2Fyb3VzZWwtZG90cy1jb2xvcjogXHQgIFx0ICAkZ3JheS1kYXJrO1xyXG5cclxuLy8gSGVybyBTbGlkZXJcclxuJGhlcm8tc2xpZGVyLW1pbi1oZWlnaHQ6ICAgICAgNTgwcHg7XHJcblxyXG4vLz09IENvdW50ZG93blxyXG4vL1xyXG5cclxuJGNvdW50ZG93bi1ib3gtc2l6ZTogICAgICAgICAgNDhweDtcclxuJGNvdW50ZG93bi1mb250LXNpemU6ICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuMzc1KSk7IC8vIH4yMnB4XHJcbiRjb3VudGRvd24tbGFiZWwtc2l6ZTogICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuNzUpKTsgLy8gfjEycHhcclxuXHJcblxyXG4vLz09IE1lZGlhIHF1ZXJpZXMgKHJlc3BvbnNpdmUgYnJlYWNrcG9pbnRzKVxyXG4vLyMjIERlc2NrdG9wLCBUYWJsZXQsIE1vYmlsZVxyXG5cclxuJHNjcmVlbi14bDogMTIwMHB4O1xyXG4kc2NyZWVuLWxnOiA5OTFweDtcclxuJHNjcmVlbi1tZDogNzY4cHg7XHJcbiRzY3JlZW4tc206IDU3NnB4O1xyXG4kc2NyZWVuLXhzOiAzNjBweDtcclxuXHJcbiRuYXYtY29sbGFwc2U6ICAgICAxMDcwcHg7XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3948:
/*!*****************************************************!*\
  !*** ./src/app/checkout/shared/checkout.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutService": () => (/* binding */ CheckoutService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/order.model */ 9297);
/* harmony import */ var _models_customer_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/customer.model */ 1854);




class CheckoutService {
    constructor() {
        this.orderInProgressChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.stepChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.orderInProgress = new _models_order_model__WEBPACK_IMPORTED_MODULE_0__.Order(new _models_customer_model__WEBPACK_IMPORTED_MODULE_1__.Customer());
        this.activeStep = 0;
    }
    gotoStep(number) {
        this.activeStep = number;
        this.stepChanged.emit(this.activeStep);
    }
    nextStep() {
        this.activeStep++;
        this.stepChanged.emit(this.activeStep);
    }
    previousStep() {
        this.activeStep--;
        this.stepChanged.emit(this.activeStep);
    }
    resetSteps() {
        this.activeStep = 0;
    }
    setCustomer(customer) {
        this.orderInProgress.customer = customer;
        this.orderInProgressChanged.emit(this.orderInProgress);
    }
    setShippingMethod(shippingMethod) {
        this.orderInProgress.shippingMethod = shippingMethod;
        this.orderInProgressChanged.emit(this.orderInProgress);
    }
    setOrderItems(items) {
        this.orderInProgress.items = items;
        this.orderInProgressChanged.emit(this.orderInProgress);
    }
    getOrderInProgress() {
        return this.orderInProgress;
    }
    setPaymentMethod(paymentMethod) {
        this.orderInProgress.paymentMethod = paymentMethod;
        this.orderInProgressChanged.emit(this.orderInProgress);
    }
}
CheckoutService.ɵfac = function CheckoutService_Factory(t) { return new (t || CheckoutService)(); };
CheckoutService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CheckoutService, factory: CheckoutService.ɵfac });


/***/ }),

/***/ 3677:
/*!*********************************************************!*\
  !*** ./src/app/checkout/shipping/shipping.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingComponent": () => (/* binding */ ShippingComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_checkout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/checkout.service */ 3948);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 6627);






function ShippingComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 7)(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 7)(10, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 10)(12, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const shippingMethod_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](shippingMethod_r1.method);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](shippingMethod_r1.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 4, shippingMethod_r1.fee));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", shippingMethod_r1.value);
} }
const _c0 = function () { return ["back", "continue"]; };
class ShippingComponent {
    constructor(checkoutService) {
        this.checkoutService = checkoutService;
    }
    ngOnInit() {
        this.shippingMethods = [
            {
                method: 'Swiss Post Priority',
                time: '1 - 2 days',
                fee: 11,
                value: 'priority'
            },
            {
                method: 'Swiss Post Economy',
                time: 'up to one week',
                fee: 9,
                value: 'economy'
            }
        ];
        this.formShipping = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
            'shippingMethod': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(this.shippingMethods[1].value, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
        });
    }
    onBack() {
        this.checkoutService.previousStep();
    }
    onContinue() {
        this.checkoutService.setShippingMethod(this.formShipping.controls.shippingMethod.value);
        this.checkoutService.nextStep();
    }
}
ShippingComponent.ɵfac = function ShippingComponent_Factory(t) { return new (t || ShippingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_checkout_service__WEBPACK_IMPORTED_MODULE_0__.CheckoutService)); };
ShippingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ShippingComponent, selectors: [["app-checkout-shipping"]], decls: 18, vars: 5, consts: [[1, "padding-bottom-1x"], [3, "formGroup"], [1, "table-responsive"], [1, "table"], [1, "thead-default"], [4, "ngFor", "ngForOf"], [3, "buttons", "continueEnabled", "back", "continue"], [1, "align-middle"], [1, "text-medium"], [1, "custom-control", "custom-radio"], ["type", "radio", "name", "shippingMethod", "formControlName", "shippingMethod", 1, "form-control-radio", 3, "value"], [1, "custom-control-indicator"]], template: function ShippingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Choose Shipping Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1)(4, "div", 2)(5, "table", 3)(6, "thead", 4)(7, "tr")(8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Shipping method");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Delivery time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Handling fee");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ShippingComponent_tr_16_Template, 13, 6, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "app-checkout-footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("back", function ShippingComponent_Template_app_checkout_footer_back_17_listener() { return ctx.onBack(); })("continue", function ShippingComponent_Template_app_checkout_footer_continue_17_listener() { return ctx.onContinue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formShipping);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.shippingMethods);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("buttons", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0))("continueEnabled", ctx.formShipping.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlwcGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3051:
/*!*******************************************************!*\
  !*** ./src/app/checkout/sidebar/sidebar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../cart/shared/cart.service */ 8085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



class SidebarComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    ngOnInit() {
        this.cartSubtotal = this.cartService.getTotal();
        // TODO: shipping, hardcoded for now
        this.shipping = 9;
        this.orderTotal = this.cartSubtotal + this.shipping;
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-checkout-sidebar"]], decls: 24, vars: 9, consts: [[1, "sidebar"], [1, "padding-top-2x", "hidden-lg-up"], [1, "widget", "widget-order-summary"], [1, "widget-title"], [1, "table"], [1, "text-medium"], [1, "text-lg", "text-medium"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Order Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 4)(6, "tr")(7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cart Subtotal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr")(13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Shipping:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tr")(19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Order Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 3, ctx.cartSubtotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 5, ctx.shipping));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 7, ctx.orderTotal));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1481:
/*!***************************************************!*\
  !*** ./src/app/core/content/content.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentComponent": () => (/* binding */ ContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_offcanvas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/offcanvas.service */ 9917);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 3007);




class ContentComponent {
    constructor(offcanvasService) {
        this.offcanvasService = offcanvasService;
    }
    onMenuClose(e) {
        this.offcanvasService.closeOffcanvasNavigation();
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_offcanvas_service__WEBPACK_IMPORTED_MODULE_0__.OffcanvasService)); };
ContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 6, vars: 0, consts: [[1, "offcanvas-wrapper"], ["href", "#", 1, "scroll-to-top-btn"], [1, "icon-arrow-up"], [1, "site-backdrop", 3, "click"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet")(2, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContentComponent_Template_div_click_5_listener($event) { return ctx.onMenuClose($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3007:
/*!*********************************************************!*\
  !*** ./src/app/core/content/footer/footer.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 82, vars: 0, consts: [[1, "site-footer"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-md-6"], [1, "widget", "widget-light-skin"], [1, "widget-title"], [1, "text-white"], ["href", "#", 1, "navi-link-light"], ["href", "#", 1, "social-button", "shape-circle", "sb-facebook", "sb-light-skin"], [1, "socicon-facebook"], ["href", "#", 1, "social-button", "shape-circle", "sb-twitter", "sb-light-skin"], [1, "socicon-twitter"], ["href", "#", 1, "social-button", "shape-circle", "sb-instagram", "sb-light-skin"], [1, "socicon-instagram"], ["href", "#", 1, "social-button", "shape-circle", "sb-google-plus", "sb-light-skin"], [1, "socicon-googleplus"], ["href", "#", 1, "market-button", "apple-button", "mb-light-skin"], [1, "mb-subtitle"], [1, "mb-title"], ["href", "#", 1, "market-button", "google-button", "mb-light-skin"], [1, "widget", "widget-links", "widget-light-skin"], ["href", "#"], [1, "hr-light", "mt-2", "margin-bottom-2x"], [1, "col-md-7", "padding-bottom-1x"], [1, "margin-bottom-1x", 2, "max-width", "615px"], ["src", "img/payment_methods.png", "alt", "Payment Methods"], [1, "col-md-5", "padding-bottom-1x"], [1, "footer-copyright"], [1, "icon-heart", "text-danger"], ["href", "http://www.andre-abt.com/", "target", "_blank"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "section", 4)(5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Get In Touch With Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Phone: +41 79 241 45 44");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p")(10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "info@andre-abt.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3)(21, "section", 4)(22, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Our Mobile App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16)(25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Download on the");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "App Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19)(30, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Download on the");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Google Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3)(35, "section", 20)(36, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul")(39, "li")(40, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "About the Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li")(43, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Our Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li")(46, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3)(49, "section", 20)(50, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Account & Shipping Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul")(53, "li")(54, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Your Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li")(57, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Shipping Rates & Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li")(60, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Refunds & Replacements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li")(63, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Taxes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li")(66, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Delivery Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li")(69, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Affiliate Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 2)(73, "div", 23)(74, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u00A9 All rights reserved. Made with \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " \u00A0by Andr\u00E9 Abt & Christian Zellweger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".site-footer[_ngcontent-%COMP%] {\n  padding-top: 72px;\n  background-color: #374250;\n}\n@media (max-width: 768px) {\n  .site-footer[_ngcontent-%COMP%] {\n    padding-top: 48px;\n  }\n}\n.footer-copyright[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 24px;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 14px;\n  font-weight: normal;\n}\n.footer-copyright[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  transition: color 0.25s;\n  color: rgba(255, 255, 255, 0.5);\n  text-decoration: none;\n}\n.footer-copyright[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #0da9ef;\n}\n.footer-light[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n.footer-light[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%] {\n  color: #9da9b9;\n}\n.footer-light[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #9da9b9;\n}\n.footer-light[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #0da9ef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFxoZWxwZXJzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxpQkFBQTtFQUNBLHlCQ0t1QjtBRFB6QjtBQUdFO0VBSEY7SUFJSSxpQkFBQTtFQUFGO0FBQ0Y7QUFFQTtFQUNFLFNBQUE7RUFFRSxpQkFBQTtFQUNBLG9CQ3lGcUI7RUR2RnZCLCtCQUFBO0VBRUUsZUMwQ21CO0VEekNuQixtQkFBQTtBQUZKO0FBSUU7RUFDRSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7QUFGSjtBQUdJO0VBQVUsY0NOVTtBRE14QjtBQUtBO0VBQ0UseUJDakJ1QjtBRGV6QjtBQUdFO0VBQ0UsY0NyQnFCO0FEb0J6QjtBQUVJO0VBQ0UsY0N2Qm1CO0FEdUJ6QjtBQUNNO0VBQVUsY0NqQlE7QURtQnhCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zY3NzL2hlbHBlcnMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnfnNjc3MvaGVscGVycy9taXhpbnMnO1xyXG5cclxuLnNpdGUtZm9vdGVyIHtcclxuICBwYWRkaW5nLXRvcDogZmxvb3IoJGdyaWQtdmVydGljYWwtc3RlcCAqIDMpOyAvL343MnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5LWRhcmtlcjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgcGFkZGluZy10b3A6IGZsb29yKCRncmlkLXZlcnRpY2FsLXN0ZXAgKiAyKTsgLy9+NDhweDtcclxuICB9XHJcbn1cclxuLmZvb3Rlci1jb3B5cmlnaHQge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiB7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBib3R0b206ICRncmlkLXZlcnRpY2FsLXN0ZXA7IC8vIH4yNHB4XHJcbiAgfVxyXG4gIGNvbG9yOiByZ2JhKCR3aGl0ZS1jb2xvciwgLjUpO1xyXG4gIGZvbnQ6IHtcclxuICAgIHNpemU6ICRmb250LXNpemUtc207XHJcbiAgICB3ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiAgPiBhIHtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4yNXM7XHJcbiAgICBjb2xvcjogcmdiYSgkd2hpdGUtY29sb3IsIC41KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICY6aG92ZXIgeyBjb2xvcjogJGxpbmstaG92ZXItY29sb3I7IH1cclxuICB9XHJcbn1cclxuXHJcbi8vIExpZ2h0IEZvb3RlclxyXG4uZm9vdGVyLWxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1saWdodGVyO1xyXG4gIC5mb290ZXItY29weXJpZ2h0IHtcclxuICAgIGNvbG9yOiAkZ3JheTtcclxuICAgID4gYSB7XHJcbiAgICAgIGNvbG9yOiAkZ3JheTtcclxuICAgICAgJjpob3ZlciB7IGNvbG9yOiAkbGluay1ob3Zlci1jb2xvcjsgfVxyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vXHJcbi8vIFZhcmlhYmxlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy89PSBDb2xvcnNcclxuLy9cclxuLy8jIyBHcmF5IGFuZCBicmFuZCBjb2xvcnMgZm9yIHVzZSBhY3Jvc3MgVGhlbWUuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBHcmF5c2NhbGVcclxuJGdyYXktZGFya2VyOiAgICAgICAgICAgICMzNzQyNTA7XHJcbiRncmF5LWRhcms6ICAgICAgICAgICAgXHQgIzYwNjk3NTtcclxuJGdyYXk6ICAgICAgICAgICAgICAgICAgICM5ZGE5Yjk7XHJcbiRncmF5LWxpZ2h0OiAgICAgICAgICAgICAjZTFlN2VjO1xyXG4kZ3JheS1saWdodGVyOiAgICAgICAgICAgI2Y1ZjVmNTtcclxuJHdoaXRlLWNvbG9yOiAgICAgICAgICAgICNmZmZmZmY7XHJcbiRibGFjay1jb2xvcjogICAgICAgICAgICAjMDAwMDAwO1xyXG5cclxuLy8gQnJhbmQgY29sb3JzXHJcbiRicmFuZC1wcmltYXJ5OiAgICAgICAgICMwZGE5ZWY7XHJcbiRicmFuZC1pbmZvOlx0XHQgICAgICAgICM1MGM2ZTk7XHJcbiRicmFuZC1zdWNjZXNzOiAgICAgICAgICM0M2Q5YTM7XHJcbiRicmFuZC13YXJuaW5nOiAgICAgICAgICNmZmI3NGY7XHJcbiRicmFuZC1kYW5nZXI6ICAgICAgICAgICNmZjUyNTI7XHJcblxyXG4vLyBCb2R5XHJcbiRib2R5LWJnOiBcdFx0XHRcdFx0XHRcdCR3aGl0ZS1jb2xvcjtcclxuJGJvZHktY29sb3I6IFx0XHRcdFx0XHRcdCRncmF5LWRhcms7XHJcblxyXG4vLyBJbmxpbmUgbGlua3NcclxuJGxpbmstY29sb3I6IFx0XHRcdFx0XHRcdCRicmFuZC1wcmltYXJ5O1xyXG4kbGluay1ob3Zlci1jb2xvcjogXHRcdFx0JGJyYW5kLXByaW1hcnk7XHJcblxyXG4vLyBIZWRpbmdzXHJcbiRoZWFkaW5ncy1jb2xvcjpcdCBcdFx0XHQkZ3JheS1kYXJrZXI7XHJcblxyXG4vLyBCbG9ja3F1b3RlXHJcbiRxdW90ZS10ZXh0LWNvbG9yOiAgICAgICRib2R5LWNvbG9yO1xyXG4kcXVvdGUtbWFyay1jb2xvcjogICAgICAkZ3JheTtcclxuJHF1b3RlLWF1dGhvci1jb2xvcjogICAgJGdyYXk7XHJcblxyXG4vLyBCb3JkZXJzXHJcbiRib3JkZXItY29sb3I6ICAgICAgICAgICRncmF5LWxpZ2h0O1xyXG4kYm9yZGVyLWxpZ2h0LWNvbG9yOiAgICByZ2JhKCR3aGl0ZS1jb2xvciwgLjEyKTtcclxuXHJcbi8vIEhpZ2hsaWdodCBjb2xvclxyXG4kaGlnaGxpZ2h0LWNvbG9yOiAgICAgICAjZmZmOGIwO1xyXG5cclxuXHJcbi8vPT0gVHlwb2dyYXBoeVxyXG4vL1xyXG4vLyMjIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kZm9udC1mYW1pbHktYmFzZTogXHRcdFx0ICAnTWF2ZW4gUHJvJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LWhlYWRpbmdzOiBcdCAgaW5oZXJpdDtcclxuXHJcbi8vIEZvbnQgc2l6ZXNcclxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAxNnB4O1xyXG4kZm9udC1zaXplLWxlYWQ6ICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjEyNSkpOyAvLyB+MThweFxyXG4kZm9udC1zaXplLXNtOiBcdFx0XHRcdCAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogLjg3NSkpOyAvLyB+MTRweFxyXG4kZm9udC1zaXplLXhzOiAgICAgICAgIFx0XHRmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogLjgxMjUpKTsgLy8gfjEzcHhcclxuXHJcbi8vIEhlYWRpbmdzXHJcbiRmb250LXNpemUtaDE6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDIuMjUpKTsgLy8gfjM2cHhcclxuJGZvbnQtc2l6ZS1oMjogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS44NzUpKTsgLy8gfjMwcHhcclxuJGZvbnQtc2l6ZS1oMzogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS41KSk7IC8vIH4yNHB4XHJcbiRmb250LXNpemUtaDQ6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuMjUpKTsgLy8gfjIwcHhcclxuJGZvbnQtc2l6ZS1oNTogICAgICAgICAgICAkZm9udC1zaXplLWxlYWQ7IC8vIH4xOHB4XHJcbiRmb250LXNpemUtaDY6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlOyAvLyB+MTZweFxyXG5cclxuLy8gRGlzcGxheSBoZWFkaW5nc1xyXG4kZGlzcGxheS0xOiAgICAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiA0LjUpKTsgLy8gfjcycHhcclxuJGRpc3BsYXktMjogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMy43NSkpOyAvLyB+NjBweFxyXG4kZGlzcGxheS0zOiAgICAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAzLjEyNSkpOyAvLyB+NTBweFxyXG4kZGlzcGxheS00OiAgICAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAyLjUpKTsgLy8gfjQwcHhcclxuXHJcbi8vIEZvbnQgc3R5bGVzXHJcbiRmb250LXN0eWxlLWJhc2U6ICAgICAgICAgbm9ybWFsO1xyXG4kZm9udC1zdHlsZS1oZWFkaW5nczogICAgIG5vcm1hbDtcclxuXHJcbi8vIEZvbnQgd2VpZ2h0c1xyXG4kZm9udC13ZWlnaHQtYmFzZTogICAgICAgICBub3JtYWw7XHJcbiRmb250LXdlaWdodC1oZWFkaW5nczogICAgIDUwMDtcclxuXHJcbi8vIFRleHQgdHJhbnNmb3Jtc1xyXG4kdGV4dC10cmFuc2Zvcm0tYmFzZTogICAgIG5vbmU7XHJcbiR0ZXh0LXRyYW5zZm9ybS1oZWFkaW5nczogbm9uZTtcclxuXHJcbi8vIExpbmUgaGVpZ2h0c1xyXG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgMS41O1xyXG4kbGluZS1oZWlnaHQtaDE6ICAgICAgICAgMS4xNTtcclxuJGxpbmUtaGVpZ2h0LWgyOiAgICAgICAgIDEuMjtcclxuJGxpbmUtaGVpZ2h0LWgzOiAgICAgICAgIDEuMjU7XHJcbiRsaW5lLWhlaWdodC1oNDogICAgICAgICAxLjM7XHJcbiRsaW5lLWhlaWdodC1oNTogICAgICAgICAxLjM1O1xyXG4kbGluZS1oZWlnaHQtaDY6ICAgICAgICAgMS40O1xyXG4kbGluZS1oZWlnaHQtZGlzcGxheTogICAgMS4xNTtcclxuXHJcblxyXG4vLz09IEdyaWQgVmVydGljYWwgU3RlcFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kZ3JpZC12ZXJ0aWNhbC1zdGVwOiAgICAgMjRweDtcclxuXHJcblxyXG4vLz09IEJvcmRlciBSYWRpdXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGJvcmRlci1yYWRpdXMtbGc6IFx0XHQ3cHg7XHJcbiRib3JkZXItcmFkaXVzLWJhc2U6IFx0NXB4O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogXHRcdDNweDtcclxuXHJcblxyXG4vLz09IEZvcm1zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRpbnB1dC1oZWlnaHQtbGc6XHRcdFx0XHRcdFx0XHQ1NHB4O1xyXG4kaW5wdXQtaGVpZ2h0Olx0XHRcdFx0XHRcdFx0XHQ0NHB4O1xyXG4kaW5wdXQtaGVpZ2h0LXNtOlx0XHRcdFx0XHRcdFx0MzZweDtcclxuJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyOiAgICAgJGdyYXk7XHJcblxyXG5cclxuLy89PSBCdXR0b25zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRidG4tZm9udC1zaXplOiBcdFx0XHRcdFx0XHRcdCRmb250LXNpemUtc207XHJcbiRidG4tc20tZm9udC1zaXplOiBcdFx0XHRcdFx0XHQkZm9udC1zaXplLXhzO1xyXG4kYnRuLXRleHQtdHJhbnNmb3JtOiAgICAgICAgICB1cHBlcmNhc2U7XHJcbiRidG4tZm9udC13ZWlnaHQ6IFx0XHRcdFx0XHRcdDUwMDtcclxuJGJ0bi10ZXh0LWNvbG9yOiAgICAgICAgICAgICAgJGdyYXktZGFyaztcclxuXHJcbiRidG4taGVpZ2h0OiBcdFx0XHRcdFx0XHRcdFx0XHQ0NHB4O1xyXG4kYnRuLWxnLWhlaWdodDogXHRcdFx0XHRcdFx0XHQ1NHB4O1xyXG4kYnRuLXNtLWhlaWdodDogXHRcdFx0XHRcdFx0XHQzNnB4O1xyXG5cclxuJGJ0bi1tYXJnaW46ICAgICAgICAgICAgICAgICAgZmxvb3IoJGdyaWQtdmVydGljYWwtc3RlcCAvIDIpOyAvL34xMnB4XHJcbiRzb2NpYWwtYnRuLXNpemU6IFx0XHRcdFx0XHRcdCRmb250LXNpemUteHM7XHJcblxyXG5cclxuLy89PSBUYWJsZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJHRhYmxlLWJvcmRlci1jb2xvcjogXHRcdFx0XHRcdCRib3JkZXItY29sb3I7XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmc6XHRcdFx0XHRcdDE1cHg7XHJcbiR0YWJsZS1iZy1hY2NlbnQ6IFx0XHRcdFx0XHRcdCRncmF5LWxpZ2h0ZXI7XHJcblxyXG5cclxuLy89PSBOYXZiYXIgLyBMb2dvXHJcbi8vXHJcblxyXG4kbmF2YmFyLW1pbi1oZWlnaHQ6IFx0XHRcdDg0cHg7XHJcbiRuYXZiYXItc3R1Y2stc2hhZG93OiAgICAgMCAzcHggMjVweCAwIHJnYmEoZGFya2VuKCRncmF5LWRhcmtlciwgNCUpLCAuMjIpO1xyXG4kbG9nby13aWR0aDogXHRcdFx0XHQgICAgICAxMjlweDtcclxuXHJcbi8vIE5hdmJhciBUb29sc1xyXG4kbmF2YmFyLXRvb2xzLWNvbG9yOiAgICAgICAgICAkZ3JheS1kYXJrO1xyXG4kbmF2YmFyLXRvb2xzLXNpemU6ICAgICAgICAgICAkYnRuLWhlaWdodDtcclxuJG9mZmNhbnZhcy10b2dnbGUtaWNvbi1zaXplOiAgMjBweDtcclxuJHRvb2xzLWljb24tc2l6ZTogICAgICAgICAgICAgMTdweDtcclxuXHJcblxyXG4vLz09IE5hdmlnYXRpb25cclxuLy9cclxuXHJcbiRuYXYtbGluay1mb250LXNpemU6IFx0XHRcdFx0JGZvbnQtc2l6ZS1zbTsgLy8gMTRweFxyXG4kbmF2LWxpbmstZm9udC13ZWlnaHQ6IFx0XHRcdDUwMDtcclxuJG5hdi1saW5rLWNvbG9yOiBcdFx0XHRcdFx0XHQkZ3JheS1kYXJrO1xyXG4kbmF2LWxpbmstaG92ZXItY29sb3I6IFx0XHRcdCRicmFuZC1wcmltYXJ5O1xyXG4kbmF2LWxpbmstYWN0aXZlLWNvbG9yOiBcdFx0JGJyYW5kLXByaW1hcnk7XHJcblxyXG4vLyBTdWIgTWVudSAvIE1lZ2EgTWVudVxyXG4kc3ViLW1lbnUtd2lkdGg6ICAgICAgICAgICAgMjAwcHg7XHJcbiRzdWItbWVudS1zaGFkb3c6ICAgICAgICAgICAwIDdweCAyMnB4IC01cHggcmdiYShkYXJrZW4oJGdyYXktZGFya2VyLCA0JSksIC4yKTtcclxuXHJcbi8vIE9mZi1DYW52YXNcclxuJG9mZmNhbnZhcy13aWR0aDogICAgICAgICAgIDI5MHB4O1xyXG5cclxuXHJcbi8vPT0gVGFic1xyXG4vL1xyXG5cclxuJG5hdi10YWJzLWZvbnQtc2l6ZTpcdFx0XHRcdFx0XHRcdFx0Zmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC44NzUpKTsgLy8gfjE0cHhcclxuJG5hdi10YWJzLWxpbmstY29sb3I6IFx0XHRcdFx0XHRcdFx0JGdyYXk7XHJcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogIFx0XHRcdCRncmF5LWRhcms7XHJcblxyXG5cclxuLy89PSBQcm9ncmVzc1xyXG4vL1xyXG5cclxuJHByb2dyZXNzLWhlaWdodDogICAgIDE4cHg7XHJcbiRwcm9ncmVzcy1iZzogICAgICAgICAkYnJhbmQtcHJpbWFyeTtcclxuXHJcblxyXG4vLz09IFN0ZXBzXHJcbi8vXHJcblxyXG4kc3RlcC1jaXJjbGUtc2l6ZTogICAgICAgIDgwcHg7XHJcbiRzdGVwLWljb24tZGVmYXVsdC1iZzogICAgJGdyYXktbGlnaHRlcjtcclxuJHN0ZXAtaWNvbi1zaXplOiAgICAgICAgICAzOHB4O1xyXG4kc3RlcC1pY29uLWRlZmF1bHQtY29sb3I6ICRncmF5LWRhcmtlcjtcclxuJHN0ZXAtdGl0bGUtc2l6ZTogICAgICAgICAkZm9udC1zaXplLXNtO1xyXG4kc3RlcC10aXRsZS1jb2xvcjogICAgICAgICRncmF5LWRhcms7XHJcbiRzdGVwLWNvbm5lY3QtaGVpZ2h0OiAgICAgM3B4O1xyXG5cclxuXHJcbi8vID09IFNob3BcclxuLy9cclxuXHJcbi8vIFByb2R1Y3RcclxuJHByb2R1Y3QtdGl0bGUtZm9udC1zaXplOiAgICAgJGZvbnQtc2l6ZS1iYXNlO1xyXG4kcHJvZHVjdC10aXRsZS1jb2xvcjogICAgICAgICAkZ3JheS1kYXJrZXI7XHJcbiRwcm9kdWN0LXRpdGxlLWhvdmVyLWNvbG9yOiAgICRicmFuZC1wcmltYXJ5O1xyXG4kcHJvZHVjdC1wcmljZS1mb250LXNpemU6ICAgICAkZm9udC1zaXplLWJhc2U7XHJcbiRwcm9kdWN0LXByaWNlLWNvbG9yOiAgICAgICAgICRncmF5LWRhcms7XHJcblxyXG4vLyBTaG9wIFZpZXdcclxuJHNob3Atdmlldy1zaXplOiAgICAgICAgICAgIDQzcHg7XHJcbiRzaG9wLXZpZXctY29sb3I6ICAgICAgICAgICAkZ3JheS1kYXJrO1xyXG4kc2hvcC12aWV3LWJnLWNvbG9yOiAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG4kc2hvcC12aWV3LWhvdmVyLWJnLWNvbG9yOiAgJGdyYXktbGlnaHRlcjtcclxuJHNob3Atdmlldy1hY3RpdmUtYmctY29sb3I6ICRicmFuZC1wcmltYXJ5O1xyXG5cclxuLy8gQ2FydFxyXG4kY2FydC10aHVtYi1zaXplOiAgICAgICAgIDExMHB4O1xyXG5cclxuLy8gQWNjb3VudFxyXG4kY292ZXItaGVpZ2h0OiAgICAgICAgICAgIDEyMHB4O1xyXG4kdXNlci1hdmEtc2l6ZTogICAgICAgICAgIDExNXB4O1xyXG5cclxuXHJcbi8vID09IEJsb2dcclxuLy9cclxuXHJcbiRibG9nLXBvc3QtbWV0YS1jb2xvcjogICAgICAkZ3JheS1kYXJrO1xyXG4kYmxvZy1wb3N0LW1ldGEtaWNvbi1jb2xvcjogJGdyYXk7XHJcbiRibG9nLXBvc3QtbWV0YS1mb250LXNpemU6ICAkZm9udC1zaXplLXhzO1xyXG4kYmxvZy1wb3N0LWNvbG9yOiAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yO1xyXG4kYmxvZy1wb3N0LWhvdmVyLWNvbG9yOiAgICAgJGJyYW5kLXByaW1hcnk7XHJcblxyXG5cclxuLy8gPT0gQ29tbWVudHNcclxuLy9cclxuXHJcbiRjb21tZW50LWF1dGhvci1hdmEtc2l6ZTogICA1MHB4O1xyXG4kY29tbWVudC10aXRsZS1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJGNvbW1lbnQtdGl0bGUtd2VpZ2h0OiAgICAgIDUwMDtcclxuXHJcblxyXG4vLz09IFdpZGdldHNcclxuLy9cclxuXHJcbiRzaWRlYmFyLW1heC13aWR0aDogICAgICAgICAgNDAwcHg7XHJcbiRzaWRlYmFyLW9mZmNhbnZhcy13aWR0aDogICAgMzIwcHg7XHJcbiR3aWRnZXQtdGl0bGUtY29sb3I6ICAgICAgICAgJGdyYXk7XHJcbiR3aWRnZXQtdGl0bGUtZm9udC1zaXplOiAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJHdpZGdldC1saW5rLWZvbnQtc2l6ZTogICAgICAkZm9udC1zaXplLXNtO1xyXG4kd2lkZ2V0LW1ldGEtY29sb3I6ICAgICAgICAgICRncmF5O1xyXG4kd2lkZ2V0LW1ldGEtZm9udC1zaXplOiAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgLyAxLjMzKSk7IC8vfjEycHhcclxuJHdpZGdldC1lbnRyeS10aHVtYi1zaXplOiAgICA1MHB4O1xyXG5cclxuLy8gVGFnc1xyXG4kd2lkZ2V0LXRhZ3MtaGVpZ2h0OiAgICAgICAgICAgICAgMjhweDtcclxuJHdpZGdldC10YWdzLWZvbnQtc2l6ZTogICAgICAgICAgICRmb250LXNpemUteHM7XHJcbiR3aWRnZXQtdGFncy1jb2xvcjogICAgICAgICAgICAgICAkbmF2LWxpbmstY29sb3I7XHJcbiR3aWRnZXQtdGFncy1ob3Zlci1iZzogICAgICAgICAgICAkZ3JheS1saWdodGVyO1xyXG4kd2lkZ2V0LXRhZ3MtYWN0aXZlLWJnOiAgICAgICAgICAgJG5hdi1saW5rLWFjdGl2ZS1jb2xvcjtcclxuJHdpZGdldC10YWdzLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRuYXYtbGluay1hY3RpdmUtY29sb3I7XHJcbiR3aWRnZXQtdGFncy1hY3RpdmUtY29sb3I6ICAgICAgICAkd2hpdGUtY29sb3I7XHJcblxyXG5cclxuLy89PSBQYWdpbmF0aW9uXHJcbi8vXHJcblxyXG4kcGFnaW5hdGlvbi1saW5rLXNpemU6ICAgICAgICAgJGJ0bi1zbS1oZWlnaHQ7XHJcbiRwYWdpbmF0aW9uLWxpbmstZm9udC1zaXplOiAgICAkZm9udC1zaXplLXNtO1xyXG4kcGFnaW5hdGlvbi1saW5rLWZvbnQtd2VpZ2h0OiAgNTAwO1xyXG4kcGFnaW5hdGlvbi1saW5rLWNvbG9yOiAgICAgICAgJGdyYXktZGFyaztcclxuJHBhZ2luYXRpb24tbGluay1hY3RpdmUtY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuJHBhZ2luYXRpb24tbGluay1ob3Zlci1iZzogICAgICRncmF5LWxpZ2h0ZXI7XHJcbiRwYWdpbmF0aW9uLWxpbmstYWN0aXZlLWJnOiAgICAkYnJhbmQtcHJpbWFyeTtcclxuXHJcblxyXG4vLz09IFRvb2x0aXBzXHJcbi8vXHJcblxyXG4kdG9vbHRpcC1vcGFjaXR5OiAgICBcdFx0MTtcclxuJHRvb2x0aXAtYmc6IFx0XHRcdFx0IFx0XHRkYXJrZW4oJGdyYXktZGFya2VyLCA0JSk7XHJcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgICR3aGl0ZS1jb2xvcjtcclxuJHRvb2x0aXAtYXJyb3ctY29sb3I6IFx0JHRvb2x0aXAtYmc7XHJcblxyXG5cclxuLy89PSBDYXJvdXNlbFxyXG4vL1xyXG5cclxuJGNhcm91c2VsLW5hdnMtc2l6ZTogXHRcdFx0XHQgICRidG4taGVpZ2h0O1xyXG4kY2Fyb3VzZWwtbmF2cy1pY29uLXNpemU6IFx0ICAxOXB4O1xyXG4kY2Fyb3VzZWwtbmF2cy1iZzogICAgICAgICAgICAkd2hpdGUtY29sb3I7XHJcbiRjYXJvdXNlbC1uYXZzLWNvbG9yOiBcdFx0XHQgICRncmF5LWRhcmtlcjtcclxuJGNhcm91c2VsLWRvdHMtc2l6ZTogXHRcdFx0XHQgIDZweDtcclxuJGNhcm91c2VsLWRvdHMtY29sb3I6IFx0ICBcdCAgJGdyYXktZGFyaztcclxuXHJcbi8vIEhlcm8gU2xpZGVyXHJcbiRoZXJvLXNsaWRlci1taW4taGVpZ2h0OiAgICAgIDU4MHB4O1xyXG5cclxuLy89PSBDb3VudGRvd25cclxuLy9cclxuXHJcbiRjb3VudGRvd24tYm94LXNpemU6ICAgICAgICAgIDQ4cHg7XHJcbiRjb3VudGRvd24tZm9udC1zaXplOiAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjM3NSkpOyAvLyB+MjJweFxyXG4kY291bnRkb3duLWxhYmVsLXNpemU6ICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogLjc1KSk7IC8vIH4xMnB4XHJcblxyXG5cclxuLy89PSBNZWRpYSBxdWVyaWVzIChyZXNwb25zaXZlIGJyZWFja3BvaW50cylcclxuLy8jIyBEZXNja3RvcCwgVGFibGV0LCBNb2JpbGVcclxuXHJcbiRzY3JlZW4teGw6IDEyMDBweDtcclxuJHNjcmVlbi1sZzogOTkxcHg7XHJcbiRzY3JlZW4tbWQ6IDc2OHB4O1xyXG4kc2NyZWVuLXNtOiA1NzZweDtcclxuJHNjcmVlbi14czogMzYwcHg7XHJcblxyXG4kbmF2LWNvbGxhcHNlOiAgICAgMTA3MHB4O1xyXG4iXX0= */"] });


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var ngx_siema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-siema */ 9782);
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/content.component */ 1481);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 3556);
/* harmony import */ var _navigation_off_canvas_navigation_off_canvas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation-off-canvas/navigation-off-canvas.component */ 7647);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-bar/top-bar.component */ 2054);
/* harmony import */ var _content_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/footer/footer.component */ 3007);
/* harmony import */ var _header_navigation_main_navigation_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/navigation-main/navigation-main.component */ 4510);
/* harmony import */ var _header_toolbar_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/toolbar/cart/cart.component */ 3144);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ 1494);
/* harmony import */ var _home_main_slider_main_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/main-slider/main-slider.component */ 39);
/* harmony import */ var _home_product_widget_product_widget_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/product-widget/product-widget.component */ 7832);
/* harmony import */ var _home_promo_promo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/promo/promo.component */ 4204);
/* harmony import */ var _header_search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/search/search.component */ 1719);
/* harmony import */ var _products_shared_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../products/shared/product.service */ 9979);
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../messages/message.service */ 5985);
/* harmony import */ var _cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../cart/shared/cart.service */ 8085);
/* harmony import */ var _pager_pager_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../pager/pager.service */ 8537);
/* harmony import */ var _account_orders_shared_order_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../account/orders/shared/order.service */ 6559);
/* harmony import */ var _checkout_shared_checkout_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../checkout/shared/checkout.service */ 3948);
/* harmony import */ var _account_shared_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../account/shared/auth.service */ 1544);
/* harmony import */ var _shared_offcanvas_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/offcanvas.service */ 9917);
/* harmony import */ var _shared_promo_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/promo.service */ 7757);
/* harmony import */ var _products_shared_ui_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../products/shared/ui.service */ 8806);
/* harmony import */ var _products_shared_products_cache_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../products/shared/products-cache.service */ 9491);
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./module-import-guard */ 7802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 2560);





























class CoreModule {
    constructor(parentModule) {
        (0,_module_import_guard__WEBPACK_IMPORTED_MODULE_25__.throwIfAlreadyLoaded)(parentModule, 'CoreModule');
    }
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵinject"](CoreModule, 12)); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ providers: [
        _products_shared_product_service__WEBPACK_IMPORTED_MODULE_14__.ProductService,
        _products_shared_products_cache_service__WEBPACK_IMPORTED_MODULE_24__.ProductsCacheService,
        _messages_message_service__WEBPACK_IMPORTED_MODULE_15__.MessageService,
        _cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_16__.CartService,
        _pager_pager_service__WEBPACK_IMPORTED_MODULE_17__.PagerService,
        _account_orders_shared_order_service__WEBPACK_IMPORTED_MODULE_18__.OrderService,
        _checkout_shared_checkout_service__WEBPACK_IMPORTED_MODULE_19__.CheckoutService,
        _account_shared_auth_service__WEBPACK_IMPORTED_MODULE_20__.AuthService,
        _shared_offcanvas_service__WEBPACK_IMPORTED_MODULE_21__.OffcanvasService,
        _shared_promo_service__WEBPACK_IMPORTED_MODULE_22__.PromoService,
        _products_shared_ui_service__WEBPACK_IMPORTED_MODULE_23__.UiService
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ngx_siema__WEBPACK_IMPORTED_MODULE_1__.NgxSiemaModule.forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_content_content_component__WEBPACK_IMPORTED_MODULE_2__.ContentComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _navigation_off_canvas_navigation_off_canvas_component__WEBPACK_IMPORTED_MODULE_4__.NavigationOffCanvasComponent,
        _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__.TopBarComponent,
        _content_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent,
        _header_navigation_main_navigation_main_component__WEBPACK_IMPORTED_MODULE_7__.NavigationMainComponent,
        _header_toolbar_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__.ToolbarCartComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_9__.HomeComponent,
        _home_main_slider_main_slider_component__WEBPACK_IMPORTED_MODULE_10__.MainSliderComponent,
        _home_product_widget_product_widget_component__WEBPACK_IMPORTED_MODULE_11__.ProductWidgetComponent,
        _home_promo_promo_component__WEBPACK_IMPORTED_MODULE_12__.PromoComponent,
        _header_search_search_component__WEBPACK_IMPORTED_MODULE_13__.SearchComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ngx_siema__WEBPACK_IMPORTED_MODULE_1__.NgxSiemaModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _navigation_off_canvas_navigation_off_canvas_component__WEBPACK_IMPORTED_MODULE_4__.NavigationOffCanvasComponent,
        _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__.TopBarComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _content_content_component__WEBPACK_IMPORTED_MODULE_2__.ContentComponent] }); })();


/***/ }),

/***/ 3556:
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _account_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../account/shared/auth.service */ 1544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_offcanvas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/offcanvas.service */ 9917);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _navigation_main_navigation_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-main/navigation-main.component */ 4510);
/* harmony import */ var _toolbar_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar/cart/cart.component */ 3144);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search.component */ 1719);








function HeaderComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "a", 14);
} }
function HeaderComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "a", 15);
} }
function HeaderComponent_ul_16_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " (Admin)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 16)(1, "li", 17)(2, "div", 18)(3, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, HeaderComponent_ul_16_span_5_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "li")(7, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li")(10, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Orders List");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li")(14, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_ul_16_Template_a_click_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.onLogOut($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r3.user.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.user.roles.admin);
} }
class HeaderComponent {
    constructor(authService, router, offcanvasService) {
        this.authService = authService;
        this.router = router;
        this.offcanvasService = offcanvasService;
    }
    ngOnInit() {
        this.authSubscription = this.authService.user.subscribe((user) => {
            this.user = user;
        });
    }
    onLogOut(e) {
        this.authService.signOut();
        this.router.navigate(['/register-login']);
        e.preventDefault();
    }
    onMenuToggle(e) {
        this.offcanvasService.openOffcanvasNavigation();
        e.preventDefault();
    }
    ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_account_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_offcanvas_service__WEBPACK_IMPORTED_MODULE_1__.OffcanvasService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 18, vars: 4, consts: [[1, "navbar", "navbar-sticky"], [1, "site-search-wrapper", 3, "showSearch", "onHideSearch"], [1, "site-branding"], [1, "inner"], ["href", "", 1, "offcanvas-toggle", 3, "click"], [1, "toolbar"], [1, "tools"], [1, "search"], [1, "icon-search", 3, "click"], [1, "account"], ["routerLink", "/register-login", 4, "ngIf", "ngIfElse"], ["whenLoggedIn", ""], [1, "icon-head"], ["class", "toolbar-dropdown", 4, "ngIf"], ["routerLink", "/register-login"], ["routerLink", "/account/profile"], [1, "toolbar-dropdown"], [1, "sub-menu-user"], [1, "user-info"], [1, "user-name"], [4, "ngIf"], ["routerLink", "/account/profile", "href", ""], ["routerLink", "/account/orders", "href", ""], [1, "sub-menu-separator"], ["href", "", 3, "click"], [1, "icon-unlock"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 0)(1, "app-search", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onHideSearch", function HeaderComponent_Template_app_search_onHideSearch_1_listener() { return ctx.showSearch = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener($event) { return ctx.onMenuToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-navigation-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5)(7, "div", 3)(8, "div", 6)(9, "div", 7)(10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_i_click_10_listener() { return ctx.showSearch = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, HeaderComponent_a_12_Template, 1, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, HeaderComponent_ng_template_13_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, HeaderComponent_ul_16_Template, 17, 2, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "app-toolbar-cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showSearch", ctx.showSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.user)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.user);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _navigation_main_navigation_main_component__WEBPACK_IMPORTED_MODULE_2__.NavigationMainComponent, _toolbar_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__.ToolbarCartComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_4__.SearchComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4510:
/*!**************************************************************************!*\
  !*** ./src/app/core/header/navigation-main/navigation-main.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationMainComponent": () => (/* binding */ NavigationMainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _account_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../account/shared/auth.service */ 1544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function NavigationMainComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 1)(1, "a", 6)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Add Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
class NavigationMainComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.user.subscribe((user) => {
            this.user = user;
        });
    }
    ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }
}
NavigationMainComponent.ɵfac = function NavigationMainComponent_Factory(t) { return new (t || NavigationMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_account_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
NavigationMainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavigationMainComponent, selectors: [["app-navigation-main"]], decls: 15, vars: 1, consts: [[1, "site-menu"], ["routerLinkActive", "active"], ["routerLink", "/home", "href", ""], ["routerLink", "/products", "href", ""], ["routerLink", "/cart", "href", ""], ["routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/admin/add", "href", ""]], template: function NavigationMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "ul")(2, "li", 1)(3, "a", 2)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 1)(7, "a", 3)(8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 1)(11, "a", 4)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NavigationMainComponent_li_14_Template, 4, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user && ctx.user.roles.admin);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive], styles: [".sub-menu[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 200px;\n  margin-top: -7px !important;\n  padding: 10px 0 !important;\n  border: 1px solid #e1e7ec;\n  border-radius: 5px;\n  background-color: #ffffff;\n  line-height: 1.5;\n  box-shadow: 0 7px 22px -5px rgba(47, 56, 68, 0.2);\n}\n.sub-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n}\n.sub-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 20px !important;\n  transition: color 0.3s;\n  color: #606975;\n  font-size: 14px;\n  font-weight: 500;\n  text-align: left;\n  text-decoration: none;\n}\n.sub-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: -2px;\n  margin-right: 6px;\n  font-size: 0.9em;\n  vertical-align: middle;\n}\n.sub-menu[_ngcontent-%COMP%]    > li.sub-menu-user[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  padding: 4px 17px 6px;\n}\n.sub-menu[_ngcontent-%COMP%]    > li.sub-menu-user[_ngcontent-%COMP%]   .user-ava[_ngcontent-%COMP%], .sub-menu[_ngcontent-%COMP%]    > li.sub-menu-user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.sub-menu[_ngcontent-%COMP%]    > li.sub-menu-user[_ngcontent-%COMP%]   .user-ava[_ngcontent-%COMP%] {\n  width: 44px;\n}\n.sub-menu[_ngcontent-%COMP%]    > li.sub-menu-user[_ngcontent-%COMP%]   .user-ava[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n  width: 44px;\n  padding: 3px;\n  border: 1px solid #e1e7ec;\n  border-radius: 50%;\n}\n.sub-menu[_ngcontent-%COMP%]    > li.sub-menu-user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n.sub-menu[_ngcontent-%COMP%]    > li.sub-menu-user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]    > .user-name[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n  font-size: 14px;\n}\n.sub-menu[_ngcontent-%COMP%]    > li.sub-menu-user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n}\n.sub-menu[_ngcontent-%COMP%]    > li.sub-menu-separator[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 3px;\n  border-top: 1px solid #e1e7ec;\n}\n.sub-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n  color: #0da9ef;\n}\n.sub-menu[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #0da9ef;\n}\n.sub-menu[_ngcontent-%COMP%]    > li.has-children[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding-right: 35px !important;\n}\n.sub-menu[_ngcontent-%COMP%]    > li.has-children[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]::after {\n  display: block;\n  position: absolute;\n  top: 50%;\n  right: 18px;\n  width: 0;\n  height: 0;\n  margin-top: -4px;\n  border-top: 0.3em solid transparent;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.32em solid;\n  content: \"\";\n}\n.sub-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .sub-menu[_ngcontent-%COMP%] {\n  top: -4px;\n  left: 100%;\n  margin-left: -5px;\n}\n.mega-menu[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  margin-top: -1px !important;\n  border: 1px solid #e1e7ec;\n  background-color: #ffffff;\n  box-shadow: 0 7px 22px -5px rgba(47, 56, 68, 0.2);\n  table-layout: fixed;\n}\n.mega-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: table-cell !important;\n  position: relative;\n  padding: 25px !important;\n  border-left: 1px solid #e1e7ec;\n  vertical-align: top;\n}\n.mega-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   .mega-menu-title[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 16px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #e1e7ec;\n  color: #9da9b9;\n  font-weight: 500;\n  text-transform: uppercase;\n  text-align: left;\n}\n.mega-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child {\n  border-left: 0;\n}\n.mega-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%] {\n  display: block !important;\n  position: relative;\n  width: 100%;\n  padding: 0 !important;\n  border: 0;\n  border-radius: 0;\n  background-color: transparent;\n  box-shadow: none;\n}\n.mega-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding: 5px 0 !important;\n}\n@keyframes submenu-show {\n  from {\n    transform: scale(0.85);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes megamenu-show {\n  from {\n    transform: translate3d(0, -9px, 0);\n    opacity: 0;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.site-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  z-index: 1;\n}\n.site-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 0;\n  list-style: none;\n}\n.site-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  transition: color 0.3s;\n  color: #606975;\n  font-size: 14px;\n  font-weight: 500;\n  text-decoration: none;\n}\n.site-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n  color: #0da9ef;\n}\n.site-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #0da9ef;\n}\n.site-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  display: table;\n  height: 100%;\n  min-height: 100%;\n}\n.site-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: table-cell;\n  position: relative;\n  vertical-align: middle;\n}\n.site-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: table;\n  height: 100%;\n  min-height: 100%;\n  border-top: 1px solid transparent;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.site-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.site-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  border-top-color: #0da9ef;\n}\n.site-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > .sub-menu[_ngcontent-%COMP%] {\n  display: block;\n  animation: submenu-show 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.site-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > .mega-menu[_ngcontent-%COMP%] {\n  display: table;\n  animation: megamenu-show 0.45s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.site-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > .mega-menu[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%] {\n  animation: none;\n}\n.site-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.has-megamenu[_ngcontent-%COMP%] {\n  position: static;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFxoZWxwZXJzXFxfcGxhY2Vob2xkZXJzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcaGVscGVyc1xcX3ZhcmlhYmxlcy5zY3NzIiwibmF2aWdhdGlvbi1tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQ2tLMEI7RURqSzFCLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQ2dHb0I7RUQvRnBCLHlCQUFBO0VBQ0EsZ0JDMEV1QjtFRHpFdkIsaURDNEowQjtBQ2hLNUI7QUZNRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBRUpKO0FGS0k7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGNDZm1CO0VEaUJqQixlQ2dDZTtFRC9CZixnQkN5SWtCO0VEdElsQixnQkFBQTtFQUNBLHFCQUFBO0FFTlI7QUZRTTtFQUNFLHFCQUFBO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtFQUVGLGdCQUFBO0VBQ0Esc0JBQUE7QUVSUjtBRldJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRVROO0FGVU07O0VBRUUsbUJBQUE7RUFDQSxzQkFBQTtBRVJSO0FGVU07RUFDRSxXQUFBO0FFUlI7QUZTUTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUVQVjtBRlVNO0VBQ0UsaUJBQUE7QUVSUjtBRlNRO0VBQ0Usa0JBQUE7RUFDQSxlQ1JhO0FDQ3ZCO0FGU1E7RUFBUyxjQUFBO0FFTmpCO0FGU0k7RUFFSSxlQUFBO0VBQ0Esa0JBQUE7RUFFRiw2QkFBQTtBRVROO0FGV0k7RUFBYyxjQzdETTtBQ3FEeEI7QUZTSTtFQUFlLGNDOURLO0FDd0R4QjtBRlFNO0VBQ0UsOEJBQUE7QUVOUjtBRk9RO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBRUxWO0FGU0k7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FFUE47QUZhQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkN0R3VCO0VEdUd2QixpREN1RDBCO0VEdEQxQixtQkFBQTtBRVZGO0FGV0U7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FFVEo7QUZVSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQ3ZIbUI7RUR3SG5CLGdCQUFBO0VBRUUseUJBQUE7RUFDQSxnQkFBQTtBRVRSO0FGWUk7RUFBZ0IsY0FBQTtBRVRwQjtBRldFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUVUSjtBRlVJO0VBQVcseUJBQUE7QUVQZjtBRjZIQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxVQUFBO0VFMUhGO0VGNEhBO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VFMUhGO0FBQ0Y7QUY4SEE7RUFDRTtJQUNFLGtDQUFBO0lBQ0EsVUFBQTtFRTVIRjtFRjhIQTtJQUNFLCtCQUFBO0lBQ0EsVUFBQTtFRTVIRjtBQUNGO0FBOUpBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBZ0tGO0FBOUpFO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQWdLSjtBQTdKTTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNEWmlCO0VDZWYsZURrQ2E7RUNqQ2IsZ0JEMklnQjtFQ3hJbEIscUJBQUE7QUEySlI7QUF6Sk07RUFBYyxjRGJJO0FDeUt4QjtBQTNKTTtFQUFlLGNEZEc7QUM0S3hCO0FBM0pFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQTZKSjtBQTNKSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQTZKTjtBQTNKTTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUE2SlI7QUE1SlE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBOEpWO0FBMUpNO0VBQ0UseUJEekNnQjtBQ3FNeEI7QUFsSkU7RUFDRSxjQUFBO0VBQ0EsbUVBQUE7QUFxSko7QUFsSkU7RUFDRSxjQUFBO0VBQ0EscUVBQUE7QUFvSko7QUFuSkk7RUFDRSxlQUFBO0FBcUpOO0FBOUlBO0VBQW9DLGdCQUFBO0FBa0pwQyIsImZpbGUiOiJuYXZpZ2F0aW9uLW1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xyXG4vLyBQbGFjZWhvbGRlcnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIFN1YiBNZW51XHJcbiVzdWItbWVudSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6ICRzdWItbWVudS13aWR0aDtcclxuICBtYXJnaW4tdG9wOiAtN3B4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTBweCAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XHJcbiAgYm94LXNoYWRvdzogJHN1Yi1tZW51LXNoYWRvdztcclxuXHJcbiAgPiBsaSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgID4gYSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiA1cHggMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3M7XHJcbiAgICAgIGNvbG9yOiAkbmF2LWxpbmstY29sb3I7XHJcbiAgICAgIGZvbnQ6IHtcclxuICAgICAgICBzaXplOiAkbmF2LWxpbmstZm9udC1zaXplO1xyXG4gICAgICAgIHdlaWdodDogJG5hdi1saW5rLWZvbnQtd2VpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIHRleHQ6IHtcclxuICAgICAgICBhbGlnbjogbGVmdDtcclxuICAgICAgICBkZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgID4gaSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYuc3ViLW1lbnUtdXNlciB7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogNHB4IDE3cHggNnB4O1xyXG4gICAgICAudXNlci1hdmEsXHJcbiAgICAgIC51c2VyLWluZm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgfVxyXG4gICAgICAudXNlci1hdmEge1xyXG4gICAgICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgICAgID4gaW1nIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6IDQ0cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAudXNlci1pbmZvIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICA+IC51c2VyLW5hbWUge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xyXG4gICAgICAgIH1cclxuICAgICAgICA+IHNwYW4geyBkaXNwbGF5OiBibG9jazsgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLnN1Yi1tZW51LXNlcGFyYXRvciB7XHJcbiAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgIGJvdHRvbTogM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciA+IGEgeyBjb2xvcjogJG5hdi1saW5rLWhvdmVyLWNvbG9yOyB9XHJcbiAgICAmLmFjdGl2ZSA+IGEgeyBjb2xvcjogJG5hdi1saW5rLWFjdGl2ZS1jb2xvcjsgfVxyXG4gICAgJi5oYXMtY2hpbGRyZW4ge1xyXG4gICAgICA+IGEge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgcmlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAuM2VtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogLjNlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAuMzJlbSBzb2xpZDtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgPiAuc3ViLW1lbnUge1xyXG4gICAgICB0b3A6IC00cHg7XHJcbiAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTWVnYSBNZW51XHJcbiVtZWdhLW1lbnUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IC0xcHggIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICBib3gtc2hhZG93OiAkc3ViLW1lbnUtc2hhZG93O1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgPiBsaSB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgLm1lZ2EtbWVudS10aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDsgLy9+MTJweFxyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICAgICAgY29sb3I6ICRncmF5O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB0ZXh0OiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICY6Zmlyc3QtY2hpbGQgeyBib3JkZXItbGVmdDogMDsgfVxyXG4gIH1cclxuICAuc3ViLW1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgID4gbGkgPiBhIHsgcGFkZGluZzogNXB4IDAgIWltcG9ydGFudDsgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gT2ZmLUNhbnZhcyBNZW51XHJcbiVvZmZjYW52YXMtbWVudSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgICYubWVudSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBjdWJpYy1iZXppZXIoLjg2LCAwLCAuMDcsIDEpO1xyXG4gICAgICAmLm9mZi12aWV3IHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7IH1cclxuICAgICAgJi5pbi12aWV3IHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjNzO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWxpZ2h0LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbiAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgc2l6ZTogJG5hdi1saW5rLWZvbnQtc2l6ZTtcclxuICAgICAgICAgIHdlaWdodDogJG5hdi1saW5rLWZvbnQtd2VpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjA1ZW07XHJcbiAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBkZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHsgY29sb3I6ICRuYXYtbGluay1ob3Zlci1jb2xvcjsgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJhY2stYnRuID4gYSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRncmF5LWRhcmtlciwgMyUpO1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAuMzJlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogLjM3ZW0gc29saWQ7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAuMzJlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgb3BhY2l0eTogLjc1O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hY3RpdmUgYSB7XHJcbiAgICAgICAgY29sb3I6ICRuYXYtbGluay1hY3RpdmUtY29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgJi5oYXMtY2hpbGRyZW4ge1xyXG4gICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgPiBhIHsgcGFkZGluZy1yaWdodDogNjVweDsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmFjdGl2ZSA+IHNwYW4gPiBhIHsgY29sb3I6ICRuYXYtbGluay1hY3RpdmUtY29sb3I7IH1cclxuICAgICAgICAuc3ViLW1lbnUtdG9nZ2xlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMXB4KTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkYm9yZGVyLWxpZ2h0LWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoJHdoaXRlLWNvbG9yLCAuNzUpO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICByaWdodDogMjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogLjM1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IC4zNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogLjRlbSBzb2xpZDtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkd2hpdGUtY29sb3IsIC4xKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgPiAub2ZmY2FudmFzLXN1Ym1lbnUge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IC0xMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBjdWJpYy1iZXppZXIoLjg2LCAwLCAuMDcsIDEpO1xyXG4gICAgICAgICAgJi5pbi12aWV3IHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfVxyXG4gICAgICAgICAgJi5vZmYtdmlldyB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTdWIgTWVudSBBbmltYXRpb25cclxuQGtleWZyYW1lcyBzdWJtZW51LXNob3cge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguODUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNZWdhIE1lbnUgQW5pbWF0aW9uXHJcbkBrZXlmcmFtZXMgbWVnYW1lbnUtc2hvdyB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC05cHgsIDApO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbiIsIi8vXHJcbi8vIFZhcmlhYmxlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy89PSBDb2xvcnNcclxuLy9cclxuLy8jIyBHcmF5IGFuZCBicmFuZCBjb2xvcnMgZm9yIHVzZSBhY3Jvc3MgVGhlbWUuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBHcmF5c2NhbGVcclxuJGdyYXktZGFya2VyOiAgICAgICAgICAgICMzNzQyNTA7XHJcbiRncmF5LWRhcms6ICAgICAgICAgICAgXHQgIzYwNjk3NTtcclxuJGdyYXk6ICAgICAgICAgICAgICAgICAgICM5ZGE5Yjk7XHJcbiRncmF5LWxpZ2h0OiAgICAgICAgICAgICAjZTFlN2VjO1xyXG4kZ3JheS1saWdodGVyOiAgICAgICAgICAgI2Y1ZjVmNTtcclxuJHdoaXRlLWNvbG9yOiAgICAgICAgICAgICNmZmZmZmY7XHJcbiRibGFjay1jb2xvcjogICAgICAgICAgICAjMDAwMDAwO1xyXG5cclxuLy8gQnJhbmQgY29sb3JzXHJcbiRicmFuZC1wcmltYXJ5OiAgICAgICAgICMwZGE5ZWY7XHJcbiRicmFuZC1pbmZvOlx0XHQgICAgICAgICM1MGM2ZTk7XHJcbiRicmFuZC1zdWNjZXNzOiAgICAgICAgICM0M2Q5YTM7XHJcbiRicmFuZC13YXJuaW5nOiAgICAgICAgICNmZmI3NGY7XHJcbiRicmFuZC1kYW5nZXI6ICAgICAgICAgICNmZjUyNTI7XHJcblxyXG4vLyBCb2R5XHJcbiRib2R5LWJnOiBcdFx0XHRcdFx0XHRcdCR3aGl0ZS1jb2xvcjtcclxuJGJvZHktY29sb3I6IFx0XHRcdFx0XHRcdCRncmF5LWRhcms7XHJcblxyXG4vLyBJbmxpbmUgbGlua3NcclxuJGxpbmstY29sb3I6IFx0XHRcdFx0XHRcdCRicmFuZC1wcmltYXJ5O1xyXG4kbGluay1ob3Zlci1jb2xvcjogXHRcdFx0JGJyYW5kLXByaW1hcnk7XHJcblxyXG4vLyBIZWRpbmdzXHJcbiRoZWFkaW5ncy1jb2xvcjpcdCBcdFx0XHQkZ3JheS1kYXJrZXI7XHJcblxyXG4vLyBCbG9ja3F1b3RlXHJcbiRxdW90ZS10ZXh0LWNvbG9yOiAgICAgICRib2R5LWNvbG9yO1xyXG4kcXVvdGUtbWFyay1jb2xvcjogICAgICAkZ3JheTtcclxuJHF1b3RlLWF1dGhvci1jb2xvcjogICAgJGdyYXk7XHJcblxyXG4vLyBCb3JkZXJzXHJcbiRib3JkZXItY29sb3I6ICAgICAgICAgICRncmF5LWxpZ2h0O1xyXG4kYm9yZGVyLWxpZ2h0LWNvbG9yOiAgICByZ2JhKCR3aGl0ZS1jb2xvciwgLjEyKTtcclxuXHJcbi8vIEhpZ2hsaWdodCBjb2xvclxyXG4kaGlnaGxpZ2h0LWNvbG9yOiAgICAgICAjZmZmOGIwO1xyXG5cclxuXHJcbi8vPT0gVHlwb2dyYXBoeVxyXG4vL1xyXG4vLyMjIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kZm9udC1mYW1pbHktYmFzZTogXHRcdFx0ICAnTWF2ZW4gUHJvJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LWhlYWRpbmdzOiBcdCAgaW5oZXJpdDtcclxuXHJcbi8vIEZvbnQgc2l6ZXNcclxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAxNnB4O1xyXG4kZm9udC1zaXplLWxlYWQ6ICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjEyNSkpOyAvLyB+MThweFxyXG4kZm9udC1zaXplLXNtOiBcdFx0XHRcdCAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogLjg3NSkpOyAvLyB+MTRweFxyXG4kZm9udC1zaXplLXhzOiAgICAgICAgIFx0XHRmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogLjgxMjUpKTsgLy8gfjEzcHhcclxuXHJcbi8vIEhlYWRpbmdzXHJcbiRmb250LXNpemUtaDE6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDIuMjUpKTsgLy8gfjM2cHhcclxuJGZvbnQtc2l6ZS1oMjogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS44NzUpKTsgLy8gfjMwcHhcclxuJGZvbnQtc2l6ZS1oMzogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS41KSk7IC8vIH4yNHB4XHJcbiRmb250LXNpemUtaDQ6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuMjUpKTsgLy8gfjIwcHhcclxuJGZvbnQtc2l6ZS1oNTogICAgICAgICAgICAkZm9udC1zaXplLWxlYWQ7IC8vIH4xOHB4XHJcbiRmb250LXNpemUtaDY6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlOyAvLyB+MTZweFxyXG5cclxuLy8gRGlzcGxheSBoZWFkaW5nc1xyXG4kZGlzcGxheS0xOiAgICAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiA0LjUpKTsgLy8gfjcycHhcclxuJGRpc3BsYXktMjogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMy43NSkpOyAvLyB+NjBweFxyXG4kZGlzcGxheS0zOiAgICAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAzLjEyNSkpOyAvLyB+NTBweFxyXG4kZGlzcGxheS00OiAgICAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAyLjUpKTsgLy8gfjQwcHhcclxuXHJcbi8vIEZvbnQgc3R5bGVzXHJcbiRmb250LXN0eWxlLWJhc2U6ICAgICAgICAgbm9ybWFsO1xyXG4kZm9udC1zdHlsZS1oZWFkaW5nczogICAgIG5vcm1hbDtcclxuXHJcbi8vIEZvbnQgd2VpZ2h0c1xyXG4kZm9udC13ZWlnaHQtYmFzZTogICAgICAgICBub3JtYWw7XHJcbiRmb250LXdlaWdodC1oZWFkaW5nczogICAgIDUwMDtcclxuXHJcbi8vIFRleHQgdHJhbnNmb3Jtc1xyXG4kdGV4dC10cmFuc2Zvcm0tYmFzZTogICAgIG5vbmU7XHJcbiR0ZXh0LXRyYW5zZm9ybS1oZWFkaW5nczogbm9uZTtcclxuXHJcbi8vIExpbmUgaGVpZ2h0c1xyXG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgMS41O1xyXG4kbGluZS1oZWlnaHQtaDE6ICAgICAgICAgMS4xNTtcclxuJGxpbmUtaGVpZ2h0LWgyOiAgICAgICAgIDEuMjtcclxuJGxpbmUtaGVpZ2h0LWgzOiAgICAgICAgIDEuMjU7XHJcbiRsaW5lLWhlaWdodC1oNDogICAgICAgICAxLjM7XHJcbiRsaW5lLWhlaWdodC1oNTogICAgICAgICAxLjM1O1xyXG4kbGluZS1oZWlnaHQtaDY6ICAgICAgICAgMS40O1xyXG4kbGluZS1oZWlnaHQtZGlzcGxheTogICAgMS4xNTtcclxuXHJcblxyXG4vLz09IEdyaWQgVmVydGljYWwgU3RlcFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kZ3JpZC12ZXJ0aWNhbC1zdGVwOiAgICAgMjRweDtcclxuXHJcblxyXG4vLz09IEJvcmRlciBSYWRpdXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGJvcmRlci1yYWRpdXMtbGc6IFx0XHQ3cHg7XHJcbiRib3JkZXItcmFkaXVzLWJhc2U6IFx0NXB4O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogXHRcdDNweDtcclxuXHJcblxyXG4vLz09IEZvcm1zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRpbnB1dC1oZWlnaHQtbGc6XHRcdFx0XHRcdFx0XHQ1NHB4O1xyXG4kaW5wdXQtaGVpZ2h0Olx0XHRcdFx0XHRcdFx0XHQ0NHB4O1xyXG4kaW5wdXQtaGVpZ2h0LXNtOlx0XHRcdFx0XHRcdFx0MzZweDtcclxuJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyOiAgICAgJGdyYXk7XHJcblxyXG5cclxuLy89PSBCdXR0b25zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRidG4tZm9udC1zaXplOiBcdFx0XHRcdFx0XHRcdCRmb250LXNpemUtc207XHJcbiRidG4tc20tZm9udC1zaXplOiBcdFx0XHRcdFx0XHQkZm9udC1zaXplLXhzO1xyXG4kYnRuLXRleHQtdHJhbnNmb3JtOiAgICAgICAgICB1cHBlcmNhc2U7XHJcbiRidG4tZm9udC13ZWlnaHQ6IFx0XHRcdFx0XHRcdDUwMDtcclxuJGJ0bi10ZXh0LWNvbG9yOiAgICAgICAgICAgICAgJGdyYXktZGFyaztcclxuXHJcbiRidG4taGVpZ2h0OiBcdFx0XHRcdFx0XHRcdFx0XHQ0NHB4O1xyXG4kYnRuLWxnLWhlaWdodDogXHRcdFx0XHRcdFx0XHQ1NHB4O1xyXG4kYnRuLXNtLWhlaWdodDogXHRcdFx0XHRcdFx0XHQzNnB4O1xyXG5cclxuJGJ0bi1tYXJnaW46ICAgICAgICAgICAgICAgICAgZmxvb3IoJGdyaWQtdmVydGljYWwtc3RlcCAvIDIpOyAvL34xMnB4XHJcbiRzb2NpYWwtYnRuLXNpemU6IFx0XHRcdFx0XHRcdCRmb250LXNpemUteHM7XHJcblxyXG5cclxuLy89PSBUYWJsZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJHRhYmxlLWJvcmRlci1jb2xvcjogXHRcdFx0XHRcdCRib3JkZXItY29sb3I7XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmc6XHRcdFx0XHRcdDE1cHg7XHJcbiR0YWJsZS1iZy1hY2NlbnQ6IFx0XHRcdFx0XHRcdCRncmF5LWxpZ2h0ZXI7XHJcblxyXG5cclxuLy89PSBOYXZiYXIgLyBMb2dvXHJcbi8vXHJcblxyXG4kbmF2YmFyLW1pbi1oZWlnaHQ6IFx0XHRcdDg0cHg7XHJcbiRuYXZiYXItc3R1Y2stc2hhZG93OiAgICAgMCAzcHggMjVweCAwIHJnYmEoZGFya2VuKCRncmF5LWRhcmtlciwgNCUpLCAuMjIpO1xyXG4kbG9nby13aWR0aDogXHRcdFx0XHQgICAgICAxMjlweDtcclxuXHJcbi8vIE5hdmJhciBUb29sc1xyXG4kbmF2YmFyLXRvb2xzLWNvbG9yOiAgICAgICAgICAkZ3JheS1kYXJrO1xyXG4kbmF2YmFyLXRvb2xzLXNpemU6ICAgICAgICAgICAkYnRuLWhlaWdodDtcclxuJG9mZmNhbnZhcy10b2dnbGUtaWNvbi1zaXplOiAgMjBweDtcclxuJHRvb2xzLWljb24tc2l6ZTogICAgICAgICAgICAgMTdweDtcclxuXHJcblxyXG4vLz09IE5hdmlnYXRpb25cclxuLy9cclxuXHJcbiRuYXYtbGluay1mb250LXNpemU6IFx0XHRcdFx0JGZvbnQtc2l6ZS1zbTsgLy8gMTRweFxyXG4kbmF2LWxpbmstZm9udC13ZWlnaHQ6IFx0XHRcdDUwMDtcclxuJG5hdi1saW5rLWNvbG9yOiBcdFx0XHRcdFx0XHQkZ3JheS1kYXJrO1xyXG4kbmF2LWxpbmstaG92ZXItY29sb3I6IFx0XHRcdCRicmFuZC1wcmltYXJ5O1xyXG4kbmF2LWxpbmstYWN0aXZlLWNvbG9yOiBcdFx0JGJyYW5kLXByaW1hcnk7XHJcblxyXG4vLyBTdWIgTWVudSAvIE1lZ2EgTWVudVxyXG4kc3ViLW1lbnUtd2lkdGg6ICAgICAgICAgICAgMjAwcHg7XHJcbiRzdWItbWVudS1zaGFkb3c6ICAgICAgICAgICAwIDdweCAyMnB4IC01cHggcmdiYShkYXJrZW4oJGdyYXktZGFya2VyLCA0JSksIC4yKTtcclxuXHJcbi8vIE9mZi1DYW52YXNcclxuJG9mZmNhbnZhcy13aWR0aDogICAgICAgICAgIDI5MHB4O1xyXG5cclxuXHJcbi8vPT0gVGFic1xyXG4vL1xyXG5cclxuJG5hdi10YWJzLWZvbnQtc2l6ZTpcdFx0XHRcdFx0XHRcdFx0Zmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC44NzUpKTsgLy8gfjE0cHhcclxuJG5hdi10YWJzLWxpbmstY29sb3I6IFx0XHRcdFx0XHRcdFx0JGdyYXk7XHJcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogIFx0XHRcdCRncmF5LWRhcms7XHJcblxyXG5cclxuLy89PSBQcm9ncmVzc1xyXG4vL1xyXG5cclxuJHByb2dyZXNzLWhlaWdodDogICAgIDE4cHg7XHJcbiRwcm9ncmVzcy1iZzogICAgICAgICAkYnJhbmQtcHJpbWFyeTtcclxuXHJcblxyXG4vLz09IFN0ZXBzXHJcbi8vXHJcblxyXG4kc3RlcC1jaXJjbGUtc2l6ZTogICAgICAgIDgwcHg7XHJcbiRzdGVwLWljb24tZGVmYXVsdC1iZzogICAgJGdyYXktbGlnaHRlcjtcclxuJHN0ZXAtaWNvbi1zaXplOiAgICAgICAgICAzOHB4O1xyXG4kc3RlcC1pY29uLWRlZmF1bHQtY29sb3I6ICRncmF5LWRhcmtlcjtcclxuJHN0ZXAtdGl0bGUtc2l6ZTogICAgICAgICAkZm9udC1zaXplLXNtO1xyXG4kc3RlcC10aXRsZS1jb2xvcjogICAgICAgICRncmF5LWRhcms7XHJcbiRzdGVwLWNvbm5lY3QtaGVpZ2h0OiAgICAgM3B4O1xyXG5cclxuXHJcbi8vID09IFNob3BcclxuLy9cclxuXHJcbi8vIFByb2R1Y3RcclxuJHByb2R1Y3QtdGl0bGUtZm9udC1zaXplOiAgICAgJGZvbnQtc2l6ZS1iYXNlO1xyXG4kcHJvZHVjdC10aXRsZS1jb2xvcjogICAgICAgICAkZ3JheS1kYXJrZXI7XHJcbiRwcm9kdWN0LXRpdGxlLWhvdmVyLWNvbG9yOiAgICRicmFuZC1wcmltYXJ5O1xyXG4kcHJvZHVjdC1wcmljZS1mb250LXNpemU6ICAgICAkZm9udC1zaXplLWJhc2U7XHJcbiRwcm9kdWN0LXByaWNlLWNvbG9yOiAgICAgICAgICRncmF5LWRhcms7XHJcblxyXG4vLyBTaG9wIFZpZXdcclxuJHNob3Atdmlldy1zaXplOiAgICAgICAgICAgIDQzcHg7XHJcbiRzaG9wLXZpZXctY29sb3I6ICAgICAgICAgICAkZ3JheS1kYXJrO1xyXG4kc2hvcC12aWV3LWJnLWNvbG9yOiAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG4kc2hvcC12aWV3LWhvdmVyLWJnLWNvbG9yOiAgJGdyYXktbGlnaHRlcjtcclxuJHNob3Atdmlldy1hY3RpdmUtYmctY29sb3I6ICRicmFuZC1wcmltYXJ5O1xyXG5cclxuLy8gQ2FydFxyXG4kY2FydC10aHVtYi1zaXplOiAgICAgICAgIDExMHB4O1xyXG5cclxuLy8gQWNjb3VudFxyXG4kY292ZXItaGVpZ2h0OiAgICAgICAgICAgIDEyMHB4O1xyXG4kdXNlci1hdmEtc2l6ZTogICAgICAgICAgIDExNXB4O1xyXG5cclxuXHJcbi8vID09IEJsb2dcclxuLy9cclxuXHJcbiRibG9nLXBvc3QtbWV0YS1jb2xvcjogICAgICAkZ3JheS1kYXJrO1xyXG4kYmxvZy1wb3N0LW1ldGEtaWNvbi1jb2xvcjogJGdyYXk7XHJcbiRibG9nLXBvc3QtbWV0YS1mb250LXNpemU6ICAkZm9udC1zaXplLXhzO1xyXG4kYmxvZy1wb3N0LWNvbG9yOiAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yO1xyXG4kYmxvZy1wb3N0LWhvdmVyLWNvbG9yOiAgICAgJGJyYW5kLXByaW1hcnk7XHJcblxyXG5cclxuLy8gPT0gQ29tbWVudHNcclxuLy9cclxuXHJcbiRjb21tZW50LWF1dGhvci1hdmEtc2l6ZTogICA1MHB4O1xyXG4kY29tbWVudC10aXRsZS1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJGNvbW1lbnQtdGl0bGUtd2VpZ2h0OiAgICAgIDUwMDtcclxuXHJcblxyXG4vLz09IFdpZGdldHNcclxuLy9cclxuXHJcbiRzaWRlYmFyLW1heC13aWR0aDogICAgICAgICAgNDAwcHg7XHJcbiRzaWRlYmFyLW9mZmNhbnZhcy13aWR0aDogICAgMzIwcHg7XHJcbiR3aWRnZXQtdGl0bGUtY29sb3I6ICAgICAgICAgJGdyYXk7XHJcbiR3aWRnZXQtdGl0bGUtZm9udC1zaXplOiAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJHdpZGdldC1saW5rLWZvbnQtc2l6ZTogICAgICAkZm9udC1zaXplLXNtO1xyXG4kd2lkZ2V0LW1ldGEtY29sb3I6ICAgICAgICAgICRncmF5O1xyXG4kd2lkZ2V0LW1ldGEtZm9udC1zaXplOiAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgLyAxLjMzKSk7IC8vfjEycHhcclxuJHdpZGdldC1lbnRyeS10aHVtYi1zaXplOiAgICA1MHB4O1xyXG5cclxuLy8gVGFnc1xyXG4kd2lkZ2V0LXRhZ3MtaGVpZ2h0OiAgICAgICAgICAgICAgMjhweDtcclxuJHdpZGdldC10YWdzLWZvbnQtc2l6ZTogICAgICAgICAgICRmb250LXNpemUteHM7XHJcbiR3aWRnZXQtdGFncy1jb2xvcjogICAgICAgICAgICAgICAkbmF2LWxpbmstY29sb3I7XHJcbiR3aWRnZXQtdGFncy1ob3Zlci1iZzogICAgICAgICAgICAkZ3JheS1saWdodGVyO1xyXG4kd2lkZ2V0LXRhZ3MtYWN0aXZlLWJnOiAgICAgICAgICAgJG5hdi1saW5rLWFjdGl2ZS1jb2xvcjtcclxuJHdpZGdldC10YWdzLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRuYXYtbGluay1hY3RpdmUtY29sb3I7XHJcbiR3aWRnZXQtdGFncy1hY3RpdmUtY29sb3I6ICAgICAgICAkd2hpdGUtY29sb3I7XHJcblxyXG5cclxuLy89PSBQYWdpbmF0aW9uXHJcbi8vXHJcblxyXG4kcGFnaW5hdGlvbi1saW5rLXNpemU6ICAgICAgICAgJGJ0bi1zbS1oZWlnaHQ7XHJcbiRwYWdpbmF0aW9uLWxpbmstZm9udC1zaXplOiAgICAkZm9udC1zaXplLXNtO1xyXG4kcGFnaW5hdGlvbi1saW5rLWZvbnQtd2VpZ2h0OiAgNTAwO1xyXG4kcGFnaW5hdGlvbi1saW5rLWNvbG9yOiAgICAgICAgJGdyYXktZGFyaztcclxuJHBhZ2luYXRpb24tbGluay1hY3RpdmUtY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuJHBhZ2luYXRpb24tbGluay1ob3Zlci1iZzogICAgICRncmF5LWxpZ2h0ZXI7XHJcbiRwYWdpbmF0aW9uLWxpbmstYWN0aXZlLWJnOiAgICAkYnJhbmQtcHJpbWFyeTtcclxuXHJcblxyXG4vLz09IFRvb2x0aXBzXHJcbi8vXHJcblxyXG4kdG9vbHRpcC1vcGFjaXR5OiAgICBcdFx0MTtcclxuJHRvb2x0aXAtYmc6IFx0XHRcdFx0IFx0XHRkYXJrZW4oJGdyYXktZGFya2VyLCA0JSk7XHJcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgICR3aGl0ZS1jb2xvcjtcclxuJHRvb2x0aXAtYXJyb3ctY29sb3I6IFx0JHRvb2x0aXAtYmc7XHJcblxyXG5cclxuLy89PSBDYXJvdXNlbFxyXG4vL1xyXG5cclxuJGNhcm91c2VsLW5hdnMtc2l6ZTogXHRcdFx0XHQgICRidG4taGVpZ2h0O1xyXG4kY2Fyb3VzZWwtbmF2cy1pY29uLXNpemU6IFx0ICAxOXB4O1xyXG4kY2Fyb3VzZWwtbmF2cy1iZzogICAgICAgICAgICAkd2hpdGUtY29sb3I7XHJcbiRjYXJvdXNlbC1uYXZzLWNvbG9yOiBcdFx0XHQgICRncmF5LWRhcmtlcjtcclxuJGNhcm91c2VsLWRvdHMtc2l6ZTogXHRcdFx0XHQgIDZweDtcclxuJGNhcm91c2VsLWRvdHMtY29sb3I6IFx0ICBcdCAgJGdyYXktZGFyaztcclxuXHJcbi8vIEhlcm8gU2xpZGVyXHJcbiRoZXJvLXNsaWRlci1taW4taGVpZ2h0OiAgICAgIDU4MHB4O1xyXG5cclxuLy89PSBDb3VudGRvd25cclxuLy9cclxuXHJcbiRjb3VudGRvd24tYm94LXNpemU6ICAgICAgICAgIDQ4cHg7XHJcbiRjb3VudGRvd24tZm9udC1zaXplOiAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjM3NSkpOyAvLyB+MjJweFxyXG4kY291bnRkb3duLWxhYmVsLXNpemU6ICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogLjc1KSk7IC8vIH4xMnB4XHJcblxyXG5cclxuLy89PSBNZWRpYSBxdWVyaWVzIChyZXNwb25zaXZlIGJyZWFja3BvaW50cylcclxuLy8jIyBEZXNja3RvcCwgVGFibGV0LCBNb2JpbGVcclxuXHJcbiRzY3JlZW4teGw6IDEyMDBweDtcclxuJHNjcmVlbi1sZzogOTkxcHg7XHJcbiRzY3JlZW4tbWQ6IDc2OHB4O1xyXG4kc2NyZWVuLXNtOiA1NzZweDtcclxuJHNjcmVlbi14czogMzYwcHg7XHJcblxyXG4kbmF2LWNvbGxhcHNlOiAgICAgMTA3MHB4O1xyXG4iLCJAaW1wb3J0ICd+c2Nzcy9oZWxwZXJzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ35zY3NzL2hlbHBlcnMvbWl4aW5zJztcclxuQGltcG9ydCAnfnNjc3MvaGVscGVycy9wbGFjZWhvbGRlcnMnO1xyXG5cclxuLy8gTWFpbiBOYXZpZ2F0aW9uXHJcbi5zaXRlLW1lbnUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDE7XHJcblxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICA+IGxpIHtcclxuXHJcbiAgICAgID4gYSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcztcclxuICAgICAgICBjb2xvcjogJG5hdi1saW5rLWNvbG9yO1xyXG5cclxuICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICBzaXplOiAkbmF2LWxpbmstZm9udC1zaXplO1xyXG4gICAgICAgICAgd2VpZ2h0OiAkbmF2LWxpbmstZm9udC13ZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdH1cclxuICAgICAgJjpob3ZlciA+IGEgeyBjb2xvcjogJG5hdi1saW5rLWhvdmVyLWNvbG9yOyB9XHJcbiAgICAgICYuYWN0aXZlID4gYSB7IGNvbG9yOiAkbmF2LWxpbmstYWN0aXZlLWNvbG9yOyB9XHJcblx0XHR9XHJcblx0fVxyXG4gID4gdWwge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgID4gbGkge1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gICAgICA+IGEge1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjA1ZW07XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICA+IHNwYW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0XHRcdFx0fVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFjdGl2ZSA+IGEge1xyXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6ICRuYXYtbGluay1hY3RpdmUtY29sb3I7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIFN1YiBNZW51XHJcbi5zdWItbWVudSB7IEBleHRlbmQgJXN1Yi1tZW51OyB9XHJcbi5zaXRlLW1lbnUgdWwgPiBsaTpob3ZlciB7XHJcblxyXG4gID4gLnN1Yi1tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYW5pbWF0aW9uOiBzdWJtZW51LXNob3cgLjNzIGN1YmljLWJlemllciguNjgsIC0uNTUsIC4yNjUsIDEuNTUpO1xyXG4gIH1cclxuXHJcbiAgPiAubWVnYS1tZW51IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgYW5pbWF0aW9uOiBtZWdhbWVudS1zaG93IC40NXMgY3ViaWMtYmV6aWVyKC42OCwgLS41NSwgLjI2NSwgMS41NSk7XHJcbiAgICAuc3ViLW1lbnUge1xyXG4gICAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNZWdhIE1lbnVcclxuLm1lZ2EtbWVudSB7IEBleHRlbmQgJW1lZ2EtbWVudTsgfVxyXG4uc2l0ZS1tZW51ID4gdWwgPiBsaS5oYXMtbWVnYW1lbnUgeyBwb3NpdGlvbjogc3RhdGljOyB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ 1719:
/*!********************************************************!*\
  !*** ./src/app/core/header/search/search.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _products_shared_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../products/shared/product.service */ 9979);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);







function SearchComponent_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_ul_6_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onCloseSearch()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", product_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2.name);
} }
function SearchComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_ul_6_li_1_Template, 3, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.products);
} }
const _c0 = function (a0) { return { "search-visible": a0 }; };
class SearchComponent {
    constructor(productService) {
        this.productService = productService;
        this.term$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.onHideSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        this.term$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)((term) => term.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((term) => this.search(term)))
            .subscribe((results) => {
            this.products = results;
        });
    }
    search(term) {
        return this.productService.findProducts(term);
    }
    onSearchInput(event) {
        let term = event.target.value;
        if (term.length > 0) {
            term = term.charAt(0).toUpperCase() + term.slice(1);
            this.term$.next(term);
        }
        else {
            this.products = [];
            this.term$.next('');
        }
    }
    onCloseSearch() {
        this.showSearch = false;
        this.onHideSearch.emit(false);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_products_shared_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService)); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], inputs: { showSearch: "showSearch" }, outputs: { onHideSearch: "onHideSearch" }, decls: 7, vars: 4, consts: [[1, "site-search", 3, "ngClass"], ["type", "text", "placeholder", "Type to search...", 3, "input"], [1, "search-tools"], [1, "close-search"], [1, "icon-cross", 3, "click"], [1, "search-results"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "routerLink", "click"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function SearchComponent_Template_input_input_1_listener($event) { return ctx.onSearchInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "span", 3)(4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_i_click_4_listener() { return ctx.onCloseSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SearchComponent_ul_6_Template, 2, 1, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.showSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.products && ctx.products.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3144:
/*!************************************************************!*\
  !*** ./src/app/core/header/toolbar/cart/cart.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarCartComponent": () => (/* binding */ ToolbarCartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../cart/shared/cart.service */ 8085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_price_price_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/price/price.component */ 6422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





const _c0 = function (a1) { return ["/products", a1]; };
function ToolbarCartComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToolbarCartComponent_div_9_div_1_Template_span_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const item_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.onRemoveItem($event, item_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 21)(6, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-price", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, item_r4.product.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", item_r4.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r4.product.imageURLs[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, item_r4.product.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r4.amount, " x ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", item_r4.product);
} }
function ToolbarCartComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ToolbarCartComponent_div_9_div_1_Template, 12, 11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
function ToolbarCartComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " There are no items in your cart.. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class ToolbarCartComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    ngOnInit() {
        this.items = this.cartService.getItems();
        this.total = this.cartService.getTotal();
        this.cartSubscription = this.cartService.itemsChanged.subscribe((items) => {
            this.items = items;
            this.total = this.cartService.getTotal();
        });
    }
    onRemoveItem(event, item) {
        event.stopPropagation();
        this.cartService.removeItem(item);
    }
    ngOnDestroy() {
        this.cartSubscription.unsubscribe();
    }
}
ToolbarCartComponent.ɵfac = function ToolbarCartComponent_Factory(t) { return new (t || ToolbarCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
ToolbarCartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ToolbarCartComponent, selectors: [["app-toolbar-cart"]], decls: 27, vars: 9, consts: [[1, "cart"], ["routerLink", "/cart"], [1, "icon-bag"], [1, "count"], [1, "subtotal"], [1, "toolbar-dropdown"], [4, "ngIf", "ngIfElse"], ["noItemsInCart", ""], [1, "toolbar-dropdown-group"], [1, "column"], [1, "text-lg"], [1, "column", "text-right"], [1, "text-lg", "text-medium", 3, "innerHTML"], ["routerLink", "/cart", 1, "btn", "btn-sm", "btn-block", "btn-secondary"], ["routerLink", "/checkout", 1, "btn", "btn-sm", "btn-block", "btn-success"], ["class", "dropdown-product-item", 4, "ngFor", "ngForOf"], [1, "dropdown-product-item"], [1, "dropdown-product-remove", 3, "click"], [1, "icon-cross"], [1, "dropdown-product-thumb", 3, "routerLink"], [3, "src", "alt"], [1, "dropdown-product-info"], [1, "dropdown-product-title", 3, "routerLink"], [1, "dropdown-product-details"], [3, "product"]], template: function ToolbarCartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "a", 1)(2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ToolbarCartComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ToolbarCartComponent_ng_template_10_Template, 3, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11)(17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 8)(21, "div", 9)(22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "View Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 9)(25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 5, ctx.total));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.items.length)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 7, ctx.total), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_price_price_component__WEBPACK_IMPORTED_MODULE_1__.PriceComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1494:
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../messages/message.service */ 5985);
/* harmony import */ var _products_shared_products_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../products/shared/products-cache.service */ 9491);
/* harmony import */ var _products_shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../products/shared/product.service */ 9979);
/* harmony import */ var _shared_promo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/promo.service */ 7757);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _main_slider_main_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-slider/main-slider.component */ 39);
/* harmony import */ var _product_widget_product_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-widget/product-widget.component */ 7832);
/* harmony import */ var _promo_promo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promo/promo.component */ 4204);











function HomeComponent_app_promo_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-promo", 13);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("promo", ctx_r0.promos[0]);
} }
class HomeComponent {
    constructor(messageService, productsCache, productService, promoService) {
        this.messageService = messageService;
        this.productsCache = productsCache;
        this.productService = productService;
        this.promoService = promoService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    }
    ngOnInit() {
        this.productService
            .getProducts()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsubscribe$))
            .subscribe((products) => {
            this.products = products;
        });
        this.productService
            .getFeaturedProducts()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsubscribe$))
            .subscribe((products) => {
            this.productsFeatured = products;
        }, (err) => console.error(err));
        this.productService
            .getProductsByDate(3)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsubscribe$))
            .subscribe((products) => {
            this.productsNewArrivals = products;
        }, (err) => console.error(err));
        this.productService
            .getProductsByRating(3)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsubscribe$))
            .subscribe((products) => {
            this.productsBestRated = products;
        }, (err) => console.error(err));
        this.productService
            .getProductsQuery('sale', true, 3)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsubscribe$))
            .subscribe((products) => {
            this.productsOnSale = products;
        }, (err) => console.error(err));
        this.promoService
            .getPromos()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsubscribe$))
            .subscribe((promos) => {
            this.promos = promos;
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_messages_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_products_shared_products_cache_service__WEBPACK_IMPORTED_MODULE_1__.ProductsCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_products_shared_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_promo_service__WEBPACK_IMPORTED_MODULE_3__.PromoService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 36, vars: 8, consts: [[3, "items"], [1, "container", "padding-bottom-2x", "padding-top-3x"], [1, "row"], [1, "col-md-4", "col-sm-6"], [3, "widgetTitle", "products"], [3, "promo", 4, "ngIf"], [1, "container", "padding-top-3x", "padding-bottom-2x"], [1, "col-md-3", "col-sm-6", "text-center", "mb-30"], ["src", "img/services/01.png", "alt", "Shipping", 1, "d-block", "w-90", "img-thumbnail", "rounded-circle", "mx-auto", "mb-3"], [1, "text-muted", "margin-bottom-none"], ["src", "img/services/02.png", "alt", "Money Back", 1, "d-block", "w-90", "img-thumbnail", "rounded-circle", "mx-auto", "mb-3"], ["src", "img/services/03.png", "alt", "Support", 1, "d-block", "w-90", "img-thumbnail", "rounded-circle", "mx-auto", "mb-3"], ["src", "img/services/04.png", "alt", "Payment", 1, "d-block", "w-90", "img-thumbnail", "rounded-circle", "mx-auto", "mb-3"], [3, "promo"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-main-slider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-product-widget", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-product-widget", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-product-widget", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, HomeComponent_app_promo_9_Template, 1, 1, "app-promo", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "section", 6)(11, "div", 2)(12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Free Worldwide Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Free shipping for all orders over $100");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Money Back Guarantee");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "We return money within 30 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "24/7 Customer Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Friendly 24/7 customer support");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Secure Online Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "We posess SSL / Secure Certificate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.productsFeatured);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("widgetTitle", "New Arrivals")("products", ctx.productsNewArrivals);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("widgetTitle", "On Sale")("products", ctx.productsOnSale);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("widgetTitle", "Best Rated")("products", ctx.productsBestRated);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.promos);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _main_slider_main_slider_component__WEBPACK_IMPORTED_MODULE_4__.MainSliderComponent, _product_widget_product_widget_component__WEBPACK_IMPORTED_MODULE_5__.ProductWidgetComponent, _promo_promo_component__WEBPACK_IMPORTED_MODULE_6__.PromoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 39:
/*!****************************************************************!*\
  !*** ./src/app/core/home/main-slider/main-slider.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainSliderComponent": () => (/* binding */ MainSliderComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_siema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-siema */ 9782);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_price_price_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/price/price.component */ 6422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);







const _c0 = function (a0) { return { "loading": a0 }; };
function MainSliderComponent_ngx_siema_1_ngx_siema_slide_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-siema-slide")(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "div", 11)(5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "starting at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-price", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Shop now");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 17)(14, "div", 18)(15, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function MainSliderComponent_ngx_siema_1_ngx_siema_slide_1_Template_img_load_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onImageLoad($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", item_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", item_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, !ctx_r2.imagesLoaded.includes(item_r3.imageFeaturedurl)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", item_r3.imageFeaturedUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx_r2.imagesLoaded.includes(item_r3.imageFeaturedurl));
} }
function MainSliderComponent_ngx_siema_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-siema", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MainSliderComponent_ngx_siema_1_ngx_siema_slide_1_Template, 16, 9, "ngx-siema-slide", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
const _c1 = function (a0) { return { active: a0 }; };
function MainSliderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainSliderComponent_div_5_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const i_r7 = restoredCtx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.goTo(i_r7)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c1, ctx_r1.currentSlide === i_r7));
} }
class MainSliderComponent {
    constructor(ngxSiemaService) {
        this.ngxSiemaService = ngxSiemaService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.options = {
            selector: '.siema',
            duration: 200,
            easing: 'ease-out',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            threshold: 20,
            loop: false,
            onInit: () => {
                // runs immediately after first initialization
            },
            onChange: () => {
                // runs after slide change
            }
        };
    }
    ngOnInit() {
        this.currentSlide = 0;
        this.imagesLoaded = [];
    }
    prev() {
        if (this.currentSlide > 0) {
            this.ngxSiemaService
                .prev(1)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.unsubscribe$))
                .subscribe((data) => {
                this.currentSlide = data.currentSlide;
            });
        }
    }
    next() {
        if (this.currentSlide < this.items.length - 1) {
            this.ngxSiemaService
                .next(1)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.unsubscribe$))
                .subscribe((data) => {
                this.currentSlide = data.currentSlide;
            });
        }
    }
    goTo(index) {
        this.ngxSiemaService
            .goTo(index)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.unsubscribe$))
            .subscribe((data) => {
            this.currentSlide = data.currentSlide;
        });
    }
    onImageLoad(e) {
        this.imagesLoaded.push(e.target.src);
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
MainSliderComponent.ɵfac = function MainSliderComponent_Factory(t) { return new (t || MainSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_siema__WEBPACK_IMPORTED_MODULE_0__.NgxSiemaService)); };
MainSliderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainSliderComponent, selectors: [["app-main-slider"]], inputs: { items: "items" }, decls: 6, vars: 2, consts: [[1, "hero-slider", 2, "background-image", "url(img/main-bg.jpg)"], ["class", "large-controls dots-inside", 3, "options", 4, "ngIf"], ["type", "button", 1, "hero-slider-prev", 3, "click"], ["type", "button", 1, "hero-slider-next", 3, "click"], [1, "hero-slider-dots"], ["class", "hero-slider-dot", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "large-controls", "dots-inside", 3, "options"], [4, "ngFor", "ngForOf"], [1, "container", "padding-top-3x"], [1, "row", "justify-content-center", "align-items-center"], [1, "col-lg-5", "col-md-6", "padding-bottom-2x", "text-md-left", "text-center"], [1, "from-bottom"], [1, "h2", "text-body", "text-normal", "mb-2", "pt-1"], [1, "h2", "text-body", "text-normal", "mb-4", "pb-1"], [1, "text-bold"], [3, "product"], [1, "btn", "btn-primary", "scale-up", "delay-1", 3, "routerLink"], [1, "col-md-6", "padding-bottom-2x", "mb-3"], [1, "image-wrapper", 3, "ngClass"], [1, "d-block", "mx-auto", 3, "hidden", "src", "alt", "load"], [1, "hero-slider-dot", 3, "ngClass", "click"]], template: function MainSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MainSliderComponent_ngx_siema_1_Template, 2, 2, "ngx-siema", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainSliderComponent_Template_button_click_2_listener() { return ctx.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainSliderComponent_Template_button_click_3_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MainSliderComponent_div_5_Template, 2, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.items && ctx.items.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_price_price_component__WEBPACK_IMPORTED_MODULE_1__.PriceComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, ngx_siema__WEBPACK_IMPORTED_MODULE_0__.NgxSiemaComponent, ngx_siema__WEBPACK_IMPORTED_MODULE_0__.NgxSiemaSlideComponent], styles: ["@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.hero-slider[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 580px;\n  background-position: center;\n  background-color: #f5f5f5;\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n}\n@media (max-width: 1100px) {\n  .hero-slider[_ngcontent-%COMP%] {\n    min-height: 430px;\n  }\n}\n.hero-slider[_ngcontent-%COMP%] {\n  position: relative;\n}\n.hero-slider-prev[_ngcontent-%COMP%], .hero-slider-next[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  border: none;\n  background: #ffffff;\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  border: 1px solid #e1e7ec;\n  color: #374250;\n  cursor: pointer;\n  opacity: 0.7;\n}\n.hero-slider-prev[_ngcontent-%COMP%]:hover, .hero-slider-next[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n@media screen and (max-width: 992px) {\n  .hero-slider-prev[_ngcontent-%COMP%], .hero-slider-next[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.hero-slider-prev[_ngcontent-%COMP%] {\n  left: 15px;\n}\n.hero-slider-prev[_ngcontent-%COMP%]::before {\n  font-family: feather;\n  font-size: 19px;\n  color: #374250;\n  content: \"\\e094\";\n}\n.hero-slider-next[_ngcontent-%COMP%] {\n  right: 15px;\n}\n.hero-slider-next[_ngcontent-%COMP%]::before {\n  font-family: feather;\n  font-size: 19px;\n  color: #374250;\n  content: \"\\e095\";\n}\n.hero-slider-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  margin: 0;\n  text-align: center;\n  transform: translateX(-50%);\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  background-color: #606975;\n  display: inline-block;\n  left: 50%;\n  width: auto;\n  padding: 10px 22px 14px;\n}\n.hero-slider-dot[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  margin: 0 6px;\n  transition: opacity 0.25s;\n  border-radius: 50%;\n  background-color: #ffffff;\n  opacity: 0.5;\n}\n.hero-slider-dot.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.image-wrapper.loading[_ngcontent-%COMP%] {\n  min-height: 400px;\n  background: url('loading.gif') center center no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHNjc3NcXGhlbHBlcnNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFO0lBQUssVUFBQTtFQURMO0VBRUE7SUFBTyxVQUFBO0VBQ1A7QUFDRjtBQUVBO0VBQ0UsV0FBQTtFQUNBLGlCQ29TNEI7RURsUzFCLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBRUYsZ0JBQUE7QUFGRjtBQUlFO0VBWEY7SUFZSSxpQkFBQTtFQURGO0FBQ0Y7QUFLQTtFQUNJLGtCQUFBO0FBRko7QUFLQTs7RUFFSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUZKO0FBSUk7O0VBQ0UsVUFBQTtBQUROO0FBSUk7RUFuQko7O0lBb0JNLGFBQUE7RUFBSjtBQUNGO0FBR0E7RUFDSSxVQUFBO0FBQUo7QUFFSTtFQUVJLG9CQUFBO0VBQ0EsZUFBQTtFQUVGLGNBQUE7RUFDQSxnQkFBQTtBQUZOO0FBTUE7RUFDSSxXQUFBO0FBSEo7QUFLSTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUhSO0FBT0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUpKO0FBT0E7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBSko7QUFNSTtFQUNJLFVBQUE7QUFKUjtBQVVFO0VBQ0UsaUJBQUE7RUFDQSxzREFBQTtBQVBKIiwiZmlsZSI6Im1haW4tc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNjc3MvaGVscGVycy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICd+c2Nzcy9oZWxwZXJzL21peGlucyc7XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gIDAlIHsgb3BhY2l0eTogMTsgfVxyXG4gIDEwMCUgeyBvcGFjaXR5OiAwOyB9XHJcbn1cclxuXHJcbi8vIEhlcm8gU2xpZGVyXHJcbi5oZXJvLXNsaWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogJGhlcm8tc2xpZGVyLW1pbi1oZWlnaHQ7XHJcbiAgYmFja2dyb3VuZDoge1xyXG4gICAgcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkZ3JheS1saWdodGVyO1xyXG4gICAgcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBzaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgbWluLWhlaWdodDogJGhlcm8tc2xpZGVyLW1pbi1oZWlnaHQgLSAxNTA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmhlcm8tc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmhlcm8tc2xpZGVyLXByZXYsXHJcbi5oZXJvLXNsaWRlci1uZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTdlYztcclxuICAgIGNvbG9yOiAjMzc0MjUwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZXJvLXNsaWRlci1wcmV2IHtcclxuICAgIGxlZnQ6IDE1cHg7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgZm9udDoge1xyXG4gICAgICAgIGZhbWlseTogZmVhdGhlcjtcclxuICAgICAgICBzaXplOiAxOXB4O1xyXG4gICAgICB9XHJcbiAgICAgIGNvbG9yOiAjMzc0MjUwO1xyXG4gICAgICBjb250ZW50OiAnXFxlMDk0JztcclxuICAgIH1cclxufVxyXG5cclxuLmhlcm8tc2xpZGVyLW5leHQge1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBmb250LWZhbWlseTogZmVhdGhlcjtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgY29sb3I6ICMzNzQyNTA7XHJcbiAgICAgICAgY29udGVudDogJ1xcZTA5NSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZXJvLXNsaWRlci1kb3RzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2OTc1O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIycHggMTRweDtcclxufVxyXG5cclxuLmhlcm8tc2xpZGVyLWRvdCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBtYXJnaW46IDAgNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXIge1xyXG5cclxuICAmLmxvYWRpbmcge1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2ltZy9sb2FkaW5nLmdpZicpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gIH1cclxufVxyXG5cclxuIiwiLy9cclxuLy8gVmFyaWFibGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLz09IENvbG9yc1xyXG4vL1xyXG4vLyMjIEdyYXkgYW5kIGJyYW5kIGNvbG9ycyBmb3IgdXNlIGFjcm9zcyBUaGVtZS5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIEdyYXlzY2FsZVxyXG4kZ3JheS1kYXJrZXI6ICAgICAgICAgICAgIzM3NDI1MDtcclxuJGdyYXktZGFyazogICAgICAgICAgICBcdCAjNjA2OTc1O1xyXG4kZ3JheTogICAgICAgICAgICAgICAgICAgIzlkYTliOTtcclxuJGdyYXktbGlnaHQ6ICAgICAgICAgICAgICNlMWU3ZWM7XHJcbiRncmF5LWxpZ2h0ZXI6ICAgICAgICAgICAjZjVmNWY1O1xyXG4kd2hpdGUtY29sb3I6ICAgICAgICAgICAgI2ZmZmZmZjtcclxuJGJsYWNrLWNvbG9yOiAgICAgICAgICAgICMwMDAwMDA7XHJcblxyXG4vLyBCcmFuZCBjb2xvcnNcclxuJGJyYW5kLXByaW1hcnk6ICAgICAgICAgIzBkYTllZjtcclxuJGJyYW5kLWluZm86XHRcdCAgICAgICAgIzUwYzZlOTtcclxuJGJyYW5kLXN1Y2Nlc3M6ICAgICAgICAgIzQzZDlhMztcclxuJGJyYW5kLXdhcm5pbmc6ICAgICAgICAgI2ZmYjc0ZjtcclxuJGJyYW5kLWRhbmdlcjogICAgICAgICAgI2ZmNTI1MjtcclxuXHJcbi8vIEJvZHlcclxuJGJvZHktYmc6IFx0XHRcdFx0XHRcdFx0JHdoaXRlLWNvbG9yO1xyXG4kYm9keS1jb2xvcjogXHRcdFx0XHRcdFx0JGdyYXktZGFyaztcclxuXHJcbi8vIElubGluZSBsaW5rc1xyXG4kbGluay1jb2xvcjogXHRcdFx0XHRcdFx0JGJyYW5kLXByaW1hcnk7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiBcdFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuXHJcbi8vIEhlZGluZ3NcclxuJGhlYWRpbmdzLWNvbG9yOlx0IFx0XHRcdCRncmF5LWRhcmtlcjtcclxuXHJcbi8vIEJsb2NrcXVvdGVcclxuJHF1b3RlLXRleHQtY29sb3I6ICAgICAgJGJvZHktY29sb3I7XHJcbiRxdW90ZS1tYXJrLWNvbG9yOiAgICAgICRncmF5O1xyXG4kcXVvdGUtYXV0aG9yLWNvbG9yOiAgICAkZ3JheTtcclxuXHJcbi8vIEJvcmRlcnNcclxuJGJvcmRlci1jb2xvcjogICAgICAgICAgJGdyYXktbGlnaHQ7XHJcbiRib3JkZXItbGlnaHQtY29sb3I6ICAgIHJnYmEoJHdoaXRlLWNvbG9yLCAuMTIpO1xyXG5cclxuLy8gSGlnaGxpZ2h0IGNvbG9yXHJcbiRoaWdobGlnaHQtY29sb3I6ICAgICAgICNmZmY4YjA7XHJcblxyXG5cclxuLy89PSBUeXBvZ3JhcGh5XHJcbi8vXHJcbi8vIyMgRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRmb250LWZhbWlseS1iYXNlOiBcdFx0XHQgICdNYXZlbiBQcm8nLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktaGVhZGluZ3M6IFx0ICBpbmhlcml0O1xyXG5cclxuLy8gRm9udCBzaXplc1xyXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgIDE2cHg7XHJcbiRmb250LXNpemUtbGVhZDogICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuMTI1KSk7IC8vIH4xOHB4XHJcbiRmb250LXNpemUtc206IFx0XHRcdFx0ICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuODc1KSk7IC8vIH4xNHB4XHJcbiRmb250LXNpemUteHM6ICAgICAgICAgXHRcdGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuODEyNSkpOyAvLyB+MTNweFxyXG5cclxuLy8gSGVhZGluZ3NcclxuJGZvbnQtc2l6ZS1oMTogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMi4yNSkpOyAvLyB+MzZweFxyXG4kZm9udC1zaXplLWgyOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjg3NSkpOyAvLyB+MzBweFxyXG4kZm9udC1zaXplLWgzOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjUpKTsgLy8gfjI0cHhcclxuJGZvbnQtc2l6ZS1oNDogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkpOyAvLyB+MjBweFxyXG4kZm9udC1zaXplLWg1OiAgICAgICAgICAgICRmb250LXNpemUtbGVhZDsgLy8gfjE4cHhcclxuJGZvbnQtc2l6ZS1oNjogICAgICAgICAgICAkZm9udC1zaXplLWJhc2U7IC8vIH4xNnB4XHJcblxyXG4vLyBEaXNwbGF5IGhlYWRpbmdzXHJcbiRkaXNwbGF5LTE6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDQuNSkpOyAvLyB+NzJweFxyXG4kZGlzcGxheS0yOiAgICAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAzLjc1KSk7IC8vIH42MHB4XHJcbiRkaXNwbGF5LTM6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDMuMTI1KSk7IC8vIH41MHB4XHJcbiRkaXNwbGF5LTQ6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDIuNSkpOyAvLyB+NDBweFxyXG5cclxuLy8gRm9udCBzdHlsZXNcclxuJGZvbnQtc3R5bGUtYmFzZTogICAgICAgICBub3JtYWw7XHJcbiRmb250LXN0eWxlLWhlYWRpbmdzOiAgICAgbm9ybWFsO1xyXG5cclxuLy8gRm9udCB3ZWlnaHRzXHJcbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgIG5vcm1hbDtcclxuJGZvbnQtd2VpZ2h0LWhlYWRpbmdzOiAgICAgNTAwO1xyXG5cclxuLy8gVGV4dCB0cmFuc2Zvcm1zXHJcbiR0ZXh0LXRyYW5zZm9ybS1iYXNlOiAgICAgbm9uZTtcclxuJHRleHQtdHJhbnNmb3JtLWhlYWRpbmdzOiBub25lO1xyXG5cclxuLy8gTGluZSBoZWlnaHRzXHJcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAxLjU7XHJcbiRsaW5lLWhlaWdodC1oMTogICAgICAgICAxLjE1O1xyXG4kbGluZS1oZWlnaHQtaDI6ICAgICAgICAgMS4yO1xyXG4kbGluZS1oZWlnaHQtaDM6ICAgICAgICAgMS4yNTtcclxuJGxpbmUtaGVpZ2h0LWg0OiAgICAgICAgIDEuMztcclxuJGxpbmUtaGVpZ2h0LWg1OiAgICAgICAgIDEuMzU7XHJcbiRsaW5lLWhlaWdodC1oNjogICAgICAgICAxLjQ7XHJcbiRsaW5lLWhlaWdodC1kaXNwbGF5OiAgICAxLjE1O1xyXG5cclxuXHJcbi8vPT0gR3JpZCBWZXJ0aWNhbCBTdGVwXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRncmlkLXZlcnRpY2FsLXN0ZXA6ICAgICAyNHB4O1xyXG5cclxuXHJcbi8vPT0gQm9yZGVyIFJhZGl1c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kYm9yZGVyLXJhZGl1cy1sZzogXHRcdDdweDtcclxuJGJvcmRlci1yYWRpdXMtYmFzZTogXHQ1cHg7XHJcbiRib3JkZXItcmFkaXVzLXNtOiBcdFx0M3B4O1xyXG5cclxuXHJcbi8vPT0gRm9ybXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGlucHV0LWhlaWdodC1sZzpcdFx0XHRcdFx0XHRcdDU0cHg7XHJcbiRpbnB1dC1oZWlnaHQ6XHRcdFx0XHRcdFx0XHRcdDQ0cHg7XHJcbiRpbnB1dC1oZWlnaHQtc206XHRcdFx0XHRcdFx0XHQzNnB4O1xyXG4kaW5wdXQtY29sb3ItcGxhY2Vob2xkZXI6ICAgICAkZ3JheTtcclxuXHJcblxyXG4vLz09IEJ1dHRvbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGJ0bi1mb250LXNpemU6IFx0XHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS1zbTtcclxuJGJ0bi1zbS1mb250LXNpemU6IFx0XHRcdFx0XHRcdCRmb250LXNpemUteHM7XHJcbiRidG4tdGV4dC10cmFuc2Zvcm06ICAgICAgICAgIHVwcGVyY2FzZTtcclxuJGJ0bi1mb250LXdlaWdodDogXHRcdFx0XHRcdFx0NTAwO1xyXG4kYnRuLXRleHQtY29sb3I6ICAgICAgICAgICAgICAkZ3JheS1kYXJrO1xyXG5cclxuJGJ0bi1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0XHRcdDQ0cHg7XHJcbiRidG4tbGctaGVpZ2h0OiBcdFx0XHRcdFx0XHRcdDU0cHg7XHJcbiRidG4tc20taGVpZ2h0OiBcdFx0XHRcdFx0XHRcdDM2cHg7XHJcblxyXG4kYnRuLW1hcmdpbjogICAgICAgICAgICAgICAgICBmbG9vcigkZ3JpZC12ZXJ0aWNhbC1zdGVwIC8gMik7IC8vfjEycHhcclxuJHNvY2lhbC1idG4tc2l6ZTogXHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS14cztcclxuXHJcblxyXG4vLz09IFRhYmxlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kdGFibGUtYm9yZGVyLWNvbG9yOiBcdFx0XHRcdFx0JGJvcmRlci1jb2xvcjtcclxuJHRhYmxlLWNlbGwtcGFkZGluZzpcdFx0XHRcdFx0MTVweDtcclxuJHRhYmxlLWJnLWFjY2VudDogXHRcdFx0XHRcdFx0JGdyYXktbGlnaHRlcjtcclxuXHJcblxyXG4vLz09IE5hdmJhciAvIExvZ29cclxuLy9cclxuXHJcbiRuYXZiYXItbWluLWhlaWdodDogXHRcdFx0ODRweDtcclxuJG5hdmJhci1zdHVjay1zaGFkb3c6ICAgICAwIDNweCAyNXB4IDAgcmdiYShkYXJrZW4oJGdyYXktZGFya2VyLCA0JSksIC4yMik7XHJcbiRsb2dvLXdpZHRoOiBcdFx0XHRcdCAgICAgIDEyOXB4O1xyXG5cclxuLy8gTmF2YmFyIFRvb2xzXHJcbiRuYXZiYXItdG9vbHMtY29sb3I6ICAgICAgICAgICRncmF5LWRhcms7XHJcbiRuYXZiYXItdG9vbHMtc2l6ZTogICAgICAgICAgICRidG4taGVpZ2h0O1xyXG4kb2ZmY2FudmFzLXRvZ2dsZS1pY29uLXNpemU6ICAyMHB4O1xyXG4kdG9vbHMtaWNvbi1zaXplOiAgICAgICAgICAgICAxN3B4O1xyXG5cclxuXHJcbi8vPT0gTmF2aWdhdGlvblxyXG4vL1xyXG5cclxuJG5hdi1saW5rLWZvbnQtc2l6ZTogXHRcdFx0XHQkZm9udC1zaXplLXNtOyAvLyAxNHB4XHJcbiRuYXYtbGluay1mb250LXdlaWdodDogXHRcdFx0NTAwO1xyXG4kbmF2LWxpbmstY29sb3I6IFx0XHRcdFx0XHRcdCRncmF5LWRhcms7XHJcbiRuYXYtbGluay1ob3Zlci1jb2xvcjogXHRcdFx0JGJyYW5kLXByaW1hcnk7XHJcbiRuYXYtbGluay1hY3RpdmUtY29sb3I6IFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuXHJcbi8vIFN1YiBNZW51IC8gTWVnYSBNZW51XHJcbiRzdWItbWVudS13aWR0aDogICAgICAgICAgICAyMDBweDtcclxuJHN1Yi1tZW51LXNoYWRvdzogICAgICAgICAgIDAgN3B4IDIycHggLTVweCByZ2JhKGRhcmtlbigkZ3JheS1kYXJrZXIsIDQlKSwgLjIpO1xyXG5cclxuLy8gT2ZmLUNhbnZhc1xyXG4kb2ZmY2FudmFzLXdpZHRoOiAgICAgICAgICAgMjkwcHg7XHJcblxyXG5cclxuLy89PSBUYWJzXHJcbi8vXHJcblxyXG4kbmF2LXRhYnMtZm9udC1zaXplOlx0XHRcdFx0XHRcdFx0XHRmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogLjg3NSkpOyAvLyB+MTRweFxyXG4kbmF2LXRhYnMtbGluay1jb2xvcjogXHRcdFx0XHRcdFx0XHQkZ3JheTtcclxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAgXHRcdFx0JGdyYXktZGFyaztcclxuXHJcblxyXG4vLz09IFByb2dyZXNzXHJcbi8vXHJcblxyXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgMThweDtcclxuJHByb2dyZXNzLWJnOiAgICAgICAgICRicmFuZC1wcmltYXJ5O1xyXG5cclxuXHJcbi8vPT0gU3RlcHNcclxuLy9cclxuXHJcbiRzdGVwLWNpcmNsZS1zaXplOiAgICAgICAgODBweDtcclxuJHN0ZXAtaWNvbi1kZWZhdWx0LWJnOiAgICAkZ3JheS1saWdodGVyO1xyXG4kc3RlcC1pY29uLXNpemU6ICAgICAgICAgIDM4cHg7XHJcbiRzdGVwLWljb24tZGVmYXVsdC1jb2xvcjogJGdyYXktZGFya2VyO1xyXG4kc3RlcC10aXRsZS1zaXplOiAgICAgICAgICRmb250LXNpemUtc207XHJcbiRzdGVwLXRpdGxlLWNvbG9yOiAgICAgICAgJGdyYXktZGFyaztcclxuJHN0ZXAtY29ubmVjdC1oZWlnaHQ6ICAgICAzcHg7XHJcblxyXG5cclxuLy8gPT0gU2hvcFxyXG4vL1xyXG5cclxuLy8gUHJvZHVjdFxyXG4kcHJvZHVjdC10aXRsZS1mb250LXNpemU6ICAgICAkZm9udC1zaXplLWJhc2U7XHJcbiRwcm9kdWN0LXRpdGxlLWNvbG9yOiAgICAgICAgICRncmF5LWRhcmtlcjtcclxuJHByb2R1Y3QtdGl0bGUtaG92ZXItY29sb3I6ICAgJGJyYW5kLXByaW1hcnk7XHJcbiRwcm9kdWN0LXByaWNlLWZvbnQtc2l6ZTogICAgICRmb250LXNpemUtYmFzZTtcclxuJHByb2R1Y3QtcHJpY2UtY29sb3I6ICAgICAgICAgJGdyYXktZGFyaztcclxuXHJcbi8vIFNob3AgVmlld1xyXG4kc2hvcC12aWV3LXNpemU6ICAgICAgICAgICAgNDNweDtcclxuJHNob3Atdmlldy1jb2xvcjogICAgICAgICAgICRncmF5LWRhcms7XHJcbiRzaG9wLXZpZXctYmctY29sb3I6ICAgICAgICAkd2hpdGUtY29sb3I7XHJcbiRzaG9wLXZpZXctaG92ZXItYmctY29sb3I6ICAkZ3JheS1saWdodGVyO1xyXG4kc2hvcC12aWV3LWFjdGl2ZS1iZy1jb2xvcjogJGJyYW5kLXByaW1hcnk7XHJcblxyXG4vLyBDYXJ0XHJcbiRjYXJ0LXRodW1iLXNpemU6ICAgICAgICAgMTEwcHg7XHJcblxyXG4vLyBBY2NvdW50XHJcbiRjb3Zlci1oZWlnaHQ6ICAgICAgICAgICAgMTIwcHg7XHJcbiR1c2VyLWF2YS1zaXplOiAgICAgICAgICAgMTE1cHg7XHJcblxyXG5cclxuLy8gPT0gQmxvZ1xyXG4vL1xyXG5cclxuJGJsb2ctcG9zdC1tZXRhLWNvbG9yOiAgICAgICRncmF5LWRhcms7XHJcbiRibG9nLXBvc3QtbWV0YS1pY29uLWNvbG9yOiAkZ3JheTtcclxuJGJsb2ctcG9zdC1tZXRhLWZvbnQtc2l6ZTogICRmb250LXNpemUteHM7XHJcbiRibG9nLXBvc3QtY29sb3I6ICAgICAgICAgICAkaGVhZGluZ3MtY29sb3I7XHJcbiRibG9nLXBvc3QtaG92ZXItY29sb3I6ICAgICAkYnJhbmQtcHJpbWFyeTtcclxuXHJcblxyXG4vLyA9PSBDb21tZW50c1xyXG4vL1xyXG5cclxuJGNvbW1lbnQtYXV0aG9yLWF2YS1zaXplOiAgIDUwcHg7XHJcbiRjb21tZW50LXRpdGxlLXNpemU6ICAgICAgICAkZm9udC1zaXplLXNtO1xyXG4kY29tbWVudC10aXRsZS13ZWlnaHQ6ICAgICAgNTAwO1xyXG5cclxuXHJcbi8vPT0gV2lkZ2V0c1xyXG4vL1xyXG5cclxuJHNpZGViYXItbWF4LXdpZHRoOiAgICAgICAgICA0MDBweDtcclxuJHNpZGViYXItb2ZmY2FudmFzLXdpZHRoOiAgICAzMjBweDtcclxuJHdpZGdldC10aXRsZS1jb2xvcjogICAgICAgICAkZ3JheTtcclxuJHdpZGdldC10aXRsZS1mb250LXNpemU6ICAgICAkZm9udC1zaXplLXNtO1xyXG4kd2lkZ2V0LWxpbmstZm9udC1zaXplOiAgICAgICRmb250LXNpemUtc207XHJcbiR3aWRnZXQtbWV0YS1jb2xvcjogICAgICAgICAgJGdyYXk7XHJcbiR3aWRnZXQtbWV0YS1mb250LXNpemU6ICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAvIDEuMzMpKTsgLy9+MTJweFxyXG4kd2lkZ2V0LWVudHJ5LXRodW1iLXNpemU6ICAgIDUwcHg7XHJcblxyXG4vLyBUYWdzXHJcbiR3aWRnZXQtdGFncy1oZWlnaHQ6ICAgICAgICAgICAgICAyOHB4O1xyXG4kd2lkZ2V0LXRhZ3MtZm9udC1zaXplOiAgICAgICAgICAgJGZvbnQtc2l6ZS14cztcclxuJHdpZGdldC10YWdzLWNvbG9yOiAgICAgICAgICAgICAgICRuYXYtbGluay1jb2xvcjtcclxuJHdpZGdldC10YWdzLWhvdmVyLWJnOiAgICAgICAgICAgICRncmF5LWxpZ2h0ZXI7XHJcbiR3aWRnZXQtdGFncy1hY3RpdmUtYmc6ICAgICAgICAgICAkbmF2LWxpbmstYWN0aXZlLWNvbG9yO1xyXG4kd2lkZ2V0LXRhZ3MtYWN0aXZlLWJvcmRlci1jb2xvcjogJG5hdi1saW5rLWFjdGl2ZS1jb2xvcjtcclxuJHdpZGdldC10YWdzLWFjdGl2ZS1jb2xvcjogICAgICAgICR3aGl0ZS1jb2xvcjtcclxuXHJcblxyXG4vLz09IFBhZ2luYXRpb25cclxuLy9cclxuXHJcbiRwYWdpbmF0aW9uLWxpbmstc2l6ZTogICAgICAgICAkYnRuLXNtLWhlaWdodDtcclxuJHBhZ2luYXRpb24tbGluay1mb250LXNpemU6ICAgICRmb250LXNpemUtc207XHJcbiRwYWdpbmF0aW9uLWxpbmstZm9udC13ZWlnaHQ6ICA1MDA7XHJcbiRwYWdpbmF0aW9uLWxpbmstY29sb3I6ICAgICAgICAkZ3JheS1kYXJrO1xyXG4kcGFnaW5hdGlvbi1saW5rLWFjdGl2ZS1jb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4kcGFnaW5hdGlvbi1saW5rLWhvdmVyLWJnOiAgICAgJGdyYXktbGlnaHRlcjtcclxuJHBhZ2luYXRpb24tbGluay1hY3RpdmUtYmc6ICAgICRicmFuZC1wcmltYXJ5O1xyXG5cclxuXHJcbi8vPT0gVG9vbHRpcHNcclxuLy9cclxuXHJcbiR0b29sdGlwLW9wYWNpdHk6ICAgIFx0XHQxO1xyXG4kdG9vbHRpcC1iZzogXHRcdFx0XHQgXHRcdGRhcmtlbigkZ3JheS1kYXJrZXIsIDQlKTtcclxuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogXHQkdG9vbHRpcC1iZztcclxuXHJcblxyXG4vLz09IENhcm91c2VsXHJcbi8vXHJcblxyXG4kY2Fyb3VzZWwtbmF2cy1zaXplOiBcdFx0XHRcdCAgJGJ0bi1oZWlnaHQ7XHJcbiRjYXJvdXNlbC1uYXZzLWljb24tc2l6ZTogXHQgIDE5cHg7XHJcbiRjYXJvdXNlbC1uYXZzLWJnOiAgICAgICAgICAgICR3aGl0ZS1jb2xvcjtcclxuJGNhcm91c2VsLW5hdnMtY29sb3I6IFx0XHRcdCAgJGdyYXktZGFya2VyO1xyXG4kY2Fyb3VzZWwtZG90cy1zaXplOiBcdFx0XHRcdCAgNnB4O1xyXG4kY2Fyb3VzZWwtZG90cy1jb2xvcjogXHQgIFx0ICAkZ3JheS1kYXJrO1xyXG5cclxuLy8gSGVybyBTbGlkZXJcclxuJGhlcm8tc2xpZGVyLW1pbi1oZWlnaHQ6ICAgICAgNTgwcHg7XHJcblxyXG4vLz09IENvdW50ZG93blxyXG4vL1xyXG5cclxuJGNvdW50ZG93bi1ib3gtc2l6ZTogICAgICAgICAgNDhweDtcclxuJGNvdW50ZG93bi1mb250LXNpemU6ICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuMzc1KSk7IC8vIH4yMnB4XHJcbiRjb3VudGRvd24tbGFiZWwtc2l6ZTogICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuNzUpKTsgLy8gfjEycHhcclxuXHJcblxyXG4vLz09IE1lZGlhIHF1ZXJpZXMgKHJlc3BvbnNpdmUgYnJlYWNrcG9pbnRzKVxyXG4vLyMjIERlc2NrdG9wLCBUYWJsZXQsIE1vYmlsZVxyXG5cclxuJHNjcmVlbi14bDogMTIwMHB4O1xyXG4kc2NyZWVuLWxnOiA5OTFweDtcclxuJHNjcmVlbi1tZDogNzY4cHg7XHJcbiRzY3JlZW4tc206IDU3NnB4O1xyXG4kc2NyZWVuLXhzOiAzNjBweDtcclxuXHJcbiRuYXYtY29sbGFwc2U6ICAgICAxMDcwcHg7XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7832:
/*!**********************************************************************!*\
  !*** ./src/app/core/home/product-widget/product-widget.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductWidgetComponent": () => (/* binding */ ProductWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_price_price_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/price/price.component */ 6422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function ProductWidgetComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8)(5, "h4", 9)(6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-price", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", product_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", product_r2.imageURLs[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", product_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", product_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", product_r2);
} }
function ProductWidgetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductWidgetComponent_div_0_div_3_Template, 10, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.widgetTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.products);
} }
class ProductWidgetComponent {
}
ProductWidgetComponent.ɵfac = function ProductWidgetComponent_Factory(t) { return new (t || ProductWidgetComponent)(); };
ProductWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductWidgetComponent, selectors: [["app-product-widget"]], inputs: { products: "products", widgetTitle: "widgetTitle" }, decls: 1, vars: 1, consts: [["class", "widget widget-featured-products", 4, "ngIf"], [1, "widget", "widget-featured-products"], [1, "widget-title"], ["class", "entry", 4, "ngFor", "ngForOf"], [1, "entry"], [1, "entry-thumb"], [3, "routerLink"], [3, "src", "alt"], [1, "entry-content"], [1, "entry-title"], [1, "entry-meta"], [3, "product"]], template: function ProductWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProductWidgetComponent_div_0_Template, 4, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.products);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _shared_price_price_component__WEBPACK_IMPORTED_MODULE_0__.PriceComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXdpZGdldC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4204:
/*!****************************************************!*\
  !*** ./src/app/core/home/promo/promo.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromoComponent": () => (/* binding */ PromoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0) { return { "background-image": a0 }; };
function PromoComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6)(6, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "url(" + ctx_r0.promo.imageUrl + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.promo.preHeading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.promo.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.promo.afterHeading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.promo.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.promo.buttonText);
} }
class PromoComponent {
}
PromoComponent.ɵfac = function PromoComponent_Factory(t) { return new (t || PromoComponent)(); };
PromoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PromoComponent, selectors: [["app-promo"]], inputs: { promo: "promo" }, decls: 1, vars: 1, consts: [["class", "container-fluid", 4, "ngIf"], [1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-xl-10", "col-lg-12"], [1, "fw-section", "rounded", "padding-top-4x", "padding-bottom-4x", 3, "ngStyle"], [1, "overlay", "rounded", 2, "opacity", ".35"], [1, "text-center"], [1, "display-4", "text-normal", "text-white", "text-shadow", "mb-1"], [1, "display-2", "text-bold", "text-white", "text-shadow"], [1, "d-inline-block", "h2", "text-normal", "text-white", "text-shadow", "border-default", "border-left-0", "border-right-0", "mb-4"], [1, "btn", "btn-primary", "margin-bottom-none", 3, "href"]], template: function PromoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PromoComponent_section_0_Template, 15, 8, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.promo);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9tby5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7802:
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwIfAlreadyLoaded": () => (/* binding */ throwIfAlreadyLoaded)
/* harmony export */ });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}


/***/ }),

/***/ 7647:
/*!*******************************************************************************!*\
  !*** ./src/app/core/navigation-off-canvas/navigation-off-canvas.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationOffCanvasComponent": () => (/* binding */ NavigationOffCanvasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_offcanvas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/offcanvas.service */ 9917);
/* harmony import */ var _account_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../account/shared/auth.service */ 1544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function NavigationOffCanvasComponent_a_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " (Admin)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function NavigationOffCanvasComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationOffCanvasComponent_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.onNavigationClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11)(2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Logged in as:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavigationOffCanvasComponent_a_2_span_6_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.user.roles.admin);
  }
}

function NavigationOffCanvasComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 5)(1, "span")(2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationOffCanvasComponent_li_5_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.onNavigationClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Register/Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}

function NavigationOffCanvasComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 5)(1, "span")(2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationOffCanvasComponent_li_6_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.onNavigationClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}

function NavigationOffCanvasComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 5)(1, "span")(2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationOffCanvasComponent_li_7_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.onNavigationClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "My Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}

function NavigationOffCanvasComponent_li_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 5)(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationOffCanvasComponent_li_23_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.onNavigationClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Add Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}

function NavigationOffCanvasComponent_li_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationOffCanvasComponent_li_24_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.onLogout($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}

const _c0 = function (a0) {
  return {
    "active": a0
  };
};

class NavigationOffCanvasComponent {
  constructor(offcanvasService, authService, router) {
    this.offcanvasService = offcanvasService;
    this.authService = authService;
    this.router = router;
  }

  ngOnInit() {
    this.authSubscription = this.authService.user.subscribe(user => {
      this.user = user;
    });
  }

  onLogout(e) {
    this.offcanvasService.closeOffcanvasNavigation();
    this.authService.signOut();
    this.router.navigate(['/register-login']);
    e.preventDefault();
  }

  onNavigationClick() {
    this.offcanvasService.closeOffcanvasNavigation();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}

NavigationOffCanvasComponent.ɵfac = function NavigationOffCanvasComponent_Factory(t) {
  return new (t || NavigationOffCanvasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_offcanvas_service__WEBPACK_IMPORTED_MODULE_0__.OffcanvasService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_account_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};

NavigationOffCanvasComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NavigationOffCanvasComponent,
  selectors: [["app-navigation-off-canvas"]],
  decls: 25,
  vars: 11,
  consts: [["id", "mobile-menu", 1, "offcanvas-container", 3, "ngClass"], ["class", "account-link", "routerLink", "/account/profile", 3, "click", 4, "ngIf"], [1, "offcanvas-menu"], [1, "menu"], ["routerLinkActive", "active", 4, "ngIf"], ["routerLinkActive", "active"], ["routerLink", "/home", 3, "click"], ["routerLink", "/products", 3, "click"], ["routerLink", "/cart", 3, "click"], [4, "ngIf"], ["routerLink", "/account/profile", 1, "account-link", 3, "click"], [1, "user-info"], [1, "text-sm", "text-white", "opacity-60"], [1, "user-name"], ["routerLink", "/register-login", 3, "click"], ["routerLink", "/account/profile", 3, "click"], ["routerLink", "/account/orders", 3, "click"], ["routerLink", "/admin/add", 3, "click"], ["href", "", 3, "click"]],
  template: function NavigationOffCanvasComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationOffCanvasComponent_a_2_Template, 7, 2, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nav", 2)(4, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NavigationOffCanvasComponent_li_5_Template, 5, 0, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavigationOffCanvasComponent_li_6_Template, 5, 0, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NavigationOffCanvasComponent_li_7_Template, 5, 0, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 5)(9, "span")(10, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationOffCanvasComponent_Template_a_click_10_listener() {
        return ctx.onNavigationClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 5)(14, "span")(15, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationOffCanvasComponent_Template_a_click_15_listener() {
        return ctx.onNavigationClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 5)(19, "span")(20, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationOffCanvasComponent_Template_a_click_20_listener() {
        return ctx.onNavigationClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, NavigationOffCanvasComponent_li_23_Template, 4, 0, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, NavigationOffCanvasComponent_li_24_Template, 4, 0, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 7, ctx.offcanvasService.offcanvasNavigationOpen)));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.user);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user && ctx.user.roles.admin);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLW9mZi1jYW52YXMuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 9526:
/*!*********************************************************!*\
  !*** ./src/app/core/page-title/page-title.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTitleComponent": () => (/* binding */ PageTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



function PageTitleComponent_ng_container_10_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", child_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r1.title);
} }
function PageTitleComponent_ng_container_10_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r1.title);
} }
function PageTitleComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PageTitleComponent_ng_container_10_a_4_Template, 2, 2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PageTitleComponent_ng_container_10_ng_template_5_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const child_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r1.link)("ngIfElse", _r3);
} }
class PageTitleComponent {
}
PageTitleComponent.ɵfac = function PageTitleComponent_Factory(t) { return new (t || PageTitleComponent)(); };
PageTitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageTitleComponent, selectors: [["app-page-title"]], inputs: { title: "title", children: "children" }, decls: 11, vars: 2, consts: [[1, "page-title"], [1, "container"], [1, "column"], [1, "breadcrumbs"], ["routerLink", "/home", "href", ""], [4, "ngFor", "ngForOf"], [1, "separator"], [3, "routerLink", 4, "ngIf", "ngIfElse"], ["noLink", ""], [3, "routerLink"]], template: function PageTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "ul", 3)(7, "li")(8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PageTitleComponent_ng_container_10_Template, 7, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.children);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".page-title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 60px;\n  padding: 36px 0;\n  border-bottom: 1px solid #e1e7ec;\n  background-color: #f5f5f5;\n}\n.page-title[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n  display: table;\n}\n.page-title[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.page-title[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:first-child {\n  padding-right: 20px;\n}\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: normal;\n  line-height: 1.25;\n}\n@media (max-width: 576px) {\n  .page-title[_ngcontent-%COMP%] {\n    margin-bottom: 53px;\n  }\n}\n.breadcrumbs[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  text-align: right;\n}\n.breadcrumbs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 5px;\n  padding: 5px 0;\n  color: #9da9b9;\n  font-size: 14px;\n  cursor: default;\n  vertical-align: middle;\n}\n.breadcrumbs[_ngcontent-%COMP%]    > li.separator[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 3px;\n  margin-top: 2px;\n  padding: 0;\n  border-radius: 50%;\n  background-color: #9da9b9;\n}\n.breadcrumbs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  transition: color 0.25s;\n  color: #606975;\n  text-decoration: none;\n}\n.breadcrumbs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #0da9ef;\n}\n@media (max-width: 768px) {\n  .page-title[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .page-title[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    text-align: center;\n  }\n  .page-title[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:first-child {\n    padding-right: 0;\n  }\n  .breadcrumbs[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    text-align: center;\n  }\n  .breadcrumbs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    margin-left: 3px;\n    margin-margin-right: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtdGl0bGUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxzY3NzXFxoZWxwZXJzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkNLdUI7QURSekI7QUFJRTs7RUFDcUIsY0FBQTtBQUR2QjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQUFKO0FBQ0k7RUFBZ0IsbUJBQUE7QUFFcEI7QUFBRTtFQUNFLFNBQUE7RUFFRSxlQzhDb0I7RUQ3Q3BCLG1CQUFBO0VBRUYsaUJDc0VxQjtBRHRFekI7QUFFRTtFQXJCRjtJQXFCbUMsbUJBQUE7RUFFakM7QUFDRjtBQUNBO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVGO0FBREU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNDM0JxQjtFRDRCckIsZUNvQm1CO0VEbkJuQixlQUFBO0VBQ0Esc0JBQUE7QUFHSjtBQUZJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDckNtQjtBRHlDekI7QUFGSTtFQUNFLHVCQUFBO0VBQ0EsY0MxQ21CO0VEMkNuQixxQkFBQTtBQUlOO0FBSE07RUFBVSxjQ3BDUTtBRDBDeEI7QUFBQTtFQUVJOztJQUNxQixjQUFBO0VBR3ZCO0VBRkU7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VBSUo7RUFISTtJQUFnQixnQkFBQTtFQU1wQjtFQUhBO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQUtGO0VBSkU7SUFFSSxnQkFBQTtJQUNBLHdCQUFBO0VBS047QUFDRiIsImZpbGUiOiJwYWdlLXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNjc3MvaGVscGVycy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICd+c2Nzcy9oZWxwZXJzL21peGlucyc7XHJcblxyXG4vLyBQYWdlIFRpdGxlXHJcbi5wYWdlLXRpdGxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiBjZWlsKCRncmlkLXZlcnRpY2FsLXN0ZXAgKiAyLjUpOyAvL342MHB4XHJcbiAgcGFkZGluZzogZmxvb3IoJGdyaWQtdmVydGljYWwtc3RlcCAqIDEuNSkgMDsgLy9+MzZweCAwXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktbGlnaHRlcjtcclxuICA+IC5jb250YWluZXIsXHJcbiAgPiAuY29udGFpbmVyLWZsdWlkIHsgZGlzcGxheTogdGFibGU7IH1cclxuICAuY29sdW1uIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgJjpmaXJzdC1jaGlsZCB7IHBhZGRpbmctcmlnaHQ6IDIwcHg7IH1cclxuICB9XHJcbiAgaDEsIGgyLCBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250OiB7XHJcbiAgICAgIHNpemU6ICRmb250LXNpemUtaDM7XHJcbiAgICAgIHdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1oMztcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tc20pIHsgbWFyZ2luLWJvdHRvbTogY2VpbCgkZ3JpZC12ZXJ0aWNhbC1zdGVwICogMi4yKTsgfVxyXG59XHJcblxyXG4vLyBCcmVhZGNydW1ic1xyXG4uYnJlYWRjcnVtYnMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgPiBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBjb2xvcjogJGdyYXk7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgJi5zZXBhcmF0b3Ige1xyXG4gICAgICB3aWR0aDogM3B4O1xyXG4gICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5OztcclxuICAgIH1cclxuICAgID4gYSB7XHJcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4yNXM7XHJcbiAgICAgIGNvbG9yOiAkbmF2LWxpbmstY29sb3I7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgJjpob3ZlciB7IGNvbG9yOiAkbmF2LWxpbmstaG92ZXItY29sb3I7IH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIE1lZGlhIHF1ZXJ5IChtYXgtd2lkdGg6IDc2OHB4KVxyXG5AbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gIC5wYWdlLXRpdGxlIHtcclxuICAgID4gLmNvbnRhaW5lcixcclxuICAgID4gLmNvbnRhaW5lci1mbHVpZCB7IGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICY6Zmlyc3QtY2hpbGQgeyBwYWRkaW5nLXJpZ2h0OiAwOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5icmVhZGNydW1icyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgID4gbGkge1xyXG4gICAgICBtYXJnaW46IHtcclxuICAgICAgICBsZWZ0OiAzcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy9cclxuLy8gVmFyaWFibGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLz09IENvbG9yc1xyXG4vL1xyXG4vLyMjIEdyYXkgYW5kIGJyYW5kIGNvbG9ycyBmb3IgdXNlIGFjcm9zcyBUaGVtZS5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIEdyYXlzY2FsZVxyXG4kZ3JheS1kYXJrZXI6ICAgICAgICAgICAgIzM3NDI1MDtcclxuJGdyYXktZGFyazogICAgICAgICAgICBcdCAjNjA2OTc1O1xyXG4kZ3JheTogICAgICAgICAgICAgICAgICAgIzlkYTliOTtcclxuJGdyYXktbGlnaHQ6ICAgICAgICAgICAgICNlMWU3ZWM7XHJcbiRncmF5LWxpZ2h0ZXI6ICAgICAgICAgICAjZjVmNWY1O1xyXG4kd2hpdGUtY29sb3I6ICAgICAgICAgICAgI2ZmZmZmZjtcclxuJGJsYWNrLWNvbG9yOiAgICAgICAgICAgICMwMDAwMDA7XHJcblxyXG4vLyBCcmFuZCBjb2xvcnNcclxuJGJyYW5kLXByaW1hcnk6ICAgICAgICAgIzBkYTllZjtcclxuJGJyYW5kLWluZm86XHRcdCAgICAgICAgIzUwYzZlOTtcclxuJGJyYW5kLXN1Y2Nlc3M6ICAgICAgICAgIzQzZDlhMztcclxuJGJyYW5kLXdhcm5pbmc6ICAgICAgICAgI2ZmYjc0ZjtcclxuJGJyYW5kLWRhbmdlcjogICAgICAgICAgI2ZmNTI1MjtcclxuXHJcbi8vIEJvZHlcclxuJGJvZHktYmc6IFx0XHRcdFx0XHRcdFx0JHdoaXRlLWNvbG9yO1xyXG4kYm9keS1jb2xvcjogXHRcdFx0XHRcdFx0JGdyYXktZGFyaztcclxuXHJcbi8vIElubGluZSBsaW5rc1xyXG4kbGluay1jb2xvcjogXHRcdFx0XHRcdFx0JGJyYW5kLXByaW1hcnk7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiBcdFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuXHJcbi8vIEhlZGluZ3NcclxuJGhlYWRpbmdzLWNvbG9yOlx0IFx0XHRcdCRncmF5LWRhcmtlcjtcclxuXHJcbi8vIEJsb2NrcXVvdGVcclxuJHF1b3RlLXRleHQtY29sb3I6ICAgICAgJGJvZHktY29sb3I7XHJcbiRxdW90ZS1tYXJrLWNvbG9yOiAgICAgICRncmF5O1xyXG4kcXVvdGUtYXV0aG9yLWNvbG9yOiAgICAkZ3JheTtcclxuXHJcbi8vIEJvcmRlcnNcclxuJGJvcmRlci1jb2xvcjogICAgICAgICAgJGdyYXktbGlnaHQ7XHJcbiRib3JkZXItbGlnaHQtY29sb3I6ICAgIHJnYmEoJHdoaXRlLWNvbG9yLCAuMTIpO1xyXG5cclxuLy8gSGlnaGxpZ2h0IGNvbG9yXHJcbiRoaWdobGlnaHQtY29sb3I6ICAgICAgICNmZmY4YjA7XHJcblxyXG5cclxuLy89PSBUeXBvZ3JhcGh5XHJcbi8vXHJcbi8vIyMgRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRmb250LWZhbWlseS1iYXNlOiBcdFx0XHQgICdNYXZlbiBQcm8nLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktaGVhZGluZ3M6IFx0ICBpbmhlcml0O1xyXG5cclxuLy8gRm9udCBzaXplc1xyXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgIDE2cHg7XHJcbiRmb250LXNpemUtbGVhZDogICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuMTI1KSk7IC8vIH4xOHB4XHJcbiRmb250LXNpemUtc206IFx0XHRcdFx0ICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuODc1KSk7IC8vIH4xNHB4XHJcbiRmb250LXNpemUteHM6ICAgICAgICAgXHRcdGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuODEyNSkpOyAvLyB+MTNweFxyXG5cclxuLy8gSGVhZGluZ3NcclxuJGZvbnQtc2l6ZS1oMTogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMi4yNSkpOyAvLyB+MzZweFxyXG4kZm9udC1zaXplLWgyOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjg3NSkpOyAvLyB+MzBweFxyXG4kZm9udC1zaXplLWgzOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjUpKTsgLy8gfjI0cHhcclxuJGZvbnQtc2l6ZS1oNDogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkpOyAvLyB+MjBweFxyXG4kZm9udC1zaXplLWg1OiAgICAgICAgICAgICRmb250LXNpemUtbGVhZDsgLy8gfjE4cHhcclxuJGZvbnQtc2l6ZS1oNjogICAgICAgICAgICAkZm9udC1zaXplLWJhc2U7IC8vIH4xNnB4XHJcblxyXG4vLyBEaXNwbGF5IGhlYWRpbmdzXHJcbiRkaXNwbGF5LTE6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDQuNSkpOyAvLyB+NzJweFxyXG4kZGlzcGxheS0yOiAgICAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAzLjc1KSk7IC8vIH42MHB4XHJcbiRkaXNwbGF5LTM6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDMuMTI1KSk7IC8vIH41MHB4XHJcbiRkaXNwbGF5LTQ6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDIuNSkpOyAvLyB+NDBweFxyXG5cclxuLy8gRm9udCBzdHlsZXNcclxuJGZvbnQtc3R5bGUtYmFzZTogICAgICAgICBub3JtYWw7XHJcbiRmb250LXN0eWxlLWhlYWRpbmdzOiAgICAgbm9ybWFsO1xyXG5cclxuLy8gRm9udCB3ZWlnaHRzXHJcbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgIG5vcm1hbDtcclxuJGZvbnQtd2VpZ2h0LWhlYWRpbmdzOiAgICAgNTAwO1xyXG5cclxuLy8gVGV4dCB0cmFuc2Zvcm1zXHJcbiR0ZXh0LXRyYW5zZm9ybS1iYXNlOiAgICAgbm9uZTtcclxuJHRleHQtdHJhbnNmb3JtLWhlYWRpbmdzOiBub25lO1xyXG5cclxuLy8gTGluZSBoZWlnaHRzXHJcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAxLjU7XHJcbiRsaW5lLWhlaWdodC1oMTogICAgICAgICAxLjE1O1xyXG4kbGluZS1oZWlnaHQtaDI6ICAgICAgICAgMS4yO1xyXG4kbGluZS1oZWlnaHQtaDM6ICAgICAgICAgMS4yNTtcclxuJGxpbmUtaGVpZ2h0LWg0OiAgICAgICAgIDEuMztcclxuJGxpbmUtaGVpZ2h0LWg1OiAgICAgICAgIDEuMzU7XHJcbiRsaW5lLWhlaWdodC1oNjogICAgICAgICAxLjQ7XHJcbiRsaW5lLWhlaWdodC1kaXNwbGF5OiAgICAxLjE1O1xyXG5cclxuXHJcbi8vPT0gR3JpZCBWZXJ0aWNhbCBTdGVwXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRncmlkLXZlcnRpY2FsLXN0ZXA6ICAgICAyNHB4O1xyXG5cclxuXHJcbi8vPT0gQm9yZGVyIFJhZGl1c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kYm9yZGVyLXJhZGl1cy1sZzogXHRcdDdweDtcclxuJGJvcmRlci1yYWRpdXMtYmFzZTogXHQ1cHg7XHJcbiRib3JkZXItcmFkaXVzLXNtOiBcdFx0M3B4O1xyXG5cclxuXHJcbi8vPT0gRm9ybXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGlucHV0LWhlaWdodC1sZzpcdFx0XHRcdFx0XHRcdDU0cHg7XHJcbiRpbnB1dC1oZWlnaHQ6XHRcdFx0XHRcdFx0XHRcdDQ0cHg7XHJcbiRpbnB1dC1oZWlnaHQtc206XHRcdFx0XHRcdFx0XHQzNnB4O1xyXG4kaW5wdXQtY29sb3ItcGxhY2Vob2xkZXI6ICAgICAkZ3JheTtcclxuXHJcblxyXG4vLz09IEJ1dHRvbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGJ0bi1mb250LXNpemU6IFx0XHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS1zbTtcclxuJGJ0bi1zbS1mb250LXNpemU6IFx0XHRcdFx0XHRcdCRmb250LXNpemUteHM7XHJcbiRidG4tdGV4dC10cmFuc2Zvcm06ICAgICAgICAgIHVwcGVyY2FzZTtcclxuJGJ0bi1mb250LXdlaWdodDogXHRcdFx0XHRcdFx0NTAwO1xyXG4kYnRuLXRleHQtY29sb3I6ICAgICAgICAgICAgICAkZ3JheS1kYXJrO1xyXG5cclxuJGJ0bi1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0XHRcdDQ0cHg7XHJcbiRidG4tbGctaGVpZ2h0OiBcdFx0XHRcdFx0XHRcdDU0cHg7XHJcbiRidG4tc20taGVpZ2h0OiBcdFx0XHRcdFx0XHRcdDM2cHg7XHJcblxyXG4kYnRuLW1hcmdpbjogICAgICAgICAgICAgICAgICBmbG9vcigkZ3JpZC12ZXJ0aWNhbC1zdGVwIC8gMik7IC8vfjEycHhcclxuJHNvY2lhbC1idG4tc2l6ZTogXHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS14cztcclxuXHJcblxyXG4vLz09IFRhYmxlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kdGFibGUtYm9yZGVyLWNvbG9yOiBcdFx0XHRcdFx0JGJvcmRlci1jb2xvcjtcclxuJHRhYmxlLWNlbGwtcGFkZGluZzpcdFx0XHRcdFx0MTVweDtcclxuJHRhYmxlLWJnLWFjY2VudDogXHRcdFx0XHRcdFx0JGdyYXktbGlnaHRlcjtcclxuXHJcblxyXG4vLz09IE5hdmJhciAvIExvZ29cclxuLy9cclxuXHJcbiRuYXZiYXItbWluLWhlaWdodDogXHRcdFx0ODRweDtcclxuJG5hdmJhci1zdHVjay1zaGFkb3c6ICAgICAwIDNweCAyNXB4IDAgcmdiYShkYXJrZW4oJGdyYXktZGFya2VyLCA0JSksIC4yMik7XHJcbiRsb2dvLXdpZHRoOiBcdFx0XHRcdCAgICAgIDEyOXB4O1xyXG5cclxuLy8gTmF2YmFyIFRvb2xzXHJcbiRuYXZiYXItdG9vbHMtY29sb3I6ICAgICAgICAgICRncmF5LWRhcms7XHJcbiRuYXZiYXItdG9vbHMtc2l6ZTogICAgICAgICAgICRidG4taGVpZ2h0O1xyXG4kb2ZmY2FudmFzLXRvZ2dsZS1pY29uLXNpemU6ICAyMHB4O1xyXG4kdG9vbHMtaWNvbi1zaXplOiAgICAgICAgICAgICAxN3B4O1xyXG5cclxuXHJcbi8vPT0gTmF2aWdhdGlvblxyXG4vL1xyXG5cclxuJG5hdi1saW5rLWZvbnQtc2l6ZTogXHRcdFx0XHQkZm9udC1zaXplLXNtOyAvLyAxNHB4XHJcbiRuYXYtbGluay1mb250LXdlaWdodDogXHRcdFx0NTAwO1xyXG4kbmF2LWxpbmstY29sb3I6IFx0XHRcdFx0XHRcdCRncmF5LWRhcms7XHJcbiRuYXYtbGluay1ob3Zlci1jb2xvcjogXHRcdFx0JGJyYW5kLXByaW1hcnk7XHJcbiRuYXYtbGluay1hY3RpdmUtY29sb3I6IFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuXHJcbi8vIFN1YiBNZW51IC8gTWVnYSBNZW51XHJcbiRzdWItbWVudS13aWR0aDogICAgICAgICAgICAyMDBweDtcclxuJHN1Yi1tZW51LXNoYWRvdzogICAgICAgICAgIDAgN3B4IDIycHggLTVweCByZ2JhKGRhcmtlbigkZ3JheS1kYXJrZXIsIDQlKSwgLjIpO1xyXG5cclxuLy8gT2ZmLUNhbnZhc1xyXG4kb2ZmY2FudmFzLXdpZHRoOiAgICAgICAgICAgMjkwcHg7XHJcblxyXG5cclxuLy89PSBUYWJzXHJcbi8vXHJcblxyXG4kbmF2LXRhYnMtZm9udC1zaXplOlx0XHRcdFx0XHRcdFx0XHRmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogLjg3NSkpOyAvLyB+MTRweFxyXG4kbmF2LXRhYnMtbGluay1jb2xvcjogXHRcdFx0XHRcdFx0XHQkZ3JheTtcclxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAgXHRcdFx0JGdyYXktZGFyaztcclxuXHJcblxyXG4vLz09IFByb2dyZXNzXHJcbi8vXHJcblxyXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgMThweDtcclxuJHByb2dyZXNzLWJnOiAgICAgICAgICRicmFuZC1wcmltYXJ5O1xyXG5cclxuXHJcbi8vPT0gU3RlcHNcclxuLy9cclxuXHJcbiRzdGVwLWNpcmNsZS1zaXplOiAgICAgICAgODBweDtcclxuJHN0ZXAtaWNvbi1kZWZhdWx0LWJnOiAgICAkZ3JheS1saWdodGVyO1xyXG4kc3RlcC1pY29uLXNpemU6ICAgICAgICAgIDM4cHg7XHJcbiRzdGVwLWljb24tZGVmYXVsdC1jb2xvcjogJGdyYXktZGFya2VyO1xyXG4kc3RlcC10aXRsZS1zaXplOiAgICAgICAgICRmb250LXNpemUtc207XHJcbiRzdGVwLXRpdGxlLWNvbG9yOiAgICAgICAgJGdyYXktZGFyaztcclxuJHN0ZXAtY29ubmVjdC1oZWlnaHQ6ICAgICAzcHg7XHJcblxyXG5cclxuLy8gPT0gU2hvcFxyXG4vL1xyXG5cclxuLy8gUHJvZHVjdFxyXG4kcHJvZHVjdC10aXRsZS1mb250LXNpemU6ICAgICAkZm9udC1zaXplLWJhc2U7XHJcbiRwcm9kdWN0LXRpdGxlLWNvbG9yOiAgICAgICAgICRncmF5LWRhcmtlcjtcclxuJHByb2R1Y3QtdGl0bGUtaG92ZXItY29sb3I6ICAgJGJyYW5kLXByaW1hcnk7XHJcbiRwcm9kdWN0LXByaWNlLWZvbnQtc2l6ZTogICAgICRmb250LXNpemUtYmFzZTtcclxuJHByb2R1Y3QtcHJpY2UtY29sb3I6ICAgICAgICAgJGdyYXktZGFyaztcclxuXHJcbi8vIFNob3AgVmlld1xyXG4kc2hvcC12aWV3LXNpemU6ICAgICAgICAgICAgNDNweDtcclxuJHNob3Atdmlldy1jb2xvcjogICAgICAgICAgICRncmF5LWRhcms7XHJcbiRzaG9wLXZpZXctYmctY29sb3I6ICAgICAgICAkd2hpdGUtY29sb3I7XHJcbiRzaG9wLXZpZXctaG92ZXItYmctY29sb3I6ICAkZ3JheS1saWdodGVyO1xyXG4kc2hvcC12aWV3LWFjdGl2ZS1iZy1jb2xvcjogJGJyYW5kLXByaW1hcnk7XHJcblxyXG4vLyBDYXJ0XHJcbiRjYXJ0LXRodW1iLXNpemU6ICAgICAgICAgMTEwcHg7XHJcblxyXG4vLyBBY2NvdW50XHJcbiRjb3Zlci1oZWlnaHQ6ICAgICAgICAgICAgMTIwcHg7XHJcbiR1c2VyLWF2YS1zaXplOiAgICAgICAgICAgMTE1cHg7XHJcblxyXG5cclxuLy8gPT0gQmxvZ1xyXG4vL1xyXG5cclxuJGJsb2ctcG9zdC1tZXRhLWNvbG9yOiAgICAgICRncmF5LWRhcms7XHJcbiRibG9nLXBvc3QtbWV0YS1pY29uLWNvbG9yOiAkZ3JheTtcclxuJGJsb2ctcG9zdC1tZXRhLWZvbnQtc2l6ZTogICRmb250LXNpemUteHM7XHJcbiRibG9nLXBvc3QtY29sb3I6ICAgICAgICAgICAkaGVhZGluZ3MtY29sb3I7XHJcbiRibG9nLXBvc3QtaG92ZXItY29sb3I6ICAgICAkYnJhbmQtcHJpbWFyeTtcclxuXHJcblxyXG4vLyA9PSBDb21tZW50c1xyXG4vL1xyXG5cclxuJGNvbW1lbnQtYXV0aG9yLWF2YS1zaXplOiAgIDUwcHg7XHJcbiRjb21tZW50LXRpdGxlLXNpemU6ICAgICAgICAkZm9udC1zaXplLXNtO1xyXG4kY29tbWVudC10aXRsZS13ZWlnaHQ6ICAgICAgNTAwO1xyXG5cclxuXHJcbi8vPT0gV2lkZ2V0c1xyXG4vL1xyXG5cclxuJHNpZGViYXItbWF4LXdpZHRoOiAgICAgICAgICA0MDBweDtcclxuJHNpZGViYXItb2ZmY2FudmFzLXdpZHRoOiAgICAzMjBweDtcclxuJHdpZGdldC10aXRsZS1jb2xvcjogICAgICAgICAkZ3JheTtcclxuJHdpZGdldC10aXRsZS1mb250LXNpemU6ICAgICAkZm9udC1zaXplLXNtO1xyXG4kd2lkZ2V0LWxpbmstZm9udC1zaXplOiAgICAgICRmb250LXNpemUtc207XHJcbiR3aWRnZXQtbWV0YS1jb2xvcjogICAgICAgICAgJGdyYXk7XHJcbiR3aWRnZXQtbWV0YS1mb250LXNpemU6ICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAvIDEuMzMpKTsgLy9+MTJweFxyXG4kd2lkZ2V0LWVudHJ5LXRodW1iLXNpemU6ICAgIDUwcHg7XHJcblxyXG4vLyBUYWdzXHJcbiR3aWRnZXQtdGFncy1oZWlnaHQ6ICAgICAgICAgICAgICAyOHB4O1xyXG4kd2lkZ2V0LXRhZ3MtZm9udC1zaXplOiAgICAgICAgICAgJGZvbnQtc2l6ZS14cztcclxuJHdpZGdldC10YWdzLWNvbG9yOiAgICAgICAgICAgICAgICRuYXYtbGluay1jb2xvcjtcclxuJHdpZGdldC10YWdzLWhvdmVyLWJnOiAgICAgICAgICAgICRncmF5LWxpZ2h0ZXI7XHJcbiR3aWRnZXQtdGFncy1hY3RpdmUtYmc6ICAgICAgICAgICAkbmF2LWxpbmstYWN0aXZlLWNvbG9yO1xyXG4kd2lkZ2V0LXRhZ3MtYWN0aXZlLWJvcmRlci1jb2xvcjogJG5hdi1saW5rLWFjdGl2ZS1jb2xvcjtcclxuJHdpZGdldC10YWdzLWFjdGl2ZS1jb2xvcjogICAgICAgICR3aGl0ZS1jb2xvcjtcclxuXHJcblxyXG4vLz09IFBhZ2luYXRpb25cclxuLy9cclxuXHJcbiRwYWdpbmF0aW9uLWxpbmstc2l6ZTogICAgICAgICAkYnRuLXNtLWhlaWdodDtcclxuJHBhZ2luYXRpb24tbGluay1mb250LXNpemU6ICAgICRmb250LXNpemUtc207XHJcbiRwYWdpbmF0aW9uLWxpbmstZm9udC13ZWlnaHQ6ICA1MDA7XHJcbiRwYWdpbmF0aW9uLWxpbmstY29sb3I6ICAgICAgICAkZ3JheS1kYXJrO1xyXG4kcGFnaW5hdGlvbi1saW5rLWFjdGl2ZS1jb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4kcGFnaW5hdGlvbi1saW5rLWhvdmVyLWJnOiAgICAgJGdyYXktbGlnaHRlcjtcclxuJHBhZ2luYXRpb24tbGluay1hY3RpdmUtYmc6ICAgICRicmFuZC1wcmltYXJ5O1xyXG5cclxuXHJcbi8vPT0gVG9vbHRpcHNcclxuLy9cclxuXHJcbiR0b29sdGlwLW9wYWNpdHk6ICAgIFx0XHQxO1xyXG4kdG9vbHRpcC1iZzogXHRcdFx0XHQgXHRcdGRhcmtlbigkZ3JheS1kYXJrZXIsIDQlKTtcclxuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogXHQkdG9vbHRpcC1iZztcclxuXHJcblxyXG4vLz09IENhcm91c2VsXHJcbi8vXHJcblxyXG4kY2Fyb3VzZWwtbmF2cy1zaXplOiBcdFx0XHRcdCAgJGJ0bi1oZWlnaHQ7XHJcbiRjYXJvdXNlbC1uYXZzLWljb24tc2l6ZTogXHQgIDE5cHg7XHJcbiRjYXJvdXNlbC1uYXZzLWJnOiAgICAgICAgICAgICR3aGl0ZS1jb2xvcjtcclxuJGNhcm91c2VsLW5hdnMtY29sb3I6IFx0XHRcdCAgJGdyYXktZGFya2VyO1xyXG4kY2Fyb3VzZWwtZG90cy1zaXplOiBcdFx0XHRcdCAgNnB4O1xyXG4kY2Fyb3VzZWwtZG90cy1jb2xvcjogXHQgIFx0ICAkZ3JheS1kYXJrO1xyXG5cclxuLy8gSGVybyBTbGlkZXJcclxuJGhlcm8tc2xpZGVyLW1pbi1oZWlnaHQ6ICAgICAgNTgwcHg7XHJcblxyXG4vLz09IENvdW50ZG93blxyXG4vL1xyXG5cclxuJGNvdW50ZG93bi1ib3gtc2l6ZTogICAgICAgICAgNDhweDtcclxuJGNvdW50ZG93bi1mb250LXNpemU6ICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuMzc1KSk7IC8vIH4yMnB4XHJcbiRjb3VudGRvd24tbGFiZWwtc2l6ZTogICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuNzUpKTsgLy8gfjEycHhcclxuXHJcblxyXG4vLz09IE1lZGlhIHF1ZXJpZXMgKHJlc3BvbnNpdmUgYnJlYWNrcG9pbnRzKVxyXG4vLyMjIERlc2NrdG9wLCBUYWJsZXQsIE1vYmlsZVxyXG5cclxuJHNjcmVlbi14bDogMTIwMHB4O1xyXG4kc2NyZWVuLWxnOiA5OTFweDtcclxuJHNjcmVlbi1tZDogNzY4cHg7XHJcbiRzY3JlZW4tc206IDU3NnB4O1xyXG4kc2NyZWVuLXhzOiAzNjBweDtcclxuXHJcbiRuYXYtY29sbGFwc2U6ICAgICAxMDcwcHg7XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9917:
/*!**************************************************!*\
  !*** ./src/app/core/shared/offcanvas.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffcanvasService": () => (/* binding */ OffcanvasService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class OffcanvasService {
    constructor() {
        this.offcanvasNavigationOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
    toggleOffcanvasNavigation() {
        const state = !this.offcanvasNavigationOpen.getValue();
        this.offcanvasNavigationOpen.next(state);
    }
    openOffcanvasNavigation() {
        this.offcanvasNavigationOpen.next(true);
    }
    closeOffcanvasNavigation() {
        this.offcanvasNavigationOpen.next(false);
    }
}
OffcanvasService.ɵfac = function OffcanvasService_Factory(t) { return new (t || OffcanvasService)(); };
OffcanvasService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OffcanvasService, factory: OffcanvasService.ɵfac });


/***/ }),

/***/ 7757:
/*!**********************************************!*\
  !*** ./src/app/core/shared/promo.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromoService": () => (/* binding */ PromoService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/database */ 2575);


class PromoService {
    constructor(angularFireDatabase) {
        this.angularFireDatabase = angularFireDatabase;
    }
    getPromos() {
        return this.angularFireDatabase.list('promos').valueChanges();
    }
}
PromoService.ɵfac = function PromoService_Factory(t) { return new (t || PromoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase)); };
PromoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PromoService, factory: PromoService.ɵfac });


/***/ }),

/***/ 2054:
/*!***************************************************!*\
  !*** ./src/app/core/top-bar/top-bar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopBarComponent": () => (/* binding */ TopBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TopBarComponent {
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(); };
TopBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["app-top-bar"]], decls: 16, vars: 0, consts: [[1, "topbar"], [1, "topbar-column"], ["href", "mailto:info@andre-abt.com", 1, "hidden-md-down"], [1, "icon-mail"], ["href", "tel:+41792414544", 1, "hidden-md-down"], [1, "icon-bell"], ["href", "#", "target", "_blank", 1, "social-button", "sb-facebook", "shape-none", "sb-dark"], [1, "socicon-facebook"], ["href", "#", "target", "_blank", 1, "social-button", "sb-twitter", "shape-none", "sb-dark"], [1, "socicon-twitter"], ["href", "#", "target", "_blank", 1, "social-button", "sb-instagram", "shape-none", "sb-dark"], [1, "socicon-instagram"], ["href", "#", "target", "_blank", 1, "social-button", "sb-pinterest", "shape-none", "sb-dark"], [1, "socicon-pinterest"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0 info@andre-abt.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0 +41 79 241 45 44");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".topbar[_ngcontent-%COMP%] {\n  display: table;\n  position: relative;\n  width: 100%;\n  height: 40px;\n  padding: 0 30px;\n  border-bottom: 1px solid #e1e7ec;\n  background-color: #f5f5f5;\n  z-index: 9010;\n}\n.topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 50%;\n  vertical-align: middle;\n}\n.topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n.topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n.topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.social-button), .topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #606975;\n  font-size: 13px;\n}\n.topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.social-button), .topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.social-button)    > i[_ngcontent-%COMP%], .topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], .topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin-top: -3px;\n}\n.topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.social-button)    > i.icon-download[_ngcontent-%COMP%], .topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > i.icon-download[_ngcontent-%COMP%], .topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]    > i.icon-download[_ngcontent-%COMP%] {\n  margin-top: -4px;\n}\n.topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.social-button) {\n  transition: color 0.3s;\n  text-decoration: none;\n}\n.topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.social-button):hover {\n  color: #0da9ef;\n}\n.topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]:last-child    > a[_ngcontent-%COMP%]:not(.social-button), .topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]:last-child    > span[_ngcontent-%COMP%], .topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]:last-child    > p[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]:first-child    > a[_ngcontent-%COMP%]:not(.social-button), .topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]:first-child    > span[_ngcontent-%COMP%], .topbar[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]:first-child    > p[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.topbar.topbar-ghost[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-bottom-color: rgba(255, 255, 255, 0.15);\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.topbar.topbar-ghost[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.social-button):not(.dropdown-item), .topbar.topbar-ghost[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .topbar.topbar-ghost[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.topbar.topbar-ghost[_ngcontent-%COMP%]   .topbar-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.social-button):not(.dropdown-item):hover {\n  color: #0da9ef;\n}\n.topbar.topbar-ghost[_ngcontent-%COMP%]   .lang-currency-switcher-wrap[_ngcontent-%COMP%]   .lang-currency-switcher[_ngcontent-%COMP%]    > .currency[_ngcontent-%COMP%] {\n  border-left-color: rgba(255, 255, 255, 0.15);\n}\n.topbar.topbar-ghost[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1iYXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxzY3NzXFxoZWxwZXJzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQ0l1QjtFREh2QixhQUFBO0FBRkY7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBREo7QUFFSTtFQUFlLGlCQUFBO0FBQ25CO0FBQUk7RUFBZ0IsZ0JBQUE7QUFHcEI7QUFGSTtFQUNFLGNDUm1CO0VEU25CLGVDeUNtQjtBRHJDekI7QUFGSTtFQUNFLHFCQUFBO0VBRUUsZUFBQTtFQUNBLGtCQUFBO0FBR1I7QUFETTtFQUFNLGdCQUFBO0FBSVo7QUFITTtFQUFvQixnQkFBQTtBQU0xQjtBQUpJO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtBQU1OO0FBTE07RUFBVSxjQ2ZRO0FEdUJ4QjtBQUpJO0VBQ0UsaUJBQUE7QUFNTjtBQUZJO0VBQ0Usa0JBQUE7QUFJTjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDhDQUFBO0VBQ0EsMkNBQUE7QUFDSjtBQUNNO0VBQXFELGNDekNsQztBRDJDekI7QUFETTtFQUNFLGNDdkNnQjtBRDBDeEI7QUFBSTtFQUNFLDRDQUFBO0FBRU47QUFBSTtFQUEwQixjQ2pETDtBRG9EekIiLCJmaWxlIjoidG9wLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zY3NzL2hlbHBlcnMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnfnNjc3MvaGVscGVycy9taXhpbnMnO1xyXG5cclxuLnRvcGJhciB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktbGlnaHRlcjtcclxuICB6LWluZGV4OiA5MDEwO1xyXG4gIC50b3BiYXItY29sdW1uIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICY6bGFzdC1jaGlsZCB7IHRleHQtYWxpZ246IHJpZ2h0OyB9XHJcbiAgICAmOmZpcnN0LWNoaWxkIHsgdGV4dC1hbGlnbjogbGVmdDsgfVxyXG4gICAgYTpub3QoLnNvY2lhbC1idXR0b24pLCBzcGFuLCBwIHtcclxuICAgICAgY29sb3I6ICRuYXYtbGluay1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhzO1xyXG5cdFx0fVxyXG4gICAgPiBhOm5vdCguc29jaWFsLWJ1dHRvbiksID4gc3BhbiwgPiBwIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW46IHtcclxuICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICBib3R0b206IDVweDtcclxuXHRcdFx0fVxyXG4gICAgICA+IGkgeyBtYXJnaW4tdG9wOiAtM3B4OyB9XHJcbiAgICAgID4gaS5pY29uLWRvd25sb2FkIHsgbWFyZ2luLXRvcDogLTRweDsgfVxyXG5cdFx0fVxyXG4gICAgYTpub3QoLnNvY2lhbC1idXR0b24pIHtcclxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjNzO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICY6aG92ZXIgeyBjb2xvcjogJG5hdi1saW5rLWhvdmVyLWNvbG9yOyB9XHJcblx0XHR9XHJcblx0fVxyXG4gIC50b3BiYXItY29sdW1uOmxhc3QtY2hpbGQge1xyXG4gICAgPiBhOm5vdCguc29jaWFsLWJ1dHRvbiksID4gc3BhbiwgPiBwIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0XHR9XHJcblx0fVxyXG4gIC50b3BiYXItY29sdW1uOmZpcnN0LWNoaWxkIHtcclxuICAgID4gYTpub3QoLnNvY2lhbC1idXR0b24pLCA+IHNwYW4sID4gcCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuXHRcdH1cclxuICB9XHJcblxyXG4gIC8vIEdob3N0IFZlcnNpb25cclxuICAmLnRvcGJhci1naG9zdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgkd2hpdGUtY29sb3IsIC4xNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR3aGl0ZS1jb2xvciwgLjA1KTtcclxuICAgIC50b3BiYXItY29sdW1uIHtcclxuICAgICAgYTpub3QoLnNvY2lhbC1idXR0b24pOm5vdCguZHJvcGRvd24taXRlbSksIHNwYW4sIHAgeyBjb2xvcjogJHdoaXRlLWNvbG9yOyB9XHJcbiAgICAgIGE6bm90KC5zb2NpYWwtYnV0dG9uKTpub3QoLmRyb3Bkb3duLWl0ZW0pOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJG5hdi1saW5rLWhvdmVyLWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubGFuZy1jdXJyZW5jeS1zd2l0Y2hlci13cmFwIC5sYW5nLWN1cnJlbmN5LXN3aXRjaGVyID4gLmN1cnJlbmN5IHtcclxuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoJHdoaXRlLWNvbG9yLCAuMTUpO1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIgeyBjb2xvcjogJHdoaXRlLWNvbG9yOyB9XHJcbiAgfVxyXG59XHJcbiIsIi8vXHJcbi8vIFZhcmlhYmxlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy89PSBDb2xvcnNcclxuLy9cclxuLy8jIyBHcmF5IGFuZCBicmFuZCBjb2xvcnMgZm9yIHVzZSBhY3Jvc3MgVGhlbWUuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBHcmF5c2NhbGVcclxuJGdyYXktZGFya2VyOiAgICAgICAgICAgICMzNzQyNTA7XHJcbiRncmF5LWRhcms6ICAgICAgICAgICAgXHQgIzYwNjk3NTtcclxuJGdyYXk6ICAgICAgICAgICAgICAgICAgICM5ZGE5Yjk7XHJcbiRncmF5LWxpZ2h0OiAgICAgICAgICAgICAjZTFlN2VjO1xyXG4kZ3JheS1saWdodGVyOiAgICAgICAgICAgI2Y1ZjVmNTtcclxuJHdoaXRlLWNvbG9yOiAgICAgICAgICAgICNmZmZmZmY7XHJcbiRibGFjay1jb2xvcjogICAgICAgICAgICAjMDAwMDAwO1xyXG5cclxuLy8gQnJhbmQgY29sb3JzXHJcbiRicmFuZC1wcmltYXJ5OiAgICAgICAgICMwZGE5ZWY7XHJcbiRicmFuZC1pbmZvOlx0XHQgICAgICAgICM1MGM2ZTk7XHJcbiRicmFuZC1zdWNjZXNzOiAgICAgICAgICM0M2Q5YTM7XHJcbiRicmFuZC13YXJuaW5nOiAgICAgICAgICNmZmI3NGY7XHJcbiRicmFuZC1kYW5nZXI6ICAgICAgICAgICNmZjUyNTI7XHJcblxyXG4vLyBCb2R5XHJcbiRib2R5LWJnOiBcdFx0XHRcdFx0XHRcdCR3aGl0ZS1jb2xvcjtcclxuJGJvZHktY29sb3I6IFx0XHRcdFx0XHRcdCRncmF5LWRhcms7XHJcblxyXG4vLyBJbmxpbmUgbGlua3NcclxuJGxpbmstY29sb3I6IFx0XHRcdFx0XHRcdCRicmFuZC1wcmltYXJ5O1xyXG4kbGluay1ob3Zlci1jb2xvcjogXHRcdFx0JGJyYW5kLXByaW1hcnk7XHJcblxyXG4vLyBIZWRpbmdzXHJcbiRoZWFkaW5ncy1jb2xvcjpcdCBcdFx0XHQkZ3JheS1kYXJrZXI7XHJcblxyXG4vLyBCbG9ja3F1b3RlXHJcbiRxdW90ZS10ZXh0LWNvbG9yOiAgICAgICRib2R5LWNvbG9yO1xyXG4kcXVvdGUtbWFyay1jb2xvcjogICAgICAkZ3JheTtcclxuJHF1b3RlLWF1dGhvci1jb2xvcjogICAgJGdyYXk7XHJcblxyXG4vLyBCb3JkZXJzXHJcbiRib3JkZXItY29sb3I6ICAgICAgICAgICRncmF5LWxpZ2h0O1xyXG4kYm9yZGVyLWxpZ2h0LWNvbG9yOiAgICByZ2JhKCR3aGl0ZS1jb2xvciwgLjEyKTtcclxuXHJcbi8vIEhpZ2hsaWdodCBjb2xvclxyXG4kaGlnaGxpZ2h0LWNvbG9yOiAgICAgICAjZmZmOGIwO1xyXG5cclxuXHJcbi8vPT0gVHlwb2dyYXBoeVxyXG4vL1xyXG4vLyMjIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kZm9udC1mYW1pbHktYmFzZTogXHRcdFx0ICAnTWF2ZW4gUHJvJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LWhlYWRpbmdzOiBcdCAgaW5oZXJpdDtcclxuXHJcbi8vIEZvbnQgc2l6ZXNcclxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAxNnB4O1xyXG4kZm9udC1zaXplLWxlYWQ6ICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjEyNSkpOyAvLyB+MThweFxyXG4kZm9udC1zaXplLXNtOiBcdFx0XHRcdCAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogLjg3NSkpOyAvLyB+MTRweFxyXG4kZm9udC1zaXplLXhzOiAgICAgICAgIFx0XHRmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogLjgxMjUpKTsgLy8gfjEzcHhcclxuXHJcbi8vIEhlYWRpbmdzXHJcbiRmb250LXNpemUtaDE6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDIuMjUpKTsgLy8gfjM2cHhcclxuJGZvbnQtc2l6ZS1oMjogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS44NzUpKTsgLy8gfjMwcHhcclxuJGZvbnQtc2l6ZS1oMzogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS41KSk7IC8vIH4yNHB4XHJcbiRmb250LXNpemUtaDQ6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuMjUpKTsgLy8gfjIwcHhcclxuJGZvbnQtc2l6ZS1oNTogICAgICAgICAgICAkZm9udC1zaXplLWxlYWQ7IC8vIH4xOHB4XHJcbiRmb250LXNpemUtaDY6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlOyAvLyB+MTZweFxyXG5cclxuLy8gRGlzcGxheSBoZWFkaW5nc1xyXG4kZGlzcGxheS0xOiAgICAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiA0LjUpKTsgLy8gfjcycHhcclxuJGRpc3BsYXktMjogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMy43NSkpOyAvLyB+NjBweFxyXG4kZGlzcGxheS0zOiAgICAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAzLjEyNSkpOyAvLyB+NTBweFxyXG4kZGlzcGxheS00OiAgICAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAyLjUpKTsgLy8gfjQwcHhcclxuXHJcbi8vIEZvbnQgc3R5bGVzXHJcbiRmb250LXN0eWxlLWJhc2U6ICAgICAgICAgbm9ybWFsO1xyXG4kZm9udC1zdHlsZS1oZWFkaW5nczogICAgIG5vcm1hbDtcclxuXHJcbi8vIEZvbnQgd2VpZ2h0c1xyXG4kZm9udC13ZWlnaHQtYmFzZTogICAgICAgICBub3JtYWw7XHJcbiRmb250LXdlaWdodC1oZWFkaW5nczogICAgIDUwMDtcclxuXHJcbi8vIFRleHQgdHJhbnNmb3Jtc1xyXG4kdGV4dC10cmFuc2Zvcm0tYmFzZTogICAgIG5vbmU7XHJcbiR0ZXh0LXRyYW5zZm9ybS1oZWFkaW5nczogbm9uZTtcclxuXHJcbi8vIExpbmUgaGVpZ2h0c1xyXG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgMS41O1xyXG4kbGluZS1oZWlnaHQtaDE6ICAgICAgICAgMS4xNTtcclxuJGxpbmUtaGVpZ2h0LWgyOiAgICAgICAgIDEuMjtcclxuJGxpbmUtaGVpZ2h0LWgzOiAgICAgICAgIDEuMjU7XHJcbiRsaW5lLWhlaWdodC1oNDogICAgICAgICAxLjM7XHJcbiRsaW5lLWhlaWdodC1oNTogICAgICAgICAxLjM1O1xyXG4kbGluZS1oZWlnaHQtaDY6ICAgICAgICAgMS40O1xyXG4kbGluZS1oZWlnaHQtZGlzcGxheTogICAgMS4xNTtcclxuXHJcblxyXG4vLz09IEdyaWQgVmVydGljYWwgU3RlcFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kZ3JpZC12ZXJ0aWNhbC1zdGVwOiAgICAgMjRweDtcclxuXHJcblxyXG4vLz09IEJvcmRlciBSYWRpdXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGJvcmRlci1yYWRpdXMtbGc6IFx0XHQ3cHg7XHJcbiRib3JkZXItcmFkaXVzLWJhc2U6IFx0NXB4O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogXHRcdDNweDtcclxuXHJcblxyXG4vLz09IEZvcm1zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRpbnB1dC1oZWlnaHQtbGc6XHRcdFx0XHRcdFx0XHQ1NHB4O1xyXG4kaW5wdXQtaGVpZ2h0Olx0XHRcdFx0XHRcdFx0XHQ0NHB4O1xyXG4kaW5wdXQtaGVpZ2h0LXNtOlx0XHRcdFx0XHRcdFx0MzZweDtcclxuJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyOiAgICAgJGdyYXk7XHJcblxyXG5cclxuLy89PSBCdXR0b25zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRidG4tZm9udC1zaXplOiBcdFx0XHRcdFx0XHRcdCRmb250LXNpemUtc207XHJcbiRidG4tc20tZm9udC1zaXplOiBcdFx0XHRcdFx0XHQkZm9udC1zaXplLXhzO1xyXG4kYnRuLXRleHQtdHJhbnNmb3JtOiAgICAgICAgICB1cHBlcmNhc2U7XHJcbiRidG4tZm9udC13ZWlnaHQ6IFx0XHRcdFx0XHRcdDUwMDtcclxuJGJ0bi10ZXh0LWNvbG9yOiAgICAgICAgICAgICAgJGdyYXktZGFyaztcclxuXHJcbiRidG4taGVpZ2h0OiBcdFx0XHRcdFx0XHRcdFx0XHQ0NHB4O1xyXG4kYnRuLWxnLWhlaWdodDogXHRcdFx0XHRcdFx0XHQ1NHB4O1xyXG4kYnRuLXNtLWhlaWdodDogXHRcdFx0XHRcdFx0XHQzNnB4O1xyXG5cclxuJGJ0bi1tYXJnaW46ICAgICAgICAgICAgICAgICAgZmxvb3IoJGdyaWQtdmVydGljYWwtc3RlcCAvIDIpOyAvL34xMnB4XHJcbiRzb2NpYWwtYnRuLXNpemU6IFx0XHRcdFx0XHRcdCRmb250LXNpemUteHM7XHJcblxyXG5cclxuLy89PSBUYWJsZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJHRhYmxlLWJvcmRlci1jb2xvcjogXHRcdFx0XHRcdCRib3JkZXItY29sb3I7XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmc6XHRcdFx0XHRcdDE1cHg7XHJcbiR0YWJsZS1iZy1hY2NlbnQ6IFx0XHRcdFx0XHRcdCRncmF5LWxpZ2h0ZXI7XHJcblxyXG5cclxuLy89PSBOYXZiYXIgLyBMb2dvXHJcbi8vXHJcblxyXG4kbmF2YmFyLW1pbi1oZWlnaHQ6IFx0XHRcdDg0cHg7XHJcbiRuYXZiYXItc3R1Y2stc2hhZG93OiAgICAgMCAzcHggMjVweCAwIHJnYmEoZGFya2VuKCRncmF5LWRhcmtlciwgNCUpLCAuMjIpO1xyXG4kbG9nby13aWR0aDogXHRcdFx0XHQgICAgICAxMjlweDtcclxuXHJcbi8vIE5hdmJhciBUb29sc1xyXG4kbmF2YmFyLXRvb2xzLWNvbG9yOiAgICAgICAgICAkZ3JheS1kYXJrO1xyXG4kbmF2YmFyLXRvb2xzLXNpemU6ICAgICAgICAgICAkYnRuLWhlaWdodDtcclxuJG9mZmNhbnZhcy10b2dnbGUtaWNvbi1zaXplOiAgMjBweDtcclxuJHRvb2xzLWljb24tc2l6ZTogICAgICAgICAgICAgMTdweDtcclxuXHJcblxyXG4vLz09IE5hdmlnYXRpb25cclxuLy9cclxuXHJcbiRuYXYtbGluay1mb250LXNpemU6IFx0XHRcdFx0JGZvbnQtc2l6ZS1zbTsgLy8gMTRweFxyXG4kbmF2LWxpbmstZm9udC13ZWlnaHQ6IFx0XHRcdDUwMDtcclxuJG5hdi1saW5rLWNvbG9yOiBcdFx0XHRcdFx0XHQkZ3JheS1kYXJrO1xyXG4kbmF2LWxpbmstaG92ZXItY29sb3I6IFx0XHRcdCRicmFuZC1wcmltYXJ5O1xyXG4kbmF2LWxpbmstYWN0aXZlLWNvbG9yOiBcdFx0JGJyYW5kLXByaW1hcnk7XHJcblxyXG4vLyBTdWIgTWVudSAvIE1lZ2EgTWVudVxyXG4kc3ViLW1lbnUtd2lkdGg6ICAgICAgICAgICAgMjAwcHg7XHJcbiRzdWItbWVudS1zaGFkb3c6ICAgICAgICAgICAwIDdweCAyMnB4IC01cHggcmdiYShkYXJrZW4oJGdyYXktZGFya2VyLCA0JSksIC4yKTtcclxuXHJcbi8vIE9mZi1DYW52YXNcclxuJG9mZmNhbnZhcy13aWR0aDogICAgICAgICAgIDI5MHB4O1xyXG5cclxuXHJcbi8vPT0gVGFic1xyXG4vL1xyXG5cclxuJG5hdi10YWJzLWZvbnQtc2l6ZTpcdFx0XHRcdFx0XHRcdFx0Zmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC44NzUpKTsgLy8gfjE0cHhcclxuJG5hdi10YWJzLWxpbmstY29sb3I6IFx0XHRcdFx0XHRcdFx0JGdyYXk7XHJcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogIFx0XHRcdCRncmF5LWRhcms7XHJcblxyXG5cclxuLy89PSBQcm9ncmVzc1xyXG4vL1xyXG5cclxuJHByb2dyZXNzLWhlaWdodDogICAgIDE4cHg7XHJcbiRwcm9ncmVzcy1iZzogICAgICAgICAkYnJhbmQtcHJpbWFyeTtcclxuXHJcblxyXG4vLz09IFN0ZXBzXHJcbi8vXHJcblxyXG4kc3RlcC1jaXJjbGUtc2l6ZTogICAgICAgIDgwcHg7XHJcbiRzdGVwLWljb24tZGVmYXVsdC1iZzogICAgJGdyYXktbGlnaHRlcjtcclxuJHN0ZXAtaWNvbi1zaXplOiAgICAgICAgICAzOHB4O1xyXG4kc3RlcC1pY29uLWRlZmF1bHQtY29sb3I6ICRncmF5LWRhcmtlcjtcclxuJHN0ZXAtdGl0bGUtc2l6ZTogICAgICAgICAkZm9udC1zaXplLXNtO1xyXG4kc3RlcC10aXRsZS1jb2xvcjogICAgICAgICRncmF5LWRhcms7XHJcbiRzdGVwLWNvbm5lY3QtaGVpZ2h0OiAgICAgM3B4O1xyXG5cclxuXHJcbi8vID09IFNob3BcclxuLy9cclxuXHJcbi8vIFByb2R1Y3RcclxuJHByb2R1Y3QtdGl0bGUtZm9udC1zaXplOiAgICAgJGZvbnQtc2l6ZS1iYXNlO1xyXG4kcHJvZHVjdC10aXRsZS1jb2xvcjogICAgICAgICAkZ3JheS1kYXJrZXI7XHJcbiRwcm9kdWN0LXRpdGxlLWhvdmVyLWNvbG9yOiAgICRicmFuZC1wcmltYXJ5O1xyXG4kcHJvZHVjdC1wcmljZS1mb250LXNpemU6ICAgICAkZm9udC1zaXplLWJhc2U7XHJcbiRwcm9kdWN0LXByaWNlLWNvbG9yOiAgICAgICAgICRncmF5LWRhcms7XHJcblxyXG4vLyBTaG9wIFZpZXdcclxuJHNob3Atdmlldy1zaXplOiAgICAgICAgICAgIDQzcHg7XHJcbiRzaG9wLXZpZXctY29sb3I6ICAgICAgICAgICAkZ3JheS1kYXJrO1xyXG4kc2hvcC12aWV3LWJnLWNvbG9yOiAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG4kc2hvcC12aWV3LWhvdmVyLWJnLWNvbG9yOiAgJGdyYXktbGlnaHRlcjtcclxuJHNob3Atdmlldy1hY3RpdmUtYmctY29sb3I6ICRicmFuZC1wcmltYXJ5O1xyXG5cclxuLy8gQ2FydFxyXG4kY2FydC10aHVtYi1zaXplOiAgICAgICAgIDExMHB4O1xyXG5cclxuLy8gQWNjb3VudFxyXG4kY292ZXItaGVpZ2h0OiAgICAgICAgICAgIDEyMHB4O1xyXG4kdXNlci1hdmEtc2l6ZTogICAgICAgICAgIDExNXB4O1xyXG5cclxuXHJcbi8vID09IEJsb2dcclxuLy9cclxuXHJcbiRibG9nLXBvc3QtbWV0YS1jb2xvcjogICAgICAkZ3JheS1kYXJrO1xyXG4kYmxvZy1wb3N0LW1ldGEtaWNvbi1jb2xvcjogJGdyYXk7XHJcbiRibG9nLXBvc3QtbWV0YS1mb250LXNpemU6ICAkZm9udC1zaXplLXhzO1xyXG4kYmxvZy1wb3N0LWNvbG9yOiAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yO1xyXG4kYmxvZy1wb3N0LWhvdmVyLWNvbG9yOiAgICAgJGJyYW5kLXByaW1hcnk7XHJcblxyXG5cclxuLy8gPT0gQ29tbWVudHNcclxuLy9cclxuXHJcbiRjb21tZW50LWF1dGhvci1hdmEtc2l6ZTogICA1MHB4O1xyXG4kY29tbWVudC10aXRsZS1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJGNvbW1lbnQtdGl0bGUtd2VpZ2h0OiAgICAgIDUwMDtcclxuXHJcblxyXG4vLz09IFdpZGdldHNcclxuLy9cclxuXHJcbiRzaWRlYmFyLW1heC13aWR0aDogICAgICAgICAgNDAwcHg7XHJcbiRzaWRlYmFyLW9mZmNhbnZhcy13aWR0aDogICAgMzIwcHg7XHJcbiR3aWRnZXQtdGl0bGUtY29sb3I6ICAgICAgICAgJGdyYXk7XHJcbiR3aWRnZXQtdGl0bGUtZm9udC1zaXplOiAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJHdpZGdldC1saW5rLWZvbnQtc2l6ZTogICAgICAkZm9udC1zaXplLXNtO1xyXG4kd2lkZ2V0LW1ldGEtY29sb3I6ICAgICAgICAgICRncmF5O1xyXG4kd2lkZ2V0LW1ldGEtZm9udC1zaXplOiAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgLyAxLjMzKSk7IC8vfjEycHhcclxuJHdpZGdldC1lbnRyeS10aHVtYi1zaXplOiAgICA1MHB4O1xyXG5cclxuLy8gVGFnc1xyXG4kd2lkZ2V0LXRhZ3MtaGVpZ2h0OiAgICAgICAgICAgICAgMjhweDtcclxuJHdpZGdldC10YWdzLWZvbnQtc2l6ZTogICAgICAgICAgICRmb250LXNpemUteHM7XHJcbiR3aWRnZXQtdGFncy1jb2xvcjogICAgICAgICAgICAgICAkbmF2LWxpbmstY29sb3I7XHJcbiR3aWRnZXQtdGFncy1ob3Zlci1iZzogICAgICAgICAgICAkZ3JheS1saWdodGVyO1xyXG4kd2lkZ2V0LXRhZ3MtYWN0aXZlLWJnOiAgICAgICAgICAgJG5hdi1saW5rLWFjdGl2ZS1jb2xvcjtcclxuJHdpZGdldC10YWdzLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRuYXYtbGluay1hY3RpdmUtY29sb3I7XHJcbiR3aWRnZXQtdGFncy1hY3RpdmUtY29sb3I6ICAgICAgICAkd2hpdGUtY29sb3I7XHJcblxyXG5cclxuLy89PSBQYWdpbmF0aW9uXHJcbi8vXHJcblxyXG4kcGFnaW5hdGlvbi1saW5rLXNpemU6ICAgICAgICAgJGJ0bi1zbS1oZWlnaHQ7XHJcbiRwYWdpbmF0aW9uLWxpbmstZm9udC1zaXplOiAgICAkZm9udC1zaXplLXNtO1xyXG4kcGFnaW5hdGlvbi1saW5rLWZvbnQtd2VpZ2h0OiAgNTAwO1xyXG4kcGFnaW5hdGlvbi1saW5rLWNvbG9yOiAgICAgICAgJGdyYXktZGFyaztcclxuJHBhZ2luYXRpb24tbGluay1hY3RpdmUtY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuJHBhZ2luYXRpb24tbGluay1ob3Zlci1iZzogICAgICRncmF5LWxpZ2h0ZXI7XHJcbiRwYWdpbmF0aW9uLWxpbmstYWN0aXZlLWJnOiAgICAkYnJhbmQtcHJpbWFyeTtcclxuXHJcblxyXG4vLz09IFRvb2x0aXBzXHJcbi8vXHJcblxyXG4kdG9vbHRpcC1vcGFjaXR5OiAgICBcdFx0MTtcclxuJHRvb2x0aXAtYmc6IFx0XHRcdFx0IFx0XHRkYXJrZW4oJGdyYXktZGFya2VyLCA0JSk7XHJcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgICR3aGl0ZS1jb2xvcjtcclxuJHRvb2x0aXAtYXJyb3ctY29sb3I6IFx0JHRvb2x0aXAtYmc7XHJcblxyXG5cclxuLy89PSBDYXJvdXNlbFxyXG4vL1xyXG5cclxuJGNhcm91c2VsLW5hdnMtc2l6ZTogXHRcdFx0XHQgICRidG4taGVpZ2h0O1xyXG4kY2Fyb3VzZWwtbmF2cy1pY29uLXNpemU6IFx0ICAxOXB4O1xyXG4kY2Fyb3VzZWwtbmF2cy1iZzogICAgICAgICAgICAkd2hpdGUtY29sb3I7XHJcbiRjYXJvdXNlbC1uYXZzLWNvbG9yOiBcdFx0XHQgICRncmF5LWRhcmtlcjtcclxuJGNhcm91c2VsLWRvdHMtc2l6ZTogXHRcdFx0XHQgIDZweDtcclxuJGNhcm91c2VsLWRvdHMtY29sb3I6IFx0ICBcdCAgJGdyYXktZGFyaztcclxuXHJcbi8vIEhlcm8gU2xpZGVyXHJcbiRoZXJvLXNsaWRlci1taW4taGVpZ2h0OiAgICAgIDU4MHB4O1xyXG5cclxuLy89PSBDb3VudGRvd25cclxuLy9cclxuXHJcbiRjb3VudGRvd24tYm94LXNpemU6ICAgICAgICAgIDQ4cHg7XHJcbiRjb3VudGRvd24tZm9udC1zaXplOiAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjM3NSkpOyAvLyB+MjJweFxyXG4kY291bnRkb3duLWxhYmVsLXNpemU6ICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogLjc1KSk7IC8vIH4xMnB4XHJcblxyXG5cclxuLy89PSBNZWRpYSBxdWVyaWVzIChyZXNwb25zaXZlIGJyZWFja3BvaW50cylcclxuLy8jIyBEZXNja3RvcCwgVGFibGV0LCBNb2JpbGVcclxuXHJcbiRzY3JlZW4teGw6IDEyMDBweDtcclxuJHNjcmVlbi1sZzogOTkxcHg7XHJcbiRzY3JlZW4tbWQ6IDc2OHB4O1xyXG4kc2NyZWVuLXNtOiA1NzZweDtcclxuJHNjcmVlbi14czogMzYwcHg7XHJcblxyXG4kbmF2LWNvbGxhcHNlOiAgICAgMTA3MHB4O1xyXG4iXX0= */"] });


/***/ }),

/***/ 5985:
/*!*********************************************!*\
  !*** ./src/app/messages/message.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 2808);


class MessageService {
    constructor(toastr) {
        this.toastr = toastr;
        this.messages = [];
        this.toastrConfig = {
            disableTimeOut: false,
            closeButton: false,
            positionClass: 'toast-bottom-right'
        };
    }
    add(message) {
        this.messages.push(message);
        this.toastr.success(message, 'Message:', this.toastrConfig);
    }
    addError(message) {
        this.toastr.error(message, 'Message:', this.toastrConfig);
    }
    clear() {
        this.messages = [];
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService)); };
MessageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac });


/***/ }),

/***/ 1195:
/*!*******************************************!*\
  !*** ./src/app/models/cart-item.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartItem": () => (/* binding */ CartItem)
/* harmony export */ });
class CartItem {
    constructor(product, amount) {
        this.product = product;
        this.amount = amount;
    }
}


/***/ }),

/***/ 1854:
/*!******************************************!*\
  !*** ./src/app/models/customer.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Customer": () => (/* binding */ Customer)
/* harmony export */ });
class Customer {
    constructor(firstname = '', lastname = '', address1 = '', address2 = '', zip = null, city = '', email = '', phone = '', company = '', country = '') {
        this.firstname = firstname;
        this.lastname = lastname;
        this.address1 = address1;
        this.address2 = address2;
        this.zip = zip;
        this.city = city;
        this.email = email;
        this.phone = phone;
        this.company = company;
        this.country = country;
    }
}


/***/ }),

/***/ 9297:
/*!***************************************!*\
  !*** ./src/app/models/order.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Order": () => (/* binding */ Order)
/* harmony export */ });
class Order {
    constructor(customer = null, items = null, total = null, status = '', number = '', date = new Date().toISOString().split('T')[0], shippingMethod = '', paymentMethod = '') {
        this.customer = customer;
        this.items = items;
        this.total = total;
        this.status = status;
        this.number = number;
        this.date = date;
        this.shippingMethod = shippingMethod;
        this.paymentMethod = paymentMethod;
    }
}


/***/ }),

/***/ 1454:
/*!*****************************************!*\
  !*** ./src/app/models/product.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => (/* binding */ Product)
/* harmony export */ });
class Product {
    constructor(id = 1, date = new Date().toISOString().split('T')[0], name = '', description = '', price = 0, priceNormal = 0, reduction = 0, imageURLs = [], imageRefs = [], categories = {}, ratings = {}, currentRating = 0, sale = false) {
        this.id = id;
        this.date = date;
        this.name = name;
        this.description = description;
        this.price = price;
        this.priceNormal = priceNormal;
        this.reduction = reduction;
        this.imageURLs = imageURLs;
        this.imageRefs = imageRefs;
        this.categories = categories;
        this.ratings = ratings;
        this.currentRating = currentRating;
        this.sale = sale;
    }
}


/***/ }),

/***/ 4872:
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor(authData) {
        this.email = authData.email;
        this.firstName = authData.firstName ? authData.firstName : '';
        this.lastName = authData.lastName ? authData.lastName : '';
        this.roles = {
            admin: false
        };
    }
}


/***/ }),

/***/ 439:
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class PageNotFoundComponent {
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 11, vars: 0, consts: [[1, "container", "padding-top-3x", "padding-bottom-3x", "mb-1"], ["src", "img/404_art.jpg", "alt", "404", 1, "d-block", "m-auto", 2, "width", "100%", "max-width", "550px"], [1, "padding-top-1x", "mt-2", "text-center"], ["routerLink", "/"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "It seems we can\u2019t find page you are looking for. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Go back to Homepage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Or try using search at the top right corner of the page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8537:
/*!****************************************!*\
  !*** ./src/app/pager/pager.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagerService": () => (/* binding */ PagerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PagerService {
    getPager(totalItems, currentPage = 1, pageSize = 10) {
        const totalPages = Math.ceil(totalItems / pageSize);
        let startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        const pages = Array.from(Array(totalPages), (_, i) => 1 + i);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}
PagerService.ɵfac = function PagerService_Factory(t) { return new (t || PagerService)(); };
PagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PagerService, factory: PagerService.ɵfac });


/***/ }),

/***/ 1305:
/*!*********************************************************************!*\
  !*** ./src/app/products/product-detail/product-detail.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailComponent": () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _models_cart_item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/cart-item.model */ 1195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _account_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../account/shared/auth.service */ 1544);
/* harmony import */ var _cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cart/shared/cart.service */ 8085);
/* harmony import */ var _shared_products_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/products-cache.service */ 9491);
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/product.service */ 9979);
/* harmony import */ var _shared_product_rating_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/product-rating.service */ 2449);
/* harmony import */ var _shared_price_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/price/price.component */ 6422);
/* harmony import */ var _core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/page-title/page-title.component */ 9526);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/rating-stars/rating-stars.component */ 1397);















function ProductDetailComponent_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r1.product.reduction, "% Off");
} }
const _c0 = function (a0) { return { "active": a0 }; };
const _c1 = function (a0) { return { "loading": a0 }; };
function ProductDetailComponent_div_1_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 51)(1, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductDetailComponent_div_1_li_10_Template_a_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const i_r8 = restoredCtx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.onSelectThumbnail($event, i_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("load", function ProductDetailComponent_div_1_li_10_Template_img_load_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r11.onImageLoad($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const image_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](5, _c0, i_r8 === ctx_r2.activeImageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](7, _c1, !ctx_r2.imagesLoaded.includes(ctx_r2.activeImageUrl)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("alt", ctx_r2.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", !ctx_r2.imagesLoaded.includes(image_r7))("src", image_r7, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
} }
function ProductDetailComponent_div_1_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r3.ratingCount, " customer reviews");
} }
function ProductDetailComponent_div_1_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Categories:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_1_a_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", category_r12, "", " ", "");
} }
function ProductDetailComponent_div_1_div_44_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", value_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", value_r14, " Stars");
} }
function ProductDetailComponent_div_1_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20)(1, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Your Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProductDetailComponent_div_1_div_44_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r15.selectedRating = $event); })("change", function ProductDetailComponent_div_1_div_44_Template_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r17.onRate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ProductDetailComponent_div_1_div_44_option_4_Template, 2, 2, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r6.selectedRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r6.ratingValues);
} }
const _c2 = function () { return { title: "Products", link: "/products" }; };
const _c3 = function (a0) { return { title: a0 }; };
const _c4 = function (a0, a1) { return [a0, a1]; };
function ProductDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-page-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ProductDetailComponent_div_1_span_6_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 8)(8, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("load", function ProductDetailComponent_div_1_Template_img_load_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r18.onImageLoad($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ProductDetailComponent_div_1_li_10_Template, 3, 9, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "div", 12)(13, "app-rating-stars", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, ProductDetailComponent_div_1_span_14_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "app-price", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 18)(22, "div", 19)(23, "div", 20)(24, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ProductDetailComponent_div_1_Template_select_change_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r20.onSelectQuantity($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 28)(38, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "SKU:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, ProductDetailComponent_div_1_span_42_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, ProductDetailComponent_div_1_a_43_Template, 2, 2, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, ProductDetailComponent_div_1_div_44_Template, 5, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](45, "hr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "div", 35)(47, "div", 36)(48, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "Share:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "div", 38)(51, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](52, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](54, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](56, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](58, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "div", 47)(60, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductDetailComponent_div_1_Template_button_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.onAddToCart()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](61, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, " Add to Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("title", ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("children", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](20, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](17, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](18, _c3, ctx_r0.product.name)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.product.reduction);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](23, _c1, !ctx_r0.imagesLoaded.includes(ctx_r0.activeImageUrl)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r0.activeImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("alt", ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", !ctx_r0.imagesLoaded.includes(ctx_r0.activeImageUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.product.imageURLs);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rating", ctx_r0.product.currentRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.product.ratings);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("product", ctx_r0.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.product.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r0.product.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.product.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.product.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.user);
} }
class ProductDetailComponent {
    constructor(router, route, location, authService, cartService, productsCacheService, productService, productRatingService) {
        this.router = router;
        this.route = route;
        this.location = location;
        this.authService = authService;
        this.cartService = cartService;
        this.productsCacheService = productsCacheService;
        this.productService = productService;
        this.productRatingService = productRatingService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    }
    ngOnInit() {
        this.authService.user
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe$))
            .subscribe((user) => {
            this.user = user;
        });
        this.ratingValues = [1, 2, 3, 4, 5];
        this.selectedQuantity = 1;
        this.imagesLoaded = [];
        this.route.params
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe$))
            .subscribe((params) => {
            this.getProduct();
        });
    }
    getProduct() {
        this.productLoading = true;
        const id = +this.route.snapshot.paramMap.get('id');
        this.productService
            .getProduct(id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe$))
            .subscribe((product) => {
            if (product) {
                this.product = product;
                this.setupProduct();
                this.productLoading = false;
            }
            else {
                this.router.navigate(['/404-product-not-found']);
            }
        });
    }
    onSelectThumbnail(event, index) {
        event.preventDefault();
        this.activeImageUrl = this.product.imageURLs[index];
        this.activeImageIndex = index;
    }
    onAddToCart() {
        this.cartService.addItem(new _models_cart_item_model__WEBPACK_IMPORTED_MODULE_0__.CartItem(this.product, this.selectedQuantity));
    }
    onSelectQuantity(event) {
        this.selectedQuantity = +event.target.value;
    }
    onRate() {
        const rating = parseInt(this.selectedRating, 10);
        this.productRatingService
            .rateProduct(this.product, rating)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe$))
            .subscribe((response) => {
            this.getProduct();
        });
    }
    onImageLoad(e) {
        this.imagesLoaded.push(e.target.src);
    }
    setupProduct() {
        if (this.product) {
            this.checkCategories();
            this.checkRatings();
            this.activeImageUrl = this.product.imageURLs[0];
            this.activeImageIndex = 0;
        }
    }
    checkCategories() {
        const categories = Object.keys(this.product.categories).map((category, index, inputArray) => {
            category = index < inputArray.length - 1 ? category + ',' : category;
            return category;
        });
        this.product.categories =
            categories.length >= 1 && !Array.isArray(this.product.categories)
                ? categories
                : [];
    }
    checkRatings() {
        this.ratingCount = this.product.ratings
            ? Object.keys(this.product.ratings).length
            : 0;
        // check for existing rating
        if (this.product.ratings &&
            this.user &&
            Object.keys(this.product.ratings).includes(this.user.uid)) {
            this.selectedRating = this.product.ratings[this.user.uid];
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_account_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_products_cache_service__WEBPACK_IMPORTED_MODULE_3__.ProductsCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_product_rating_service__WEBPACK_IMPORTED_MODULE_5__.ProductRatingService)); };
ProductDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], inputs: { product: "product" }, decls: 2, vars: 4, consts: [[1, "product-detail", 3, "ngClass"], [4, "ngIf"], [3, "title", "children"], [1, "container", "padding-bottom-3x", "mb-1"], [1, "row"], [1, "col-md-6"], [1, "product-gallery"], ["class", "product-badge text-danger", 4, "ngIf"], [1, "product-gallery-image", 3, "ngClass"], [1, "img-fluid", 3, "hidden", "src", "alt", "load"], [1, "product-thumbnails"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "padding-top-2x", "mt-2", "hidden-md-up"], [3, "rating"], ["class", "text-muted align-middle", 4, "ngIf"], [1, "padding-top-1x", "text-normal"], [1, "h2", "d-block"], [3, "product"], [1, "row", "margin-top-1x"], [1, "col-sm-3"], [1, "form-group"], ["for", "quantity"], ["id", "quantity", 1, "form-control", 3, "change"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], [1, "pt-1", "mb-2"], [1, "text-medium"], [1, "padding-bottom-1x", "mb-2"], ["class", "text-medium", 4, "ngIf"], ["class", "navi-link", "href", "#", 4, "ngFor", "ngForOf"], ["class", "form-group", 4, "ngIf"], [1, "mb-3"], [1, "d-flex", "flex-wrap", "justify-content-between"], [1, "entry-share", "mt-2", "mb-2"], [1, "text-muted"], [1, "share-links"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Facebook", 1, "social-button", "shape-circle", "sb-facebook"], [1, "socicon-facebook"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Twitter", 1, "social-button", "shape-circle", "sb-twitter"], [1, "socicon-twitter"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Instagram", 1, "social-button", "shape-circle", "sb-instagram"], [1, "socicon-instagram"], ["href", "#", "data-toggle", "tooltip", "data-placement", "top", "title", "Google +", 1, "social-button", "shape-circle", "sb-google-plus"], [1, "socicon-googleplus"], [1, "sp-buttons", "mt-2", "mb-2"], [1, "btn", "btn-primary", 3, "click"], [1, "icon-bag"], [1, "product-badge", "text-danger"], [3, "ngClass"], ["href", "", 1, "product-thumbnail-image", 3, "ngClass", "click"], [3, "hidden", "src", "alt", "load"], [1, "text-muted", "align-middle"], ["href", "#", 1, "navi-link"], ["for", "review_rating"], ["name", "rating", 1, "form-control", "form-control-rounded", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProductDetailComponent_div_1_Template, 63, 25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c1, ctx.productLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.product);
    } }, dependencies: [_shared_price_price_component__WEBPACK_IMPORTED_MODULE_6__.PriceComponent, _core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__.PageTitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _shared_rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_8__.RatingStarsComponent], styles: [".sp-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-left: 8px;\n}\n.sp-buttons[_ngcontent-%COMP%]   .btn.btn-wishlist[_ngcontent-%COMP%] {\n  width: 36px;\n  padding: 0;\n  padding-left: 1px;\n  border-radius: 50%;\n}\n.sp-buttons[_ngcontent-%COMP%]   .btn.btn-wishlist[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.sp-buttons[_ngcontent-%COMP%]   .btn.btn-wishlist.active[_ngcontent-%COMP%] {\n  color: #ff5252;\n}\n.product-gallery[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 15px;\n  padding-right: 15px;\n  padding-bottom: 15px;\n  padding-left: 15px;\n  border: 1px solid #e1e7ec;\n  border-radius: 7px;\n}\n.product-gallery[_ngcontent-%COMP%]   .product-badge[_ngcontent-%COMP%] {\n  top: 25px;\n  left: 15px;\n}\n.product-gallery[_ngcontent-%COMP%]   .product-thumbnails[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n  margin-top: 24px;\n  padding: 0;\n  list-style: none;\n  text-align: center;\n}\n.product-gallery[_ngcontent-%COMP%]   .product-thumbnails[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 3px 10px;\n}\n.product-gallery[_ngcontent-%COMP%]   .product-thumbnails[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: block;\n  width: 94px;\n  transition: border-color 0.25s;\n  border: 1px solid #e1e7ec;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.product-gallery[_ngcontent-%COMP%]   .product-thumbnails[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  border-color: #0da9ef;\n  cursor: default;\n}\n.product-gallery[_ngcontent-%COMP%]   .product-thumbnail-image.loading[_ngcontent-%COMP%] {\n  min-height: 80px;\n  background: url('loading.gif') center center no-repeat;\n}\n.product-gallery-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n.product-gallery-image.loading[_ngcontent-%COMP%] {\n  min-height: 200px;\n  background: url('loading.gif') center center no-repeat;\n}\n.product-detail.loading[_ngcontent-%COMP%] {\n  min-height: 200px;\n  background: url('loading.gif') center center no-repeat;\n}\n@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {\n  .product-gallery[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@supports (-ms-ime-align: auto) {\n  .product-gallery[_ngcontent-%COMP%]   .gallery-item[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcc2Nzc1xcaGVscGVyc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FBSko7QUFNSTtFQUNFLFdDNEhpQjtFRDNIakIsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFKTjtBQU1NO0VBQ0UsZ0JBQUE7QUFKUjtBQU9NO0VBQ0UsY0NHZ0I7QURSeEI7QUFZQTtFQUNFLGtCQUFBO0VBR0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFHRix5QkFBQTtFQUNBLGtCQ3VFbUI7QURwRnJCO0FBZUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWJKO0FBZUU7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQ3dEcUI7RUR2RHJCLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBYko7QUFlSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUFiTjtBQWVNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JDaURjO0VEaERkLGdCQUFBO0FBYlI7QUFnQk07RUFDRSxxQkMvQ2dCO0VEZ0RoQixlQUFBO0FBZFI7QUFvQkk7RUFDRSxnQkFBQTtFQUNBLHNEQUFBO0FBbEJOO0FBeUJFO0VBQ0UsZUFBQTtBQXRCSjtBQXlCRTtFQUNFLGlCQUFBO0VBQ0Esc0RBQUE7QUF2Qko7QUE2QkU7RUFDSSxpQkFBQTtFQUNBLHNEQUFBO0FBMUJOO0FBK0JBO0VBQ0U7SUFBaUMsd0JBQUE7RUEzQmpDO0FBQ0Y7QUE2QkE7RUFDRTtJQUFpQyx3QkFBQTtFQTFCakM7QUFDRiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zY3NzL2hlbHBlcnMvdmFyaWFibGVzJztcclxuQGltcG9ydCAnfnNjc3MvaGVscGVycy9taXhpbnMnO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4uc3AtYnV0dG9ucyB7XHJcbiAgLmJ0biB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG5cclxuICAgICYuYnRuLXdpc2hsaXN0IHtcclxuICAgICAgd2lkdGg6ICRidG4tc20taGVpZ2h0O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgICAgPiBpIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICRicmFuZC1kYW5nZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFByb2R1Y3QgR2FsbGVyeVxyXG4ucHJvZHVjdC1nYWxsZXJ5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIHBhZGRpbmc6IHtcclxuICAgIHRvcDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICB9XHJcblxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGc7XHJcblxyXG4gIC5wcm9kdWN0LWJhZGdlIHtcclxuICAgIHRvcDogMjVweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIC5wcm9kdWN0LXRodW1ibmFpbHMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAkZ3JpZC12ZXJ0aWNhbC1zdGVwOyAvL34yNHB4XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICA+IGxpIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW46IDAgM3B4IDEwcHg7XHJcblxyXG4gICAgICA+IGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA5NHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMjVzO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFjdGl2ZSA+IGEge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJyYW5kLXByaW1hcnk7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC10aHVtYm5haWwtaW1hZ2Uge1xyXG4gICAgJi5sb2FkaW5nIHtcclxuICAgICAgbWluLWhlaWdodDogODBweDtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9pbWcvbG9hZGluZy5naWYnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0LWdhbGxlcnktaW1hZ2Uge1xyXG5cclxuICBpbWcge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi5sb2FkaW5nIHtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9pbWcvbG9hZGluZy5naWYnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0LWRldGFpbCB7XHJcblxyXG4gICYubG9hZGluZyB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2ltZy9sb2FkaW5nLmdpZicpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gIH1cclxufVxyXG5cclxuLy8gSUUxMCsgc3BlY2lmaWMgc3R5bGVzXHJcbkBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSwgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcclxuICAucHJvZHVjdC1nYWxsZXJ5IC5nYWxsZXJ5LWl0ZW0geyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cclxufVxyXG4vLyBNaWNyb3NvZnQgRWRnZSBzcGVjaWZpYyBzdHlsZXNcclxuQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XHJcbiAgLnByb2R1Y3QtZ2FsbGVyeSAuZ2FsbGVyeS1pdGVtIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XHJcbn1cclxuIiwiLy9cclxuLy8gVmFyaWFibGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLz09IENvbG9yc1xyXG4vL1xyXG4vLyMjIEdyYXkgYW5kIGJyYW5kIGNvbG9ycyBmb3IgdXNlIGFjcm9zcyBUaGVtZS5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIEdyYXlzY2FsZVxyXG4kZ3JheS1kYXJrZXI6ICAgICAgICAgICAgIzM3NDI1MDtcclxuJGdyYXktZGFyazogICAgICAgICAgICBcdCAjNjA2OTc1O1xyXG4kZ3JheTogICAgICAgICAgICAgICAgICAgIzlkYTliOTtcclxuJGdyYXktbGlnaHQ6ICAgICAgICAgICAgICNlMWU3ZWM7XHJcbiRncmF5LWxpZ2h0ZXI6ICAgICAgICAgICAjZjVmNWY1O1xyXG4kd2hpdGUtY29sb3I6ICAgICAgICAgICAgI2ZmZmZmZjtcclxuJGJsYWNrLWNvbG9yOiAgICAgICAgICAgICMwMDAwMDA7XHJcblxyXG4vLyBCcmFuZCBjb2xvcnNcclxuJGJyYW5kLXByaW1hcnk6ICAgICAgICAgIzBkYTllZjtcclxuJGJyYW5kLWluZm86XHRcdCAgICAgICAgIzUwYzZlOTtcclxuJGJyYW5kLXN1Y2Nlc3M6ICAgICAgICAgIzQzZDlhMztcclxuJGJyYW5kLXdhcm5pbmc6ICAgICAgICAgI2ZmYjc0ZjtcclxuJGJyYW5kLWRhbmdlcjogICAgICAgICAgI2ZmNTI1MjtcclxuXHJcbi8vIEJvZHlcclxuJGJvZHktYmc6IFx0XHRcdFx0XHRcdFx0JHdoaXRlLWNvbG9yO1xyXG4kYm9keS1jb2xvcjogXHRcdFx0XHRcdFx0JGdyYXktZGFyaztcclxuXHJcbi8vIElubGluZSBsaW5rc1xyXG4kbGluay1jb2xvcjogXHRcdFx0XHRcdFx0JGJyYW5kLXByaW1hcnk7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiBcdFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuXHJcbi8vIEhlZGluZ3NcclxuJGhlYWRpbmdzLWNvbG9yOlx0IFx0XHRcdCRncmF5LWRhcmtlcjtcclxuXHJcbi8vIEJsb2NrcXVvdGVcclxuJHF1b3RlLXRleHQtY29sb3I6ICAgICAgJGJvZHktY29sb3I7XHJcbiRxdW90ZS1tYXJrLWNvbG9yOiAgICAgICRncmF5O1xyXG4kcXVvdGUtYXV0aG9yLWNvbG9yOiAgICAkZ3JheTtcclxuXHJcbi8vIEJvcmRlcnNcclxuJGJvcmRlci1jb2xvcjogICAgICAgICAgJGdyYXktbGlnaHQ7XHJcbiRib3JkZXItbGlnaHQtY29sb3I6ICAgIHJnYmEoJHdoaXRlLWNvbG9yLCAuMTIpO1xyXG5cclxuLy8gSGlnaGxpZ2h0IGNvbG9yXHJcbiRoaWdobGlnaHQtY29sb3I6ICAgICAgICNmZmY4YjA7XHJcblxyXG5cclxuLy89PSBUeXBvZ3JhcGh5XHJcbi8vXHJcbi8vIyMgRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRmb250LWZhbWlseS1iYXNlOiBcdFx0XHQgICdNYXZlbiBQcm8nLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktaGVhZGluZ3M6IFx0ICBpbmhlcml0O1xyXG5cclxuLy8gRm9udCBzaXplc1xyXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgIDE2cHg7XHJcbiRmb250LXNpemUtbGVhZDogICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuMTI1KSk7IC8vIH4xOHB4XHJcbiRmb250LXNpemUtc206IFx0XHRcdFx0ICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuODc1KSk7IC8vIH4xNHB4XHJcbiRmb250LXNpemUteHM6ICAgICAgICAgXHRcdGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuODEyNSkpOyAvLyB+MTNweFxyXG5cclxuLy8gSGVhZGluZ3NcclxuJGZvbnQtc2l6ZS1oMTogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMi4yNSkpOyAvLyB+MzZweFxyXG4kZm9udC1zaXplLWgyOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjg3NSkpOyAvLyB+MzBweFxyXG4kZm9udC1zaXplLWgzOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjUpKTsgLy8gfjI0cHhcclxuJGZvbnQtc2l6ZS1oNDogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkpOyAvLyB+MjBweFxyXG4kZm9udC1zaXplLWg1OiAgICAgICAgICAgICRmb250LXNpemUtbGVhZDsgLy8gfjE4cHhcclxuJGZvbnQtc2l6ZS1oNjogICAgICAgICAgICAkZm9udC1zaXplLWJhc2U7IC8vIH4xNnB4XHJcblxyXG4vLyBEaXNwbGF5IGhlYWRpbmdzXHJcbiRkaXNwbGF5LTE6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDQuNSkpOyAvLyB+NzJweFxyXG4kZGlzcGxheS0yOiAgICAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAzLjc1KSk7IC8vIH42MHB4XHJcbiRkaXNwbGF5LTM6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDMuMTI1KSk7IC8vIH41MHB4XHJcbiRkaXNwbGF5LTQ6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDIuNSkpOyAvLyB+NDBweFxyXG5cclxuLy8gRm9udCBzdHlsZXNcclxuJGZvbnQtc3R5bGUtYmFzZTogICAgICAgICBub3JtYWw7XHJcbiRmb250LXN0eWxlLWhlYWRpbmdzOiAgICAgbm9ybWFsO1xyXG5cclxuLy8gRm9udCB3ZWlnaHRzXHJcbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgIG5vcm1hbDtcclxuJGZvbnQtd2VpZ2h0LWhlYWRpbmdzOiAgICAgNTAwO1xyXG5cclxuLy8gVGV4dCB0cmFuc2Zvcm1zXHJcbiR0ZXh0LXRyYW5zZm9ybS1iYXNlOiAgICAgbm9uZTtcclxuJHRleHQtdHJhbnNmb3JtLWhlYWRpbmdzOiBub25lO1xyXG5cclxuLy8gTGluZSBoZWlnaHRzXHJcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAxLjU7XHJcbiRsaW5lLWhlaWdodC1oMTogICAgICAgICAxLjE1O1xyXG4kbGluZS1oZWlnaHQtaDI6ICAgICAgICAgMS4yO1xyXG4kbGluZS1oZWlnaHQtaDM6ICAgICAgICAgMS4yNTtcclxuJGxpbmUtaGVpZ2h0LWg0OiAgICAgICAgIDEuMztcclxuJGxpbmUtaGVpZ2h0LWg1OiAgICAgICAgIDEuMzU7XHJcbiRsaW5lLWhlaWdodC1oNjogICAgICAgICAxLjQ7XHJcbiRsaW5lLWhlaWdodC1kaXNwbGF5OiAgICAxLjE1O1xyXG5cclxuXHJcbi8vPT0gR3JpZCBWZXJ0aWNhbCBTdGVwXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRncmlkLXZlcnRpY2FsLXN0ZXA6ICAgICAyNHB4O1xyXG5cclxuXHJcbi8vPT0gQm9yZGVyIFJhZGl1c1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kYm9yZGVyLXJhZGl1cy1sZzogXHRcdDdweDtcclxuJGJvcmRlci1yYWRpdXMtYmFzZTogXHQ1cHg7XHJcbiRib3JkZXItcmFkaXVzLXNtOiBcdFx0M3B4O1xyXG5cclxuXHJcbi8vPT0gRm9ybXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGlucHV0LWhlaWdodC1sZzpcdFx0XHRcdFx0XHRcdDU0cHg7XHJcbiRpbnB1dC1oZWlnaHQ6XHRcdFx0XHRcdFx0XHRcdDQ0cHg7XHJcbiRpbnB1dC1oZWlnaHQtc206XHRcdFx0XHRcdFx0XHQzNnB4O1xyXG4kaW5wdXQtY29sb3ItcGxhY2Vob2xkZXI6ICAgICAkZ3JheTtcclxuXHJcblxyXG4vLz09IEJ1dHRvbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGJ0bi1mb250LXNpemU6IFx0XHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS1zbTtcclxuJGJ0bi1zbS1mb250LXNpemU6IFx0XHRcdFx0XHRcdCRmb250LXNpemUteHM7XHJcbiRidG4tdGV4dC10cmFuc2Zvcm06ICAgICAgICAgIHVwcGVyY2FzZTtcclxuJGJ0bi1mb250LXdlaWdodDogXHRcdFx0XHRcdFx0NTAwO1xyXG4kYnRuLXRleHQtY29sb3I6ICAgICAgICAgICAgICAkZ3JheS1kYXJrO1xyXG5cclxuJGJ0bi1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0XHRcdDQ0cHg7XHJcbiRidG4tbGctaGVpZ2h0OiBcdFx0XHRcdFx0XHRcdDU0cHg7XHJcbiRidG4tc20taGVpZ2h0OiBcdFx0XHRcdFx0XHRcdDM2cHg7XHJcblxyXG4kYnRuLW1hcmdpbjogICAgICAgICAgICAgICAgICBmbG9vcigkZ3JpZC12ZXJ0aWNhbC1zdGVwIC8gMik7IC8vfjEycHhcclxuJHNvY2lhbC1idG4tc2l6ZTogXHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS14cztcclxuXHJcblxyXG4vLz09IFRhYmxlc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kdGFibGUtYm9yZGVyLWNvbG9yOiBcdFx0XHRcdFx0JGJvcmRlci1jb2xvcjtcclxuJHRhYmxlLWNlbGwtcGFkZGluZzpcdFx0XHRcdFx0MTVweDtcclxuJHRhYmxlLWJnLWFjY2VudDogXHRcdFx0XHRcdFx0JGdyYXktbGlnaHRlcjtcclxuXHJcblxyXG4vLz09IE5hdmJhciAvIExvZ29cclxuLy9cclxuXHJcbiRuYXZiYXItbWluLWhlaWdodDogXHRcdFx0ODRweDtcclxuJG5hdmJhci1zdHVjay1zaGFkb3c6ICAgICAwIDNweCAyNXB4IDAgcmdiYShkYXJrZW4oJGdyYXktZGFya2VyLCA0JSksIC4yMik7XHJcbiRsb2dvLXdpZHRoOiBcdFx0XHRcdCAgICAgIDEyOXB4O1xyXG5cclxuLy8gTmF2YmFyIFRvb2xzXHJcbiRuYXZiYXItdG9vbHMtY29sb3I6ICAgICAgICAgICRncmF5LWRhcms7XHJcbiRuYXZiYXItdG9vbHMtc2l6ZTogICAgICAgICAgICRidG4taGVpZ2h0O1xyXG4kb2ZmY2FudmFzLXRvZ2dsZS1pY29uLXNpemU6ICAyMHB4O1xyXG4kdG9vbHMtaWNvbi1zaXplOiAgICAgICAgICAgICAxN3B4O1xyXG5cclxuXHJcbi8vPT0gTmF2aWdhdGlvblxyXG4vL1xyXG5cclxuJG5hdi1saW5rLWZvbnQtc2l6ZTogXHRcdFx0XHQkZm9udC1zaXplLXNtOyAvLyAxNHB4XHJcbiRuYXYtbGluay1mb250LXdlaWdodDogXHRcdFx0NTAwO1xyXG4kbmF2LWxpbmstY29sb3I6IFx0XHRcdFx0XHRcdCRncmF5LWRhcms7XHJcbiRuYXYtbGluay1ob3Zlci1jb2xvcjogXHRcdFx0JGJyYW5kLXByaW1hcnk7XHJcbiRuYXYtbGluay1hY3RpdmUtY29sb3I6IFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuXHJcbi8vIFN1YiBNZW51IC8gTWVnYSBNZW51XHJcbiRzdWItbWVudS13aWR0aDogICAgICAgICAgICAyMDBweDtcclxuJHN1Yi1tZW51LXNoYWRvdzogICAgICAgICAgIDAgN3B4IDIycHggLTVweCByZ2JhKGRhcmtlbigkZ3JheS1kYXJrZXIsIDQlKSwgLjIpO1xyXG5cclxuLy8gT2ZmLUNhbnZhc1xyXG4kb2ZmY2FudmFzLXdpZHRoOiAgICAgICAgICAgMjkwcHg7XHJcblxyXG5cclxuLy89PSBUYWJzXHJcbi8vXHJcblxyXG4kbmF2LXRhYnMtZm9udC1zaXplOlx0XHRcdFx0XHRcdFx0XHRmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogLjg3NSkpOyAvLyB+MTRweFxyXG4kbmF2LXRhYnMtbGluay1jb2xvcjogXHRcdFx0XHRcdFx0XHQkZ3JheTtcclxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAgXHRcdFx0JGdyYXktZGFyaztcclxuXHJcblxyXG4vLz09IFByb2dyZXNzXHJcbi8vXHJcblxyXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgMThweDtcclxuJHByb2dyZXNzLWJnOiAgICAgICAgICRicmFuZC1wcmltYXJ5O1xyXG5cclxuXHJcbi8vPT0gU3RlcHNcclxuLy9cclxuXHJcbiRzdGVwLWNpcmNsZS1zaXplOiAgICAgICAgODBweDtcclxuJHN0ZXAtaWNvbi1kZWZhdWx0LWJnOiAgICAkZ3JheS1saWdodGVyO1xyXG4kc3RlcC1pY29uLXNpemU6ICAgICAgICAgIDM4cHg7XHJcbiRzdGVwLWljb24tZGVmYXVsdC1jb2xvcjogJGdyYXktZGFya2VyO1xyXG4kc3RlcC10aXRsZS1zaXplOiAgICAgICAgICRmb250LXNpemUtc207XHJcbiRzdGVwLXRpdGxlLWNvbG9yOiAgICAgICAgJGdyYXktZGFyaztcclxuJHN0ZXAtY29ubmVjdC1oZWlnaHQ6ICAgICAzcHg7XHJcblxyXG5cclxuLy8gPT0gU2hvcFxyXG4vL1xyXG5cclxuLy8gUHJvZHVjdFxyXG4kcHJvZHVjdC10aXRsZS1mb250LXNpemU6ICAgICAkZm9udC1zaXplLWJhc2U7XHJcbiRwcm9kdWN0LXRpdGxlLWNvbG9yOiAgICAgICAgICRncmF5LWRhcmtlcjtcclxuJHByb2R1Y3QtdGl0bGUtaG92ZXItY29sb3I6ICAgJGJyYW5kLXByaW1hcnk7XHJcbiRwcm9kdWN0LXByaWNlLWZvbnQtc2l6ZTogICAgICRmb250LXNpemUtYmFzZTtcclxuJHByb2R1Y3QtcHJpY2UtY29sb3I6ICAgICAgICAgJGdyYXktZGFyaztcclxuXHJcbi8vIFNob3AgVmlld1xyXG4kc2hvcC12aWV3LXNpemU6ICAgICAgICAgICAgNDNweDtcclxuJHNob3Atdmlldy1jb2xvcjogICAgICAgICAgICRncmF5LWRhcms7XHJcbiRzaG9wLXZpZXctYmctY29sb3I6ICAgICAgICAkd2hpdGUtY29sb3I7XHJcbiRzaG9wLXZpZXctaG92ZXItYmctY29sb3I6ICAkZ3JheS1saWdodGVyO1xyXG4kc2hvcC12aWV3LWFjdGl2ZS1iZy1jb2xvcjogJGJyYW5kLXByaW1hcnk7XHJcblxyXG4vLyBDYXJ0XHJcbiRjYXJ0LXRodW1iLXNpemU6ICAgICAgICAgMTEwcHg7XHJcblxyXG4vLyBBY2NvdW50XHJcbiRjb3Zlci1oZWlnaHQ6ICAgICAgICAgICAgMTIwcHg7XHJcbiR1c2VyLWF2YS1zaXplOiAgICAgICAgICAgMTE1cHg7XHJcblxyXG5cclxuLy8gPT0gQmxvZ1xyXG4vL1xyXG5cclxuJGJsb2ctcG9zdC1tZXRhLWNvbG9yOiAgICAgICRncmF5LWRhcms7XHJcbiRibG9nLXBvc3QtbWV0YS1pY29uLWNvbG9yOiAkZ3JheTtcclxuJGJsb2ctcG9zdC1tZXRhLWZvbnQtc2l6ZTogICRmb250LXNpemUteHM7XHJcbiRibG9nLXBvc3QtY29sb3I6ICAgICAgICAgICAkaGVhZGluZ3MtY29sb3I7XHJcbiRibG9nLXBvc3QtaG92ZXItY29sb3I6ICAgICAkYnJhbmQtcHJpbWFyeTtcclxuXHJcblxyXG4vLyA9PSBDb21tZW50c1xyXG4vL1xyXG5cclxuJGNvbW1lbnQtYXV0aG9yLWF2YS1zaXplOiAgIDUwcHg7XHJcbiRjb21tZW50LXRpdGxlLXNpemU6ICAgICAgICAkZm9udC1zaXplLXNtO1xyXG4kY29tbWVudC10aXRsZS13ZWlnaHQ6ICAgICAgNTAwO1xyXG5cclxuXHJcbi8vPT0gV2lkZ2V0c1xyXG4vL1xyXG5cclxuJHNpZGViYXItbWF4LXdpZHRoOiAgICAgICAgICA0MDBweDtcclxuJHNpZGViYXItb2ZmY2FudmFzLXdpZHRoOiAgICAzMjBweDtcclxuJHdpZGdldC10aXRsZS1jb2xvcjogICAgICAgICAkZ3JheTtcclxuJHdpZGdldC10aXRsZS1mb250LXNpemU6ICAgICAkZm9udC1zaXplLXNtO1xyXG4kd2lkZ2V0LWxpbmstZm9udC1zaXplOiAgICAgICRmb250LXNpemUtc207XHJcbiR3aWRnZXQtbWV0YS1jb2xvcjogICAgICAgICAgJGdyYXk7XHJcbiR3aWRnZXQtbWV0YS1mb250LXNpemU6ICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAvIDEuMzMpKTsgLy9+MTJweFxyXG4kd2lkZ2V0LWVudHJ5LXRodW1iLXNpemU6ICAgIDUwcHg7XHJcblxyXG4vLyBUYWdzXHJcbiR3aWRnZXQtdGFncy1oZWlnaHQ6ICAgICAgICAgICAgICAyOHB4O1xyXG4kd2lkZ2V0LXRhZ3MtZm9udC1zaXplOiAgICAgICAgICAgJGZvbnQtc2l6ZS14cztcclxuJHdpZGdldC10YWdzLWNvbG9yOiAgICAgICAgICAgICAgICRuYXYtbGluay1jb2xvcjtcclxuJHdpZGdldC10YWdzLWhvdmVyLWJnOiAgICAgICAgICAgICRncmF5LWxpZ2h0ZXI7XHJcbiR3aWRnZXQtdGFncy1hY3RpdmUtYmc6ICAgICAgICAgICAkbmF2LWxpbmstYWN0aXZlLWNvbG9yO1xyXG4kd2lkZ2V0LXRhZ3MtYWN0aXZlLWJvcmRlci1jb2xvcjogJG5hdi1saW5rLWFjdGl2ZS1jb2xvcjtcclxuJHdpZGdldC10YWdzLWFjdGl2ZS1jb2xvcjogICAgICAgICR3aGl0ZS1jb2xvcjtcclxuXHJcblxyXG4vLz09IFBhZ2luYXRpb25cclxuLy9cclxuXHJcbiRwYWdpbmF0aW9uLWxpbmstc2l6ZTogICAgICAgICAkYnRuLXNtLWhlaWdodDtcclxuJHBhZ2luYXRpb24tbGluay1mb250LXNpemU6ICAgICRmb250LXNpemUtc207XHJcbiRwYWdpbmF0aW9uLWxpbmstZm9udC13ZWlnaHQ6ICA1MDA7XHJcbiRwYWdpbmF0aW9uLWxpbmstY29sb3I6ICAgICAgICAkZ3JheS1kYXJrO1xyXG4kcGFnaW5hdGlvbi1saW5rLWFjdGl2ZS1jb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4kcGFnaW5hdGlvbi1saW5rLWhvdmVyLWJnOiAgICAgJGdyYXktbGlnaHRlcjtcclxuJHBhZ2luYXRpb24tbGluay1hY3RpdmUtYmc6ICAgICRicmFuZC1wcmltYXJ5O1xyXG5cclxuXHJcbi8vPT0gVG9vbHRpcHNcclxuLy9cclxuXHJcbiR0b29sdGlwLW9wYWNpdHk6ICAgIFx0XHQxO1xyXG4kdG9vbHRpcC1iZzogXHRcdFx0XHQgXHRcdGRhcmtlbigkZ3JheS1kYXJrZXIsIDQlKTtcclxuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogXHQkdG9vbHRpcC1iZztcclxuXHJcblxyXG4vLz09IENhcm91c2VsXHJcbi8vXHJcblxyXG4kY2Fyb3VzZWwtbmF2cy1zaXplOiBcdFx0XHRcdCAgJGJ0bi1oZWlnaHQ7XHJcbiRjYXJvdXNlbC1uYXZzLWljb24tc2l6ZTogXHQgIDE5cHg7XHJcbiRjYXJvdXNlbC1uYXZzLWJnOiAgICAgICAgICAgICR3aGl0ZS1jb2xvcjtcclxuJGNhcm91c2VsLW5hdnMtY29sb3I6IFx0XHRcdCAgJGdyYXktZGFya2VyO1xyXG4kY2Fyb3VzZWwtZG90cy1zaXplOiBcdFx0XHRcdCAgNnB4O1xyXG4kY2Fyb3VzZWwtZG90cy1jb2xvcjogXHQgIFx0ICAkZ3JheS1kYXJrO1xyXG5cclxuLy8gSGVybyBTbGlkZXJcclxuJGhlcm8tc2xpZGVyLW1pbi1oZWlnaHQ6ICAgICAgNTgwcHg7XHJcblxyXG4vLz09IENvdW50ZG93blxyXG4vL1xyXG5cclxuJGNvdW50ZG93bi1ib3gtc2l6ZTogICAgICAgICAgNDhweDtcclxuJGNvdW50ZG93bi1mb250LXNpemU6ICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuMzc1KSk7IC8vIH4yMnB4XHJcbiRjb3VudGRvd24tbGFiZWwtc2l6ZTogICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuNzUpKTsgLy8gfjEycHhcclxuXHJcblxyXG4vLz09IE1lZGlhIHF1ZXJpZXMgKHJlc3BvbnNpdmUgYnJlYWNrcG9pbnRzKVxyXG4vLyMjIERlc2NrdG9wLCBUYWJsZXQsIE1vYmlsZVxyXG5cclxuJHNjcmVlbi14bDogMTIwMHB4O1xyXG4kc2NyZWVuLWxnOiA5OTFweDtcclxuJHNjcmVlbi1tZDogNzY4cHg7XHJcbiRzY3JlZW4tc206IDU3NnB4O1xyXG4kc2NyZWVuLXhzOiAzNjBweDtcclxuXHJcbiRuYXYtY29sbGFwc2U6ICAgICAxMDcwcHg7XHJcbiJdfQ== */"] });


/***/ }),

/***/ 274:
/*!*****************************************************************************!*\
  !*** ./src/app/products/products-list-item/products-list-item.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsListItemComponent": () => (/* binding */ ProductsListItemComponent)
/* harmony export */ });
/* harmony import */ var _models_cart_item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/cart-item.model */ 1195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cart/shared/cart.service */ 8085);
/* harmony import */ var _account_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../account/shared/auth.service */ 1544);
/* harmony import */ var _shared_price_price_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/price/price.component */ 6422);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/rating-stars/rating-stars.component */ 1397);








function ProductsListItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.product.reduction, "% Off");
} }
function ProductsListItemComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.product.description);
} }
function ProductsListItemComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/admin/edit/", ctx_r2.product.id, "");
} }
const _c0 = function (a0) { return { "product-list": a0 }; };
const _c1 = function (a0) { return { "loading": a0 }; };
class ProductsListItemComponent {
    constructor(cartService, authService) {
        this.cartService = cartService;
        this.authService = authService;
    }
    ngOnInit() {
        this.imageLoading = true;
        this.userSubscription = this.authService.user.subscribe((user) => {
            this.user = user;
        });
    }
    onAddToCart() {
        this.cartService.addItem(new _models_cart_item_model__WEBPACK_IMPORTED_MODULE_0__.CartItem(this.product, 1));
    }
    onImageLoad() {
        this.imageLoading = false;
    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
}
ProductsListItemComponent.ɵfac = function ProductsListItemComponent_Factory(t) { return new (t || ProductsListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_account_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
ProductsListItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProductsListItemComponent, selectors: [["app-products-list-item"]], inputs: { product: "product", displayMode: "displayMode" }, decls: 17, vars: 17, consts: [[1, "product-card", 3, "ngClass"], ["class", "product-badge text-danger", 4, "ngIf"], [1, "product-rating"], [3, "rating"], [1, "product-thumb", 3, "ngClass", "routerLink"], [3, "hidden", "src", "alt", "load"], [1, "product-info"], [1, "product-title"], [3, "routerLink"], [1, "product-price"], [3, "product"], ["class", "hidden-xs-down", 4, "ngIf"], [1, "product-buttons"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["class", "btn btn-primary btn-sm", 3, "routerLink", 4, "ngIf"], [1, "product-badge", "text-danger"], [1, "hidden-xs-down"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"]], template: function ProductsListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProductsListItemComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-rating-stars", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 4)(5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("load", function ProductsListItemComponent_Template_img_load_5_listener() { return ctx.onImageLoad(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6)(7, "h3", 7)(8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "app-price", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ProductsListItemComponent_p_12_Template, 2, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 12)(14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductsListItemComponent_Template_button_click_14_listener() { return ctx.onAddToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ProductsListItemComponent_button_16_Template, 2, 1, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](13, _c0, ctx.displayMode === "list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.product.reduction);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rating", ctx.product.currentRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", ctx.product.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c1, ctx.imageLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx.product.imageURLs[0], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.imageLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/products/", ctx.product.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("product", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.displayMode === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.user && ctx.user.roles.admin);
    } }, dependencies: [_shared_price_price_component__WEBPACK_IMPORTED_MODULE_3__.PriceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _shared_rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_4__.RatingStarsComponent], styles: [".product-card[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  padding: 18px;\n  border: 1px solid #e1e7ec;\n  border-radius: 7px;\n  background-color: #ffffff;\n  margin-bottom: 20px;\n}\n.product-card[_ngcontent-%COMP%]   .product-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 15px;\n  left: 20px;\n  z-index: 1;\n}\n.product-card[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.product-card[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.product-card[_ngcontent-%COMP%]   .product-thumb.loading[_ngcontent-%COMP%] {\n  min-height: 150px;\n  background: url('loading.gif') center center no-repeat;\n}\n.product-card[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 16px;\n  font-weight: normal;\n  text-align: center;\n}\n.product-card[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  transition: color 0.3s;\n  color: #374250;\n  text-decoration: none;\n}\n.product-card[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #0da9ef;\n}\n.product-card[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: #606975;\n  font-size: 16px;\n  font-weight: 500;\n  text-align: center;\n}\n.product-card[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]    > del[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: #9da9b9;\n}\n.product-card[_ngcontent-%COMP%]   .product-buttons[_ngcontent-%COMP%] {\n  padding: 12px 0 8px;\n  text-align: center;\n}\n.product-card[_ngcontent-%COMP%]   .product-buttons[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  margin: 0 4px;\n}\n.product-card[_ngcontent-%COMP%]   .product-buttons[_ngcontent-%COMP%]    > .btn.btn-wishlist[_ngcontent-%COMP%] {\n  width: 36px;\n  padding: 0;\n  padding-left: 1px;\n  border-radius: 50%;\n}\n.product-card[_ngcontent-%COMP%]   .product-buttons[_ngcontent-%COMP%]    > .btn.btn-wishlist[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.product-card[_ngcontent-%COMP%]   .product-buttons[_ngcontent-%COMP%]    > .btn.btn-wishlist.active[_ngcontent-%COMP%] {\n  color: #ff5252;\n}\n.product-card.product-list[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n@media (min-width: 576px) {\n  .product-card.product-list[_ngcontent-%COMP%] {\n    display: table;\n    width: 100%;\n    padding: 0;\n  }\n  .product-card.product-list[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%], .product-card.product-list[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n  .product-card.product-list[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%] {\n    position: relative;\n    width: 270px;\n    padding: 20px 18px;\n    border-right: 1px solid #e1e7ec;\n  }\n  .product-card.product-list[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n    padding: 20px 22px;\n  }\n  .product-card.product-list[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%], .product-card.product-list[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%], .product-card.product-list[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-buttons[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .product-card.product-list[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-buttons[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 0;\n    border-top: 1px solid #e1e7ec;\n  }\n  .product-card.product-list[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-buttons[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n    margin: 0;\n    margin-right: 8px;\n  }\n  .product-card.product-list[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n[_nghost-%COMP%]     .rating-stars {\n  position: absolute;\n  top: 15px;\n  right: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXHNjc3NcXGhlbHBlcnNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkNvR21CO0VEbkduQix5QkNLdUI7RURKdkIsbUJBQUE7QUFGRjtBQUlFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUZKO0FBS0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFISjtBQUtJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFITjtBQU1JO0VBQ0UsaUJBQUE7RUFDQSxzREFBQTtBQUpOO0FBUUU7RUFDRSxtQkFBQTtFQUdFLGVDZ0JvQjtFRGZwQixtQkFBQTtFQUVGLGtCQUFBO0FBVEo7QUFXSTtFQUNFLHNCQUFBO0VBQ0EsY0N2Q21CO0VEd0NuQixxQkFBQTtBQVROO0FBV007RUFDRSxjQ2xDZ0I7QUR5QnhCO0FBY0U7RUFDRSxtQkFBQTtFQUNBLGNDakRxQjtFRG9EbkIsZUNMb0I7RURNcEIsZ0JBQUE7RUFFRixrQkFBQTtBQWZKO0FBaUJJO0VBQ0UsaUJBQUE7RUFDQSxjQzFEbUI7QUQyQ3pCO0FBbUJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQWpCSjtBQW1CSTtFQUNFLGFBQUE7QUFqQk47QUFtQk07RUFDRSxXQ29EZTtFRG5EZixVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWpCUjtBQW1CUTtFQUNFLGdCQUFBO0FBakJWO0FBb0JRO0VBQVcsY0NwRUs7QURtRHhCO0FBc0JFO0VBQ0UsbUJBQUE7QUFwQko7QUF1QkU7RUFFRTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFQXRCSjtFQXdCSTs7SUFFRSxtQkFBQTtJQUNBLHNCQUFBO0VBdEJOO0VBd0JJO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSwrQkFBQTtFQXRCTjtFQXlCSTtJQUNFLGtCQUFBO0VBdkJOO0VBeUJNOzs7SUFHRSxnQkFBQTtFQXZCUjtFQTBCTTtJQUdJLGlCQUFBO0lBQ0EsaUJBQUE7SUFFRiw2QkFBQTtFQTNCUjtFQTZCUTtJQUNFLFNBQUE7SUFDQSxpQkFBQTtFQTNCVjtFQWdDSTtJQUNFLGVDckZrQjtFRHVEeEI7QUFDRjtBQW9DQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFqQ0YiLCJmaWxlIjoicHJvZHVjdHMtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNjc3MvaGVscGVycy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICd+c2Nzcy9oZWxwZXJzL21peGlucyc7XHJcblxyXG4ucHJvZHVjdC1jYXJkIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMThweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWxnO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAucHJvZHVjdC1iYWRnZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LXRodW1iIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICA+IGltZyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmLmxvYWRpbmcge1xyXG4gICAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2ltZy9sb2FkaW5nLmdpZikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIGZvbnQ6IHtcclxuICAgICAgc2l6ZTogJHByb2R1Y3QtdGl0bGUtZm9udC1zaXplO1xyXG4gICAgICB3ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICA+IGEge1xyXG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3M7XHJcbiAgICAgIGNvbG9yOiAkcHJvZHVjdC10aXRsZS1jb2xvcjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRwcm9kdWN0LXRpdGxlLWhvdmVyLWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1wcmljZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6ICRwcm9kdWN0LXByaWNlLWNvbG9yO1xyXG5cclxuICAgIGZvbnQ6IHtcclxuICAgICAgc2l6ZTogJHByb2R1Y3QtcHJpY2UtZm9udC1zaXplO1xyXG4gICAgICB3ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICA+IGRlbCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICBjb2xvcjogJGdyYXk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1idXR0b25zIHtcclxuICAgIHBhZGRpbmc6IDEycHggMCA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgPiAuYnRuIHtcclxuICAgICAgbWFyZ2luOiAwIDRweDtcclxuXHJcbiAgICAgICYuYnRuLXdpc2hsaXN0IHtcclxuICAgICAgICB3aWR0aDogJGJ0bi1zbS1oZWlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgICAgID4gaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY3RpdmUgeyBjb2xvcjogJGJyYW5kLWRhbmdlcjsgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnByb2R1Y3QtbGlzdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20pIHtcclxuXHJcbiAgICAmLnByb2R1Y3QtbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgIC5wcm9kdWN0LXRodW1iLFxyXG4gICAgICAucHJvZHVjdC1pbmZvIHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIH1cclxuICAgICAgLnByb2R1Y3QtdGh1bWIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMjcwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAxOHB4O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wcm9kdWN0LWluZm8ge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjJweDtcclxuXHJcbiAgICAgICAgLnByb2R1Y3QtdGl0bGUsXHJcbiAgICAgICAgLnByb2R1Y3QtcHJpY2UsXHJcbiAgICAgICAgLnByb2R1Y3QtYnV0dG9ucyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2R1Y3QtYnV0dG9ucyB7XHJcblxyXG4gICAgICAgICAgcGFkZGluZzoge1xyXG4gICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG5cclxuICAgICAgICAgID4gLmJ0biB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLWxlYWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnJhdGluZy1zdGFycyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICByaWdodDogMThweDtcclxufVxyXG4iLCIvL1xyXG4vLyBWYXJpYWJsZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vPT0gQ29sb3JzXHJcbi8vXHJcbi8vIyMgR3JheSBhbmQgYnJhbmQgY29sb3JzIGZvciB1c2UgYWNyb3NzIFRoZW1lLlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gR3JheXNjYWxlXHJcbiRncmF5LWRhcmtlcjogICAgICAgICAgICAjMzc0MjUwO1xyXG4kZ3JheS1kYXJrOiAgICAgICAgICAgIFx0ICM2MDY5NzU7XHJcbiRncmF5OiAgICAgICAgICAgICAgICAgICAjOWRhOWI5O1xyXG4kZ3JheS1saWdodDogICAgICAgICAgICAgI2UxZTdlYztcclxuJGdyYXktbGlnaHRlcjogICAgICAgICAgICNmNWY1ZjU7XHJcbiR3aGl0ZS1jb2xvcjogICAgICAgICAgICAjZmZmZmZmO1xyXG4kYmxhY2stY29sb3I6ICAgICAgICAgICAgIzAwMDAwMDtcclxuXHJcbi8vIEJyYW5kIGNvbG9yc1xyXG4kYnJhbmQtcHJpbWFyeTogICAgICAgICAjMGRhOWVmO1xyXG4kYnJhbmQtaW5mbzpcdFx0ICAgICAgICAjNTBjNmU5O1xyXG4kYnJhbmQtc3VjY2VzczogICAgICAgICAjNDNkOWEzO1xyXG4kYnJhbmQtd2FybmluZzogICAgICAgICAjZmZiNzRmO1xyXG4kYnJhbmQtZGFuZ2VyOiAgICAgICAgICAjZmY1MjUyO1xyXG5cclxuLy8gQm9keVxyXG4kYm9keS1iZzogXHRcdFx0XHRcdFx0XHQkd2hpdGUtY29sb3I7XHJcbiRib2R5LWNvbG9yOiBcdFx0XHRcdFx0XHQkZ3JheS1kYXJrO1xyXG5cclxuLy8gSW5saW5lIGxpbmtzXHJcbiRsaW5rLWNvbG9yOiBcdFx0XHRcdFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuJGxpbmstaG92ZXItY29sb3I6IFx0XHRcdCRicmFuZC1wcmltYXJ5O1xyXG5cclxuLy8gSGVkaW5nc1xyXG4kaGVhZGluZ3MtY29sb3I6XHQgXHRcdFx0JGdyYXktZGFya2VyO1xyXG5cclxuLy8gQmxvY2txdW90ZVxyXG4kcXVvdGUtdGV4dC1jb2xvcjogICAgICAkYm9keS1jb2xvcjtcclxuJHF1b3RlLW1hcmstY29sb3I6ICAgICAgJGdyYXk7XHJcbiRxdW90ZS1hdXRob3ItY29sb3I6ICAgICRncmF5O1xyXG5cclxuLy8gQm9yZGVyc1xyXG4kYm9yZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS1saWdodDtcclxuJGJvcmRlci1saWdodC1jb2xvcjogICAgcmdiYSgkd2hpdGUtY29sb3IsIC4xMik7XHJcblxyXG4vLyBIaWdobGlnaHQgY29sb3JcclxuJGhpZ2hsaWdodC1jb2xvcjogICAgICAgI2ZmZjhiMDtcclxuXHJcblxyXG4vLz09IFR5cG9ncmFwaHlcclxuLy9cclxuLy8jIyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGZvbnQtZmFtaWx5LWJhc2U6IFx0XHRcdCAgJ01hdmVuIFBybycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1oZWFkaW5nczogXHQgIGluaGVyaXQ7XHJcblxyXG4vLyBGb250IHNpemVzXHJcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgMTZweDtcclxuJGZvbnQtc2l6ZS1sZWFkOiAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4xMjUpKTsgLy8gfjE4cHhcclxuJGZvbnQtc2l6ZS1zbTogXHRcdFx0XHQgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC44NzUpKTsgLy8gfjE0cHhcclxuJGZvbnQtc2l6ZS14czogICAgICAgICBcdFx0Zmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC44MTI1KSk7IC8vIH4xM3B4XHJcblxyXG4vLyBIZWFkaW5nc1xyXG4kZm9udC1zaXplLWgxOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAyLjI1KSk7IC8vIH4zNnB4XHJcbiRmb250LXNpemUtaDI6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuODc1KSk7IC8vIH4zMHB4XHJcbiRmb250LXNpemUtaDM6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuNSkpOyAvLyB+MjRweFxyXG4kZm9udC1zaXplLWg0OiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSk7IC8vIH4yMHB4XHJcbiRmb250LXNpemUtaDU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZWFkOyAvLyB+MThweFxyXG4kZm9udC1zaXplLWg2OiAgICAgICAgICAgICRmb250LXNpemUtYmFzZTsgLy8gfjE2cHhcclxuXHJcbi8vIERpc3BsYXkgaGVhZGluZ3NcclxuJGRpc3BsYXktMTogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogNC41KSk7IC8vIH43MnB4XHJcbiRkaXNwbGF5LTI6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDMuNzUpKTsgLy8gfjYwcHhcclxuJGRpc3BsYXktMzogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMy4xMjUpKTsgLy8gfjUwcHhcclxuJGRpc3BsYXktNDogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMi41KSk7IC8vIH40MHB4XHJcblxyXG4vLyBGb250IHN0eWxlc1xyXG4kZm9udC1zdHlsZS1iYXNlOiAgICAgICAgIG5vcm1hbDtcclxuJGZvbnQtc3R5bGUtaGVhZGluZ3M6ICAgICBub3JtYWw7XHJcblxyXG4vLyBGb250IHdlaWdodHNcclxuJGZvbnQtd2VpZ2h0LWJhc2U6ICAgICAgICAgbm9ybWFsO1xyXG4kZm9udC13ZWlnaHQtaGVhZGluZ3M6ICAgICA1MDA7XHJcblxyXG4vLyBUZXh0IHRyYW5zZm9ybXNcclxuJHRleHQtdHJhbnNmb3JtLWJhc2U6ICAgICBub25lO1xyXG4kdGV4dC10cmFuc2Zvcm0taGVhZGluZ3M6IG5vbmU7XHJcblxyXG4vLyBMaW5lIGhlaWdodHNcclxuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgIDEuNTtcclxuJGxpbmUtaGVpZ2h0LWgxOiAgICAgICAgIDEuMTU7XHJcbiRsaW5lLWhlaWdodC1oMjogICAgICAgICAxLjI7XHJcbiRsaW5lLWhlaWdodC1oMzogICAgICAgICAxLjI1O1xyXG4kbGluZS1oZWlnaHQtaDQ6ICAgICAgICAgMS4zO1xyXG4kbGluZS1oZWlnaHQtaDU6ICAgICAgICAgMS4zNTtcclxuJGxpbmUtaGVpZ2h0LWg2OiAgICAgICAgIDEuNDtcclxuJGxpbmUtaGVpZ2h0LWRpc3BsYXk6ICAgIDEuMTU7XHJcblxyXG5cclxuLy89PSBHcmlkIFZlcnRpY2FsIFN0ZXBcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGdyaWQtdmVydGljYWwtc3RlcDogICAgIDI0cHg7XHJcblxyXG5cclxuLy89PSBCb3JkZXIgUmFkaXVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRib3JkZXItcmFkaXVzLWxnOiBcdFx0N3B4O1xyXG4kYm9yZGVyLXJhZGl1cy1iYXNlOiBcdDVweDtcclxuJGJvcmRlci1yYWRpdXMtc206IFx0XHQzcHg7XHJcblxyXG5cclxuLy89PSBGb3Jtc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kaW5wdXQtaGVpZ2h0LWxnOlx0XHRcdFx0XHRcdFx0NTRweDtcclxuJGlucHV0LWhlaWdodDpcdFx0XHRcdFx0XHRcdFx0NDRweDtcclxuJGlucHV0LWhlaWdodC1zbTpcdFx0XHRcdFx0XHRcdDM2cHg7XHJcbiRpbnB1dC1jb2xvci1wbGFjZWhvbGRlcjogICAgICRncmF5O1xyXG5cclxuXHJcbi8vPT0gQnV0dG9uc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kYnRuLWZvbnQtc2l6ZTogXHRcdFx0XHRcdFx0XHQkZm9udC1zaXplLXNtO1xyXG4kYnRuLXNtLWZvbnQtc2l6ZTogXHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS14cztcclxuJGJ0bi10ZXh0LXRyYW5zZm9ybTogICAgICAgICAgdXBwZXJjYXNlO1xyXG4kYnRuLWZvbnQtd2VpZ2h0OiBcdFx0XHRcdFx0XHQ1MDA7XHJcbiRidG4tdGV4dC1jb2xvcjogICAgICAgICAgICAgICRncmF5LWRhcms7XHJcblxyXG4kYnRuLWhlaWdodDogXHRcdFx0XHRcdFx0XHRcdFx0NDRweDtcclxuJGJ0bi1sZy1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0NTRweDtcclxuJGJ0bi1zbS1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0MzZweDtcclxuXHJcbiRidG4tbWFyZ2luOiAgICAgICAgICAgICAgICAgIGZsb29yKCRncmlkLXZlcnRpY2FsLXN0ZXAgLyAyKTsgLy9+MTJweFxyXG4kc29jaWFsLWJ0bi1zaXplOiBcdFx0XHRcdFx0XHQkZm9udC1zaXplLXhzO1xyXG5cclxuXHJcbi8vPT0gVGFibGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiR0YWJsZS1ib3JkZXItY29sb3I6IFx0XHRcdFx0XHQkYm9yZGVyLWNvbG9yO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nOlx0XHRcdFx0XHQxNXB4O1xyXG4kdGFibGUtYmctYWNjZW50OiBcdFx0XHRcdFx0XHQkZ3JheS1saWdodGVyO1xyXG5cclxuXHJcbi8vPT0gTmF2YmFyIC8gTG9nb1xyXG4vL1xyXG5cclxuJG5hdmJhci1taW4taGVpZ2h0OiBcdFx0XHQ4NHB4O1xyXG4kbmF2YmFyLXN0dWNrLXNoYWRvdzogICAgIDAgM3B4IDI1cHggMCByZ2JhKGRhcmtlbigkZ3JheS1kYXJrZXIsIDQlKSwgLjIyKTtcclxuJGxvZ28td2lkdGg6IFx0XHRcdFx0ICAgICAgMTI5cHg7XHJcblxyXG4vLyBOYXZiYXIgVG9vbHNcclxuJG5hdmJhci10b29scy1jb2xvcjogICAgICAgICAgJGdyYXktZGFyaztcclxuJG5hdmJhci10b29scy1zaXplOiAgICAgICAgICAgJGJ0bi1oZWlnaHQ7XHJcbiRvZmZjYW52YXMtdG9nZ2xlLWljb24tc2l6ZTogIDIwcHg7XHJcbiR0b29scy1pY29uLXNpemU6ICAgICAgICAgICAgIDE3cHg7XHJcblxyXG5cclxuLy89PSBOYXZpZ2F0aW9uXHJcbi8vXHJcblxyXG4kbmF2LWxpbmstZm9udC1zaXplOiBcdFx0XHRcdCRmb250LXNpemUtc207IC8vIDE0cHhcclxuJG5hdi1saW5rLWZvbnQtd2VpZ2h0OiBcdFx0XHQ1MDA7XHJcbiRuYXYtbGluay1jb2xvcjogXHRcdFx0XHRcdFx0JGdyYXktZGFyaztcclxuJG5hdi1saW5rLWhvdmVyLWNvbG9yOiBcdFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuJG5hdi1saW5rLWFjdGl2ZS1jb2xvcjogXHRcdCRicmFuZC1wcmltYXJ5O1xyXG5cclxuLy8gU3ViIE1lbnUgLyBNZWdhIE1lbnVcclxuJHN1Yi1tZW51LXdpZHRoOiAgICAgICAgICAgIDIwMHB4O1xyXG4kc3ViLW1lbnUtc2hhZG93OiAgICAgICAgICAgMCA3cHggMjJweCAtNXB4IHJnYmEoZGFya2VuKCRncmF5LWRhcmtlciwgNCUpLCAuMik7XHJcblxyXG4vLyBPZmYtQ2FudmFzXHJcbiRvZmZjYW52YXMtd2lkdGg6ICAgICAgICAgICAyOTBweDtcclxuXHJcblxyXG4vLz09IFRhYnNcclxuLy9cclxuXHJcbiRuYXYtdGFicy1mb250LXNpemU6XHRcdFx0XHRcdFx0XHRcdGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuODc1KSk7IC8vIH4xNHB4XHJcbiRuYXYtdGFicy1saW5rLWNvbG9yOiBcdFx0XHRcdFx0XHRcdCRncmF5O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICBcdFx0XHQkZ3JheS1kYXJrO1xyXG5cclxuXHJcbi8vPT0gUHJvZ3Jlc3NcclxuLy9cclxuXHJcbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAxOHB4O1xyXG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgJGJyYW5kLXByaW1hcnk7XHJcblxyXG5cclxuLy89PSBTdGVwc1xyXG4vL1xyXG5cclxuJHN0ZXAtY2lyY2xlLXNpemU6ICAgICAgICA4MHB4O1xyXG4kc3RlcC1pY29uLWRlZmF1bHQtYmc6ICAgICRncmF5LWxpZ2h0ZXI7XHJcbiRzdGVwLWljb24tc2l6ZTogICAgICAgICAgMzhweDtcclxuJHN0ZXAtaWNvbi1kZWZhdWx0LWNvbG9yOiAkZ3JheS1kYXJrZXI7XHJcbiRzdGVwLXRpdGxlLXNpemU6ICAgICAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJHN0ZXAtdGl0bGUtY29sb3I6ICAgICAgICAkZ3JheS1kYXJrO1xyXG4kc3RlcC1jb25uZWN0LWhlaWdodDogICAgIDNweDtcclxuXHJcblxyXG4vLyA9PSBTaG9wXHJcbi8vXHJcblxyXG4vLyBQcm9kdWN0XHJcbiRwcm9kdWN0LXRpdGxlLWZvbnQtc2l6ZTogICAgICRmb250LXNpemUtYmFzZTtcclxuJHByb2R1Y3QtdGl0bGUtY29sb3I6ICAgICAgICAgJGdyYXktZGFya2VyO1xyXG4kcHJvZHVjdC10aXRsZS1ob3Zlci1jb2xvcjogICAkYnJhbmQtcHJpbWFyeTtcclxuJHByb2R1Y3QtcHJpY2UtZm9udC1zaXplOiAgICAgJGZvbnQtc2l6ZS1iYXNlO1xyXG4kcHJvZHVjdC1wcmljZS1jb2xvcjogICAgICAgICAkZ3JheS1kYXJrO1xyXG5cclxuLy8gU2hvcCBWaWV3XHJcbiRzaG9wLXZpZXctc2l6ZTogICAgICAgICAgICA0M3B4O1xyXG4kc2hvcC12aWV3LWNvbG9yOiAgICAgICAgICAgJGdyYXktZGFyaztcclxuJHNob3Atdmlldy1iZy1jb2xvcjogICAgICAgICR3aGl0ZS1jb2xvcjtcclxuJHNob3Atdmlldy1ob3Zlci1iZy1jb2xvcjogICRncmF5LWxpZ2h0ZXI7XHJcbiRzaG9wLXZpZXctYWN0aXZlLWJnLWNvbG9yOiAkYnJhbmQtcHJpbWFyeTtcclxuXHJcbi8vIENhcnRcclxuJGNhcnQtdGh1bWItc2l6ZTogICAgICAgICAxMTBweDtcclxuXHJcbi8vIEFjY291bnRcclxuJGNvdmVyLWhlaWdodDogICAgICAgICAgICAxMjBweDtcclxuJHVzZXItYXZhLXNpemU6ICAgICAgICAgICAxMTVweDtcclxuXHJcblxyXG4vLyA9PSBCbG9nXHJcbi8vXHJcblxyXG4kYmxvZy1wb3N0LW1ldGEtY29sb3I6ICAgICAgJGdyYXktZGFyaztcclxuJGJsb2ctcG9zdC1tZXRhLWljb24tY29sb3I6ICRncmF5O1xyXG4kYmxvZy1wb3N0LW1ldGEtZm9udC1zaXplOiAgJGZvbnQtc2l6ZS14cztcclxuJGJsb2ctcG9zdC1jb2xvcjogICAgICAgICAgICRoZWFkaW5ncy1jb2xvcjtcclxuJGJsb2ctcG9zdC1ob3Zlci1jb2xvcjogICAgICRicmFuZC1wcmltYXJ5O1xyXG5cclxuXHJcbi8vID09IENvbW1lbnRzXHJcbi8vXHJcblxyXG4kY29tbWVudC1hdXRob3ItYXZhLXNpemU6ICAgNTBweDtcclxuJGNvbW1lbnQtdGl0bGUtc2l6ZTogICAgICAgICRmb250LXNpemUtc207XHJcbiRjb21tZW50LXRpdGxlLXdlaWdodDogICAgICA1MDA7XHJcblxyXG5cclxuLy89PSBXaWRnZXRzXHJcbi8vXHJcblxyXG4kc2lkZWJhci1tYXgtd2lkdGg6ICAgICAgICAgIDQwMHB4O1xyXG4kc2lkZWJhci1vZmZjYW52YXMtd2lkdGg6ICAgIDMyMHB4O1xyXG4kd2lkZ2V0LXRpdGxlLWNvbG9yOiAgICAgICAgICRncmF5O1xyXG4kd2lkZ2V0LXRpdGxlLWZvbnQtc2l6ZTogICAgICRmb250LXNpemUtc207XHJcbiR3aWRnZXQtbGluay1mb250LXNpemU6ICAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJHdpZGdldC1tZXRhLWNvbG9yOiAgICAgICAgICAkZ3JheTtcclxuJHdpZGdldC1tZXRhLWZvbnQtc2l6ZTogICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlIC8gMS4zMykpOyAvL34xMnB4XHJcbiR3aWRnZXQtZW50cnktdGh1bWItc2l6ZTogICAgNTBweDtcclxuXHJcbi8vIFRhZ3NcclxuJHdpZGdldC10YWdzLWhlaWdodDogICAgICAgICAgICAgIDI4cHg7XHJcbiR3aWRnZXQtdGFncy1mb250LXNpemU6ICAgICAgICAgICAkZm9udC1zaXplLXhzO1xyXG4kd2lkZ2V0LXRhZ3MtY29sb3I6ICAgICAgICAgICAgICAgJG5hdi1saW5rLWNvbG9yO1xyXG4kd2lkZ2V0LXRhZ3MtaG92ZXItYmc6ICAgICAgICAgICAgJGdyYXktbGlnaHRlcjtcclxuJHdpZGdldC10YWdzLWFjdGl2ZS1iZzogICAgICAgICAgICRuYXYtbGluay1hY3RpdmUtY29sb3I7XHJcbiR3aWRnZXQtdGFncy1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkbmF2LWxpbmstYWN0aXZlLWNvbG9yO1xyXG4kd2lkZ2V0LXRhZ3MtYWN0aXZlLWNvbG9yOiAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG5cclxuXHJcbi8vPT0gUGFnaW5hdGlvblxyXG4vL1xyXG5cclxuJHBhZ2luYXRpb24tbGluay1zaXplOiAgICAgICAgICRidG4tc20taGVpZ2h0O1xyXG4kcGFnaW5hdGlvbi1saW5rLWZvbnQtc2l6ZTogICAgJGZvbnQtc2l6ZS1zbTtcclxuJHBhZ2luYXRpb24tbGluay1mb250LXdlaWdodDogIDUwMDtcclxuJHBhZ2luYXRpb24tbGluay1jb2xvcjogICAgICAgICRncmF5LWRhcms7XHJcbiRwYWdpbmF0aW9uLWxpbmstYWN0aXZlLWNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbiRwYWdpbmF0aW9uLWxpbmstaG92ZXItYmc6ICAgICAkZ3JheS1saWdodGVyO1xyXG4kcGFnaW5hdGlvbi1saW5rLWFjdGl2ZS1iZzogICAgJGJyYW5kLXByaW1hcnk7XHJcblxyXG5cclxuLy89PSBUb29sdGlwc1xyXG4vL1xyXG5cclxuJHRvb2x0aXAtb3BhY2l0eTogICAgXHRcdDE7XHJcbiR0b29sdGlwLWJnOiBcdFx0XHRcdCBcdFx0ZGFya2VuKCRncmF5LWRhcmtlciwgNCUpO1xyXG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAkd2hpdGUtY29sb3I7XHJcbiR0b29sdGlwLWFycm93LWNvbG9yOiBcdCR0b29sdGlwLWJnO1xyXG5cclxuXHJcbi8vPT0gQ2Fyb3VzZWxcclxuLy9cclxuXHJcbiRjYXJvdXNlbC1uYXZzLXNpemU6IFx0XHRcdFx0ICAkYnRuLWhlaWdodDtcclxuJGNhcm91c2VsLW5hdnMtaWNvbi1zaXplOiBcdCAgMTlweDtcclxuJGNhcm91c2VsLW5hdnMtYmc6ICAgICAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG4kY2Fyb3VzZWwtbmF2cy1jb2xvcjogXHRcdFx0ICAkZ3JheS1kYXJrZXI7XHJcbiRjYXJvdXNlbC1kb3RzLXNpemU6IFx0XHRcdFx0ICA2cHg7XHJcbiRjYXJvdXNlbC1kb3RzLWNvbG9yOiBcdCAgXHQgICRncmF5LWRhcms7XHJcblxyXG4vLyBIZXJvIFNsaWRlclxyXG4kaGVyby1zbGlkZXItbWluLWhlaWdodDogICAgICA1ODBweDtcclxuXHJcbi8vPT0gQ291bnRkb3duXHJcbi8vXHJcblxyXG4kY291bnRkb3duLWJveC1zaXplOiAgICAgICAgICA0OHB4O1xyXG4kY291bnRkb3duLWZvbnQtc2l6ZTogICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4zNzUpKTsgLy8gfjIycHhcclxuJGNvdW50ZG93bi1sYWJlbC1zaXplOiAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC43NSkpOyAvLyB+MTJweFxyXG5cclxuXHJcbi8vPT0gTWVkaWEgcXVlcmllcyAocmVzcG9uc2l2ZSBicmVhY2twb2ludHMpXHJcbi8vIyMgRGVzY2t0b3AsIFRhYmxldCwgTW9iaWxlXHJcblxyXG4kc2NyZWVuLXhsOiAxMjAwcHg7XHJcbiRzY3JlZW4tbGc6IDk5MXB4O1xyXG4kc2NyZWVuLW1kOiA3NjhweDtcclxuJHNjcmVlbi1zbTogNTc2cHg7XHJcbiRzY3JlZW4teHM6IDM2MHB4O1xyXG5cclxuJG5hdi1jb2xsYXBzZTogICAgIDEwNzBweDtcclxuIl19 */"] });


/***/ }),

/***/ 2702:
/*!*******************************************************************!*\
  !*** ./src/app/products/products-list/products-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsListComponent": () => (/* binding */ ProductsListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/product.service */ 9979);
/* harmony import */ var _shared_products_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/products-cache.service */ 9491);
/* harmony import */ var _pager_pager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pager/pager.service */ 8537);
/* harmony import */ var _shared_sort_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/sort.pipe */ 1229);
/* harmony import */ var _account_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../account/shared/auth.service */ 1544);
/* harmony import */ var _shared_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/ui.service */ 8806);
/* harmony import */ var _core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/page-title/page-title.component */ 9526);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _products_list_item_products_list_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../products-list-item/products-list-item.component */ 274);















function ProductsListComponent_a_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Add Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function ProductsListComponent_div_42_app_products_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-products-list-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
  }

  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("product", product_r6)("displayMode", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, ctx_r5.uiService.displayMode$));
  }
}

function ProductsListComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ProductsListComponent_div_42_app_products_list_item_1_Template, 2, 4, "app-products-list-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.productsPaged);
  }
}

function ProductsListComponent_div_44_app_products_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-products-list-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
  }

  if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("product", product_r8)("displayMode", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, ctx_r7.uiService.displayMode$));
  }
}

function ProductsListComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ProductsListComponent_div_44_app_products_list_item_1_Template, 2, 4, "app-products-list-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.products);
  }
}

const _c0 = function (a0) {
  return {
    active: a0
  };
};

function ProductsListComponent_nav_46_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 37)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductsListComponent_nav_46_li_7_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const page_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.setPage(page_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const page_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c0, ctx_r9.pager.currentPage === page_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](page_r10);
  }
}

const _c1 = function (a0) {
  return {
    disabled: a0
  };
};

function ProductsListComponent_nav_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nav", 28)(1, "div", 29)(2, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductsListComponent_nav_46_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.setPage(ctx_r13.pager.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "\u00A0Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 32)(6, "ul", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ProductsListComponent_nav_46_li_7_Template, 3, 4, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 35)(9, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductsListComponent_nav_46_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r15.setPage(ctx_r15.pager.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Next\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](3, _c1, ctx_r4.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c1, ctx_r4.pager.currentPage === ctx_r4.pager.totalPages));
  }
}

const _c2 = function () {
  return {
    title: "Products"
  };
};

const _c3 = function (a0) {
  return [a0];
};

const _c4 = function (a0) {
  return {
    "loading": a0
  };
};

class ProductsListComponent {
  constructor(productService, productsCacheService, pagerService, sortPipe, authService, uiService) {
    this.productService = productService;
    this.productsCacheService = productsCacheService;
    this.pagerService = pagerService;
    this.sortPipe = sortPipe;
    this.authService = authService;
    this.uiService = uiService;
    this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.pager = {};
  }

  ngOnInit() {
    this.authService.user.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribe$)).subscribe(user => {
      this.user = user;
    });
    this.uiService.currentPagingPage$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribe$)).subscribe(page => {
      this.currentPagingPage = page;
    });
    this.getProducts();
  }

  getProducts() {
    this.productsLoading = true;
    this.productService.getProducts().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.unsubscribe$)).subscribe(products => {
      this.products = products;
      this.setPage(this.currentPagingPage);
      this.productsLoading = false;
    });
  }

  onDisplayModeChange(mode, e) {
    this.uiService.displayMode$.next(mode);
    e.preventDefault();
  }

  setPage(page) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.pager = this.pagerService.getPager(this.products.length, page, 8);
    this.productsPaged = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.uiService.currentPagingPage$.next(page);
  }

  onSort(sortBy) {
    this.sortPipe.transform(this.products, sortBy.replace(':reverse', ''), sortBy.endsWith(':reverse'));
    this.uiService.sorting$.next(sortBy);
    this.setPage(1);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

ProductsListComponent.ɵfac = function ProductsListComponent_Factory(t) {
  return new (t || ProductsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_products_cache_service__WEBPACK_IMPORTED_MODULE_1__.ProductsCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_pager_pager_service__WEBPACK_IMPORTED_MODULE_2__.PagerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_sort_pipe__WEBPACK_IMPORTED_MODULE_3__.SortPipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_account_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_ui_service__WEBPACK_IMPORTED_MODULE_5__.UiService));
};

ProductsListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: ProductsListComponent,
  selectors: [["app-products"]],
  decls: 48,
  vars: 42,
  consts: [["title", "Products", 3, "children"], [1, "container", "padding-bottom-3x", "mb-1"], [1, "shop-toolbar", "padding-bottom-1x", "mb-2"], [1, "column"], [1, "shop-sorting"], ["for", "sorting"], ["id", "sorting", 1, "form-control", 3, "change"], ["selectSort", ""], ["value", "date:reverse", 3, "selected"], ["value", "price", 3, "selected"], ["value", "price:reverse", 3, "selected"], ["value", "name", 3, "selected"], ["value", "name:reverse", 3, "selected"], [1, "text-muted"], ["class", "btn btn-primary mt-0 mr-0 align-top", "routerLink", "/admin/add", "href", "", 4, "ngIf"], [1, "shop-view"], ["href", "", 1, "grid-view", 3, "ngClass", "click"], ["href", "", 1, "list-view", 3, "ngClass", "click"], [1, "products-list", 3, "ngClass"], ["class", "row", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], ["routerLink", "/admin/add", "href", "", 1, "btn", "btn-primary", "mt-0", "mr-0", "align-top"], [1, "icon-plus"], [1, "row"], ["ngClass", "col-12 col-sm-6 col-md-4 col-lg-3", 3, "product", "displayMode", 4, "ngFor", "ngForOf"], ["ngClass", "col-12 col-sm-6 col-md-4 col-lg-3", 3, "product", "displayMode"], ["ngClass", "col-12", 3, "product", "displayMode", 4, "ngFor", "ngForOf"], ["ngClass", "col-12", 3, "product", "displayMode"], [1, "pagination"], [1, "column", "text-left", "hidden-xs-down"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "ngClass", "click"], [1, "icon-arrow-left"], [1, "column", "text-center"], [1, "pages"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "column", "text-right", "hidden-xs-down"], [1, "icon-arrow-right"], [3, "ngClass"], [3, "click"]],
  template: function ProductsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-page-title", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Sort by:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "select", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function ProductsListComponent_Template_select_change_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);

        return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.onSort(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Newest Articles");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Low - High Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "High - Low Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "A - Z Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Z - A Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Showing:\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "1 - 12 items");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, ProductsListComponent_a_29_Template, 4, 0, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 15)(31, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductsListComponent_Template_a_click_31_listener($event) {
        return ctx.onDisplayModeChange("grid", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "span")(34, "span")(35, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProductsListComponent_Template_a_click_36_listener($event) {
        return ctx.onDisplayModeChange("list", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](37, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "span")(39, "span")(40, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, ProductsListComponent_div_42_Template, 2, 1, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](43, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, ProductsListComponent_div_44_Template, 2, 1, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](45, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, ProductsListComponent_nav_46_Template, 12, 7, "nav", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](47, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("children", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](34, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](33, _c2)));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 13, ctx.uiService.sorting$) === "date:reverse");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 15, ctx.uiService.sorting$) === "price");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 17, ctx.uiService.sorting$) === "price:reverse");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 19, ctx.uiService.sorting$) === "name");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 21, ctx.uiService.sorting$) === "name:reverse");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.user && ctx.user.roles.admin);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](36, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](32, 23, ctx.uiService.displayMode$) === "grid"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](38, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](37, 25, ctx.uiService.displayMode$) === "list"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](40, _c4, ctx.productsLoading));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](43, 27, ctx.uiService.displayMode$) === "grid");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](45, 29, ctx.uiService.displayMode$) === "list");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.pager.pages && ctx.pager.pages.length && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](47, 31, ctx.uiService.displayMode$) === "grid");
    }
  },
  dependencies: [_core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_6__.PageTitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _products_list_item_products_list_item_component__WEBPACK_IMPORTED_MODULE_7__.ProductsListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  styles: [".products-list.loading[_ngcontent-%COMP%] {\n  min-height: 200px;\n  background: url('loading.gif') center center no-repeat;\n}\n\n.shop-toolbar[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n}\n\n.shop-toolbar[_ngcontent-%COMP%]    > .column[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.shop-toolbar[_ngcontent-%COMP%]    > .column[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n\n@media (max-width: 576px) {\n  .shop-toolbar[_ngcontent-%COMP%]    > .column[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    text-align: center;\n  }\n  .shop-toolbar[_ngcontent-%COMP%]    > .column[_ngcontent-%COMP%]:last-child {\n    padding-top: 24px;\n    text-align: center;\n  }\n}\n\n.shop-sorting[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .shop-sorting[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .shop-sorting[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.shop-sorting[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n\n.shop-sorting[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 8px 5px 8px 0;\n  color: #9da9b9;\n  font-size: 14px;\n  font-weight: normal;\n}\n\n.shop-sorting[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 186px;\n  margin-right: 10px;\n}\n\n@media (max-width: 576px) {\n  .shop-sorting[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .shop-sorting[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    max-width: 100%;\n    margin: 0;\n    padding-top: 0;\n    padding-right: 0;\n  }\n}\n\n.shop-view[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.shop-view[_ngcontent-%COMP%]::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.shop-view[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: block;\n  width: 43px;\n  height: 43px;\n  margin-left: 10px;\n  padding: 13px;\n  float: left;\n  transition: background-color 0.35s;\n  border: 1px solid #e1e7ec;\n  border-radius: 50%;\n  background-color: #ffffff;\n}\n\n.shop-view[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  width: 3px;\n  height: 3px;\n  margin-bottom: 3px;\n  background-color: #606975;\n}\n\n.shop-view[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before, .shop-view[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  display: block;\n  position: absolute;\n  background-color: #606975;\n}\n\n.shop-view[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.shop-view[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n\n.shop-view[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%] {\n  border-color: #0da9ef;\n  background-color: #0da9ef;\n  cursor: default;\n  pointer-events: none;\n}\n\n.shop-view[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .shop-view[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before, .shop-view[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  background-color: #ffffff;\n}\n\n.shop-view[_ngcontent-%COMP%]    > a.grid-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before, .shop-view[_ngcontent-%COMP%]    > a.grid-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  top: 0;\n  width: 3px;\n  height: 3px;\n  content: \"\";\n}\n\n.shop-view[_ngcontent-%COMP%]    > a.grid-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  left: 6px;\n}\n\n.shop-view[_ngcontent-%COMP%]    > a.grid-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  left: 12px;\n}\n\n.shop-view[_ngcontent-%COMP%]    > a.list-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  top: 1px;\n  left: 6px;\n  width: 9px;\n  height: 1px;\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxzY3NzXFxoZWxwZXJzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxzY3NzXFxoZWxwZXJzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0k7RUFDSSxpQkFBQTtFQUNBLHNEQUFBO0FBSlI7O0FBUUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUxGOztBQU1FO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQUpKOztBQUtJO0VBQWUsaUJBQUE7QUFGbkI7O0FBSUU7RUFDRTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUFGSjtFQUdJO0lBQ0UsaUJDOEVpQjtJRDdFakIsa0JBQUE7RUFETjtBQUNGOztBQU1FOzs7RUFHRSxxQkFBQTtFQUNBLHNCQUFBO0FBSEo7O0FBS0U7RUFBTyxjQUFBO0FBRlQ7O0FBR0U7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQzlCcUI7RURnQ25CLGVDZ0JpQjtFRGZqQixtQkFBQTtBQUZOOztBQUtFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFLRTtFQUNFO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsU0FBQTtJQUVFLGNBQUE7SUFDQSxnQkFBQTtFQUpOO0FBQ0Y7O0FBUUE7RUFDRSxxQkFBQTtBQUxGOztBRTJHRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRnpHSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxXQ2tKd0I7RURqSnhCLFlDaUp3QjtFRGhKeEIsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ2hFcUI7QURnRXpCOztBQUNJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQzNFbUI7QUQ0RXpCOztBQUFNO0VBRUUsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJDaEZpQjtBRGlGekI7O0FBQ007RUFBZSxnQkFBQTtBQUVyQjs7QUFBSTtFQUFVLHlCQ2pGVztBRG9GekI7O0FBRkk7RUFDRSxxQkM5RWtCO0VEK0VsQix5QkMvRWtCO0VEZ0ZsQixlQUFBO0VBQ0Esb0JBQUE7QUFJTjs7QUFITTs7O0VBRWMseUJDeEZLO0FEOEZ6Qjs7QUFITTtFQUVFLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFJUjs7QUFGTTtFQUFZLFNBQUE7QUFLbEI7O0FBSk07RUFBVyxVQUFBO0FBT2pCOztBQUpNO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFNUiIsImZpbGUiOiJwcm9kdWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNjc3MvaGVscGVycy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICd+c2Nzcy9oZWxwZXJzL21peGlucyc7XHJcblxyXG4ucHJvZHVjdHMtbGlzdCB7XHJcblxyXG4gICAgJi5sb2FkaW5nIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2ltZy9sb2FkaW5nLmdpZicpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2hvcC10b29sYmFyIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICA+IC5jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAmOmxhc3QtY2hpbGQgeyB0ZXh0LWFsaWduOiByaWdodDsgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1zbSkge1xyXG4gICAgPiAuY29sdW1uIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6ICRncmlkLXZlcnRpY2FsLXN0ZXA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5zaG9wLXNvcnRpbmcge1xyXG4gIGxhYmVsLFxyXG4gIC5mb3JtLWNvbnRyb2wsXHJcbiAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICBzcGFuIHsgcGFkZGluZzogOHB4IDA7IH1cclxuICBsYWJlbCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA4cHggNXB4IDhweCAwO1xyXG4gICAgY29sb3I6ICRncmF5O1xyXG4gICAgZm9udDoge1xyXG4gICAgICBzaXplOiAkZm9udC1zaXplLXNtO1xyXG4gICAgICB3ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTg2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLXNtKSB7XHJcbiAgICBsYWJlbCwgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IHtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnNob3AtdmlldyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIEBpbmNsdWRlIGNsZWFyZml4O1xyXG4gID4gYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAkc2hvcC12aWV3LXNpemU7XHJcbiAgICBoZWlnaHQ6ICRzaG9wLXZpZXctc2l6ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTNweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMzVzO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzaG9wLXZpZXctYmctY29sb3I7XHJcbiAgICBzcGFuIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNob3Atdmlldy1jb2xvcjtcclxuICAgICAgJjo6YmVmb3JlLFxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzaG9wLXZpZXctY29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgJjpsYXN0LWNoaWxkIHsgbWFyZ2luLWJvdHRvbTogMDsgfVxyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6ICRzaG9wLXZpZXctaG92ZXItYmctY29sb3I7IH1cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkc2hvcC12aWV3LWFjdGl2ZS1iZy1jb2xvcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNob3Atdmlldy1hY3RpdmUtYmctY29sb3I7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIHNwYW4sXHJcbiAgICAgIHNwYW46OmJlZm9yZSxcclxuICAgICAgc3Bhbjo6YWZ0ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7IH1cclxuICAgIH1cclxuICAgICYuZ3JpZC12aWV3IHNwYW4ge1xyXG4gICAgICAmOjpiZWZvcmUsXHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgfVxyXG4gICAgICAmOjpiZWZvcmUgeyBsZWZ0OiA2cHg7IH1cclxuICAgICAgJjo6YWZ0ZXIgeyBsZWZ0OiAxMnB4OyB9XHJcbiAgICB9XHJcbiAgICAmLmxpc3QtdmlldyBzcGFuIHtcclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICB0b3A6IDFweDtcclxuICAgICAgICBsZWZ0OiA2cHg7XHJcbiAgICAgICAgd2lkdGg6IDlweDtcclxuICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvL1xyXG4vLyBWYXJpYWJsZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vPT0gQ29sb3JzXHJcbi8vXHJcbi8vIyMgR3JheSBhbmQgYnJhbmQgY29sb3JzIGZvciB1c2UgYWNyb3NzIFRoZW1lLlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gR3JheXNjYWxlXHJcbiRncmF5LWRhcmtlcjogICAgICAgICAgICAjMzc0MjUwO1xyXG4kZ3JheS1kYXJrOiAgICAgICAgICAgIFx0ICM2MDY5NzU7XHJcbiRncmF5OiAgICAgICAgICAgICAgICAgICAjOWRhOWI5O1xyXG4kZ3JheS1saWdodDogICAgICAgICAgICAgI2UxZTdlYztcclxuJGdyYXktbGlnaHRlcjogICAgICAgICAgICNmNWY1ZjU7XHJcbiR3aGl0ZS1jb2xvcjogICAgICAgICAgICAjZmZmZmZmO1xyXG4kYmxhY2stY29sb3I6ICAgICAgICAgICAgIzAwMDAwMDtcclxuXHJcbi8vIEJyYW5kIGNvbG9yc1xyXG4kYnJhbmQtcHJpbWFyeTogICAgICAgICAjMGRhOWVmO1xyXG4kYnJhbmQtaW5mbzpcdFx0ICAgICAgICAjNTBjNmU5O1xyXG4kYnJhbmQtc3VjY2VzczogICAgICAgICAjNDNkOWEzO1xyXG4kYnJhbmQtd2FybmluZzogICAgICAgICAjZmZiNzRmO1xyXG4kYnJhbmQtZGFuZ2VyOiAgICAgICAgICAjZmY1MjUyO1xyXG5cclxuLy8gQm9keVxyXG4kYm9keS1iZzogXHRcdFx0XHRcdFx0XHQkd2hpdGUtY29sb3I7XHJcbiRib2R5LWNvbG9yOiBcdFx0XHRcdFx0XHQkZ3JheS1kYXJrO1xyXG5cclxuLy8gSW5saW5lIGxpbmtzXHJcbiRsaW5rLWNvbG9yOiBcdFx0XHRcdFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuJGxpbmstaG92ZXItY29sb3I6IFx0XHRcdCRicmFuZC1wcmltYXJ5O1xyXG5cclxuLy8gSGVkaW5nc1xyXG4kaGVhZGluZ3MtY29sb3I6XHQgXHRcdFx0JGdyYXktZGFya2VyO1xyXG5cclxuLy8gQmxvY2txdW90ZVxyXG4kcXVvdGUtdGV4dC1jb2xvcjogICAgICAkYm9keS1jb2xvcjtcclxuJHF1b3RlLW1hcmstY29sb3I6ICAgICAgJGdyYXk7XHJcbiRxdW90ZS1hdXRob3ItY29sb3I6ICAgICRncmF5O1xyXG5cclxuLy8gQm9yZGVyc1xyXG4kYm9yZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS1saWdodDtcclxuJGJvcmRlci1saWdodC1jb2xvcjogICAgcmdiYSgkd2hpdGUtY29sb3IsIC4xMik7XHJcblxyXG4vLyBIaWdobGlnaHQgY29sb3JcclxuJGhpZ2hsaWdodC1jb2xvcjogICAgICAgI2ZmZjhiMDtcclxuXHJcblxyXG4vLz09IFR5cG9ncmFwaHlcclxuLy9cclxuLy8jIyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGZvbnQtZmFtaWx5LWJhc2U6IFx0XHRcdCAgJ01hdmVuIFBybycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1oZWFkaW5nczogXHQgIGluaGVyaXQ7XHJcblxyXG4vLyBGb250IHNpemVzXHJcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgMTZweDtcclxuJGZvbnQtc2l6ZS1sZWFkOiAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4xMjUpKTsgLy8gfjE4cHhcclxuJGZvbnQtc2l6ZS1zbTogXHRcdFx0XHQgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC44NzUpKTsgLy8gfjE0cHhcclxuJGZvbnQtc2l6ZS14czogICAgICAgICBcdFx0Zmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC44MTI1KSk7IC8vIH4xM3B4XHJcblxyXG4vLyBIZWFkaW5nc1xyXG4kZm9udC1zaXplLWgxOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAyLjI1KSk7IC8vIH4zNnB4XHJcbiRmb250LXNpemUtaDI6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuODc1KSk7IC8vIH4zMHB4XHJcbiRmb250LXNpemUtaDM6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuNSkpOyAvLyB+MjRweFxyXG4kZm9udC1zaXplLWg0OiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSk7IC8vIH4yMHB4XHJcbiRmb250LXNpemUtaDU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZWFkOyAvLyB+MThweFxyXG4kZm9udC1zaXplLWg2OiAgICAgICAgICAgICRmb250LXNpemUtYmFzZTsgLy8gfjE2cHhcclxuXHJcbi8vIERpc3BsYXkgaGVhZGluZ3NcclxuJGRpc3BsYXktMTogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogNC41KSk7IC8vIH43MnB4XHJcbiRkaXNwbGF5LTI6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDMuNzUpKTsgLy8gfjYwcHhcclxuJGRpc3BsYXktMzogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMy4xMjUpKTsgLy8gfjUwcHhcclxuJGRpc3BsYXktNDogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMi41KSk7IC8vIH40MHB4XHJcblxyXG4vLyBGb250IHN0eWxlc1xyXG4kZm9udC1zdHlsZS1iYXNlOiAgICAgICAgIG5vcm1hbDtcclxuJGZvbnQtc3R5bGUtaGVhZGluZ3M6ICAgICBub3JtYWw7XHJcblxyXG4vLyBGb250IHdlaWdodHNcclxuJGZvbnQtd2VpZ2h0LWJhc2U6ICAgICAgICAgbm9ybWFsO1xyXG4kZm9udC13ZWlnaHQtaGVhZGluZ3M6ICAgICA1MDA7XHJcblxyXG4vLyBUZXh0IHRyYW5zZm9ybXNcclxuJHRleHQtdHJhbnNmb3JtLWJhc2U6ICAgICBub25lO1xyXG4kdGV4dC10cmFuc2Zvcm0taGVhZGluZ3M6IG5vbmU7XHJcblxyXG4vLyBMaW5lIGhlaWdodHNcclxuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgIDEuNTtcclxuJGxpbmUtaGVpZ2h0LWgxOiAgICAgICAgIDEuMTU7XHJcbiRsaW5lLWhlaWdodC1oMjogICAgICAgICAxLjI7XHJcbiRsaW5lLWhlaWdodC1oMzogICAgICAgICAxLjI1O1xyXG4kbGluZS1oZWlnaHQtaDQ6ICAgICAgICAgMS4zO1xyXG4kbGluZS1oZWlnaHQtaDU6ICAgICAgICAgMS4zNTtcclxuJGxpbmUtaGVpZ2h0LWg2OiAgICAgICAgIDEuNDtcclxuJGxpbmUtaGVpZ2h0LWRpc3BsYXk6ICAgIDEuMTU7XHJcblxyXG5cclxuLy89PSBHcmlkIFZlcnRpY2FsIFN0ZXBcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGdyaWQtdmVydGljYWwtc3RlcDogICAgIDI0cHg7XHJcblxyXG5cclxuLy89PSBCb3JkZXIgUmFkaXVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRib3JkZXItcmFkaXVzLWxnOiBcdFx0N3B4O1xyXG4kYm9yZGVyLXJhZGl1cy1iYXNlOiBcdDVweDtcclxuJGJvcmRlci1yYWRpdXMtc206IFx0XHQzcHg7XHJcblxyXG5cclxuLy89PSBGb3Jtc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kaW5wdXQtaGVpZ2h0LWxnOlx0XHRcdFx0XHRcdFx0NTRweDtcclxuJGlucHV0LWhlaWdodDpcdFx0XHRcdFx0XHRcdFx0NDRweDtcclxuJGlucHV0LWhlaWdodC1zbTpcdFx0XHRcdFx0XHRcdDM2cHg7XHJcbiRpbnB1dC1jb2xvci1wbGFjZWhvbGRlcjogICAgICRncmF5O1xyXG5cclxuXHJcbi8vPT0gQnV0dG9uc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kYnRuLWZvbnQtc2l6ZTogXHRcdFx0XHRcdFx0XHQkZm9udC1zaXplLXNtO1xyXG4kYnRuLXNtLWZvbnQtc2l6ZTogXHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS14cztcclxuJGJ0bi10ZXh0LXRyYW5zZm9ybTogICAgICAgICAgdXBwZXJjYXNlO1xyXG4kYnRuLWZvbnQtd2VpZ2h0OiBcdFx0XHRcdFx0XHQ1MDA7XHJcbiRidG4tdGV4dC1jb2xvcjogICAgICAgICAgICAgICRncmF5LWRhcms7XHJcblxyXG4kYnRuLWhlaWdodDogXHRcdFx0XHRcdFx0XHRcdFx0NDRweDtcclxuJGJ0bi1sZy1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0NTRweDtcclxuJGJ0bi1zbS1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0MzZweDtcclxuXHJcbiRidG4tbWFyZ2luOiAgICAgICAgICAgICAgICAgIGZsb29yKCRncmlkLXZlcnRpY2FsLXN0ZXAgLyAyKTsgLy9+MTJweFxyXG4kc29jaWFsLWJ0bi1zaXplOiBcdFx0XHRcdFx0XHQkZm9udC1zaXplLXhzO1xyXG5cclxuXHJcbi8vPT0gVGFibGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiR0YWJsZS1ib3JkZXItY29sb3I6IFx0XHRcdFx0XHQkYm9yZGVyLWNvbG9yO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nOlx0XHRcdFx0XHQxNXB4O1xyXG4kdGFibGUtYmctYWNjZW50OiBcdFx0XHRcdFx0XHQkZ3JheS1saWdodGVyO1xyXG5cclxuXHJcbi8vPT0gTmF2YmFyIC8gTG9nb1xyXG4vL1xyXG5cclxuJG5hdmJhci1taW4taGVpZ2h0OiBcdFx0XHQ4NHB4O1xyXG4kbmF2YmFyLXN0dWNrLXNoYWRvdzogICAgIDAgM3B4IDI1cHggMCByZ2JhKGRhcmtlbigkZ3JheS1kYXJrZXIsIDQlKSwgLjIyKTtcclxuJGxvZ28td2lkdGg6IFx0XHRcdFx0ICAgICAgMTI5cHg7XHJcblxyXG4vLyBOYXZiYXIgVG9vbHNcclxuJG5hdmJhci10b29scy1jb2xvcjogICAgICAgICAgJGdyYXktZGFyaztcclxuJG5hdmJhci10b29scy1zaXplOiAgICAgICAgICAgJGJ0bi1oZWlnaHQ7XHJcbiRvZmZjYW52YXMtdG9nZ2xlLWljb24tc2l6ZTogIDIwcHg7XHJcbiR0b29scy1pY29uLXNpemU6ICAgICAgICAgICAgIDE3cHg7XHJcblxyXG5cclxuLy89PSBOYXZpZ2F0aW9uXHJcbi8vXHJcblxyXG4kbmF2LWxpbmstZm9udC1zaXplOiBcdFx0XHRcdCRmb250LXNpemUtc207IC8vIDE0cHhcclxuJG5hdi1saW5rLWZvbnQtd2VpZ2h0OiBcdFx0XHQ1MDA7XHJcbiRuYXYtbGluay1jb2xvcjogXHRcdFx0XHRcdFx0JGdyYXktZGFyaztcclxuJG5hdi1saW5rLWhvdmVyLWNvbG9yOiBcdFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuJG5hdi1saW5rLWFjdGl2ZS1jb2xvcjogXHRcdCRicmFuZC1wcmltYXJ5O1xyXG5cclxuLy8gU3ViIE1lbnUgLyBNZWdhIE1lbnVcclxuJHN1Yi1tZW51LXdpZHRoOiAgICAgICAgICAgIDIwMHB4O1xyXG4kc3ViLW1lbnUtc2hhZG93OiAgICAgICAgICAgMCA3cHggMjJweCAtNXB4IHJnYmEoZGFya2VuKCRncmF5LWRhcmtlciwgNCUpLCAuMik7XHJcblxyXG4vLyBPZmYtQ2FudmFzXHJcbiRvZmZjYW52YXMtd2lkdGg6ICAgICAgICAgICAyOTBweDtcclxuXHJcblxyXG4vLz09IFRhYnNcclxuLy9cclxuXHJcbiRuYXYtdGFicy1mb250LXNpemU6XHRcdFx0XHRcdFx0XHRcdGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuODc1KSk7IC8vIH4xNHB4XHJcbiRuYXYtdGFicy1saW5rLWNvbG9yOiBcdFx0XHRcdFx0XHRcdCRncmF5O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICBcdFx0XHQkZ3JheS1kYXJrO1xyXG5cclxuXHJcbi8vPT0gUHJvZ3Jlc3NcclxuLy9cclxuXHJcbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAxOHB4O1xyXG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgJGJyYW5kLXByaW1hcnk7XHJcblxyXG5cclxuLy89PSBTdGVwc1xyXG4vL1xyXG5cclxuJHN0ZXAtY2lyY2xlLXNpemU6ICAgICAgICA4MHB4O1xyXG4kc3RlcC1pY29uLWRlZmF1bHQtYmc6ICAgICRncmF5LWxpZ2h0ZXI7XHJcbiRzdGVwLWljb24tc2l6ZTogICAgICAgICAgMzhweDtcclxuJHN0ZXAtaWNvbi1kZWZhdWx0LWNvbG9yOiAkZ3JheS1kYXJrZXI7XHJcbiRzdGVwLXRpdGxlLXNpemU6ICAgICAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJHN0ZXAtdGl0bGUtY29sb3I6ICAgICAgICAkZ3JheS1kYXJrO1xyXG4kc3RlcC1jb25uZWN0LWhlaWdodDogICAgIDNweDtcclxuXHJcblxyXG4vLyA9PSBTaG9wXHJcbi8vXHJcblxyXG4vLyBQcm9kdWN0XHJcbiRwcm9kdWN0LXRpdGxlLWZvbnQtc2l6ZTogICAgICRmb250LXNpemUtYmFzZTtcclxuJHByb2R1Y3QtdGl0bGUtY29sb3I6ICAgICAgICAgJGdyYXktZGFya2VyO1xyXG4kcHJvZHVjdC10aXRsZS1ob3Zlci1jb2xvcjogICAkYnJhbmQtcHJpbWFyeTtcclxuJHByb2R1Y3QtcHJpY2UtZm9udC1zaXplOiAgICAgJGZvbnQtc2l6ZS1iYXNlO1xyXG4kcHJvZHVjdC1wcmljZS1jb2xvcjogICAgICAgICAkZ3JheS1kYXJrO1xyXG5cclxuLy8gU2hvcCBWaWV3XHJcbiRzaG9wLXZpZXctc2l6ZTogICAgICAgICAgICA0M3B4O1xyXG4kc2hvcC12aWV3LWNvbG9yOiAgICAgICAgICAgJGdyYXktZGFyaztcclxuJHNob3Atdmlldy1iZy1jb2xvcjogICAgICAgICR3aGl0ZS1jb2xvcjtcclxuJHNob3Atdmlldy1ob3Zlci1iZy1jb2xvcjogICRncmF5LWxpZ2h0ZXI7XHJcbiRzaG9wLXZpZXctYWN0aXZlLWJnLWNvbG9yOiAkYnJhbmQtcHJpbWFyeTtcclxuXHJcbi8vIENhcnRcclxuJGNhcnQtdGh1bWItc2l6ZTogICAgICAgICAxMTBweDtcclxuXHJcbi8vIEFjY291bnRcclxuJGNvdmVyLWhlaWdodDogICAgICAgICAgICAxMjBweDtcclxuJHVzZXItYXZhLXNpemU6ICAgICAgICAgICAxMTVweDtcclxuXHJcblxyXG4vLyA9PSBCbG9nXHJcbi8vXHJcblxyXG4kYmxvZy1wb3N0LW1ldGEtY29sb3I6ICAgICAgJGdyYXktZGFyaztcclxuJGJsb2ctcG9zdC1tZXRhLWljb24tY29sb3I6ICRncmF5O1xyXG4kYmxvZy1wb3N0LW1ldGEtZm9udC1zaXplOiAgJGZvbnQtc2l6ZS14cztcclxuJGJsb2ctcG9zdC1jb2xvcjogICAgICAgICAgICRoZWFkaW5ncy1jb2xvcjtcclxuJGJsb2ctcG9zdC1ob3Zlci1jb2xvcjogICAgICRicmFuZC1wcmltYXJ5O1xyXG5cclxuXHJcbi8vID09IENvbW1lbnRzXHJcbi8vXHJcblxyXG4kY29tbWVudC1hdXRob3ItYXZhLXNpemU6ICAgNTBweDtcclxuJGNvbW1lbnQtdGl0bGUtc2l6ZTogICAgICAgICRmb250LXNpemUtc207XHJcbiRjb21tZW50LXRpdGxlLXdlaWdodDogICAgICA1MDA7XHJcblxyXG5cclxuLy89PSBXaWRnZXRzXHJcbi8vXHJcblxyXG4kc2lkZWJhci1tYXgtd2lkdGg6ICAgICAgICAgIDQwMHB4O1xyXG4kc2lkZWJhci1vZmZjYW52YXMtd2lkdGg6ICAgIDMyMHB4O1xyXG4kd2lkZ2V0LXRpdGxlLWNvbG9yOiAgICAgICAgICRncmF5O1xyXG4kd2lkZ2V0LXRpdGxlLWZvbnQtc2l6ZTogICAgICRmb250LXNpemUtc207XHJcbiR3aWRnZXQtbGluay1mb250LXNpemU6ICAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJHdpZGdldC1tZXRhLWNvbG9yOiAgICAgICAgICAkZ3JheTtcclxuJHdpZGdldC1tZXRhLWZvbnQtc2l6ZTogICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlIC8gMS4zMykpOyAvL34xMnB4XHJcbiR3aWRnZXQtZW50cnktdGh1bWItc2l6ZTogICAgNTBweDtcclxuXHJcbi8vIFRhZ3NcclxuJHdpZGdldC10YWdzLWhlaWdodDogICAgICAgICAgICAgIDI4cHg7XHJcbiR3aWRnZXQtdGFncy1mb250LXNpemU6ICAgICAgICAgICAkZm9udC1zaXplLXhzO1xyXG4kd2lkZ2V0LXRhZ3MtY29sb3I6ICAgICAgICAgICAgICAgJG5hdi1saW5rLWNvbG9yO1xyXG4kd2lkZ2V0LXRhZ3MtaG92ZXItYmc6ICAgICAgICAgICAgJGdyYXktbGlnaHRlcjtcclxuJHdpZGdldC10YWdzLWFjdGl2ZS1iZzogICAgICAgICAgICRuYXYtbGluay1hY3RpdmUtY29sb3I7XHJcbiR3aWRnZXQtdGFncy1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkbmF2LWxpbmstYWN0aXZlLWNvbG9yO1xyXG4kd2lkZ2V0LXRhZ3MtYWN0aXZlLWNvbG9yOiAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG5cclxuXHJcbi8vPT0gUGFnaW5hdGlvblxyXG4vL1xyXG5cclxuJHBhZ2luYXRpb24tbGluay1zaXplOiAgICAgICAgICRidG4tc20taGVpZ2h0O1xyXG4kcGFnaW5hdGlvbi1saW5rLWZvbnQtc2l6ZTogICAgJGZvbnQtc2l6ZS1zbTtcclxuJHBhZ2luYXRpb24tbGluay1mb250LXdlaWdodDogIDUwMDtcclxuJHBhZ2luYXRpb24tbGluay1jb2xvcjogICAgICAgICRncmF5LWRhcms7XHJcbiRwYWdpbmF0aW9uLWxpbmstYWN0aXZlLWNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbiRwYWdpbmF0aW9uLWxpbmstaG92ZXItYmc6ICAgICAkZ3JheS1saWdodGVyO1xyXG4kcGFnaW5hdGlvbi1saW5rLWFjdGl2ZS1iZzogICAgJGJyYW5kLXByaW1hcnk7XHJcblxyXG5cclxuLy89PSBUb29sdGlwc1xyXG4vL1xyXG5cclxuJHRvb2x0aXAtb3BhY2l0eTogICAgXHRcdDE7XHJcbiR0b29sdGlwLWJnOiBcdFx0XHRcdCBcdFx0ZGFya2VuKCRncmF5LWRhcmtlciwgNCUpO1xyXG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAkd2hpdGUtY29sb3I7XHJcbiR0b29sdGlwLWFycm93LWNvbG9yOiBcdCR0b29sdGlwLWJnO1xyXG5cclxuXHJcbi8vPT0gQ2Fyb3VzZWxcclxuLy9cclxuXHJcbiRjYXJvdXNlbC1uYXZzLXNpemU6IFx0XHRcdFx0ICAkYnRuLWhlaWdodDtcclxuJGNhcm91c2VsLW5hdnMtaWNvbi1zaXplOiBcdCAgMTlweDtcclxuJGNhcm91c2VsLW5hdnMtYmc6ICAgICAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG4kY2Fyb3VzZWwtbmF2cy1jb2xvcjogXHRcdFx0ICAkZ3JheS1kYXJrZXI7XHJcbiRjYXJvdXNlbC1kb3RzLXNpemU6IFx0XHRcdFx0ICA2cHg7XHJcbiRjYXJvdXNlbC1kb3RzLWNvbG9yOiBcdCAgXHQgICRncmF5LWRhcms7XHJcblxyXG4vLyBIZXJvIFNsaWRlclxyXG4kaGVyby1zbGlkZXItbWluLWhlaWdodDogICAgICA1ODBweDtcclxuXHJcbi8vPT0gQ291bnRkb3duXHJcbi8vXHJcblxyXG4kY291bnRkb3duLWJveC1zaXplOiAgICAgICAgICA0OHB4O1xyXG4kY291bnRkb3duLWZvbnQtc2l6ZTogICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4zNzUpKTsgLy8gfjIycHhcclxuJGNvdW50ZG93bi1sYWJlbC1zaXplOiAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC43NSkpOyAvLyB+MTJweFxyXG5cclxuXHJcbi8vPT0gTWVkaWEgcXVlcmllcyAocmVzcG9uc2l2ZSBicmVhY2twb2ludHMpXHJcbi8vIyMgRGVzY2t0b3AsIFRhYmxldCwgTW9iaWxlXHJcblxyXG4kc2NyZWVuLXhsOiAxMjAwcHg7XHJcbiRzY3JlZW4tbGc6IDk5MXB4O1xyXG4kc2NyZWVuLW1kOiA3NjhweDtcclxuJHNjcmVlbi1zbTogNTc2cHg7XHJcbiRzY3JlZW4teHM6IDM2MHB4O1xyXG5cclxuJG5hdi1jb2xsYXBzZTogICAgIDEwNzBweDtcclxuIiwiLy9cclxuLy8gTWl4aW5zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBCbG9jayBwYWRkaW5ncyBjbGFzc2VzXHJcbkBtaXhpbiBibG9jay1wYWRkaW5nLXRvcCgkZnJvbTogMSwgJHRvOiAxMCkge1xyXG4gIEBmb3IgJGkgZnJvbSAkZnJvbSB0aHJvdWdoICR0byB7XHJcbiAgICAucGFkZGluZy10b3AtI3skaX14IHtcclxuICAgICAgcGFkZGluZy10b3A6IGZsb29yKCRncmlkLXZlcnRpY2FsLXN0ZXAgKiAkaSkgIWltcG9ydGFudDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogZmxvb3IoKCRncmlkLXZlcnRpY2FsLXN0ZXAgKiAkaSkgLyAxLjUpICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1peGluIGJsb2NrLXBhZGRpbmctYm90dG9tKCRmcm9tOiAxLCAkdG86IDEwKSB7XHJcbiAgQGZvciAkaSBmcm9tICRmcm9tIHRocm91Z2ggJHRvIHtcclxuICAgIC5wYWRkaW5nLWJvdHRvbS0jeyRpfXgge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogZmxvb3IoJGdyaWQtdmVydGljYWwtc3RlcCAqICRpKSAhaW1wb3J0YW50O1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1tZCkge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiBmbG9vcigoJGdyaWQtdmVydGljYWwtc3RlcCAqICRpKSAvIDEuNSkgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQmxvY2sgbWFyZ2lucyBjbGFzc2VzXHJcbkBtaXhpbiBibG9jay1tYXJnaW4tdG9wKCRmcm9tOiAxLCAkdG86IDEwKSB7XHJcbiAgQGZvciAkaSBmcm9tICRmcm9tIHRocm91Z2ggJHRvIHtcclxuICAgIC5tYXJnaW4tdG9wLSN7JGl9eCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IGZsb29yKCRncmlkLXZlcnRpY2FsLXN0ZXAgKiAkaSkgIWltcG9ydGFudDtcclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiBmbG9vcigoJGdyaWQtdmVydGljYWwtc3RlcCAqICRpKSAvIDEuNSkgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWl4aW4gYmxvY2stbWFyZ2luLWJvdHRvbSgkZnJvbTogMSwgJHRvOiAxMCkge1xyXG4gIEBmb3IgJGkgZnJvbSAkZnJvbSB0aHJvdWdoICR0byB7XHJcbiAgICAubWFyZ2luLWJvdHRvbS0jeyRpfXgge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiBmbG9vcigkZ3JpZC12ZXJ0aWNhbC1zdGVwICogJGkpICFpbXBvcnRhbnQ7XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLW1kKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogZmxvb3IoKCRncmlkLXZlcnRpY2FsLXN0ZXAgKiAkaSkgLyAxLjUpICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIE5vcm1hbCBCdXR0b24gVmFyaWFudHNcclxuQG1peGluIGJ1dHRvbi12YXJpYW50KCRiZy1jb2xvcikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmctY29sb3IsIDEwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBPdXRsaW5lIEJ1dHRvbiBWYXJpYW50c1xyXG5AbWl4aW4gb3V0bGluZS1idXR0b24tdmFyaWFudCgkY29sb3IpIHtcclxuICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogJGNvbG9yO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIExpbmsgQnV0dG9uIFZhcmlhbnRzXHJcbkBtaXhpbiBsaW5rLWJ1dHRvbi12YXJpYW50KCRjb2xvcikge1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogZGFya2VuKCRjb2xvciwgMTAlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFsZXJ0IFZhcmlhbnRzXHJcbkBtaXhpbiBhbGVydC12YXJpYW50KCRjb2xvciwgJGJnLWNvbG9yLCAkYm9yZGVyLWNvbG9yKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcbiAgJjo6YmVmb3JlIHsgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yOyB9XHJcbiAgPiAqLFxyXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIHVsLCBvbCwgYSB7XHJcbiAgICAmOm5vdCgudGV4dC13aGl0ZSksXHJcbiAgICAmOm5vdCgudGV4dC1saWdodCkgeyBjb2xvcjogJGNvbG9yOyB9XHJcbiAgfVxyXG4gIC5hbGVydC1jbG9zZSB7IGNvbG9yOiAkY29sb3I7IH1cclxufVxyXG5cclxuLy8gTGlzdCBHcm91cCBWYXJpYW50c1xyXG5AbWl4aW4gbGlzdC1ncm91cC12YXJpYW50KCRjb2xvciwgJGJnLWNvbG9yKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xyXG4gIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcclxuICA+ICosXHJcbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgdWwsIG9sLCBhIHsgY29sb3I6ICRjb2xvciAhaW1wb3J0YW50OyB9XHJcbn1cclxuXHJcbi8vIE92ZXJsYXkgQmxvY2tcclxuQG1peGluIG92ZXJsYXktYmxvY2soJHppbmRleCwgJGJnLWNvbG9yLCAkb3BhY2l0eSkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIG9wYWNpdHk6ICRvcGFjaXR5O1xyXG4gIHotaW5kZXg6ICR6aW5kZXg7XHJcbn1cclxuXHJcbi8vIFBsYWNlaG9sZGVyIHRleHRcclxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvcjogJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKSB7XHJcbiAgLy8gRmlyZWZveFxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIG9wYWNpdHk6IDE7IC8vIE92ZXJyaWRlIEZpcmVmb3gncyB1bnVzdWFsIGRlZmF1bHQgb3BhY2l0eTsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzExNTI2XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgfSAvLyBJbnRlcm5ldCBFeHBsb3JlciAxMCtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyICB7XHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gIH0gLy8gU2FmYXJpIGFuZCBDaHJvbWVcclxufVxyXG5cclxuLy8gRm9udCBzbW9vdGhpbmdcclxuQG1peGluIGZvbnQtc21vb3RoaW5nIHtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG4vLyBCYWNrZmFjZSB2aXNpYmlsaXR5XHJcbkBtaXhpbiBiYWNrZmFjZS12aXNpYmlsaXR5KCR2YWx1ZSkge1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcclxufVxyXG5cclxuLy8gVXNlciBzZWxlY3RcclxuQG1peGluIHVzZXItc2VsZWN0KCR2YWx1ZSkge1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiAkdmFsdWU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiAkdmFsdWU7XHJcbiAgdXNlci1zZWxlY3Q6ICR2YWx1ZTtcclxufVxyXG5cclxuLy8gQXBwZWFyYW5jZVxyXG5AbWl4aW4gYXBwZWFyYW5jZSgkdmFsdWUpIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6ICR2YWx1ZTtcclxuICAtbW96LWFwcGVhcmFuY2U6ICR2YWx1ZTtcclxuICBhcHBlYXJhbmNlOiAkdmFsdWU7XHJcbn1cclxuXHJcblxyXG4vLyBUZXh0IG92ZXJmbG93XHJcbi8vIFJlcXVpcmVzIGlubGluZS1ibG9jayBvciBibG9jayBmb3IgcHJvcGVyIHN0eWxpbmdcclxuQG1peGluIHRleHQtb3ZlcmZsb3cge1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLy8gVW5zdHlsZWQgbGlzdFxyXG5AbWl4aW4gbGlzdC11bnN0eWxlZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi8vIFByb3ZpZGVzIGFuIGVhc3kgd2F5IHRvIGluY2x1ZGUgYSBjbGVhcmZpeCBmb3IgY29udGFpbmluZyBmbG9hdHMuXHJcbkBtaXhpbiBjbGVhcmZpeCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 8980:
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-list/products-list.component */ 2702);
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail/product-detail.component */ 1305);
/* harmony import */ var _products_list_item_products_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-list-item/products-list-item.component */ 274);
/* harmony import */ var _shared_rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/rating-stars/rating-stars.component */ 1397);
/* harmony import */ var _shared_file_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/file-upload.service */ 5606);
/* harmony import */ var _shared_products_cache_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/products-cache.service */ 9491);
/* harmony import */ var _shared_product_rating_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/product-rating.service */ 2449);
/* harmony import */ var _shared_sort_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/sort.pipe */ 1229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);










class ProductsModule {
}
ProductsModule.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [_shared_sort_pipe__WEBPACK_IMPORTED_MODULE_8__.SortPipe, _shared_file_upload_service__WEBPACK_IMPORTED_MODULE_5__.FileUploadService, _shared_products_cache_service__WEBPACK_IMPORTED_MODULE_6__.ProductsCacheService, _shared_product_rating_service__WEBPACK_IMPORTED_MODULE_7__.ProductRatingService], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__.ProductDetailComponent,
        _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductsListComponent,
        _products_list_item_products_list_item_component__WEBPACK_IMPORTED_MODULE_3__.ProductsListItemComponent,
        _shared_sort_pipe__WEBPACK_IMPORTED_MODULE_8__.SortPipe,
        _shared_rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_4__.RatingStarsComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule], exports: [_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__.ProductDetailComponent,
        _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductsListComponent,
        _products_list_item_products_list_item_component__WEBPACK_IMPORTED_MODULE_3__.ProductsListItemComponent,
        _shared_sort_pipe__WEBPACK_IMPORTED_MODULE_8__.SortPipe,
        _shared_rating_stars_rating_stars_component__WEBPACK_IMPORTED_MODULE_4__.RatingStarsComponent] }); })();


/***/ }),

/***/ 5606:
/*!********************************************************!*\
  !*** ./src/app/products/shared/file-upload.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadService": () => (/* binding */ FileUploadService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);


class FileUploadService {
    constructor(storage) {
        this.storage = storage;
    }
    startUpload(data) {
        // The File object
        const file = data.files.item(0);
        // Client-side validation example
        if (file.type.split('/')[0] !== 'image') {
            console.error('unsupported file type :( ');
            throw new Error('upload failed, unsupported file type');
        }
        // The storage path
        const path = `product-images/${new Date().getTime()}_${file}`;
        // The main task
        this.task$ = this.storage.upload(path, file);
        // the percentage
        this.percentage$ = this.task$.percentageChanges();
        return this.task$;
    }
    deleteFile(files) {
        if (files) {
            return files.map((filePath) => {
                return this.storage.ref(filePath).delete();
            });
        }
    }
    // Determines if the upload task is active
    isActive(snapshot) {
        return (snapshot.state === 'running' &&
            snapshot.bytesTransferred < snapshot.totalBytes);
    }
}
FileUploadService.ɵfac = function FileUploadService_Factory(t) { return new (t || FileUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_1__.AngularFireStorage)); };
FileUploadService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileUploadService, factory: FileUploadService.ɵfac });


/***/ }),

/***/ 2449:
/*!***********************************************************!*\
  !*** ./src/app/products/shared/product-rating.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductRatingService": () => (/* binding */ ProductRatingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var _productsUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productsUrl */ 4783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../messages/message.service */ 5985);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/database */ 2575);
/* harmony import */ var _account_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../account/shared/auth.service */ 1544);






class ProductRatingService {
    constructor(messageService, angularFireDatabase, authService) {
        this.messageService = messageService;
        this.angularFireDatabase = angularFireDatabase;
        this.authService = authService;
        this.productsUrl = _productsUrl__WEBPACK_IMPORTED_MODULE_0__.ProductsUrl.productsUrl;
        this.authService.user.subscribe(user => this.user = user);
    }
    /** Log a ProductService message with the MessageService */
    log(message) {
        this.messageService.add('ProductService: ' + message);
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
        };
    }
    rateProduct(product, rating) {
        const url = `${this.productsUrl}/${product.id}`;
        const updates = this.constructRating(product, rating);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(this.angularFireDatabase
            .object(url)
            .update(updates)
            .then(() => this.log(`Rated Product ${product.name} width: ${rating}`))
            .catch((error) => {
            this.handleError(error);
        }));
    }
    // pure helper functions start here
    constructRating(product, rating) {
        // construct container for update content
        const updates = {};
        // Add user rating to local version of ratings
        if (product.ratings) {
            product.ratings[this.user.uid] = rating;
        }
        else {
            product['ratings'] = [];
            product['ratings'][this.user.uid] = rating;
        }
        // Add user rating
        updates['/ratings/' + this.user.uid + '/'] = rating;
        // calculate current overall rating
        updates['/currentRating/'] = this.calculateOverallRating(product, rating);
        return updates;
    }
    calculateOverallRating(product, rating) {
        // Calculate and add new overall rating
        const currentRating = Object.values(product.ratings).reduce((a, b) => a + b, 0) / Object.values(product.ratings).length;
        return currentRating;
    }
}
ProductRatingService.ɵfac = function ProductRatingService_Factory(t) { return new (t || ProductRatingService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_messages_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_6__.AngularFireDatabase), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_account_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
ProductRatingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ProductRatingService, factory: ProductRatingService.ɵfac });


/***/ }),

/***/ 9979:
/*!****************************************************!*\
  !*** ./src/app/products/shared/product.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var C_Users_wks_admin_Desktop_openfabric_product_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _productsUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productsUrl */ 4783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _messages_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../messages/message.service */ 5985);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat/database */ 2575);
/* harmony import */ var _account_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../account/shared/auth.service */ 1544);
/* harmony import */ var _file_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file-upload.service */ 5606);
/* harmony import */ var _product_rating_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-rating.service */ 2449);










class ProductService {
  constructor(messageService, angularFireDatabase, authService, uploadService, productRatingService) {
    this.messageService = messageService;
    this.angularFireDatabase = angularFireDatabase;
    this.authService = authService;
    this.uploadService = uploadService;
    this.productRatingService = productRatingService;
    this.productsUrl = _productsUrl__WEBPACK_IMPORTED_MODULE_1__.ProductsUrl.productsUrl;
  }
  /** Log a ProductService message with the MessageService */


  log(message) {
    this.messageService.add('ProductService: ' + message);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */


  handleError(operation = 'operation', result) {
    return error => {
      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`); // Let the app keep running by returning an empty result.

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result);
    };
  }

  getProducts() {
    return this.angularFireDatabase.list('products', ref => ref.orderByChild('date')).valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(arr => arr.reverse()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(this.handleError(`getProducts`)));
  }

  getProductsQuery(byChild, equalTo, limitToFirst) {
    return this.angularFireDatabase.list('products', ref => ref.orderByChild(byChild).equalTo(equalTo).limitToFirst(limitToFirst)).valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(this.handleError(`getProductsQuery`)));
  }

  findProducts(term) {
    return this.angularFireDatabase.list('products', ref => ref.orderByChild('name').startAt(term).endAt(term + '\uf8ff')).valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(this.handleError(`getProductsQuery`)));
  }

  getProductsByDate(limitToLast) {
    return this.angularFireDatabase.list('products', ref => ref.orderByChild('date').limitToLast(limitToLast)).valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(arr => arr.reverse()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(this.handleError(`getProductsByDate`)));
  }

  getProductsByRating(limitToLast) {
    return this.angularFireDatabase.list('products', ref => ref.orderByChild('currentRating').limitToLast(limitToLast)).valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(arr => arr.reverse()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(this.handleError(`getProductsByRating`)));
  }

  getFeaturedProducts() {
    return this.angularFireDatabase.list('featured').snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(actions => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)(actions.map(action => this.getProduct(action.key)));
    }, (actionsFromSource, resolvedProducts) => {
      resolvedProducts.map((product, i) => {
        product['imageFeaturedUrl'] = actionsFromSource[i].payload.val().imageFeaturedUrl;
        return product;
      });
      return resolvedProducts;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(this.handleError(`getFeaturedProducts`)));
  }

  getProduct(id) {
    const url = `${this.productsUrl}/${id}`;
    return this.angularFireDatabase.object(url).valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(result => {
      if (result) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(result);
      } else {
        this.messageService.addError(`Found no Product with id=${id}`);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(this.handleError(`getProduct id=${id}`)));
  }

  updateProduct(data) {
    const url = `${this.productsUrl}/${data.product.id}`;

    if (!data.files.length) {
      return this.updateProductWithoutNewImage(data.product, url);
    }

    const dbOperation = this.uploadService.startUpload(data).then( /*#__PURE__*/function () {
      var _ref = (0,C_Users_wks_admin_Desktop_openfabric_product_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (task) {
        const downloadUrl = yield task.ref.getDownloadURL();
        data.product.imageURLs[0] = downloadUrl;
        data.product.imageRefs[0] = task.ref.fullPath;
        return data;
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()).then(dataWithImagePath => {
      return this.angularFireDatabase.object(url).update(data.product);
    }).then(response => {
      this.log(`Updated Product ${data.product.name}`);
      return data.product;
    }).catch(error => {
      this.handleError(error);
      return error;
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.from)(dbOperation);
  }

  updateProductWithoutNewImage(product, url) {
    const dbOperation = this.angularFireDatabase.object(url).update(product).then(response => {
      this.log(`Updated Product ${product.name}`);
      return product;
    }).catch(error => {
      this.handleError(error);
      return error;
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.from)(dbOperation);
  }

  addProduct(data) {
    var _this = this;

    const dbOperation = this.uploadService.startUpload(data).then( /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_wks_admin_Desktop_openfabric_product_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (task) {
        const downloadUrl = yield task.ref.getDownloadURL();
        data.product.imageURLs.push(downloadUrl);
        data.product.imageRefs.push(task.ref.fullPath);
        return _this.angularFireDatabase.list('products').set(data.product.id.toString(), data.product);
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }(), error => error).then(response => {
      this.log(`Added Product ${data.product.name}`);
      return data.product;
    }).catch(error => {
      this.messageService.addError(`Add Failed, Product ${data.product.name}`);
      this.handleError(error);
      return error;
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.from)(dbOperation);
  }

  deleteProduct(product) {
    const url = `${this.productsUrl}/${product.id}`;
    this.uploadService.deleteFile(product.imageRefs);
    return this.angularFireDatabase.object(url).remove().then(() => this.log('success deleting' + product.name)).catch(error => {
      this.messageService.addError('Delete failed ' + product.name);
      this.handleError('delete product');
    });
  }

}

ProductService.ɵfac = function ProductService_Factory(t) {
  return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_messages_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_14__.AngularFireDatabase), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_account_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_file_upload_service__WEBPACK_IMPORTED_MODULE_4__.FileUploadService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_product_rating_service__WEBPACK_IMPORTED_MODULE_5__.ProductRatingService));
};

ProductService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
  token: ProductService,
  factory: ProductService.ɵfac
});

/***/ }),

/***/ 9491:
/*!***********************************************************!*\
  !*** ./src/app/products/shared/products-cache.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsCacheService": () => (/* binding */ ProductsCacheService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 4989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);



class ProductsCacheService {
    get(key, fallback) {
        if (typeof key === 'string') {
            return this.getProducts(fallback);
        }
        else {
            return this.getProduct(key, fallback);
        }
    }
    getProducts(fallback) {
        if (!this.products) {
            this.products = fallback.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.publishReplay)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.refCount)());
        }
        return this.products;
    }
    getProduct(key, fallback) {
        return this.getProducts(fallback).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((products) => {
            const selectedProduct = products.find((product) => {
                return product.id === key;
            });
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(selectedProduct);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.publishReplay)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.refCount)());
    }
    clearCache() {
        this.products = null;
    }
}
ProductsCacheService.ɵfac = function ProductsCacheService_Factory(t) { return new (t || ProductsCacheService)(); };
ProductsCacheService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ProductsCacheService, factory: ProductsCacheService.ɵfac });


/***/ }),

/***/ 4783:
/*!************************************************!*\
  !*** ./src/app/products/shared/productsUrl.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsUrl": () => (/* binding */ ProductsUrl)
/* harmony export */ });
class ProductsUrl {
}
ProductsUrl.productsUrl = '/products';


/***/ }),

/***/ 1397:
/*!************************************************************************!*\
  !*** ./src/app/products/shared/rating-stars/rating-stars.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingStarsComponent": () => (/* binding */ RatingStarsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0) { return { "filled": a0 }; };
class RatingStarsComponent {
}
RatingStarsComponent.ɵfac = function RatingStarsComponent_Factory(t) { return new (t || RatingStarsComponent)(); };
RatingStarsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingStarsComponent, selectors: [["app-rating-stars"]], inputs: { rating: "rating" }, decls: 6, vars: 15, consts: [[1, "rating-stars"], [1, "icon-star", 3, "ngClass"]], template: function RatingStarsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1)(2, "i", 1)(3, "i", 1)(4, "i", 1)(5, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.rating > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.rating > 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.rating > 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.rating > 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.rating > 4));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".rating-stars[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.rating-stars[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 2px;\n  color: #cad0d9;\n  font-size: 14px;\n}\n.rating-stars[_ngcontent-%COMP%]    > i.filled[_ngcontent-%COMP%] {\n  color: #ffb74f;\n}\n.rating-stars[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZy1zdGFycy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzY3NzXFxoZWxwZXJzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxxQkFBQTtBQUZGO0FBSUU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVDa0RtQjtBRHBEdkI7QUFHSTtFQUFXLGNDV1M7QURYeEI7QUFDSTtFQUFlLGVBQUE7QUFFbkIiLCJmaWxlIjoicmF0aW5nLXN0YXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNjc3MvaGVscGVycy92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICd+c2Nzcy9oZWxwZXJzL21peGlucyc7XHJcblxyXG4ucmF0aW5nLXN0YXJzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gID4gaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgIGNvbG9yOiBsaWdodGVuKCRncmF5LCAxNSUpO1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xyXG4gICAgJi5maWxsZWQgeyBjb2xvcjogJGJyYW5kLXdhcm5pbmc7IH1cclxuICAgICY6bGFzdC1jaGlsZCB7IG1hcmdpbi1yaWdodDogMDsgfVxyXG4gIH1cclxufVxyXG4iLCIvL1xyXG4vLyBWYXJpYWJsZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vPT0gQ29sb3JzXHJcbi8vXHJcbi8vIyMgR3JheSBhbmQgYnJhbmQgY29sb3JzIGZvciB1c2UgYWNyb3NzIFRoZW1lLlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gR3JheXNjYWxlXHJcbiRncmF5LWRhcmtlcjogICAgICAgICAgICAjMzc0MjUwO1xyXG4kZ3JheS1kYXJrOiAgICAgICAgICAgIFx0ICM2MDY5NzU7XHJcbiRncmF5OiAgICAgICAgICAgICAgICAgICAjOWRhOWI5O1xyXG4kZ3JheS1saWdodDogICAgICAgICAgICAgI2UxZTdlYztcclxuJGdyYXktbGlnaHRlcjogICAgICAgICAgICNmNWY1ZjU7XHJcbiR3aGl0ZS1jb2xvcjogICAgICAgICAgICAjZmZmZmZmO1xyXG4kYmxhY2stY29sb3I6ICAgICAgICAgICAgIzAwMDAwMDtcclxuXHJcbi8vIEJyYW5kIGNvbG9yc1xyXG4kYnJhbmQtcHJpbWFyeTogICAgICAgICAjMGRhOWVmO1xyXG4kYnJhbmQtaW5mbzpcdFx0ICAgICAgICAjNTBjNmU5O1xyXG4kYnJhbmQtc3VjY2VzczogICAgICAgICAjNDNkOWEzO1xyXG4kYnJhbmQtd2FybmluZzogICAgICAgICAjZmZiNzRmO1xyXG4kYnJhbmQtZGFuZ2VyOiAgICAgICAgICAjZmY1MjUyO1xyXG5cclxuLy8gQm9keVxyXG4kYm9keS1iZzogXHRcdFx0XHRcdFx0XHQkd2hpdGUtY29sb3I7XHJcbiRib2R5LWNvbG9yOiBcdFx0XHRcdFx0XHQkZ3JheS1kYXJrO1xyXG5cclxuLy8gSW5saW5lIGxpbmtzXHJcbiRsaW5rLWNvbG9yOiBcdFx0XHRcdFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuJGxpbmstaG92ZXItY29sb3I6IFx0XHRcdCRicmFuZC1wcmltYXJ5O1xyXG5cclxuLy8gSGVkaW5nc1xyXG4kaGVhZGluZ3MtY29sb3I6XHQgXHRcdFx0JGdyYXktZGFya2VyO1xyXG5cclxuLy8gQmxvY2txdW90ZVxyXG4kcXVvdGUtdGV4dC1jb2xvcjogICAgICAkYm9keS1jb2xvcjtcclxuJHF1b3RlLW1hcmstY29sb3I6ICAgICAgJGdyYXk7XHJcbiRxdW90ZS1hdXRob3ItY29sb3I6ICAgICRncmF5O1xyXG5cclxuLy8gQm9yZGVyc1xyXG4kYm9yZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS1saWdodDtcclxuJGJvcmRlci1saWdodC1jb2xvcjogICAgcmdiYSgkd2hpdGUtY29sb3IsIC4xMik7XHJcblxyXG4vLyBIaWdobGlnaHQgY29sb3JcclxuJGhpZ2hsaWdodC1jb2xvcjogICAgICAgI2ZmZjhiMDtcclxuXHJcblxyXG4vLz09IFR5cG9ncmFwaHlcclxuLy9cclxuLy8jIyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGZvbnQtZmFtaWx5LWJhc2U6IFx0XHRcdCAgJ01hdmVuIFBybycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1oZWFkaW5nczogXHQgIGluaGVyaXQ7XHJcblxyXG4vLyBGb250IHNpemVzXHJcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgMTZweDtcclxuJGZvbnQtc2l6ZS1sZWFkOiAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4xMjUpKTsgLy8gfjE4cHhcclxuJGZvbnQtc2l6ZS1zbTogXHRcdFx0XHQgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC44NzUpKTsgLy8gfjE0cHhcclxuJGZvbnQtc2l6ZS14czogICAgICAgICBcdFx0Zmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC44MTI1KSk7IC8vIH4xM3B4XHJcblxyXG4vLyBIZWFkaW5nc1xyXG4kZm9udC1zaXplLWgxOiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAyLjI1KSk7IC8vIH4zNnB4XHJcbiRmb250LXNpemUtaDI6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuODc1KSk7IC8vIH4zMHB4XHJcbiRmb250LXNpemUtaDM6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDEuNSkpOyAvLyB+MjRweFxyXG4kZm9udC1zaXplLWg0OiAgICAgICAgICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSk7IC8vIH4yMHB4XHJcbiRmb250LXNpemUtaDU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZWFkOyAvLyB+MThweFxyXG4kZm9udC1zaXplLWg2OiAgICAgICAgICAgICRmb250LXNpemUtYmFzZTsgLy8gfjE2cHhcclxuXHJcbi8vIERpc3BsYXkgaGVhZGluZ3NcclxuJGRpc3BsYXktMTogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogNC41KSk7IC8vIH43MnB4XHJcbiRkaXNwbGF5LTI6ICAgICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDMuNzUpKTsgLy8gfjYwcHhcclxuJGRpc3BsYXktMzogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMy4xMjUpKTsgLy8gfjUwcHhcclxuJGRpc3BsYXktNDogICAgICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMi41KSk7IC8vIH40MHB4XHJcblxyXG4vLyBGb250IHN0eWxlc1xyXG4kZm9udC1zdHlsZS1iYXNlOiAgICAgICAgIG5vcm1hbDtcclxuJGZvbnQtc3R5bGUtaGVhZGluZ3M6ICAgICBub3JtYWw7XHJcblxyXG4vLyBGb250IHdlaWdodHNcclxuJGZvbnQtd2VpZ2h0LWJhc2U6ICAgICAgICAgbm9ybWFsO1xyXG4kZm9udC13ZWlnaHQtaGVhZGluZ3M6ICAgICA1MDA7XHJcblxyXG4vLyBUZXh0IHRyYW5zZm9ybXNcclxuJHRleHQtdHJhbnNmb3JtLWJhc2U6ICAgICBub25lO1xyXG4kdGV4dC10cmFuc2Zvcm0taGVhZGluZ3M6IG5vbmU7XHJcblxyXG4vLyBMaW5lIGhlaWdodHNcclxuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgIDEuNTtcclxuJGxpbmUtaGVpZ2h0LWgxOiAgICAgICAgIDEuMTU7XHJcbiRsaW5lLWhlaWdodC1oMjogICAgICAgICAxLjI7XHJcbiRsaW5lLWhlaWdodC1oMzogICAgICAgICAxLjI1O1xyXG4kbGluZS1oZWlnaHQtaDQ6ICAgICAgICAgMS4zO1xyXG4kbGluZS1oZWlnaHQtaDU6ICAgICAgICAgMS4zNTtcclxuJGxpbmUtaGVpZ2h0LWg2OiAgICAgICAgIDEuNDtcclxuJGxpbmUtaGVpZ2h0LWRpc3BsYXk6ICAgIDEuMTU7XHJcblxyXG5cclxuLy89PSBHcmlkIFZlcnRpY2FsIFN0ZXBcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJGdyaWQtdmVydGljYWwtc3RlcDogICAgIDI0cHg7XHJcblxyXG5cclxuLy89PSBCb3JkZXIgUmFkaXVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiRib3JkZXItcmFkaXVzLWxnOiBcdFx0N3B4O1xyXG4kYm9yZGVyLXJhZGl1cy1iYXNlOiBcdDVweDtcclxuJGJvcmRlci1yYWRpdXMtc206IFx0XHQzcHg7XHJcblxyXG5cclxuLy89PSBGb3Jtc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kaW5wdXQtaGVpZ2h0LWxnOlx0XHRcdFx0XHRcdFx0NTRweDtcclxuJGlucHV0LWhlaWdodDpcdFx0XHRcdFx0XHRcdFx0NDRweDtcclxuJGlucHV0LWhlaWdodC1zbTpcdFx0XHRcdFx0XHRcdDM2cHg7XHJcbiRpbnB1dC1jb2xvci1wbGFjZWhvbGRlcjogICAgICRncmF5O1xyXG5cclxuXHJcbi8vPT0gQnV0dG9uc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kYnRuLWZvbnQtc2l6ZTogXHRcdFx0XHRcdFx0XHQkZm9udC1zaXplLXNtO1xyXG4kYnRuLXNtLWZvbnQtc2l6ZTogXHRcdFx0XHRcdFx0JGZvbnQtc2l6ZS14cztcclxuJGJ0bi10ZXh0LXRyYW5zZm9ybTogICAgICAgICAgdXBwZXJjYXNlO1xyXG4kYnRuLWZvbnQtd2VpZ2h0OiBcdFx0XHRcdFx0XHQ1MDA7XHJcbiRidG4tdGV4dC1jb2xvcjogICAgICAgICAgICAgICRncmF5LWRhcms7XHJcblxyXG4kYnRuLWhlaWdodDogXHRcdFx0XHRcdFx0XHRcdFx0NDRweDtcclxuJGJ0bi1sZy1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0NTRweDtcclxuJGJ0bi1zbS1oZWlnaHQ6IFx0XHRcdFx0XHRcdFx0MzZweDtcclxuXHJcbiRidG4tbWFyZ2luOiAgICAgICAgICAgICAgICAgIGZsb29yKCRncmlkLXZlcnRpY2FsLXN0ZXAgLyAyKTsgLy9+MTJweFxyXG4kc29jaWFsLWJ0bi1zaXplOiBcdFx0XHRcdFx0XHQkZm9udC1zaXplLXhzO1xyXG5cclxuXHJcbi8vPT0gVGFibGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiR0YWJsZS1ib3JkZXItY29sb3I6IFx0XHRcdFx0XHQkYm9yZGVyLWNvbG9yO1xyXG4kdGFibGUtY2VsbC1wYWRkaW5nOlx0XHRcdFx0XHQxNXB4O1xyXG4kdGFibGUtYmctYWNjZW50OiBcdFx0XHRcdFx0XHQkZ3JheS1saWdodGVyO1xyXG5cclxuXHJcbi8vPT0gTmF2YmFyIC8gTG9nb1xyXG4vL1xyXG5cclxuJG5hdmJhci1taW4taGVpZ2h0OiBcdFx0XHQ4NHB4O1xyXG4kbmF2YmFyLXN0dWNrLXNoYWRvdzogICAgIDAgM3B4IDI1cHggMCByZ2JhKGRhcmtlbigkZ3JheS1kYXJrZXIsIDQlKSwgLjIyKTtcclxuJGxvZ28td2lkdGg6IFx0XHRcdFx0ICAgICAgMTI5cHg7XHJcblxyXG4vLyBOYXZiYXIgVG9vbHNcclxuJG5hdmJhci10b29scy1jb2xvcjogICAgICAgICAgJGdyYXktZGFyaztcclxuJG5hdmJhci10b29scy1zaXplOiAgICAgICAgICAgJGJ0bi1oZWlnaHQ7XHJcbiRvZmZjYW52YXMtdG9nZ2xlLWljb24tc2l6ZTogIDIwcHg7XHJcbiR0b29scy1pY29uLXNpemU6ICAgICAgICAgICAgIDE3cHg7XHJcblxyXG5cclxuLy89PSBOYXZpZ2F0aW9uXHJcbi8vXHJcblxyXG4kbmF2LWxpbmstZm9udC1zaXplOiBcdFx0XHRcdCRmb250LXNpemUtc207IC8vIDE0cHhcclxuJG5hdi1saW5rLWZvbnQtd2VpZ2h0OiBcdFx0XHQ1MDA7XHJcbiRuYXYtbGluay1jb2xvcjogXHRcdFx0XHRcdFx0JGdyYXktZGFyaztcclxuJG5hdi1saW5rLWhvdmVyLWNvbG9yOiBcdFx0XHQkYnJhbmQtcHJpbWFyeTtcclxuJG5hdi1saW5rLWFjdGl2ZS1jb2xvcjogXHRcdCRicmFuZC1wcmltYXJ5O1xyXG5cclxuLy8gU3ViIE1lbnUgLyBNZWdhIE1lbnVcclxuJHN1Yi1tZW51LXdpZHRoOiAgICAgICAgICAgIDIwMHB4O1xyXG4kc3ViLW1lbnUtc2hhZG93OiAgICAgICAgICAgMCA3cHggMjJweCAtNXB4IHJnYmEoZGFya2VuKCRncmF5LWRhcmtlciwgNCUpLCAuMik7XHJcblxyXG4vLyBPZmYtQ2FudmFzXHJcbiRvZmZjYW52YXMtd2lkdGg6ICAgICAgICAgICAyOTBweDtcclxuXHJcblxyXG4vLz09IFRhYnNcclxuLy9cclxuXHJcbiRuYXYtdGFicy1mb250LXNpemU6XHRcdFx0XHRcdFx0XHRcdGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAuODc1KSk7IC8vIH4xNHB4XHJcbiRuYXYtdGFicy1saW5rLWNvbG9yOiBcdFx0XHRcdFx0XHRcdCRncmF5O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICBcdFx0XHQkZ3JheS1kYXJrO1xyXG5cclxuXHJcbi8vPT0gUHJvZ3Jlc3NcclxuLy9cclxuXHJcbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAxOHB4O1xyXG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgJGJyYW5kLXByaW1hcnk7XHJcblxyXG5cclxuLy89PSBTdGVwc1xyXG4vL1xyXG5cclxuJHN0ZXAtY2lyY2xlLXNpemU6ICAgICAgICA4MHB4O1xyXG4kc3RlcC1pY29uLWRlZmF1bHQtYmc6ICAgICRncmF5LWxpZ2h0ZXI7XHJcbiRzdGVwLWljb24tc2l6ZTogICAgICAgICAgMzhweDtcclxuJHN0ZXAtaWNvbi1kZWZhdWx0LWNvbG9yOiAkZ3JheS1kYXJrZXI7XHJcbiRzdGVwLXRpdGxlLXNpemU6ICAgICAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJHN0ZXAtdGl0bGUtY29sb3I6ICAgICAgICAkZ3JheS1kYXJrO1xyXG4kc3RlcC1jb25uZWN0LWhlaWdodDogICAgIDNweDtcclxuXHJcblxyXG4vLyA9PSBTaG9wXHJcbi8vXHJcblxyXG4vLyBQcm9kdWN0XHJcbiRwcm9kdWN0LXRpdGxlLWZvbnQtc2l6ZTogICAgICRmb250LXNpemUtYmFzZTtcclxuJHByb2R1Y3QtdGl0bGUtY29sb3I6ICAgICAgICAgJGdyYXktZGFya2VyO1xyXG4kcHJvZHVjdC10aXRsZS1ob3Zlci1jb2xvcjogICAkYnJhbmQtcHJpbWFyeTtcclxuJHByb2R1Y3QtcHJpY2UtZm9udC1zaXplOiAgICAgJGZvbnQtc2l6ZS1iYXNlO1xyXG4kcHJvZHVjdC1wcmljZS1jb2xvcjogICAgICAgICAkZ3JheS1kYXJrO1xyXG5cclxuLy8gU2hvcCBWaWV3XHJcbiRzaG9wLXZpZXctc2l6ZTogICAgICAgICAgICA0M3B4O1xyXG4kc2hvcC12aWV3LWNvbG9yOiAgICAgICAgICAgJGdyYXktZGFyaztcclxuJHNob3Atdmlldy1iZy1jb2xvcjogICAgICAgICR3aGl0ZS1jb2xvcjtcclxuJHNob3Atdmlldy1ob3Zlci1iZy1jb2xvcjogICRncmF5LWxpZ2h0ZXI7XHJcbiRzaG9wLXZpZXctYWN0aXZlLWJnLWNvbG9yOiAkYnJhbmQtcHJpbWFyeTtcclxuXHJcbi8vIENhcnRcclxuJGNhcnQtdGh1bWItc2l6ZTogICAgICAgICAxMTBweDtcclxuXHJcbi8vIEFjY291bnRcclxuJGNvdmVyLWhlaWdodDogICAgICAgICAgICAxMjBweDtcclxuJHVzZXItYXZhLXNpemU6ICAgICAgICAgICAxMTVweDtcclxuXHJcblxyXG4vLyA9PSBCbG9nXHJcbi8vXHJcblxyXG4kYmxvZy1wb3N0LW1ldGEtY29sb3I6ICAgICAgJGdyYXktZGFyaztcclxuJGJsb2ctcG9zdC1tZXRhLWljb24tY29sb3I6ICRncmF5O1xyXG4kYmxvZy1wb3N0LW1ldGEtZm9udC1zaXplOiAgJGZvbnQtc2l6ZS14cztcclxuJGJsb2ctcG9zdC1jb2xvcjogICAgICAgICAgICRoZWFkaW5ncy1jb2xvcjtcclxuJGJsb2ctcG9zdC1ob3Zlci1jb2xvcjogICAgICRicmFuZC1wcmltYXJ5O1xyXG5cclxuXHJcbi8vID09IENvbW1lbnRzXHJcbi8vXHJcblxyXG4kY29tbWVudC1hdXRob3ItYXZhLXNpemU6ICAgNTBweDtcclxuJGNvbW1lbnQtdGl0bGUtc2l6ZTogICAgICAgICRmb250LXNpemUtc207XHJcbiRjb21tZW50LXRpdGxlLXdlaWdodDogICAgICA1MDA7XHJcblxyXG5cclxuLy89PSBXaWRnZXRzXHJcbi8vXHJcblxyXG4kc2lkZWJhci1tYXgtd2lkdGg6ICAgICAgICAgIDQwMHB4O1xyXG4kc2lkZWJhci1vZmZjYW52YXMtd2lkdGg6ICAgIDMyMHB4O1xyXG4kd2lkZ2V0LXRpdGxlLWNvbG9yOiAgICAgICAgICRncmF5O1xyXG4kd2lkZ2V0LXRpdGxlLWZvbnQtc2l6ZTogICAgICRmb250LXNpemUtc207XHJcbiR3aWRnZXQtbGluay1mb250LXNpemU6ICAgICAgJGZvbnQtc2l6ZS1zbTtcclxuJHdpZGdldC1tZXRhLWNvbG9yOiAgICAgICAgICAkZ3JheTtcclxuJHdpZGdldC1tZXRhLWZvbnQtc2l6ZTogICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlIC8gMS4zMykpOyAvL34xMnB4XHJcbiR3aWRnZXQtZW50cnktdGh1bWItc2l6ZTogICAgNTBweDtcclxuXHJcbi8vIFRhZ3NcclxuJHdpZGdldC10YWdzLWhlaWdodDogICAgICAgICAgICAgIDI4cHg7XHJcbiR3aWRnZXQtdGFncy1mb250LXNpemU6ICAgICAgICAgICAkZm9udC1zaXplLXhzO1xyXG4kd2lkZ2V0LXRhZ3MtY29sb3I6ICAgICAgICAgICAgICAgJG5hdi1saW5rLWNvbG9yO1xyXG4kd2lkZ2V0LXRhZ3MtaG92ZXItYmc6ICAgICAgICAgICAgJGdyYXktbGlnaHRlcjtcclxuJHdpZGdldC10YWdzLWFjdGl2ZS1iZzogICAgICAgICAgICRuYXYtbGluay1hY3RpdmUtY29sb3I7XHJcbiR3aWRnZXQtdGFncy1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkbmF2LWxpbmstYWN0aXZlLWNvbG9yO1xyXG4kd2lkZ2V0LXRhZ3MtYWN0aXZlLWNvbG9yOiAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG5cclxuXHJcbi8vPT0gUGFnaW5hdGlvblxyXG4vL1xyXG5cclxuJHBhZ2luYXRpb24tbGluay1zaXplOiAgICAgICAgICRidG4tc20taGVpZ2h0O1xyXG4kcGFnaW5hdGlvbi1saW5rLWZvbnQtc2l6ZTogICAgJGZvbnQtc2l6ZS1zbTtcclxuJHBhZ2luYXRpb24tbGluay1mb250LXdlaWdodDogIDUwMDtcclxuJHBhZ2luYXRpb24tbGluay1jb2xvcjogICAgICAgICRncmF5LWRhcms7XHJcbiRwYWdpbmF0aW9uLWxpbmstYWN0aXZlLWNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbiRwYWdpbmF0aW9uLWxpbmstaG92ZXItYmc6ICAgICAkZ3JheS1saWdodGVyO1xyXG4kcGFnaW5hdGlvbi1saW5rLWFjdGl2ZS1iZzogICAgJGJyYW5kLXByaW1hcnk7XHJcblxyXG5cclxuLy89PSBUb29sdGlwc1xyXG4vL1xyXG5cclxuJHRvb2x0aXAtb3BhY2l0eTogICAgXHRcdDE7XHJcbiR0b29sdGlwLWJnOiBcdFx0XHRcdCBcdFx0ZGFya2VuKCRncmF5LWRhcmtlciwgNCUpO1xyXG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAkd2hpdGUtY29sb3I7XHJcbiR0b29sdGlwLWFycm93LWNvbG9yOiBcdCR0b29sdGlwLWJnO1xyXG5cclxuXHJcbi8vPT0gQ2Fyb3VzZWxcclxuLy9cclxuXHJcbiRjYXJvdXNlbC1uYXZzLXNpemU6IFx0XHRcdFx0ICAkYnRuLWhlaWdodDtcclxuJGNhcm91c2VsLW5hdnMtaWNvbi1zaXplOiBcdCAgMTlweDtcclxuJGNhcm91c2VsLW5hdnMtYmc6ICAgICAgICAgICAgJHdoaXRlLWNvbG9yO1xyXG4kY2Fyb3VzZWwtbmF2cy1jb2xvcjogXHRcdFx0ICAkZ3JheS1kYXJrZXI7XHJcbiRjYXJvdXNlbC1kb3RzLXNpemU6IFx0XHRcdFx0ICA2cHg7XHJcbiRjYXJvdXNlbC1kb3RzLWNvbG9yOiBcdCAgXHQgICRncmF5LWRhcms7XHJcblxyXG4vLyBIZXJvIFNsaWRlclxyXG4kaGVyby1zbGlkZXItbWluLWhlaWdodDogICAgICA1ODBweDtcclxuXHJcbi8vPT0gQ291bnRkb3duXHJcbi8vXHJcblxyXG4kY291bnRkb3duLWJveC1zaXplOiAgICAgICAgICA0OHB4O1xyXG4kY291bnRkb3duLWZvbnQtc2l6ZTogICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4zNzUpKTsgLy8gfjIycHhcclxuJGNvdW50ZG93bi1sYWJlbC1zaXplOiAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIC43NSkpOyAvLyB+MTJweFxyXG5cclxuXHJcbi8vPT0gTWVkaWEgcXVlcmllcyAocmVzcG9uc2l2ZSBicmVhY2twb2ludHMpXHJcbi8vIyMgRGVzY2t0b3AsIFRhYmxldCwgTW9iaWxlXHJcblxyXG4kc2NyZWVuLXhsOiAxMjAwcHg7XHJcbiRzY3JlZW4tbGc6IDk5MXB4O1xyXG4kc2NyZWVuLW1kOiA3NjhweDtcclxuJHNjcmVlbi1zbTogNTc2cHg7XHJcbiRzY3JlZW4teHM6IDM2MHB4O1xyXG5cclxuJG5hdi1jb2xsYXBzZTogICAgIDEwNzBweDtcclxuIl19 */"] });


/***/ }),

/***/ 1229:
/*!**********************************************!*\
  !*** ./src/app/products/shared/sort.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortPipe": () => (/* binding */ SortPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SortPipe {
    transform(array, field, reverse) {
        if (!array) {
            return;
        }
        array.sort((a, b) => {
            if (a[field] < b[field]) {
                return -1;
            }
            else if (a[field] > b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    }
}
SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(); };
SortPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sort", type: SortPipe, pure: true });


/***/ }),

/***/ 8806:
/*!***********************************************!*\
  !*** ./src/app/products/shared/ui.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiService": () => (/* binding */ UiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class UiService {
    constructor() {
        this.sorting$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('date:reverse');
        this.displayMode$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('grid');
        this.currentPagingPage$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(1);
    }
}
UiService.ɵfac = function UiService_Factory(t) { return new (t || UiService)(); };
UiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UiService, factory: UiService.ɵfac });


/***/ }),

/***/ 6422:
/*!*************************************************!*\
  !*** ./src/app/shared/price/price.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceComponent": () => (/* binding */ PriceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function PriceComponent_del_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "del", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.product.priceNormal));
} }
class PriceComponent {
}
PriceComponent.ɵfac = function PriceComponent_Factory(t) { return new (t || PriceComponent)(); };
PriceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PriceComponent, selectors: [["app-price"]], inputs: { product: "product" }, decls: 3, vars: 4, consts: [["class", "text-muted text-normal", 4, "ngIf"], [1, "text-muted", "text-normal"]], template: function PriceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PriceComponent_del_0_Template, 3, 3, "del", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.price < ctx.product.priceNormal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.product.price), "\n");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-routing.module */ 158);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _price_price_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./price/price.component */ 6422);
/* harmony import */ var _core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/page-title/page-title.component */ 9526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_price_price_component__WEBPACK_IMPORTED_MODULE_1__.PriceComponent,
        _core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__.PageTitleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule], exports: [_price_price_component__WEBPACK_IMPORTED_MODULE_1__.PriceComponent,
        _core_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_2__.PageTitleComponent,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCXVTjTuBUXf-UWlpKfKHjomfPezutmPwI',
        authDomain: 'cas-fee-shop.firebaseapp.com',
        databaseURL: 'https://cas-fee-shop.firebaseio.com',
        projectId: 'cas-fee-shop',
        storageBucket: 'cas-fee-shop.appspot.com',
        messagingSenderId: '323643286137'
    }
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map