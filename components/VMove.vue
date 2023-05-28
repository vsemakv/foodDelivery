<template lang="pug">
.test.d-flex-c(:class="{'scrolled': isScrolled}")
    .test__block(ref="block")
        VEntry
</template>

<script>
import { gsap } from 'gsap'
import { mapGetters } from "vuex";
import VEntry from './VEntry.vue'
    export default {
        computed: {
            ...mapGetters({
                isScrolled: "burger/getScroll",
            }),
        },
        components: {
            VEntry,
        },
        mounted() {
            const block = this.$refs.block

            block.addEventListener('mousemove', (event) => {
            const rect = block.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            const mouseX = event.clientX
            const mouseY = event.clientY

            const tx = mouseX - centerX
            const ty = mouseY - centerY

            gsap.to(block, {
                x: tx / 3,
                y: ty / 3,
                rotation: tx / 10,
                duration: 0.3
            })
            })

            block.addEventListener('mouseleave', () => {
            gsap.to(block, {
                x: 0,
                y: 0,
                rotation: 0,
                duration: 0.3
            })
            })
        }
    }
</script>

<style lang="scss" scoped>
@import '~/static/styles/mixin';
.test { 

    position: fixed;
    right: 50%;
    bottom: 24px;
    transform: translateX(50%);
    z-index: 2;
    
    width: 100px;
    height: 100px;
    border-radius: 50%;

    transition: all .3s;

    @include lg { 
        width: 6.944vw;
        height: 6.944vw;
        bottom: 0.694vw;
    }
    &__block { 
        position: relative;
        width: 100px;
        height: 100px;

        @include lg { 
            width: 6.944vw;
            height: 6.944vw;
        }
    }
    
}
.scrolled { 
    transition: all .3s;
    right: 50px;

    @include lg { 
        right: 50%;
        transform: translateX(50%);
    }
}
</style>