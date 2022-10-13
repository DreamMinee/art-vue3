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
            <div v-if="form.inputForm" class="users-form">
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
                    <input type="email" v-model="v$.email.$model">
                    <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                </div>
                <button :disabled="v$.email.$errors.length" @click="submit" class="button__submit"  type="button">
                    Get a benefit <img src="/images/present-icon.svg" alt="Present-icon">
                </button>
            </div>
            <div v-if="form.successfulForm" class="users-form__loading">
                <div class ="users-form-loadingForm">
                    <img src="/images/green-icon.svg" alt="green icon">
                    <div class="users-form__benefit">
                        <div class="users-form__title">
                            Thank you!
                        </div>
                        <div class="users-form__subtitle">
                            We got your response and will contact to you to give you extra benefits.
                        </div>
                    </div>
            </div>
            </div>
            <div v-if="form.existingForm" class="users-form__succsessful">
                <div class="users-form-successfulForm">
                    <img src="/images/blue-icon.svg" alt="blue icon">
                    <div class="users-form__success">
                        <div class="users-form__success-title">
                            We are so excited to see you on our platform!
                        </div>
                        <div class="users-form__success-subtitle">
                            We’ve already got your response and will send you the benefits as soon as possible.
                        </div>
                    </div>
                </div>
            </div>
            <div class="counter">
                <div class="counter__number">
                    {{ 986 - count }}
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
                <div class="footer__card-1">
                    <p>Photograthy</p>
                </div>
            </div>
            <div class="footer__card">
                <div class="footer__card-2">
                    <p>Art</p>
                </div>
            </div>
            <div class="footer__card">
                <div class="footer__card-3">
                    <p>Drawing</p>
                </div>
            </div>
            <div class="footer__card">
                <div class="footer__card-4">
                    <p>Digital</p>
                </div>
            </div>
            <div class="footer__card">
                <div class="footer__card-5">
                    <p>Painting</p>
                </div>
            </div>
            <div class="footer__card">
                <div class="footer__card-6">
                    <p>Design</p>
                </div>
            </div>
            <div class="footer__card">
                <div class="footer__card-7">
                    <p>Craft</p>
                </div>
            </div>
            <div class="footer__card">
                <div class="footer__card-8">
                    <p>Sculpture</p>
                </div>
            </div>
            <div class="footer__card">
                <div class="footer__card-9">
                    <p>3D</p>
                </div>
            </div>
            <div class="footer__card">
                <div class="footer__card-10">
                    <p>Illustration</p>
                </div>
            </div>
        </div>
    </footer>
    <video ref="bgVideo" autoplay muted id="myVideo">
    </video>
