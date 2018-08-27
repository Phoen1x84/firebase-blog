<template>
    <div class="cta-grid" id="cta-grid">
        <div class="cta-grid__inner">
            <div class="cta-card" v-for="card in cards" v-bind:key="card.id">
                <div class="cta-card__content">
                    <h2 class="cta-card__title">
                        {{card.title}}
                    </h2>
                    <p>{{card.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./scripts/index.js"></script>
<style lang="scss" src="./scss/_cta-grid.scss"></style>
<style lang="scss" src="./scss/_cta-card.scss"></style>