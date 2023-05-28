<template lang="pug">
    .dropdown(:class="{'open-dropdown': isShowBurger}") 
        .dropdown__switch
            button(:class="{'on-switch': isSwitch}" @click="homeSwitch") Доставка
            button(:class="{'on-switch': !isSwitch}" @click="restSwitch") Самовивіз
        ul.dropdown__nav
            li(v-for="(link, idx) in links" :key="idx").dropdown__nav-link
                n-link(:to="link.route") {{ link.title }}
        .dropdown__number
            a(href="tel:+380674519957").header__number-link +380 67 451 99 57 
            span | 24 / 7
</template>

<script>
import { mapGetters } from "vuex";
    export default {
        computed: {
            ...mapGetters({
                isShowBurger: "burger/getBurger",
                isSwitch: "burger/getSwitch"
            }),
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
.dropdown { 
    position: fixed;
    top: 0%;
    left: 0%;
    z-index: 3;
    height: 0;
    overflow: hidden;
    width: 100%;
    background: #5A30F0;
    transition: height 0.5s;

    margin-top: 60px;
    padding: 0 8px;

    color: #F5F5F5;
    
    display: flex;
    flex-direction: column;

    &__switch { 
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 48px;
        padding: 4px;

        width: fit-content;
        margin: 36px auto;

        transition: all .5s;

        & > button { 
            
            cursor: pointer;
            font-weight: 600;
            font-size: 14px;
            line-height: 110%;
            padding: 8px 12px;
            color: #404040;
            transition: all .5s;
        }
    }
    &__nav { 
        &-link { 
            margin-bottom: 8px;

            & > a { 
                font-size: 26px;
                font-weight: 600;
                color: #F5F5F5;
            }
        }
    }
    &__number { 
        font-size: 26px;
        font-weight: 600;

        margin-top: 34px;
        & > a { 
            color: #F5F5F5;
        }
    }
}
.open-dropdown { 
    transition: height 0.5s;
    height: 100vh;
}
.on-switch { 
    background: #5A30F0;
    border-radius: 34px;
    color: #F5F5F5 !important;
    transition: all .5s;
}
</style>