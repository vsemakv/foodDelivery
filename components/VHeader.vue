<template lang="pug">
header.header.d-flex-btw(:class="{'fixed-header': isScrolled}") 
    .header__logo 
        h1(@click="closeBurger").pointer FoodDeliver
        .header__logo-switch
            button(:class="{'on-switch': isSwitch}" @click="homeSwitch") Доставка
            button(:class="{'on-switch': !isSwitch}" @click="restSwitch") Самовивіз
    nav.header__nav 
        ul.header__nav-links
            li(v-for="(link, idx) in links" :key="idx").header__nav-links-item
                n-link(:to="link.route") {{ link.title }}
    .header__number
        a(href="tel:+380674519957").header__number-link +380 67 451 99 57
        span |  24 / 7
    ul.header__burger.d-flex-c.pointer(@click="openBurger")
        li(:class="{'opened-burger-top': isShowBurger}")
        li(:class="{'opened-burger-center': isShowBurger}")
        li(:class="{'opened-burger-bottom': isShowBurger}")
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            isShowBurger: "burger/getBurger",
            isScrolled: "burger/getScroll",
            isSwitch: "burger/getSwitch",
            isEnd: "burger/getEnd"
        }),
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll);
        this.$store.dispatch("burger/initSwitch");
        
    },
    data() {
        return {
            links: [
                {
                    title: "Заклади",
                    route: "/",
                },
                {
                    title: "Доставка і оплата",
                    route: "/",
                },
                {
                    title: "Акції",
                    route: "/",
                },
                {
                    title: "Про нас",
                    route: "/",
                },
            ],
        }
    },
    methods: {
        openBurger() {
            this.$store.dispatch("burger/toggle");
        },
        closeBurger(){
            this.$store.dispatch("burger/close");
        },
        handleScroll(){
            window.pageYOffset > 0 ? this.$store.commit("burger/scroll") : this.$store.commit("burger/scrollBack")

            if(((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight)) { 
                this.$store.commit("burger/toEndPage")
                console.log(); 
            }else { 
                this.$store.commit("burger/fromEndPage") 
            }
        },
        homeSwitch() { 
            this.$store.commit("burger/switchOn")
        },
        restSwitch() { 
            this.$store.commit("burger/switchOff")
        }
    },
}
</script>

<style lang="scss" scoped>
@import '~/static/styles/mixin';
.header {
    padding: 0 8px;

    width: 100%;
    height: 60px;

    background-color: #5A30F0;

    position: fixed;
    top: 0%;
    left: 0%;
    z-index: 3;

    @include lg { 
        height: 4.861vw;
        padding: 1.111vw 2.083vw 1.111vw 3.472vw;
        background-color: transparent;
        transition: background-color .3s;
    }
    &__logo { 
        @include lg { 
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &-switch { 
            background: #FFFFFF;
            border: 1px solid #E2E8F0;
            border-radius: 48px;
            padding: 4px;

            width: fit-content;

            display: none;

            transition: all .5s;

            @include lg { 
                display: flex;
                border: 0.069vw solid #E2E8F0;
                border-radius: 3.333vw;
                padding: 0.208vw;
            }
            & > button { 
                
                cursor: pointer;
                font-weight: 600;
                font-size: 14px;
                line-height: 110%;
                padding: 8px 12px;
                color: #404040;
                transition: all .5s;

                @include lg { 
                    font-size: 0.972vw;
                    padding: 0.572vw 0.833vw;
                }
            }
        }
        & > h1 { 
            color: #F5F5F5;

            @include lg { 
                font-weight: 700;
                font-size: 1.250vw;
                line-height: 140%;
                color: #404040;

                margin-right: 1.875vw;
            }
        }
    }
    &__nav { 
        @include lg { 
            padding-right: 9.722vw;

        }
        &-links { 
            display: none;
            gap: 32px;

            @include lg { 
                display: flex;
                gap: 2.222vw;
            }

            &-item { 

                & > a { 
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 120%;
                    letter-spacing: 0.2px;
                    color: #404040;
                    position: relative;

                    @include lg { 
                        font-size: 1.111vw;
                        letter-spacing: 0.014vw;
                    }
                    &::after { 
                        position: absolute;
                        display: block;
                        content: "";
                        width: 0%;
                        height: 0.069vw;
                        background-color: #5A30F0;
                        bottom: -0.208vw;
                        right: 0;
                        transition: all 0.3s;
                    }

                    &:hover { 
                        transition: all 0.3s;
                        color: #5A30F0;

                        &::after { 
                            transition: all 0.3s;
                            height: 0.089vw;
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
    &__number { 
        display: none;

        @include lg { 
            display: block;
        }
        & > a { 
            margin-right: 15px;

            font-weight: 600;
            font-size: 16px;
            line-height: 120%;
            letter-spacing: 0.2px;
            color: #404040;
            
            position: relative;

            @include lg { 
                margin-right: 1.042vw;
                font-size: 1.111vw;
                letter-spacing: 0.014vw;
            }
            &::after { 
                position: absolute;
                display: block;
                content: "";
                width: 0%;
                height: 0.069vw;
                background-color: #5A30F0;
                bottom: -0.208vw;
                right: 0;
                transition: all 0.3s;
            }
            &:hover { 
                transition: all 0.3s;
                color: #5A30F0;

                &::after { 
                    transition: all 0.3s;
                    height: 0.089vw;
                    width: 100%;
                }
            }
        }
        & > span { 
            font-weight: 600;
            font-size: 16px;
            line-height: 120%;
            letter-spacing: 0.2px;
            color: #404040;

            @include lg { 
                font-size: 1.111vw;
                letter-spacing: 0.014vw;
            }
        }
        
    }
    &__burger { 
        width: 40px;
        flex-direction: column;

        @include lg { 
            display: none;
        }
        & > li { 
            width: 100%;
            height: 3px;
            background: #F5F5F5;
            border-radius: 5px;
            transition: all 0.3s;
            
            &:nth-child(2){
                margin: 5px 0px;
            }
        }
    }
}
.opened-burger-center { 
    // opacity: 0;
    width: 0px !important;
}
.opened-burger-top { 
    transform: translateY(8px) rotate(-45deg);
    transition: all 0.3s;
}
.opened-burger-bottom { 
    transform: translateY(-8px) rotate(45deg);
    transition: all 0.3s;
}
.fixed-header { 

    @include lg { 
        transition: all .3s;
        background: #FFFFFF;
        box-shadow: 0 0.139vw 0.972vw rgba(0, 0, 0, 0.07);
    }
    
}
.on-switch { 
    background: #5A30F0;
    border-radius: 34px;
    color: #F5F5F5 !important;
    transition: all .5s;

    @include lg { 
        border-radius: 2.361vw;
    }
}
</style>