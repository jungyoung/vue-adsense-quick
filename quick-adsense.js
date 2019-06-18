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
