<template>
    <transition appear
                :mode="mode"
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut">
        <slot />
    </transition>
</template>

<script>
export default {
    props: {
        mode: {
            default: 'out-in',
        },
    },
};
</script>
