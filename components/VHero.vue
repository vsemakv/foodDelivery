<template lang="pug">
section.hero 
    img(src="/images/hero.png", alt="Фонове зображення з їжею" width="100%" height="100%").hero__bg
    .hero__bg-shadow
    .hero__content
        .hero__image
            img(src="/images/hero.png", alt="Фонове зображення з їжею" width="100%" height="100%").hero__food
        .hero__text()
            h1.hero__text-title() Доставка готової їжі в Києві
            p.hero__text-description() Ми пропонуємо доставку їжі прямо до ваших дверей. Насолоджуйтесь смачними стравами без необхідності готувати самостійно.
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '~/static/styles/mixin';
.hero { 
    position: relative;
   
    &__bg { 
        object-fit: cover;
        height: 100vh;

        position: absolute;
        top: 0%;
        left: 0%;

        @include lg { 
            display: none;
        }
        &-shadow { 
            background-color: black;
            opacity: .3;
            position: absolute;
            top: 0%;
            left: 0%;

            height: 100vh;
            width: 100%;

            @include lg { 
                display: none;
            }
        }
    }
    &__content { 
        height: 100vh;
        padding: 0 24px;
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;

        @include lg { 
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            padding: 0;
            align-items: center;
        }
    }
    &__food {
        display: none;
        @include lg { 
            display: block;
        }
    }
    &__text { 
        @include lg { 
            padding: 0 11.111vw;
        }
        &-title { 
            color: white;
            text-shadow: 2px 1px 2px black;
            font-weight: 600;
            font-size: 56px;
            line-height: 110%;
            @include lg { 
                font-weight: 400;
                font-size: 5.278vw;
                line-height: 110%;
                color: #404040;
                text-shadow: none;
            }
        }
        &-description { 
            color: white;
            text-shadow: 1px 1px 1px black;
            font-weight: 500;
            font-size: 18px;
            line-height: 140%;

            @include lg { 
                margin-top: 2.083vw;

                font-weight: 400;
                font-size: 1.250vw;
                line-height: 140%;
                color: #404040;
                text-shadow: none;
            }
        }
    }
    
}
</style>