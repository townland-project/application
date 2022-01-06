(()=>{
    var t = {
        445: (t,e,n)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.CApp = void 0;
            const o = n(653)
              , r = n(690);
            n(629),
            e.CApp = class {
                constructor() {
                    this.Event = r.Event
                }
                get Character() {
                    return new o.CCharacter
                }
            }
        }
        ,
        629: (t,e,n)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const o = n(690);
            o.Event.on("app:back", (()=>{
                0 == window.history.length ? o.Event.emit("app:close") : window.history.back()
            }
            ))
        }
        ,
        653: (t,e,n)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.CCharacter = void 0;
            const o = n(690);
            e.CCharacter = class {
                constructor() {}
                change(t) {
                    o.Event.on("character:change", (e=>t(e)))
                }
                get() {
                    return new Promise((t=>{
                        o.Event.once("character:get", (e=>t(e))),
                        o.Event.emit("character:get")
                    }
                    ))
                }
                set(t) {
                    o.Event.emit("character:set", t)
                }
                getAssetsUrl() {
                    return new Promise((t=>{
                        o.Event.once("character:assets:get", (e=>t(e))),
                        o.Event.emit("character:assets:get")
                    }
                    ))
                }
            }
        }
        ,
        690: (t,e)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.Event = e.CEvent = void 0;
            class n {
                constructor() {
                    this.callback = {},
                    this.stack = {},
                    this._listen()
                }
                has(t) {
                    return t in this.callback
                }
                isStacked(t) {
                    return t in this.stack
                }
                on(t, e) {
                    return this._add(t, e, !1)
                }
                once(t, e) {
                    return this._add(t, e, !0)
                }
                emit(t, ...e) {
                window.parent.postMessage({
                        id: "townland:app",
                        name: t,
                        params: e
                    }, "*")
                }
                _add(t, e, n) {
                    t in this.callback == 0 && (this.callback[t] = []),
                    this.callback[t].push({
                        once: n,
                        function: e
                    });
                    let o = this._getStackDataParams(t);
                    return null != o && this.emit(t, ...o),
                    {
                        remove: ()=>this._remove(t, this.callback[t].length - 1)
                    }
                }
                _remove(t, e) {
                    this.callback[t].splice(e, 1),
                    0 == this.callback[t].length && delete this.callback[t]
                }
                _getStackDataParams(t) {
                    let e = this.stack[t];
                    return setTimeout((()=>{
                        t in this.stack && delete this.stack[t]
                    }
                    ), 0),
                    e
                }
                _listen() {
                  console.log("listen");
                    window.addEventListener("message", (t=>{
                        let {name: e, params: n} = t.data;
                      console.log(t.data);
                        e in this.callback ? this.callback[e].forEach(((t,o)=>{
                            t.function(...n),
                            t.once && this._remove(e, o)
                        }
                        )) : this.stack[e] = n
                    }
                    ))
                }
            }
            e.CEvent = n,
            e.Event = new n
        }
        ,
        295: function(t, e, n) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(t, e, n, o) {
                void 0 === o && (o = n),
                Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function() {
                        return e[n]
                    }
                })
            }
            : function(t, e, n, o) {
                void 0 === o && (o = n),
                t[o] = e[n]
            }
            )
              , r = this && this.__exportStar || function(t, e) {
                for (var n in t)
                    "default" === n || Object.prototype.hasOwnProperty.call(e, n) || o(e, t, n)
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.App = void 0;
            const i = n(445);
            r(n(847), e),
            e.App = new i.CApp
        },
        847: (t,e)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        635: (t,e)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.Attribute = void 0,
            e.Attribute = function(t) {
                return function(e, n) {
                    const o = Object.getOwnPropertyDescriptor(e, n);
                    let r = e[n];
                    const i = {
                        get() {
                            return o ? o.get() : this._component_attr[t] && (r = this._component_attr[t]),
                            r
                        },
                        set: t=>{
                            o && o.set(t),
                            r = t
                        }
                        ,
                        enumerable: null == o || o.enumerable,
                        configurable: null == o || o.configurable
                    };
                    Object.defineProperty(e, t, i)
                }
            }
        }
        ,
        768: (t,e)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.Bind = void 0,
            e.Bind = function(t) {
                return function(e, n) {
                    const o = Object.getOwnPropertyDescriptor(e, n);
                    let r = e[n];
                    const i = {
                        get: ()=>(o && o.get(),
                        r),
                        set: function(e) {
                            this._component_root && (this._component_root.querySelector(`[bind-value="${t}"]`).innerHTML = e),
                            o && o.set(e),
                            r = e
                        },
                        enumerable: null == o || o.enumerable,
                        configurable: null == o || o.configurable
                    };
                    Object.defineProperty(e, t, i)
                }
            }
        }
        ,
        659: (t,e)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.ComponentHelper = e.Component = void 0,
            e.Component = function(t) {
                return e=>{
                    e.prototype._component_config = t,
                    e.prototype._component_attr = {}
                }
            }
            ,
            e.ComponentHelper = class {
                get Element() {
                    return this._component_root
                }
                get Attributes() {
                    return this._component_attr
                }
                ValueChanged() {
                    this._component_changed()
                }
            }
        }
        ,
        818: function(t, e, n) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(t, e, n, o) {
                void 0 === o && (o = n),
                Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function() {
                        return e[n]
                    }
                })
            }
            : function(t, e, n, o) {
                void 0 === o && (o = n),
                t[o] = e[n]
            }
            )
              , r = this && this.__exportStar || function(t, e) {
                for (var n in t)
                    "default" === n || Object.prototype.hasOwnProperty.call(e, n) || o(e, t, n)
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            r(n(425), e),
            r(n(134), e)
        },
        134: (t,e)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.Injectable = e.Inject = e.InjectMap = void 0,
            e.InjectMap = new class {
                constructor() {
                    this.deps = {}
                }
                get(t) {
                    const e = this.deps[t];
                    if (!e)
                        throw new Error("No Matches Found");
                    return e
                }
                set(t, e) {
                    this.deps[t] = e
                }
            }
            ,
            e.Inject = function(t) {
                return function(n, o) {
                    return n[o] = e.InjectMap.get(t)
                }
            }
            ,
            e.Injectable = function(t) {
                return function(n) {
                    "function" == typeof n ? e.InjectMap.set(t, new n) : "function" != typeof n && e.InjectMap.set(t, n)
                }
            }
        }
        ,
        425: function(t, e) {
            "use strict";
            var n = this && this.__awaiter || function(t, e, n, o) {
                return new (n || (n = Promise))((function(r, i) {
                    function a(t) {
                        try {
                            l(o.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }
                    function s(t) {
                        try {
                            l(o.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }
                    function l(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value,
                        e instanceof n ? e : new n((function(t) {
                            t(e)
                        }
                        ))).then(a, s)
                    }
                    l((o = o.apply(t, e || [])).next())
                }
                ))
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.RenderComponent = e.RenderModule = void 0;
            let o = 0;
            const r = ["_component_config", "_component_id", "_component_root", "_component_changed"]
              , i = new MutationObserver((function(t) {
                var e;
                for (const n of t)
                    if ("attributes" == n.type && (null === (e = n.attributeName) || void 0 === e ? void 0 : e.includes("bind-init-")) && n.target.nodeName.toLowerCase()in a) {
                        const t = n.attributeName.replace("bind-init-", "")
                          , e = n.target.getAttribute(n.attributeName)
                          , o = n.target.component;
                        o._component_attr[t] = e,
                        o._component_root.querySelector(`[bind-value="${t}"]`).innerHTML = e,
                        o.AttributeOnChange && o.AttributeOnChange()
                    }
            }
            ))
              , a = {};
            function s(t, e) {
                return n(this, void 0, void 0, (function*() {
                    const n = "string" == typeof t ? a[t] : new t;
                    if (null == n)
                        return console.error(`You don't have '${t}' component.`),
                        Promise.reject();
                    const s = n._component_config;
                    if (s.templateUrl)
                        try {
                            const t = yield fetch(s.templateUrl);
                            s.template = yield t.text()
                        } catch (t) {
                            return console.error(`Cannot fetch '${s.id}/${s.templateUrl}'`),
                            Promise.reject()
                        }
                    try {
                        if (null == customElements.get(s.id)) {
                            class c extends HTMLElement {
                                constructor() {
                                    super(),
                                    this.component = "string" == typeof t ? a[t] : new t,
                                    delete this.component._component_config,
                                    this.component._component_attr = {},
                                    o++,
                                    this.component._component_id = `CUID-${o}`,
                                    Object.assign(this.component, (null == e ? void 0 : e.Values) || {}),
                                    this.prototype = Object.getPrototypeOf(this.component),
                                    this.prototype.ComponentOnInit && this.prototype.ComponentOnInit.bind(n).call()
                                }
                                connectedCallback() {
                                    const t = document.createRange()
                                      , e = (n = s.template,
                                    o = this.component,
                                    n = n.replace(/{{(.*?)}}/g, (t=>l(t.split(/{{|}}/).filter(Boolean)[0], o) || "")),
                                    function(t, e) {
                                        return t.querySelectorAll("[bind-click]").forEach((t=>{
                                            const n = t.getAttribute("bind-click")
                                              , o = n.split("(")[0];
                                            if (o in e) {
                                                const r = n.split("(")[1].split(")")[0].split(",")
                                                  , i = e[o];
                                                t.onclick = t=>{
                                                    if (r.includes("$event")) {
                                                        const e = r.indexOf("$event");
                                                        r[e] = t
                                                    }
                                                    i.apply(e, r)
                                                }
                                                ,
                                                t.removeAttribute("bind-click")
                                            }
                                        }
                                        )),
                                        t.querySelectorAll("[bind-change]").forEach((t=>{
                                            const n = t.getAttribute("bind-change")
                                              , o = n.split("(")[0];
                                            if (o in e) {
                                                const r = n.split("(")[1].split(")")[0].split(",")
                                                  , i = e[o];
                                                t.onchange = t=>{
                                                    if (r.includes("$event")) {
                                                        const e = r.indexOf("$event");
                                                        r[e] = t
                                                    }
                                                    i.apply(e, r)
                                                }
                                                ,
                                                t.removeAttribute("bind-change")
                                            }
                                        }
                                        )),
                                        t.querySelectorAll("[bind-keyup]").forEach((t=>{
                                            const n = t.getAttribute("bind-keyup")
                                              , o = n.split("(")[0];
                                            if (o in e) {
                                                const r = n.split("(")[1].split(")")[0].split(",")
                                                  , i = e[o];
                                                t.onkeyup = t=>{
                                                    if (r.includes("$event")) {
                                                        const e = r.indexOf("$event");
                                                        r[e] = t
                                                    }
                                                    i.apply(e, r)
                                                }
                                                ,
                                                t.removeAttribute("bind-keyup")
                                            }
                                        }
                                        )),
                                        t.querySelectorAll("[bind-keydown]").forEach((t=>{
                                            const n = t.getAttribute("bind-keydown")
                                              , o = n.split("(")[0];
                                            if (o in e) {
                                                const r = n.split("(")[1].split(")")[0].split(",")
                                                  , i = e[o];
                                                t.onkeydown = t=>{
                                                    if (r.includes("$event")) {
                                                        const e = r.indexOf("$event");
                                                        r[e] = t
                                                    }
                                                    i.apply(e, r)
                                                }
                                                ,
                                                t.removeAttribute("bind-keydown")
                                            }
                                        }
                                        )),
                                        t.querySelectorAll("[bind-value]").forEach((t=>{
                                            const n = t.getAttribute("bind-value");
                                            if (n in e) {
                                                const o = l(n, e);
                                                t.innerHTML = o
                                            }
                                        }
                                        )),
                                        t
                                    }((new DOMParser).parseFromString(n, "text/html").body, o));
                                    var n, o;
                                    t.selectNodeContents(e),
                                    t.extractContents().childNodes.forEach((t=>this.appendChild(t))),
                                    [].slice.apply(this.attributes).forEach((t=>{
                                        if (t.name.includes("bind-init-")) {
                                            const e = t.name.replace("bind-init-", "");
                                            this.querySelector(`[bind-value="${e}"]`).innerHTML = t.value,
                                            Object.assign(this.component._component_attr, {
                                                [e]: t.value
                                            })
                                        }
                                    }
                                    )),
                                    this.setAttribute(this.component._component_id, ""),
                                    this.component._component_root = this,
                                    this.component._component_changed = ()=>{
                                        for (const t of Object.keys(this.component))
                                            r.includes(t) || this.querySelectorAll(`[bind-value="${t}"]`).forEach((e=>e.innerHTML = this.component[t]))
                                    }
                                    ,
                                    this.prototype.RenderOnInit && this.prototype.RenderOnInit.bind(this.component).call(),
                                    i.observe(this, {
                                        attributes: !0,
                                        childList: !0,
                                        subtree: !0
                                    })
                                }
                                disconnectedCallback() {
                                    this.prototype.RenderOnDestroy && this.prototype.RenderOnDestroy.bind(this.component).call()
                                }
                            }
                            if (customElements.define(s.id, c),
                            s.styleUrl)
                                try {
                                    const t = yield fetch(s.styleUrl);
                                    s.style = yield t.text()
                                } catch (t) {
                                    return console.error(`Cannot fetch '${s.id}/${s.styleUrl}'`),
                                    Promise.reject()
                                }
                            if (s.style) {
                                const t = document.createElement("style");
                                t.appendChild(document.createTextNode(s.style)),
                                t.setAttribute("type", "text/css"),
                                t.setAttribute("component-id", s.id),
                                document.head.appendChild(t)
                            }
                        }
                    } catch (t) {
                        console.error(t)
                    }
                    "string" != typeof t && (a[s.id] = n);
                    const c = document.createElement(s.id);
                    if (s.attr || (s.attr = {}),
                    (null == e ? void 0 : e.Attributes) && Object.assign(s.attr, e.Attributes),
                    null == e ? void 0 : e.Classes) {
                        let t = "string" == typeof e.Classes ? e.Classes.split(" ") : e.Classes;
                        s.attr.class && (t = s.attr.class.split(" ")),
                        Object.assign(s.attr, {
                            class: [...new Set(t)].join(" ")
                        })
                    }
                    if (null == e ? void 0 : e.Styles) {
                        const t = Object.keys(e.Styles).map((t=>`${t}: ${e.Styles[t]}`)).join(";");
                        Object.assign(s.attr, {
                            style: t
                        })
                    }
                    for (const t of Object.keys(s.attr || []))
                        c.setAttribute(t, s.attr[t]);
                    return c
                }
                ))
            }
            function l(t, e) {
                const n = t.split(".");
                return n.length > 1 ? l(n.slice(1).join("."), e[n[0]]) : e[t]
            }
            e.RenderModule = function(t) {
                return n(this, void 0, void 0, (function*() {
                    const e = new t;
                    if (e._module_config.Bootstrap)
                        return yield s(e._module_config.Bootstrap);
                    console.error("Module doesn't have Bootstrap.")
                }
                ))
            }
            ,
            e.RenderComponent = s
        },
        199: function(t, e, n) {
            "use strict";
            var o = this && this.__createBinding || (Object.create ? function(t, e, n, o) {
                void 0 === o && (o = n),
                Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function() {
                        return e[n]
                    }
                })
            }
            : function(t, e, n, o) {
                void 0 === o && (o = n),
                t[o] = e[n]
            }
            )
              , r = this && this.__exportStar || function(t, e) {
                for (var n in t)
                    "default" === n || Object.prototype.hasOwnProperty.call(e, n) || o(e, t, n)
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            r(n(635), e),
            r(n(659), e),
            r(n(670), e),
            r(n(818), e),
            r(n(768), e)
        },
        670: (t,e,n)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.Module = void 0;
            const o = n(425);
            e.Module = function(t) {
                return e=>{
                    t.Component.forEach((t=>(0,
                    o.RenderComponent)(t))),
                    e.prototype._module_config = t
                }
            }
        }
        ,
        99: (t,e,n)=>{
            "use strict";
            n.d(e, {
                Z: ()=>s
            });
            var o = n(81)
              , r = n.n(o)
              , i = n(645)
              , a = n.n(i)()(r());
            a.push([t.id, "*{border:none;outline:none;user-select:none}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}:root{--tl-style-element-border-radius: 10px;--tl-style-element-font-size: 18px;--tl-style-button-size: 46px;--tl-style-button-border-radius: var(--tl-style-element-border-radius);--tl-style-button-font-size: var(--tl-style-element-font-size);--tl-style-button-horizontal-padding: 16px;--tl-style-dialog-border-radius: var(--tl-style-element-border-radius);--tl-style-dialog-header-height: 46px;--tl-style-dialog-header-button-size: 32px;--tl-style-dialog-body-padding: 7px;--tl-style-input-border-radius: var(--tl-style-element-border-radius);--tl-style-input-height: 44px;--tl-style-input-horizontal-padding: 12px;--tl-style-icon-size: 24px}button:not([disabled]){cursor:pointer}button.tl-button,button.tl-button-icon{position:relative;border-radius:var(--tl-style-button-border-radius);height:var(--tl-style-button-size);font-size:var(--tl-style-button-font-size);background-color:var(--background-color, #ffffff);color:var(--color, #000000);display:inline-flex;align-items:center;justify-content:center}button.tl-button.tl-button-shadowed,button.tl-button-icon.tl-button-shadowed{box-shadow:0 7px var(--shadow-color)}button.tl-button.tl-button-shadowed:hover,button.tl-button-icon.tl-button-shadowed:hover{top:-1px;box-shadow:0 8px var(--shadow-color)}button.tl-button.tl-button-shadowed:active,button.tl-button-icon.tl-button-shadowed:active{top:2px;box-shadow:0 5px var(--shadow-color)}button.tl-button.tl-button-gradient,button.tl-button-icon.tl-button-gradient{background-image:linear-gradient(var(--tl-button-gradient-angle, 145deg), var(--left-color) 0%, var(--right-color) 100%)}button.tl-button.tl-button-bordered,button.tl-button-icon.tl-button-bordered{border:2px solid var(--border-color)}button.tl-button:not(.tl-button-shadowed):hover,button.tl-button-icon:not(.tl-button-shadowed):hover{transform:scale(1.05)}button.tl-button:not(.tl-button-shadowed):active,button.tl-button-icon:not(.tl-button-shadowed):active{transform:scale(0.9)}button.tl-button svg,button.tl-button-icon svg{width:var(--tl-style-icon-size);height:var(--tl-style-icon-size);fill:var(--color)}button.tl-button-icon{min-width:var(--tl-style-button-size);width:var(--tl-style-button-size)}button.tl-button{padding:0px var(--tl-style-button-horizontal-padding)}div.tl-dialog{position:fixed;min-width:var(--min-width);width:var(--width);max-height:var(--max-height);border:var(--tl-style-dialog-border);border-radius:var(--tl-style-dialog-border-radius);background-color:var(--background-color, #ffffff);box-shadow:0 5px 15px var(--shadow-color)}div.tl-dialog.hide{opacity:0;pointer-events:none}div.tl-dialog.tl-dialog-center{top:50%;left:50%;transform:translate(-50%, -50%)}div.tl-dialog header{height:var(--tl-style-dialog-header-height);background-color:var(--header-background-color);box-shadow:0 3px 6px var(--header-shadow-color);border-radius:var(--tl-style-dialog-border-radius) var(--tl-style-dialog-border-radius) 0 0;display:flex;align-items:center}div.tl-dialog header span.tl-dialog-title{margin:0 auto}div.tl-dialog header button.tl-button-icon{margin:0 5px;min-width:var(--tl-style-dialog-header-button-size);width:var(--tl-style-dialog-header-button-size);height:var(--tl-style-dialog-header-button-size)}div.tl-dialog main{min-height:var(--min-height, 20px);max-height:var(--max-height);padding:var(--tl-style-dialog-body-padding)}input.tl-input{border-radius:var(--tl-style-input-border-radius);background-color:var(--background-color);color:var(--color);height:var(--tl-style-input-height);padding:0 var(--tl-style-input-horizontal-padding)}input.tl-input.tl-input-inner-shadowed{box-shadow:inset 0 0 10px var(--shadow-color)}input.tl-input.tl-input-shadowed{box-shadow:0 4px 8px var(--shadow-color)}input.tl-input.tl-input-bordered{border:2px solid var(--border-color)}input.tl-input::placeholder{color:var(--placeholder-color)}", ""]);
            const s = a
        }
        ,
        645: t=>{
            "use strict";
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map((function(e) {
                        var n = ""
                          , o = void 0 !== e[5];
                        return e[4] && (n += "@supports (".concat(e[4], ") {")),
                        e[2] && (n += "@media ".concat(e[2], " {")),
                        o && (n += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")),
                        n += t(e),
                        o && (n += "}"),
                        e[2] && (n += "}"),
                        e[4] && (n += "}"),
                        n
                    }
                    )).join("")
                }
                ,
                e.i = function(t, n, o, r, i) {
                    "string" == typeof t && (t = [[null, t, void 0]]);
                    var a = {};
                    if (o)
                        for (var s = 0; s < this.length; s++) {
                            var l = this[s][0];
                            null != l && (a[l] = !0)
                        }
                    for (var c = 0; c < t.length; c++) {
                        var u = [].concat(t[c]);
                        o && a[u[0]] || (void 0 !== i && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")),
                        u[5] = i),
                        n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"),
                        u[2] = n) : u[2] = n),
                        r && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"),
                        u[4] = r) : u[4] = "".concat(r)),
                        e.push(u))
                    }
                }
                ,
                e
            }
        }
        ,
        81: t=>{
            "use strict";
            t.exports = function(t) {
                return t[1]
            }
        }
        ,
        756: t=>{
            t.exports = '<p><span>main</span> component is working!</p>\n\n<button class="tl-button tl-button-shadowed tl-button-gradient"\n    style="--left-color: #2d98da; --right-color: #4b7bec; --color: #fff; --shadow-color: #3867d6;"\n    bind-click="Close()">Close App</button>'
        }
        ,
        86: t=>{
            t.exports = "app-main{display:flex;flex-direction:column;font-family:Tahoma,Geneva,Verdana,sans-serif}p span{font-weight:bold}button{margin:10vh auto}"
        }
        ,
        273: (t,e,n)=>{
            "use strict";
            n.r(e),
            n.d(e, {
                default: ()=>v
            });
            var o = n(379)
              , r = n.n(o)
              , i = n(795)
              , a = n.n(i)
              , s = n(569)
              , l = n.n(s)
              , c = n(565)
              , u = n.n(c)
              , d = n(216)
              , p = n.n(d)
              , b = n(589)
              , h = n.n(b)
              , f = n(99)
              , m = {};
            m.styleTagTransform = h(),
            m.setAttributes = u(),
            m.insert = l().bind(null, "head"),
            m.domAPI = a(),
            m.insertStyleElement = p(),
            r()(f.Z, m);
            const v = f.Z && f.Z.locals ? f.Z.locals : void 0
        }
        ,
        379: t=>{
            "use strict";
            var e = [];
            function n(t) {
                for (var n = -1, o = 0; o < e.length; o++)
                    if (e[o].identifier === t) {
                        n = o;
                        break
                    }
                return n
            }
            function o(t, o) {
                for (var i = {}, a = [], s = 0; s < t.length; s++) {
                    var l = t[s]
                      , c = o.base ? l[0] + o.base : l[0]
                      , u = i[c] || 0
                      , d = "".concat(c, " ").concat(u);
                    i[c] = u + 1;
                    var p = n(d)
                      , b = {
                        css: l[1],
                        media: l[2],
                        sourceMap: l[3],
                        supports: l[4],
                        layer: l[5]
                    };
                    if (-1 !== p)
                        e[p].references++,
                        e[p].updater(b);
                    else {
                        var h = r(b, o);
                        o.byIndex = s,
                        e.splice(s, 0, {
                            identifier: d,
                            updater: h,
                            references: 1
                        })
                    }
                    a.push(d)
                }
                return a
            }
            function r(t, e) {
                var n = e.domAPI(e);
                return n.update(t),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer)
                            return;
                        n.update(t = e)
                    } else
                        n.remove()
                }
            }
            t.exports = function(t, r) {
                var i = o(t = t || [], r = r || {});
                return function(t) {
                    t = t || [];
                    for (var a = 0; a < i.length; a++) {
                        var s = n(i[a]);
                        e[s].references--
                    }
                    for (var l = o(t, r), c = 0; c < i.length; c++) {
                        var u = n(i[c]);
                        0 === e[u].references && (e[u].updater(),
                        e.splice(u, 1))
                    }
                    i = l
                }
            }
        }
        ,
        569: t=>{
            "use strict";
            var e = {};
            t.exports = function(t, n) {
                var o = function(t) {
                    if (void 0 === e[t]) {
                        var n = document.querySelector(t);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head
                            } catch (t) {
                                n = null
                            }
                        e[t] = n
                    }
                    return e[t]
                }(t);
                if (!o)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                o.appendChild(n)
            }
        }
        ,
        216: t=>{
            "use strict";
            t.exports = function(t) {
                var e = document.createElement("style");
                return t.setAttributes(e, t.attributes),
                t.insert(e, t.options),
                e
            }
        }
        ,
        565: (t,e,n)=>{
            "use strict";
            t.exports = function(t) {
                var e = n.nc;
                e && t.setAttribute("nonce", e)
            }
        }
        ,
        795: t=>{
            "use strict";
            t.exports = function(t) {
                var e = t.insertStyleElement(t);
                return {
                    update: function(n) {
                        !function(t, e, n) {
                            var o = "";
                            n.supports && (o += "@supports (".concat(n.supports, ") {")),
                            n.media && (o += "@media ".concat(n.media, " {"));
                            var r = void 0 !== n.layer;
                            r && (o += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")),
                            o += n.css,
                            r && (o += "}"),
                            n.media && (o += "}"),
                            n.supports && (o += "}");
                            var i = n.sourceMap;
                            i && "undefined" != typeof btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")),
                            e.styleTagTransform(o, t, e.options)
                        }(e, t, n)
                    },
                    remove: function() {
                        !function(t) {
                            if (null === t.parentNode)
                                return !1;
                            t.parentNode.removeChild(t)
                        }(e)
                    }
                }
            }
        }
        ,
        589: t=>{
            "use strict";
            t.exports = function(t, e) {
                if (e.styleSheet)
                    e.styleSheet.cssText = t;
                else {
                    for (; e.firstChild; )
                        e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(t))
                }
            }
        }
        ,
        238: function(t, e, n) {
            "use strict";
            var o = this && this.__decorate || function(t, e, n, o) {
                var r, i = arguments.length, a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)
                        (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a),
                a
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.MainComponent = void 0;
            const r = n(295)
              , i = n(199);
            let a = class {
                Close() {
                    r.App.Event.emit("app:close")
                }
            }
            ;
            a = o([(0,
            i.Component)({
                id: "app-main",
                template: n(756),
                style: n(86)
            })], a),
            e.MainComponent = a
        },
        656: function(t, e, n) {
            "use strict";
            var o = this && this.__decorate || function(t, e, n, o) {
                var r, i = arguments.length, a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)
                        (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a),
                a
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.AppModule = void 0;
            const r = n(199)
              , i = n(238);
            let a = class {
            }
            ;
            a = o([(0,
            r.Module)({
                Component: [],
                Bootstrap: i.MainComponent
            })], a),
            e.AppModule = a
        }
    }
      , e = {};
    function n(o) {
        var r = e[o];
        if (void 0 !== r)
            return r.exports;
        var i = e[o] = {
            id: o,
            exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n),
        i.exports
    }
    n.n = t=>{
        var e = t && t.__esModule ? ()=>t.default : ()=>t;
        return n.d(e, {
            a: e
        }),
        e
    }
    ,
    n.d = (t,e)=>{
        for (var o in e)
            n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, {
                enumerable: !0,
                get: e[o]
            })
    }
    ,
    n.o = (t,e)=>Object.prototype.hasOwnProperty.call(t, e),
    n.r = t=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    (()=>{
        "use strict";
        n(273);
        const t = n(295)
          , e = n(199)
          , o = n(656);
        (0,
        e.RenderModule)(o.AppModule).then((t=>{
            var e;
            return null === (e = document.getElementById("root")) || void 0 === e ? void 0 : e.appendChild(t)
        }
        )),
        t.App.Event.on("app:ready", (()=>{
            document.body.style.backgroundColor = "black",
            document.body.style.color = "white"
        }
        ))
    }
    )()
}
)();
