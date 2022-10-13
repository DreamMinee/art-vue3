<template>
    <header class="header--mobile container--mobile">
        <div class="header__logo">
            <a href="/" class="header__logo-link">
                <img src="/images/logo.svg" alt="Art" class="header__logo-pic">        
            </a>
        </div>
        <div class="header__date-and-time-mobile">
            <div class="header__start">Start</div>
            <div class="header__date">31 december</div>
        </div>
    </header>
        <main class="main container--mobile">
            <section class="main__header--mobile">
                    <h1 class="main__title--mobile">
                        Outstanding community
                    </h1>
                    <p class="main__subtitle--mobile">
                        for creative people
                    </p>
            </section>
            <section v-if="form.inputForm" class="registration-form--mobile">
                <div class="users-form--mobile">
                    <div class="registration-form__label">
                        <p><span>Incredible benefits</span> for early students and teachers</p>
                    </div>
                    <div class="tabs-wrapper">
                        <div class="tab-student active">
                            I'am student
                        </div>
                        <div class="tab-teacher">
                            I'am teacher 
                        </div>          
                    </div>    
                    <div class="content-wrapper--mobile">
                        <input type="email" v-model="v$.email.$model">
                        <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </div> 
                    <button :disabled="v$.email.$errors.length" @click="submit" class="button__submit" type="button">
                        Get a benefit <img src="/images/present-icon.svg" alt="Present-icon">
                    </button> 
                </div>
                <div class="counter--mobile">
                    <div class="counter__number">
                        Places left {{ 986 - count }}!
                    </div>
                </div>
                
            </section>
            <section v-if="form.successfulForm" class="loading-form--mobile">
                <div class="users-form--mobile">
                    <div class="loading-form__label">
                            <img src="/images/green-icon.svg" alt="green icon">
                        <div class="loading-form__title">
                            Thank you!
                        </div>
                        <div class="loading-form__subtitle">
                            We got your response and will contact to you to give you extra benefits.
                        </div>
                        
                    </div>
                </div>
                <div class="counter--mobile">
                    <div class="counter__number">
                        Places left 986! 
                    </div>
                </div>
                
            </section>
            <section v-if="form.existingForm" class="successful-form--mobile">
                <div class="users-form--mobile">
                    <div class="successful-form__label">
                            <img src="/images/blue-icon.svg" alt="blue icon">
                        <div class="successful-form__title">
                        We are so excited to see you on our platform! 
                    </div>     
                        <div class="successful-form__subtitle">
                        We’ve already got your response and will send you the benefits as soon as possible.
                        </div>
                    </div>
                </div>
                <div class="counter--mobile">
                    <div class="counter__number">
                        Places left 986! 
                    </div>
                </div>
                
            </section>

        </main>
        <footer class="footer--mobile">
            <div class="footer__cards--mobile">
                <div class="footer__card--mobile">
                    <div class="footer__card-1--mobile"></div>             
                </div> 
                <div class="footer__card--mobile">
                    <div class="footer__card-2--mobile"></div> 
                </div>
                <div class="footer__card--mobile">
                    <div class="footer__card-3--mobile"></div> 
                </div>
                <div class="footer__card--mobile">
                    <div class="footer__card-4--mobile"></div>  
                </div>
                <div class="footer__card--mobile">
                    <div class="footer__card-5--mobile"></div> 
                </div>
                <div class="footer__card--mobile">
                    <div class="footer__card-6--mobile"></div>  
                </div>
                <div class="footer__card--mobile">
                    <div class="footer__card-7--mobile"></div> 
                </div>
                <div class="footer__card--mobile">
                    <div class="footer__card-8--mobile"></div>  
                </div>
            </div>
        </footer> 
        <video ref="bgVideo" autoplay muted id="myVideo-mobile">
            
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
.container--mobile {
    max-width: 100%;
    margin: auto 20px;
}
.header--mobile {
    display: flex;
    padding: 10px 0;
    justify-content: space-between;
    align-items: center;
    
}

.header__date-and-time-mobile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    font-family: "Onest Regular", "Arial", "Helvetica", sans-serif; 
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 32px;
    color: #fff;
}

