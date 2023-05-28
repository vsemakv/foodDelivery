<template lang="pug">
.entry.pointer(:class="{'scrolled': isScrolled, 'remove': isEnd}" @mouseover="over = true" @mouseleave="over = false" ) 
    .entry__content.d-flex-c
        p.entry__content-text(:class="{'scrolled-text': isScrolled, 'over': over, 'remove-text': isEnd}")  Замовити доставку
</template>

<script>
import { mapGetters } from "vuex";
export default { 
    computed: {
        ...mapGetters({
            isScrolled: "burger/getScroll",
            isEnd: "burger/getEnd"
        }),
    },
    data() {
        return {
            over: false,
        }
    },
    
}
</script>

<style lang="scss" scoped>
@import '~/static/styles/mixin';
.entry { 
    position: fixed;
    right: 50%;
    bottom: 24px;
    transform: translateX(50%);
    z-index: 2;
    
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #5A30F0;
    border: 1px solid rgba(255, 255, 255, 0.1);

    transition: all .5s;

    &:hover { 
        @include lg { 
            width: 13.542vw;
            height: 13.542vw;
            bottom: 0.694vw;
        }
    }
    
    @include lg { 
        width: 13.542vw;
        height: 13.542vw;
        bottom: 0.694vw;

        &:hover::after { 
            content: "";
            position: absolute;
            top: -1.875vw;
            left: -1.875vw;
            width: 17.361vw;
            height: 17.361vw;
            border-radius: 50%;
            border: 0.139vw solid rgba($color: rgb(143, 140, 140), $alpha: 0.3);
            z-index: -1;
        }
    }
    &__content { 
        width: 100%;
        height: 100%;

        

        & > p { 
            align-items: center;
            text-align: center;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            color: #FFFFFF;
            font-size: 11px;

            transform:  rotate(-15deg);
            transition: all .7s;

            @include lg { 
                font-weight: 600;
                font-size: 1.250vw;
                line-height: 130%;
            }
        }
    }
}
.scrolled {
    transition: all .7s;
    right: 50px;
    @include lg { 
        width: 12.222vw;
        height: 12.222vw;
        bottom: -3.472vw;
        right: 50%;
        transform: translateX(50%);
    }
}
.scrolled-text  {
    transition: all .7s;
    transform:  rotate(15deg) !important;

    @include lg { 
        transform:  rotate(15deg) !important;
        font-size: 1.111vw !important;
    }
    
}
.remove { 

    @include lg { 
        bottom: -100%;
        width: 6.250vw;
        height: 6.250vw;
        transition: all 1.5s;
    }
    
}
.over { 
    transform: rotate(0) !important;
}
</style>