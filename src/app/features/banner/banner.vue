<template>
    <div class="banner" id="banner">
        <div class="banner__inner">
            <h2 class="banner__title">{{title}}</h2>
            <div class="banner__text" v-html="text" />
            <a href="#" class="banner__link" v-for="item in link" v-bind:key="item.id">
                {{item.text}}
            </a>
        </div>
    </div>
</template>

<script src="./scripts/index.js"></script>
<style lang="scss" src="./scss/_banner.scss"></style>

