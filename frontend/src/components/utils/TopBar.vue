<template>
    <div class="TopBar">
        <div class="_rotateText" id="_rotate">
            <span id="rotateText">Welcome To Fast Kart...!</span>
        </div>
        <div class="_dropDownBox">
            <div class="dropdown">
                <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img :src="getCountryFlagUrl(countryName)" alt="" class="_countryFlag">
                    {{countryName}}
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                        <span class="dropdown-item" @click="changeCountry">
                            <img src="../../assets/images/country/India.png" alt="" class="_countryFlag">
                            India
                        </span>
                    </li>
                    <li>
                        <span class="dropdown-item" @click="changeCountry">
                            <img src="../../assets/images/country/USA.png" alt="" class="_countryFlag">
                            USA
                        </span>
                    </li>
                    <li>
                        <span class="dropdown-item" @click="changeCountry">
                            <img src="../../assets/images/country/UK.png" alt="" class="_countryFlag">
                            UK
                        </span>
                    </li>
                    <li>
                        <span class="dropdown-item" @click="changeCountry">
                            <img src="../../assets/images/country/Germany.png" alt="" class="_countryFlag">
                            Germany
                        </span>
                    </li>
                    <li>
                        <span class="dropdown-item " @click="changeCountry">
                            <img src="../../assets/images/country/Turki.png" alt="" class="_countryFlag">
                            Turki
                        </span>
                    </li>
                </ul>
            </div>
            <div class="dropdown">
                <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {{currency}}
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><span class="dropdown-item" @click="changeCurrency">₹ RUP</span></li>
                    <li><span class="dropdown-item" @click="changeCurrency">$ DOL</span></li>
                    <li><span class="dropdown-item" @click="changeCurrency">€ EUR</span></li>
                    <li><span class="dropdown-item" @click="changeCurrency">£ YEN</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    
    data() {
        return {
            countryName: 'USA',
            currency: '$ DOL',
        }
    },
    mounted() {
        this.startTextRotations();
    },
    methods: {
        changeCountry(e){
            // console.log(e.target.innerText);
            this.countryName = e.target.innerText.trim();
        },
        getCountryFlagUrl(countryName) {
            var images = require.context('../../assets/images/country/', false, /\.png$/)
            return images('./' + countryName + ".png")
        },
        changeCurrency(e){
            // console.log(e.target.innerText);
            this.currency = e.target.innerText.trim();
        },
        startTextRotations(){
            const arr = [
                "It's shop o'clock somewhere!",
                "Whoever said money can't buy happiness didn't know where to shop.",
                "Shopping cart status: overflowing.",
                "Online shopping makes everything so much easier it's a bad habit of mine.",
                "Keep calm and do shopping online.",
                "If you can't stop thinking about it then buy it."
            ];
            var timeInterval = 0;
            setInterval(() =>{
                // console.log(Math.floor(Math.random()*11)% arr.length)
                const index = Math.floor(Math.random()*11)% arr.length;
                document.getElementById('rotateText').innerHTML = arr[index];
            }, 2000);
        }
    },  
};
</script>
<style>
    .TopBar{
        /* background-color: #0cac8d; */
        background-color: var(--theme-color);
        padding-left: 8%;
        padding-right: 8%;
        display: flex;
        justify-content: space-between;
        height: 40px;
        color: white;
    }

    ._countryFlag{
        width: 20px;
        height: 20px;
        margin-right: 3px;
    }

    .TopBar ._dropDownBox{
        display: flex;
    }
    .TopBar ._dropDownBox button{
        color: white;
        outline: none;
        border: none;
    }

    .TopBar ._rotateText {
        margin-top: 5px;
    }

    .TopBar ._rotateText #_rotate{
        font-size: 18px;
    }

    .dropdown-menu{
        transition: 0.4321s;
    }


    /*
    // This will enable onHover dropdown feature 
    .dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0;
    } */
    
</style>