</template>
<script>
import {ref, onMounted, computed, reactive} from "vue"
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
export default {
    setup() {
        let count = ref(0);

        const state = reactive({
            email: '',
        })

        const rules = computed(() => {
            const localRules = {
                email: {
                    required: helpers.withMessage("The form must be filled in", required),
                    email: helpers.withMessage("The form is filled incorrectly", email),
                },
            };

            return localRules;
        });

        const v$ = useVuelidate(rules, state);

        const form = reactive({
            inputForm: true,
            existingForm: false,
            successfulForm: false
        });

        let position = 0;
        let play = 0;
        const submit = () => {
            let formData = new FormData();
            formData.append('email', state.email);
            fetch("/check_email.php", {
                method: 'POST', // or 'PUT'
                body: formData,
            }).then(async response => {
                if(response.ok) {
                    let data = await response.json();
                    if (data.result) {
                        form.inputForm = false;
                        form.existingForm = true;
                    } else {
                        fetch("/add_email.php", {
                            method: 'POST', // or 'PUT'
                            body: formData,
                        }).then(async (response) => {
                            let data = await response.json();
                            console.log(data)
                            form.inputForm = false;
                            form.existingForm = false;
                            form.successfulForm = true;
                        })
                    }
                    fetch("/count_emails.php", {
                        method: 'get', // or 'PUT'
                    }).then(async (response) => {
                        let data = await response.json();
                        count.value = data.result.count;
                    })
                }

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

        let playlist = ["/video/1mobile.mp4",
            "/video/2mobile.mp4",
            "/video/3mobile.mp4",
            "/video/4mobile.mp4",
            "/video/5mobile.mp4",
            "/video/6mobile.mp4",
            "/video/7mobile.mp4",
            "/video/8mobile.mp4",
            "/video/9mobile.mp4"];
        let bgVideo = ref(null);

        onMounted(() => {
            setTimeout(() => {
                bgVideo.value.addEventListener("ended", nextVideo, false);
                bgVideo.value.src = playlist[position];
                bgVideo.value.load();
                bgVideo.value.play();
            }, 1000);

            fetch("/count_emails.php", {
                method: 'get', // or 'PUT'
            }).then(async (response) => {
                let data = await response.json();
                count.value = data.result.count;
            })
        })

        return {
            state, v$,
            email,
            submit,
            bgVideo,
            form,
            count
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

.error-msg {
    color: #fff
}

.users-form, .users-form__loading, .users-form__succsessful{
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
.users-form__loading, .users-form__succsessful {
    height: 220px;
}
.users-form-loadingForm {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 21px;
    line-height: 27px;
    width: 100%;
    height: 100%;
    color: #E8EBEB;
    
    
}
.registration-form__label .users-form__success-title {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    font-weight: 700;
    font-size: 21px;
    line-height: 27px;
    width: 100%;

}
.users-form__subtitle {
    display: flex;
    flex-direction: row;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

}


.users-form-successfulForm {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 21px;
    line-height: 27px;
    width: 100%;
    height: 100%;
    color: #E8EBEB;

}

.users-form__success-title {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 21px;
    line-height: 27px;
    width: 100%;

}
.users-form__success-subtitle {
    display: flex;
    flex-direction: row;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
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
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem;
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
    align-content: flex-end;
    position: fixed;
    bottom: 0;
    width: 100%;


}

.footer__cards {
    display: grid;
    grid-template-columns: repeat(10, 10vw);
    position: absolute;
    height: 30vh;
    bottom: 0px;
    margin-bottom: -15vh;


}

.footer__card {
    display: flex;
    height: 100%;
    width: 10vw;
    position: relative;
    margin-left: 0px;
    justify-content: space-between;

}
.footer__card p {
    margin: 2rem;
}
.footer__card-2 {
    margin: 1.5rem;
}
.footer__card:first-child {
    margin-left: 0;
}

.footer__card-1 {
    z-index: 120;
    width: 100%;
    height: 100%;
    background: url("/images/photography.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    border-radius: 16px;
    transform: rotate(7.01deg);
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
}
.footer__card-1:hover {
    margin-top: -10%;

}
.footer__card-2 {
    position: absolute;
    z-index: 90;
    width: 100%;
    height: 100%;
    left: -10%;
    background-image: url("/images/painting.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    border-radius: 16px;
    transform: rotate(-9.82deg);
    background: #1B53D6;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    color: #FFFFFF;
}

.footer__card-2:hover {
    margin-top: -10%;

}
.footer__card-3 {
    position: absolute;
    z-index: 130;
    width: 100%;
    height: 100%;
    margin-left: -20%;
    background-image: url("/images/drawing.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    border-radius: 16px;
    transform: rotate(-7.37deg);
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
}
.footer__card-3:hover {
    margin-top: -10%;
}
.footer__card-4 {
    position: absolute;
    z-index: 140;
    width: 110%;
    height: 100%;
    margin-left: -25%;
    background-image: url("/images/painting.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    background: #B5448E;
    border-radius: 24px;
    transform: rotate(6.11deg);
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
}
.footer__card-4:hover {
    margin-top: -10%;
}
.footer__card-5 {
    position: absolute;
    z-index: 150;
    width: 100%;
    height: 100%;
    margin-left: -15%;
    background-size: contain;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    border-radius: 16px;
    transform: rotate(-6.52deg);
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    background: linear-gradient(179.29deg, rgba(0, 0, 0, 0.7) 3.55%, rgba(0, 0, 0, 0) 65.43%), url("/images/painting.svg") no-repeat center;
    color: #fff;
}
.footer__card-5:hover {
    margin-top: -10%;
}

.footer__card-6 {
    position: absolute;
    z-index: 110;
    width: 100%;
    height: 100%;
    margin-left: -10%;
    background-image: url("/images/design.png.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    border-radius: 16px;
    transform: rotate(0.54deg);
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
}

.footer__card-6:hover {
    margin-top: -10%;
}
.footer__card-7 {
    position: absolute;
    z-index: 0;
    width: 120%;
    height: 100%;
    margin-left: -10%;
    background-image: url("/images/painting.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    border-radius: 16px;
    transform: rotate(7.01deg);
    background: #F45E41;
    border-radius: 32px;
    transform: rotate(11.68deg);
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    color: #FFFFFF;
}

.footer__card-7:hover {
    margin-top: -10%;
}
.footer__card-8 {
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    margin-left: 10%;
    background-image: url("/images/sculpture.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    border-radius: 16px;
    transform: rotate(-1.49deg);
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
}

.footer__card-8:hover {
    margin-top: -10%;
}

.footer__card-9 {
    position: absolute;
    z-index: 90;
    width: 100%;
    height: 100%;
    margin-left: 10%;
    background-image: url("/images/card3D.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    border-radius: 32px;
    transform: rotate(4.46deg);
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    color: #FFFFFF;
}

.footer__card-9:hover {
    margin-top: -10%;
}

.footer__card-10 {
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-image: url("/images/painting.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    background: #FFB838;
    border-radius: 24px;
    transform: rotate(10.21deg);
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #121212;
}

.footer__card-10:hover {
    margin-top: -10%;
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