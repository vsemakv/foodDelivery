<template lang="pug">
section.features    
    .features__content
        ul.features__list.d-flex-c 
            li(v-for="(card, idx) in cards" :key="idx" data-aos="fade-up" :data-aos-delay="idx * 200").features__list-item.d-flex-c.pointer
                p.features__list-item--title {{ card.title  }}
                img.features__list-item--img(:src="card.image", :alt="card.alter")
                .features__list-item--wrapper
                    p.features__list-item--text {{ card.text }}
</template>

<script>
    export default {
        data() {
            return {
                cards: [
                    {
                        title: "Висока якість продукції",
                        image: "/images/check.png",
                        alter: "Зображення галочки",
                        text: "Наша високa якість продуктів гарантує вам високу якість продуктів."
                    },
                    {
                        title: "Різноманітність страв",
                        image: "/images/food.png",
                        alter: "Зображення посуду",
                        text: "Кожна страва, яку ми готуємо, пройшла строгий контроль якості, щоб забезпечити вам найкращий смаковий досвід."
                    },
                    {
                        title: "Швидка доставка",
                        image: "/images/rocket.png",
                        alter: "Зображення ракети",
                        text: "Наша доставка гарантує вам високу якість продуктів. Кожна страва, яку ми готуємо, пройшла строгий контроль якості, щоб забезпечити вам найкращий смаковий досвід."
                    },
                    {
                        title: "Працюємо цілодобово",
                        image: "/images/clock.png",
                        alter: "Зображення годинника",
                        text: "Наша праця цілодобово гарантує вам високу якість продуктів."
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
@import '~/static/styles/mixin';
.features { 
    background-color: #FFFFFF;
    padding: 64px 24px 40px;

    @include lg { 
        padding: 5.069vw 1.667vw 2.778vw;
    }
    &__list { 
        display: flex;
        flex-wrap: wrap;

        @include mid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 16px;
            grid-row-gap: 16px;
            justify-content: center;
            align-items: center;
        }
        @include lg { 
            display: flex;
            flex-direction: row;
            gap: 2.778vw;
        }
        &-item { 
            background: #F3F6FB;
            border-radius: 8px;

            margin-bottom: 16px;
            padding: 20px 40px;

            flex-direction: column;

            min-height: 295px;
            width: 100%;
            max-width: 400px;
            position: relative;

            transition: all .3s;

            overflow: hidden;

            &:hover { 
                transition: all .3s;
            }

            @include mid { 
                margin-bottom: 0;
                max-width: none;
            }
            @include lg { 
                min-height: 20.486vw;
                // padding: 1.389vw 2.778vw;
                border-radius: 0.556vw;
                max-width: 20.833vw;
            }
            &--title { 
                display: block;
                font-weight: 500;
                font-size: 24px;
                line-height: 130%;
                text-align: center;
                color: #404040;

                @include lg { 
                    font-size: 1.667vw;
                }
            }
            &--wrapper{
                position: absolute;
                top: 0%;
                left: 0%;

                background: #5A30F0;
                transition: all .4s;
                min-height: 295px;
                height: 100%;
                width: 0;

                overflow: hidden;

                @include lg { 
                    min-height: 20.486vw;
                    max-width: 20.833vw;
                }
            }
            &--text { 
                min-width: 250px;
                display: block;

                font-weight: 400;
                font-size: 16px;
                line-height: 140%;
                color: #FFFFFF;
                text-align: start;
                padding: 20px 30px;
                width: 300px;

                @include lg { 
                    min-width: 17.361vw;
                    font-size: 1.111vw;
                }
            }
            & > img { 
                width: 190px;
                height: 190px;

                @include lg { 
                    width: 13.194vw;
                    height: 13.194vw;
                }
            }
        }
    }
}

.features__list-item:hover > .features__list-item--img,.features__list-item:hover > .features__list-item--title { 
    transition: all .3s;
    opacity: 0;
}
.features__list-item:hover > .features__list-item--wrapper { 
    padding: 2.083vw;
    width: 100%;
}
</style>