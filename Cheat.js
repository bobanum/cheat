export default class Cheat {
    static main() {
        window.addEventListener("keydown", e => {
            console.log(this.combinaison);
            var maintenant = new Date().getTime();
            if (maintenant > this.derniereTouche + this.delai) {
                this.reset();
            }
            this.derniereTouche = maintenant;
            if (this.sequence.indexOf(e.key) < 0 || e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) {
                return this.reset();
            }
            if (this.sequence[this.combinaison.length] === e.key) {
                this.combinaison.push(e.key);
                if (this.combinaison.length === this.sequence.length) {
                    return this.victoire();
                }
                return;
            }
            
            if (e.key !== this.sequence[0]) {
                return this.reset();
            }
            this.combinaison.push(e.key);
            do {
                this.combinaison.shift();
            } while (this.combinaison.length > 0 && this.combinaison.toString() !== this.sequence.slice(0, this.combinaison.length).toString());
        });
    }
    static reset() {
        this.combinaison = [];
        this.derniereTouche = 0;
    }
    static victoire() {
        alert("Bravo");
    }
    static init() {
        this.sequence = [
            "ArrowUp", "ArrowUp", 
            "ArrowDown", "ArrowDown", 
            "ArrowLeft", "ArrowRight",
            "ArrowLeft", "ArrowRight",
            "a", "b",
            "Enter",
        ];
        this.delai = 1000;
        this.reset();
        window.addEventListener("load", e => {
            this.main();
        });
    }
}
Cheat.init();