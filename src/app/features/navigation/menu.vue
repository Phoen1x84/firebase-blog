<template>    
    <nav class="menu">
        <ul class="menu__list">
            <li v-for="link in links" v-bind:key="link.id" class="menu__list-item">
                <a v-bind:href="link.url" class="menu__link-item">
                    {{link.text}}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script src="./scripts/index.js"></script>
<style lang="scss" src="./scss/_menu.scss"></style>

