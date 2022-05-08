var Data = {
    "category":{
        "Electronics":{
            "icon":"uit:circuit",
            "items":{
                "1": {
                    "image": "ASUSTUF.png",
                    "title": "ASUS TUF Gaming F15 (2021)",
                    "first-price": 74990,
                    "last-price": 54999,
                    "discount": "Sale",
                    "description": "Processor: 10th Gen Intel Core i5-10300H Processor, 2.5 GHz (8MB Cache, up to 4.5 GHz, 4 Cores, 8 Threads)"
                },
                "2": {
                    "image": "Apple-iPad-Pro.jpg",
                    "title": "2021 Apple iPad Pro with Apple M1 chip",
                    "first-price": 198900,
                    "last-price": 179900,
                    "discount": "10% OFF",
                    "description": "Apple M1 chip for next-level performance Brilliant 32.77 cm (12.9-inch) Liquid Retina XDR display with ProMotion, True Tone, and P3 wide color"
                },
                "3": {
                    "image": "boAt-Nirvana.png",
                    "title": "boAt NIRVANAA 751ANC",
                    "first-price": 7990,
                    "last-price": 3499,
                    "discount": "56% OFF",
                    "description": "Active Noise Cancellation feature and elevate the vibe to a whole new level of pleasure with Nirvanaa 751ANC, delivering up to 33dB Hybrid ANC. Battery Time- Stay connected to your playlist for mammoth durations, every day with up to 54 hours of playtime in ANC mode and up to 65 hours in normal playback mode. ASAP Charge- This headphone comes equipped with our ASAP Charge technology that helps it garner 10 hours of playtime in just 10 min of charge."
                }
            }
        },
        "Fashion":{
            "icon":"icon-park-outline:clothes-crew-neck",
            "items":{
                "1": {
                    "image": "mh.jpg",
                    "title": "Money Heist T-Shirt",
                    "first-price": 499,
                    "last-price": 349,
                    "discount": "30% OFF",
                    "description": "Care Instructions: Machine Wash. - Fit Type: Regular Fit. - Material: 100 % Cotton (Bio Washed). - 180 GSM thread count. -  Suitable for Daily Wear."
                }
            }
        },
        "Kitchen":{
            "icon":"fa6-solid:kitchen-set",
            "items":{

            }
        },
        "books":{
            "icon":"ph:books",
            "items":{

            }
        },
        "grocery":{
            "icon":"fluent:food-grains-20-regular",
            "items":{

            }
        }
    }
};


var toastLiveExample = document.getElementById('liveToast')
var toast = new bootstrap.Toast(toastLiveExample)

function AddToCart(){
    toast.show()
}