.main__header--mobile {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

.main__title--mobile {
    width: 80%;
    font-weight: 500;
    font-size: 40px;
    line-height: 52px;
    color: #fff;
    margin: 0;
    text-align: center;
}

.main__subtitle--mobile {
    font-size: 16px;
    line-height: 32px;
    color: #fff;
    text-align: center;
    width: 80%;
    font-weight: 400;
    margin: 10px;
}
.registration-form--mobile {
    display: flex;
    justify-content: left;
    background-color: transparent;
    flex-direction: column;
}
.registration-form__label p {
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    
}
.registration-form__label span {
    color: #76B525;
}
.users-form--mobile {
    background:rgba(18, 18, 18, 0.7);
    height: 320px;
    border-radius: 25px 25px 0 0;
    padding: 15px;
}
.loading-form__label {
    display: flex;
    justify-content: left;
    background-color: transparent;
    flex-direction: column;
    width: 100%;
    height: 100%;
 
}
.loading-form__title {
    font-weight: 700;
    font-size: 21px;
    line-height: 27px;
    color: #F8F9F9;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    justify-content: center;
   

    
}
.loading-form__subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #E8EBEB;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    justify-content: center;
}
.successful-form__label {
    display: flex;
    justify-content: left;
    background-color: transparent;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-weight: 700;
    font-size: 21px;
    line-height: 27px;
}

.successful-form__title {
    font-weight: 700;
    font-size: 21px;
    line-height: 27px;
    color: #F8F9F9;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    justify-content: center;
}

.successful-form__subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #E8EBEB;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}

.counter--mobile {
    background: #121212;
    display: flex;
    height: 60px;
    color: #fff;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: "Onest Regular", "Arial", sans-serif;
    flex-direction: column;
    border-radius: 0px 0px 24px 24px; 
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
.content-wrapper--mobile {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem;

}
.content-wrapper--mobile input {
    background-color: transparent;
    border: 2px solid #414141;
    width: 100%;
    height: 56px;
    margin-top: 10px ;
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
.users-form--mobile button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-top: 10px;
    margin-bottom: 15px;
    width: 100%;
    height: 50px;
    border-radius: 8px;
    background-color: #76B525;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    border: 0;
    cursor: pointer;
}
.users-form button:hover {
    background-color:#629223 ;
}
.footer--mobile {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.footer__cards--mobile {
    position: absolute;
    bottom: 0px;
    display: flex;
    width: 100%;
    height: 20vh;
    align-items: flex-end;
    justify-content: flex-start;
    overflow: hidden;

}
.footer__card--mobile {
    position: absolute;
    display: flex;
    margin-left: 0px;
    justify-content: flex-start;
    align-items: flex-end;
}
.footer__card-1--mobile {
    position: absolute;
    width: 140px;
    height: 145px;
    left: -50px;
    background-image: url("/images/redcard-mobile-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;

}
.footer__card-1--mobile:hover {
    transform: scale(1.2)
}
.footer__card-2--mobile {
    left: 0px;
    z-index: 100;
    bottom: -80px;
    position: absolute;
    width: 126px;
    height: 130px;
    background-image: url("/images/digital-mobile-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;

}
.footer__card-2--mobile:hover {
    transform: scale(1.2)
}
.footer__card-3--mobile {
    left: 45px;
    z-index: 80;
    bottom: -60px;
    position: absolute;
    width: 140px;
    height: 155px;
    background-image: url("/images/card3D-mobile-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;   
}
.footer__card-3--mobile:hover {
    transform: scale(1.2)
}
.footer__card-4--mobile {
    left: 120px;
    z-index: 90;
    bottom: -105px;
    position: absolute;
    width: 130px;
    height: 155px;
    background-image: url("/images/painting-mobile-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;   
}
.footer__card-4--mobile:hover {
    transform: scale(1.2)
}
.footer__card-5--mobile {
    left: 160px;
    z-index: 70;
    bottom: -50px;
    position: absolute;
    width: 140px;
    height: 155px;
    background-image: url("/images/art-mobile-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;   

}
.footer__card-5--mobile:hover {
    transform: scale(1.2)
}
.footer__card-6--mobile {
    left: 300px;
    z-index: 100;
    bottom: -70px;
    position: absolute;
    width: 126px;
    height: 130px;
    background-image: url("/images/sculpture-mobile-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;   
}
.footer__card-6--mobile:hover {
    transform: scale(1.2)
}
.footer__card-7--mobile {
    left: 230px;
    z-index: 80;
    bottom: -70px;
    position: absolute;
    width: 140px;
    height: 155px;
    background-image: url("/images/craft-mobile-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;   
}
.footer__card-7--mobile:hover {
    transform: scale(1.2)
}
.footer__card-8--mobile {
    position: absolute;
    left: 370px;
    z-index: 10;
    bottom: -10px;
    width: 126px;
    height: 130px;
    background-image: url("/images/darkcard-mobile-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;   
}
.footer__card-8--mobile:hover {
    transform: scale(1.2)
}

.footer__card--mobile:first-child{
    margin-left: 0;
}

#myVideo-mobile {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    z-index: -100;
    opacity: 0.6;
}

</style>