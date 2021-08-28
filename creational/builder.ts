/**
 * Builder Pattern:
 * Allow you to create different flavors of an object while avoiding constructor pollution.
 * 
 * When there could be several flavors of an object, or when there are a lot of steps involved in object creation.
 */
class Sandwich {
    protected size: number;
    protected cheese: boolean;
    protected vegetable: boolean;

    public constructor(builder: SandwichBuilder) {
        this.size = builder.size;
        this.cheese = builder.cheese;
        this.vegetable = builder.vegetable;
    }
}

class SandwichBuilder {
    public size: number;
    public cheese: boolean = false;
    public vegetable: boolean = false;

    public constructor(size: number) {
        this.size = size;
    }

    public addCheese() {
        this.cheese = true;
        return this;
    }

    public addVegetable() {
        this.vegetable = true;
        return this;
    }

    public build(): Sandwich {
        return new Sandwich(this);
    }
}

const sandwich: Sandwich = (new SandwichBuilder(2)).addCheese().addVegetable().build();
console.log('Sandwich:', sandwich);