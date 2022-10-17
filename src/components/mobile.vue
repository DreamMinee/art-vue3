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
                        <div
                            @click="role = 'student'"
                            class="tab-student"
                            :class="{
                            'active': role === 'student'
                        }"
                        >
                            I'am student
                        </div>
                        <div
                            @click="role = 'teacher'"
                            class="tab-teacher"
                            :class="{
                            'active': role === 'teacher'
                        }"
                        >
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
                    <div class="footer__card-2--mobile">
                        <p>Digital</p>
                    </div>
                </div>
                <div class="footer__card--mobile">
                    <div class="footer__card-3--mobile">
                        <p>3D</p>
                    </div>
                </div>
                <div class="footer__card--mobile">
                    <div class="footer__card-4--mobile">
                        <p>Painting</p>
                    </div>
                </div>
                <div class="footer__card--mobile">
                    <div class="footer__card-5--mobile">
                        <p>Art</p>
                    </div>
                </div>
                <div class="footer__card--mobile">
                    <div class="footer__card-6--mobile">
                        <p>Craft</p>
                    </div>
                </div>
                <div class="footer__card--mobile">
                    <div class="footer__card-7--mobile">
                        <p>Sculpture</p>
                    </div>
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
import { setup } from "./mixSetup";
export default {
    setup,
};
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
    padding: 0px 0;
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
    margin: 0px;
}
.registration-form--mobile {
    display: flex;
    justify-content: left;
    background-color: transparent;
    flex-direction: column;
    margin: 0px;
}
.registration-form__label p {
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 0px;
    margin-top: 0px;
    
}
.registration-form__label span {
    color: #76B525;
}
.users-form--mobile {
    background:rgba(18, 18, 18, 0.7);
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
    cursor: pointer;

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
    cursor: pointer;
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
    padding: 0px;

}
.content-wrapper--mobile input {
    background-color: transparent;
    border: 2px solid #414141;
    width: 100%;
    height: 40px;
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
.button__submit {
    font-family: 'Onest';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    gap: 0.5em;
}
.users-form--mobile button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
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
    flex-wrap: nowrap;
    background-color: transparent;
    justify-content: space-between;
    align-items: flex-end;
    position: fixed;
    bottom: 0px;
    width: 100%;

}

.footer__cards--mobile {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-end;
    justify-content: space-between;
    overflow: hidden;


}
.footer__card--mobile {
    display: flex;
    margin-left: 0px;
    justify-content: center;
    align-items: flex-end;

}
.footer__card--mobile p {
    margin: 1rem;
}
.footer__card-1--mobile {
    position: absolute;
    margin-bottom: -2vh;
    width: 140px;
    height: 168px;
    border-radius: 24px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    background-image: url("/images/redcard-mobile-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    background: #FF1A53;
    border-radius: 24px;
    transform: rotate(19.31deg);

}
.footer__card-1--mobile:hover {
    transform: scale(1.2)
}
.footer__card-2--mobile {
    z-index: 100;
    margin-bottom: -9vh;
    position: absolute;
    width: 106px;
    height: 130px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    background-image: url("/images/digital-mobile-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    background: #7FDD06;
    border-radius: 16px;
    transform: rotate(13.6deg);

}

.footer__card-2--mobile:hover {
    transform: scale(1.2)
    
}
.footer__card-3--mobile {
    z-index: 80;
    margin-bottom: -4vh;
    position: absolute;
    width: 140px;
    height: 168px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
    background-image: url("/images/card3D-mobile-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    background: rgba(18, 18, 18, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    transform: rotate(-9.29deg);
}
.footer__card-3--mobile:hover {
    transform: scale(1.2)
}
.footer__card-4--mobile {
    z-index: 120;
    margin-bottom: -10vh;
    position: absolute;
    width: 130px;
    height: 168px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
    border-radius: 24px;
    background: linear-gradient(179.27deg, rgba(0, 0, 0, 0.7) 3.55%, rgba(0, 0, 0, 0) 65.43%), url("/images/painting-mobile-pic.svg") no-repeat top center;
    background-size: contain;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;

}
.footer__card-4--mobile:hover {
    transform: scale(1.2)
}
.footer__card-5--mobile {
    z-index: 70;
    margin-bottom: -2vh;
    position: absolute;
    width: 140px;
    height: 168px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
    background-image: url("/images/art-mobile-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    background: #1B53D6;
    border-radius: 24px;
    transform: rotate(10deg);

}
.footer__card-5--mobile:hover {
    transform: scale(1.2)
}
.footer__card-6--mobile {
    z-index: 100;
    margin-bottom: -5vh;
    position: absolute;
    width: 140px;
    height: 168px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
    background-image: url("/images/craft-mobile-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    background: #F45E41;
    border-radius: 24px;
    transform: rotate(-3.42deg);
}
.footer__card-6--mobile:hover {
    transform: scale(1.2)
}
.footer__card-7--mobile {
    z-index: 110;
    margin-bottom: -8vh;
    position: absolute;
    width: 106px;
    height: 130px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    background-image: url("/images/sculpture-mobile-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    border-radius: 16px;
    transform: rotate(5.38deg);
}
.footer__card-7--mobile:hover {
    transform: scale(1.2)
}
.footer__card-8--mobile {
    z-index: 10;
    position: absolute;
    width: 140px;
    height: 168px;
    background-image: url("/images/darkcard-mobile-pic.svg");
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    background: rgba(18, 18, 18, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    transform: rotate(-22.3deg);
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