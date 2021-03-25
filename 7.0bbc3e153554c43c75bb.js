(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{bwCJ:function(o,n,e){"use strict";e.r(n),e.d(n,"RecommendModule",function(){return p});var r=e("PCNd"),c=e("tyNb"),t=e("fXoL"),b=e("IvDN"),a=e("ZyQt"),d=e("GlAO"),s=e("JA5x"),l=e("oyxB");const i=[{path:"common-question",component:(()=>{class o{constructor(){this.code1="\n  location.hash\n  ",this.code2="\n  @NgModule({\n      imports: [RouterModule.forRoot(\n        routes,\n        {\n          useHash: false//\u5173\u95ed\u54c8\u5e0c\u9009\u9879\n        }\n      )],\n      exports: [RouterModule],\n    })\n  ",this.code3='\n  "class-name": false\n  ',this.code4="\n  import { NgZorroAntdModule } from 'ng-zorro-antd';\n  @NgModule({\n    imports: [\n      NgZorroAntdModule\n    ]\n  })\n  export class AppModule {}\n  ",this.code5="\n  import { NgModule } from '@angular/core';\n  import { CommonModule } from '@angular/common';\n  import { ReactiveFormsModule, FormsModule } from '@angular/forms';\n  import { RouterModule } from '@angular/router';\n  // region: third libs\n  import { NgZorroAntdModule } from 'ng-zorro-antd';\n\n  const THIRDMODULES = [\n    NgZorroAntdModule\n  ];\n  // endregion\n\n  @NgModule({\n    imports: [\n      CommonModule,\n      FormsModule,\n      RouterModule,\n      ReactiveFormsModule,\n      // third libs\n      ...THIRDMODULES,\n    ],\n    declarations: [\n    ],\n    exports: [\n      CommonModule,\n      FormsModule,\n      ReactiveFormsModule,\n      RouterModule,\n      // third libs\n      ...THIRDMODULES\n    ],\n  })\n  export class SharedModule {}\n  ",this.code6="\n  import { SharedModule } from '../../shared/shared.module';//\u5f15\u5165\u5171\u4eab\u6a21\u5757\n  @NgModule({\n      imports: [\n          SharedModule,\n      ]\n  })\n  export class XxxModule { }\n  ",this.code7="\n  import { CustomComponent } from '../CustomComponent';\n\n  const CUSTOM_COMPONENT = [\n    CustomComponent\n  ];\n\n  @NgModule({\n    declarations: [\n      CUSTOM_COMPONENT\n    ],\n    exports: [\n      CUSTOM_COMPONENT\n    ],\n  })\n  export class SharedModule {}\n  ",this.code8="\n  import { SharedModule } from '../../shared/shared.module';//\u5f15\u5165\u5171\u4eab\u6a21\u5757\n  @NgModule({\n      imports: [\n          SharedModule,\n      ]\n  })\n  export class XxxModule { }\n  ",this.code9="\n  import { XxxService } from './xxx.service';\n\n  @Component({\n      providers: [XxxService]\n  })\n  ",this.code10="\n  import { XxxService } from './xxx.service';\n\n  @NgModule({\n      providers:[\n          XxxService\n      ]\n  })\n  "}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Fb({type:o,selectors:[["ng-component"]],decls:147,vars:8,consts:[[1,"tutorial-no-anchor"],["nzHeader","[tslint] Class name must be in pascal case (class-name)"],["nzColor","#2db7f5"],["nzColor","#87d068"],[1,"key-word"],[3,"code"],["nzHeader","'xxx' is not a known element"],[1,"card"],[1,"info"],["nzTitle","share.module"],["nzTitle","xxx.module"],["nzHeader","Type XxxComponent in D:/xxx.component.ts is part of the declarations of 2 modules"],["nzHeader","NullInjectorError: No provider for XxxService!"],["href","https://angular.ink/angular/service","target","view_window"]],template:function(o,n){1&o&&(t.Rb(0,"div",0),t.Rb(1,"h2"),t.Ac(2,"\u6982\u8ff0"),t.Qb(),t.Ac(3," \u5728\u5b9e\u9645\u5e94\u7528\u5f00\u53d1\u4e2d, \u6709\u4e9b\u95ee\u9898\u662f\u5f00\u53d1\u8005\u7ecf\u5e38\u9047\u5230\u7684.\u73b0\u5c06\u4e00\u4e9b\u5e38\u89c1\u7684\u95ee\u9898\u5728\u6b64\u5c0f\u8282\u4e2d\u5217\u51fa, \u5e76\u63d0\u4f9b\u89e3\u51b3\u65b9\u6848. "),t.Rb(4,"h2"),t.Ac(5,"\u90a3\u4e9b\u5e74, \u6211\u4eec\u4e00\u8d77\u8e29\u8fc7\u7684\u5751"),t.Qb(),t.Rb(6,"nz-collapse"),t.Rb(7,"nz-collapse-panel",1),t.Rb(8,"nz-tag",2),t.Ac(9,"\u95ee\u9898\u5206\u6790"),t.Qb(),t.Rb(10,"div"),t.Ac(11," tslint\u662f\u7528\u6765\u89c4\u8303\u4f60\u5199\u4ee3\u7801\u7684\u683c\u5f0f\u7684.\u4ee5\u8fd9\u4e2a\u63d0\u793a\u4e3a\u4f8b, \u662f\u6307\u7c7b\u540d\u5f00\u5934\u5c0f\u5199\u4e86, tslint\u8981\u6c42\u7c7b\u540d\u5fc5\u987b\u5927\u5199\u5f00\u5934.tslint\u76f4\u63a5\u5f71\u54cd\u7684\u662f\u4ee3\u7801\u8d28\u91cf.\u53ef\u4ee5\u8bf4, \u4e0d\u540c\u7684tslint\u89c4\u5219\u4fdd\u8bc1\u4e86Angular\u7684\u56e2\u961f\u534f\u4f5c\u529b, \u4ea7\u751f\u4e86\u4e00\u81f4\u7684\u4ee3\u7801\u98ce\u683c. "),t.Qb(),t.Rb(12,"nz-tag",3),t.Ac(13,"\u89e3\u51b3\u65b9\u6848"),t.Qb(),t.Rb(14,"div"),t.Ac(15," \u627e\u5230\u6587\u4ef6 "),t.Rb(16,"span",4),t.Ac(17,"tslint.json"),t.Qb(),t.Ac(18,", \u641c\u7d22\u62a5\u9519(\u5176\u5b9e\u4e0d\u7b97\u662f\u62a5\u9519, \u4e0d\u4fee\u6539\u4e5f\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c)\u63d0\u793a\u4e2d\u672b\u5c3e\u5c0f\u62ec\u53f7\u7684\u5185\u5bb9 "),t.Rb(19,"span",4),t.Ac(20,"class-name"),t.Qb(),t.Ac(21,", \u5c31\u53ef\u4ee5\u67e5\u627e\u5230\u8fd9\u4e2a\u914d\u7f6e\u5904, \u5e76\u6539\u4e3afalse\u5373\u53ef.\u5176\u4ed6\u7684tslint\u4e5f\u662f\u8fd9\u6837\u8bbe\u7f6e\u7684. "),t.Mb(22,"code-mirror",5),t.Qb(),t.Qb(),t.Rb(23,"nz-collapse-panel",6),t.Rb(24,"nz-tag",2),t.Ac(25,"\u95ee\u9898\u5206\u6790"),t.Qb(),t.Rb(26,"div"),t.Ac(27," \u8bb8\u591a\u5f00\u53d1\u8005\u5410\u69fd, \u660e\u660e\u5728 "),t.Rb(28,"span",4),t.Ac(29,"app.module.ts"),t.Qb(),t.Ac(30,"\u4e2d\u5f15\u5165\u4e86\u6837\u5f0f\u7ec4\u4ef6(\u4ee5zorro\u7684nz-card\u4e3a\u4f8b), \u4f46\u662f\u4f9d\u7136\u65e0\u6cd5\u751f\u6548.\u5f80\u5f80\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b, \u4f1a\u6709\u8fd9\u6837\u7684\u62a5\u9519 "),t.Rb(31,"nz-card",7),t.Ac(32,' ERROR Error: "Uncaught (in promise): Error: Template parse errors: '),t.Mb(33,"br"),t.Ac(34," 'nz-card' is not a known element: "),t.Mb(35,"br"),t.Ac(36," 1. If 'nz-card' is an Angular component, then verify that it is part of this module. "),t.Mb(37,"br"),t.Ac(38," 2. If 'nz-card' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.\" "),t.Qb(),t.Ac(39," \u6211\u4eec\u5c1d\u8bd5\u7740\u7ffb\u8bd1\u4e3a\u4e2d\u6587: "),t.Mb(40,"br"),t.Rb(41,"nz-card",7),t.Ac(42," 'nz-card'\u662f\u4e00\u4e2a\u672a\u77e5\u5143\u7d20: "),t.Mb(43,"br"),t.Ac(44," 1.\u5982\u679c'nz-card'\u662f\u4e00\u4e2aAngular\u7ec4\u4ef6, \u90a3\u4e48\u8bc1\u660e\u4ed6\u662f\u8fd9\u4e2a\u6a21\u5757\u7684\u4e00\u90e8\u5206. "),t.Mb(45,"br"),t.Ac(46," 2.\u5982\u679c'nz-card'\u662f\u4e00\u4e2aWeb\u7ec4\u4ef6, \u90a3\u4e48\u5728\u8fd9\u4e2a\u7ec4\u4ef6\u4e2d\u6dfb\u52a0'CUSTOM_ELEMENTS_SCHEMA'\u81f3'@NgModule.schemas'\u4ee5\u8fc7\u6ee4\u8fd9\u4e2a\u63d0\u793a. "),t.Qb(),t.Ac(47," \u5b9e\u9645\u4e0a, \u4e00\u822c\u90fd\u662f\u7b2c\u4e00\u79cd\u60c5\u51b5.\u53ef\u662f\u4f60\u7684\u7684\u786e\u786e\u5f15\u5165\u4e86zorro. "),t.Mb(48,"code-mirror",5),t.Ac(49," \u5176\u5b9e\u95ee\u9898\u51fa\u5728\u6a21\u5757\u7684\u5c42\u7ea7\u6982\u5ff5\u4e0a.\u4e3e\u4e2a\u4f8b\u5b50, \u4f60\u7684\u6587\u4ef6\u6a21\u5757\u7ed3\u6784\u662f\u8fd9\u6837\u7684: "),t.Rb(50,"div",8),t.Ac(51," app.module "),t.Mb(52,"br"),t.Ac(53,"\xa0\xa0\xa0\xa0a.module "),t.Mb(54,"br"),t.Ac(55,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0a.component "),t.Mb(56,"br"),t.Ac(57,"\xa0\xa0\xa0\xa0b.module "),t.Mb(58,"br"),t.Ac(59,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0b.component "),t.Qb(),t.Ac(60," \u5f53\u4f60\u5728 "),t.Rb(61,"span",4),t.Ac(62,"a.component"),t.Qb(),t.Ac(63,"\u5f53\u4e2d\u4f7f\u7528zorro\u7684\u7ec4\u4ef6\u65f6, \u5b9e\u9645\u4e0a\u4ed6\u4f1a\u4ece\u53bb "),t.Rb(64,"span",4),t.Ac(65,"a.module"),t.Qb(),t.Ac(66,"\u4e2d\u627e, \u800c\u4e0d\u662f\u53bb "),t.Rb(67,"span",4),t.Ac(68,"app.module"),t.Qb(),t.Ac(69,"\u4e2d\u627e.\u867d\u7136\u8bf4 "),t.Rb(70,"span",4),t.Ac(71,"app.module"),t.Qb(),t.Ac(72,"\u5305\u62ec\u4e86 "),t.Rb(73,"span",4),t.Ac(74,"a.module"),t.Qb(),t.Ac(75,", \u4f46\u662f\u7684\u786e\u8fd9\u6837\u662f\u4e0d\u884c\u7684.\u6240\u4ee5, \u4f60\u7684\u786e\u662f\u5f15\u5165\u4e86zorro, \u4f46\u662f\u5374\u6ca1\u5f15\u5bf9\u5730\u65b9. "),t.Qb(),t.Rb(76,"nz-tag",3),t.Ac(77,"\u89e3\u51b3\u65b9\u6848"),t.Qb(),t.Rb(78,"div"),t.Ac(79," \u9664\u4e86\u5728\u5f53\u524d\u6a21\u5757\u4e2d\u5f15\u5165zorro\u5916, \u6700\u5408\u9002\u7684\u65b9\u6cd5\u662f\u521b\u5efa\u4e00\u4e2a\u5171\u4eab\u6a21\u5757 "),t.Rb(80,"span",4),t.Ac(81,"share.module"),t.Qb(),t.Ac(82,".\u56e0\u4e3a\u51e0\u4e2a\u6a21\u5757\u95f4\u4e0d\u6b62\u90fd\u7528\u5230\u4e86zorro, \u50cf "),t.Rb(83,"span",4),t.Ac(84,"CommonModule"),t.Qb(),t.Ac(85,"\u7b49\u4e5f\u662f\u5404\u4e2a\u6a21\u5757\u6240\u9700\u8981\u7684.\u6240\u4ee5\u5c06\u5176\u62bd\u8c61\u51fa\u6765, \u5728\u6bcf\u4e2a\u6a21\u5757\u4e2d\u90fd\u5f15\u5165 "),t.Rb(86,"span",4),t.Ac(87,"share.module"),t.Qb(),t.Ac(88,", \u63d0\u9ad8\u4ee3\u7801\u53ef\u7ef4\u62a4\u6027. "),t.Rb(89,"nz-tabset"),t.Rb(90,"nz-tab",9),t.Mb(91,"code-mirror",5),t.Qb(),t.Rb(92,"nz-tab",10),t.Mb(93,"code-mirror",5),t.Qb(),t.Qb(),t.Qb(),t.Qb(),t.Rb(94,"nz-collapse-panel",11),t.Rb(95,"nz-tag",2),t.Ac(96,"\u95ee\u9898\u5206\u6790"),t.Qb(),t.Rb(97,"div"),t.Ac(98," \u901a\u8fc7\u62a5\u9519\u53ef\u4ee5\u770b\u5230, "),t.Rb(99,"span",4),t.Ac(100,"XxxComponent"),t.Qb(),t.Ac(101,"\u5728\u4e24\u4e2a\u6a21\u5757\u5f53\u4e2d\u88ab\u58f0\u660e.\u4f46\u662f\u5982\u679c\u53ea\u5728\u4e00\u4e2a\u6a21\u5757\u4e2d\u58f0\u660e, \u53e6\u5916\u4e2a\u6a21\u5757\u5c31\u6ca1\u6cd5\u4f7f\u7528\u4e86.\u90a3\u4e48, \u5982\u4f55\u624d\u80fd\u4f7f\u5f97\u591a\u4e2a\u6a21\u5757\u4f7f\u7528\u540c\u4e00\u4e2a\u7ec4\u4ef6\u5462?\u5176\u5b9e\u8fd9\u70b9\u548c\u524d\u9762\u8fd9\u4e2a\u95ee\u9898\u5dee\u4e0d\u591a, \u6700\u4f73\u5b9e\u8df5\u90fd\u662f\u521b\u5efa "),t.Rb(102,"span",4),t.Ac(103,"share.module"),t.Qb(),t.Ac(104,", \u7edf\u4e00\u7ba1\u7406\u8fd9\u4e9b\u5171\u4eab\u7684\u7ec4\u4ef6. "),t.Qb(),t.Rb(105,"nz-tag",3),t.Ac(106,"\u89e3\u51b3\u65b9\u6848"),t.Qb(),t.Rb(107,"div"),t.Ac(108," \u4e0e\u524d\u9762\u95ee\u9898\u7684\u4e0d\u540c\u4e4b\u5904\u662f, \u5f15\u5165UI\u5e93\u5f80\u5f80\u662f\u5f15\u5165\u4e00\u4e2amodule, \u90a3\u4e48 "),t.Rb(109,"span",4),t.Ac(110,"share.module"),t.Qb(),t.Ac(111,"\u53ea\u9700\u8981import+export.\u800c\u81ea\u5df1\u5b9a\u4e49\u7684\u8de8\u6a21\u5757\u7ec4\u4ef6, \u5728 "),t.Rb(112,"span",4),t.Ac(113,"share.module"),t.Qb(),t.Ac(114,"\u5f53\u4e2d\u5e94\u8be5\u662fdeclaration+export. "),t.Mb(115,"br"),t.Rb(116,"nz-tabset"),t.Rb(117,"nz-tab",9),t.Mb(118,"code-mirror",5),t.Qb(),t.Rb(119,"nz-tab",10),t.Mb(120,"code-mirror",5),t.Qb(),t.Qb(),t.Qb(),t.Qb(),t.Rb(121,"nz-collapse-panel",12),t.Rb(122,"nz-tag",2),t.Ac(123,"\u95ee\u9898\u5206\u6790"),t.Qb(),t.Rb(124,"div"),t.Ac(125," \u8fd9\u91cc\u662f\u6307\u8be5\u670d\u52a1\u6ca1\u6709\u5bf9\u5e94\u7684\u6ce8\u518c\u5546.\u8fd9\u79cd\u9519\u8bef\u5e38\u89c1\u4e8e\u65b0\u624b\u5f00\u53d1\u8005, \u901a\u5e38\u662f\u5bf9\u670d\u52a1\u6ca1\u6709\u660e\u786e\u7684\u6982\u5ff5.\u5177\u4f53\u670d\u52a1\u7684\u6982\u5ff5\u8bf7\u53c2\u8003 "),t.Rb(126,"a",13),t.Ac(127,"\u8fd9\u91cc"),t.Qb(),t.Ac(128,". "),t.Qb(),t.Rb(129,"nz-tag",3),t.Ac(130,"\u89e3\u51b3\u65b9\u6848"),t.Qb(),t.Rb(131,"div"),t.Ac(132," \u5c06\u670d\u52a1\u6dfb\u52a0\u81f3\u6ce8\u518c\u5546\u5373\u53ef.\u6ce8\u518c\u65b9\u5f0f\u5206\u4e3a "),t.Rb(133,"span",4),t.Ac(134,"\u7ec4\u4ef6\u7ea7\u6ce8\u518c"),t.Qb(),t.Ac(135,"\u548c "),t.Rb(136,"span",4),t.Ac(137,"\u6a21\u5757\u7ea7\u6ce8\u518c"),t.Qb(),t.Ac(138,".\u4e8c\u8005\u7684\u533a\u522b\u5728 "),t.Rb(139,"a",13),t.Ac(140,"\u8fd9\u91cc"),t.Qb(),t.Ac(141,"\u5df2\u7ecf\u89e3\u91ca\u7684\u975e\u5e38\u6e05\u695a\u4e86, \u4e0d\u518d\u8d58\u8ff0. "),t.Rb(142,"nz-tabset"),t.Rb(143,"nz-tab",9),t.Mb(144,"code-mirror",5),t.Qb(),t.Rb(145,"nz-tab",10),t.Mb(146,"code-mirror",5),t.Qb(),t.Qb(),t.Qb(),t.Qb(),t.Qb(),t.Qb()),2&o&&(t.zb(22),t.ic("code",n.code3),t.zb(26),t.ic("code",n.code4),t.zb(43),t.ic("code",n.code5),t.zb(2),t.ic("code",n.code6),t.zb(25),t.ic("code",n.code7),t.zb(2),t.ic("code",n.code8),t.zb(24),t.ic("code",n.code9),t.zb(2),t.ic("code",n.code10))},directives:[b.a,b.c,a.a,d.a,s.a,l.b,l.a],styles:[""]}),o})()}];let m=(()=>{class o{}return o.\u0275mod=t.Jb({type:o}),o.\u0275inj=t.Ib({factory:function(n){return new(n||o)},imports:[[c.i.forChild(i)],c.i]}),o})();e("PScX"),e("B+r4"),e("dEAy"),e("tk/3"),e("ofXK"),e("bE2y"),e("3Pt+"),e("OzZK"),e("RwU8"),e("C2AL"),e("HDdC"),e("rMZv");let p=(()=>{class o{}return o.\u0275mod=t.Jb({type:o}),o.\u0275inj=t.Ib({factory:function(n){return new(n||o)},imports:[[r.a,m]]}),o})()}}]);