<template>
    <header class="header container">
        <div class="header__logo">
            <a href="/" class="header__logo-link">
                <img src="/images/logo.svg" alt="Art" class="header__logo-pic">
            </a>
        </div>
        <div class="header__date-and-time">
            <img src="/images/clock-icon.svg" alt="Clock">
            <div class="header__start">Start</div>
            <div сlass="header__date">31 december 2022</div>
            <div class="header__time">3m 4d 02:08:54</div>
        </div>
    </header>
    <main class="main container">
        <section class="main__header">
            <h1 class="main__title line-text anim-typewriter">
                Inspired Teachers
            </h1>
            <p class="main__subtitle">
                for creative people
            </p>
        </section>
        <section class="registration-form">
            <div class="users-form">
                <div class="registration-form__label">
                    Incredible benefits for early students and teachers
                </div>
                <div class="tabs-wrapper">
                    <div class="tab-student active">
                        I'am student
                    </div>
                    <div class="tab-teacher">
                        I'am teacher
                    </div>
                </div>
                <div class="content-wrapper">
                    <input v-model="email" type="email" placeholder="Email">
                </div>
                <button @click="submit" class="button__submit"  type="button">
                    Get a benefit <img src="/images/present-icon.svg" alt="Present-icon">
                </button>
            </div>
            <div class="counter">
                <div class="counter__number">
                    986
                </div>
                <div class="counter__label">
                    Places left
                </div>
            </div>
        </section>
    </main>
    <footer class="footer">
        <div class="footer__cards">
            <div class="footer__card">
                <div class="footer__card-1"></div>
            </div>
            <div class="footer__card">
                <div class="footer__card-2"></div>
            </div>
            <div class="footer__card">
                <div class="footer__card-3"></div>
            </div>
            <div class="footer__card">
                <div class="footer__card-4"></div>
            </div>
            <div class="footer__card">
                <div class="footer__card-5"></div>
            </div>
            <div class="footer__card">
                <div class="footer__card-6"></div>
            </div>
            <div class="footer__card">
                <div class="footer__card-7"></div>
            </div>
            <div class="footer__card">
                <div class="footer__card-8"></div>
            </div>
            <div class="footer__card">
                <div class="footer__card-9"></div>
            </div>
            <div class="footer__card">
                <div class="footer__card-10"></div>
            </div>
        </div>
    </footer>
    <video ref="bgVideo" autoplay muted id="myVideo">
    </video>
</template>
<script>
import {ref, onMounted} from "vue"
export default {
    setup() {
        let email = ref("");
        let position = 0;
        let play = 0;
        const submit = () => {
            const key = "6ubxs3fxzhbb7zndd14a6toefmsz84j6q4m6fwfy";
            const listId = "20647625";
            const domain = `https://api.unisender.com/ru/api`;
            const addEmail = `/subscribe?format=json&api_key=${key}&list_ids=${listId}&fields[email]=${email.value}&double_optin=3`;
            const checkEmail = `/isContactInLists?api_key=${key}&email=${email.value}&list_ids=${listId}&condition=and`;
            fetch(domain + checkEmail)
                .then((response) => {
                    console.log(response.json())
                })
        }
        let nextVideo = () => {
            position++;
            if (position >= playlist.length) {
                position = 0;
            }
            bgVideo.value.src = playlist[position];
            bgVideo.value.load();
            bgVideo.value.play();
        };

        let playlist = ["/video/1.mp4",
            "/video/2.mp4",
            "/video/3.mp4",
            "/video/4.mp4",
            "/video/5.mp4",
            "/video/6.mp4",
            "/video/7.mp4",
            "/video/8.mp4",
            "/video/9.mp4"];
        let bgVideo = ref(null);

        onMounted(() => {
            setTimeout(() => {
                bgVideo.value.addEventListener("ended", nextVideo, false);
                bgVideo.value.src = playlist[position];
                bgVideo.value.load();
                bgVideo.value.play();
            }, 1000);
        })

        return {
            email,
            submit,
            bgVideo
        }
    }
}

</script>
<style>
@font-face {
    font-family: "Onest Regular";
    src: local("Onest Regular"),
    url("/fonts/OnestRegular1602-hint.woff");
    font-weight: 400;
    font-display: swap;
    font-style: normal;
}

@font-face {
    font-family: "Onest Medium";
    src: local("Onest Medium"),
    url("/fonts/OnestMedium1602-hint.woff");
    font-weight: 400;
    font-display: swap;
}

@font-face {
    font-family: "Onest Bold";
    src: local("Onest Bold"),
    url("/fonts/OnestBold1602-hint.woff");
    font-weight: 400;
    font-display: swap;
}

@font-face {
    font-family: "Onest Thin";
    src: local("Onest Thin"),
    url("/fonts/OnestThin1602-hint.woff");
    font-weight: 400;
    font-display: swap;
}

body {
    background-color: #121212;
    font-family: "Onest Regular", "Arial", sans-serif;
}

*, *::before, *::after {
    box-sizing: inherit;
}

.container {
    max-width: 1920px;
    margin: auto 296px;
}

.header {
    display: flex;
    padding: 32px 0;
    justify-content: space-between;
    align-items: center;
}

.header__date-and-time {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    font-family: "Onest Regular", "Arial", "Helvetica", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #fff;
}

.header__start {
    font-weight: 500;
}

.main__header {
    max-width: 696px;
}

.main__title {
    width: 100%;
    font-weight: 500;
    font-size: 80px;
    line-height: 60px;
    color: #fff;
    margin-bottom: 0;
    margin-top: 40px;
}

.main__subtitle {
    font-size: 24px;
    line-height: 32px;
    color: #fff;
    margin-top: -10px;
}

