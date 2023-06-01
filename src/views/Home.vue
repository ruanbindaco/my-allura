<template>
    <div>
        <button @click="login">Login</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                clientId: 'aa881f98bb814ef09cb60b5e5ee9c87a',
                scope: 'user-top-read',
                redirectUrl: 'http://127.0.0.1:5173/my-allura'
            }
        },
        methods: {
            login() {
                location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${this.clientId}&scope=${this.scope}&redirect_uri=${this.redirectUrl}`
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>