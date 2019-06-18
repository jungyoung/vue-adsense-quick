# vue-adsense-quick
very simple, very  fast, no install   google adsense

1.include google ad js
<pre>
<code>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</code>
</pre>


2.html hard coding kkk~ 
Template literals : https://flaviocopes.com/javascript-template-literals/

use javascript ES5 : https://cdnjs.com/libraries/babel-standalone
<pre>
<code>
<script type="text/babel">
"use strict";
Vue.component('ad-sense', {
    template: `
        <ins
            :class="'adsbygoogle'"
            :style="'display:block'"
            :data-ad-format="format"
            :data-ad-layout-key="layoutKey"
            :data-ad-client="client"
            :data-ad-slot="slot"
        ></ins>
    `,
    props: {
        format : {
            type: String,
            required: true,
            default: 'auto'
        },
        layoutKey : {
            type: String,
            required: false,
            default: ''
        },
        client : {
            type: String,
            required: true,
        },
        slot : {
            type: String,
            required: true,
        }
    },
    mounted() {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
    }
});
</script>
</code>
</pre>

3.use vue component
options (format, layout-key, client, slot)

```html
<ad-sense format="*******" layout-key="" client="ca-pub-**********" slot="********"></ad-sense>
```