.registration-form {
    display: grid;
    grid-template-columns: 473px 155px;
    background-color: transparent;
    grid-template-rows: 1fr;
    margin-top: 44px;
}

.registration-form__label {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
}

.users-form {
    background: radial-gradient(circle at 100% 100%, rgba(0, 0, 0, 0) 10px, rgba(18, 18, 18, 0.7) 8px),
    radial-gradient(circle at 100% 0%, rgba(0, 0, 0, 0) 10px, rgba(18, 18, 18, 0.7) 8px);
    background-position: bottom right, top right;
    background-size: 150% 50%;
    background-repeat: no-repeat;
    height: 284px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    padding: 20px;
}

.counter {
    height: 100%;
    background: radial-gradient(circle at 0 100%, rgba(0, 0, 0, 0) 10px, #76B525 8px),
    radial-gradient(circle at 0 0, rgba(0, 0, 0, 0) 10px, #76B525 8px);
    background-position: bottom left, top left;
    background-size: 150% 50%;
    background-repeat: no-repeat;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 56px;
    line-height: 64px;
    font-family: "Onest Regular", "Arial", sans-serif;
    flex-direction: column;
}

.counter__label {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.tabs-wrapper {
    width: calc(100% - 8px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #414141;
    padding: 2px;
    border-radius: 6px;
    height: 40px;
}

.tab-student {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    height: 100%;
    width: 50%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}

.tab-teacher {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    height: 100%;
    width: 50%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}

.active {
    background: #76B525;
}

.registration-form__label {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;
}

.content-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;
}

.content-wrapper input {
    background-color: transparent;
    border: 2px solid #414141;
    width: 100%;
    height: 56px;
    margin-top: 10px;
    margin-bottom: 15px;
    padding: 0 15px;
    border-radius: 8px;
    color: #979797;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    font-family: "Onest Regular", "Arial", "Helvetica", sans-serif;
}

.content-wrapper input:focus {
    outline: none !important;
    border-color: #414141;
}

.users-form button {
    display: flex;
    border-radius: 8px;
    width: calc(100% - 32px);
    height: 48px;
    background-color: #76B525;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 8px;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    border: 0;
    cursor: pointer;
}

.users-form button:hover {
    background-color: #629223;
}

.footer {
    display: flex;
    flex-wrap: nowrap;
    background-color: transparent;
    justify-content: center;
    padding: 0;
    align-content: flex-end;
}

.footer__cards {
    display: grid;
    grid-template-columns: repeat(10, 10vw);
    position: absolute;
    height:200px;
    bottom: 0px;
    overflow: hidden;
}

.footer__card {
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    margin-left: 0px;
    justify-content: space-between;
    
}

.footer__card:first-child {
    margin-left: 0;
}

.footer__card-1 {
    z-index: 120;
    width: 100%;
    height: 100%;
    margin-top: 90%;
    background-image: url("/images/photography-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    
}
.footer__card-1:hover {
    margin-top: 80%;

}
.footer__card-2 {
    position: absolute;
    z-index: 110;
    width: 130%;
    height: 100%;
    margin-top: 80px;
    left: -70px;
    background-image: url("/images/art-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
}
.footer__card-2:hover {
    margin-top: 60px;
}
.footer__card-3 {
    position: absolute;
    z-index: 110;
    width: 110%;
    height: 100%;
    margin-top: 60%;
    margin-left: -50%;
    background-image: url("/images/drawing-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
}
.footer__card-3:hover {
    margin-top: 50%;
}
.footer__card-4 {
    position: absolute;
    z-index: 110;
    width: 110%;
    height: 100%;
    margin-left: -65%;
    margin-top: 80%;
    left: 10px;
    background-image: url("/images/digital-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
}
.footer__card-4:hover {
    margin-top: 70%;
}
.footer__card-5 {
    position: absolute;
    z-index: 110;
    width: 160%;
    margin-top: 40%;
    margin-left: -65%;
    height: 100%;
    background-image: url("/images/painting-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
}
.footer__card-5:hover {
    margin-top: 30%;
}

.footer__card-6 {
    position: absolute;
    z-index: 110;
    width: 130%;
    height: 100%;
    margin-top: 70%;
    margin-left: -20%;
    background-image: url("/images/design-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
}

.footer__card-6:hover {
    margin-top: 60%;
}
.footer__card-7 {
    position: absolute;
    z-index: 0;
    width: 150%;
    height: 100%;
    margin-top: 50%;
    margin-left: -20%;
    background-image: url("/images/craft-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
}

.footer__card-7:hover {
    margin-top: 40%;
}
.footer__card-8 {
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    margin-top: 85%;
    margin-left: 10%;
    background-image: url("/images/sculpture-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
}

.footer__card-8:hover {
    margin-top: 75%;
}

.footer__card-9 {
    position: absolute;
    z-index: 90;
    width: 150%;
    height: 100%;
    margin-top: 50%;
    margin-left: -10%;
    background-image: url("/images/card3D-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
}

.footer__card-9:hover {
    margin-top: 40%;
}

.footer__card-10 {
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    margin-top: 70%;
    background-image: url("/images/illustration-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
}

.footer__card-10:hover {
    margin-top: 60%;
}
#myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -100;
    opacity: 0.6;
}   

.anim-typewriter {
    animation: typewriter 3s steps(44) 1s 1 normal both,
    blinkTextCursor 500ms steps(44) infinite normal;
}

@keyframes typewriter {
    from {
        width: 0;
    }
    to {
        width: 670px;
    }
}

@keyframes blinkTextCursor {
    from {
        border-right-color: rgba(255, 255, 255, .75);
    }
    to {
        border-right-color: transparent;
    }
}

.line-text {
    position: relative;
    border-right: 4px solid rgba(255, 255, 255, .75);
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);
}
</style>