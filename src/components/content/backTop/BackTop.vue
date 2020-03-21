<template>
    <div class="backtop">
        <img src="../../../assets/img/common/top.png" alt="" class="backicon">
    </div>
</template>

<script>

import { Icon } from 'vant';

export default {
    name: 'BackTop',
    components: {
        [Icon.name]: Icon,
    }
}
</script>

<style>
    .backtop {
        position: fixed; 
        bottom: 4rem;
        right: 1rem;
        z-index: 9;
    }

    .backicon {
        height: 3rem;
        width: 3rem;
    }
</style>