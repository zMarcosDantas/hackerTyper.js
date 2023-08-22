console.log("[hTyper] Loaded!");

class hTyper {
    constructor(element, config) {
        this.config = {
            chars: "abcdefghijklmnopqrstuvwxyz",
            repetitions: 10,
            delay: 30,
            startDelay: 0,
            looping: false,
            forceUppercase: false,
            hover: true,
            ...config
        };

        this.element = element instanceof HTMLElement ? element : document.querySelector(element);

        if (!this.element) {
            this.throwErr("[hTyper] This element doesn't exist");
        }

        if(!this.element.dataset.hTyper) {
            this.element.dataset.hTyper = (this.forceUppercase) ? this.element.innerText.toUpperCase() : this.element.innerText;
        }

        if(this.config.hover) {
            this.placeHoverEvent();
        } else {
            this.animate();
        }
        
    }

    placeHoverEvent() {
        this.element.addEventListener("mouseover", () => this.animate()); 
    }

    awaiter(time) {
        return new Promise(resolve => {
            setTimeout(resolve, time);
        })
    };

    async animate() {
        await this.awaiter(this.config.startDelay);
        let i = 0;
        const defaultText = this.element.dataset.hTyper;
        const chars = this.config.chars;
        const loopingInterval = setInterval(() => {
            this.element.innerText = defaultText.split("")
            .map((char, j) => {
                if(j < i) {
                    return char;
                }

                if(char == " ") return " "; 
                let result = chars[Math.floor(Math.random() * chars.length)];

                if(this.forceUppercase || char == char.toUpperCase()) return result.toUpperCase();
                else return result;
            })
            .join("");

            if(i >= defaultText.length) {
                clearInterval(loopingInterval);
                if(this.config.looping) this.animate();
            };
            i += 1/this.config.repetitions;
        }, this.config.delay);
    }

    throwErr(err) {
        throw err;
    }
}