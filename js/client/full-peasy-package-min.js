(function(){var f=twoside("peasy/peasy.js").exports,p=[].indexOf||function(a){for(var d=0,b=this.length;d<b;d++)if(d in this&&this[d]===a)return d;return-1},h=[].slice;f.Parser=f.BaseParser=function(){return function(){var a,d;d=this;a=this.base={};this.ruleIndex=0;a.parse=this.parse=function(b,k,e){null==k&&(k=d.root);null==e&&(e=0);d.data=b;d.cur=e;d.ruleStack={};d.cache={};return k()};a.rec=this.rec=function(b){var k;k=d.ruleIndex++;return function(){var e,a,l,c;a=d.ruleStack;e=null!=(c=d.cache)[k]?
c[k]:c[k]={};c=d.cur;a=null!=a[c]?a[c]:a[c]=[];if(0>p.call(a,k)){a.push(k);for(e=null!=e[c]?e[c]:e[c]=[void 0,c];;)if(d.cur=c,l=b())if(e[1]===d.cur){e[0]=l;break}else e[0]=l,e[1]=d.cur;else{l=e[0];d.cur=e[1];break}a.pop();return l}e=e[c];d.cur=e[1];return e[0]}};a.memo=this.memo=function(b){var k;k=d.ruleIndex++;return function(e){return function(){var e,a;e=null!=(a=d.cache)[k]?a[k]:a[k]={};a=d.cur;if(e=e[a])return d.cur=e[1],e[0];e=b();d.cache[k][a]=[e,d.cur];return e}}(this)};a.orp=this.orp=function(){var b,
k;k=1<=arguments.length?h.call(arguments,0):[];k=function(){var e,a,l;l=[];e=0;for(a=k.length;e<a;e++)b=k[e],"string"===typeof b?l.push(d.literal(b)):l.push(b);return l}();return function(e){return function(){var e,a,c,g;a=d.cur;c=0;for(g=k.length;c<g;c++)if(b=k[c],d.cur=a,e=b())return e}}(this)};a.andp=this.andp=function(){var b,a;a=1<=arguments.length?h.call(arguments,0):[];a=function(){var e,t,l;l=[];e=0;for(t=a.length;e<t;e++)b=a[e],"string"===typeof b?l.push(d.literal(b)):l.push(b);return l}();
return function(){var e,d,l;d=0;for(l=a.length;d<l;d++)if(b=a[d],!(e=b()))return;return e}};a.notp=this.notp=function(b){"string"===typeof b&&(b=d.literal(b));return function(){return!b()}};a.may=this.may=function(b){"string"===typeof b&&(b=d.literal(b));return function(a){return function(){var e,a;e=d.cur;if(a=b())return a;d.cur=e;return!0}}(this)};a.any=this.any=function(b){"string"===typeof b&&(b=d.literal(b));return function(a){return function(){var e,a;for(e=[];a=b();)e.push(a);return e}}(this)};
a.some=this.some=function(b){"string"===typeof b&&(b=d.literal(b));return function(){var a,e;if(e=b()){for(a=[e];e=b();)a.push(e);return a}}};a.times=this.times=function(b,a){"string"===typeof b&&(b=d.literal(b));return function(){var e,d;for(e=0;e++<a;)if(d=b())result.push(d);else return;return result}};a.list=this.list=function(b,a){null==a&&(a=d.spaces);"string"===typeof b&&(b=d.literal(b));"string"===typeof a&&(a=d.literal(a));return function(){var e,d;if(d=b()){for(e=[d];a()&&(d=b());)e.push(d);
return e}}};a.listn=this.listn=function(b,a,e){null==e&&(e=d.spaces);"string"===typeof b&&(b=d.literal(b));"string"===typeof e&&(e=d.literal(e));return function(){var d,l,c;if(c=b()){l=[c];for(d=1;d++<a;)if(e()&&(c=b()))l.push(c);else return;return l}}};a.follow=this.follow=function(b){"string"===typeof b&&(b=d.literal(b));return function(a){return function(){var a,k;a=d.cur;k=b();d.cur=a;return k}}(this)};a.literal=this.literal=function(b){return function(){var a,e;a=b.length;e=d.cur;if(d.data.slice(e,
a=e+a)===b)return d.cur=a,!0}};a["char"]=this["char"]=function(b){return function(){if(d.data[d.cur]===b)return d.cur++,b}};a.wrap=this.wrap=function(b,a,e){null==a&&(a=d.spaces);null==e&&(e=d.spaces);"string"===typeof b&&(b=d.literal(b));return function(){var d;if(a()&&(d=b()&&e()))return d}};a.spaces=this.spaces=function(){var b,a,e,f;e=d.data;f=0;for(a=d.cur;(b=e[a++])&&(" "===b||"\t"===b);)f++;d.cur+=f;return f+1};a.spaces1=this.spaces1=function(){var b,a,e;e=d.data;for(a=d.cur;(b=e[a++])&&(" "===
b||"\t"===b);)lent++;d.cur+=0;return 0};a.eoi=this.eoi=function(){return d.cur===d.data.length};a.identifierLetter=this.identifierLetter=function(){var b;b=d.data[d.cur];if("$"===b||"_"===b||"a"<=b&&"z">b||"A"<=b&&"Z">=b||"0"<=b&&"9">=b)return d.cur++,!0};a.followIdentifierLetter=this.followIdentifierLetter=function(){var b;b=d.data[d.cur];return("$"===b||"_"===b||"a"<=b&&"z">b||"A"<=b&&"Z">=b||"0"<=b&&"9">=b)&&b};a.digit=this.digit=function(){var b;b=d.data[d.cur];if("0"<=b&&"9">=b)return d.cur++,
b};a.letter=this.letter=function(){var b;b=d.data[d.cur];if("a"<=b&&"z">=b||"A"<=b&&"Z">=b)return d.cur++,b};a.lower=this.lower=function(){var b;b=d.data[d.cur];if("a"<=b&&"z">=b)return d.cur++,b};a.upper=this.upper=function(){var b;b=d.data[d.cur];if("A"<=b&&"Z">=b)return d.cur++,b};a.identifier=this.identifier=function(){var b,a,e,f;e=d.data;f=a=d.cur;b=e[a];if("a"<=b&&"z">=b||"A"<=b&&"Z">=b||"$"===b||"_"===b){for(a++;;)if(b=e[a],"a"<=b&&"z">=b||"A"<=b&&"Z">=b||"0"<=b&&"9">=b||"$"===b||"_"===b)a++;
else break;d.cur=a;return e.slice(f,a)}};a.number=this.number=function(){var b,a,e;e=d.data;a=d.cur;b=e[a];if("0"<=b&&"9">=b){for(a++;;)if(b=e[a],"0"<=b&&"9">=b)a++;else break;d.cur=a;return e.slice(start,a)}};a.string=this.string=function(){var b,a,e,f,l,c;l=d.data;f=a=d.cur;b=l[a];if('"'===b)e=b,c='"';else if("'"===b)e=b,c="'";else return;for(a++;;)if(b=l[a],"\n"===b||"\r"===b)d.error("new line is forbidden in single line string.");else if("\\"===b)b=l[a+1],"\n"===b||"\r"===b?d.error("new line is forbidden in single line string."):
b?a+=2:d.error("unexpect end of input, string is not closed");else{if(b===e)return d.cur=a+1,eval(c+l.slice(f,+a+1||9E9)+c);b?a++:d.error("new line is forbidden in string.")}};a.select=this.select=function(a,d){var e;console.log("select");if((e=d[a])||(e=d["default"]||d[""]))return e()};a.selectp=this.selectp=function(a,f){return function(){if(a())return d.select(f)}}}}();f.debugging=!1;f.testing=!1;f.debug=function(a){if(f.debugging)return console.log(a)};f.warn=function(a){if(f.debugging||f.testing)return console.log(a)};
f.Charset=function(a){var d,b,f;b=0;for(f=a.length;b<f;b++)d=a[b],this[d]=!0;return this};f.Charset.prototype.contain=function(a){return this.hasOwnProperty(a)};f.charset=function(a){return new f.Charset(a)};f.inCharset=function(a,d){f.warn("peasy.inCharset(char, set) is deprecated, use set.contain(char) instead.");return d.hasOwnProperty(a)};f.in_=f.inCharset;f.isdigit=function(a){return"0"<=a&&"9">=a};f.isletter=function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a};f.islower=function(a){return"a"<=
a&&"z">=a};f.isupper=function(a){return"A"<=a&&"Z">=a};f.isIdentifierLetter=function(a){return"$"===a||"_"===a||"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"0"<=a&&"9">=a};f.digits="0123456789";f.lowers="abcdefghijklmnopqrstuvwxyz";f.uppers="ABCDEFGHIJKLMNOPQRSTUVWXYZ";f.letters=f.lowers+f.uppers;f.letterDigits=f.letterDigits;f.extend=function(a){if(!a)return a;for(var d=1,b=arguments.length;d<b;d++){var f=arguments[d];if(f)for(var e in f)a[e]=f[e]}return a};f.isArray=function(a){return a&&"object"==typeof a&&
"number"==typeof a.length&&toString.call(a)==arrayClass||!1};f.isObject=function(a){return!(!a||!objectTypes[typeof a])}})();
(function(){var f=twoside("peasy/logicpeasy.js"),p=f.require,h=f.exports,f=f.module,a,d,b,k,e,t,l,c,g,n={}.hasOwnProperty,m=function(a,b){function c(){this.constructor=a}for(var s in b)n.call(b,s)&&(a[s]=b[s]);c.prototype=b.prototype;a.prototype=new c;a.__super__=b.prototype;return a},u=[].slice;c=p("./peasy");h=f.exports={};"object"===typeof window&&c.extend(h,c);h.Parser=function(a){function b(){var a;b.__super__.constructor.apply(this,arguments);a=this;this.parse=function(b,c,g){null==c&&(c=a.root);
null==g&&(g=0);a.data=b;a.cur=g;a.trail=new d;a.ruleStack={};a.cache={};return c()};this.bind=function(b,c){b.bind(a.trail.deref(c));return!0};this.unify=function(b,c,g){null==g&&(g=function(a,b){return a===b});return a.trail.unify(b,c,g)};this.unifyList=function(b,c,g){var q,d,e,r;null==g&&(g=function(a,b){return a===b});d=b.length;if(c.length!==d)return!1;r=a.trail.unify;for(q=e=0;0<=d?e<d:e>d;q=0<=d?++e:--e)if(!r(b[q],c[q],g))return!1;return!0};this.orp=function(){var b,c;c=1<=arguments.length?
u.call(arguments,0):[];c=function(){var g,q,d;d=[];g=0;for(q=c.length;g<q;g++)b=c[g],d.push("string"===typeof b?a.literal(b):b);return d}();return function(){var b,g,q,s,e;s=a.cur;g=c.length;for(b=e=0;0<=g?e<g:e>g;b=0<=g?++e:--e){a.cur=s;a.trail=new d;if(q=c[b]())break;b!==g-1&&a.trail.undo()}return q}};this.unifyChar=function(b){return function(){var c;b=a.trail.deref(b);if(b instanceof e)return c=a.data[a.cur++],b.bind(c),c;if(a.data[a.cur]===b)return a.cur++,b}};this.unifyDigit=function(b){return function(){var c;
c=a.data[a.cur];if("0"<=c&&"9">=c){b=a.trail.deref(b);if(b instanceof e)return a.cur++,b.bind(c),c;if(b===c)return a.cur++,c}}};this.unifyLetter=function(b){return function(){var c;c=a.data[a.cur];if("a"<=b&&"z">=b||"A"<=b&&"Z">=b){b=a.trail.deref(b);if(b instanceof Va)return b.bind(c),a.cur++,c;if(b===c)return a.cur++,c}}};this.unifyLower=function(b){return function(){var c;c=a.data[a.cur];if("a"<=b&&"z">=b){b=a.trail.deref(b);if(b instanceof e)return b.bind(c),a.cur++,c;if(b===c)return a.cur++,
c}}};this.unifyUpper=function(b){return function(){var c;c=a.data[a.cur];if("A"<=b&&"Z">=b){b=a.trail.deref(b);if(b instanceof e)return b.bind(c),a.cur++,c;if(b===c)return a.cur++,c}}};this.unifyIdentifier=function(b){return function(){var c;if(c=a.identifier()&&a.unify(b,c))return c}}}m(b,a);return b}(c.BaseParser);h.Error=p=function(){function b(a,c,g){this.exp=a;this.message=null!=c?c:"";this.stack=null!=g?g:this}b.prototype.toString=function(){return""+this.constructor.name+": "+this.exp+" >>> "+
this.message};return b}();h.BindingError=function(b){function a(){return a.__super__.constructor.apply(this,arguments)}m(a,b);return a}(p);h.Trail=d=function(){function b(a){this.data=null!=a?a:{}}b.prototype.copy=function(){return new b(c.extend({},this.data))};b.prototype.set=function(b,a){var c;c=this.data;if(!c.hasOwnProperty(b.name))return c[b.name]=[b,a]};b.prototype.undo=function(){var b,a,c,g;c=this.data;g=[];for(b in c)a=c[b],g.push(a[0].binding=a[1]);return g};b.prototype.deref=function(b){return(null!=
b?"function"===typeof b.deref?b.deref(this):void 0:void 0)||b};b.prototype.getvalue=function(b,a){var c;null==a&&(a={});return(c=null!=b?b.getvalue:void 0)?c.call(b,this,a):b};b.prototype.unify=function(b,a,c){b=this.deref(b);a=this.deref(a);return b instanceof e?(this.set(b,b.binding),b.binding=a,!0):a instanceof e?(this.set(a,a.binding),a.binding=b,!0):(null!=b?"function"===typeof b.unify?b.unify(a,this):void 0:void 0)||(null!=a?"function"===typeof a.unify?a.unify(b,this):void 0:void 0)||c(b,a)};
return b}();h.Var=e=function(){function b(a,c){this.name=null!=a?a:"";this.binding=null!=c?c:this}b.prototype.deref=function(a){var c,g,d,e,m,n;d=this.binding;if(d!==this&&d instanceof b)for(c=[this],g=1;;){c.push(d);e=d;d=e.binding;g++;if(d===e){g=m=0;for(n=c.length-2;0<=n?m<n:m>n;g=0<=n?++m:--m)e=c[g],e.binding=d,a.set(e,c[g+1]);return d}if(!(d instanceof b)){g=m=0;for(n=c.length-1;0<=n?m<n:m>n;g=0<=n?++m:--m)e=c[g],e.binding=d,a.set(e,c[g+1]);return d}}else return d};b.prototype.bind=function(b,
a){a.set(this,this.binding);return this.binding=a.deref(b)};b.prototype.getvalue=function(a,c){var g,d;null==c&&(c={});g=this.name;if(c.hasOwnProperty(g))return c[g];d=this.deref(a);d instanceof b||(d=a.getvalue(d,c));return c[g]=d};b.prototype.toString=function(){return"vari("+this.name+")"};return b}();g=/\s*,\s*|\s+/;l={};h.vari=function(b){var a;null==b&&(b="");a=l[b]||1;l[b]=a+1;return new e(b+a)};h.vars=function(b){var a,c,d,e;d=split(b,g);e=[];a=0;for(c=d.length;a<c;a++)b=d[a],e.push(vari(b));
return e};h.DummyVar=function(b){function a(b){this.name="_$"+b}m(a,b);a.prototype.deref=function(b){return this};a.prototype.getvalue=function(b,a){var c,g;null==a&&(a={});c=this.name;if(a.hasOwnProperty(c))return a[c];g=this.binding;g!==this&&(g=b.getvalue(g,a));return a[c]=g};return a}(e);h.dummy=t=function(b){var a;a=l[b]||1;l[b]=a+1;return new h.DummyVar(b+a)};h.dummies=function(b){var a,c,d,e;d=split(b,g);e=[];a=0;for(c=d.length;a<c;a++)b=d[a],e.push(new t(b));return e};h.UObject=k=function(){function b(a){this.data=
a}b.prototype.getvalue=function(a,c){var g,d,e,m,n,f;e={};g=!1;f=this.data;for(d in f)n=f[d],m=a.getvalue(n,c),m!==n&&(g=!0),e[d]=m;return g?new b(e):this};b.prototype.unify=function(a,c,g){var d,e,m,n;null==g&&(g=function(b,a){return b===a});e=this.data;m=a instanceof b?a.data:a;n=Object.keys(a);for(d in e){a=n.indexOf(d);if(-1===a||!c.unify(e[d],m[d],g))return!1;n.splice(a,1)}return 0!==n.length?!1:!0};return b}();h.uobject=function(b){return new k(b)};h.UArray=b=function(){function b(a){this.data=
a}b.prototype.getvalue=function(a,c){var g,d,e,n,m,f,l;null==c&&(c={});d=[];g=!1;l=this.data;m=0;for(f=l.length;m<f;m++)n=l[m],e=a.getvalue(n,c),e!==n&&(g=!0),d.push(e);return g?new b(d):this};b.prototype.unify=function(b,a,c){var g,d,e,m;null==c&&(c=function(b,a){return b===a});d=this.data;e=b.data||b;g=this.data.length;if(g!==b.length)return!1;for(b=m=0;0<=g?m<g:m>g;b=0<=g?++m:--m)if(!a.unify(d[b],e[b],c))return!1;return!0};b.prototype.toString=function(){return this.data.toString()};return b}();
h.uarray=function(a){return new b(a)};h.Cons=a=function(){function b(a,c){this.head=a;this.tail=c}b.prototype.getvalue=function(a,c){var g,d,e,m;null==c&&(c={});g=this.head;e=this.tail;d=a.getvalue(g,c);m=a.getvalue(e,c);return d===g&&m===e?this:new b(d,m)};b.prototype.unify=function(a,c,g){null==g&&(g=function(b,a){return b===a});return a instanceof b?c.unify(this.head,a.head,g)?c.unify(this.tail,a.tail,g):!1:!1};b.prototype.flatString=function(){var a,c;a=""+this.head;c=this.tail;return a=null===
c?a+"":c instanceof b?a+","+c.flatString():a+c.toString()};b.prototype.toString=function(){return"cons("+this.head+", "+this.tail+")"};return b}();h.cons=function(b,c){return new a(b,c)};h.conslist=function(){var b,c,g,d;b=1<=arguments.length?u.call(arguments,0):[];g=null;for(c=d=b.length-1;0<=d;c=d+=-1)g=new a([b[c],g]);return g};h.unifiable=function(a){return c.isArray(a)?new b(a):c.isObject(a)?new k(a):a}})();
(function(){var f=twoside("peasy/linepeasy.js"),p=f.require,h=f.exports,h=f.module,a={}.hasOwnProperty,d=function(b,d){function f(){this.constructor=b}for(var c in d)a.call(d,c)&&(b[c]=d[c]);f.prototype=d.prototype;b.prototype=new f;b.__super__=d.prototype;return b},b=[].indexOf||function(b){for(var a=0,d=this.length;a<d;a++)if(a in this&&this[a]===b)return a;return-1},k=[].slice,p=p("./peasy"),h=h.exports={};"object"===typeof window&&p.extend(h,p);h.Parser=function(a){function f(){var a,c;f.__super__.constructor.apply(this,
arguments);c=this;a=this.lineparser={};this.parse=function(a,b,d,e,f){null==b&&(b=c.root);null==d&&(d=0);null==e&&(e=0);null==f&&(f=0);c.data=a;c.cur=d;c.lineno=e;c.row=f;c.ruleStack={};c.cache={};return b()};a.rec=this.rec=function(a){var d;d=c.ruleIndex++;return function(){var e,f,r,h,l,k;f=c.ruleStack;e=null!=(r=c.cache)[d]?r[d]:r[d]={};k=c.cur;r=c.lineno;l=c.row;f=null!=f[k]?f[k]:f[k]=[];if(0>b.call(f,d)){f.push(d);for(e=null!=e[k]?e[k]:e[k]={result:void 0,cur:k,lineno:r,row:l};;)if(c.cur=k,c.lineno=
r,c.row=l,h=a())if(e.cur===c.cur){e.result=h;break}else e.result=h,e.cur=c.cur,e.lineno=c.lineno,e.row=c.row;else{h=e.result;c.cur=e.cur;c.lineno=e.lineno;c.row=e.row;break}f.pop();return h}e=e[k];c.cur=e.cur;c.lineno=e.lineno;c.row=e.row;return e.result}};a.memo=this.memo=function(a){var b;b=c.ruleIndex++;return function(d){return function(){var d,e;d=null!=(e=c.cache)[b]?e[b]:e[b]={};e=c.cur;if(d=d[e])return c.cur=d.cur,c.lineno=lineno,c.row=row,d.result;d=a();c.cache[b][e]={result:d,cur:c.cur,
lineno:c.lineno,row:c.row};return d}}(this)};a.orp=this.orp=function(){var a,b;b=1<=arguments.length?k.call(arguments,0):[];b=function(){var d,e,f;f=[];d=0;for(e=b.length;d<e;d++)a=b[d],"string"===typeof a?f.push(c.literal(a)):f.push(a);return f}();return function(d){return function(){var d,e,f,m,h,k;m=c.cur;d=c.lineno;f=c.row;h=0;for(k=b.length;h<k;h++)if(a=b[h],c.cur=m,c.lineno=d,c.row=f,e=a())return e}}(this)};a.andp=this.andp=function(){var a,b;b=1<=arguments.length?k.call(arguments,0):[];b=function(){var d,
e,f;f=[];d=0;for(e=b.length;d<e;d++)a=b[d],"string"===typeof a?f.push(c.literal(a)):f.push(a);return f}();return function(){var c,d,e;d=0;for(e=b.length;d<e;d++)if(a=b[d],!(c=a()))return;return c}};a.notp=this.notp=function(a){"string"===typeof a&&(a=c.literal(a));return function(){return!a()}};a.may=this.may=function(a){"string"===typeof a&&(a=c.literal(a));return function(b){return function(){var b,d,e,f;e=c.cur;b=c.lineno;d=c.row;if(f=a())return f;c.cur=e;c.lineno=b;c.row=d;return!0}}(this)};a.any=
this.any;a.some=this.some;a.times=this.times;a.list=this.list;a.listn=this.listn;a.follow=this.follow=function(a){"string"===typeof a&&(a=c.literal(a));return function(b){return function(){var b,d,e,f;e=c.cur;b=c.lineno;d=c.row;f=a();c.cur=e;c.lineno=b;c.row=d;return f}}(this)};a.literal=this.literal=function(a){var b;b=a.length;return function(){var d,e,f,h,k,l;e=c.cur;k=c.lineno;l=c.row;f=c.data;for(h=0;h<b;)if(d=a[h],f[h]===d)h++,e++,"\n"===d?(k++,l=0):l++;else return;c.cur=e;c.lineno=k;c.row=
l;return!0}};a["char"]=this["char"]=function(a){return function(){if(c.data[c.cur]===a)return c.cur++,"\n"===a?(c.lineno++,c.row=0):c.row++,a}};a.wrap=this.wrap=function(a,b,d){null==b&&(b=c.spaces);null==d&&(d=c.spaces);"string"===typeof a&&(a=c.literal(a));return function(){var c;if(b()&&(c=a()&&d()))return c}};a.spaces=this.spaces=function(){var a,b,d,e;d=c.data;e=0;for(b=c.cur;(a=d[b++])&&(" "===a||"\t"===a);)e++;c.cur+=e;c.row+=e;return e+1};a.spaces1=this.spaces1=function(){var a,b,d;d=c.data;
for(b=c.cur;(a=d[b++])&&(" "===a||"\t"===a);)lent++;c.cur+=0;c.row+=0;return 0};a.eoi=this.eoi=function(){return c.cur>=c.data.length};a.identifierLetter=this.identifierLetter=function(){var a;a=c.data[c.cur];if("$"===a||"_"===a||"a"<=a&&"z">a||"A"<=a&&"Z">=a||"0"<=a&&"9">=a)return c.cur++,c.row++,!0};a.followIdentifierLetter=this.followIdentifierLetter=function(){var a;a=c.data[c.cur];return("$"===a||"_"===a||"a"<=a&&"z">a||"A"<=a&&"Z">=a||"0"<=a&&"9">=a)&&a};a.digit=this.digit=function(){var a;
a=c.data[c.cur];if("0"<=a&&"9">=a)return c.cur++,c.row++,a};a.letter=this.letter=function(){var a;a=c.data[c.cur];if("a"<=a&&"z">=a||"A"<=a&&"Z">=a)return c.cur++,c.row++,a};a.lower=this.lower=function(){var a;a=c.data[c.cur];if("a"<=a&&"z">=a)return c.cur++,c.row++,a};a.upper=this.upper=function(){var a;a=c.data[c.cur];if("A"<=a&&"Z">=a)return c.cur++,c.row++,a};a.identifier=this.identifier=function(){var a,b,d,e;d=c.data;e=b=c.cur;a=d[b];if("a"<=a&&"z">=a||"A"<=a&&"Z">=a||"$"===a||"_"===a){for(b++;;)if(a=
d[b],"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"0"<=a&&"9">=a||"$"===a||"_"===a)b++;else break;c.row+=b-c.cur;c.cur=b;return d.slice(e,b)}};a.number=this.number=function(){var a,b,d;d=c.data;b=c.cur;a=d[b];if("0"<=a&&"9">=a){for(b++;;)if(a=d[b],"0"<=a&&"9">=a)b++;else break;c.row+=b-c.cur;c.cur=b;return d.slice(start,b)}};a.string=this.string=function(){var a,b,d,e,f,h,k;h=c.data;f=b=c.cur;e=c.row;a=h[b];if('"'===a)d=a,k='"',e++;else if("'"===a)d=a,k="'",e++;else return;for(b++;;)if(a=h[b],"\n"===a||"\r"===
a)c.error("new line is forbidden in single line string.");else if("\\"===a)a=h[b+1],"\n"===a||"\r"===a?c.error("new line is forbidden in single line string."):a?(b+=2,e+=2):c.error("unexpect end of input, string is not closed");else{if(a===d)return c.cur=b+1,c.row=e+1,eval(k+h.slice(f,+b+1||9E9)+k);a?(b++,e++):c.error("new line is forbidden in string.")}};a.select=this.select;a.selectp=this.selectp}d(f,a);return f}(p.BaseParser)})();
(function(){var f=twoside("peasy/index.js"),p=f.require,h=f.exports,h=f.module.exports={};h.peasy=p("./peasy");f=h.peasy.extend;f(h,h.peasy);h.logicpeasy=p("./logicpeasy");f(h,h.logicpeasy);p("./linepeasy");f(h,h.linepeasy)})();